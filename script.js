// --- Phaser Scenes ---

const EMOTION_FRAMES = {
    neutral: 0,
    happy: 1,
    angry: 2,
    sad: 3
};

class BootScene extends Phaser.Scene {
    constructor() { super('BootScene'); }
    create() {
        this.scene.start('MenuScene');
    }
}

class MenuScene extends Phaser.Scene {
    constructor() { super('MenuScene'); }
    init(data = {}) {
        // The menu can be opened directly by BootScene, so it must not
        // depend on customer/gameplay data being passed to it.
        this.money = data.money !== undefined ? data.money : 100;
        this.reputation = data.reputation !== undefined ? data.reputation : 50;
    }
    create() {
        const { width, height } = this.scale;
        this.cameras.main.setBackgroundColor('#000000');

        this.add.text(width / 2, height / 2 - 100, 'TECH FIX SIMULATOR', {
            fontFamily: 'VT323', fontSize: '60px', color: '#33ff33'
        }).setOrigin(0.5);

        this.add.text(width / 2, height / 2, 'Sua assistência técnica duvidosa', {
            fontFamily: 'VT323', fontSize: '24px', color: '#ffffff'
        }).setOrigin(0.5);

        if (this.money !== 100 || this.reputation !== 50) {
            this.add.text(width / 2, height / 2 + 40, `Caixa: $${this.money} | Reputação: ${this.reputation}`, {
                fontFamily: 'VT323', fontSize: '20px', color: '#ffff55'
            }).setOrigin(0.5);
        }

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
            this.scene.start('GameScene', { money: this.money, reputation: this.reputation, customerIndex: 0, todaysCustomers });
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
    // Keep image loading out of Phaser's file loader so file:// projects work reliably.
    preload() {}

    loadImageElement(source, fallback) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            let triedFallback = false;

            image.onload = () => resolve(image);
            image.onerror = () => {
                if (!triedFallback && fallback) {
                    triedFallback = true;
                    image.src = fallback;
                } else {
                    reject(new Error(`Não foi possível carregar a imagem: ${fallback || source}`));
                }
            };

            image.src = source;
        });
    }

    async ensureGameTextures() {
        const shopBg = (typeof ASSET_SHOP_BG !== 'undefined' && ASSET_SHOP_BG)
            ? ASSET_SHOP_BG : 'assets/shop_bg.jpg';
        const male = (typeof ASSET_MALE !== 'undefined' && ASSET_MALE)
            ? ASSET_MALE : 'assets/male.png';
        const female = (typeof ASSET_FEMALE !== 'undefined' && ASSET_FEMALE)
            ? ASSET_FEMALE : 'assets/female.png';

        const jobs = [];

        if (!this.textures.exists('shop_bg')) {
            jobs.push(this.loadImageElement(shopBg, 'assets/shop_bg.jpg').then(image => {
                this.textures.addImage('shop_bg', image);
            }));
        }

        if (!this.textures.exists('male')) {
            jobs.push(this.loadImageElement(male, 'assets/male.png').then(image => {
                this.textures.addSpriteSheet('male', image, {
                    frameWidth: 512,
                    frameHeight: 512
                });
            }));
        }

        if (!this.textures.exists('female')) {
            jobs.push(this.loadImageElement(female, 'assets/female.png').then(image => {
                this.textures.addSpriteSheet('female', image, {
                    frameWidth: 512,
                    frameHeight: 512
                });
            }));
        }

        await Promise.all(jobs);
    }

    create() {
        this.ensureGameTextures()
            .then(() => this.buildGameUI())
            .catch(error => {
                console.error('Erro ao carregar as imagens do jogo:', error);
                this.cameras.main.setBackgroundColor('#000000');
                this.add.text(this.scale.width / 2, this.scale.height / 2,
                    'Erro ao carregar as imagens. Veja o Console (F12).', {
                        fontFamily: 'VT323', fontSize: '24px', color: '#ff5555',
                        align: 'center'
                    }).setOrigin(0.5);
            });
    }

    
    updateStats() {
        this.moneyText.setText(`💰 $${this.money}`);
        this.repText.setText(`⭐ Rep: ${this.reputation}`);
    }

    updateBuffIcons() {
        let buffs = "";
        if (this.buffCoffee) buffs += "☕ ";
        if (this.buffExtraLife) buffs += "❤️ ";
        if (this.buffText) this.buffText.setText(buffs);
    }
    buildGameUI() {
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

        this.characterGraphic = this.add.sprite(width / 2, height / 2 - 30, this.currentCustomer.gender);
        this.characterGraphic.setFrame(EMOTION_FRAMES.neutral);
        this.characterGraphic.setScale(0.6);

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

        this.actionsContainer = this.add.container(0, height - 130);
        this.optionsContainer = this.add.container(0, height - 130);
        this.optionsContainer.setVisible(false);

        // --- ACTIONS CONTAINER (Workbench vs Diagnostic) ---
        const btnWidth = (width - 60) / 2;
        const btnHeight = 60;
        
        const workbenchBtn = this.add.rectangle(20, 0, btnWidth, btnHeight, 0x224422)
            .setOrigin(0).setStrokeStyle(2, 0x33ff33).setInteractive({ useHandCursor: true });
        const workbenchText = this.add.text(20 + btnWidth/2, btnHeight/2, '🛠️ Levar para Bancada', {
            fontFamily: 'VT323', fontSize: '22px', color: '#ffffff'
        }).setOrigin(0.5);
        
        const diagBtn = this.add.rectangle(40 + btnWidth, 0, btnWidth, btnHeight, 0x442222)
            .setOrigin(0).setStrokeStyle(2, 0xff3333).setInteractive({ useHandCursor: true });
        const diagText = this.add.text(40 + btnWidth + btnWidth/2, btnHeight/2, '💬 Dar Diagnóstico', {
            fontFamily: 'VT323', fontSize: '22px', color: '#ffffff'
        }).setOrigin(0.5);

        workbenchBtn.on('pointerdown', () => {
            this.scene.start('WorkbenchScene', { 
                money: this.money, 
                reputation: this.reputation, 
                buffCoffee: this.buffCoffee, 
                buffExtraLife: this.buffExtraLife, 
                manualUsed: this.manualUsed, 
                startInDiagnostic: true, 
                customerIndex: this.customerIndex, 
                todaysCustomers: this.todaysCustomers 
            });
        });

        diagBtn.on('pointerdown', () => {
            this.actionsContainer.setVisible(false);
            this.optionsContainer.setVisible(true);
        });

        this.actionsContainer.add([workbenchBtn, workbenchText, diagBtn, diagText]);

        // --- OPTIONS CONTAINER ---
        const optionWidth = (width - 60) / 2;
        const optionHeight = 50;

        
        this.buffText = this.add.text(width / 2, 40, '', { fontFamily: 'VT323', fontSize: '24px', color: '#ffffff' }).setOrigin(0.5);
        this.updateBuffIcons();

        // --- SHOP UI ---
        this.shopBtn = this.add.rectangle(width - 60, 50, 80, 30, 0x333344).setStrokeStyle(2, 0x33ff33).setInteractive({useHandCursor: true});
        this.shopBtnText = this.add.text(width - 60, 50, '🛒 LOJA', { fontFamily: 'VT323', fontSize: '18px', color: '#ffffff' }).setOrigin(0.5);

        this.shopModal = this.add.container(0, 0);
        this.shopModal.setVisible(false);
        this.shopModal.setDepth(100);

        const fullscreenBlocker = this.add.rectangle(width/2, height/2, width, height, 0x000000, 0.7).setInteractive();
        const shopBg = this.add.rectangle(width/2, height/2, 500, 350, 0x11111a).setStrokeStyle(4, 0x33ff33);
        const shopTitle = this.add.text(width/2, height/2 - 140, 'LOJA DE SUPRIMENTOS', { fontFamily: 'VT323', fontSize: '30px', color: '#33ff33' }).setOrigin(0.5);
        
        const closeShopBtn = this.add.rectangle(width/2 + 210, height/2 - 140, 30, 30, 0x552222).setInteractive({useHandCursor: true});
        const closeShopText = this.add.text(width/2 + 210, height/2 - 140, 'X', { fontFamily: 'VT323', fontSize: '20px', color: '#ffffff' }).setOrigin(0.5);
        
        closeShopBtn.on('pointerdown', () => this.shopModal.setVisible(false));
        this.shopModal.add([fullscreenBlocker, shopBg, shopTitle, closeShopBtn, closeShopText]);

        const items = [
            { id: 'coffee', name: 'Café Starbucks', price: 50, desc: 'Dobra o dinheiro da próxima resposta correta.' },
            { id: 'life', name: 'Vida Extra', price: 150, desc: 'Uma segunda chance caso você erre a resposta.' },
            { id: 'manual', name: 'Manual do PC', price: 80, desc: 'Elimina 2 respostas incorretas.' }
        ];

        items.forEach((item, idx) => {
            const y = height/2 - 60 + (idx * 80);
            const btn = this.add.rectangle(width/2 - 150, y, 120, 40, 0x224422).setInteractive({useHandCursor: true}).setStrokeStyle(2, 0x33ff33);
            const nameText = this.add.text(width/2 - 150, y, `Comprar ($${item.price})`, { fontFamily: 'VT323', fontSize: '16px', color: '#ffffff' }).setOrigin(0.5);
            const descText = this.add.text(width/2 - 70, y - 15, item.name + '\n' + item.desc, { fontFamily: 'VT323', fontSize: '16px', color: '#aaaaaa', wordWrap: {width: 300} });
            
            btn.on('pointerdown', () => {
                if (this.money < item.price) {
                    this.cameras.main.shake(100, 0.01);
                    return;
                }
                if (item.id === 'coffee' && this.buffCoffee) return;
                if (item.id === 'life' && this.buffExtraLife) return;
                if (item.id === 'manual' && this.manualUsed) return;
                
                this.money -= item.price;
                this.updateStats();

                if (item.id === 'coffee') this.buffCoffee = true;
                if (item.id === 'life') this.buffExtraLife = true;
                if (item.id === 'manual') {
                    this.manualUsed = true;
                    this.applyManual();
                }
                this.updateBuffIcons();
            });
            this.shopModal.add([btn, nameText, descText]);
        });

        this.shopBtn.on('pointerdown', () => this.shopModal.setVisible(true));

        this.optionButtons = [];
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

            btnRect.on('pointerdown', () => {
                if (this.waitingForNext) return;
                this.handleChoice(opt);
            });
            this.optionsContainer.add([btnRect, btnText]);
            this.optionButtons.push({ rect: btnRect, text: btnText, option: opt });
        });

        if (this.manualUsed) this.applyManual();
        if (this.startInDiagnostic) {
            this.actionsContainer.setVisible(false);
            this.optionsContainer.setVisible(true);
        }
    
    }

    
    applyManual() {
        if (!this.manualUsed) return;
        let hidden = 0;
        this.optionButtons.forEach(btn => {
            if (btn.option.emotion !== 'happy' && hidden < 2) {
                btn.rect.setVisible(false);
                btn.text.setVisible(false);
                hidden++;
            }
        });
    }
    handleChoice(option) {
        if (this.waitingForNext) return;
        
        const isWrong = option.emotion === 'angry' || option.emotion === 'sad';
        
        if (isWrong && this.buffExtraLife) {
            this.buffExtraLife = false;
            this.updateBuffIcons();
            this.dialogueText.setText("O cliente ficou irritado, mas você tem uma Vida Extra! Tente outra resposta!");
            this.characterGraphic.setFrame(EMOTION_FRAMES[option.emotion]);
            this.cameras.main.shake(200, 0.01);
            
            // Esconde a opção errada
            const btn = this.optionButtons.find(b => b.option === option);
            if (btn) {
                btn.rect.setVisible(false);
                btn.text.setVisible(false);
            }
            return;
        }

        this.waitingForNext = true;
        this.optionsContainer.setVisible(false);
        this.shopBtn.setVisible(false);
        this.shopBtnText.setVisible(false);

        let finalMoneyChange = option.moneyChange;
        if (option.emotion === 'happy' && this.buffCoffee) {
            if (finalMoneyChange > 0) finalMoneyChange *= 2;
            this.buffCoffee = false;
            this.updateBuffIcons();
        }

        this.money += finalMoneyChange;
        this.reputation += option.repChange;
        this.updateStats();

        this.dialogueText.setText(option.outcomeText + (finalMoneyChange > option.moneyChange ? " (Dinheiro em Dobro!)" : ""));
        this.characterGraphic.setFrame(EMOTION_FRAMES[option.emotion]);

        if (option.emotion === 'angry') {
            this.cameras.main.shake(300, 0.015);
            this.bobTween.stop();
            this.tweens.add({ targets: this.characterGraphic, y: this.characterGraphic.y - 15, duration: 100, yoyo: true, repeat: -1 });
        } else if (option.emotion === 'sad') {
            this.bobTween.stop();
            this.tweens.add({ targets: this.characterGraphic, y: this.characterGraphic.y + 80, alpha: 0, duration: 2500, ease: 'Power2' });
        } else if (option.emotion === 'happy') {
            this.bobTween.stop();
            this.tweens.add({ targets: this.characterGraphic, y: this.characterGraphic.y - 30, duration: 300, yoyo: true, repeat: -1, ease: 'Sine.easeInOut' });
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
                    todaysCustomers: this.todaysCustomers,
                    buffCoffee: this.buffCoffee,
                    buffExtraLife: this.buffExtraLife
                });
            } else {
                this.scene.start('GameOverScene', { money: this.money, reputation: this.reputation });
            }
        });
    }
}

class WorkbenchScene extends Phaser.Scene {
    constructor() { super('WorkbenchScene'); }

    init(data) {
        this.money = data.money;
        this.reputation = data.reputation;
        this.customerIndex = data.customerIndex;
        this.todaysCustomers = data.todaysCustomers;
        this.currentCustomer = this.todaysCustomers[this.customerIndex];
        
        this.buffCoffee = data.buffCoffee;
        this.buffExtraLife = data.buffExtraLife;
        this.manualUsed = data.manualUsed;
    }

    // Keep hardware loading out of Phaser's file loader so local file:// projects work reliably.
    preload() {}

    loadHardwareImage(source, fallback) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            let triedFallback = false;

            image.onload = () => resolve(image);
            image.onerror = () => {
                if (!triedFallback && fallback) {
                    triedFallback = true;
                    image.src = fallback;
                } else {
                    reject(new Error(`Não foi possível carregar a imagem da bancada: ${fallback || source}`));
                }
            };

            image.src = source;
        });
    }

    async ensureWorkbenchTexture() {
        if (this.textures.exists('hardware')) return;

        const hardware = (typeof ASSET_HARDWARE !== 'undefined' && ASSET_HARDWARE)
            ? ASSET_HARDWARE
            : 'assets/hardware.jpg';

        const image = await this.loadHardwareImage(hardware, 'assets/hardware.jpg');
        this.textures.addImage('hardware', image);
    }

    create() {
        this.ensureWorkbenchTexture()
            .then(() => this.buildWorkbenchUI())
            .catch(error => {
                console.error('Erro ao carregar a imagem da bancada:', error);
                this.cameras.main.setBackgroundColor('#1a1a24');
                this.add.text(this.scale.width / 2, this.scale.height / 2,
                    'Erro ao carregar a imagem da bancada. Veja o Console (F12).', {
                        fontFamily: 'VT323', fontSize: '24px', color: '#ff5555',
                        align: 'center', wordWrap: { width: this.scale.width - 80 }
                    }).setOrigin(0.5);
            });
    }

    buildWorkbenchUI() {
            const { width, height } = this.scale;
            this.cameras.main.setBackgroundColor('#1a1a24');
        
            // Main Title
            this.add.text(width / 2, 30, 'BANCADA DE DIAGNÓSTICO', {
                fontFamily: 'VT323', fontSize: '40px', color: '#33ff33'
            }).setOrigin(0.5);
        
            const cx = width / 2;
            const cy = height / 2 - 20;
            
            // Draw the uploaded hardware image as the background of the workbench
            const bgSprite = this.add.sprite(cx, cy, 'hardware');
            bgSprite.setScale(0.73); // Scale to fit nicely on the screen
        
            // Component Hitboxes (x, y offsets from center)
            // Ordered from background (Motherboard) to foreground so clicks register correctly
            const components = [
                { id: 'Placa-Mãe', name: 'Placa-Mãe', x: cx - 30, y: cy + 10, w: 340, h: 360 }, // Fundo
                { id: 'CPU', name: 'Processador (CPU)', x: cx - 60, y: cy - 70, w: 100, h: 120 },
                { id: 'RAM', name: 'Memória (RAM)', x: cx + 35, y: cy - 70, w: 40, h: 140 },
                { id: 'GPU', name: 'Placa de Vídeo (GPU)', x: cx - 40, y: cy + 40, w: 260, h: 45 },
                { id: 'HDD', name: 'Disco Rígido (SSD/HDD)', x: cx + 115, y: cy + 160, w: 130, h: 90 },
                { id: 'Fonte', name: 'Fonte de Alimentação', x: cx - 110, y: cy + 160, w: 140, h: 90 },
                { id: 'Drive', name: 'Leitor de Disco', x: cx + 115, y: cy - 130, w: 120, h: 110 },
                { id: 'Software', name: 'Análise de Software', isButton: true, x: cx - 290, y: cy },
                { id: 'Monitor', name: 'Testar Monitor', isButton: true, x: cx + 290, y: cy }
            ];
        
            // Diagnostic Text Area
            const diagBg = this.add.rectangle(cx, height - 60, width - 40, 80, 0x000000).setStrokeStyle(2, 0xffffff);
            const diagText = this.add.text(cx, height - 60, "Selecione um componente para investigar...", {
                fontFamily: 'VT323', fontSize: '20px', color: '#aaaaaa', wordWrap: { width: width - 80 }
            }).setOrigin(0.5);
        
            components.forEach(comp => {
                let hitArea;
                
                if (comp.isButton) {
                    // External buttons (Software, Monitor)
                    hitArea = this.add.rectangle(comp.x, comp.y, 140, 50, 0x333344)
                        .setInteractive({ useHandCursor: true }).setStrokeStyle(2, 0xffffff);
                    this.add.text(comp.x, comp.y, comp.name, {
                        fontFamily: 'VT323', fontSize: '18px', color: '#ffffff', wordWrap: { width: 130 }, align: 'center'
                    }).setOrigin(0.5);
                } else {
                    // Invisible interactive zones over the PC image
                    hitArea = this.add.rectangle(comp.x, comp.y, comp.w, comp.h, 0x000000, 0)
                        .setInteractive({ useHandCursor: true });
                    
                    // Border glow on hover for feedback
                    const border = this.add.rectangle(comp.x, comp.y, comp.w, comp.h)
                        .setStrokeStyle(3, 0xffff00).setVisible(false);
                        
                    hitArea.on('pointerover', () => { border.setVisible(true); });
                    hitArea.on('pointerout', () => { border.setVisible(false); });
                }
        
                hitArea.on('pointerdown', (pointer, localX, localY, event) => {
                    event.stopPropagation(); // Prevent clicks passing through to Motherboard underneath
                    let report = "";
                    
                    // Matching logic based on the parts in customers.js
                    const isBroken = this.currentCustomer.brokenPart.includes(comp.id) || 
                                     this.currentCustomer.brokenPart === comp.id || 
                                     (comp.id === 'Monitor' && this.currentCustomer.brokenPart.includes('Cabo de Vídeo')) ||
                                     (comp.id === 'CPU' && this.currentCustomer.brokenPart.includes('Cooling')) ||
                                     (comp.id === 'Placa-Mãe' && this.currentCustomer.brokenPart === 'Geral');
        
                    if (isBroken) {
                        report = `⚠️ [PROBLEMA ENCONTRADO no ${comp.name}]: ${this.currentCustomer.diagnosticText}`;
                        diagText.setColor('#ff3333');
                        this.cameras.main.shake(100, 0.005);
                    } else {
                        report = `✅ [${comp.name}]: O componente aparenta estar funcionando perfeitamente.`;
                        diagText.setColor('#33ff33');
                    }
                    diagText.setText(report);
                });
            });
        
            // Back Button
            const backBtn = this.add.rectangle(100, 40, 150, 40, 0x444444).setInteractive({ useHandCursor: true }).setStrokeStyle(2, 0xffffff);
            this.add.text(100, 40, '⬅ Voltar', { fontFamily: 'VT323', fontSize: '20px', color: '#ffffff' }).setOrigin(0.5);
        
            backBtn.on('pointerdown', () => {
                this.scene.start('GameScene', { 
                    money: this.money, 
                    reputation: this.reputation, 
                    customerIndex: this.customerIndex, 
                    todaysCustomers: this.todaysCustomers 
                });
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
        this.add.text(width / 2, height / 2 - 100, 'FIM DE EXPEDIENTE', { fontFamily: 'VT323', fontSize: '60px', color: '#33ff33' }).setOrigin(0.5);
        this.add.text(width / 2, height / 2, `Dinheiro final: $${this.finalMoney}`, { fontFamily: 'VT323', fontSize: '24px', color: '#ffffff' }).setOrigin(0.5);
        const repMsg = this.finalReputation > 0 ? this.finalReputation.toString() : 'Falência';
        this.add.text(width / 2, height / 2 + 40, `Reputação: ${repMsg}`, { fontFamily: 'VT323', fontSize: '24px', color: '#ffffff' }).setOrigin(0.5);
        
        const btnRect = this.add.rectangle(width / 2, height / 2 + 120, 200, 60, 0x333344).setStrokeStyle(2, 0x4a4a59).setInteractive({ useHandCursor: true });
        
        const isBankrupt = this.finalReputation <= 0 || this.finalMoney <= -100;
        const btnTextStr = isBankrupt ? 'RECOMEÇAR DO ZERO' : 'NOVO DIA';
        
        const btnText = this.add.text(width / 2, height / 2 + 120, btnTextStr, { fontFamily: 'VT323', fontSize: '24px', color: '#ffffff' }).setOrigin(0.5);
        
        btnRect.on('pointerdown', () => { 
            if (isBankrupt) {
                this.scene.start('MenuScene', { money: 100, reputation: 50 });
            } else {
                this.scene.start('MenuScene', { money: this.finalMoney, reputation: this.finalReputation });
            }
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    pixelArt: true,
    scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
    scene: [BootScene, MenuScene, GameScene, WorkbenchScene, GameOverScene]
};
const game = new Phaser.Game(config);
