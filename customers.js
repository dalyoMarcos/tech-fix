const gameData = [
    {
      id: "1", name: "Karen", spriteEmoji: "👱‍♀️",
      dialogue: "Meu notebook não liga de jeito nenhum! Tenho planilhas importantíssimas, resolva isso AGORA!",
      options: [
        { text: "Formatar o HD", outcomeText: "O PC ligou, mas as planilhas sumiram. Processo a caminho.", moneyChange: -50, repChange: -40, emotion: "angry", reactionEmoji: "🤬" },
        { text: "Testar com outro carregador", outcomeText: "Era só a bateria descarregada. Ela suspirou aliviada.", moneyChange: 100, repChange: 20, emotion: "happy", reactionEmoji: "🤩" },
        { text: "Dizer que a placa queimou", outcomeText: "Ela pagou furiosa, mas o PC 'voltou' à vida.", moneyChange: 300, repChange: -10, emotion: "angry", reactionEmoji: "😠" },
        { text: "Derrubar no chão", outcomeText: "A tela quebrou em mil pedaços. Ela está chorando.", moneyChange: -200, repChange: -50, emotion: "sad", reactionEmoji: "😭" }
      ]
    },
    {
      id: "2", name: "Enzo", spriteEmoji: "👦",
      dialogue: "Mano, meu PC gamer não tá dando vídeo! Eu preciso jogar meu ranqueado urgente!",
      options: [
        { text: "Trocar placa de vídeo", outcomeText: "Era só o cabo mal encaixado, mas você cobrou a placa.", moneyChange: 500, repChange: -10, emotion: "happy", reactionEmoji: "😎" },
        { text: "Dar um soco no gabinete", outcomeText: "Amassou o gabinete e quebrou o vidro. Ele está em prantos.", moneyChange: -100, repChange: -40, emotion: "sad", reactionEmoji: "😭" },
        { text: "Ligar cabo de vídeo na Placa de Vídeo", outcomeText: "Tava na placa mãe! Corrigiu e ele te chamou de lenda.", moneyChange: 100, repChange: 30, emotion: "happy", reactionEmoji: "🤩" },
        { text: "Passar borracha na RAM", outcomeText: "Quebrou o pente de memória. O PC apita sem parar.", moneyChange: -150, repChange: -30, emotion: "angry", reactionEmoji: "🤬" }
      ]
    },
    {
      id: "3", name: "Dona Maria", spriteEmoji: "👵",
      dialogue: "Meu netinho montou esse computador gigante, mas ele faz barulho de avião e desliga do nada!",
      options: [
        { text: "Limpar poeira e trocar pasta", outcomeText: "O PC ficou frio e silencioso. Ganhou bolo de cenoura.", moneyChange: 100, repChange: 40, emotion: "happy", reactionEmoji: "🥰" },
        { text: "Jogar água", outcomeText: "Curto-circuito instantâneo. O computador fritou.", moneyChange: -300, repChange: -50, emotion: "sad", reactionEmoji: "😨" },
        { text: "Desligar os coolers", outcomeText: "Ficou silencioso, mas derreteu em 5 minutos.", moneyChange: -100, repChange: -40, emotion: "angry", reactionEmoji: "😡" },
        { text: "Vender ventilador de mesa", outcomeText: "Gambiarra feia, mas ela comprou.", moneyChange: 150, repChange: -10, emotion: "happy", reactionEmoji: "👵" }
      ]
    },
    {
      id: "4", name: "Lucas Dev", spriteEmoji: "🤓",
      dialogue: "Fui rodar Docker, 5 abas de Chrome, 3 VSCode e meu PC travou na tela azul!",
      options: [
        { text: "Fechar um pouco de aba", outcomeText: "Problema óbvio demais. Ele não quis aceitar e foi embora.", moneyChange: 0, repChange: -10, emotion: "sad", reactionEmoji: "🙄" },
        { text: "Vender mais 32GB de RAM", outcomeText: "Instalado e voando. 'Agora sim roda Kubernetes!'", moneyChange: 100, repChange: 30, emotion: "happy", reactionEmoji: "🤩" },
        { text: "Instalar Linux Mint", outcomeText: "Ele já usava Arch Linux, ficou ofendido.", moneyChange: -50, repChange: -20, emotion: "angry", reactionEmoji: "🤬" },
        { text: "Desinstalar o Chrome", outcomeText: "Perdeu todo o cache e cookies. Surtou de ódio.", moneyChange: -100, repChange: -40, emotion: "angry", reactionEmoji: "😡" }
      ]
    },
    {
      id: "5", name: "Sr. Silva", spriteEmoji: "👴",
      dialogue: "Moço, sumiu tudo do meu computador! Tem uma caveira vermelha pedindo Bitcoin!",
      options: [
        { text: "Pagar o resgate", outcomeText: "Você perdeu o dinheiro dele e o hacker não liberou nada.", moneyChange: -500, repChange: -50, emotion: "sad", reactionEmoji: "😭" },
        { text: "Formatar HD e recuperar backup", outcomeText: "Tudo limpo e recuperado. Ele achou que era mágica.", moneyChange: 100, repChange: 40, emotion: "happy", reactionEmoji: "🤩" },
        { text: "Trocar o monitor", outcomeText: "A imagem continuou. A caveira no monitor novo irritou ele.", moneyChange: 200, repChange: -30, emotion: "angry", reactionEmoji: "🤬" },
        { text: "Bater na tela", outcomeText: "A tela quebrou, mas a caveira sumiu. Genial?", moneyChange: -100, repChange: -50, emotion: "sad", reactionEmoji: "😱" }
      ]
    },
    {
      id: "6", name: "Paty Blogger", spriteEmoji: "💅",
      dialogue: "Meu MacBook Rosa parou de pegar o Wi-Fi! Como vou postar meus recebidos?",
      options: [
        { text: "Reiniciar o Roteador", outcomeText: "Nem olhou pro Mac, era só a internet. Resolvido.", moneyChange: 100, repChange: 30, emotion: "happy", reactionEmoji: "🥰" },
        { text: "Passar desinfetante", outcomeText: "Causou corrosão nos contatos. Adeus Mac Rosa.", moneyChange: -400, repChange: -50, emotion: "sad", reactionEmoji: "😭" },
        { text: "Trocar placa de rede inteira", outcomeText: "Custou o olho da cara, mas ela pagou.", moneyChange: 500, repChange: -5, emotion: "happy", reactionEmoji: "🤩" },
        { text: "Deletar o app do Instagram", outcomeText: "A vida dela acabou. Você estragou o dia.", moneyChange: 0, repChange: -50, emotion: "angry", reactionEmoji: "🤬" }
      ]
    },
    {
      id: "7", name: "Beto Bitcoin", spriteEmoji: "🤑",
      dialogue: "Minha rig de mineração tá fervendo! Coloquei no freezer de casa mas estragou a carne!",
      options: [
        { text: "Comprar ar-condicionado de servidor", outcomeText: "Excelente refrigeração, as moedas estão fluindo.", moneyChange: 100, repChange: 25, emotion: "happy", reactionEmoji: "😎" },
        { text: "Mergulhar em óleo mineral", outcomeText: "Derramou tudo e deu um curto gigante na loja.", moneyChange: -300, repChange: -40, emotion: "angry", reactionEmoji: "🤬" },
        { text: "Tirar o pó das ventoinhas", outcomeText: "O básico funcionou, mas ele achou sem graça.", moneyChange: 50, repChange: 10, emotion: "neutral", reactionEmoji: "😐" },
        { text: "Jogar no lixo", outcomeText: "Perdeu a carteira com R$500.000 em cripto. Surto total.", moneyChange: -500, repChange: -100, emotion: "sad", reactionEmoji: "😭" }
      ]
    },
    {
      id: "8", name: "Letícia Designer", spriteEmoji: "🎨",
      dialogue: "As cores do meu monitor tão estranhas... O amarelo tá verde! O logo do cliente estragou!",
      options: [
        { text: "Calibrar cores via hardware", outcomeText: "As cores voltaram ao normal 100% fiéis.", moneyChange: 100, repChange: 40, emotion: "happy", reactionEmoji: "🤩" },
        { text: "Dar soco na lateral", outcomeText: "O monitor piscou e desligou para sempre.", moneyChange: -150, repChange: -40, emotion: "sad", reactionEmoji: "😭" },
        { text: "Colocar óculos com filtro azul nela", outcomeText: "Não corrigiu o monitor, mas ela acreditou na lorota.", moneyChange: 50, repChange: -10, emotion: "happy", reactionEmoji: "😎" },
        { text: "Apagar as artes dela", outcomeText: "Trabalho de 3 meses jogado no lixo.", moneyChange: -50, repChange: -50, emotion: "angry", reactionEmoji: "🤬" }
      ]
    },
    {
      id: "9", name: "Jorge da TI", spriteEmoji: "👨‍💻",
      dialogue: "Cara, o teclado desse notebook não funciona algumas teclas! Já reinstalei até os drivers do mouse!",
      options: [
        { text: "Tirar a migalha de pão debaixo da tecla", outcomeText: "Uma única migalha resolvia. Vergonhoso para ele.", moneyChange: 100, repChange: 20, emotion: "happy", reactionEmoji: "😅" },
        { text: "Cobrar um teclado novo inteiro", outcomeText: "Funciona perfeitamente. Cobrado um absurdo.", moneyChange: 300, repChange: -5, emotion: "neutral", reactionEmoji: "😐" },
        { text: "Pingar super bonder", outcomeText: "As teclas colaram pra sempre. Teclado morto.", moneyChange: -100, repChange: -40, emotion: "angry", reactionEmoji: "🤬" },
        { text: "Formatar", outcomeText: "Hardware não arruma com software, né Jorge?", moneyChange: 0, repChange: -30, emotion: "sad", reactionEmoji: "🤦" }
      ]
    },
    {
      id: "10", name: "Criança Birrenta", spriteEmoji: "👶",
      dialogue: "Meu Roblox tá travando muito nesse notebook que era do meu avô de 2005!",
      options: [
        { text: "Colocar um SSD", outcomeText: "O PC velho respirou aparelhos e até rodou o Roblox.", moneyChange: 100, repChange: 30, emotion: "happy", reactionEmoji: "🤩" },
        { text: "Dizer que o PC tá bom", outcomeText: "Começou a chorar na loja fazendo um escândalo.", moneyChange: 0, repChange: -20, emotion: "sad", reactionEmoji: "😭" },
        { text: "Instalar placa de vídeo USB (Fake)", outcomeText: "Enganou a criança, mas a mãe vai voltar reclamando.", moneyChange: 150, repChange: -30, emotion: "angry", reactionEmoji: "🤬" },
        { text: "Abrir o PC e quebrar a placa", outcomeText: "Destruiu a relíquia do avô.", moneyChange: -200, repChange: -50, emotion: "sad", reactionEmoji: "💀" }
      ]
    },
    {
      id: "11", name: "Vó Zilda", spriteEmoji: "👵",
      dialogue: "Moço, eu cliquei num link de uma viagem grátis para Dubai e agora a tela tá cheia de propagandas de panela!",
      options: [
        { text: "Usar AdBlock e limpar extensões", outcomeText: "Sumiram os pop-ups! Ela ficou super feliz.", moneyChange: 100, repChange: 40, emotion: "happy", reactionEmoji: "🥰" },
        { text: "Comprar as panelas", outcomeText: "Você botou seu próprio cartão. Gastou horrores.", moneyChange: -500, repChange: 10, emotion: "sad", reactionEmoji: "😭" },
        { text: "Cobrar 'Antivírus Nível FBI'", outcomeText: "Instalou o Avast Grátis e cobrou $400.", moneyChange: 400, repChange: -20, emotion: "neutral", reactionEmoji: "😐" },
        { text: "Deletar a internet", outcomeText: "Tirou o ícone do Chrome da área de trabalho.", moneyChange: -10, repChange: -40, emotion: "angry", reactionEmoji: "🤬" }
      ]
    },
    {
      id: "12", name: "Gamer Furioso", spriteEmoji: "😤",
      dialogue: "Dei um soco no meu monitor porque perdi no LoL e agora tem uma linha preta na tela!",
      options: [
        { text: "Trocar o display LED", outcomeText: "Saiu o preço de um monitor novo, mas arrumou.", moneyChange: 100, repChange: 20, emotion: "happy", reactionEmoji: "🤩" },
        { text: "Passar pasta de dente no trinco", outcomeText: "Ficou com cheiro de menta e não arrumou nada.", moneyChange: -20, repChange: -30, emotion: "angry", reactionEmoji: "🤬" },
        { text: "Esconder a linha com fita isolante", outcomeText: "Gambiarra suprema. Ele odiou.", moneyChange: -50, repChange: -40, emotion: "angry", reactionEmoji: "😡" },
        { text: "Quebrar o resto do monitor", outcomeText: "Você deu outro soco. Ele chorou de desespero.", moneyChange: -200, repChange: -50, emotion: "sad", reactionEmoji: "😭" }
      ]
    },
    {
      id: "13", name: "Atendente de Caixa", spriteEmoji: "🙍‍♀️",
      dialogue: "O PC do mercadinho deu tela preta com a mensagem 'No Bootable Device'. A fila tá enorme!",
      options: [
        { text: "Reconectar o cabo SATA", outcomeText: "O HD estava solto. Voltou pro caixa rapidinho.", moneyChange: 100, repChange: 40, emotion: "happy", reactionEmoji: "🤩" },
        { text: "Deletar as partições", outcomeText: "Apagou todo o sistema do caixa. O dono te ameaçou.", moneyChange: -100, repChange: -50, emotion: "angry", reactionEmoji: "🤬" },
        { text: "Cobrar um HD novo", outcomeText: "Colocou um igual. O dono pagou resmungando.", moneyChange: 250, repChange: -10, emotion: "neutral", reactionEmoji: "😐" },
        { text: "Fazer o PC rodar Linux pendrive", outcomeText: "O sistema do mercadinho só roda no Windows...", moneyChange: -50, repChange: -30, emotion: "sad", reactionEmoji: "😭" }
      ]
    },
    {
      id: "14", name: "Estudante", spriteEmoji: "🎒",
      dialogue: "Meu TCC é amanhã, e esse pendrive sumiu meus arquivos. Só tem atalhos de 1KB!",
      options: [
        { text: "Mostrar arquivos ocultos (Attrib)", outcomeText: "O TCC estava lá! Salvo da reprovação.", moneyChange: 100, repChange: 50, emotion: "happy", reactionEmoji: "🤩" },
        { text: "Abrir os atalhos", outcomeText: "Você infectou o PC da sua própria loja com vírus.", moneyChange: -200, repChange: -20, emotion: "angry", reactionEmoji: "🤬" },
        { text: "Formatar o pendrive", outcomeText: "Deletou o TCC de vez. Ele desmaiou na loja.", moneyChange: -100, repChange: -50, emotion: "sad", reactionEmoji: "😭" },
        { text: "Cobrar taxa de desespero", outcomeText: "Recuperou mas cobrou 500. Ele pagou chorando.", moneyChange: 500, repChange: -30, emotion: "sad", reactionEmoji: "😢" }
      ]
    },
    {
      id: "15", name: "Tiozão", spriteEmoji: "👨",
      dialogue: "Comprei 1 Tera de RAM na internet mas o PC não reconhece! O site se chamava Baixaki Tudo.",
      options: [
        { text: "Explicar o golpe e instalar RAM de verdade", outcomeText: "Ele aceitou a derrota e pagou pela RAM real.", moneyChange: 100, repChange: 20, emotion: "happy", reactionEmoji: "😅" },
        { text: "Rir da cara dele", outcomeText: "Ele ficou ofendidíssimo e foi embora ofendendo.", moneyChange: 0, repChange: -30, emotion: "angry", reactionEmoji: "🤬" },
        { text: "Fingir que o programa funcionou", outcomeText: "Editou as propriedades do sistema. Picaretagem.", moneyChange: 100, repChange: -20, emotion: "neutral", reactionEmoji: "😐" },
        { text: "Deletar o '1 Tera'", outcomeText: "Ele processou você por apagar a RAM virtual dele.", moneyChange: -100, repChange: -40, emotion: "angry", reactionEmoji: "😡" }
      ]
    },
    {
      id: "16", name: "Cineasta Indie", spriteEmoji: "🎬",
      dialogue: "Tô renderizando um vídeo 8K e meu MacBook frita, parece um Boeing levantando voo!",
      options: [
        { text: "Trocar as ventoinhas e pasta térmica", outcomeText: "Agora roda renderizações 8K sem fazer barulho.", moneyChange: 100, repChange: 35, emotion: "happy", reactionEmoji: "🤩" },
        { text: "Deixar renderizar na geladeira", outcomeText: "Entrou condensação na placa e fechou curto.", moneyChange: -500, repChange: -50, emotion: "sad", reactionEmoji: "😭" },
        { text: "Baixar a resolução pra 720p", outcomeText: "Renderizou rápido, mas estragou o filme indie.", moneyChange: -50, repChange: -30, emotion: "angry", reactionEmoji: "🤬" },
        { text: "Vender Mac Studio", outcomeText: "Empurrou hardware de 50 mil reais. Ele deve até a alma.", moneyChange: 1000, repChange: -10, emotion: "sad", reactionEmoji: "😱" }
      ]
    },
    {
      id: "17", name: "Padre", spriteEmoji: "⛪",
      dialogue: "O projetor da igreja pifou bem na hora da missa de domingo. Não dá imagem!",
      options: [
        { text: "Trocar o cabo VGA com mal contato", outcomeText: "Foi rápido e o cântico pôde continuar. Amém.", moneyChange: 100, repChange: 50, emotion: "happy", reactionEmoji: "🙏" },
        { text: "Jogar água benta", outcomeText: "O projetor tomou choque e pegou fogo no altar.", moneyChange: -300, repChange: -50, emotion: "angry", reactionEmoji: "🤬" },
        { text: "Cobrar lâmpada nova caríssima", outcomeText: "Deus viu o que você fez cobrando a mais da igreja.", moneyChange: 300, repChange: -30, emotion: "sad", reactionEmoji: "😢" },
        { text: "Rezar para funcionar", outcomeText: "Milagres não arrumam hardware de vídeo.", moneyChange: 0, repChange: -20, emotion: "sad", reactionEmoji: "😞" }
      ]
    },
    {
      id: "18", name: "Hacker Aspirante", spriteEmoji: "🥷",
      dialogue: "Fui tentar invadir o Wi-Fi do vizinho, rodei um script e meu PC inteiro travou numa tela CMD verde!",
      options: [
        { text: "Dar Ctrl+C para parar o script", outcomeText: "O garoto nem sabia atalhos de teclado. Vergonha.", moneyChange: 100, repChange: 20, emotion: "happy", reactionEmoji: "😅" },
        { text: "Denunciar pra polícia", outcomeText: "O moleque saiu correndo e esqueceu o PC na loja.", moneyChange: 300, repChange: -10, emotion: "sad", reactionEmoji: "😭" },
        { text: "Digitar 'Tree' e falar que consertou", outcomeText: "Fingiu ser hacker também, mas cobrou caro.", moneyChange: 200, repChange: -10, emotion: "neutral", reactionEmoji: "😎" },
        { text: "Deletar o system32", outcomeText: "Agora ele não tem sistema pra hackear. Ele chorou.", moneyChange: -100, repChange: -40, emotion: "angry", reactionEmoji: "🤬" }
      ]
    },
    {
      id: "19", name: "Fã da Apple", spriteEmoji: "🍎",
      dialogue: "Derramei meu café importado no teclado do MacBook. Ele vale 20 mil, socorro!",
      options: [
        { text: "Banho químico na placa mãe", outcomeText: "Salvo pela química! Teclado e placa perfeitos.", moneyChange: 100, repChange: 40, emotion: "happy", reactionEmoji: "🤩" },
        { text: "Colocar num saco gigante de arroz", outcomeText: "MacBook de 20 mil destruído por amido.", moneyChange: -500, repChange: -50, emotion: "sad", reactionEmoji: "😭" },
        { text: "Secar no micro-ondas", outcomeText: "Explosão imediata. Fogo, chamas e gritaria.", moneyChange: -1000, repChange: -80, emotion: "angry", reactionEmoji: "🤬" },
        { text: "Vender um PC Windows no lugar", outcomeText: "Ele teve um colapso porque odeia Windows.", moneyChange: 0, repChange: -30, emotion: "angry", reactionEmoji: "😡" }
      ]
    },
    {
      id: "20", name: "Secretária", spriteEmoji: "👩‍💼",
      dialogue: "O mouse do PC não mexe! Eu movo ele na mesa, e a setinha não vai!",
      options: [
        { text: "Tirar o adesivo no sensor óptico", outcomeText: "Era pegadinha de colega de trabalho. Resolvido.", moneyChange: 100, repChange: 30, emotion: "happy", reactionEmoji: "😅" },
        { text: "Cobrar um mouse novo Razer", outcomeText: "Pagou mouse gamer de R$800 pra usar no Excel.", moneyChange: 300, repChange: -10, emotion: "neutral", reactionEmoji: "😐" },
        { text: "Puxar pelo fio com força", outcomeText: "Arrebentou o fio USB. Você é muito estúpido.", moneyChange: -50, repChange: -40, emotion: "angry", reactionEmoji: "🤬" },
        { text: "Deletar driver do mouse", outcomeText: "Agora o teclado parou junto. Caos total.", moneyChange: -100, repChange: -50, emotion: "sad", reactionEmoji: "😭" }
      ]
    },
    {
      id: "21", name: "Youtuber", spriteEmoji: "📹",
      dialogue: "Moço! Gravei 4 horas de gameplay e o arquivo sumiu! O HD externo caiu da mesa ontem.",
      options: [
        { text: "Recuperação profunda de dados", outcomeText: "Demorou 2 dias, mas salvou o gameplay! Sucesso.", moneyChange: 100, repChange: 50, emotion: "happy", reactionEmoji: "🤩" },
        { text: "Abrir o HD no ar puro", outcomeText: "Poeira arranhou o disco. Perda irreversível.", moneyChange: -300, repChange: -60, emotion: "sad", reactionEmoji: "😭" },
        { text: "Dar uma batidinha nele", outcomeText: "A agulha quebrou. RIP Youtuber.", moneyChange: -200, repChange: -50, emotion: "angry", reactionEmoji: "🤬" },
        { text: "Baixar vídeo de outro canal", outcomeText: "Tomou Strike de direitos autorais.", moneyChange: -50, repChange: -40, emotion: "angry", reactionEmoji: "😡" }
      ]
    },
    {
      id: "22", name: "Médico", spriteEmoji: "🩺",
      dialogue: "O software de laudos travou durante o exame! Não posso desligar a máquina! Socorro!",
      options: [
        { text: "Matar tarefa de fundo (Task Manager)", outcomeText: "O software destravou sem perder dados! Herói.", moneyChange: 100, repChange: 50, emotion: "happy", reactionEmoji: "🤩" },
        { text: "Puxar da tomada", outcomeText: "Corrompeu o HD do hospital inteiro. Processado.", moneyChange: -1000, repChange: -100, emotion: "angry", reactionEmoji: "🤬" },
        { text: "Instalar The Sims 4 na máquina", outcomeText: "Durante a cirurgia, pipocou notificação de jogo.", moneyChange: -200, repChange: -40, emotion: "sad", reactionEmoji: "😭" },
        { text: "Cobrar resgate do laudo", outcomeText: "Chantagem num momento desses? Karma -100.", moneyChange: 500, repChange: -80, emotion: "angry", reactionEmoji: "😡" }
      ]
    },
    {
      id: "23", name: "Marcão Músico", spriteEmoji: "🎸",
      dialogue: "Tô no meio da produção do álbum, e o fone USB tá dando choque nas orelhas!",
      options: [
        { text: "Trocar a fonte e isolar o terra", outcomeText: "Acabou os choques e gravou um hit.", moneyChange: 100, repChange: 40, emotion: "happy", reactionEmoji: "😎" },
        { text: "Cobrar fone acústico sem fio", outcomeText: "Caro, mas não dá choque, né.", moneyChange: 250, repChange: -5, emotion: "neutral", reactionEmoji: "😐" },
        { text: "Enrolar Durex na orelha dele", outcomeText: "Ficou ridículo e ele continuou tomando choque.", moneyChange: -50, repChange: -30, emotion: "angry", reactionEmoji: "🤬" },
        { text: "Jogar água no fone", outcomeText: "Curto generalizado na orelha. Hospitalizado.", moneyChange: -500, repChange: -60, emotion: "sad", reactionEmoji: "😭" }
      ]
    },
    {
      id: "24", name: "Padeiro", spriteEmoji: "🍞",
      dialogue: "Caiu farinha no teclado mecânico e agora o botão 'Enter' afundou de vez e não volta!",
      options: [
        { text: "Limpeza química com álcool isopropílico", outcomeText: "Teclado limpinho e cheiroso. Ganhou pão.", moneyChange: 100, repChange: 35, emotion: "happy", reactionEmoji: "🤩" },
        { text: "Jogar no forno para secar", outcomeText: "O plástico derreteu formando um pão de ABS.", moneyChange: -100, repChange: -40, emotion: "sad", reactionEmoji: "😭" },
        { text: "Apertar mais forte", outcomeText: "Quebrou o switch no meio.", moneyChange: -50, repChange: -30, emotion: "angry", reactionEmoji: "🤬" },
        { text: "Cobrar R$500 pra comprar um de membrana", outcomeText: "Teclado ruim, mas funciona. Cobrou caríssimo.", moneyChange: 450, repChange: -20, emotion: "neutral", reactionEmoji: "😐" }
      ]
    },
    {
      id: "25", name: "Primo Chato", spriteEmoji: "😒",
      dialogue: "Ei primo, tu que manja de PC... Formata pra mim, baixa todos os jogos e faz de graça, valeu?",
      options: [
        { text: "Falar firme que aqui é trabalho", outcomeText: "Ele aceitou pagar 100 reais, embora resmungando.", moneyChange: 100, repChange: 10, emotion: "happy", reactionEmoji: "🙄" },
        { text: "Fazer de graça", outcomeText: "Trabalhou 4 horas de graça. E perdeu dinheiro.", moneyChange: -50, repChange: 10, emotion: "sad", reactionEmoji: "😭" },
        { text: "Excluir os arquivos dele", outcomeText: "Ele ficou revoltado e avisou a sua tia.", moneyChange: 0, repChange: -50, emotion: "angry", reactionEmoji: "🤬" },
        { text: "Instalar vírus pesados no PC dele", outcomeText: "Ele quebrou o PC. Você sorriu maléfico.", moneyChange: 0, repChange: -20, emotion: "happy", reactionEmoji: "😈" }
      ]
    },
    {
      id: "26", name: "Corretor", spriteEmoji: "👔",
      dialogue: "Botei a senha do Windows e ele fala que tá errado, mas eu juro que é '123456'!",
      options: [
        { text: "Desligar o Caps Lock", outcomeText: "Logou na hora. Ele se sentiu um completo idiota.", moneyChange: 100, repChange: 20, emotion: "happy", reactionEmoji: "😅" },
        { text: "Formatar por R$300", outcomeText: "Pagou pela burrice. E perdeu tudo.", moneyChange: 300, repChange: -10, emotion: "neutral", reactionEmoji: "😐" },
        { text: "Hacker password bypass", outcomeText: "Quebrou a senha do bitlocker. Ele pagou bem.", moneyChange: 200, repChange: 30, emotion: "happy", reactionEmoji: "😎" },
        { text: "Esquecer a própria senha", outcomeText: "Você ferrou o BIOS do cara.", moneyChange: -150, repChange: -40, emotion: "angry", reactionEmoji: "🤬" }
      ]
    },
    {
      id: "27", name: "Fitness", spriteEmoji: "🏋️‍♂️",
      dialogue: "Derramei Whey Protein no gabinete de acrílico! O cheiro tá insuportável e os coolers travados!",
      options: [
        { text: "Desmontar tudo e dar banho em isopropílico", outcomeText: "Sem cheiro e rodando 100%. Shape mantido.", moneyChange: 100, repChange: 40, emotion: "happy", reactionEmoji: "💪" },
        { text: "Ligar pra ver se funciona", outcomeText: "Whey queimado subiu uma fumaça horrível na loja.", moneyChange: -200, repChange: -40, emotion: "sad", reactionEmoji: "😭" },
        { text: "Chupar o Whey com canudinho", outcomeText: "Você passou mal e o PC continuou estragado.", moneyChange: -100, repChange: -20, emotion: "sad", reactionEmoji: "🤢" },
        { text: "Jogar formigas no PC", outcomeText: "As formigas comeram o Whey. E os fios também.", moneyChange: -150, repChange: -50, emotion: "angry", reactionEmoji: "🤬" }
      ]
    },
    {
      id: "28", name: "Professor", spriteEmoji: "🧑‍🏫",
      dialogue: "Meu pen drive tem a prova final! Inseri no PC da biblioteca e tudo virou executável (.exe)!",
      options: [
        { text: "Passar antivírus e recuperar atributos", outcomeText: "Vírus shortcut removido, provas salvas!", moneyChange: 100, repChange: 50, emotion: "happy", reactionEmoji: "🤩" },
        { text: "Clicar no executável", outcomeText: "O vírus apagou as notas da escola inteira.", moneyChange: -200, repChange: -60, emotion: "angry", reactionEmoji: "🤬" },
        { text: "Quebrar o pendrive", outcomeText: "A prova foi perdida, os alunos comemoraram.", moneyChange: 50, repChange: -40, emotion: "sad", reactionEmoji: "😭" },
        { text: "Colocar num Linux e formatar", outcomeText: "Pendrive limpo, mas provas perdidas também.", moneyChange: -50, repChange: -20, emotion: "sad", reactionEmoji: "🤦‍♂️" }
      ]
    }
];
