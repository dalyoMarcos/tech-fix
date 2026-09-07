import sys

def update_character_position():
    with open("script.js", "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Update character position and remove bobTween
    old_char_code = """        this.characterGraphic = this.add.sprite(width / 2, height / 2 - 30, this.currentCustomer.gender);
        this.characterGraphic.setFrame(EMOTION_FRAMES.neutral);
        this.characterGraphic.setScale(0.6);

        this.bobTween = this.tweens.add({
            targets: this.characterGraphic,
            y: this.characterGraphic.y - 15,
            duration: 1500,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });"""
        
    new_char_code = """        // Alinha o personagem na parte inferior da tela, ancorado pela base (y=1)
        this.characterGraphic = this.add.sprite(width / 2, height, this.currentCustomer.gender);
        this.characterGraphic.setOrigin(0.5, 1); 
        this.characterGraphic.setFrame(EMOTION_FRAMES.neutral);
        this.characterGraphic.setScale(0.7); // Um pouco maior para preencher melhor a tela"""
        
    content = content.replace(old_char_code, new_char_code)

    # 2. Safely remove bobTween.stop() from handleChoice
    content = content.replace("this.bobTween.stop();", "")
    
    with open("script.js", "w", encoding="utf-8") as f:
        f.write(content)

if __name__ == "__main__":
    update_character_position()
