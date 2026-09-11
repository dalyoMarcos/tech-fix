import re
import json
import random

def parse_questions(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    blocks = [b.strip() for b in content.split('---') if b.strip()]
    customers = []
    
    genders = ['male', 'female']
    names_male = ['João', 'Carlos', 'Marcos', 'Fernando', 'Gamer Furioso', 'Cliente Confuso']
    names_female = ['Maria', 'Ana', 'Beatriz', 'Juliana', 'Cliente Apressada', 'Secretária']
    
    for block in blocks:
        # Regex to capture parts
        # Dialogue: from start to "A) "
        dialogue_match = re.search(r'^(.*?)(?=A\))', block, re.DOTALL | re.IGNORECASE)
        if not dialogue_match:
            continue
        dialogue_raw = dialogue_match.group(1).strip()
        # Clean up the "1. Cliente:" or "1." prefixes
        dialogue = re.sub(r'^\d+\.\s*(Cliente:)?\s*"?', '', dialogue_raw, flags=re.IGNORECASE).strip()
        dialogue = re.sub(r'"$', '', dialogue).strip()
        
        # Options
        opt_a_match = re.search(r'A\)\s*(.*?)(?=B\))', block, re.DOTALL | re.IGNORECASE)
        opt_b_match = re.search(r'B\)\s*(.*?)(?=C\))', block, re.DOTALL | re.IGNORECASE)
        opt_c_match = re.search(r'C\)\s*(.*?)(?=D\))', block, re.DOTALL | re.IGNORECASE)
        opt_d_match = re.search(r'D\)\s*(.*?)(?=Resposta)', block, re.DOTALL | re.IGNORECASE)
        
        if not (opt_a_match and opt_b_match and opt_c_match and opt_d_match):
            continue
            
        opts = {
            'A': opt_a_match.group(1).strip(),
            'B': opt_b_match.group(1).strip(),
            'C': opt_c_match.group(1).strip(),
            'D': opt_d_match.group(1).strip()
        }
        
        # Answer
        ans_match = re.search(r'Resposta(?: correta)?:\s*([A-D])', block, re.IGNORECASE)
        if not ans_match:
            continue
        correct_letter = ans_match.group(1).upper()
        
        # Justification
        just_match = re.search(r'(?:Justificativa|Explicação|Por quê\?):\s*(.*)$', block, re.DOTALL | re.IGNORECASE)
        diagnostic = just_match.group(1).strip() if just_match else 'Problema identificado e resolvido.'
        
        # Keyword mapping for brokenPart
        text_for_mapping = (dialogue + " " + diagnostic).lower()
        if any(w in text_for_mapping for w in ['quente', 'cooler', 'temperatura', 'esquenta']):
            brokenPart = 'CPU'
        elif any(w in text_for_mapping for w in ['energia', 'tomada', 'não liga', 'fonte', 'desliga']):
            brokenPart = 'Fonte'
        elif any(w in text_for_mapping for w in ['monitor', 'tela', 'imagem', 'vídeo', 'artefato']):
            brokenPart = 'Monitor'
        elif any(w in text_for_mapping for w in ['usb', 'pendrive', 'mouse', 'teclado', 'áudio', 'som', 'placa']):
            brokenPart = 'Placa-Mãe'
        elif any(w in text_for_mapping for w in ['vírus', 'lento', 'navegador', 'programa', 'software', 'windows', 'malware']):
            brokenPart = 'Software'
        else:
            brokenPart = 'Software'
            
        gender = random.choice(genders)
        name = random.choice(names_male) if gender == 'male' else random.choice(names_female)
        
        options_array = []
        for letter, text in opts.items():
            text = text.replace('\n', ' ').strip()
            if letter == correct_letter:
                options_array.append({
                    'text': text,
                    'moneyChange': 150,
                    'repChange': 10,
                    'emotion': 'happy',
                    'outcomeText': diagnostic
                })
            else:
                options_array.append({
                    'text': text,
                    'moneyChange': random.choice([0, 20, 50]),
                    'repChange': random.choice([-5, -10, -15]),
                    'emotion': random.choice(['angry', 'sad']),
                    'outcomeText': 'Isso não resolveu o problema! O cliente ficou insatisfeito.'
                })
                
        # Shuffle options so correct answer isn't always A, B, C or D
        # Wait, the PDF already randomized A B C D, but let's keep the exact text.
        # Actually, the user will see 1 2 3 4 in the game.
        
        customer = {
            'name': name,
            'gender': gender,
            'dialogue': dialogue.replace('\n', ' '),
            'brokenPart': brokenPart,
            'diagnosticText': diagnostic.replace('\n', ' '),
            'options': options_array
        }
        customers.append(customer)
    return customers

all_new_customers = parse_questions('q1.txt') + parse_questions('q2.txt')

# Append to customers.js
with open('customers.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the end of the gameData array
# It usually ends with `    }\n];`
end_idx = content.rfind(']')
if end_idx != -1:
    new_js = ""
    for c in all_new_customers:
        new_js += ",\n    {\n"
        new_js += f"        name: {repr(c['name'])},\n"
        new_js += f"        gender: {repr(c['gender'])},\n"
        new_js += f"        dialogue: {repr(c['dialogue'])},\n"
        new_js += f"        brokenPart: {repr(c['brokenPart'])},\n"
        new_js += f"        diagnosticText: {repr(c['diagnosticText'])},\n"
        new_js += "        options: [\n"
        for opt in c['options']:
            new_js += f"            {{ text: {repr(opt['text'])}, moneyChange: {opt['moneyChange']}, repChange: {opt['repChange']}, emotion: '{opt['emotion']}', outcomeText: {repr(opt['outcomeText'])} }},\n"
        new_js += "        ]\n"
        new_js += "    }"
        
    final_content = content[:end_idx] + new_js + "\n];\n"
    with open('customers.js', 'w', encoding='utf-8') as f:
        f.write(final_content)
    print(f"Added {len(all_new_customers)} new customers.")
else:
    print("Could not find end of gameData array.")
