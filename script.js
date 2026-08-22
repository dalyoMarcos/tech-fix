// --- Phaser Scenes ---

// Mapping emotions to spritesheet frames based on a 2x2 grid
// 0: Top-Left (Neutral), 1: Top-Right (Happy)
// 2: Bottom-Left (Angry), 3: Bottom-Right (Sad)
const EMOTION_FRAMES = {
    neutral: 0,
    happy: 1,
    angry: 2,
    sad: 3
};

class BootScene extends Phaser.Scene {
    constructor() { super('BootScene'); }

    preload() {
        this.load.image('shop_bg', ASSET_SHOP_BG);
        this.load.spritesheet('male', ASSET_MALE, { frameWidth: 512, frameHeight: 512 });
        this.load.spritesheet('female', ASSET_FEMALE, { frameWidth: 512, frameHeight: 512 });
    }

    create() {
        this.scene.start('MenuScene');
    }
}

class MenuScene extends Phaser.Scene {
    constructor() { super('MenuScene'); }

    create() {
        const { width, height } = this.scale;
        this.cameras.main.setBackgroundColor('#000000');

        this.add.text(width / 2, height / 2 - 100, 'TECH FIX SIMULATOR', {
            fontFamily: 'VT323', fontSize: '60px', color: '#33ff33'
        }).setOrigin(0.5);

        this.add.text(width / 2, height / 2, 'Sua assistência técnica duvidosa', {
            fontFamily: 'VT323', fontSize: '24px', color: '#ffffff'
        }).setOrigin(0.5);

        const btnRect = this.add.rectangle(width / 2, height / 2 + 100, 250, 60, 0x333344)
            .setStrokeStyle(2, 0x4a4a59).setInteractive({ useHandCursor: true });

        const btnText = this.add.text(width / 2, height / 2 + 100, 'ABRIR A LOJA', {
            fontFamily: 'VT323', fontSize: '24px', color: '#ffffff'
        }).setOrigin(0.5);

        btnRect.on('pointerover', () => {
            btnRect.setFillStyle(0x444455);
            btnRect.setStrokeStyle(2, 0x33ff33);
            btnText.setColor('#33ff33');
        });
        btnRect.on('pointerout', () => {
            btnRect.setFillStyle(0x333344);
            btnRect.setStrokeStyle(2, 0x4a4a59);
            btnText.setColor('#ffffff');
        });
        btnRect.on('pointerdown', () => {
            const shuffled = Phaser.Utils.Array.Shuffle([...gameData]);
            const todaysCustomers = shuffled.slice(0, 7);
            this.scene.start('GameScene', { money: 100, reputation: 50, customerIndex: 0, todaysCustomers });
        });
    }
}

class GameScene extends Phaser.Scene {
    constructor() { super('GameScene'); }

    init(data) {
        this.money = data.money;
        this.reputation = data.reputation;
        this.customerIndex = data.customerIndex;
        this.todaysCustomers = data.todaysCustomers;
        this.currentCustomer = this.todaysCustomers[this.customerIndex];
        this.waitingForNext = false;
    }

    create() {
        const { width, height } = this.scale;

        const bg = this.add.image(0, 0, 'shop_bg').setOrigin(0);
        bg.setDisplaySize(width, height);
        bg.setAlpha(1);

        this.add.rectangle(0, 0, width, 50, 0x2b2b36).setOrigin(0).setStrokeStyle(4, 0x4a4a59);

        this.moneyText = this.add.text(20, 10, `💰 $${this.money}`, {
            fontFamily: 'VT323', fontSize: '24px', color: '#ffff55'
        });
        
        this.counterText = this.add.text(width / 2, 10, `Cliente: ${this.customerIndex + 1}/7`, {
            fontFamily: 'VT323', fontSize: '24px', color: '#ffffff'
        }).setOrigin(0.5, 0);

        this.repText = this.add.text(width - 20, 10, `⭐ Rep: ${this.reputation}`, {
            fontFamily: 'VT323', fontSize: '24px', color: '#ffff55'
        }).setOrigin(1, 0);

        // Draw the Stardew Valley style Sprite
        this.characterGraphic = this.add.sprite(width / 2, height / 2 - 30, this.currentCustomer.gender);
        this.characterGraphic.setFrame(EMOTION_FRAMES.neutral);
        this.characterGraphic.setScale(0.6); // Scale down the 512x512 image

        this.bobTween = this.tweens.add({
            targets: this.characterGraphic,
            y: this.characterGraphic.y - 15,
            duration: 1500,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });

        this.add.rectangle(20, height - 250, width - 40, 100, 0x000000).setOrigin(0).setAlpha(0.85).setStrokeStyle(4, 0xffffff);
        
        this.add.text(30, height - 240, this.currentCustomer.name, {
            fontFamily: 'VT323', fontSize: '20px', color: '#ff0055'
        });

        this.dialogueText = this.add.text(30, height - 210, this.currentCustomer.dialogue, {
            fontFamily: 'VT323', fontSize: '22px', color: '#ffffff', wordWrap: { width: width - 60 }
        });

        this.optionsContainer = this.add.container(0, height - 130);
        
        const optionWidth = (width - 60) / 2;
        const optionHeight = 50;

        this.currentCustomer.options.forEach((opt, index) => {
            const col = index % 2;
            const row = Math.floor(index / 2);
            
            const x = 20 + col * (optionWidth + 20);
            const y = row * (optionHeight + 10);

            const btnRect = this.add.rectangle(x, y, optionWidth, optionHeight, 0x000000)
                .setOrigin(0).setAlpha(0.9).setStrokeStyle(2, 0x4a4a59).setInteractive({ useHandCursor: true });

            const btnText = this.add.text(x + 10, y + 10, `${index + 1}. ${opt.text}`, {
                fontFamily: 'VT323', fontSize: '18px', color: '#ffffff', wordWrap: { width: optionWidth - 20 }
            });

            btnRect.on('pointerover', () => {
                if (this.waitingForNext) return;
                btnRect.setFillStyle(0x333333);
                btnRect.setStrokeStyle(2, 0x33ff33);
                btnText.setColor('#33ff33');
            });
            btnRect.on('pointerout', () => {
                if (this.waitingForNext) return;
                btnRect.setFillStyle(0x000000);
                btnRect.setStrokeStyle(2, 0x4a4a59);
                btnText.setColor('#ffffff');
            });
            btnRect.on('pointerdown', () => {
                if (this.waitingForNext) return;
                this.handleChoice(opt);
            });

            this.optionsContainer.add([btnRect, btnText]);
        });
    }

    handleChoice(option) {
        this.waitingForNext = true;
        this.optionsContainer.setVisible(false);

        this.money += option.moneyChange;
        this.reputation += option.repChange;

        this.moneyText.setText(`💰 $${this.money}`);
        this.repText.setText(`⭐ Rep: ${this.reputation}`);
        this.dialogueText.setText(option.outcomeText);

        // Update emotion frame on the Stardew Valley sprite!
        this.characterGraphic.setFrame(EMOTION_FRAMES[option.emotion]);

        if (option.emotion === 'angry') {
            this.cameras.main.shake(300, 0.015);
            this.bobTween.stop();
            this.tweens.add({
                targets: this.characterGraphic,
                y: this.characterGraphic.y - 15,
                duration: 100,
                yoyo: true,
                repeat: -1
            });
        } else if (option.emotion === 'sad') {
            this.bobTween.stop();
            this.tweens.add({
                targets: this.characterGraphic,
                y: this.characterGraphic.y + 80,
                alpha: 0,
                duration: 2500,
                ease: 'Power2'
            });
        } else if (option.emotion === 'happy') {
            this.bobTween.stop();
            this.tweens.add({
                targets: this.characterGraphic,
                y: this.characterGraphic.y - 30,
                duration: 300,
                yoyo: true,
                repeat: -1,
                ease: 'Sine.easeInOut'
            });
        }

        this.time.delayedCall(4000, () => {
            if (this.reputation <= 0 || this.money <= -100) {
                this.scene.start('GameOverScene', { money: this.money, reputation: this.reputation });
                return;
            }
            if (this.customerIndex + 1 < this.todaysCustomers.length) {
                this.scene.restart({ 
                    money: this.money, 
                    reputation: this.reputation, 
                    customerIndex: this.customerIndex + 1,
                    todaysCustomers: this.todaysCustomers
                });
            } else {
                this.scene.start('GameOverScene', { money: this.money, reputation: this.reputation });
            }
        });
    }
}

class GameOverScene extends Phaser.Scene {
    constructor() { super('GameOverScene'); }

    init(data) {
        this.finalMoney = data.money;
        this.finalReputation = data.reputation;
    }

    create() {
        const { width, height } = this.scale;
        this.cameras.main.setBackgroundColor('#000000');

        this.add.text(width / 2, height / 2 - 100, 'FIM DE EXPEDIENTE', {
            fontFamily: 'VT323', fontSize: '60px', color: '#33ff33'
        }).setOrigin(0.5);

        this.add.text(width / 2, height / 2, `Dinheiro final: $${this.finalMoney}`, {
            fontFamily: 'VT323', fontSize: '24px', color: '#ffffff'
        }).setOrigin(0.5);

        const repMsg = this.finalReputation > 0 ? this.finalReputation.toString() : 'Falência';
        this.add.text(width / 2, height / 2 + 40, `Reputação: ${repMsg}`, {
            fontFamily: 'VT323', fontSize: '24px', color: '#ffffff'
        }).setOrigin(0.5);

        const btnRect = this.add.rectangle(width / 2, height / 2 + 120, 200, 60, 0x333344)
            .setStrokeStyle(2, 0x4a4a59).setInteractive({ useHandCursor: true });

        const btnText = this.add.text(width / 2, height / 2 + 120, 'NOVO DIA', {
            fontFamily: 'VT323', fontSize: '24px', color: '#ffffff'
        }).setOrigin(0.5);

        btnRect.on('pointerover', () => {
            btnRect.setFillStyle(0x444455);
            btnRect.setStrokeStyle(2, 0x33ff33);
            btnText.setColor('#33ff33');
        });
        btnRect.on('pointerout', () => {
            btnRect.setFillStyle(0x333344);
            btnRect.setStrokeStyle(2, 0x4a4a59);
            btnText.setColor('#ffffff');
        });
        btnRect.on('pointerdown', () => {
            this.scene.start('MenuScene');
        });
    }
}

// --- Game Initialization ---
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [BootScene, MenuScene, GameScene, GameOverScene]
};

const game = new Phaser.Game(config);
