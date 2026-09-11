import re
import random

def parse_q3():
    with open('q3_questions.txt', 'r', encoding='utf-8') as f:
        q_content = f.read()
    with open('q3_answers.txt', 'r', encoding='utf-8') as f:
        a_content = f.read()
        
    # parse answers
    answers = {}
    for line in a_content.strip().split('\n'):
        match = re.match(r'(\d+)\.\s+([A-E])\)\s+.*?(?:—|-)\s+(.*)', line)
        if match:
            q_num = match.group(1)
            correct_letter = match.group(2)
            justification = match.group(3)
            answers[q_num] = {'correct': correct_letter, 'justification': justification}
            
    # parse questions
    blocks = re.split(r'\n(?=\d+\.\s+)', q_content.strip())
    
    genders = ['male', 'female']
    names_male = ['Luiz', 'Thiago', 'Matheus', 'Técnico Curioso', 'Cliente Exigente', 'Lucas']
    names_female = ['Fernanda', 'Paula', 'Camila', 'Mariana', 'Cliente Preocupada', 'Técnica Aprendiz']
    
    customers = []
    
    for block in blocks:
        block = block.strip()
        if not block: continue
        
        match_q = re.match(r'^(\d+)\.\s+(.*?)(?=\n[A-E]\))', block, re.DOTALL)
        if not match_q:
            continue
            
        q_num = match_q.group(1)
        dialogue = match_q.group(2).replace('\n', ' ').strip()
        
        # remove "O cliente diz:" etc.
        dialogue = re.sub(r'^(O cliente.*?:\s*"?|Um cliente.*?:\s*"?|Cliente:\s*"?|Técnico:\s*"?)', '', dialogue, flags=re.IGNORECASE)
        dialogue = re.sub(r'"$', '', dialogue).strip()
        
        # parse options
        options = {}
        for letter in ['A', 'B', 'C', 'D', 'E']:
            opt_match = re.search(fr'{letter}\)\s*(.*?)(?=\n[A-E]\)|$)', block, re.DOTALL)
            if opt_match:
                options[letter] = opt_match.group(1).replace('\n', ' ').strip()
                
        ans_info = answers.get(q_num)
        if not ans_info:
            print(f"Skipping {q_num}, no answer found.")
            continue
            
        correct_letter = ans_info['correct']
        diagnostic = ans_info['justification']
        
        # We need exactly 4 options. If we have 5, remove one INCORRECT option.
        if len(options) == 5:
            incorrects = [k for k in options.keys() if k != correct_letter]
            to_remove = random.choice(incorrects)
            del options[to_remove]
            
        # mapping broken part
        text_for_mapping = (dialogue + " " + diagnostic).lower()
        if any(w in text_for_mapping for w in ['curto', 'vrm', 'tensão', 'alimentação']):
            brokenPart = 'Placa-Mãe'
        elif any(w in text_for_mapping for w in ['solda', 'smd', 'resistor', 'capacitor']):
            brokenPart = 'Placa-Mãe'
        elif any(w in text_for_mapping for w in ['vídeo', 'gpu', 'vram', 'artefato', 'risco', 'monitor']):
            brokenPart = 'GPU'
        elif any(w in text_for_mapping for w in ['bios']):
            brokenPart = 'Placa-Mãe'
        else:
            brokenPart = 'Placa-Mãe'
            
        gender = random.choice(genders)
        name = random.choice(names_male) if gender == 'male' else random.choice(names_female)
        
        options_array = []
        for letter, text in options.items():
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
                    'moneyChange': random.choice([0, 20]),
                    'repChange': random.choice([-5, -10]),
                    'emotion': random.choice(['angry', 'sad']),
                    'outcomeText': 'Isso não resolveu o problema! O cliente ficou insatisfeito.'
                })
                
        customer = {
            'name': name,
            'gender': gender,
            'dialogue': dialogue,
            'brokenPart': brokenPart,
            'diagnosticText': diagnostic,
            'options': options_array
        }
        customers.append(customer)
        
    return customers

new_customers = parse_q3()

with open('customers.js', 'r', encoding='utf-8') as f:
    content = f.read()

end_idx = content.rfind(']')
if end_idx != -1:
    new_js = ""
    for c in new_customers:
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
    print(f"Added {len(new_customers)} new customers.")
else:
    print("Error finding gameData array end.")
