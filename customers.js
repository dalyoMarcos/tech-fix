const gameData = [
    {
      id: "1", name: "Karen", gender: "female",
      brokenPart: "Bateria", 
      diagnosticText: "O notebook da Karen está completamente sem carga e o cabo do carregador parece não transmitir energia.",
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
      brokenPart: "Cabo de Vídeo",
      diagnosticText: "A Placa de Vídeo (GPU) está enviando sinal, mas o cabo do monitor está plugado na placa-mãe.",
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
      brokenPart: "Cooler/CPU",
      diagnosticText: "O processador está atingindo 95°C. A pasta térmica secou e o dissipador está entupido de poeira.",
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
      brokenPart: "RAM",
      diagnosticText: "Monitoramento de sistema indica 100% de uso de RAM e gargalo constante de memória.",
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
      brokenPart: "Software/OS",
      diagnosticText: "O sistema operacional foi criptografado por um ransomware. Os arquivos estão bloqueados.",
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
      brokenPart: "Software/Rede",
      diagnosticText: "O adaptador Wi-Fi do MacBook está perfeitamente bem. Não há sinal de roteador por perto.",
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
      brokenPart: "Cooling/Ambiente",
      diagnosticText: "As GPUs estão fritando a 105°C devido ao acúmulo de ar quente no ambiente fechado.",
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
      brokenPart: "Monitor",
      diagnosticText: "As configurações RGB do monitor estão totalmente desreguladas via hardware.",
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
      brokenPart: "Teclado",
      diagnosticText: "Análise visual revela um objeto estranho (migalha) travando fisicamente as chaves do teclado.",
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
      brokenPart: "HDD",
      diagnosticText: "O HD original do notebook é de 4200RPM (muito antigo e lento), engasgando o sistema inteiro.",
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
      brokenPart: "Software/Malware",
      diagnosticText: "O navegador está infestado de toolbars e extensões maliciosas de adware.",
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
      brokenPart: "Monitor",
      diagnosticText: "O painel LCD sofreu trauma físico irreversível na matriz de pixels.",
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
      brokenPart: "Cabo SATA/HDD",
      diagnosticText: "O Disco Rígido está sem comunicação porque o cabo SATA de dados soltou com a trepidação.",
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
      brokenPart: "Pendrive/Software",
      diagnosticText: "O pendrive foi infectado por um vírus que apenas esconde as pastas (attrib +h).",
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
      brokenPart: "RAM",
      diagnosticText: "A Memória RAM física é de apenas 4GB. O 'download' de RAM foi apenas um vírus disfarçado.",
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
      brokenPart: "Cooling/CPU",
      diagnosticText: "O processador está dando Thermal Throttling severo. A ventoinha está morta.",
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
      brokenPart: "Cabo de Vídeo",
      diagnosticText: "O cabo VGA está com pinos dobrados causando falta de imagem.",
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
      brokenPart: "Software/Terminal",
      diagnosticText: "O sistema está apenas rodando um loop infinito no Prompt de Comando.",
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
      brokenPart: "Placa-Mãe",
      diagnosticText: "Resíduos de café provocaram oxidação na placa-mãe. Precisa de desoxidação química rápida.",
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
      brokenPart: "Periféricos",
      diagnosticText: "O sensor óptico do mouse foi obstruído intencionalmente com um pedaço de fita adesiva.",
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
      brokenPart: "HDD",
      diagnosticText: "O disco rígido magnético apresenta cabeça de leitura presa. Precisa de software de recuperação profunda.",
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
      brokenPart: "Software/OS",
      diagnosticText: "Um processo fantasma está travando toda a memória da máquina. O hardware está ok.",
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
      brokenPart: "Fonte",
      diagnosticText: "A Fonte de Alimentação (PSU) está com fuga de corrente, eletrificando o chassi e os cabos USB.",
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
      brokenPart: "Teclado",
      diagnosticText: "Resíduos sólidos endurecidos de trigo bloqueiam o mecanismo de mola (switch) da tecla.",
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
      brokenPart: "Geral",
      diagnosticText: "Todas as peças estão normais. O usuário é apenas preguiçoso e quer explorar seu trabalho.",
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
      brokenPart: "Teclado",
      diagnosticText: "O indicador luminoso de CAPS LOCK está aceso. Senhas são sensíveis a maiúsculas.",
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
      brokenPart: "Placa-Mãe",
      diagnosticText: "Um líquido pastoso bloqueou os contatos da placa mãe e colou as ventoinhas.",
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
      brokenPart: "Software/Malware",
      diagnosticText: "O Pendrive está infectado com um verme (worm) que converte arquivos reais em atalhos .exe falsos.",
      dialogue: "Meu pen drive tem a prova! Botei no PC da escola e virou .exe!",
      options: [
        { text: "Passar antivírus", outcomeText: "Vírus shortcut removido, provas salvas!", moneyChange: 100, repChange: 50, emotion: "happy" },
        { text: "Clicar no .exe", outcomeText: "Apagou as notas da escola inteira.", moneyChange: -200, repChange: -60, emotion: "angry" },
        { text: "Quebrar pendrive", outcomeText: "Prova perdida, alunos comemoraram.", moneyChange: 50, repChange: -40, emotion: "sad" },
        { text: "Formatar", outcomeText: "Limpo, mas provas perdidas.", moneyChange: -50, repChange: -20, emotion: "sad" }
      ]
    }
,
    {
        name: 'Secretária',
        gender: 'female',
        dialogue: '“Meu computador liga, mas o monitor mostra que não há sinal. O  computador parece estar funcionando normalmente. O que vocês verificariam  primeiro?”',
        brokenPart: 'Monitor',
        diagnosticText: 'O cabo de vídeo é responsável por transmitir a imagem do  computador para o monitor. Se estiver solto, conectado incorretamente ou com  algum problema, o monitor pode mostrar a mensagem de que não há sinal. Por  isso, essa é uma das primeiras verificações a serem feitas.',
        options: [
            { text: 'O cabo de vídeo e suas conexões', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'O cabo de vídeo é responsável por transmitir a imagem do \ncomputador para o monitor. Se estiver solto, conectado incorretamente ou com \nalgum problema, o monitor pode mostrar a mensagem de que não há sinal. Por \nisso, essa é uma das primeiras verificações a serem feitas.' },
            { text: 'O volume do computador', moneyChange: 20, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O teclado', moneyChange: 20, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O pendrive', moneyChange: 20, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Secretária',
        gender: 'female',
        dialogue: '“Meu teclado funcionava normalmente, mas hoje não responde a  nenhuma tecla. O computador está ligado. O que vocês verificariam?”',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Como o computador está ligado, uma das primeiras possibilidades é  um problema na conexão do teclado. Verificar o cabo e a porta USB pode mostrar  se o teclado está corretamente conectado ou se a porta apresenta algum  problema.',
        options: [
            { text: 'A placa de vídeo', moneyChange: 20, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'A conexão do teclado e a porta USB', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Como o computador está ligado, uma das primeiras possibilidades é \num problema na conexão do teclado. Verificar o cabo e a porta USB pode mostrar \nse o teclado está corretamente conectado ou se a porta apresenta algum \nproblema.' },
            { text: 'O monitor', moneyChange: 50, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'A fonte', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Ana',
        gender: 'female',
        dialogue: '“Meu mouse parou de funcionar e não responde aos comandos. Como  vocês poderiam descobrir se o problema está na porta USB?”',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Ao conectar o mouse em outra porta USB, é possível verificar se ele  volta a funcionar. Se funcionar em outra porta, há uma indicação de que a porta  original pode estar com problema.',
        options: [
            { text: 'Aumentando o volume', moneyChange: 20, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Trocando o cabo do monitor', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Testando o mouse em outra porta USB', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Ao conectar o mouse em outra porta USB, é possível verificar se ele \nvolta a funcionar. Se funcionar em outra porta, há uma indicação de que a porta \noriginal pode estar com problema.' },
            { text: 'Trocando o teclado', moneyChange: 50, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Gamer Furioso',
        gender: 'male',
        dialogue: '“Meu computador está funcionando, mas não consigo ouvir nenhum  som. O que vocês verificariam antes de trocar alguma peça?”',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Antes de trocar qualquer componente, é importante verificar  soluções simples. O áudio pode estar no mudo, com o volume muito baixo ou com  o dispositivo de saída desativado. Essas verificações podem resolver o problema  sem precisar substituir peças.',
        options: [
            { text: 'O cabo do teclado', moneyChange: 50, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'A porta USB', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O cabo de energia', moneyChange: 50, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O volume e o estado do áudio', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Antes de trocar qualquer componente, é importante verificar \nsoluções simples. O áudio pode estar no mudo, com o volume muito baixo ou com \no dispositivo de saída desativado. Essas verificações podem resolver o problema \nsem precisar substituir peças.' },
        ]
    },
    {
        name: 'Ana',
        gender: 'female',
        dialogue: '“Quando conecto meu pendrive, o computador não o reconhece.  Outros dispositivos USB funcionam normalmente. O que pode ser investigado?”',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Como outros dispositivos USB funcionam, o problema pode estar  relacionado ao reconhecimento do pendrive, ao seu driver ou à porta USB  utilizada. Esses itens devem ser investigados para descobrir a causa.',
        options: [
            { text: 'A resolução do monitor', moneyChange: 20, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O driver ou a porta USB', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Como outros dispositivos USB funcionam, o problema pode estar \nrelacionado ao reconhecimento do pendrive, ao seu driver ou à porta USB \nutilizada. Esses itens devem ser investigados para descobrir a causa.' },
            { text: 'O volume das caixas de som', moneyChange: 50, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O cabo de vídeo', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Marcos',
        gender: 'male',
        dialogue: '“Meu computador não apresenta nenhum sinal quando aperto o botão  de ligar. O que vocês verificariam antes de abrir o gabinete?”',
        brokenPart: 'Fonte',
        diagnosticText: 'Quando o computador não apresenta nenhum sinal de energia, é  importante começar pelas verificações externas. A tomada, o cabo de energia e a  alimentação elétrica devem ser conferidos antes de abrir o gabinete ou mexer nos  componentes internos.',
        options: [
            { text: 'O teclado', moneyChange: 50, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O mouse', moneyChange: 20, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'A alimentação elétrica e os cabos', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Quando o computador não apresenta nenhum sinal de energia, é \nimportante começar pelas verificações externas. A tomada, o cabo de energia e a \nalimentação elétrica devem ser conferidos antes de abrir o gabinete ou mexer nos \ncomponentes internos.' },
            { text: 'O volume', moneyChange: 50, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Secretária',
        gender: 'female',
        dialogue: '“Meu monitor está ligado, mas aparece uma mensagem dizendo que  não há sinal. O computador parece estar ligado. Qual pode ser a causa?”',
        brokenPart: 'Monitor',
        diagnosticText: 'O monitor precisa receber um sinal de vídeo do computador para  apresentar a imagem. Se o cabo estiver mal conectado, esse sinal pode não  chegar ao monitor, causando a mensagem de “sem sinal”.',
        options: [
            { text: 'O mouse está sem driver', moneyChange: 50, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O teclado está desconectado', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O cabo de vídeo pode estar mal conectado', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'O monitor precisa receber um sinal de vídeo do computador para \napresentar a imagem. Se o cabo estiver mal conectado, esse sinal pode não \nchegar ao monitor, causando a mensagem de “sem sinal”.' },
            { text: 'O volume está baixo', moneyChange: 20, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Fernando',
        gender: 'male',
        dialogue: '“Meu mouse funciona em outro computador, mas não funciona neste. O  que isso pode indicar?”',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Se o mouse funciona em outro computador, isso indica que o mouse  provavelmente está funcionando. Assim, é possível investigar as portas USB do  computador onde ele não funciona.',
        options: [
            { text: 'Problema em uma porta USB deste computador', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Se o mouse funciona em outro computador, isso indica que o mouse \nprovavelmente está funcionando. Assim, é possível investigar as portas USB do \ncomputador onde ele não funciona.' },
            { text: 'Problema no monitor', moneyChange: 50, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Problema no volume', moneyChange: 20, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Problema no cabo de vídeo', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Cliente Confuso',
        gender: 'male',
        dialogue: '“Meu teclado e meu mouse pararam de funcionar ao mesmo tempo. O  computador continua ligado. Qual seria uma possibilidade?”',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Como teclado e mouse geralmente utilizam portas USB, os dois  pararem de funcionar ao mesmo tempo pode indicar um problema nas portas USB  ou no funcionamento delas.',
        options: [
            { text: 'Problema nas portas USB', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Como teclado e mouse geralmente utilizam portas USB, os dois \npararem de funcionar ao mesmo tempo pode indicar um problema nas portas USB \nou no funcionamento delas.' },
            { text: 'Problema no monitor', moneyChange: 50, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Problema nas caixas de som', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Problema no cabo de vídeo', moneyChange: 0, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Cliente Confuso',
        gender: 'male',
        dialogue: '“Meu pendrive funciona em outros computadores, mas não neste. O  que vocês poderiam verificar?”',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Se o pendrive funciona em outros computadores, ele provavelmente  não é o problema principal. Nesse caso, deve-se verificar se o computador está  reconhecendo o dispositivo e se o driver necessário está funcionando  corretamente.',
        options: [
            { text: 'O cabo do monitor', moneyChange: 50, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O volume', moneyChange: 0, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O reconhecimento do dispositivo e o driver', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Se o pendrive funciona em outros computadores, ele provavelmente \nnão é o problema principal. Nesse caso, deve-se verificar se o computador está \nreconhecendo o dispositivo e se o driver necessário está funcionando \ncorretamente.' },
            { text: 'O teclado', moneyChange: 50, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Cliente Apressada',
        gender: 'female',
        dialogue: '“Depois que mudei o computador de lugar, ele não ligou mais. O que  vocês verificariam primeiro?”',
        brokenPart: 'Fonte',
        diagnosticText: 'Como o problema aconteceu depois de mudar o computador de  lugar, é possível que o cabo de energia tenha se soltado ou que o computador  esteja conectado a uma tomada sem energia. Por isso, esses itens devem ser  verificados primeiro.',
        options: [
            { text: 'O mouse', moneyChange: 50, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'A tomada e o cabo de energia', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Como o problema aconteceu depois de mudar o computador de \nlugar, é possível que o cabo de energia tenha se soltado ou que o computador \nesteja conectado a uma tomada sem energia. Por isso, esses itens devem ser \nverificados primeiro.' },
            { text: 'O teclado', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O cabo de áudio', moneyChange: 50, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Secretária',
        gender: 'female',
        dialogue: '“Meu computador liga, mas o monitor não mostra imagem. Já  confirmei que o monitor está ligado. O que mais vocês verificariam?”',
        brokenPart: 'Monitor',
        diagnosticText: 'Se o monitor já está ligado, o próximo passo é verificar se ele está  recebendo o sinal de vídeo corretamente. Para isso, deve-se conferir o cabo e se  ele está conectado à entrada correta.',
        options: [
            { text: 'O cabo de vídeo e a entrada utilizada', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Se o monitor já está ligado, o próximo passo é verificar se ele está \nrecebendo o sinal de vídeo corretamente. Para isso, deve-se conferir o cabo e se \nele está conectado à entrada correta.' },
            { text: 'O volume', moneyChange: 0, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O teclado', moneyChange: 0, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O mouse', moneyChange: 20, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Secretária',
        gender: 'female',
        dialogue: '“Meu pendrive não funciona na entrada USB da frente, mas funciona  quando conecto atrás. O que pode estar acontecendo?”',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Como o pendrive funciona nas portas traseiras, o próprio dispositivo  provavelmente está funcionando. O problema pode estar especificamente na  porta USB frontal ou na conexão interna dessas portas.',
        options: [
            { text: 'Problema no monitor', moneyChange: 50, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Problema no teclado', moneyChange: 0, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Problema na porta USB frontal ou em sua conexão', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Como o pendrive funciona nas portas traseiras, o próprio dispositivo \nprovavelmente está funcionando. O problema pode estar especificamente na \nporta USB frontal ou na conexão interna dessas portas.' },
            { text: 'Problema no volume', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Ana',
        gender: 'female',
        dialogue: '“Meu computador parou de emitir som. Ontem estava funcionando  normalmente. Qual seria uma verificação rápida?”',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Verificar o volume e se o áudio está ativado é uma forma rápida e  simples de identificar problemas de som. Não é necessário começar trocando  componentes.',
        options: [
            { text: 'Verificar se o áudio está ativado e se o volume está no mudo', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Verificar o volume e se o áudio está ativado é uma forma rápida e \nsimples de identificar problemas de som. Não é necessário começar trocando \ncomponentes.' },
            { text: 'Trocar a placa-mãe', moneyChange: 20, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Trocar o monitor', moneyChange: 0, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Trocar o mouse', moneyChange: 20, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Gamer Furioso',
        gender: 'male',
        dialogue: '“Meu computador não liga depois que foi conectado em outro local. A  fonte possui uma chave de seleção de tensão. O que vocês precisam conferir?”',
        brokenPart: 'Fonte',
        diagnosticText: 'Quando o computador é conectado a uma rede elétrica diferente, é  importante conferir se a fonte está configurada para a tensão adequada. Uma  configuração incorreta pode impedir o funcionamento correto e até causar danos  ao equipamento.',
        options: [
            { text: 'O cabo do mouse', moneyChange: 0, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O teclado', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'A configuração de tensão da fonte', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Quando o computador é conectado a uma rede elétrica diferente, é \nimportante conferir se a fonte está configurada para a tensão adequada. Uma \nconfiguração incorreta pode impedir o funcionamento correto e até causar danos \nao equipamento.' },
            { text: 'O volume', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Ana',
        gender: 'female',
        dialogue: '“Meu teclado funciona em uma porta USB, mas não funciona em  outra. O que isso pode indicar?”',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Se o mesmo teclado funciona em uma porta USB, mas não funciona  em outra, isso indica que o problema pode estar especificamente na porta que  não está funcionando.',
        options: [
            { text: 'Problema no monitor', moneyChange: 0, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Problema naquela porta USB', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Se o mesmo teclado funciona em uma porta USB, mas não funciona \nem outra, isso indica que o problema pode estar especificamente na porta que \nnão está funcionando.' },
            { text: 'Problema nas caixas de som', moneyChange: 20, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Problema no cabo de vídeo', moneyChange: 50, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Maria',
        gender: 'female',
        dialogue: '“Meu monitor funcionava normalmente, mas depois que mexi nos  cabos ficou sem imagem. O que vocês verificariam?”',
        brokenPart: 'Monitor',
        diagnosticText: 'Como o problema apareceu depois que os cabos foram mexidos, é  importante verificar se o cabo de vídeo ficou solto, mal conectado ou conectado  na entrada incorreta.',
        options: [
            { text: 'O mouse', moneyChange: 20, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O teclado', moneyChange: 50, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O cabo de vídeo', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Como o problema apareceu depois que os cabos foram mexidos, é \nimportante verificar se o cabo de vídeo ficou solto, mal conectado ou conectado \nna entrada incorreta.' },
            { text: 'O volume', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Ana',
        gender: 'female',
        dialogue: '“Meu computador está ligado, mas o monitor não apresenta imagem.  Vocês perceberam que o cabo está conectado na entrada errada. O que isso pode  causar?”',
        brokenPart: 'Monitor',
        diagnosticText: 'Se o cabo estiver conectado em uma entrada ou saída de vídeo  incorreta, o monitor pode não receber o sinal de imagem do computador. Por isso,  a tela pode permanecer sem sinal.',
        options: [
            { text: 'Falha no teclado', moneyChange: 50, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Falha no áudio', moneyChange: 50, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Falta de sinal no monitor', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Se o cabo estiver conectado em uma entrada ou saída de vídeo \nincorreta, o monitor pode não receber o sinal de imagem do computador. Por isso, \na tela pode permanecer sem sinal.' },
            { text: 'Falha no mouse', moneyChange: 20, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Cliente Apressada',
        gender: 'female',
        dialogue: '“Meu computador não liga e já tentei apertar o botão várias vezes. O  que seria mais adequado verificar antes de concluir que alguma peça interna está  com defeito?”',
        brokenPart: 'Fonte',
        diagnosticText: 'Antes de considerar um defeito interno, é importante verificar as  conexões elétricas, como tomada, cabo de energia e alimentação da fonte. Muitas  falhas podem ser causadas por conexões simples.',
        options: [
            { text: 'As conexões elétricas', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Antes de considerar um defeito interno, é importante verificar as \nconexões elétricas, como tomada, cabo de energia e alimentação da fonte. Muitas \nfalhas podem ser causadas por conexões simples.' },
            { text: 'O mouse', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O volume', moneyChange: 20, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O teclado', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Cliente Apressada',
        gender: 'female',
        dialogue: '“Meu mouse não funciona, mas o teclado funciona normalmente. Qual  teste pode ajudar a descobrir a causa?”',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Testar o mouse em outra porta USB ajuda a descobrir se o problema  está na porta utilizada originalmente. Se ele funcionar em outra porta, a primeira  porta pode estar com defeito.',
        options: [
            { text: 'Trocar o monitor', moneyChange: 20, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Testar outra porta USB', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Testar o mouse em outra porta USB ajuda a descobrir se o problema \nestá na porta utilizada originalmente. Se ele funcionar em outra porta, a primeira \nporta pode estar com defeito.' },
            { text: 'Aumentar o volume', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Trocar a fonte', moneyChange: 0, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Gamer Furioso',
        gender: 'male',
        dialogue: '“Meu computador reconhece outros pendrives, mas não reconhece o  meu. Qual pode ser uma causa?”',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Se o computador reconhece outros pendrives, as portas USB  provavelmente estão funcionando. Assim, é possível investigar o próprio pendrive  ou problemas relacionados ao seu reconhecimento e driver.',
        options: [
            { text: 'Problema no driver ou no próprio pendrive', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Se o computador reconhece outros pendrives, as portas USB \nprovavelmente estão funcionando. Assim, é possível investigar o próprio pendrive \nou problemas relacionados ao seu reconhecimento e driver.' },
            { text: 'Problema no monitor', moneyChange: 20, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Problema no teclado', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Volume muito baixo', moneyChange: 20, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Gamer Furioso',
        gender: 'male',
        dialogue: '“As caixas de som estão conectadas, mas não sai nenhum áudio. O  que vocês verificariam?”',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Mesmo com as caixas conectadas, o áudio pode estar desativado ou  o volume pode estar incorreto. Por isso, essas são verificações básicas antes de  pensar em trocar algum componente.',
        options: [
            { text: 'Se o dispositivo de áudio está habilitado e o volume está correto', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Mesmo com as caixas conectadas, o áudio pode estar desativado ou \no volume pode estar incorreto. Por isso, essas são verificações básicas antes de \npensar em trocar algum componente.' },
            { text: 'Se o mouse está conectado', moneyChange: 50, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Se o monitor está na tomada', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Se o pendrive funciona', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'João',
        gender: 'male',
        dialogue: '“Meu monitor funciona quando uso outro cabo, mas com o cabo  antigo não aparece imagem. Qual é a suspeita mais provável?”',
        brokenPart: 'Monitor',
        diagnosticText: 'Como o monitor funciona normalmente quando outro cabo é  utilizado, o cabo antigo passa a ser a principal suspeita. Ele pode estar danificado  ou apresentar falha na transmissão do sinal.',
        options: [
            { text: 'Problema no teclado', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Problema no mouse', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Problema no cabo de vídeo', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Como o monitor funciona normalmente quando outro cabo é \nutilizado, o cabo antigo passa a ser a principal suspeita. Ele pode estar danificado \nou apresentar falha na transmissão do sinal.' },
            { text: 'Problema no pendrive', moneyChange: 50, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Gamer Furioso',
        gender: 'male',
        dialogue: '“Meu teclado e meu mouse não funcionam nas portas frontais, mas  funcionam nas traseiras. O que vocês investigariam?”',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Como os dois periféricos funcionam nas portas traseiras, o problema  provavelmente está relacionado às portas USB frontais ou à conexão interna  delas.',
        options: [
            { text: 'O cabo de vídeo', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O volume', moneyChange: 50, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'As portas USB frontais', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Como os dois periféricos funcionam nas portas traseiras, o problema \nprovavelmente está relacionado às portas USB frontais ou à conexão interna \ndelas.' },
            { text: 'O monitor', moneyChange: 50, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Ana',
        gender: 'female',
        dialogue: '“Meu computador não liga e não apresenta nenhum sinal de energia.  Qual sequência de diagnóstico faz mais sentido?”',
        brokenPart: 'Fonte',
        diagnosticText: 'Quando não há nenhum sinal de energia, o diagnóstico deve  começar pela alimentação elétrica. Primeiro verifica-se a tomada, depois o cabo  de energia e, em seguida, a fonte.',
        options: [
            { text: 'Mouse -> teclado -> monitor', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Monitor -> pendrive -> teclado', moneyChange: 20, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Tomada -> cabo de energia -> fonte', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Quando não há nenhum sinal de energia, o diagnóstico deve \ncomeçar pela alimentação elétrica. Primeiro verifica-se a tomada, depois o cabo \nde energia e, em seguida, a fonte.' },
            { text: 'Volume -> caixa de som -> mouse', moneyChange: 50, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Carlos',
        gender: 'male',
        dialogue: '“Meu pendrive não é reconhecido em uma porta específica, mas  funciona em outras. Como vocês poderiam confirmar a suspeita?”',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Testar outros dispositivos na mesma porta ajuda a descobrir se o  problema está realmente naquela porta USB. Se outros dispositivos também não  funcionarem nela, aumenta a suspeita de defeito na porta.',
        options: [
            { text: 'Testando outros dispositivos nessa porta USB', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Testar outros dispositivos na mesma porta ajuda a descobrir se o \nproblema está realmente naquela porta USB. Se outros dispositivos também não \nfuncionarem nela, aumenta a suspeita de defeito na porta.' },
            { text: 'Trocando o monitor', moneyChange: 20, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Aumentando o volume', moneyChange: 20, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Trocando o teclado', moneyChange: 0, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Gamer Furioso',
        gender: 'male',
        dialogue: '“O monitor está ligado e o computador também, mas a tela continua  sem imagem. Qual verificação faz mais sentido?”',
        brokenPart: 'Monitor',
        diagnosticText: 'Para que o monitor apresente a imagem, ele precisa estar  selecionado na entrada correta e receber o sinal pelo cabo de vídeo. Por isso,  esses são pontos importantes para verificar.',
        options: [
            { text: 'Conferir a entrada selecionada e o cabo de vídeo', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Para que o monitor apresente a imagem, ele precisa estar \nselecionado na entrada correta e receber o sinal pelo cabo de vídeo. Por isso, \nesses são pontos importantes para verificar.' },
            { text: 'Aumentar o volume', moneyChange: 50, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Trocar o mouse', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Conectar um pendrive', moneyChange: 0, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Cliente Confuso',
        gender: 'male',
        dialogue: '“Meu computador não está emitindo som e vocês descobriram que o  dispositivo de áudio estava desativado. O que deve ser feito?”',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Se o problema foi identificado como um dispositivo de áudio  desativado, basta reativá-lo para permitir que o sistema volte a utilizá-lo para a  reprodução de som.',
        options: [
            { text: 'Trocar a fonte', moneyChange: 50, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Reativar o dispositivo de áudio', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Se o problema foi identificado como um dispositivo de áudio \ndesativado, basta reativá-lo para permitir que o sistema volte a utilizá-lo para a \nreprodução de som.' },
            { text: 'Trocar o monitor', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Trocar o mouse', moneyChange: 50, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Maria',
        gender: 'female',
        dialogue: '“Meu computador não liga depois de ser conectado a uma rede  elétrica diferente. A fonte possui uma chave de tensão. O que deve ser  analisado?”',
        brokenPart: 'Fonte',
        diagnosticText: 'Uma mudança na rede elétrica exige atenção à configuração de  tensão da fonte. É necessário verificar se ela está adequada à tensão da rede  antes de tentar utilizar o computador novamente.',
        options: [
            { text: 'A conexão do teclado', moneyChange: 20, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'A configuração de tensão da fonte', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Uma mudança na rede elétrica exige atenção à configuração de \ntensão da fonte. É necessário verificar se ela está adequada à tensão da rede \nantes de tentar utilizar o computador novamente.' },
            { text: 'O cabo do mouse', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O volume', moneyChange: 20, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Secretária',
        gender: 'female',
        dialogue: '“Meu mouse funciona em outros computadores, mas não neste. Vocês  já testaram outra porta e ele continua sem funcionar. O que pode ser  investigado?”',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Como o mouse funciona em outros computadores e já foi testado em  outra porta, é necessário investigar como este computador está reconhecendo o  dispositivo e verificar o funcionamento das portas USB.',
        options: [
            { text: 'O reconhecimento do dispositivo e as portas USB', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Como o mouse funciona em outros computadores e já foi testado em \noutra porta, é necessário investigar como este computador está reconhecendo o \ndispositivo e verificar o funcionamento das portas USB.' },
            { text: 'O volume', moneyChange: 20, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O monitor', moneyChange: 50, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O cabo de vídeo', moneyChange: 0, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Beatriz',
        gender: 'female',
        dialogue: '“Meu teclado não responde, mas quando vocês conectam outro  teclado na mesma porta, ele funciona. Qual é a conclusão mais provável?”',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Se outro teclado funciona na mesma porta USB, a porta está  funcionando. Dessa forma, o primeiro teclado passa a ser o principal suspeito de  apresentar algum defeito.',
        options: [
            { text: 'O monitor está com defeito', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'A porta USB está quebrada', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O primeiro teclado pode estar com defeito', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Se outro teclado funciona na mesma porta USB, a porta está \nfuncionando. Dessa forma, o primeiro teclado passa a ser o principal suspeito de \napresentar algum defeito.' },
            { text: 'A fonte está configurada incorretamente', moneyChange: 0, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Marcos',
        gender: 'male',
        dialogue: '“Meu computador liga normalmente, mas o monitor não recebe sinal.  Vocês perceberam que o cabo está conectado na entrada errada. O que deve ser  feito?”',
        brokenPart: 'Monitor',
        diagnosticText: 'O cabo precisa estar conectado à saída de vídeo correta do  computador para transmitir o sinal para o monitor. Corrigir a conexão pode fazer a  imagem voltar a aparecer.',
        options: [
            { text: 'Trocar a memória RAM', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Trocar o mouse', moneyChange: 20, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Conectar o cabo na saída de vídeo correta', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'O cabo precisa estar conectado à saída de vídeo correta do \ncomputador para transmitir o sinal para o monitor. Corrigir a conexão pode fazer a \nimagem voltar a aparecer.' },
            { text: 'Instalar um driver de áudio', moneyChange: 20, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Maria',
        gender: 'female',
        dialogue: '“Quando conecto meu pendrive, o computador faz o som de conexão,  mas ele não aparece. O que pode ser necessário verificar?”',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'O som de conexão indica que o computador percebeu que um  dispositivo foi conectado, mas isso não significa necessariamente que ele foi  reconhecido corretamente. Por isso, deve-se verificar o reconhecimento do  dispositivo e seus drivers.',
        options: [
            { text: 'O reconhecimento do dispositivo e seus drivers', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'O som de conexão indica que o computador percebeu que um \ndispositivo foi conectado, mas isso não significa necessariamente que ele foi \nreconhecido corretamente. Por isso, deve-se verificar o reconhecimento do \ndispositivo e seus drivers.' },
            { text: 'O cabo de energia do monitor', moneyChange: 20, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O volume das caixas de som', moneyChange: 20, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O teclado', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Marcos',
        gender: 'male',
        dialogue: '“Meu computador não liga, mas os periféricos parecem estar  conectados corretamente. Qual item externo ainda merece ser verificado?”',
        brokenPart: 'Fonte',
        diagnosticText: 'Mesmo que os periféricos estejam conectados corretamente, o  computador precisa receber energia para ligar. Portanto, é importante verificar a  alimentação elétrica da fonte e suas conexões.',
        options: [
            { text: 'A alimentação elétrica da fonte', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Mesmo que os periféricos estejam conectados corretamente, o \ncomputador precisa receber energia para ligar. Portanto, é importante verificar a \nalimentação elétrica da fonte e suas conexões.' },
            { text: 'O driver do mouse', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O volume', moneyChange: 50, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O cabo de áudio', moneyChange: 20, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Gamer Furioso',
        gender: 'male',
        dialogue: '“Meu monitor não mostra imagem depois que o computador foi  instalado novamente. O que vocês verificariam antes de fazer alterações mais  complexas?”',
        brokenPart: 'Monitor',
        diagnosticText: 'Antes de realizar procedimentos mais complexos, é recomendado  verificar as conexões básicas. O cabo de vídeo e a entrada utilizada podem estar  incorretos ou mal conectados, impedindo a transmissão da imagem.',
        options: [
            { text: 'A conexão do cabo de vídeo e a entrada utilizada', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Antes de realizar procedimentos mais complexos, é recomendado \nverificar as conexões básicas. O cabo de vídeo e a entrada utilizada podem estar \nincorretos ou mal conectados, impedindo a transmissão da imagem.' },
            { text: 'O pendrive', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O teclado', moneyChange: 50, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O volume', moneyChange: 0, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Juliana',
        gender: 'female',
        dialogue: '“Meu teclado parou de responder, mas o restante do computador  parece normal. Qual seria uma boa maneira de verificar se o problema está na  conexão?”',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Conectar o teclado em outra porta USB permite verificar se o  problema está na porta original. Se funcionar na outra porta, existe uma indicação  de falha na conexão ou na porta utilizada inicialmente.',
        options: [
            { text: 'Trocar o monitor', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Testar outra porta USB', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Conectar o teclado em outra porta USB permite verificar se o \nproblema está na porta original. Se funcionar na outra porta, existe uma indicação \nde falha na conexão ou na porta utilizada inicialmente.' },
            { text: 'Trocar a fonte', moneyChange: 50, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Aumentar o volume', moneyChange: 50, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Marcos',
        gender: 'male',
        dialogue: '“Meu computador liga, mas não tenho áudio. As caixas estão  conectadas. Qual problema simples vocês verificariam primeiro?”',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Mesmo com as caixas conectadas, o computador pode estar no  mudo ou com o dispositivo de áudio desativado. Essas são verificações simples  que devem ser feitas antes de considerar problemas mais complexos.',
        options: [
            { text: 'Se o sistema está no mudo ou com o dispositivo de áudio desativado', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Mesmo com as caixas conectadas, o computador pode estar no \nmudo ou com o dispositivo de áudio desativado. Essas são verificações simples \nque devem ser feitas antes de considerar problemas mais complexos.' },
            { text: 'Se o cabo HDMI está na placa correta', moneyChange: 50, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Se o pendrive funciona', moneyChange: 50, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Se o teclado está conectado', moneyChange: 50, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Gamer Furioso',
        gender: 'male',
        dialogue: '“O pendrive funciona em todas as portas traseiras, mas nenhuma  porta frontal consegue reconhecê-lo. O que isso pode indicar?”',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Como o pendrive funciona nas portas traseiras, o dispositivo e as  portas traseiras estão funcionando. O fato de nenhuma porta frontal reconhecê-lo  indica que pode existir um problema nas portas USB frontais ou na conexão  interna delas.',
        options: [
            { text: 'Problema no monitor', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Problema no volume', moneyChange: 50, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Problema nas portas USB frontais ou na conexão delas', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Como o pendrive funciona nas portas traseiras, o dispositivo e as \nportas traseiras estão funcionando. O fato de nenhuma porta frontal reconhecê-lo \nindica que pode existir um problema nas portas USB frontais ou na conexão \ninterna delas.' },
            { text: 'Problema no teclado', moneyChange: 20, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Juliana',
        gender: 'female',
        dialogue: '“Meu computador não liga depois que foi conectado a uma rede  elétrica diferente. O que é importante verificar antes de tentar ligá-lo novamente?”',
        brokenPart: 'Fonte',
        diagnosticText: 'Ao conectar o computador a uma rede elétrica diferente, é  importante verificar se a tensão selecionada na fonte é compatível com a rede.  Essa verificação deve ser feita antes de tentar ligar o equipamento novamente.',
        options: [
            { text: 'O cabo do mouse', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O volume', moneyChange: 50, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'A configuração de tensão da fonte', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Ao conectar o computador a uma rede elétrica diferente, é \nimportante verificar se a tensão selecionada na fonte é compatível com a rede. \nEssa verificação deve ser feita antes de tentar ligar o equipamento novamente.' },
            { text: 'O cabo do teclado', moneyChange: 20, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Ana',
        gender: 'female',
        dialogue: '“Meu computador não liga e eu não sei identificar o motivo. Como  técnicos, qual seria a melhor abordagem inicial?”',
        brokenPart: 'Fonte',
        diagnosticText: 'O procedimento correto é começar por um diagnóstico básico e  sistemático. Primeiro devem ser verificadas a energia, a tomada, os cabos e  outras conexões externas. Só depois de eliminar essas possibilidades é que se  deve investigar problemas internos ou considerar a troca de componentes.',
        options: [
            { text: 'Trocar imediatamente a placa-mãe', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Formatar o computador', moneyChange: 50, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Fazer um diagnóstico básico, começando pela energia e conexões externas', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'O procedimento correto é começar por um diagnóstico básico e \nsistemático. Primeiro devem ser verificadas a energia, a tomada, os cabos e \noutras conexões externas. Só depois de eliminar essas possibilidades é que se \ndeve investigar problemas internos ou considerar a troca de componentes.' },
            { text: 'Trocar todos os periféricos', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Fernando',
        gender: 'male',
        dialogue: 'Meu computador está ficando lento cada vez que eu ligo. Depois de alguns minutos, o uso do processador fica muito alto. Pode ter alguma coisa escondida rodando?',
        brokenPart: 'Software',
        diagnosticText: 'Um malware pode iniciar automaticamente com o sistema e permanecer funcionando em segundo plano. Isso pode consumir bastante CPU e deixar o computador lento.',
        options: [
            { text: 'Sim. Um malware pode iniciar automaticamente com o sistema e funcionar em segundo plano, consumindo o processador.', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Um malware pode iniciar automaticamente com o sistema e permanecer funcionando\nem segundo plano. Isso pode consumir bastante CPU e deixar o computador lento.' },
            { text: 'Não. Programas escondidos não conseguem usar o processador, pois apenas programas com janelas abertas conseguem executar tarefas.', moneyChange: 20, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Não. Um HD muito cheio pode deixar o computador lento. Nesse caso, basta apagar arquivos desnecessários.', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Sim, mas somente se o computador não tiver placa de vídeo. Nesse caso, seria necessário instalar uma placa.', moneyChange: 20, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Ana',
        gender: 'female',
        dialogue: 'Ontem eu baixei um programa gratuito para editar vídeos. A instalação terminou normalmente, mas depois disso o computador começou a travar bastante. Quando não estou fazendo nada, parece que ele continua trabalhando. O que pode estar acontecendo?',
        brokenPart: 'Monitor',
        diagnosticText: 'Um programa gratuito pode vir acompanhado de software malicioso ou indesejado. Como os travamentos começaram após a instalação, é recomendado desinstalar o programa suspeito e fazer uma verificação.',
        options: [
            { text: 'O computador pode precisar de alguns dias para se adaptar ao programa. Nesse período, alguns processos podem consumir mais recursos.', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O programa pode ter instalado um software malicioso que continua funcionando em segundo plano e consumindo recursos.', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Um programa gratuito pode vir acompanhado de software malicioso ou indesejado.\nComo os travamentos começaram após a instalação, é recomendado desinstalar o\nprograma suspeito e fazer uma verificação.' },
            { text: 'O monitor pode estar utilizando parte da memória do computador e fazendo o sistema trabalhar mais.', moneyChange: 20, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O sistema operacional pode ficar temporariamente mais lento depois de uma instalação para realizar tarefas internas.', moneyChange: 0, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Maria',
        gender: 'female',
        dialogue: 'Meu navegador começou a abrir páginas e propagandas que eu não procurei. Às vezes isso acontece até quando não estou navegando. Também apareceu uma extensão que não lembro de ter instalado. O que pode ter acontecido?',
        brokenPart: 'Software',
        diagnosticText: 'Um adware pode modificar o navegador e exibir propagandas indesejadas. Extensões desconhecidas e programas suspeitos devem ser removidos.',
        options: [
            { text: 'O monitor pode estar apresentando propagandas por causa de algum defeito. Testar outro monitor ajudaria a verificar.', moneyChange: 50, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O computador pode ter instalado um adware que altera o navegador e exibe propagandas e extensões indesejadas.', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Um adware pode modificar o navegador e exibir propagandas indesejadas. Extensões\ndesconhecidas e programas suspeitos devem ser removidos.' },
            { text: 'Isso é normal em computadores conectados à internet, pois os navegadores precisam exibir propagandas para funcionar.', moneyChange: 50, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'A memória RAM pode estar criando páginas automaticamente quando fica sobrecarregada.', moneyChange: 50, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Cliente Apressada',
        gender: 'female',
        dialogue: 'Eu estava jogando e percebi que o computador começou a esquentar muito. Fechei o jogo, mas o cooler continuou acelerado. No Gerenciador de Tarefas, encontrei um processo desconhecido usando bastante CPU. Isso começou depois que instalei um programa da internet.',
        brokenPart: 'CPU',
        diagnosticText: 'Programas maliciosos podem executar tarefas em segundo plano sem mostrar uma janela. Como o problema começou após uma instalação suspeita, é importante identificar o processo e fazer uma verificação.',
        options: [
            { text: 'Todo processo desconhecido é necessariamente uma atualização do Windows. Nesse caso, seria melhor esperar.', moneyChange: 0, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Um programa malicioso ou indesejado pode estar usando o processador em segundo plano.', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Programas maliciosos podem executar tarefas em segundo plano sem mostrar uma\njanela. Como o problema começou após uma instalação suspeita, é importante\nidentificar o processo e fazer uma verificação.' },
            { text: 'O cooler só acelera quando a placa de vídeo apresenta algum defeito. Nesse caso, seria necessário verificar a placa.', moneyChange: 20, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O processo pode ser ignorado porque programas sem janela aberta não conseguem executar tarefas.', moneyChange: 50, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Gamer Furioso',
        gender: 'male',
        dialogue: 'Toda vez que entro no navegador, a página inicial mudou e aparecem anúncios que eu nunca tinha visto. Tentei alterar as configurações, mas elas voltam sozinhas. O que pode estar acontecendo?',
        brokenPart: 'Software',
        diagnosticText: 'Extensões ou programas indesejados podem alterar as configurações do navegador repetidamente. É recomendado remover programas suspeitos e restaurar as configurações.',
        options: [
            { text: 'Uma extensão ou programa indesejado pode estar alterando as configurações do navegador.', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Extensões ou programas indesejados podem alterar as configurações do navegador\nrepetidamente. É recomendado remover programas suspeitos e restaurar as\nconfigurações.' },
            { text: 'Esse comportamento é normal em navegadores depois de alguns meses de uso. Nesse caso, bastaria atualizar o navegador.', moneyChange: 50, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O problema pode estar relacionado ao cabo de internet, fazendo o navegador carregar páginas diferentes.', moneyChange: 20, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'A memória RAM pode estar escolhendo a página inicial quando há pouca memória disponível.', moneyChange: 50, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Fernando',
        gender: 'male',
        dialogue: 'Depois de instalar um aplicativo, comecei a receber mensagens estranhas e percebi que algumas informações do meu computador pareciam estar sendo acessadas sem autorização. Não notei nenhum problema de velocidade. Isso pode ser malware?',
        brokenPart: 'Software',
        diagnosticText: 'Nem todo malware causa lentidão. Um spyware pode funcionar discretamente para coletar informações. Por isso, mesmo sem perda de desempenho, uma atividade suspeita deve ser investigada.',
        options: [
            { text: 'Não. Se o computador não estiver lento, não existe possibilidade de malware.', moneyChange: 50, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Sim. Pode ser um spyware, que tenta coletar informações sem chamar muita atenção.', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Nem todo malware causa lentidão. Um spyware pode funcionar discretamente para\ncoletar informações. Por isso, mesmo sem perda de desempenho, uma atividade\nsuspeita deve ser investigada.' },
            { text: 'Apenas vírus que causam lentidão são perigosos. Por isso, basta procurar programas que usam muita CPU.', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O problema só pode estar relacionado à resolução do monitor ou ao driver de vídeo.', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Cliente Apressada',
        gender: 'female',
        dialogue: 'Meu irmão abriu um pendrive que recebeu de outra pessoa e, depois disso, alguns arquivos ficaram estranhos e começaram a aparecer atalhos que ninguém criou. O que pode ter acontecido?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Alguns malwares podem ocultar os arquivos originais de um pendrive e criar atalhos falsos. Por isso, é importante não abrir atalhos suspeitos e fazer uma varredura no pendrive e no computador.',
        options: [
            { text: 'O pendrive pode ter levado um malware capaz de esconder os arquivos originais e criar atalhos falsos.', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Alguns malwares podem ocultar os arquivos originais de um pendrive e criar atalhos\nfalsos. Por isso, é importante não abrir atalhos suspeitos e fazer uma varredura no\npendrive e no computador.' },
            { text: 'Atalhos são criados automaticamente sempre que um pendrive é conectado, principalmente quando possui muitos arquivos.', moneyChange: 20, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Arquivos armazenados em pendrives não podem conter programas maliciosos porque estão em um dispositivo externo.', moneyChange: 20, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O problema pode ser causado pela falta de espaço no computador, fazendo o sistema criar atalhos.', moneyChange: 50, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'João',
        gender: 'male',
        dialogue: '“Meu computador demora muito para ligar. Assim que eu entro no Windows, vários programas abrem sozinhos, mesmo sem eu clicar neles. O que pode estar acontecendo?”',
        brokenPart: 'Software',
        diagnosticText: 'Muitos programas configurados para iniciar automaticamente podem deixar a inicialização mais lenta e consumir recursos desnecessariamente. É possível desativar programas que não precisam iniciar junto com o sistema.',
        options: [
            { text: 'O computador está com pouco espaço físico na mesa.', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Muitos programas estão configurados para iniciar junto com o sistema.', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Muitos programas configurados para iniciar automaticamente podem deixar\na inicialização mais lenta e consumir recursos desnecessariamente. É possível\ndesativar programas que não precisam iniciar junto com o sistema.' },
            { text: 'O monitor está consumindo muita energia.', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O teclado está causando conflito com o Windows.', moneyChange: 50, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Gamer Furioso',
        gender: 'male',
        dialogue: '“Meu computador fica extremamente lento quando uso um determinado programa. Quando fecho ele, o computador volta ao normal. Como posso descobrir o que está acontecendo?”',
        brokenPart: 'Software',
        diagnosticText: 'O Gerenciador de Tarefas permite verificar quanto cada processo está utilizando de CPU, memória e outros recursos. Se um programa estiver consumindo recursos excessivamente, ele pode ser a causa da lentidão.',
        options: [
            { text: 'Verificar o consumo de recursos do programa no Gerenciador de Tarefas.', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'O Gerenciador de Tarefas permite verificar quanto cada processo está\nutilizando de CPU, memória e outros recursos. Se um programa estiver consumindo\nrecursos excessivamente, ele pode ser a causa da lentidão.' },
            { text: 'Trocar o papel de parede do computador.', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Aumentar o volume do computador.', moneyChange: 0, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Desconectar o mouse.', moneyChange: 50, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'João',
        gender: 'male',
        dialogue: '“Um programa que eu uso sempre trava e aparece aquela mensagem dizendo que ele ‘não está respondendo’. O restante do computador continua funcionando. O que pode ser?”',
        brokenPart: 'Software',
        diagnosticText: 'Se apenas um programa trava enquanto o restante do sistema funciona normalmente, é provável que exista um problema no próprio software, como arquivos corrompidos, incompatibilidade ou conflito com outro programa.',
        options: [
            { text: 'O monitor está com defeito.', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O programa pode estar apresentando uma falha ou conflito.', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Se apenas um programa trava enquanto o restante do sistema funciona\nnormalmente, é provável que exista um problema no próprio software, como arquivos\ncorrompidos, incompatibilidade ou conflito com outro programa.' },
            { text: 'O cabo de energia está muito comprido.', moneyChange: 50, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O teclado está com poucas teclas funcionando.', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Marcos',
        gender: 'male',
        dialogue: '“Depois que instalei um programa novo, outro programa que eu já usava começou a apresentar erros. Antes da instalação, tudo funcionava normalmente. O que pode ter acontecido?”',
        brokenPart: 'Software',
        diagnosticText: 'Alguns programas podem utilizar os mesmos recursos ou componentes do sistema e acabar causando conflitos de software. Atualizar, configurar ou até desinstalar um dos programas pode resolver o problema.',
        options: [
            { text: 'Os programas podem estar entrando em conflito.', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Alguns programas podem utilizar os mesmos recursos ou componentes do\nsistema e acabar causando conflitos de software. Atualizar, configurar ou até\ndesinstalar um dos programas pode resolver o problema.' },
            { text: 'O monitor ficou incompatível com o computador.', moneyChange: 50, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O mouse mudou a configuração do Windows.', moneyChange: 20, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O computador perdeu automaticamente a conexão com a internet.', moneyChange: 50, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Cliente Apressada',
        gender: 'female',
        dialogue: '“Eu não estou usando quase nenhum programa, mas meu computador continua lento. Quando olho os processos, vejo vários programas funcionando em segundo plano. Isso pode estar causando o problema?”',
        brokenPart: 'Software',
        diagnosticText: 'Alguns processos continuam funcionando mesmo quando o usuário não está utilizando diretamente o programa. Quando existem muitos processos desnecessários, eles podem consumir recursos e prejudicar o desempenho.',
        options: [
            { text: 'Não, processos em segundo plano nunca afetam o desempenho.', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Sim, eles podem consumir recursos mesmo sem estarem sendo usados diretamente.', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Alguns processos continuam funcionando mesmo quando o usuário não\nestá utilizando diretamente o programa. Quando existem muitos processos\ndesnecessários, eles podem consumir recursos e prejudicar o desempenho.' },
            { text: 'Não, apenas o monitor pode deixar o computador lento.', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Sim, mas somente quando o computador está sem internet.', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Marcos',
        gender: 'male',
        dialogue: '“Abri o Gerenciador de Tarefas e encontrei um processo que não reconheço consumindo bastante CPU. O que eu deveria fazer primeiro?”',
        brokenPart: 'Software',
        diagnosticText: 'Nem todo processo desconhecido é malicioso. Alguns são componentes importantes do sistema. O ideal é identificar o processo primeiro antes de encerrá-lo ou excluir qualquer arquivo.',
        options: [
            { text: 'Desligar o computador imediatamente e nunca mais ligá-lo.', moneyChange: 50, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Apagar o arquivo do processo sem verificar o que ele é.', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Pesquisar e identificar o processo antes de encerrá-lo ou removê-lo.', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Nem todo processo desconhecido é malicioso. Alguns são componentes\nimportantes do sistema. O ideal é identificar o processo primeiro antes de encerrá-lo ou\nexcluir qualquer arquivo.' },
            { text: 'Aumentar o brilho da tela.', moneyChange: 20, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Carlos',
        gender: 'male',
        dialogue: '“Percebi que tenho vários programas instalados que nunca uso. Alguns deles ficam funcionando em segundo plano. O que seria mais adequado fazer?”',
        brokenPart: 'Software',
        diagnosticText: 'Programas que não são utilizados podem ocupar espaço e, em alguns casos, executar processos em segundo plano. Desinstalar softwares realmente desnecessários ajuda a manter o sistema mais organizado e pode reduzir processos executados sem necessidade.',
        options: [
            { text: 'Manter todos instalados, porque programas não utilizados não fazem diferença.', moneyChange: 50, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Desinstalar programas desnecessários, principalmente os que consomem recursos.', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Programas que não são utilizados podem ocupar espaço e, em alguns\ncasos, executar processos em segundo plano. Desinstalar softwares realmente\ndesnecessários ajuda a manter o sistema mais organizado e pode reduzir processos\nexecutados sem necessidade.' },
            { text: 'Apagar manualmente todas as pastas do computador.', moneyChange: 20, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Desligar o antivírus para liberar espaço.', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'João',
        gender: 'male',
        dialogue: 'Artefatos gráficos durante carga de processamento Cliente: Olá, meu PC começou a apresentar vários riscos e quadrados coloridos na tela enquanto estou jogando. O que pode estar acontecendo?',
        brokenPart: 'Monitor',
        diagnosticText: 'Artefatos geométricos e cores sólidas durante renderização 3D indicam falha no processamento de texturas ou na integridade dos dados na memória de vídeo (VRAM). Embora problemas no barramento ou RAM possam causar travamentos, os artefatos visuais são sintomas clássicos de degradação do chip gráfico ou soldas frias na GPU.',
        options: [
            { text: 'Módulos de memória RAM do sistema', moneyChange: 20, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Unidade de Processamento Gráfico (GPU) ou VRAM', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Artefatos geométricos e cores sólidas durante renderização 3D indicam\nfalha no processamento de texturas ou na integridade dos dados na memória de vídeo\n(VRAM). Embora problemas no barramento ou RAM possam causar travamentos, os\nartefatos visuais são sintomas clássicos de degradação do chip gráfico ou soldas frias\nna GPU.' },
            { text: 'Barramento PCIe da placa-mãe', moneyChange: 20, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Cabo de alimentação da fonte (PSU)', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Marcos',
        gender: 'male',
        dialogue: 'Encerramento inesperado de aplicações (Crash to Desktop) Cliente: Boa tarde! Quando estou jogando, depois de alguns minutos o jogo simplesmente fecha e volta para a área de trabalho sem nenhuma mensagem de erro. Se o problema começou logo após uma atualização de software da placa, qual possibilidade deve ser investigada?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Fechamentos repentinos (CTD) após atualizações sugerem que o novo driver pode conter bugs de compatibilidade com o motor gráfico do jogo ou que a instalação anterior deixou resíduos que geram conflitos nas bibliotecas de API (DirectX/Vulkan).',
        options: [
            { text: 'Corrupção de arquivos de paginação do Windows', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Driver gráfico instável ou conflito de versão', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Fechamentos repentinos (CTD) após atualizações sugerem que o novo\ndriver pode conter bugs de compatibilidade com o motor gráfico do jogo ou que a\ninstalação anterior deixou resíduos que geram conflitos nas bibliotecas de API\n(DirectX/Vulkan).' },
            { text: 'Sobrecarga no regulador de tensão (VRM) da placa-mãe', moneyChange: 50, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Fragmentação excessiva no dispositivo de armazenamento (SSD/HD)', moneyChange: 20, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Ana',
        gender: 'female',
        dialogue: 'Instabilidade sob carga térmica Cliente: Meu computador funciona normalmente navegando na internet, mas em jogos pesados a tela apresenta problemas e o PC trava. Se a GPU atingir o limite térmico (Thermal Throttling), qual o comportamento esperado antes de um desligamento total?',
        brokenPart: 'CPU',
        diagnosticText: 'Para evitar danos físicos, a GPU reduz sua frequência de operação quando atinge temperaturas críticas. Isso causa quedas de FPS e, se o calor continuar subindo sem dissipação adequada, o sistema pode apresentar instabilidade severa ou travar por proteção.',
        options: [
            { text: 'Aumento imediato da frequência de clock (Overclock automático)', moneyChange: 50, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Redução de performance e possível instabilidade no frame time', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Para evitar danos físicos, a GPU reduz sua frequência de operação\nquando atinge temperaturas críticas. Isso causa quedas de FPS e, se o calor continuar\nsubindo sem dissipação adequada, o sistema pode apresentar instabilidade severa ou\ntravar por proteção.' },
            { text: 'Desativação do modo de economia de energia do monitor', moneyChange: 20, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Corrupção imediata dos dados gravados no disco rígido', moneyChange: 0, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Maria',
        gender: 'female',
        dialogue: 'Padrões de cores persistentes (Linhas e Cores) Cliente: Técnico, quando entro em um jogo aparecem linhas verdes e roxas fixas na tela. Fora do jogo, o problema desaparece. Esse tipo de anomalia visual em cargas intensas costuma estar atrelado a qual falha de hardware específica?',
        brokenPart: 'Monitor',
        diagnosticText: 'Linhas coloridas e fixas que surgem apenas sob estresse gráfico indicam que os endereços de memória de vídeo estão falhando ao armazenar ou transmitir os buffers de imagem para a GPU.',
        options: [
            { text: 'Desajuste na taxa de atualização (Hz) do monitor', moneyChange: 50, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Falha de comunicação entre a GPU e a memória de vídeo (VRAM)', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Linhas coloridas e fixas que surgem apenas sob estresse gráfico indicam\nque os endereços de memória de vídeo estão falhando ao armazenar ou transmitir os\nbuffers de imagem para a GPU.' },
            { text: 'Defeito físico no painel de retroiluminação do monitor', moneyChange: 20, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Incompatibilidade de perfil de cor no sistema operacional', moneyChange: 50, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Maria',
        gender: 'female',
        dialogue: 'Tela piscando e perda de sinal Cliente: Meu jogo começa a piscar a tela, aparecem alguns quadrados estranhos e logo em seguida o computador trava ou reinicia. Durante o diagnóstico de uma placa de vídeo, qual destes fatores é uma causa comum para esses sintomas de instabilidade?',
        brokenPart: 'Fonte',
        diagnosticText: 'A placa de vídeo exige muita energia durante jogos. Se a fonte de alimentação (PSU) não for de qualidade ou estiver degradada, ela pode não manter a voltagem estável, causando oscilações (piscadas) na tela e travamentos do sistema por falta de energia limpa na GPU.',
        options: [
            { text: 'Ripple excessivo ou queda de tensão na linha de 12V da fonte', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'A placa de vídeo exige muita energia durante jogos. Se a fonte de\nalimentação (PSU) não for de qualidade ou estiver degradada, ela pode não manter a\nvoltagem estável, causando oscilações (piscadas) na tela e travamentos do sistema por\nfalta de energia limpa na GPU.' },
            { text: 'Latência alta nos timings da memória RAM principal', moneyChange: 20, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Sobrecarga de processos no cache L3 do processador', moneyChange: 0, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Falha de sincronização vertical (V-Sync) por software', moneyChange: 0, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Ana',
        gender: 'female',
        dialogue: 'Erros críticos após atualização de Software Cliente: Atualizei o driver e os jogos começaram a fechar sozinhos. Antes funcionavam normalmente. O que devo suspeitar? Qual seria o procedimento técnico recomendado para descartar problemas de software neste cenário?',
        brokenPart: 'Software',
        diagnosticText: 'Atualizações de drivers podem deixar vestígios de versões anteriores no registro do Windows. O uso de ferramentas como o DDU (Display Driver Uninstaller) garante que a nova instalação seja feita de forma limpa, eliminando conflitos lógicos.',
        options: [
            { text: 'Formatação completa do sistema operacional', moneyChange: 20, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Instalação limpa utilizando ferramentas de remoção de drivers (como DDU)', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Atualizações de drivers podem deixar vestígios de versões anteriores no\nregistro do Windows. O uso de ferramentas como o DDU (Display Driver Uninstaller)\ngarante que a nova instalação seja feita de forma limpa, eliminando conflitos lógicos.' },
            { text: 'Aumento da voltagem da GPU via BIOS', moneyChange: 20, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Substituição preventiva do cabo de vídeo (HDMI/DisplayPort)', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Maria',
        gender: 'female',
        dialogue: 'Diagnóstico final de hardware Cliente: Meu PC apresenta riscos coloridos na tela durante os jogos e, às vezes, trava completamente. Qual componente apresenta a maior probabilidade de defeito físico?',
        brokenPart: 'Monitor',
        diagnosticText: 'A combinação de erros visuais (artefatos) com travamentos totais aponta para uma falha crítica na GPU. Isso pode ser causado por degradação do silício ou por falhas nas soldas BGA que conectam o chip à placa de circuito, geralmente devido a ciclos constantes de aquecimento e resfriamento.',
        options: [
            { text: 'Desgaste do slot PCIe da placa-mãe', moneyChange: 50, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Degradação física do chip gráfico (GPU) ou esferas de solda (BGA)', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'A combinação de erros visuais (artefatos) com travamentos totais aponta\npara uma falha crítica na GPU. Isso pode ser causado por degradação do silício ou por\nfalhas nas soldas BGA que conectam o chip à placa de circuito, geralmente devido a\nciclos constantes de aquecimento e resfriamento.' },
            { text: 'Superaquecimento do chipset da ponte sul da placa-mãe', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Falha na controladora de memória do processador (CPU)', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Beatriz',
        gender: 'female',
        dialogue: 'Olá, meu computador liga normalmente, mas aparece uma tela dizendo que não encontrou um dispositivo para inicializar o sistema. O Windows não inicia. Já verifiquei e o SSD aparece na BIOS normalmente. Qual é o problema mais provável?',
        brokenPart: 'Monitor',
        diagnosticText: 'Como o SSD aparece normalmente na BIOS, significa que a placa-mãe está conseguindo reconhecer o dispositivo de armazenamento. Dessa forma, o problema está relacionado ao processo de inicialização do sistema operacional, como uma falha nos arquivos de boot ou na configuração de inicialização.',
        options: [
            { text: 'Memória RAM incompatível', moneyChange: 20, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Problema no processo de boot do sistema operacional', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Como o SSD aparece normalmente na BIOS, significa que a placa-mãe\nestá conseguindo reconhecer o dispositivo de armazenamento. Dessa forma, o\nproblema está relacionado ao processo de inicialização do sistema operacional, como\numa falha nos arquivos de boot ou na configuração de inicialização.' },
            { text: 'Fonte de alimentação com pouca potência', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Monitor com defeito', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Secretária',
        gender: 'female',
        dialogue: 'Boa tarde! Meu PC estava funcionando normalmente, mas depois de uma atualização do Windows ele começou a reiniciar sozinho. Ele tenta iniciar, reinicia e fica repetindo isso várias vezes. Qual é o problema mais provável?',
        brokenPart: 'Software',
        diagnosticText: 'O computador funcionava normalmente antes da atualização e começou a apresentar o problema imediatamente depois dela. Isso indica que a atualização pode ter causado uma incompatibilidade ou falha em arquivos necessários para o funcionamento do Windows.',
        options: [
            { text: 'Falha relacionada à atualização do sistema operacional', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'O computador funcionava normalmente antes da atualização e começou a\napresentar o problema imediatamente depois dela. Isso indica que a atualização pode\nter causado uma incompatibilidade ou falha em arquivos necessários para o\nfuncionamento do Windows.' },
            { text: 'Teclado com defeito', moneyChange: 50, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Cabo HDMI danificado', moneyChange: 50, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Falta de pasta térmica no processador', moneyChange: 50, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Cliente Apressada',
        gender: 'female',
        dialogue: 'Meu computador liga, mas aparece uma mensagem informando que o sistema não consegue inicializar. Já tentei reiniciar várias vezes, mas o Windows não entra. Houve uma queda de energia enquanto o computador estava atualizando. Qual é o problema mais provável?',
        brokenPart: 'Fonte',
        diagnosticText: 'Uma queda de energia durante uma atualização pode interromper a gravação ou alteração de arquivos importantes do sistema operacional. Isso pode corromper arquivos necessários para o processo de inicialização e impedir que o Windows seja carregado corretamente.',
        options: [
            { text: 'Boot do sistema corrompido', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Uma queda de energia durante uma atualização pode interromper a\ngravação ou alteração de arquivos importantes do sistema operacional. Isso pode\ncorromper arquivos necessários para o processo de inicialização e impedir que o\nWindows seja carregado corretamente.' },
            { text: 'Monitor queimado', moneyChange: 50, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Mouse incompatível', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Placa de som desativada', moneyChange: 20, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Beatriz',
        gender: 'female',
        dialogue: 'Oi! Eu tentei aumentar a frequência do meu processador pela BIOS para melhorar o desempenho. Depois disso, o computador liga, mas não inicia o sistema. Qual procedimento pode solucionar o problema?',
        brokenPart: 'Software',
        diagnosticText: 'Como o problema começou depois da alteração das configurações de overclock na BIOS, as novas configurações podem estar instáveis ou incompatíveis com o hardware. Resetar a BIOS/CMOS restaura as configurações padrão, desfazendo as alterações realizadas e permitindo que o computador tente inicializar novamente com parâmetros seguros.',
        options: [
            { text: 'Trocar o monitor', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Formatar o HD imediatamente', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Resetar a BIOS/CMOS para restaurar as configurações padrão', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Como o problema começou depois da alteração das configurações de\noverclock na BIOS, as novas configurações podem estar instáveis ou incompatíveis\ncom o hardware. Resetar a BIOS/CMOS restaura as configurações padrão, desfazendo\nas alterações realizadas e permitindo que o computador tente inicializar novamente\ncom parâmetros seguros.' },
            { text: 'Trocar o teclado', moneyChange: 0, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Carlos',
        gender: 'male',
        dialogue: 'Meu computador começa a ligar, mas trava ou reinicia durante a inicialização. Isso aconteceu depois que aumentei a frequência e a tensão do processador. Qual é o problema mais provável?',
        brokenPart: 'Software',
        diagnosticText: 'O aumento da frequência e da tensão do processador modifica as condições normais de funcionamento do hardware. Se os valores configurados não forem estáveis, o computador pode travar ou reiniciar durante a inicialização.',
        options: [
            { text: 'Overclock instável', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'O aumento da frequência e da tensão do processador modifica as\ncondições normais de funcionamento do hardware. Se os valores configurados não\nforem estáveis, o computador pode travar ou reiniciar durante a inicialização.' },
            { text: 'Cabo de rede desconectado', moneyChange: 0, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Sistema operacional sem navegador', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Defeito no mouse', moneyChange: 50, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Cliente Confuso',
        gender: 'male',
        dialogue: 'Meu PC liga e consigo entrar na BIOS normalmente, mas quando tento iniciar o Windows aparece uma mensagem de erro e ele não consegue carregar. Onde provavelmente está o problema?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'O fato de o computador conseguir acessar a BIOS mostra que a etapa inicial de funcionamento do firmware está ocorrendo normalmente. Como o erro aparece somente quando o Windows tenta iniciar, o problema está relacionado ao sistema operacional ou ao processo de boot.',
        options: [
            { text: 'No sistema operacional ou no processo de boot', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'O fato de o computador conseguir acessar a BIOS mostra que a etapa\ninicial de funcionamento do firmware está ocorrendo normalmente. Como o erro\naparece somente quando o Windows tenta iniciar, o problema está relacionado ao\nsistema operacional ou ao processo de boot.' },
            { text: 'No botão do gabinete', moneyChange: 20, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'No monitor', moneyChange: 50, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Na ventoinha do gabinete', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'João',
        gender: 'male',
        dialogue: 'Olá! Eu mexi nas configurações da BIOS do meu computador para tentar ativar um recurso de segurança, mas agora, quando ligo a máquina, ela passa da tela inicial da placa-mãe e trava numa tela preta com um erro dizendo que nenhum sistema operacional foi encontrado. Na verdade, mudei a opção de armazenamento de AHCI para outra opção para testar, e acho que mexi no modo de boot também. Qual é o problema mais provável?',
        brokenPart: 'Monitor',
        diagnosticText: 'Alterar configurações como o modo do controlador de armazenamento ou o modo de boot pode fazer com que o sistema operacional não seja reconhecido ou inicializado corretamente. Como o problema surgiu depois dessas alterações e a mensagem informa que nenhum sistema operacional foi encontrado, as configurações da BIOS podem estar incompatíveis com a instalação existente do Windows.',
        options: [
            { text: 'Placa de vídeo com defeito de fábrica', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Incompatibilidade nas configurações de armazenamento ou modo de boot na BIOS', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Alterar configurações como o modo do controlador de armazenamento ou\no modo de boot pode fazer com que o sistema operacional não seja reconhecido ou\ninicializado corretamente. Como o problema surgiu depois dessas alterações e a\nmensagem informa que nenhum sistema operacional foi encontrado, as configurações\nda BIOS podem estar incompatíveis com a instalação existente do Windows.' },
            { text: 'Falta de memória RAM suficiente para o sistema', moneyChange: 20, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Cabo de áudio desconectado da placa-mãe', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Maria',
        gender: 'female',
        dialogue: '“Oi! Meu computador começou a apresentar mensagens de erro quando tento abrir alguns programas. Às vezes eles fecham sozinhos e isso começou sem eu instalar nada novo. Você consegue verificar o que está acontecendo?” O que seria mais adequado fazer primeiro?',
        brokenPart: 'Software',
        diagnosticText: 'Problema identificado e resolvido.',
        options: [
            { text: 'Trocar a memória RAM imediatamente.', moneyChange: 20, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Apagar os programas que apresentam erro.', moneyChange: 50, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Verificar os erros e a integridade do sistema operacional.', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Problema identificado e resolvido.' },
            { text: 'Trocar o monitor.', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Juliana',
        gender: 'female',
        dialogue: '“Meu computador está funcionando, mas algumas ferramentas do sistema não respondem mais. Quando tento utilizá-las, aparece uma mensagem dizendo que houve um erro. Queria saber se existe alguma forma de verificar o sistema sem formatar.” O que pode ajudar a solucionar o problema?',
        brokenPart: 'Software',
        diagnosticText: 'Problema identificado e resolvido.',
        options: [
            { text: 'Utilizar ferramentas de diagnóstico e reparo do sistema.', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Problema identificado e resolvido.' },
            { text: 'Trocar o teclado.', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Apagar os arquivos pessoais.', moneyChange: 20, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Substituir o gabinete.', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Marcos',
        gender: 'male',
        dialogue: '“Eu estava fazendo um trabalho e salvei o arquivo normalmente. Hoje tentei abrir e apareceu uma mensagem dizendo que ele não pode ser lido. Outros arquivos do computador abrem normalmente.” Qual é uma possível explicação?',
        brokenPart: 'Software',
        diagnosticText: 'Problema identificado e resolvido.',
        options: [
            { text: 'O monitor pode estar com defeito.', moneyChange: 50, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O arquivo pode ter sido corrompido.', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Problema identificado e resolvido.' },
            { text: 'O teclado pode estar desatualizado.', moneyChange: 50, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'A memória RAM não consegue abrir documentos.', moneyChange: 20, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'João',
        gender: 'male',
        dialogue: '“Eu tenho várias fotos antigas salvas no computador. Algumas continuam abrindo normalmente, mas outras aparecem como arquivos danificados e não consigo visualizá-las.” O que pode estar acontecendo?',
        brokenPart: 'Software',
        diagnosticText: 'Problema identificado e resolvido.',
        options: [
            { text: 'O monitor perdeu a capacidade de exibir imagens.', moneyChange: 50, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O sistema operacional não aceita fotos antigas.', moneyChange: 50, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O teclado está interferindo nos arquivos.', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Alguns arquivos podem estar corrompidos.', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Problema identificado e resolvido.' },
        ]
    },
    {
        name: 'Cliente Confuso',
        gender: 'male',
        dialogue: '“Minha impressora funcionava normalmente, mas agora o computador não consegue utilizá-la corretamente. Descobri que o driver instalado é muito antigo.” O que você recomendaria?',
        brokenPart: 'Software',
        diagnosticText: 'Problema identificado e resolvido.',
        options: [
            { text: 'Trocar o cabo do monitor.', moneyChange: 0, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Formatar o computador.', moneyChange: 20, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Verificar e instalar um driver atualizado e compatível.', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Problema identificado e resolvido.' },
            { text: 'Trocar o teclado.', moneyChange: 0, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Beatriz',
        gender: 'female',
        dialogue: '“Meu computador pediu uma atualização e eu aceitei. Depois que ele reiniciou, minha impressora parou de funcionar.” O que pode ter acontecido?',
        brokenPart: 'Software',
        diagnosticText: 'Problema identificado e resolvido.',
        options: [
            { text: 'A atualização pode ter causado incompatibilidade com o driver da impressora.', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Problema identificado e resolvido.' },
            { text: 'O monitor pode ter apagado a configuração.', moneyChange: 20, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O teclado pode ter alterado a impressora.', moneyChange: 20, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O mouse pode ter bloqueado o dispositivo.', moneyChange: 0, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Ana',
        gender: 'female',
        dialogue: '“Quando aperto o botão para ligar, meu computador começa a iniciar, mas não consegue entrar no sistema. Ele fica preso em uma tela de erro.” O que deve ser investigado?',
        brokenPart: 'Monitor',
        diagnosticText: 'Problema identificado e resolvido.',
        options: [
            { text: 'O funcionamento do mouse.', moneyChange: 20, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Possíveis problemas no processo de inicialização do sistema.', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Problema identificado e resolvido.' },
            { text: 'O brilho do monitor.', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O teclado.', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Ana',
        gender: 'female',
        dialogue: '“Meu computador fica muito quente durante jogos e começa a perder desempenho. Qual componente ou situação você verificaria primeiro?”',
        brokenPart: 'CPU',
        diagnosticText: 'Problema identificado e resolvido.',
        options: [
            { text: 'Funcionamento e rotação do cooler', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Problema identificado e resolvido.' },
            { text: 'Configuração do teclado', moneyChange: 20, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Resolução do monitor', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Conexão dos dispositivos USB', moneyChange: 0, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Maria',
        gender: 'female',
        dialogue: '“Meu computador está esquentando demais durante os jogos. O que você deveria verificar primeiro?”',
        brokenPart: 'CPU',
        diagnosticText: 'Problema identificado e resolvido.',
        options: [
            { text: 'Fluxo de ar e sistema de refrigeração', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Problema identificado e resolvido.' },
            { text: 'Quantidade de arquivos pessoais', moneyChange: 20, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Configuração da tela', moneyChange: 0, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Funcionamento do teclado', moneyChange: 20, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Juliana',
        gender: 'female',
        dialogue: '“O computador fica lento quando está muito quente e melhora depois que esfria. O que pode estar acontecendo?”',
        brokenPart: 'CPU',
        diagnosticText: 'Problema identificado e resolvido.',
        options: [
            { text: 'Redução automática do desempenho por temperatura', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Problema identificado e resolvido.' },
            { text: 'Falta de espaço no armazenamento', moneyChange: 50, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Erro na configuração do monitor', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Problema na conexão do mouse', moneyChange: 50, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Marcos',
        gender: 'male',
        dialogue: '“Meu PC está cheio de poeira e começou a esquentar mais que o normal. O que pode resolver o problema?”',
        brokenPart: 'CPU',
        diagnosticText: 'Problema identificado e resolvido.',
        options: [
            { text: 'Limpar os componentes e as entradas de ar', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Problema identificado e resolvido.' },
            { text: 'Reinstalar o sistema operacional', moneyChange: 50, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Trocar os dispositivos USB', moneyChange: 20, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Alterar a resolução da tela', moneyChange: 20, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Beatriz',
        gender: 'female',
        dialogue: '“O processador está atingindo temperaturas muito altas, mesmo com o cooler funcionando. O que pode ser necessário verificar?”',
        brokenPart: 'CPU',
        diagnosticText: 'Problema identificado e resolvido.',
        options: [
            { text: 'Estado e aplicação da pasta térmica', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Problema identificado e resolvido.' },
            { text: 'Conexão do cabo HDMI', moneyChange: 50, repChange: -15, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Capacidade da memória RAM', moneyChange: 20, repChange: -15, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Configuração dos dispositivos USB', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Marcos',
        gender: 'male',
        dialogue: '“Meu computador esquenta muito e o cooler parece estar girando devagar. Qual problema pode estar causando isso?”',
        brokenPart: 'CPU',
        diagnosticText: 'Problema identificado e resolvido.',
        options: [
            { text: 'Falha ou mau funcionamento do sistema de refrigeração', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Problema identificado e resolvido.' },
            { text: 'Excesso de arquivos no armazenamento', moneyChange: 50, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Corrupção de arquivos do sistema', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Problema na configuração do monitor', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Cliente Confuso',
        gender: 'male',
        dialogue: '“Durante jogos pesados, meu computador esquenta bastante e começa a perder desempenho. Qual seria uma possível causa?”',
        brokenPart: 'CPU',
        diagnosticText: 'Problema identificado e resolvido.',
        options: [
            { text: 'Temperatura elevada afetando o desempenho dos componentes', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Problema identificado e resolvido.' },
            { text: 'Baixa resolução configurada no monitor', moneyChange: 20, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Falha na conexão dos periféricos', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Excesso de arquivos pessoais no computador', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    }
,
    {
        name: 'Thiago',
        gender: 'male',
        dialogue: '“Meu computador não liga. Vocês podem verificar se tem algum curto na placa?” O que o técnico deve usar?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'O multímetro permite medir tensão, resistência e continuidade, ajudando a identificar possíveis curtos na placa.',
        options: [
            { text: 'HDMI', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Multímetro', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'O multímetro permite medir tensão, resistência e continuidade, ajudando a identificar possíveis curtos na placa.' },
            { text: 'Teclado', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Monitor', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Cliente Preocupada',
        gender: 'female',
        dialogue: '“Pode verificar se existe curto na placa-mãe?” Qual medição pode ajudar?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'A medição de resistência entre uma linha de alimentação e o GND pode indicar se existe um possível curto.',
        options: [
            { text: 'Temperatura', moneyChange: 20, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Resistência entre a linha e o GND', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'A medição de resistência entre uma linha de alimentação e o GND pode indicar se existe um possível curto.' },
            { text: 'Brilho da tela', moneyChange: 20, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Velocidade da internet', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Cliente Preocupada',
        gender: 'female',
        dialogue: '“Dá para reparar?” O que o técnico deve verificar primeiro?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'É necessário verificar se a trilha realmente está interrompida e se a conexão elétrica pode ser restaurada.',
        options: [
            { text: 'A conexão elétrica da trilha', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'É necessário verificar se a trilha realmente está interrompida e se a conexão elétrica pode ser restaurada.' },
            { text: 'O papel de parede', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O navegador', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O mouse', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Lucas',
        gender: 'male',
        dialogue: '“Esse capacitor da placa parece queimado. Pode trocar?” O que o técnico deve verificar antes?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Antes de substituir, é preciso identificar corretamente suas características, como capacitância e tensão.',
        options: [
            { text: 'A especificação do capacitor', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Antes de substituir, é preciso identificar corretamente suas características, como capacitância e tensão.' },
            { text: 'O tamanho do monitor', moneyChange: 20, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O teclado', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O sistema operacional', moneyChange: 20, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Paula',
        gender: 'female',
        dialogue: '“Troque esse resistor SMD da minha placa.” O que é importante antes da troca?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'O resistor substituto deve possuir a especificação adequada para funcionar corretamente no circuito.',
        options: [
            { text: 'Saber o valor correto do resistor', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'O resistor substituto deve possuir a especificação adequada para funcionar corretamente no circuito.' },
            { text: 'Trocar o monitor', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Atualizar o navegador', moneyChange: 20, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Trocar o mouse', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Luiz',
        gender: 'male',
        dialogue: '“Qual ferramenta vocês usam para trocar componentes SMD?” Qual é a mais adequada?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'A estação de solda é uma ferramenta apropriada para remover e instalar componentes eletrônicos, inclusive SMD.',
        options: [
            { text: 'Estação de solda', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'A estação de solda é uma ferramenta apropriada para remover e instalar componentes eletrônicos, inclusive SMD.' },
            { text: 'Roteador', moneyChange: 20, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Webcam', moneyChange: 20, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Caixa de som', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Cliente Preocupada',
        gender: 'female',
        dialogue: '“Depois de uma atualização, meu computador não inicia mais. Pode ser a BIOS?” O que o técnico pode fazer?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Uma BIOS corrompida pode impedir o computador de iniciar e, em alguns casos, pode ser necessário regravá-la.',
        options: [
            { text: 'Trocar o teclado', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Verificar e, se necessário, regravar a BIOS', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Uma BIOS corrompida pode impedir o computador de iniciar e, em alguns casos, pode ser necessário regravá-la.' },
            { text: 'Trocar o mouse', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Trocar o gabinete', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Thiago',
        gender: 'male',
        dialogue: '“Minha BIOS está corrompida. Dá para recuperar?” Qual ferramenta pode ser utilizada?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Esse equipamento pode ser utilizado para regravar chips de BIOS compatíveis com esse processo.',
        options: [
            { text: 'Regravador de EEPROM/SPI', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Esse equipamento pode ser utilizado para regravar chips de BIOS compatíveis com esse processo.' },
            { text: 'Impressora', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Roteador', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Scanner', moneyChange: 20, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Thiago',
        gender: 'male',
        dialogue: '“O computador liga, mas não inicia. Pode ser a alimentação do processador?” Qual circuito deve ser verificado?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'O VRM é responsável por fornecer e regular a alimentação adequada do processador.',
        options: [
            { text: 'USB', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'VRM', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'O VRM é responsável por fornecer e regular a alimentação adequada do processador.' },
            { text: 'Áudio', moneyChange: 20, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'SATA', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Técnico Curioso',
        gender: 'male',
        dialogue: '“Para que serve o VRM da placa-mãe?” Qual resposta está correta?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'O VRM converte e regula a energia para fornecer ao processador uma tensão adequada.',
        options: [
            { text: 'Controlar o teclado', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Regular a alimentação do processador', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'O VRM converte e regula a energia para fornecer ao processador uma tensão adequada.' },
            { text: 'Armazenar arquivos', moneyChange: 20, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Controlar o monitor', moneyChange: 20, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Cliente Exigente',
        gender: 'male',
        dialogue: '“Meu computador liga, mas não dá boot.” O técnico encontra uma falha na alimentação do processador. O que pode acontecer?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Sem uma alimentação adequada do processador, a placa-mãe pode não conseguir completar o processo de inicialização.',
        options: [
            { text: 'O computador pode não iniciar', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Sem uma alimentação adequada do processador, a placa-mãe pode não conseguir completar o processo de inicialização.' },
            { text: 'O monitor fica mais rápido', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'A internet aumenta', moneyChange: 20, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O teclado muda de cor', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Camila',
        gender: 'female',
        dialogue: '“Dá para saber se uma trilha está interrompida?” Qual função do multímetro pode ajudar?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'A função de continuidade do multímetro ajuda a verificar se existe passagem elétrica entre dois pontos.',
        options: [
            { text: 'Continuidade', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'A função de continuidade do multímetro ajuda a verificar se existe passagem elétrica entre dois pontos.' },
            { text: 'Volume', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Wi-Fi', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Resolução', moneyChange: 20, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Lucas',
        gender: 'male',
        dialogue: '“Verifique se existe algum ponto da placa em curto.” O técnico deve fazer o quê?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'As medições ajudam o técnico a localizar possíveis pontos de curto e analisar o circuito.',
        options: [
            { text: 'Fazer medições com o multímetro', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'As medições ajudam o técnico a localizar possíveis pontos de curto e analisar o circuito.' },
            { text: 'Trocar o monitor', moneyChange: 20, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Formatar o computador', moneyChange: 20, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Trocar o teclado', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Mariana',
        gender: 'female',
        dialogue: 'O cliente pede para trocar um componente SMD danificado. Por que o técnico deve identificar o componente primeiro?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Identificar o componente evita instalar uma peça incompatível com o circuito.',
        options: [
            { text: 'Para colocar outro com a especificação correta', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Identificar o componente evita instalar uma peça incompatível com o circuito.' },
            { text: 'Para escolher a cor da placa', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Para aumentar a internet', moneyChange: 20, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Para trocar o monitor', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Cliente Exigente',
        gender: 'male',
        dialogue: '“Minha placa tem uma trilha rompida. Isso pode impedir o computador de funcionar?” Qual é a resposta?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Uma trilha faz parte da conexão elétrica da placa e sua ruptura pode impedir a passagem do sinal ou da alimentação.',
        options: [
            { text: 'Sim, uma trilha rompida pode interromper um circuito', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Uma trilha faz parte da conexão elétrica da placa e sua ruptura pode impedir a passagem do sinal ou da alimentação.' },
            { text: 'Não, trilhas não fazem parte do circuito', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Só afeta o teclado', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Só afeta a internet', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Mariana',
        gender: 'female',
        dialogue: '“Troque qualquer componente que pareça queimado.” O técnico deve fazer isso?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'A aparência de um componente não é suficiente para determinar a causa do defeito. Primeiro é necessário realizar um diagnóstico.',
        options: [
            { text: 'Sim, sempre', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Não, deve diagnosticar antes', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'A aparência de um componente não é suficiente para determinar a causa do defeito. Primeiro é necessário realizar um diagnóstico.' },
            { text: 'Formatar o computador', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Trocar o monitor', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Cliente Exigente',
        gender: 'male',
        dialogue: '“Meu PC liga por alguns segundos e não inicia.” O técnico suspeita da alimentação do processador. O que deve verificar?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Como a suspeita está relacionada à alimentação do processador, essas partes devem ser verificadas.',
        options: [
            { text: 'VRM e linhas de alimentação', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Como a suspeita está relacionada à alimentação do processador, essas partes devem ser verificadas.' },
            { text: 'Teclado', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Webcam', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Alto-falante', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Camila',
        gender: 'female',
        dialogue: '“Posso colocar qualquer resistor no lugar desse SMD?” Qual é a resposta?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Um resistor precisa ter o valor adequado para que o circuito funcione corretamente.',
        options: [
            { text: 'Não, deve ter a especificação correta', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Um resistor precisa ter o valor adequado para que o circuito funcione corretamente.' },
            { text: 'Só se for da mesma cor', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Só se for maior', moneyChange: 20, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Só se for menor', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Técnico Curioso',
        gender: 'male',
        dialogue: '“A placa tem um curto na alimentação.” O que pode acontecer com a tensão?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Um curto em uma linha de alimentação pode fazer a tensão cair ou impedir que ela apareça corretamente.',
        options: [
            { text: 'Pode ficar baixa ou ausente', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Um curto em uma linha de alimentação pode fazer a tensão cair ou impedir que ela apareça corretamente.' },
            { text: 'Sempre aumenta', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Aumenta a memória RAM', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Aumenta a capacidade do SSD', moneyChange: 20, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Thiago',
        gender: 'male',
        dialogue: '“Como vocês descobrem o defeito de uma placa?” Qual é a melhor resposta?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'O reparo eletrônico deve ser baseado em testes e medições, e não na troca aleatória de componentes.',
        options: [
            { text: 'Trocam peças aleatoriamente', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Fazem medições e seguem um diagnóstico', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'O reparo eletrônico deve ser baseado em testes e medições, e não na troca aleatória de componentes.' },
            { text: 'Formatam o computador', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Trocam todos os cabos', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Luiz',
        gender: 'male',
        dialogue: '“Meu jogo fecha sozinho.” O que o técnico deve verificar?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Travamentos ou fechamentos de jogos podem estar relacionados a drivers, superaquecimento ou problemas de hardware.',
        options: [
            { text: 'Drivers, temperatura e hardware', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Travamentos ou fechamentos de jogos podem estar relacionados a drivers, superaquecimento ou problemas de hardware.' },
            { text: 'Apenas o mouse', moneyChange: 20, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Apenas o monitor', moneyChange: 20, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Apenas os alto-falantes', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Luiz',
        gender: 'male',
        dialogue: '“Minha tela fica com riscos coloridos durante o jogo.” Como esse problema é chamado?',
        brokenPart: 'GPU',
        diagnosticText: 'Riscos, quadrados ou outras deformações inesperadas na imagem são exemplos de artefatos gráficos.',
        options: [
            { text: 'Artefato gráfico', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Riscos, quadrados ou outras deformações inesperadas na imagem são exemplos de artefatos gráficos.' },
            { text: 'Curto de áudio', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Erro de teclado', moneyChange: 20, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Falha de internet', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Lucas',
        gender: 'male',
        dialogue: '“Por que aparecem quadrados coloridos nos jogos?” O que pode estar causando isso?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Esses elementos podem causar falhas gráficas quando apresentam problemas ou incompatibilidades.',
        options: [
            { text: 'GPU, VRAM, temperatura ou driver', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Esses elementos podem causar falhas gráficas quando apresentam problemas ou incompatibilidades.' },
            { text: 'Teclado', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Webcam', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Impressora', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Paula',
        gender: 'female',
        dialogue: 'O cliente mostra uma tela cheia de riscos durante um jogo. Qual é uma possível causa?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Riscos e deformações durante jogos podem indicar problemas relacionados à GPU, VRAM, temperatura ou alimentação.',
        options: [
            { text: 'Problema na placa de vídeo', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Riscos e deformações durante jogos podem indicar problemas relacionados à GPU, VRAM, temperatura ou alimentação.' },
            { text: 'Problema no teclado', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Falta de papel', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Problema no mouse', moneyChange: 20, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Técnico Curioso',
        gender: 'male',
        dialogue: '“Qual peça da placa de vídeo processa os gráficos?”',
        brokenPart: 'GPU',
        diagnosticText: 'A GPU é o componente responsável pelo processamento dos gráficos.',
        options: [
            { text: 'GPU', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'A GPU é o componente responsável pelo processamento dos gráficos.' },
            { text: 'SSD', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'RAM do teclado', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Fonte do monitor', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Técnica Aprendiz',
        gender: 'female',
        dialogue: '“Para que serve a VRAM da minha placa de vídeo?”',
        brokenPart: 'GPU',
        diagnosticText: 'A VRAM armazena temporariamente informações usadas pela GPU, como texturas e outros dados gráficos.',
        options: [
            { text: 'Armazenar temporariamente dados gráficos', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'A VRAM armazena temporariamente informações usadas pela GPU, como texturas e outros dados gráficos.' },
            { text: 'Guardar documentos permanentemente', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Controlar o teclado', moneyChange: 20, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Controlar o áudio', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Paula',
        gender: 'female',
        dialogue: '“Meu driver de vídeo está muito antigo e os jogos estão com problemas.” O que o técnico pode verificar?',
        brokenPart: 'GPU',
        diagnosticText: 'Drivers desatualizados ou incompatíveis podem causar erros e problemas de desempenho nos jogos.',
        options: [
            { text: 'Atualização e compatibilidade do driver', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Drivers desatualizados ou incompatíveis podem causar erros e problemas de desempenho nos jogos.' },
            { text: 'Apenas o teclado', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Apenas o gabinete', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Apenas a impressora', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Mariana',
        gender: 'female',
        dialogue: '“Depois que atualizei o driver, meu jogo começou a dar erro.” O que pode ter acontecido?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Uma atualização pode apresentar incompatibilidade com determinado jogo, sistema ou configuração de hardware.',
        options: [
            { text: 'Incompatibilidade ou problema no driver', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Uma atualização pode apresentar incompatibilidade com determinado jogo, sistema ou configuração de hardware.' },
            { text: 'O teclado ficou menor', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O SSD aumentou', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O gabinete ficou quente', moneyChange: 20, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Thiago',
        gender: 'male',
        dialogue: '“Depois de jogar por muito tempo, a imagem começa a falhar.” O que o técnico deve verificar?',
        brokenPart: 'GPU',
        diagnosticText: 'Se os problemas aparecem depois de muito tempo jogando, é importante verificar se a GPU está atingindo temperaturas elevadas.',
        options: [
            { text: 'Temperatura da GPU', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Se os problemas aparecem depois de muito tempo jogando, é importante verificar se a GPU está atingindo temperaturas elevadas.' },
            { text: 'Teclado', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Mouse', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Webcam', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Lucas',
        gender: 'male',
        dialogue: '“Vocês conseguem verificar a temperatura da minha placa de vídeo?” Qual ferramenta pode ajudar?',
        brokenPart: 'GPU',
        diagnosticText: 'Softwares de monitoramento conseguem mostrar informações como temperatura, uso e frequência da GPU.',
        options: [
            { text: 'Programa de monitoramento de hardware', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Softwares de monitoramento conseguem mostrar informações como temperatura, uso e frequência da GPU.' },
            { text: 'Editor de texto', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Calculadora', moneyChange: 20, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Reprodutor de música', moneyChange: 20, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Thiago',
        gender: 'male',
        dialogue: '“Só um jogo apresenta problemas. Os outros funcionam normalmente.” O que pode ser?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Se apenas um jogo apresenta problemas, pode haver alguma configuração, atualização ou incompatibilidade específica.',
        options: [
            { text: 'Configuração ou compatibilidade do jogo', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Se apenas um jogo apresenta problemas, pode haver alguma configuração, atualização ou incompatibilidade específica.' },
            { text: 'Defeito obrigatório na placa', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Defeito obrigatório no monitor', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Problema no mouse', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Paula',
        gender: 'female',
        dialogue: '“Todos os jogos estão aparecendo com riscos coloridos.” O que deve ser investigado?',
        brokenPart: 'GPU',
        diagnosticText: 'Quando vários jogos apresentam os mesmos artefatos, é importante investigar a própria placa de vídeo.',
        options: [
            { text: 'Hardware da placa de vídeo', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Quando vários jogos apresentam os mesmos artefatos, é importante investigar a própria placa de vídeo.' },
            { text: 'Teclado', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Mouse', moneyChange: 20, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Webcam', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Cliente Exigente',
        gender: 'male',
        dialogue: '“O que significa 144 Hz no meu monitor?”',
        brokenPart: 'GPU',
        diagnosticText: '144 Hz significa que o monitor pode atualizar a imagem até 144 vezes por segundo, dependendo das condições e configurações.',
        options: [
            { text: 'Taxa de atualização da imagem', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: '144 Hz significa que o monitor pode atualizar a imagem até 144 vezes por segundo, dependendo das condições e configurações.' },
            { text: 'Capacidade do SSD', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Memória RAM', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Velocidade da internet', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Cliente Exigente',
        gender: 'male',
        dialogue: '“Quero aumentar a resolução do meu jogo.” O que pode acontecer?',
        brokenPart: 'GPU',
        diagnosticText: 'Resoluções maiores exigem que a GPU processe mais pixels, aumentando a carga sobre a placa.',
        options: [
            { text: 'A placa de vídeo pode trabalhar mais', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Resoluções maiores exigem que a GPU processe mais pixels, aumentando a carga sobre a placa.' },
            { text: 'O teclado fica mais rápido', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O SSD aumenta', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'O mouse fica mais preciso', moneyChange: 20, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Paula',
        gender: 'female',
        dialogue: '“Minha placa de vídeo está instável durante os jogos.” O que pode ser verificado?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Uma alimentação inadequada ou instável pode causar falhas durante o funcionamento da placa de vídeo.',
        options: [
            { text: 'Alimentação da placa', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Uma alimentação inadequada ou instável pode causar falhas durante o funcionamento da placa de vídeo.' },
            { text: 'Apenas o teclado', moneyChange: 20, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Apenas a webcam', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Apenas a impressora', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Thiago',
        gender: 'male',
        dialogue: '“Onde ficam armazenadas temporariamente as texturas dos jogos na placa de vídeo?”',
        brokenPart: 'GPU',
        diagnosticText: 'A memória de vídeo é utilizada para armazenar temporariamente dados gráficos, incluindo texturas utilizadas nos jogos.',
        options: [
            { text: 'VRAM', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'A memória de vídeo é utilizada para armazenar temporariamente dados gráficos, incluindo texturas utilizadas nos jogos.' },
            { text: 'HD externo', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'BIOS do teclado', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Memória do mouse', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Técnico Curioso',
        gender: 'male',
        dialogue: '“Minha tela apresenta defeitos, mas não sei quando acontece.” O que o técnico deve perguntar?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Saber quando e em quais condições o defeito acontece ajuda o técnico a reproduzir o problema e encontrar sua causa.',
        options: [
            { text: 'Em quais situações o problema aparece', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Saber quando e em quais condições o defeito acontece ajuda o técnico a reproduzir o problema e encontrar sua causa.' },
            { text: 'Qual é a cor do teclado', moneyChange: 20, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Qual é a marca do mouse', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Qual é o papel de parede', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Técnico Curioso',
        gender: 'male',
        dialogue: '“Depois de instalar um novo driver, começaram os problemas.” O que deve ser investigado?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Como o problema começou logo após a instalação, o driver é uma das primeiras coisas que devem ser investigadas.',
        options: [
            { text: 'O driver', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Como o problema começou logo após a instalação, o driver é uma das primeiras coisas que devem ser investigadas.' },
            { text: 'O teclado', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'A webcam', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'A impressora', moneyChange: 0, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Cliente Preocupada',
        gender: 'female',
        dialogue: '“A placa funciona no começo, mas depois começa a apresentar problemas.” O que pode estar relacionado?',
        brokenPart: 'Placa-Mãe',
        diagnosticText: 'Se a placa funciona normalmente no início e apresenta falhas depois, o aumento da temperatura pode estar relacionado ao problema.',
        options: [
            { text: 'Temperatura da GPU', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Se a placa funciona normalmente no início e apresenta falhas depois, o aumento da temperatura pode estar relacionado ao problema.' },
            { text: 'Teclado', moneyChange: 0, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Webcam', moneyChange: 20, repChange: -5, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Impressora', moneyChange: 0, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    },
    {
        name: 'Cliente Exigente',
        gender: 'male',
        dialogue: '“Minha placa de vídeo está com defeito. Preciso comprar outra?” O que o técnico deve fazer primeiro?',
        brokenPart: 'GPU',
        diagnosticText: 'Antes de substituir a placa, é necessário realizar testes para confirmar se ela realmente está com defeito.',
        options: [
            { text: 'Trocar imediatamente', moneyChange: 0, repChange: -10, emotion: 'angry', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Fazer testes de driver, temperatura, alimentação e hardware', moneyChange: 150, repChange: 10, emotion: 'happy', outcomeText: 'Antes de substituir a placa, é necessário realizar testes para confirmar se ela realmente está com defeito.' },
            { text: 'Formatar o computador', moneyChange: 20, repChange: -5, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
            { text: 'Trocar o teclado', moneyChange: 20, repChange: -10, emotion: 'sad', outcomeText: 'Isso não resolveu o problema! O cliente ficou insatisfeito.' },
        ]
    }
];
