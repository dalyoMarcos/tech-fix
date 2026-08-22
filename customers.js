const gameData = [
    {
      id: "1", name: "Karen", gender: "female",
      dialogue: "Meu notebook não liga de jeito nenhum! Tenho planilhas importantíssimas, resolva isso AGORA!",
      options: [
        { text: "Formatar o HD", outcomeText: "O PC ligou, mas as planilhas sumiram. Processo a caminho.", moneyChange: -50, repChange: -40, emotion: "angry" },
        { text: "Testar com outro carregador", outcomeText: "Era só a bateria descarregada. Ela suspirou aliviada.", moneyChange: 100, repChange: 20, emotion: "happy" },
        { text: "Dizer que a placa queimou", outcomeText: "Ela pagou furiosa, mas o PC 'voltou' à vida.", moneyChange: 300, repChange: -10, emotion: "angry" },
        { text: "Derrubar no chão", outcomeText: "A tela quebrou em mil pedaços. Ela está chorando.", moneyChange: -200, repChange: -50, emotion: "sad" }
      ]
    },
    {
      id: "2", name: "Enzo", gender: "male",
      dialogue: "Mano, meu PC gamer não tá dando vídeo! Eu preciso jogar meu ranqueado urgente!",
      options: [
        { text: "Trocar placa de vídeo", outcomeText: "Era só o cabo mal encaixado, mas você cobrou a placa.", moneyChange: 500, repChange: -10, emotion: "happy" },
        { text: "Dar um soco no gabinete", outcomeText: "Amassou o gabinete e quebrou o vidro. Ele está em prantos.", moneyChange: -100, repChange: -40, emotion: "sad" },
        { text: "Ligar cabo na Placa de Vídeo", outcomeText: "Tava na placa mãe! Corrigiu e ele te chamou de lenda.", moneyChange: 100, repChange: 30, emotion: "happy" },
        { text: "Passar borracha na RAM", outcomeText: "Quebrou o pente de memória. O PC apita sem parar.", moneyChange: -150, repChange: -30, emotion: "angry" }
      ]
    },
    {
      id: "3", name: "Dona Maria", gender: "female",
      dialogue: "Meu netinho montou esse computador gigante, mas ele faz barulho de avião e desliga do nada!",
      options: [
        { text: "Limpar poeira e trocar pasta", outcomeText: "O PC ficou frio e silencioso. Ganhou bolo de cenoura.", moneyChange: 100, repChange: 40, emotion: "happy" },
        { text: "Jogar água", outcomeText: "Curto-circuito instantâneo. O computador fritou.", moneyChange: -300, repChange: -50, emotion: "sad" },
        { text: "Desligar os coolers", outcomeText: "Ficou silencioso, mas derreteu em 5 minutos.", moneyChange: -100, repChange: -40, emotion: "angry" },
        { text: "Vender ventilador de mesa", outcomeText: "Gambiarra feia, mas ela comprou.", moneyChange: 150, repChange: -10, emotion: "happy" }
      ]
    },
    {
      id: "4", name: "Lucas Dev", gender: "male",
      dialogue: "Fui rodar Docker, 5 abas de Chrome, 3 VSCode e meu PC travou na tela azul!",
      options: [
        { text: "Fechar um pouco de aba", outcomeText: "Problema óbvio demais. Ele não quis aceitar e foi embora.", moneyChange: 0, repChange: -10, emotion: "sad" },
        { text: "Vender mais 32GB de RAM", outcomeText: "Instalado e voando. 'Agora sim roda Kubernetes!'", moneyChange: 100, repChange: 30, emotion: "happy" },
        { text: "Instalar Linux Mint", outcomeText: "Ele já usava Arch Linux, ficou ofendido.", moneyChange: -50, repChange: -20, emotion: "angry" },
        { text: "Desinstalar o Chrome", outcomeText: "Perdeu todo o cache e cookies. Surtou de ódio.", moneyChange: -100, repChange: -40, emotion: "angry" }
      ]
    },
    {
      id: "5", name: "Sr. Silva", gender: "male",
      dialogue: "Moço, sumiu tudo do meu computador! Tem uma caveira vermelha pedindo Bitcoin!",
      options: [
        { text: "Pagar o resgate", outcomeText: "Você perdeu o dinheiro dele e o hacker não liberou nada.", moneyChange: -500, repChange: -50, emotion: "sad" },
        { text: "Formatar HD e restaurar", outcomeText: "Tudo limpo e recuperado. Ele achou que era mágica.", moneyChange: 100, repChange: 40, emotion: "happy" },
        { text: "Trocar o monitor", outcomeText: "A imagem continuou. A caveira no monitor novo irritou ele.", moneyChange: 200, repChange: -30, emotion: "angry" },
        { text: "Bater na tela", outcomeText: "A tela quebrou, mas a caveira sumiu. Genial?", moneyChange: -100, repChange: -50, emotion: "sad" }
      ]
    },
    {
      id: "6", name: "Paty Blogger", gender: "female",
      dialogue: "Meu MacBook Rosa parou de pegar o Wi-Fi! Como vou postar meus recebidos?",
      options: [
        { text: "Reiniciar o Roteador", outcomeText: "Nem olhou pro Mac, era só a internet. Resolvido.", moneyChange: 100, repChange: 30, emotion: "happy" },
        { text: "Passar desinfetante", outcomeText: "Causou corrosão nos contatos. Adeus Mac Rosa.", moneyChange: -400, repChange: -50, emotion: "sad" },
        { text: "Trocar placa de rede", outcomeText: "Custou o olho da cara, mas ela pagou.", moneyChange: 500, repChange: -5, emotion: "happy" },
        { text: "Deletar app do Instagram", outcomeText: "A vida dela acabou. Você estragou o dia.", moneyChange: 0, repChange: -50, emotion: "angry" }
      ]
    },
    {
      id: "7", name: "Beto Bitcoin", gender: "male",
      dialogue: "Minha rig de mineração tá fervendo! Coloquei no freezer de casa mas estragou a carne!",
      options: [
        { text: "Comprar ar-condicionado", outcomeText: "Excelente refrigeração, as moedas estão fluindo.", moneyChange: 100, repChange: 25, emotion: "happy" },
        { text: "Mergulhar em óleo", outcomeText: "Derramou tudo e deu um curto gigante na loja.", moneyChange: -300, repChange: -40, emotion: "angry" },
        { text: "Tirar o pó", outcomeText: "O básico funcionou, mas ele achou sem graça.", moneyChange: 50, repChange: 10, emotion: "neutral" },
        { text: "Jogar no lixo", outcomeText: "Perdeu a carteira com R$500.000. Surto total.", moneyChange: -500, repChange: -100, emotion: "sad" }
      ]
    },
    {
      id: "8", name: "Letícia Designer", gender: "female",
      dialogue: "As cores do meu monitor tão estranhas... O amarelo tá verde! O logo do cliente estragou!",
      options: [
        { text: "Calibrar cores", outcomeText: "As cores voltaram ao normal 100% fiéis.", moneyChange: 100, repChange: 40, emotion: "happy" },
        { text: "Dar soco na lateral", outcomeText: "O monitor piscou e desligou para sempre.", moneyChange: -150, repChange: -40, emotion: "sad" },
        { text: "Colocar óculos azuis nela", outcomeText: "Não corrigiu, mas ela acreditou na lorota.", moneyChange: 50, repChange: -10, emotion: "happy" },
        { text: "Apagar as artes dela", outcomeText: "Trabalho de 3 meses jogado no lixo.", moneyChange: -50, repChange: -50, emotion: "angry" }
      ]
    },
    {
      id: "9", name: "Jorge da TI", gender: "male",
      dialogue: "Cara, o teclado desse notebook não funciona! Já reinstalei até os drivers do mouse!",
      options: [
        { text: "Tirar a migalha de pão", outcomeText: "Uma única migalha resolvia. Vergonhoso para ele.", moneyChange: 100, repChange: 20, emotion: "happy" },
        { text: "Cobrar teclado novo", outcomeText: "Funciona perfeitamente. Cobrado um absurdo.", moneyChange: 300, repChange: -5, emotion: "neutral" },
        { text: "Pingar super bonder", outcomeText: "As teclas colaram pra sempre. Teclado morto.", moneyChange: -100, repChange: -40, emotion: "angry" },
        { text: "Formatar", outcomeText: "Hardware não arruma com software, né Jorge?", moneyChange: 0, repChange: -30, emotion: "sad" }
      ]
    },
    {
      id: "10", name: "Criança Birrenta", gender: "male",
      dialogue: "Meu Roblox tá travando muito nesse notebook que era do meu avô de 2005!",
      options: [
        { text: "Colocar um SSD", outcomeText: "O PC velho respirou aparelhos e até rodou o Roblox.", moneyChange: 100, repChange: 30, emotion: "happy" },
        { text: "Dizer que o PC tá bom", outcomeText: "Começou a chorar na loja fazendo um escândalo.", moneyChange: 0, repChange: -20, emotion: "sad" },
        { text: "Placa de vídeo USB (Fake)", outcomeText: "Enganou a criança, mas a mãe vai voltar reclamando.", moneyChange: 150, repChange: -30, emotion: "angry" },
        { text: "Quebrar a placa", outcomeText: "Destruiu a relíquia do avô.", moneyChange: -200, repChange: -50, emotion: "sad" }
      ]
    },
    {
      id: "11", name: "Vó Zilda", gender: "female",
      dialogue: "Moço, eu cliquei num link de viagem e agora a tela tá cheia de propagandas de panela!",
      options: [
        { text: "Usar AdBlock e limpar", outcomeText: "Sumiram os pop-ups! Ela ficou super feliz.", moneyChange: 100, repChange: 40, emotion: "happy" },
        { text: "Comprar as panelas", outcomeText: "Você botou seu próprio cartão. Gastou horrores.", moneyChange: -500, repChange: 10, emotion: "sad" },
        { text: "Cobrar Antivírus", outcomeText: "Instalou o Avast Grátis e cobrou caro.", moneyChange: 400, repChange: -20, emotion: "neutral" },
        { text: "Deletar a internet", outcomeText: "Tirou o ícone do Chrome da área de trabalho.", moneyChange: -10, repChange: -40, emotion: "angry" }
      ]
    },
    {
      id: "12", name: "Gamer Furioso", gender: "male",
      dialogue: "Dei um soco no meu monitor porque perdi no LoL e agora tem uma linha preta na tela!",
      options: [
        { text: "Trocar o display LED", outcomeText: "Saiu o preço de um novo, mas arrumou.", moneyChange: 100, repChange: 20, emotion: "happy" },
        { text: "Passar pasta de dente", outcomeText: "Ficou com cheiro de menta e não arrumou nada.", moneyChange: -20, repChange: -30, emotion: "angry" },
        { text: "Esconder com fita", outcomeText: "Gambiarra suprema. Ele odiou.", moneyChange: -50, repChange: -40, emotion: "angry" },
        { text: "Quebrar o resto", outcomeText: "Você deu outro soco. Ele chorou de desespero.", moneyChange: -200, repChange: -50, emotion: "sad" }
      ]
    },
    {
      id: "13", name: "Atendente de Caixa", gender: "female",
      dialogue: "O PC do caixa deu tela preta 'No Bootable Device'. A fila tá enorme!",
      options: [
        { text: "Reconectar o cabo SATA", outcomeText: "O HD estava solto. Voltou pro caixa rapidinho.", moneyChange: 100, repChange: 40, emotion: "happy" },
        { text: "Deletar partições", outcomeText: "Apagou todo o sistema do caixa. Ameaçado.", moneyChange: -100, repChange: -50, emotion: "angry" },
        { text: "Cobrar HD novo", outcomeText: "Colocou um igual. O dono pagou resmungando.", moneyChange: 250, repChange: -10, emotion: "neutral" },
        { text: "Rodar Linux pendrive", outcomeText: "O sistema do mercadinho não roda no Linux...", moneyChange: -50, repChange: -30, emotion: "sad" }
      ]
    },
    {
      id: "14", name: "Estudante", gender: "male",
      dialogue: "Meu TCC é amanhã, e o pendrive sumiu meus arquivos. Só tem atalhos!",
      options: [
        { text: "Mostrar arquivos ocultos", outcomeText: "O TCC estava lá! Salvo da reprovação.", moneyChange: 100, repChange: 50, emotion: "happy" },
        { text: "Abrir os atalhos", outcomeText: "Você infectou o PC da sua própria loja.", moneyChange: -200, repChange: -20, emotion: "angry" },
        { text: "Formatar", outcomeText: "Deletou o TCC de vez. Ele desmaiou.", moneyChange: -100, repChange: -50, emotion: "sad" },
        { text: "Taxa de desespero", outcomeText: "Recuperou mas cobrou 500. Ele pagou chorando.", moneyChange: 500, repChange: -30, emotion: "sad" }
      ]
    },
    {
      id: "15", name: "Tiozão", gender: "male",
      dialogue: "Comprei 1 Tera de RAM na internet mas o PC não reconhece!",
      options: [
        { text: "Explicar golpe e por RAM real", outcomeText: "Ele aceitou a derrota e pagou pela RAM.", moneyChange: 100, repChange: 20, emotion: "happy" },
        { text: "Rir da cara dele", outcomeText: "Ficou ofendidíssimo e foi embora ofendendo.", moneyChange: 0, repChange: -30, emotion: "angry" },
        { text: "Fingir que funcionou", outcomeText: "Editou as propriedades do sistema. Picaretagem.", moneyChange: 100, repChange: -20, emotion: "neutral" },
        { text: "Deletar o '1 Tera'", outcomeText: "Ele processou você por apagar a RAM virtual.", moneyChange: -100, repChange: -40, emotion: "angry" }
      ]
    },
    {
      id: "16", name: "Cineasta Indie", gender: "male",
      dialogue: "Tô renderizando vídeo 8K e meu MacBook frita, parece um Boeing!",
      options: [
        { text: "Limpar e trocar pasta", outcomeText: "Agora roda renderizações 8K sem fazer barulho.", moneyChange: 100, repChange: 35, emotion: "happy" },
        { text: "Pôr na geladeira", outcomeText: "Deu condensação na placa e fechou curto.", moneyChange: -500, repChange: -50, emotion: "sad" },
        { text: "Baixar pra 720p", outcomeText: "Renderizou rápido, mas estragou o filme.", moneyChange: -50, repChange: -30, emotion: "angry" },
        { text: "Vender Mac Studio", outcomeText: "Empurrou hardware de 50 mil reais. Dívida eterna.", moneyChange: 1000, repChange: -10, emotion: "sad" }
      ]
    },
    {
      id: "17", name: "Padre", gender: "male",
      dialogue: "O projetor da igreja pifou na missa de domingo. Não dá imagem!",
      options: [
        { text: "Trocar o cabo VGA", outcomeText: "Foi rápido e o cântico pôde continuar. Amém.", moneyChange: 100, repChange: 50, emotion: "happy" },
        { text: "Jogar água benta", outcomeText: "O projetor tomou choque e pegou fogo.", moneyChange: -300, repChange: -50, emotion: "angry" },
        { text: "Cobrar lâmpada cara", outcomeText: "Deus viu você cobrando a mais da igreja.", moneyChange: 300, repChange: -30, emotion: "sad" },
        { text: "Rezar para funcionar", outcomeText: "Milagres não arrumam hardware de vídeo.", moneyChange: 0, repChange: -20, emotion: "sad" }
      ]
    },
    {
      id: "18", name: "Hacker", gender: "male",
      dialogue: "Fui hackear o vizinho e meu PC travou numa tela CMD verde!",
      options: [
        { text: "Dar Ctrl+C no script", outcomeText: "O garoto nem sabia atalhos. Vergonha.", moneyChange: 100, repChange: 20, emotion: "happy" },
        { text: "Denunciar pra polícia", outcomeText: "O moleque saiu correndo e esqueceu o PC.", moneyChange: 300, repChange: -10, emotion: "sad" },
        { text: "Digitar 'Tree'", outcomeText: "Fingiu ser hacker também e cobrou caro.", moneyChange: 200, repChange: -10, emotion: "neutral" },
        { text: "Deletar system32", outcomeText: "Agora ele não tem sistema pra hackear.", moneyChange: -100, repChange: -40, emotion: "angry" }
      ]
    },
    {
      id: "19", name: "Fã da Apple", gender: "male",
      dialogue: "Derramei meu café importado no teclado do MacBook de 20 mil!",
      options: [
        { text: "Banho químico", outcomeText: "Salvo pela química! Teclado e placa perfeitos.", moneyChange: 100, repChange: 40, emotion: "happy" },
        { text: "Saco de arroz", outcomeText: "MacBook de 20 mil destruído por amido.", moneyChange: -500, repChange: -50, emotion: "sad" },
        { text: "Secar no microondas", outcomeText: "Explosão imediata. Fogo e gritaria.", moneyChange: -1000, repChange: -80, emotion: "angry" },
        { text: "Vender PC Windows", outcomeText: "Colapso total. Ele odeia Windows.", moneyChange: 0, repChange: -30, emotion: "angry" }
      ]
    },
    {
      id: "20", name: "Secretária", gender: "female",
      dialogue: "O mouse do PC não mexe! A setinha não vai!",
      options: [
        { text: "Tirar o adesivo do sensor", outcomeText: "Pegadinha de colega de trabalho. Resolvido.", moneyChange: 100, repChange: 30, emotion: "happy" },
        { text: "Cobrar Razer de R$800", outcomeText: "Mouse gamer pra usar no Excel.", moneyChange: 300, repChange: -10, emotion: "neutral" },
        { text: "Puxar o fio", outcomeText: "Arrebentou o fio USB. Você é estupido.", moneyChange: -50, repChange: -40, emotion: "angry" },
        { text: "Deletar driver", outcomeText: "O teclado parou junto. Caos total.", moneyChange: -100, repChange: -50, emotion: "sad" }
      ]
    },
    {
      id: "21", name: "Youtuber", gender: "male",
      dialogue: "O HD externo caiu da mesa e meu gameplay sumiu!",
      options: [
        { text: "Recuperação profunda", outcomeText: "Demorou 2 dias, mas salvou o vídeo!", moneyChange: 100, repChange: 50, emotion: "happy" },
        { text: "Abrir o HD no ar", outcomeText: "Poeira arranhou o disco. Perda total.", moneyChange: -300, repChange: -60, emotion: "sad" },
        { text: "Bater nele", outcomeText: "A agulha quebrou. RIP Youtuber.", moneyChange: -200, repChange: -50, emotion: "angry" },
        { text: "Baixar vídeo de outro", outcomeText: "Tomou Strike de direitos autorais.", moneyChange: -50, repChange: -40, emotion: "angry" }
      ]
    },
    {
      id: "22", name: "Médico", gender: "male",
      dialogue: "O software de laudos travou no meio do exame!",
      options: [
        { text: "Task Manager", outcomeText: "O software destravou sem perder dados! Herói.", moneyChange: 100, repChange: 50, emotion: "happy" },
        { text: "Puxar da tomada", outcomeText: "Corrompeu o HD do hospital inteiro.", moneyChange: -1000, repChange: -100, emotion: "angry" },
        { text: "Instalar The Sims 4", outcomeText: "Pipocou notificação no meio da cirurgia.", moneyChange: -200, repChange: -40, emotion: "sad" },
        { text: "Cobrar resgate", outcomeText: "Chantagem num momento desses? Karma ruim.", moneyChange: 500, repChange: -80, emotion: "angry" }
      ]
    },
    {
      id: "23", name: "Marcão Músico", gender: "male",
      dialogue: "O fone USB tá dando choque nas orelhas no meio da gravação!",
      options: [
        { text: "Isolar o terra da fonte", outcomeText: "Acabou os choques e gravou um hit.", moneyChange: 100, repChange: 40, emotion: "happy" },
        { text: "Fone sem fio", outcomeText: "Caro, mas não dá choque, né.", moneyChange: 250, repChange: -5, emotion: "neutral" },
        { text: "Durex na orelha", outcomeText: "Ficou ridículo e ele continuou tomando choque.", moneyChange: -50, repChange: -30, emotion: "angry" },
        { text: "Jogar água no fone", outcomeText: "Curto generalizado. Hospitalizado.", moneyChange: -500, repChange: -60, emotion: "sad" }
      ]
    },
    {
      id: "24", name: "Padeiro", gender: "male",
      dialogue: "Caiu farinha no teclado mecânico e o botão 'Enter' não volta!",
      options: [
        { text: "Limpeza com isopropílico", outcomeText: "Teclado limpinho e cheiroso. Ganhou pão.", moneyChange: 100, repChange: 35, emotion: "happy" },
        { text: "Jogar no forno", outcomeText: "O plástico derreteu formando um pão de ABS.", moneyChange: -100, repChange: -40, emotion: "sad" },
        { text: "Apertar mais forte", outcomeText: "Quebrou o switch no meio.", moneyChange: -50, repChange: -30, emotion: "angry" },
        { text: "Cobrar R$500", outcomeText: "Teclado ruim, mas funciona. Cobrou caríssimo.", moneyChange: 450, repChange: -20, emotion: "neutral" }
      ]
    },
    {
      id: "25", name: "Primo Chato", gender: "male",
      dialogue: "Ei primo, formata pra mim e baixa jogos de graça, valeu?",
      options: [
        { text: "Cobrar R$100", outcomeText: "Ele pagou os 100 reais resmungando.", moneyChange: 100, repChange: 10, emotion: "happy" },
        { text: "Fazer de graça", outcomeText: "Trabalhou 4 horas de graça.", moneyChange: -50, repChange: 10, emotion: "sad" },
        { text: "Excluir os arquivos", outcomeText: "Ele ficou revoltado e avisou a sua tia.", moneyChange: 0, repChange: -50, emotion: "angry" },
        { text: "Instalar vírus", outcomeText: "Ele quebrou o PC. Você sorriu.", moneyChange: 0, repChange: -20, emotion: "happy" }
      ]
    },
    {
      id: "26", name: "Corretor", gender: "male",
      dialogue: "Botei a senha do Windows mas tá errado. Juro que é '123456'!",
      options: [
        { text: "Desligar o Caps Lock", outcomeText: "Logou na hora. Ele se sentiu um completo idiota.", moneyChange: 100, repChange: 20, emotion: "happy" },
        { text: "Formatar por R$300", outcomeText: "Pagou pela burrice. E perdeu tudo.", moneyChange: 300, repChange: -10, emotion: "neutral" },
        { text: "Hacker bypass", outcomeText: "Quebrou o bitlocker. Pagou bem.", moneyChange: 200, repChange: 30, emotion: "happy" },
        { text: "Esquecer a senha", outcomeText: "Você ferrou o BIOS do cara.", moneyChange: -150, repChange: -40, emotion: "angry" }
      ]
    },
    {
      id: "27", name: "Fitness", gender: "male",
      dialogue: "Derramei Whey Protein no gabinete! Tá fedendo e travado!",
      options: [
        { text: "Banho de isopropílico", outcomeText: "Sem cheiro e rodando 100%. Shape mantido.", moneyChange: 100, repChange: 40, emotion: "happy" },
        { text: "Ligar o PC", outcomeText: "Whey queimado subiu uma fumaça horrível.", moneyChange: -200, repChange: -40, emotion: "sad" },
        { text: "Chupar com canudinho", outcomeText: "Você passou mal.", moneyChange: -100, repChange: -20, emotion: "sad" },
        { text: "Jogar formigas", outcomeText: "As formigas comeram o Whey e os fios.", moneyChange: -150, repChange: -50, emotion: "angry" }
      ]
    },
    {
      id: "28", name: "Professor", gender: "male",
      dialogue: "Meu pen drive tem a prova! Botei no PC da escola e virou .exe!",
      options: [
        { text: "Passar antivírus", outcomeText: "Vírus shortcut removido, provas salvas!", moneyChange: 100, repChange: 50, emotion: "happy" },
        { text: "Clicar no .exe", outcomeText: "Apagou as notas da escola inteira.", moneyChange: -200, repChange: -60, emotion: "angry" },
        { text: "Quebrar pendrive", outcomeText: "Prova perdida, alunos comemoraram.", moneyChange: 50, repChange: -40, emotion: "sad" },
        { text: "Formatar", outcomeText: "Limpo, mas provas perdidas.", moneyChange: -50, repChange: -20, emotion: "sad" }
      ]
    }
];
