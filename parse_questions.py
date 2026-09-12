import re
import json
import random

with open('pdf_questions.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Split the text by numbers followed by dot e.g., "1. Cliente:"
blocks = re.split(r'\n(?=\d{1,2}\.\s*Cliente:)', text)

new_customers = []
id_counter = 151 # Start IDs from 151 to avoid collision with the 150 questions we added earlier

for idx, block in enumerate(blocks):
    block = block.strip()
    if not block:
        continue
    
    # Extract sections
    # Find "A.", "B.", "C.", "D.", "Letra" or "LETRA"
    try:
        parts = re.split(r'\n([A-D]\.\s*|Letra\s*[A-D][;:]|LETRA\s*[A-D][;:])', block, flags=re.IGNORECASE)
        
        header = parts[0].strip()
        # header contains Cliente and optionally Atendente or Técnico
        
        # Options
        options_dict = {}
        correct_letter = ""
        feedback = ""
        
        i = 1
        while i < len(parts):
            marker = parts[i].strip()
            content = parts[i+1].strip() if i+1 < len(parts) else ""
            
            if marker.upper().startswith("LETRA"):
                # Extract correct letter
                match = re.search(r'LETRA\s*([A-D])', marker, re.IGNORECASE)
                if match:
                    correct_letter = match.group(1).upper()
                feedback = content.strip(')') # some have a closing parenthesis
            else:
                # Option A, B, C, D
                letter = marker[0].upper()
                options_dict[letter] = content
            i += 2
            
        if not correct_letter:
            continue
            
        dialogue = re.sub(r'^\d{1,2}\.\s*Cliente:\s*', '', header).replace('\n', ' ')
        dialogue = dialogue.replace('Atendente:', '\nAtendente:').replace('Técnico:', '\nTécnico:')
        
        opts_list = []
        for letter in ['A', 'B', 'C', 'D']:
            if letter in options_dict:
                is_correct = (letter == correct_letter)
                if is_correct:
                    opts_list.append({
                        "text": options_dict[letter][:60] + "..." if len(options_dict[letter]) > 60 else options_dict[letter],
                        "outcomeText": feedback,
                        "moneyChange": 150,
                        "repChange": 20,
                        "emotion": "happy"
                    })
                else:
                    opts_list.append({
                        "text": options_dict[letter][:60] + "..." if len(options_dict[letter]) > 60 else options_dict[letter],
                        "outcomeText": "Erro na manutenção! " + feedback,
                        "moneyChange": -50,
                        "repChange": -15,
                        "emotion": "angry"
                    })
        
        # Random name
        names = ["Marcos", "Ana", "Carlos", "Fernanda", "Rafael", "Julia", "Pedro", "Beatriz"]
        
        cust = {
            "id": str(id_counter),
            "name": random.choice(names),
            "gender": "male",
            "brokenPart": "Geral",
            "diagnosticText": feedback,
            "dialogue": dialogue,
            "options": opts_list
        }
        new_customers.append(cust)
        id_counter += 1
        
    except Exception as e:
        print(f"Error parsing block {idx}: {e}")

print(f"Parsed {len(new_customers)} questions.")

# Now we need to append them to customers.js
with open('customers.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# We need to insert the stringified objects into the `const gameData = [` array
# We can find the opening bracket of `const gameData = [` and insert right after it.

js_obj_str = ""
for c in new_customers:
    js_obj_str += "    {\n"
    js_obj_str += f'      id: "{c["id"]}", name: "{c["name"]}", gender: "male",\n'
    js_obj_str += f'      brokenPart: "Geral", diagnosticText: {json.dumps(c["diagnosticText"])},\n'
    js_obj_str += f'      dialogue: {json.dumps(c["dialogue"])},\n'
    js_obj_str += "      options: [\n"
    for o in c["options"]:
        js_obj_str += f'        {{ text: {json.dumps(o["text"])}, outcomeText: {json.dumps(o["outcomeText"])}, moneyChange: {o["moneyChange"]}, repChange: {o["repChange"]}, emotion: "{o["emotion"]}" }},\n'
    js_obj_str += "      ]\n"
    js_obj_str += "    },\n"

# Insert
match = re.search(r'const gameData = \[', js_content)
if match:
    insert_pos = match.end()
    new_js_content = js_content[:insert_pos] + "\n" + js_obj_str + js_content[insert_pos:]
    with open('customers.js', 'w', encoding='utf-8') as f:
        f.write(new_js_content)
    print("Successfully appended to customers.js")
else:
    print("Could not find 'const gameData = [' in customers.js")

