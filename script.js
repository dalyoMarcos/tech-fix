// --- Game Data ---
const gameData = [
    {
      id: "1",
      name: "Karen",
      spriteEmoji: "👱‍♀️",
      dialogue: "Meu computador está muito lento! Eu só baixei 15 barras de ferramentas diferentes para o navegador, deveria estar voando!",
      options: [
        { text: "Excluir System32 para liberar espaço", outcomeText: "O computador nunca mais ligou. Ela está processando você.", moneyChange: -50, repChange: -30 },
        { text: "Desinstalar barras de ferramentas e rodar antivírus", outcomeText: "O PC voltou a ficar rápido. Ela ficou chocada.", moneyChange: 100, repChange: 20 },
        { text: "Cobrar por 'Otimização Quântica' e só reiniciar", outcomeText: "Ela pagou caro e achou incrível. Mas volta amanhã...", moneyChange: 200, repChange: -5 },
        { text: "Colocar o PC no arroz", outcomeText: "O arroz secou a pasta térmica e agora o PC ferve.", moneyChange: 0, repChange: -15 }
      ]
    },
    {
      id: "2",
      name: "Enzo",
      spriteEmoji: "👦",
      dialogue: "Mano, meu PC gamer não tá rodando os jogos. A tela tá toda preta, socorro!",
      options: [
        { text: "Trocar placa de vídeo por nova (cobrar caro)", outcomeText: "Funcionou, mas era só o cabo mal encaixado. Ele pagou rindo.", moneyChange: 500, repChange: -10 },
        { text: "Dar um soco no gabinete estilo The Fonz", outcomeText: "Você quebrou o vidro temperado. Enzo está chorando.", moneyChange: -100, repChange: -40 },
        { text: "Verificar cabo de energia e monitor", outcomeText: "Você plugou na tomada. Ele te chamou de bruxo.", moneyChange: 50, repChange: 25 },
        { text: "Instalar mais RGB", outcomeText: "Não consertou, mas ele achou tão bonito que pagou.", moneyChange: 80, repChange: 5 }
      ]
    },
    {
      id: "3",
      name: "Dona Maria",
      spriteEmoji: "👵",
      dialogue: "Meu neto me mandou um vídeo de bom dia no Zap, mas o celular não tem som de jeito nenhum!",
      options: [
        { text: "Aumentar volume no botão lateral", outcomeText: "Era só isso mesmo. Ela te deu um bolo de cenoura.", moneyChange: 20, repChange: 30 },
        { text: "Falar que o Zap quebrou e instalar outro", outcomeText: "Você deletou o histórico dela. Ela chorou.", moneyChange: 10, repChange: -50 },
        { text: "Soprar o alto-falante bem forte", outcomeText: "Sua saliva entrou no celular e pifou a tela.", moneyChange: -150, repChange: -30 },
        { text: "Vender um fone de ouvido superfaturado", outcomeText: "Ela comprou, mas não sabe usar Bluetooth.", moneyChange: 150, repChange: -20 }
      ]
    }
];

// --- Phaser Scenes ---

class BootScene extends Phaser.Scene {
    constructor() { super('BootScene'); }

    preload() {
        this.load.image('shop_bg', 'assets/shop_bg.jpg');
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
            this.scene.start('GameScene', { money: 100, reputation: 50, customerIndex: 0 });
        });
    }
}

class GameScene extends Phaser.Scene {
    constructor() { super('GameScene'); }

    init(data) {
        this.money = data.money;
        this.reputation = data.reputation;
        this.customerIndex = data.customerIndex;
        this.currentCustomer = gameData[this.customerIndex];
        this.waitingForNext = false;
    }

    create() {
        const { width, height } = this.scale;

        const bg = this.add.image(0, 0, 'shop_bg').setOrigin(0);
        bg.setDisplaySize(width, height);
        bg.setAlpha(0.5);

        this.add.rectangle(0, 0, width, 50, 0x2b2b36).setOrigin(0).setStrokeStyle(4, 0x4a4a59);

        this.moneyText = this.add.text(20, 10, `💰 $${this.money}`, {
            fontFamily: 'VT323', fontSize: '24px', color: '#ffff55'
        });
        this.repText = this.add.text(width - 20, 10, `⭐ Rep: ${this.reputation}`, {
            fontFamily: 'VT323', fontSize: '24px', color: '#ffff55'
        }).setOrigin(1, 0);

        const emojiSprite = this.add.text(width / 2, height / 2, this.currentCustomer.spriteEmoji, {
            fontSize: '120px'
        }).setOrigin(0.5);

        this.tweens.add({
            targets: emojiSprite,
            y: (height / 2) - 20,
            duration: 1000,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });

        this.add.rectangle(20, height - 250, width - 40, 100, 0x2b2b36).setOrigin(0).setStrokeStyle(4, 0xffffff);
        
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

            const btnRect = this.add.rectangle(x, y, optionWidth, optionHeight, 0x333344)
                .setOrigin(0).setStrokeStyle(2, 0x4a4a59).setInteractive({ useHandCursor: true });

            const btnText = this.add.text(x + 10, y + 10, `${index + 1}. ${opt.text}`, {
                fontFamily: 'VT323', fontSize: '18px', color: '#ffffff', wordWrap: { width: optionWidth - 20 }
            });

            btnRect.on('pointerover', () => {
                if (this.waitingForNext) return;
                btnRect.setFillStyle(0x444455);
                btnRect.setStrokeStyle(2, 0x33ff33);
                btnText.setColor('#33ff33');
            });
            btnRect.on('pointerout', () => {
                if (this.waitingForNext) return;
                btnRect.setFillStyle(0x333344);
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

        this.time.delayedCall(3000, () => {
            if (this.reputation <= 0 || this.money < -50) {
                this.scene.start('GameOverScene', { money: this.money, reputation: this.reputation });
                return;
            }
            if (this.customerIndex + 1 < gameData.length) {
                this.scene.restart({ money: this.money, reputation: this.reputation, customerIndex: this.customerIndex + 1 });
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
            this.scene.start('GameScene', { money: 100, reputation: 50, customerIndex: 0 });
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
