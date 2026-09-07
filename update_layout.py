import re

def update_ui():
    with open("script.js", "r", encoding="utf-8") as f:
        content = f.read()

    # We will use regex to carefully replace specific parts of buildGameUI to preserve emojis and text.

    # 1. Character scale and position
    content = re.sub(r"this\.characterGraphic = this\.add\.sprite\(width / 2, height, this\.currentCustomer\.gender\);", 
                     "this.characterGraphic = this.add.sprite(width / 2, height - 10, this.currentCustomer.gender);", content)
    content = re.sub(r"this\.characterGraphic\.setScale\([\d\.]+\);", 
                     "this.characterGraphic.setScale(0.8);", content)

    # 2. Dialogue Box
    old_diag_box = r"this\.add\.rectangle\(20, height - 180, width - 40, 80, 0x000000\)\.setOrigin\(0\)"
    new_diag_box = r"const diagWidth = width * 0.82; const diagX = width / 2;\n        this.add.rectangle(diagX, height - 180, diagWidth, 80, 0x000000).setOrigin(0.5, 0)"
    content = re.sub(old_diag_box, new_diag_box, content)

    old_diag_name = r"this\.add\.text\(30, height - 175"
    new_diag_name = r"this.add.text(diagX - diagWidth / 2 + 15, height - 175"
    content = re.sub(old_diag_name, new_diag_name, content)

    old_diag_text = r"this\.dialogueText = this\.add\.text\(30, height - 150"
    new_diag_text = r"this.dialogueText = this.add.text(diagX - diagWidth / 2 + 15, height - 150"
    content = re.sub(old_diag_text, new_diag_text, content)
    
    content = re.sub(r"wordWrap: \{ width: width - 60 \}", "wordWrap: { width: diagWidth - 30 }", content)

    # 3. Actions Container
    content = re.sub(r"const btnWidth = \(width - 60\) / 2;", "const btnWidth = (diagWidth - 20) / 2;", content)
    
    old_wb_btn = r"const workbenchBtn = this\.add\.rectangle\(20, 0"
    new_wb_btn = r"const workbenchBtn = this.add.rectangle(diagX - diagWidth / 2, 0"
    content = re.sub(old_wb_btn, new_wb_btn, content)
    
    old_wb_txt = r"const workbenchText = this\.add\.text\(20 \+ btnWidth/2"
    new_wb_txt = r"const workbenchText = this.add.text(diagX - diagWidth / 2 + btnWidth/2"
    content = re.sub(old_wb_txt, new_wb_txt, content)

    old_diag_btn2 = r"const diagBtn = this\.add\.rectangle\(40 \+ btnWidth, 0"
    new_diag_btn2 = r"const diagBtn = this.add.rectangle(diagX + 10, 0"
    content = re.sub(old_diag_btn2, new_diag_btn2, content)

    old_diag_txt2 = r"const diagText = this\.add\.text\(40 \+ btnWidth \+ btnWidth/2"
    new_diag_txt2 = r"const diagText = this.add.text(diagX + 10 + btnWidth/2"
    content = re.sub(old_diag_txt2, new_diag_txt2, content)

    # 4. Options Container (the 4 answer buttons)
    # const optionWidth = (width - 60) / 2;
    content = re.sub(r"const optionWidth = \(width - 60\) / 2;", "const optionWidth = (diagWidth - 20) / 2;", content)
    
    # const x = (index % 2) * (width / 2) + 20;
    old_opt_x = r"const x = \(index % 2\) \* \(width / 2\) \+ 20;"
    new_opt_x = r"const x = (index % 2) === 0 ? diagX - diagWidth / 2 : diagX + 10;"
    content = re.sub(old_opt_x, new_opt_x, content)
    
    # 5. Top bar adjustments
    # moneyText x=20 is fine, repText x=width-20 is fine, counter width/2 is fine.
    # Loja button width-60 is fine.

    with open("script.js", "w", encoding="utf-8") as f:
        f.write(content)

if __name__ == "__main__":
    update_ui()
