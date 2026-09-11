import re

def update_game_logic():
    with open('script.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # Update BootScene load
    old_boot = r"this\.load\.spritesheet\('male_char', ASSET_MALE, .*?\);\s*this\.load\.spritesheet\('female_char', ASSET_FEMALE, .*?\);"
    new_boot = """this.load.spritesheet('char_1', ASSET_CHAR1, { frameWidth: 256, frameHeight: 256 });
        this.load.spritesheet('char_2', ASSET_CHAR2, { frameWidth: 256, frameHeight: 256 });
        this.load.spritesheet('char_3', ASSET_CHAR3, { frameWidth: 256, frameHeight: 256 });
        this.load.spritesheet('char_4', ASSET_CHAR4, { frameWidth: 256, frameHeight: 256 });"""
    content = re.sub(old_boot, new_boot, content, flags=re.DOTALL)

    # Update MenuScene random spriteId
    old_menu = r"const todaysCustomers = shuffled\.slice\(0, 7\);"
    new_menu = """const todaysCustomers = shuffled.slice(0, 7);
        todaysCustomers.forEach(c => {
            c.spriteId = Phaser.Math.Between(1, 4);
        });"""
    content = content.replace(old_menu, new_menu)

    # Update GameScene buildGameUI
    old_texture = r"const gender = this\.currentCustomer\.gender;.*?const texture = gender === 'male' \? 'male_char' : 'female_char';"
    new_texture = r"const texture = 'char_' + this.currentCustomer.spriteId;"
    content = re.sub(old_texture, new_texture, content, flags=re.DOTALL)

    # Update character scale (since 256x256 is 2x bigger than 128x128)
    old_scale = r"this\.characterGraphic\.setScale\([\d\.]+\);"
    new_scale = r"this.characterGraphic.setScale(0.8);" # Wait, let's keep 0.8, if it's too big they can tell us. Actually let's do 1.0 since we scaled the image to 256x256. 
    # Let me just set scale 0.85
    content = re.sub(old_scale, "this.characterGraphic.setScale(0.85);", content)

    with open('script.js', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    update_game_logic()
