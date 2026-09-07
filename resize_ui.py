import sys
import re

def update_ui_scale():
    with open("script.js", "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Update character scale
    content = content.replace("this.characterGraphic.setScale(1.2);", "this.characterGraphic.setScale(0.95);")

    # 2. Update dialogue box and text
    content = content.replace("this.add.rectangle(20, height - 250, width - 40, 100,", "this.add.rectangle(20, height - 180, width - 40, 80,")
    content = content.replace("this.add.text(30, height - 240, this.currentCustomer.name, {", "this.add.text(30, height - 175, this.currentCustomer.name, {")
    content = content.replace("fontFamily: 'VT323', fontSize: '20px', color: '#ff0055'", "fontFamily: 'VT323', fontSize: '18px', color: '#ff0055'")
    content = content.replace("this.add.text(30, height - 210, this.currentCustomer.dialogue, {", "this.add.text(30, height - 150, this.currentCustomer.dialogue, {")
    content = content.replace("fontFamily: 'VT323', fontSize: '22px', color: '#ffffff', wordWrap: { width: width - 60 }", "fontFamily: 'VT323', fontSize: '20px', color: '#ffffff', wordWrap: { width: width - 60 }")

    # 3. Update actions and options container
    content = content.replace("this.actionsContainer = this.add.container(0, height - 130);", "this.actionsContainer = this.add.container(0, height - 90);")
    content = content.replace("this.optionsContainer = this.add.container(0, height - 130);", "this.optionsContainer = this.add.container(0, height - 90);")

    # 4. Update actions buttons (Levar para bancada, Dar diagnostico)
    content = content.replace("const btnHeight = 60;", "const btnHeight = 50;")
    # (The text inside them uses btnHeight/2 which is fine)
    
    # 5. Update options buttons (the 4 answers)
    content = content.replace("const optionHeight = 50;", "const optionHeight = 40;")
    content = content.replace("const y = row * (optionHeight + 10);", "const y = row * (optionHeight + 5);")
    content = content.replace("btnText = this.add.text(x + 10, y + 10, `${index + 1}. ${opt.text}`, {", "btnText = this.add.text(x + 10, y + 8, `${index + 1}. ${opt.text}`, {")

    with open("script.js", "w", encoding="utf-8") as f:
        f.write(content)

if __name__ == "__main__":
    update_ui_scale()
