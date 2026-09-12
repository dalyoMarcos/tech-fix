const gameData = [
    {
      id: "151", name: "Pedro", gender: "male",
      brokenPart: "Geral", diagnosticText: "O primeiro passo na triagem \u00e9 sempre verificar os perif\u00e9ricos mais b\u00e1sicos. Cabos partidos ou\ntomadas com defeito s\u00e3o os vil\u00f5es mais comuns e f\u00e1ceis de diagnosticar.",
      dialogue: "\"Meu notebook n\u00e3o liga de jeito nenhum depois de uma queda de energia aqui em casa.\" \nAtendente: \"Entendi o susto. Qual \u00e9 o nosso primeiro passo l\u00f3gico e seguro antes de abrir o  equipamento?",
      options: [
        { text: "Abrir o notebook imediatamente para testar a placa-m\u00e3e com u...", outcomeText: "Erro na manuten\u00e7\u00e3o! O primeiro passo na triagem \u00e9 sempre verificar os perif\u00e9ricos mais b\u00e1sicos. Cabos partidos ou\ntomadas com defeito s\u00e3o os vil\u00f5es mais comuns e f\u00e1ceis de diagnosticar.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Conectar o carregador em outra tomada e testar com um carreg...", outcomeText: "O primeiro passo na triagem \u00e9 sempre verificar os perif\u00e9ricos mais b\u00e1sicos. Cabos partidos ou\ntomadas com defeito s\u00e3o os vil\u00f5es mais comuns e f\u00e1ceis de diagnosticar.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "Dizer ao cliente que a placa-m\u00e3e queimou e cobrar o valor ma...", outcomeText: "Erro na manuten\u00e7\u00e3o! O primeiro passo na triagem \u00e9 sempre verificar os perif\u00e9ricos mais b\u00e1sicos. Cabos partidos ou\ntomadas com defeito s\u00e3o os vil\u00f5es mais comuns e f\u00e1ceis de diagnosticar.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Pedir para o cliente deixar o notebook e voltar em uma seman...", outcomeText: "Erro na manuten\u00e7\u00e3o! O primeiro passo na triagem \u00e9 sempre verificar os perif\u00e9ricos mais b\u00e1sicos. Cabos partidos ou\ntomadas com defeito s\u00e3o os vil\u00f5es mais comuns e f\u00e1ceis de diagnosticar.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "152", name: "Julia", gender: "male",
      brokenPart: "Geral", diagnosticText: "A seguran\u00e7a vem em primeiro lugar. A fonte sofreu um curto-circuito e deve ser substitu\u00edda \npara evitar danos catastr\u00f3ficos ao restante do hardware.",
      dialogue: "\"Meu computador de mesa est\u00e1 com um cheiro estranho de queimado e n\u00e3o d\u00e1 v\u00eddeo.\" \nAtendente: \"Abri o seu gabinete e encontrei uma lagartixa alojada dentro da fonte, causando um curto.  O que eu devo fazer agora?\"",
      options: [
        { text: "Retirar o animal com uma pin\u00e7a, limpar a fonte com \u00e1lcool is...", outcomeText: "Erro na manuten\u00e7\u00e3o! A seguran\u00e7a vem em primeiro lugar. A fonte sofreu um curto-circuito e deve ser substitu\u00edda \npara evitar danos catastr\u00f3ficos ao restante do hardware.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Desligar o PC da tomada, descartar a fonte danificada e veri...", outcomeText: "A seguran\u00e7a vem em primeiro lugar. A fonte sofreu um curto-circuito e deve ser substitu\u00edda \npara evitar danos catastr\u00f3ficos ao restante do hardware.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "Continuar os testes com a fonte para ver se o cheiro de quei...", outcomeText: "Erro na manuten\u00e7\u00e3o! A seguran\u00e7a vem em primeiro lugar. A fonte sofreu um curto-circuito e deve ser substitu\u00edda \npara evitar danos catastr\u00f3ficos ao restante do hardware.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Colocar a fonte no sol para secar antes de voltar a utilizar...", outcomeText: "Erro na manuten\u00e7\u00e3o! A seguran\u00e7a vem em primeiro lugar. A fonte sofreu um curto-circuito e deve ser substitu\u00edda \npara evitar danos catastr\u00f3ficos ao restante do hardware.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "153", name: "Fernanda", gender: "male",
      brokenPart: "Geral", diagnosticText: "O atendimento emp\u00e1tico \u00e9 t\u00e3o importante quanto a t\u00e9cnica. Aplicar m\u00e9todos que n\u00e3o \nsobrescrevam os dados \u00e9 o caminho correto para recuperar os arquivos.",
      dialogue: "\"Meu HD externo n\u00e3o \u00e9 reconhecido e ele tem todas as fotos da minha fam\u00edlia! Estou  desesperado.\" \nAtendente: \"Por favor, acalme-se, faremos o poss\u00edvel. Qual \u00e9 a conduta t\u00e9cnica imediata para tentar  resgatar esses dados?\"",
      options: [
        { text: "Formatar o HD rapidamente para ver se ele volta a funcionar ...", outcomeText: "Erro na manuten\u00e7\u00e3o! O atendimento emp\u00e1tico \u00e9 t\u00e3o importante quanto a t\u00e9cnica. Aplicar m\u00e9todos que n\u00e3o \nsobrescrevam os dados \u00e9 o caminho correto para recuperar os arquivos.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Dizer que ele perdeu tudo e que voc\u00ea n\u00e3o pode fazer absoluta...", outcomeText: "Erro na manuten\u00e7\u00e3o! O atendimento emp\u00e1tico \u00e9 t\u00e3o importante quanto a t\u00e9cnica. Aplicar m\u00e9todos que n\u00e3o \nsobrescrevam os dados \u00e9 o caminho correto para recuperar os arquivos.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Conectar o HD a um ambiente seguro (live-cd/dock) e tentar s...", outcomeText: "O atendimento emp\u00e1tico \u00e9 t\u00e3o importante quanto a t\u00e9cnica. Aplicar m\u00e9todos que n\u00e3o \nsobrescrevam os dados \u00e9 o caminho correto para recuperar os arquivos.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "Abrir o HD no meio da loja para ver o disco por dentro e ten...", outcomeText: "Erro na manuten\u00e7\u00e3o! O atendimento emp\u00e1tico \u00e9 t\u00e3o importante quanto a t\u00e9cnica. Aplicar m\u00e9todos que n\u00e3o \nsobrescrevam os dados \u00e9 o caminho correto para recuperar os arquivos.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "154", name: "Marcos", gender: "male",
      brokenPart: "Geral", diagnosticText: "Processadores modernos possuem prote\u00e7\u00e3o t\u00e9rmica e desligam o PC para n\u00e3o queimar \nquando atingem temperaturas cr\u00edticas devido \u00e0 dissipa\u00e7\u00e3o ineficiente.",
      dialogue: "\"Meu computador de jogos trava e reinicia sozinho sempre que eu come\u00e7o uma partida  pesada.\" \nAtendente: \"Monitorei as taxas do sistema e notei que o processador atinge 100\u00b0C rapidamente. Qual \u00e9  a causa e a a\u00e7\u00e3o corretiva?\"",
      options: [
        { text: "O sistema operacional Windows est\u00e1 corrompido; \u00e9 necess\u00e1rio ...", outcomeText: "Erro na manuten\u00e7\u00e3o! Processadores modernos possuem prote\u00e7\u00e3o t\u00e9rmica e desligam o PC para n\u00e3o queimar \nquando atingem temperaturas cr\u00edticas devido \u00e0 dissipa\u00e7\u00e3o ineficiente.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "A placa de v\u00eddeo est\u00e1 com defeito de f\u00e1brica; voc\u00ea deve acon...", outcomeText: "Erro na manuten\u00e7\u00e3o! Processadores modernos possuem prote\u00e7\u00e3o t\u00e9rmica e desligam o PC para n\u00e3o queimar \nquando atingem temperaturas cr\u00edticas devido \u00e0 dissipa\u00e7\u00e3o ineficiente.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Falha no sistema de refrigera\u00e7\u00e3o (cooler solto ou pasta seca...", outcomeText: "Processadores modernos possuem prote\u00e7\u00e3o t\u00e9rmica e desligam o PC para n\u00e3o queimar \nquando atingem temperaturas cr\u00edticas devido \u00e0 dissipa\u00e7\u00e3o ineficiente.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "O monitor do cliente n\u00e3o suporta a taxa de atualiza\u00e7\u00e3o do jo...", outcomeText: "Erro na manuten\u00e7\u00e3o! Processadores modernos possuem prote\u00e7\u00e3o t\u00e9rmica e desligam o PC para n\u00e3o queimar \nquando atingem temperaturas cr\u00edticas devido \u00e0 dissipa\u00e7\u00e3o ineficiente.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "155", name: "Marcos", gender: "male",
      brokenPart: "Geral", diagnosticText: "Ligar um equipamento com res\u00edduos de l\u00edquido condutivo (como caf\u00e9 com a\u00e7\u00facar) pode \ncausar um curto imediato, fritando componentes que poderiam ser salvos.",
      dialogue: "\"Derrubei um copo de caf\u00e9 no teclado do meu MacBook! Desliguei ele na hora e trouxe  correndo.\" \nAtendente: \"\u00d3timo que desligou r\u00e1pido. O que eu N\u00c3O posso fazer de forma alguma ao receb\u00ea-lo na  bancada?\"",
      options: [
        { text: "Desconectar a bateria imediatamente ao abrir o equipamento.", outcomeText: "Erro na manuten\u00e7\u00e3o! Ligar um equipamento com res\u00edduos de l\u00edquido condutivo (como caf\u00e9 com a\u00e7\u00facar) pode \ncausar um curto imediato, fritando componentes que poderiam ser salvos.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Limpar a placa com \u00e1lcool isoprop\u00edlico e escova antiest\u00e1tica...", outcomeText: "Erro na manuten\u00e7\u00e3o! Ligar um equipamento com res\u00edduos de l\u00edquido condutivo (como caf\u00e9 com a\u00e7\u00facar) pode \ncausar um curto imediato, fritando componentes que poderiam ser salvos.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Ligar o notebook na tomada ou pressionar o bot\u00e3o de ligar pa...", outcomeText: "Ligar um equipamento com res\u00edduos de l\u00edquido condutivo (como caf\u00e9 com a\u00e7\u00facar) pode \ncausar um curto imediato, fritando componentes que poderiam ser salvos.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "Colocar a placa-m\u00e3e em uma cuba ultrass\u00f4nica com solu\u00e7\u00e3o de ...", outcomeText: "Erro na manuten\u00e7\u00e3o! Ligar um equipamento com res\u00edduos de l\u00edquido condutivo (como caf\u00e9 com a\u00e7\u00facar) pode \ncausar um curto imediato, fritando componentes que poderiam ser salvos.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "156", name: "Carlos", gender: "male",
      brokenPart: "Geral", diagnosticText: "Resist\u00eancia tendendo a zero significa que a linha de alimenta\u00e7\u00e3o est\u00e1 em contato direto com o\nterra. MOSFETs em curto s\u00e3o os maiores suspeitos nessas situa\u00e7\u00f5es.",
      dialogue: "\"Minha placa-m\u00e3e de desktop n\u00e3o d\u00e1 nenhum sinal de vida, nem acende leds.\" \nAtendente: \"Ao medir a resist\u00eancia na linha principal de 12V do conector ATX com o mult\u00edmetro,  encontrei 0 ohms em rela\u00e7\u00e3o ao terra. O que isso aponta?\"",
      options: [
        { text: "Um curto-circuito severo na linha de 12V, muito provavelment...", outcomeText: "Resist\u00eancia tendendo a zero significa que a linha de alimenta\u00e7\u00e3o est\u00e1 em contato direto com o\nterra. MOSFETs em curto s\u00e3o os maiores suspeitos nessas situa\u00e7\u00f5es.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "A fonte de alimenta\u00e7\u00e3o est\u00e1 em modo de prote\u00e7\u00e3o (standby) e ...", outcomeText: "Erro na manuten\u00e7\u00e3o! Resist\u00eancia tendendo a zero significa que a linha de alimenta\u00e7\u00e3o est\u00e1 em contato direto com o\nterra. MOSFETs em curto s\u00e3o os maiores suspeitos nessas situa\u00e7\u00f5es.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "A mem\u00f3ria RAM est\u00e1 em curto, o que desarmou a placa e zerou ...", outcomeText: "Erro na manuten\u00e7\u00e3o! Resist\u00eancia tendendo a zero significa que a linha de alimenta\u00e7\u00e3o est\u00e1 em contato direto com o\nterra. MOSFETs em curto s\u00e3o os maiores suspeitos nessas situa\u00e7\u00f5es.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "O processador est\u00e1 funcionando em seu modo de economia de en...", outcomeText: "Erro na manuten\u00e7\u00e3o! Resist\u00eancia tendendo a zero significa que a linha de alimenta\u00e7\u00e3o est\u00e1 em contato direto com o\nterra. MOSFETs em curto s\u00e3o os maiores suspeitos nessas situa\u00e7\u00f5es.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "157", name: "Beatriz", gender: "male",
      brokenPart: "Geral", diagnosticText: "A comunica\u00e7\u00e3o entre a RAM e o processador exige tens\u00f5es espec\u00edficas. Se o circuito \nregulador local falhou, a placa n\u00e3o reconhecer\u00e1 a mem\u00f3ria por mais que voc\u00ea a limpe.",
      dialogue: "\"Meu computador liga, os coolers rodam r\u00e1pidos, mas a tela fica preta e ele fica apitando.\" \nAtendente: \"Identifiquei que \u00e9 erro de mem\u00f3ria. J\u00e1 limpei os contatos e slots, testei outros pentes bons  e continua igual. Qual o pr\u00f3ximo passo?\"",
      options: [
        { text: "Injetar tens\u00e3o na linha de alimenta\u00e7\u00e3o principal ou de termi...", outcomeText: "A comunica\u00e7\u00e3o entre a RAM e o processador exige tens\u00f5es espec\u00edficas. Se o circuito \nregulador local falhou, a placa n\u00e3o reconhecer\u00e1 a mem\u00f3ria por mais que voc\u00ea a limpe.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "Realizar a atualiza\u00e7\u00e3o do BIOS da placa-m\u00e3e atrav\u00e9s de um gr...", outcomeText: "Erro na manuten\u00e7\u00e3o! A comunica\u00e7\u00e3o entre a RAM e o processador exige tens\u00f5es espec\u00edficas. Se o circuito \nregulador local falhou, a placa n\u00e3o reconhecer\u00e1 a mem\u00f3ria por mais que voc\u00ea a limpe.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Substituir a bateria da CMOS por uma nova.", outcomeText: "Erro na manuten\u00e7\u00e3o! A comunica\u00e7\u00e3o entre a RAM e o processador exige tens\u00f5es espec\u00edficas. Se o circuito \nregulador local falhou, a placa n\u00e3o reconhecer\u00e1 a mem\u00f3ria por mais que voc\u00ea a limpe.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Trocar a placa de v\u00eddeo dedicada.", outcomeText: "Erro na manuten\u00e7\u00e3o! A comunica\u00e7\u00e3o entre a RAM e o processador exige tens\u00f5es espec\u00edficas. Se o circuito \nregulador local falhou, a placa n\u00e3o reconhecer\u00e1 a mem\u00f3ria por mais que voc\u00ea a limpe.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "158", name: "Marcos", gender: "male",
      brokenPart: "Geral", diagnosticText: "O circuito regulador de tens\u00e3o superaquece ao entregar corrente ao processador. Os \ncomponentes de pot\u00eancia t\u00eam perda de efici\u00eancia t\u00e9rmica que faz a placa reduzir o clock para esfriar.",
      dialogue: "\"Sinto que meu PC perde rendimento e d\u00e1 umas travadas do nada no meio do uso.\" \nAtendente: \"O processador est\u00e1 reduzindo o clock por seguran\u00e7a (throttling), mas ele pr\u00f3prio est\u00e1 frio.  O term\u00f4metro mostrou os VRMs fervendo. O que ocorre?\"",
      options: [
        { text: "Os MOSFETs est\u00e3o sofrendo perda de efici\u00eancia (thermal runaw...", outcomeText: "O circuito regulador de tens\u00e3o superaquece ao entregar corrente ao processador. Os \ncomponentes de pot\u00eancia t\u00eam perda de efici\u00eancia t\u00e9rmica que faz a placa reduzir o clock para esfriar.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "A pasta t\u00e9rmica do processador ressecou e o calor est\u00e1 escap...", outcomeText: "Erro na manuten\u00e7\u00e3o! O circuito regulador de tens\u00e3o superaquece ao entregar corrente ao processador. Os \ncomponentes de pot\u00eancia t\u00eam perda de efici\u00eancia t\u00e9rmica que faz a placa reduzir o clock para esfriar.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "A placa-m\u00e3e est\u00e1 em curto-circuito devido a um parafuso solt...", outcomeText: "Erro na manuten\u00e7\u00e3o! O circuito regulador de tens\u00e3o superaquece ao entregar corrente ao processador. Os \ncomponentes de pot\u00eancia t\u00eam perda de efici\u00eancia t\u00e9rmica que faz a placa reduzir o clock para esfriar.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Os capacitores do VRM est\u00e3o explodindo, o que causa uma qued...", outcomeText: "Erro na manuten\u00e7\u00e3o! O circuito regulador de tens\u00e3o superaquece ao entregar corrente ao processador. Os \ncomponentes de pot\u00eancia t\u00eam perda de efici\u00eancia t\u00e9rmica que faz a placa reduzir o clock para esfriar.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "159", name: "Ana", gender: "male",
      brokenPart: "Geral", diagnosticText: "O acoplamento AC filtra a tens\u00e3o cont\u00ednua (DC) e permite focar apenas na varia\u00e7\u00e3o \n(ondula\u00e7\u00e3o/ru\u00eddo) da tens\u00e3o, o que \u00e9 ideal para analisar a qualidade da energia.",
      dialogue: "\"Quero uma an\u00e1lise exata se a energia que alimenta meus componentes est\u00e1 limpa e sem  oscila\u00e7\u00f5es perigosas.\" \nAtendente: \"Perfeito. Para medir com precis\u00e3o a ondula\u00e7\u00e3o (ripple) de alta frequ\u00eancia nas linhas  reguladas da placa-m\u00e3e, o que devo usar?\"",
      options: [
        { text: "Um oscilosc\u00f3pio configurado em acoplamento AC (Alternate Cur...", outcomeText: "O acoplamento AC filtra a tens\u00e3o cont\u00ednua (DC) e permite focar apenas na varia\u00e7\u00e3o \n(ondula\u00e7\u00e3o/ru\u00eddo) da tens\u00e3o, o que \u00e9 ideal para analisar a qualidade da energia.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "Um mult\u00edmetro digital configurado para medir tens\u00e3o cont\u00ednua...", outcomeText: "Erro na manuten\u00e7\u00e3o! O acoplamento AC filtra a tens\u00e3o cont\u00ednua (DC) e permite focar apenas na varia\u00e7\u00e3o \n(ondula\u00e7\u00e3o/ru\u00eddo) da tens\u00e3o, o que \u00e9 ideal para analisar a qualidade da energia.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Um testador de fonte ATX ligado diretamente nos pinos do cab...", outcomeText: "Erro na manuten\u00e7\u00e3o! O acoplamento AC filtra a tens\u00e3o cont\u00ednua (DC) e permite focar apenas na varia\u00e7\u00e3o \n(ondula\u00e7\u00e3o/ru\u00eddo) da tens\u00e3o, o que \u00e9 ideal para analisar a qualidade da energia.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Uma placa de diagn\u00f3stico POST PCI-Express inserida no slot.", outcomeText: "Erro na manuten\u00e7\u00e3o! O acoplamento AC filtra a tens\u00e3o cont\u00ednua (DC) e permite focar apenas na varia\u00e7\u00e3o \n(ondula\u00e7\u00e3o/ru\u00eddo) da tens\u00e3o, o que \u00e9 ideal para analisar a qualidade da energia.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "160", name: "Marcos", gender: "male",
      brokenPart: "Geral", diagnosticText: "Os c\u00f3digos 00 ou CO costumam ser os primeiros da inicializa\u00e7\u00e3o. Geralmente significam que\no processador est\u00e1 morto, sem alimenta\u00e7\u00e3o, ou o chip da BIOS est\u00e1 corrompido e n\u00e3o inicializa.",
      dialogue: "\"Levei meu PC em outro lugar, disseram que era a BIOS, mas ele continua sem dar v\u00eddeo.\" \nAtendente: \"Coloquei uma placa de diagn\u00f3stico na sua placa-m\u00e3e e ela trava direto no c\u00f3digo inicial  '00' (ou 'CO'). O que esse c\u00f3digo costuma indicar?\"",
      options: [
        { text: "Falha fatal antes ou durante o in\u00edcio do POST, frequentement...", outcomeText: "Os c\u00f3digos 00 ou CO costumam ser os primeiros da inicializa\u00e7\u00e3o. Geralmente significam que\no processador est\u00e1 morto, sem alimenta\u00e7\u00e3o, ou o chip da BIOS est\u00e1 corrompido e n\u00e3o inicializa.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "O sistema concluiu o POST com sucesso e est\u00e1 pronto para ini...", outcomeText: "Erro na manuten\u00e7\u00e3o! Os c\u00f3digos 00 ou CO costumam ser os primeiros da inicializa\u00e7\u00e3o. Geralmente significam que\no processador est\u00e1 morto, sem alimenta\u00e7\u00e3o, ou o chip da BIOS est\u00e1 corrompido e n\u00e3o inicializa.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Erro claro na placa de v\u00eddeo, indicando que ela foi desconec...", outcomeText: "Erro na manuten\u00e7\u00e3o! Os c\u00f3digos 00 ou CO costumam ser os primeiros da inicializa\u00e7\u00e3o. Geralmente significam que\no processador est\u00e1 morto, sem alimenta\u00e7\u00e3o, ou o chip da BIOS est\u00e1 corrompido e n\u00e3o inicializa.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "A bateria da CMOS est\u00e1 descarregada, exigindo apenas a troca...", outcomeText: "Erro na manuten\u00e7\u00e3o! Os c\u00f3digos 00 ou CO costumam ser os primeiros da inicializa\u00e7\u00e3o. Geralmente significam que\no processador est\u00e1 morto, sem alimenta\u00e7\u00e3o, ou o chip da BIOS est\u00e1 corrompido e n\u00e3o inicializa.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "161", name: "Julia", gender: "male",
      brokenPart: "Geral", diagnosticText: "O sinal do bot\u00e3o precisa chegar ao pino do SIO e ir a n\u00edvel l\u00f3gico baixo (OV) quando \npressionado, indicando ao chip que o usu\u00e1rio solicitou a inicializa\u00e7\u00e3o da placa.",
      dialogue: "\"Fui tentar ligar meu computador hoje de manh\u00e3 e ele n\u00e3o d\u00e1 nenhum sinal de vida. Ontem desligou normal.\" \nAtendente: \"As tens\u00f5es prim\u00e1rias de 3.3V e 5V est\u00e3o na placa, mas ela n\u00e3o starta. Qual sinal no Super  I/O monitoramos para ver se o bot\u00e3o power funciona?\"",
      options: [
        { text: "A tens\u00e3o VCORE do processador, pois sem ela o Super I/O entr...", outcomeText: "Erro na manuten\u00e7\u00e3o! O sinal do bot\u00e3o precisa chegar ao pino do SIO e ir a n\u00edvel l\u00f3gico baixo (OV) quando \npressionado, indicando ao chip que o usu\u00e1rio solicitou a inicializa\u00e7\u00e3o da placa.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "O sinal de Clock gerado pelo cristal de 32kHz, que se estive...", outcomeText: "Erro na manuten\u00e7\u00e3o! O sinal do bot\u00e3o precisa chegar ao pino do SIO e ir a n\u00edvel l\u00f3gico baixo (OV) quando \npressionado, indicando ao chip que o usu\u00e1rio solicitou a inicializa\u00e7\u00e3o da placa.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "O sinal de Power Button (ON_OFF#) chegando ao pino do SIO e ...", outcomeText: "O sinal do bot\u00e3o precisa chegar ao pino do SIO e ir a n\u00edvel l\u00f3gico baixo (OV) quando \npressionado, indicando ao chip que o usu\u00e1rio solicitou a inicializa\u00e7\u00e3o da placa.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "A tens\u00e3o da bateria da CMOS, visto que o SIO requer 12V para...", outcomeText: "Erro na manuten\u00e7\u00e3o! O sinal do bot\u00e3o precisa chegar ao pino do SIO e ir a n\u00edvel l\u00f3gico baixo (OV) quando \npressionado, indicando ao chip que o usu\u00e1rio solicitou a inicializa\u00e7\u00e3o da placa.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "162", name: "Julia", gender: "male",
      brokenPart: "Geral", diagnosticText: "Injetar uma tens\u00e3o baixa e segura com limita\u00e7\u00e3o de corrente permite que apenas o \ncomponente em curto dissipe energia em forma de calor, revelando sua exata localiza\u00e7\u00e3o.",
      dialogue: "\"Estava usando meu notebook e de repente deu um estalo e ele apagou tudo. Agora o LED da fonte original fica piscando quando plugo nele.\" \nAtendente: \"Isso acontece porque a linha principal (19V) entrou em curto. Qual \u00e9 a t\u00e9cnica mais segura para achar o componente culpado sem queimar a placa?\"",
      options: [
        { text: "Substituir o fus\u00edvel de entrada por um de maior amperagem pa...", outcomeText: "Erro na manuten\u00e7\u00e3o! Injetar uma tens\u00e3o baixa e segura com limita\u00e7\u00e3o de corrente permite que apenas o \ncomponente em curto dissipe energia em forma de calor, revelando sua exata localiza\u00e7\u00e3o.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Injetar uma tens\u00e3o baixa (1V a 2V) com limita\u00e7\u00e3o de corrente...", outcomeText: "Injetar uma tens\u00e3o baixa e segura com limita\u00e7\u00e3o de corrente permite que apenas o \ncomponente em curto dissipe energia em forma de calor, revelando sua exata localiza\u00e7\u00e3o.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "Medir a continuidade de todos os capacitores da placa-m\u00e3e us...", outcomeText: "Erro na manuten\u00e7\u00e3o! Injetar uma tens\u00e3o baixa e segura com limita\u00e7\u00e3o de corrente permite que apenas o \ncomponente em curto dissipe energia em forma de calor, revelando sua exata localiza\u00e7\u00e3o.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Aplicar solda em todos os terminais dos MOSFETs da linha de ...", outcomeText: "Erro na manuten\u00e7\u00e3o! Injetar uma tens\u00e3o baixa e segura com limita\u00e7\u00e3o de corrente permite que apenas o \ncomponente em curto dissipe energia em forma de calor, revelando sua exata localiza\u00e7\u00e3o.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "163", name: "Ana", gender: "male",
      brokenPart: "Geral", diagnosticText: "O backup \u00e9 crucial em qualquer manuten\u00e7\u00e3o de firmware. Se o arquivo novo n\u00e3o funcionar \nou n\u00e3o for o correto do modelo da placa, voc\u00ea consegue restaurar o chip ao estado original.",
      dialogue: "\"Meu computador liga e gira os coolers bem r\u00e1pido, mas a tela fica preta. Um amigo me  disse que pode ser a BIOS corrompida.\" \nAtendente: \"Pode ser sim. Vou usar um gravador externo (CH341A) para regravar o chip de BIOS SPI.  Qual procedimento eu NUNCA posso esquecer antes de gravar o arquivo novo?\"",
      options: [
        { text: "Ligar a placa em curto nos pinos do Clear CMOS enquanto o gr...", outcomeText: "Erro na manuten\u00e7\u00e3o! O backup \u00e9 crucial em qualquer manuten\u00e7\u00e3o de firmware. Se o arquivo novo n\u00e3o funcionar \nou n\u00e3o for o correto do modelo da placa, voc\u00ea consegue restaurar o chip ao estado original.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Fazer o backup (leitura e salvamento no computador) do conte...", outcomeText: "O backup \u00e9 crucial em qualquer manuten\u00e7\u00e3o de firmware. Se o arquivo novo n\u00e3o funcionar \nou n\u00e3o for o correto do modelo da placa, voc\u00ea consegue restaurar o chip ao estado original.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "Injetar 5V diretamente no pino 8 (VCC) para apagar a mem\u00f3ria...", outcomeText: "Erro na manuten\u00e7\u00e3o! O backup \u00e9 crucial em qualquer manuten\u00e7\u00e3o de firmware. Se o arquivo novo n\u00e3o funcionar \nou n\u00e3o for o correto do modelo da placa, voc\u00ea consegue restaurar o chip ao estado original.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Remover o chip da placa-m\u00e3e e banh\u00e1-lo em \u00e1lcool isoprop\u00edlic...", outcomeText: "Erro na manuten\u00e7\u00e3o! O backup \u00e9 crucial em qualquer manuten\u00e7\u00e3o de firmware. Se o arquivo novo n\u00e3o funcionar \nou n\u00e3o for o correto do modelo da placa, voc\u00ea consegue restaurar o chip ao estado original.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "164", name: "Beatriz", gender: "male",
      brokenPart: "Geral", diagnosticText: "O MOSFET em curto perde sua capacidade de chaveamento el\u00e9trico e vira um \"fio\" direto, \npermitindo que a tens\u00e3o passe sem controle, gerando o curto detectado pelo mult\u00edmetro.",
      dialogue: "\"Minha placa-m\u00e3e est\u00e1 desarmando a fonte assim que eu tento ligar o PC. O que pode ser?\" \nAtendente: \"Suspeito de um MOSFET de alta (High-Side) em curto no VRM do processador. Ao tirar  ele da placa e medir com o mult\u00edmetro, o que confirma o defeito?\"",
      options: [
        { text: "Uma resist\u00eancia pr\u00f3xima a O ohms (continuidade acusando curt...", outcomeText: "O MOSFET em curto perde sua capacidade de chaveamento el\u00e9trico e vira um \"fio\" direto, \npermitindo que a tens\u00e3o passe sem controle, gerando o curto detectado pelo mult\u00edmetro.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "Uma queda de tensionamento de 0.5V (escala de diodo) se a po...", outcomeText: "Erro na manuten\u00e7\u00e3o! O MOSFET em curto perde sua capacidade de chaveamento el\u00e9trico e vira um \"fio\" direto, \npermitindo que a tens\u00e3o passe sem controle, gerando o curto detectado pelo mult\u00edmetro.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Resist\u00eancia infinita (circuito aberto) nos dois sentidos de ...", outcomeText: "Erro na manuten\u00e7\u00e3o! O MOSFET em curto perde sua capacidade de chaveamento el\u00e9trico e vira um \"fio\" direto, \npermitindo que a tens\u00e3o passe sem controle, gerando o curto detectado pelo mult\u00edmetro.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Uma resist\u00eancia de 10 Megaohms, pois a queima de semiconduto...", outcomeText: "Erro na manuten\u00e7\u00e3o! O MOSFET em curto perde sua capacidade de chaveamento el\u00e9trico e vira um \"fio\" direto, \npermitindo que a tens\u00e3o passe sem controle, gerando o curto detectado pelo mult\u00edmetro.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "165", name: "Julia", gender: "male",
      brokenPart: "Geral", diagnosticText: "Como a alimenta\u00e7\u00e3o de 3V chega perfeitamente mas a frequ\u00eancia de tempo n\u00e3o \u00e9 gerada para\no Chipset (PCH), o cristal ressonador ou seus componentes de filtro falharam.",
      dialogue: "\"Meu computador liga, mas n\u00e3o d\u00e1 v\u00eddeo nenhum. J\u00e1 troquei mem\u00f3ria, placa de v\u00eddeo,  processador e nada resolve.\" \nAtendente: \"A bateria de 3V est\u00e1 boa, mas notei com o oscilosc\u00f3pio que o cristal de 32.768 kHz do  circuito RTC n\u00e3o est\u00e1 oscilando. Qual \u00e9 o diagn\u00f3stico prov\u00e1vel?\"",
      options: [
        { text: "O processador est\u00e1 com defeito de f\u00e1brica e deve ser substit...", outcomeText: "Erro na manuten\u00e7\u00e3o! Como a alimenta\u00e7\u00e3o de 3V chega perfeitamente mas a frequ\u00eancia de tempo n\u00e3o \u00e9 gerada para\no Chipset (PCH), o cristal ressonador ou seus componentes de filtro falharam.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "O pr\u00f3prio cristal de 32.768 kHz est\u00e1 defeituoso ou h\u00e1 falha ...", outcomeText: "Como a alimenta\u00e7\u00e3o de 3V chega perfeitamente mas a frequ\u00eancia de tempo n\u00e3o \u00e9 gerada para\no Chipset (PCH), o cristal ressonador ou seus componentes de filtro falharam.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "A bateria da CMOS est\u00e1 invertida, bloqueando o envio de dado...", outcomeText: "Erro na manuten\u00e7\u00e3o! Como a alimenta\u00e7\u00e3o de 3V chega perfeitamente mas a frequ\u00eancia de tempo n\u00e3o \u00e9 gerada para\no Chipset (PCH), o cristal ressonador ou seus componentes de filtro falharam.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "O circuito regulador de tens\u00e3o (VRM) da placa de v\u00eddeo dedic...", outcomeText: "Erro na manuten\u00e7\u00e3o! Como a alimenta\u00e7\u00e3o de 3V chega perfeitamente mas a frequ\u00eancia de tempo n\u00e3o \u00e9 gerada para\no Chipset (PCH), o cristal ressonador ou seus componentes de filtro falharam.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "166", name: "Marcos", gender: "male",
      brokenPart: "Geral", diagnosticText: "Quando a fonte de alimenta\u00e7\u00e3o est\u00e1 defeituosa ou n\u00e3o entrega a pot\u00eancia necess\u00e1ria \n(especialmente durante o pico de inicializa\u00e7\u00e3o), o PC liga os LEDs e ventiladores, mas falha no \nprocesso de POST e desliga.",
      dialogue: "\"Meu computador liga as luzes, os coolers giram, mas n\u00e3o d\u00e1 v\u00eddeo e desliga sozinho ap\u00f3s  alguns segundos.\" \nAtendente: \"Esse comportamento indica uma falha no sistema de inicializa\u00e7\u00e3o por falta de energia  est\u00e1vel. Qual \u00e9 a a\u00e7\u00e3o recomendada para resolver esse problema?\"",
      options: [
        { text: "Testar e substituir a fonte de alimenta\u00e7\u00e3o por uma de qualid...", outcomeText: "Quando a fonte de alimenta\u00e7\u00e3o est\u00e1 defeituosa ou n\u00e3o entrega a pot\u00eancia necess\u00e1ria \n(especialmente durante o pico de inicializa\u00e7\u00e3o), o PC liga os LEDs e ventiladores, mas falha no \nprocesso de POST e desliga.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "Limpar a poeira da placa de v\u00eddeo.", outcomeText: "Erro na manuten\u00e7\u00e3o! Quando a fonte de alimenta\u00e7\u00e3o est\u00e1 defeituosa ou n\u00e3o entrega a pot\u00eancia necess\u00e1ria \n(especialmente durante o pico de inicializa\u00e7\u00e3o), o PC liga os LEDs e ventiladores, mas falha no \nprocesso de POST e desliga.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Formatar o disco r\u00edgido (HD).", outcomeText: "Erro na manuten\u00e7\u00e3o! Quando a fonte de alimenta\u00e7\u00e3o est\u00e1 defeituosa ou n\u00e3o entrega a pot\u00eancia necess\u00e1ria \n(especialmente durante o pico de inicializa\u00e7\u00e3o), o PC liga os LEDs e ventiladores, mas falha no \nprocesso de POST e desliga.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Trocar a mem\u00f3ria RAM.", outcomeText: "Erro na manuten\u00e7\u00e3o! Quando a fonte de alimenta\u00e7\u00e3o est\u00e1 defeituosa ou n\u00e3o entrega a pot\u00eancia necess\u00e1ria \n(especialmente durante o pico de inicializa\u00e7\u00e3o), o PC liga os LEDs e ventiladores, mas falha no \nprocesso de POST e desliga.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "167", name: "Julia", gender: "male",
      brokenPart: "Geral", diagnosticText: "A placa-m\u00e3e utiliza sequ\u00eancias de bipes para alertar sobre falhas de hardware cr\u00edtico. Bipes \ncont\u00ednuos ou m\u00faltiplos bipes curtos costumam indicar que a mem\u00f3ria RAM est\u00e1 mal encaixada ou com\nos contatos sujos.",
      dialogue: "\"O computador emite uma s\u00e9rie de bipes cont\u00ednuos ao ser ligado, a tela fica preta e nada  acontece.\" \nAtendente: \"Esses bipes s\u00e3o c\u00f3digos de erro emitidos pela placa-m\u00e3e. Qual \u00e9 o diagn\u00f3stico mais  prov\u00e1vel e a primeira interven\u00e7\u00e3o?\"",
      options: [
        { text: "O processador est\u00e1 queimado.", outcomeText: "Erro na manuten\u00e7\u00e3o! A placa-m\u00e3e utiliza sequ\u00eancias de bipes para alertar sobre falhas de hardware cr\u00edtico. Bipes \ncont\u00ednuos ou m\u00faltiplos bipes curtos costumam indicar que a mem\u00f3ria RAM est\u00e1 mal encaixada ou com\nos contatos sujos.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Problema na mem\u00f3ria RAM. Desligue o PC, retire os m\u00f3dulos, l...", outcomeText: "A placa-m\u00e3e utiliza sequ\u00eancias de bipes para alertar sobre falhas de hardware cr\u00edtico. Bipes \ncont\u00ednuos ou m\u00faltiplos bipes curtos costumam indicar que a mem\u00f3ria RAM est\u00e1 mal encaixada ou com\nos contatos sujos.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "O monitor est\u00e1 desligado ou com defeito.", outcomeText: "Erro na manuten\u00e7\u00e3o! A placa-m\u00e3e utiliza sequ\u00eancias de bipes para alertar sobre falhas de hardware cr\u00edtico. Bipes \ncont\u00ednuos ou m\u00faltiplos bipes curtos costumam indicar que a mem\u00f3ria RAM est\u00e1 mal encaixada ou com\nos contatos sujos.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "A bateria da placa-m\u00e3e est\u00e1 descarregada.", outcomeText: "Erro na manuten\u00e7\u00e3o! A placa-m\u00e3e utiliza sequ\u00eancias de bipes para alertar sobre falhas de hardware cr\u00edtico. Bipes \ncont\u00ednuos ou m\u00faltiplos bipes curtos costumam indicar que a mem\u00f3ria RAM est\u00e1 mal encaixada ou com\nos contatos sujos.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "168", name: "Julia", gender: "male",
      brokenPart: "Geral", diagnosticText: "Os discos r\u00edgidos tradicionais (HDs) possuem partes mec\u00e2nicas limitadas e costumam ficar \nmuito lentos com o tempo. Um SSD (Solid State Drive) \u00e9 muito mais r\u00e1pido, reduzindo o tempo de \nboot e abertura de programas.",
      dialogue: "\"Meu computador demora mais de 5 minutos para ligar, e quando abro os programas, eles  travam e demoram muito para responder.\" \nAtendente: \"Essa lentid\u00e3o generalizada \u00e9 t\u00edpica de um  componente de armazenamento desgastado. O que voc\u00ea recomenda para resolver definitivamente esse  problema?\"",
      options: [
        { text: "Substituir o HD antigo por um SSD e instalar o sistema opera...", outcomeText: "Os discos r\u00edgidos tradicionais (HDs) possuem partes mec\u00e2nicas limitadas e costumam ficar \nmuito lentos com o tempo. Um SSD (Solid State Drive) \u00e9 muito mais r\u00e1pido, reduzindo o tempo de \nboot e abertura de programas.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "Trocar a mem\u00f3ria RAM por uma de menor frequ\u00eancia.", outcomeText: "Erro na manuten\u00e7\u00e3o! Os discos r\u00edgidos tradicionais (HDs) possuem partes mec\u00e2nicas limitadas e costumam ficar \nmuito lentos com o tempo. Um SSD (Solid State Drive) \u00e9 muito mais r\u00e1pido, reduzindo o tempo de \nboot e abertura de programas.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Desconectar a placa de v\u00eddeo.", outcomeText: "Erro na manuten\u00e7\u00e3o! Os discos r\u00edgidos tradicionais (HDs) possuem partes mec\u00e2nicas limitadas e costumam ficar \nmuito lentos com o tempo. Um SSD (Solid State Drive) \u00e9 muito mais r\u00e1pido, reduzindo o tempo de \nboot e abertura de programas.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Limpar os coolers e substituir a pasta t\u00e9rmica.", outcomeText: "Erro na manuten\u00e7\u00e3o! Os discos r\u00edgidos tradicionais (HDs) possuem partes mec\u00e2nicas limitadas e costumam ficar \nmuito lentos com o tempo. Um SSD (Solid State Drive) \u00e9 muito mais r\u00e1pido, reduzindo o tempo de \nboot e abertura de programas.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "169", name: "Rafael", gender: "male",
      brokenPart: "Geral", diagnosticText: "Quando o processador aquece acima do limite seguro, a placa-m\u00e3e desliga o PC \nimediatamente para evitar a queima do componente. Isso \u00e9 resolvido limpando o cooler e trocando a \npasta t\u00e9rmica.",
      dialogue: "\"Meu computador funciona bem por algumas horas, mas depois desliga sozinho do nada,  especialmente quando estou jogando.\" \nAtendente: \"Esses desligamentos em momentos de uso intenso  s\u00e3o um mecanismo de prote\u00e7\u00e3o. Qual \u00e9 a causa raiz mais comum?\"",
      options: [
        { text: "Corrup\u00e7\u00e3o do sistema operacional Windows.", outcomeText: "Erro na manuten\u00e7\u00e3o! Quando o processador aquece acima do limite seguro, a placa-m\u00e3e desliga o PC \nimediatamente para evitar a queima do componente. Isso \u00e9 resolvido limpando o cooler e trocando a \npasta t\u00e9rmica.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Superaquecimento do processador por ac\u00famulo de poeira ou pas...", outcomeText: "Quando o processador aquece acima do limite seguro, a placa-m\u00e3e desliga o PC \nimediatamente para evitar a queima do componente. Isso \u00e9 resolvido limpando o cooler e trocando a \npasta t\u00e9rmica.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "Falha no mouse ou teclado.", outcomeText: "Erro na manuten\u00e7\u00e3o! Quando o processador aquece acima do limite seguro, a placa-m\u00e3e desliga o PC \nimediatamente para evitar a queima do componente. Isso \u00e9 resolvido limpando o cooler e trocando a \npasta t\u00e9rmica.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Conex\u00e3o incorreta do cabo de rede.", outcomeText: "Erro na manuten\u00e7\u00e3o! Quando o processador aquece acima do limite seguro, a placa-m\u00e3e desliga o PC \nimediatamente para evitar a queima do componente. Isso \u00e9 resolvido limpando o cooler e trocando a \npasta t\u00e9rmica.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "170", name: "Fernanda", gender: "male",
      brokenPart: "Geral", diagnosticText: "Linhas na tela, chuviscos e quadriculados s\u00e3o os sintomas cl\u00e1ssicos de defeito f\u00edsico ou \nsuperaquecimento na placa de v\u00eddeo (processador gr\u00e1fico ou seus m\u00f3dulos de mem\u00f3ria).",
      dialogue: "\"Quando ligo meu PC, a tela fica cheia de linhas verticais estranhas, quadriculados  coloridos e chuviscos.\" \nAtendente: \"Esses padr\u00f5es incorretos na tela s\u00e3o conhecidos como artefatos visuais. Qual componente  \u00e9 o principal suspeito desse defeito?\"",
      options: [
        { text: "O processador (CPU).", outcomeText: "Erro na manuten\u00e7\u00e3o! Linhas na tela, chuviscos e quadriculados s\u00e3o os sintomas cl\u00e1ssicos de defeito f\u00edsico ou \nsuperaquecimento na placa de v\u00eddeo (processador gr\u00e1fico ou seus m\u00f3dulos de mem\u00f3ria).", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "A bateria da placa-m\u00e3e.", outcomeText: "Erro na manuten\u00e7\u00e3o! Linhas na tela, chuviscos e quadriculados s\u00e3o os sintomas cl\u00e1ssicos de defeito f\u00edsico ou \nsuperaquecimento na placa de v\u00eddeo (processador gr\u00e1fico ou seus m\u00f3dulos de mem\u00f3ria).", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "A placa de v\u00eddeo (GPU) ou suas mem\u00f3rias.", outcomeText: "Linhas na tela, chuviscos e quadriculados s\u00e3o os sintomas cl\u00e1ssicos de defeito f\u00edsico ou \nsuperaquecimento na placa de v\u00eddeo (processador gr\u00e1fico ou seus m\u00f3dulos de mem\u00f3ria).", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "O monitor.", outcomeText: "Erro na manuten\u00e7\u00e3o! Linhas na tela, chuviscos e quadriculados s\u00e3o os sintomas cl\u00e1ssicos de defeito f\u00edsico ou \nsuperaquecimento na placa de v\u00eddeo (processador gr\u00e1fico ou seus m\u00f3dulos de mem\u00f3ria).", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "171", name: "Beatriz", gender: "male",
      brokenPart: "Geral", diagnosticText: "Existe uma pequena pilha redonda instalada na placa-m\u00e3e. A sua \u00fanica fun\u00e7\u00e3o \u00e9 fornecer \nenergia para manter as configura\u00e7\u00f5es da BIOS e o rel\u00f3gio ativos quando o PC \u00e9 desligado da tomada.",
      dialogue: "\"Toda vez que eu tiro o computador da tomada, ele perde a data e a hora, e eu preciso  configurar a BIOS novamente.\" \nAtendente: \"O rel\u00f3gio interno e as configura\u00e7\u00f5es b\u00e1sicas precisam de energia constante. O que est\u00e1  causando essa perda de mem\u00f3ria?\"",
      options: [
        { text: "O sistema operacional Windows corrompido.", outcomeText: "Erro na manuten\u00e7\u00e3o! Existe uma pequena pilha redonda instalada na placa-m\u00e3e. A sua \u00fanica fun\u00e7\u00e3o \u00e9 fornecer \nenergia para manter as configura\u00e7\u00f5es da BIOS e o rel\u00f3gio ativos quando o PC \u00e9 desligado da tomada.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Os cabos SATA do HD danificados.", outcomeText: "Erro na manuten\u00e7\u00e3o! Existe uma pequena pilha redonda instalada na placa-m\u00e3e. A sua \u00fanica fun\u00e7\u00e3o \u00e9 fornecer \nenergia para manter as configura\u00e7\u00f5es da BIOS e o rel\u00f3gio ativos quando o PC \u00e9 desligado da tomada.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "A fonte de alimenta\u00e7\u00e3o perdendo pot\u00eancia.", outcomeText: "Erro na manuten\u00e7\u00e3o! Existe uma pequena pilha redonda instalada na placa-m\u00e3e. A sua \u00fanica fun\u00e7\u00e3o \u00e9 fornecer \nenergia para manter as configura\u00e7\u00f5es da BIOS e o rel\u00f3gio ativos quando o PC \u00e9 desligado da tomada.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "A bateria da placa-m\u00e3e (modelo CR2032) est\u00e1 descarregada.", outcomeText: "Existe uma pequena pilha redonda instalada na placa-m\u00e3e. A sua \u00fanica fun\u00e7\u00e3o \u00e9 fornecer \nenergia para manter as configura\u00e7\u00f5es da BIOS e o rel\u00f3gio ativos quando o PC \u00e9 desligado da tomada.", moneyChange: 150, repChange: 20, emotion: "happy" },
      ]
    },
    {
      id: "172", name: "Pedro", gender: "male",
      brokenPart: "Geral", diagnosticText: "A BIOS/UEFI \u00e9 o sistema b\u00e1sico da placa-m\u00e3e. Ao pressionar a tecla correta (geralmente \nDelete ou F2) antes do Windows carregar, voc\u00ea pode definir qual disco o computador vai ler primeiro.",
      dialogue: "\"Instalei um SSD novinho no meu computador, mas ele continua inicializando pelo HD  antigo.\" \nAtendente: \"O computador est\u00e1 dando prioridade para o HD antigo. Onde e como voc\u00ea deve alterar  isso?\"",
      options: [
        { text: "Nas configura\u00e7\u00f5es de \"Personaliza\u00e7\u00e3o\" do Windows.", outcomeText: "Erro na manuten\u00e7\u00e3o! A BIOS/UEFI \u00e9 o sistema b\u00e1sico da placa-m\u00e3e. Ao pressionar a tecla correta (geralmente \nDelete ou F2) antes do Windows carregar, voc\u00ea pode definir qual disco o computador vai ler primeiro.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "No Gerenciador de Dispositivos.", outcomeText: "Erro na manuten\u00e7\u00e3o! A BIOS/UEFI \u00e9 o sistema b\u00e1sico da placa-m\u00e3e. Ao pressionar a tecla correta (geralmente \nDelete ou F2) antes do Windows carregar, voc\u00ea pode definir qual disco o computador vai ler primeiro.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Acessar a BIOS/UEFI pressionando a tecla correspondente ao l...", outcomeText: "A BIOS/UEFI \u00e9 o sistema b\u00e1sico da placa-m\u00e3e. Ao pressionar a tecla correta (geralmente \nDelete ou F2) antes do Windows carregar, voc\u00ea pode definir qual disco o computador vai ler primeiro.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "Desconectar o cabo de v\u00eddeo.", outcomeText: "Erro na manuten\u00e7\u00e3o! A BIOS/UEFI \u00e9 o sistema b\u00e1sico da placa-m\u00e3e. Ao pressionar a tecla correta (geralmente \nDelete ou F2) antes do Windows carregar, voc\u00ea pode definir qual disco o computador vai ler primeiro.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "173", name: "Marcos", gender: "male",
      brokenPart: "Geral", diagnosticText: "A falta de sinal no monitor pode ser causada por um cabo de v\u00eddeo solto ou mal encaixado, \nou por falhas de comunica\u00e7\u00e3o interna, como mau contato nos m\u00f3dulos de mem\u00f3ria RAM.",
      dialogue: "\"O computador liga, os coolers giram, os LEDs acendem, mas o monitor diz 'Sem sinal' e  no aparece imagem.\" \nAtendente: \"Esse \u00e9 um problema cl\u00e1ssico de falta de v\u00eddeo. Qual destas a\u00e7\u00f5es \u00e9 a mais indicada para  come\u00e7ar o diagn\u00f3stico?\"",
      options: [
        { text: "Verificar se o cabo de v\u00eddeo est\u00e1 bem conectado ao monitor e...", outcomeText: "A falta de sinal no monitor pode ser causada por um cabo de v\u00eddeo solto ou mal encaixado, \nou por falhas de comunica\u00e7\u00e3o interna, como mau contato nos m\u00f3dulos de mem\u00f3ria RAM.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "Substituir o processador.", outcomeText: "Erro na manuten\u00e7\u00e3o! A falta de sinal no monitor pode ser causada por um cabo de v\u00eddeo solto ou mal encaixado, \nou por falhas de comunica\u00e7\u00e3o interna, como mau contato nos m\u00f3dulos de mem\u00f3ria RAM.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Desinstalar a placa de rede.", outcomeText: "Erro na manuten\u00e7\u00e3o! A falta de sinal no monitor pode ser causada por um cabo de v\u00eddeo solto ou mal encaixado, \nou por falhas de comunica\u00e7\u00e3o interna, como mau contato nos m\u00f3dulos de mem\u00f3ria RAM.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Formatar o SSD.", outcomeText: "Erro na manuten\u00e7\u00e3o! A falta de sinal no monitor pode ser causada por um cabo de v\u00eddeo solto ou mal encaixado, \nou por falhas de comunica\u00e7\u00e3o interna, como mau contato nos m\u00f3dulos de mem\u00f3ria RAM.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "174", name: "Pedro", gender: "male",
      brokenPart: "Geral", diagnosticText: "A melhor abordagem \u00e9 transparente e consultiva. Voc\u00ea explica o defeito (capacitores), mostra\na pe\u00e7a danificada para gerar confian\u00e7a, e negocia a substitui\u00e7\u00e3o da placa-m\u00e3e, avaliando se as outras \npe\u00e7as ainda podem ser aproveitadas.",
      dialogue: "\"Meu PC simplesmente n\u00e3o liga nada, n\u00e3o acende nenhuma luz e sinto um leve cheiro de  queimado.\" Como t\u00e9cnico, ap\u00f3s abrir o gabinete, voc\u00ea identifica capacitores estufados e vazando na placa-m\u00e3e.  Qual abordagem t\u00e9cnica e comercial voc\u00ea deve utilizar com o cliente?",
      options: [
        { text: "Dizer que o problema \u00e9 na tomada e sugerir trocar o estabili...", outcomeText: "Erro na manuten\u00e7\u00e3o! A melhor abordagem \u00e9 transparente e consultiva. Voc\u00ea explica o defeito (capacitores), mostra\na pe\u00e7a danificada para gerar confian\u00e7a, e negocia a substitui\u00e7\u00e3o da placa-m\u00e3e, avaliando se as outras \npe\u00e7as ainda podem ser aproveitadas.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Informar que a placa-m\u00e3e est\u00e1 em curto, mas como \u00e9 uma pe\u00e7a ...", outcomeText: "Erro na manuten\u00e7\u00e3o! A melhor abordagem \u00e9 transparente e consultiva. Voc\u00ea explica o defeito (capacitores), mostra\na pe\u00e7a danificada para gerar confian\u00e7a, e negocia a substitui\u00e7\u00e3o da placa-m\u00e3e, avaliando se as outras \npe\u00e7as ainda podem ser aproveitadas.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Explicar o defeito dos capacitores, propor a substitui\u00e7\u00e3o da...", outcomeText: "A melhor abordagem \u00e9 transparente e consultiva. Voc\u00ea explica o defeito (capacitores), mostra\na pe\u00e7a danificada para gerar confian\u00e7a, e negocia a substitui\u00e7\u00e3o da placa-m\u00e3e, avaliando se as outras \npe\u00e7as ainda podem ser aproveitadas.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "Afirmar que o defeito \u00e9 apenas no processador e tentar vend\u00ea...", outcomeText: "Erro na manuten\u00e7\u00e3o! A melhor abordagem \u00e9 transparente e consultiva. Voc\u00ea explica o defeito (capacitores), mostra\na pe\u00e7a danificada para gerar confian\u00e7a, e negocia a substitui\u00e7\u00e3o da placa-m\u00e3e, avaliando se as outras \npe\u00e7as ainda podem ser aproveitadas.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "175", name: "Julia", gender: "male",
      brokenPart: "Geral", diagnosticText: "A seguran\u00e7a do equipamento deve vir em primeiro lugar. Voc\u00ea educa o cliente sobre a \nimport\u00e2ncia de uma fonte de qualidade (PFC Ativo) para proteger o investimento dele na placa de \nv\u00eddeo, garantindo uma venda com maior valor agregado.",
      dialogue: "\"Quero colocar uma placa de v\u00eddeo gamer super moderna, mas meu computador tem uma  fonte de 400W gen\u00e9rica.\" Como t\u00e9cnico, qual deve ser o seu posicionamento na negocia\u00e7\u00e3o?",
      options: [
        { text: "Dizer que a fonte de 400W aguenta tranquilamente a nova plac...", outcomeText: "Erro na manuten\u00e7\u00e3o! A seguran\u00e7a do equipamento deve vir em primeiro lugar. Voc\u00ea educa o cliente sobre a \nimport\u00e2ncia de uma fonte de qualidade (PFC Ativo) para proteger o investimento dele na placa de \nv\u00eddeo, garantindo uma venda com maior valor agregado.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Explicar o risco de usar a fonte atual, calcular o consumo d...", outcomeText: "A seguran\u00e7a do equipamento deve vir em primeiro lugar. Voc\u00ea educa o cliente sobre a \nimport\u00e2ncia de uma fonte de qualidade (PFC Ativo) para proteger o investimento dele na placa de \nv\u00eddeo, garantindo uma venda com maior valor agregado.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "Recusar a instala\u00e7\u00e3o da placa de v\u00eddeo e dizer que ele deve ...", outcomeText: "Erro na manuten\u00e7\u00e3o! A seguran\u00e7a do equipamento deve vir em primeiro lugar. Voc\u00ea educa o cliente sobre a \nimport\u00e2ncia de uma fonte de qualidade (PFC Ativo) para proteger o investimento dele na placa de \nv\u00eddeo, garantindo uma venda com maior valor agregado.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Sugerir que ele compre apenas mais mem\u00f3ria RAM para compensa...", outcomeText: "Erro na manuten\u00e7\u00e3o! A seguran\u00e7a do equipamento deve vir em primeiro lugar. Voc\u00ea educa o cliente sobre a \nimport\u00e2ncia de uma fonte de qualidade (PFC Ativo) para proteger o investimento dele na placa de \nv\u00eddeo, garantindo uma venda com maior valor agregado.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "176", name: "Carlos", gender: "male",
      brokenPart: "Geral", diagnosticText: "Voc\u00ea resolve o problema imediato do cliente (o defeito) e oferece uma solu\u00e7\u00e3o de melhoria de\nperformance (Dual Channel), agregando valor ao atendimento t\u00e9cnico com uma sugest\u00e3o construtiva e \nvantajosa.",
      dialogue: "\"Meu computador congela enquanto jogo e apresenta uma tela azul. O diagn\u00f3stico mostrou que um dos pentes de Mem\u00f3ria RAM est\u00e1 com defeito.\" O cliente pediu para trocar apenas o pente defeituoso, mas voc\u00ea percebe que ele tem um pente de 8GB  operando sozinho. O que propor?",
      options: [
        { text: "Trocar apenas o pente defeituoso por um id\u00eantico e ignorar o...", outcomeText: "Erro na manuten\u00e7\u00e3o! Voc\u00ea resolve o problema imediato do cliente (o defeito) e oferece uma solu\u00e7\u00e3o de melhoria de\nperformance (Dual Channel), agregando valor ao atendimento t\u00e9cnico com uma sugest\u00e3o construtiva e \nvantajosa.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Dizer que o computador vai queimar se ele n\u00e3o comprar 32GB d...", outcomeText: "Erro na manuten\u00e7\u00e3o! Voc\u00ea resolve o problema imediato do cliente (o defeito) e oferece uma solu\u00e7\u00e3o de melhoria de\nperformance (Dual Channel), agregando valor ao atendimento t\u00e9cnico com uma sugest\u00e3o construtiva e \nvantajosa.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Substituir o pente defeituoso por garantia/pe\u00e7a nova e suger...", outcomeText: "Voc\u00ea resolve o problema imediato do cliente (o defeito) e oferece uma solu\u00e7\u00e3o de melhoria de\nperformance (Dual Channel), agregando valor ao atendimento t\u00e9cnico com uma sugest\u00e3o construtiva e \nvantajosa.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "Informar que a tela azul indica problema no HD e ignorar o p...", outcomeText: "Erro na manuten\u00e7\u00e3o! Voc\u00ea resolve o problema imediato do cliente (o defeito) e oferece uma solu\u00e7\u00e3o de melhoria de\nperformance (Dual Channel), agregando valor ao atendimento t\u00e9cnico com uma sugest\u00e3o construtiva e \nvantajosa.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "177", name: "Carlos", gender: "male",
      brokenPart: "Geral", diagnosticText: "A clonagem de disco transfere o sistema e todos os arquivos exatamente como estavam. \nOferecer essa garantia acalma o cliente, valoriza o seu servi\u00e7o e garante a venda do SSD com a m\u00e3o de \nobra embutida.",
      dialogue: "\"Meu PC demora uns 10 minutos para ligar, e o HD fica sempre em 100%. Quero trocar  por um SSD, mas tenho muito medo de perder meus arquivos e fotos de familia.\" Como voc\u00ea conduz a negocia\u00e7\u00e3o e o servi\u00e7o de migra\u00e7\u00e3o de dados?",
      options: [
        { text: "Explicar o processo de clonagem do HD para o SSD, garantindo...", outcomeText: "A clonagem de disco transfere o sistema e todos os arquivos exatamente como estavam. \nOferecer essa garantia acalma o cliente, valoriza o seu servi\u00e7o e garante a venda do SSD com a m\u00e3o de \nobra embutida.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "Avisar que \u00e9 um processo perigoso, recusar o servi\u00e7o e suger...", outcomeText: "Erro na manuten\u00e7\u00e3o! A clonagem de disco transfere o sistema e todos os arquivos exatamente como estavam. \nOferecer essa garantia acalma o cliente, valoriza o seu servi\u00e7o e garante a venda do SSD com a m\u00e3o de \nobra embutida.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Vender o SSD, apagando o HD antigo para garantir velocidade ...", outcomeText: "Erro na manuten\u00e7\u00e3o! A clonagem de disco transfere o sistema e todos os arquivos exatamente como estavam. \nOferecer essa garantia acalma o cliente, valoriza o seu servi\u00e7o e garante a venda do SSD com a m\u00e3o de \nobra embutida.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Dizer que HDs de 100% n\u00e3o tem conserto, remover o HD e insta...", outcomeText: "Erro na manuten\u00e7\u00e3o! A clonagem de disco transfere o sistema e todos os arquivos exatamente como estavam. \nOferecer essa garantia acalma o cliente, valoriza o seu servi\u00e7o e garante a venda do SSD com a m\u00e3o de \nobra embutida.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "178", name: "Julia", gender: "male",
      brokenPart: "Geral", diagnosticText: "A fonte est\u00e1 falhando em manter os n\u00edveis de tens\u00e3o est\u00e1veis, o que causa os \ndesligamentos repentinos. A solu\u00e7\u00e3o correta \u00e9 apresentar o defeito e vender uma nova fonte.",
      dialogue: "\"O meu computador desliga sozinho do nada. \u00c0s vezes \u00e9 enquanto estou jogando, outras  vezes quando s\u00f3 estou navegando na internet.\" Ap\u00f3s analisar na bancada, voc\u00ea descobre que a fonte de alimenta\u00e7\u00e3o est\u00e1 entregando tens\u00f5es incorretas  (como 11.2V na linha de 12V). Qual \u00e9 o diagn\u00f3stico e negocia\u00e7\u00e3o?",
      options: [
        { text: "O problema \u00e9 a Mem\u00f3ria RAM, deve-se limpar os contatos e cob...", outcomeText: "Erro na manuten\u00e7\u00e3o! A fonte est\u00e1 falhando em manter os n\u00edveis de tens\u00e3o est\u00e1veis, o que causa os \ndesligamentos repentinos. A solu\u00e7\u00e3o correta \u00e9 apresentar o defeito e vender uma nova fonte.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Diagnosticar falha na fonte (incapaz de segurar a tens\u00e3o) e ...", outcomeText: "A fonte est\u00e1 falhando em manter os n\u00edveis de tens\u00e3o est\u00e1veis, o que causa os \ndesligamentos repentinos. A solu\u00e7\u00e3o correta \u00e9 apresentar o defeito e vender uma nova fonte.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "Diagnosticar problema na placa de v\u00eddeo, pois ela \u00e9 a \u00fanica ...", outcomeText: "Erro na manuten\u00e7\u00e3o! A fonte est\u00e1 falhando em manter os n\u00edveis de tens\u00e3o est\u00e1veis, o que causa os \ndesligamentos repentinos. A solu\u00e7\u00e3o correta \u00e9 apresentar o defeito e vender uma nova fonte.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Dizer que a vida \u00fatil do gabinete chegou ao fim e que ele de...", outcomeText: "Erro na manuten\u00e7\u00e3o! A fonte est\u00e1 falhando em manter os n\u00edveis de tens\u00e3o est\u00e1veis, o que causa os \ndesligamentos repentinos. A solu\u00e7\u00e3o correta \u00e9 apresentar o defeito e vender uma nova fonte.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "179", name: "Beatriz", gender: "male",
      brokenPart: "Geral", diagnosticText: "A placa-m\u00e3e avisa sobre falhas de hardware cr\u00edtico atrav\u00e9s de bipes sonoros. Bipes \ncont\u00ednuos geralmente apontam para aus\u00eancia, mau contato ou defeito na mem\u00f3ria RAM ou placa de \nv\u00eddeo.",
      dialogue: "\"Liguei o computador hoje e ele come\u00e7ou a emitir uma s\u00e9rie de bipes cont\u00ednuos, a tela  ficou preta e n\u00e3o iniciou.\" O cliente est\u00e1 preocupado que o PC tenha morrido. Qual \u00e9 o diagn\u00f3stico para esse caso na bancada?",
      options: [
        { text: "A placa-m\u00e3e descarregou e precisa apenas de uma nova bateria...", outcomeText: "Erro na manuten\u00e7\u00e3o! A placa-m\u00e3e avisa sobre falhas de hardware cr\u00edtico atrav\u00e9s de bipes sonoros. Bipes \ncont\u00ednuos geralmente apontam para aus\u00eancia, mau contato ou defeito na mem\u00f3ria RAM ou placa de \nv\u00eddeo.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Os bipes s\u00e3o c\u00f3digos de erro da BIOS. Isso costuma indicar p...", outcomeText: "A placa-m\u00e3e avisa sobre falhas de hardware cr\u00edtico atrav\u00e9s de bipes sonoros. Bipes \ncont\u00ednuos geralmente apontam para aus\u00eancia, mau contato ou defeito na mem\u00f3ria RAM ou placa de \nv\u00eddeo.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "A fonte de alimenta\u00e7\u00e3o queimou a placa de rede e a placa de ...", outcomeText: "Erro na manuten\u00e7\u00e3o! A placa-m\u00e3e avisa sobre falhas de hardware cr\u00edtico atrav\u00e9s de bipes sonoros. Bipes \ncont\u00ednuos geralmente apontam para aus\u00eancia, mau contato ou defeito na mem\u00f3ria RAM ou placa de \nv\u00eddeo.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "O processador superaqueceu antes de ligar e est\u00e1 travando o ...", outcomeText: "Erro na manuten\u00e7\u00e3o! A placa-m\u00e3e avisa sobre falhas de hardware cr\u00edtico atrav\u00e9s de bipes sonoros. Bipes \ncont\u00ednuos geralmente apontam para aus\u00eancia, mau contato ou defeito na mem\u00f3ria RAM ou placa de \nv\u00eddeo.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "180", name: "Marcos", gender: "male",
      brokenPart: "Geral", diagnosticText: "Em muitos casos, o m\u00f3dulo fica sem ser lido simplesmente por mau contato ou por n\u00e3o ter \nsido encaixado corretamente. Orientar o cliente e realizar o teste de limpeza e encaixe resolve o \nproblema sem custo adicional.",
      dialogue: "\"Comprei um pente de mem\u00f3ria novo de 8GB, id\u00eantico ao que eu j\u00e1 tinha, e instalei no PC  sozinho. Por\u00e9m, o Windows mostra que s\u00f3 tenho 8GB dispon\u00edveis no total.\" O cliente acha que foi enganado pela loja onde comprou a mem\u00f3ria. O que voc\u00ea deve verificar e  explicar?",
      options: [
        { text: "Dizer que a placa-m\u00e3e queimou e que ele precisa comprar outr...", outcomeText: "Erro na manuten\u00e7\u00e3o! Em muitos casos, o m\u00f3dulo fica sem ser lido simplesmente por mau contato ou por n\u00e3o ter \nsido encaixado corretamente. Orientar o cliente e realizar o teste de limpeza e encaixe resolve o \nproblema sem custo adicional.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Confirmar que o pente de 8GB est\u00e1 com defeito e cobrar pelo ...", outcomeText: "Erro na manuten\u00e7\u00e3o! Em muitos casos, o m\u00f3dulo fica sem ser lido simplesmente por mau contato ou por n\u00e3o ter \nsido encaixado corretamente. Orientar o cliente e realizar o teste de limpeza e encaixe resolve o \nproblema sem custo adicional.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Explicar que pode ser mau contato no slot, sujeira, ou que a...", outcomeText: "Em muitos casos, o m\u00f3dulo fica sem ser lido simplesmente por mau contato ou por n\u00e3o ter \nsido encaixado corretamente. Orientar o cliente e realizar o teste de limpeza e encaixe resolve o \nproblema sem custo adicional.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "Dizer que a fonte de alimenta\u00e7\u00e3o est\u00e1 fraca e por isso n\u00e3o c...", outcomeText: "Erro na manuten\u00e7\u00e3o! Em muitos casos, o m\u00f3dulo fica sem ser lido simplesmente por mau contato ou por n\u00e3o ter \nsido encaixado corretamente. Orientar o cliente e realizar o teste de limpeza e encaixe resolve o \nproblema sem custo adicional.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "181", name: "Pedro", gender: "male",
      brokenPart: "Geral", diagnosticText: "Esse \u00e9 um erro de compatibilidade comum. Existem slots M.2 nas placas-m\u00e3e que operam\napenas sob o protocolo SATA, enquanto os SSDs NVMe exigem canais PCle. Ofere\u00e7a a troca do SSD \nou a adapta\u00e7\u00e3o com adaptador Pcle.",
      dialogue: "\"Instalei um SSD M.2 NVMe super r\u00e1pido na minha placa-m\u00e3e, instalei no slot correto,  mas o Windows n\u00e3o o reconhece de jeito nenhum.\" Como t\u00e9cnico, qual \u00e9 o poss\u00edvel diagn\u00f3stico para esse conflito de hardware?",
      options: [
        { text: "Explicar que o slot M.2 da placa-m\u00e3e pode suportar apenas o ...", outcomeText: "Esse \u00e9 um erro de compatibilidade comum. Existem slots M.2 nas placas-m\u00e3e que operam\napenas sob o protocolo SATA, enquanto os SSDs NVMe exigem canais PCle. Ofere\u00e7a a troca do SSD \nou a adapta\u00e7\u00e3o com adaptador Pcle.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "Informar que a fonte precisa ser mais potente para reconhece...", outcomeText: "Erro na manuten\u00e7\u00e3o! Esse \u00e9 um erro de compatibilidade comum. Existem slots M.2 nas placas-m\u00e3e que operam\napenas sob o protocolo SATA, enquanto os SSDs NVMe exigem canais PCle. Ofere\u00e7a a troca do SSD \nou a adapta\u00e7\u00e3o com adaptador Pcle.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Dizer que \u00e9 necess\u00e1rio formatar o processador na BIOS para h...", outcomeText: "Erro na manuten\u00e7\u00e3o! Esse \u00e9 um erro de compatibilidade comum. Existem slots M.2 nas placas-m\u00e3e que operam\napenas sob o protocolo SATA, enquanto os SSDs NVMe exigem canais PCle. Ofere\u00e7a a troca do SSD \nou a adapta\u00e7\u00e3o com adaptador Pcle.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Afirmar que o Windows precisa ser desinstalado e reinstalado...", outcomeText: "Erro na manuten\u00e7\u00e3o! Esse \u00e9 um erro de compatibilidade comum. Existem slots M.2 nas placas-m\u00e3e que operam\napenas sob o protocolo SATA, enquanto os SSDs NVMe exigem canais PCle. Ofere\u00e7a a troca do SSD \nou a adapta\u00e7\u00e3o com adaptador Pcle.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "182", name: "Pedro", gender: "male",
      brokenPart: "Geral", diagnosticText: "Quando o HD ou SSD est\u00e1 com problemas f\u00edsicos ou grande desgaste, o sistema demora \nmuito para acessar os dados (leitura) ou para salv\u00e1-los (escrita), causando congelamentos severos.",
      dialogue: "\"Meu PC est\u00e1 muito lento para abrir pastas, copiar arquivos e, \u00e0s vezes, trava  completamente ao tentar salvar um documento.\" \nT\u00e9cnico: \"Essa lentid\u00e3o extrema associada a travamentos ao ler/escrever dados nos leva a suspeitar de  qual pe\u00e7a?\"",
      options: [
        { text: "Setores defeituosos (bad blocks) no disco r\u00edgido ou falha de...", outcomeText: "Quando o HD ou SSD est\u00e1 com problemas f\u00edsicos ou grande desgaste, o sistema demora \nmuito para acessar os dados (leitura) ou para salv\u00e1-los (escrita), causando congelamentos severos.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "Teclado travando o sistema", outcomeText: "Erro na manuten\u00e7\u00e3o! Quando o HD ou SSD est\u00e1 com problemas f\u00edsicos ou grande desgaste, o sistema demora \nmuito para acessar os dados (leitura) ou para salv\u00e1-los (escrita), causando congelamentos severos.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "BIOS desatualizada.", outcomeText: "Erro na manuten\u00e7\u00e3o! Quando o HD ou SSD est\u00e1 com problemas f\u00edsicos ou grande desgaste, o sistema demora \nmuito para acessar os dados (leitura) ou para salv\u00e1-los (escrita), causando congelamentos severos.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Cooler do processador em alta rota\u00e7\u00e3o.", outcomeText: "Erro na manuten\u00e7\u00e3o! Quando o HD ou SSD est\u00e1 com problemas f\u00edsicos ou grande desgaste, o sistema demora \nmuito para acessar os dados (leitura) ou para salv\u00e1-los (escrita), causando congelamentos severos.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "183", name: "Pedro", gender: "male",
      brokenPart: "Geral", diagnosticText: "Quando h\u00e1 aus\u00eancia total de energia combinada com cheiro de queimado, a falha \ngeralmente est\u00e1 no circuito regulador de tens\u00e3o (VRM) da placa-m\u00e3e ou no rompimento/queima de \ncapacitores.",
      dialogue: "\"O computador n\u00e3o liga nada, nem os coolers giram. Abri o gabinete e sinto um leve cheiro de queimado.\" \nT\u00e9cnico: \"Entendo. Em situa\u00e7\u00f5es de pane el\u00e9trica total com odor de queimado, qual pe\u00e7a costuma ser a  principal suspeita?\"",
      options: [
        { text: "Falha no sistema operacional.", outcomeText: "Erro na manuten\u00e7\u00e3o! Quando h\u00e1 aus\u00eancia total de energia combinada com cheiro de queimado, a falha \ngeralmente est\u00e1 no circuito regulador de tens\u00e3o (VRM) da placa-m\u00e3e ou no rompimento/queima de \ncapacitores.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Falta de atualiza\u00e7\u00e3o de drivers.", outcomeText: "Erro na manuten\u00e7\u00e3o! Quando h\u00e1 aus\u00eancia total de energia combinada com cheiro de queimado, a falha \ngeralmente est\u00e1 no circuito regulador de tens\u00e3o (VRM) da placa-m\u00e3e ou no rompimento/queima de \ncapacitores.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Mouse em curto-circuito.", outcomeText: "Erro na manuten\u00e7\u00e3o! Quando h\u00e1 aus\u00eancia total de energia combinada com cheiro de queimado, a falha \ngeralmente est\u00e1 no circuito regulador de tens\u00e3o (VRM) da placa-m\u00e3e ou no rompimento/queima de \ncapacitores.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Curto-circuito na placa-m\u00e3e, possivelmente devido a capacito...", outcomeText: "Quando h\u00e1 aus\u00eancia total de energia combinada com cheiro de queimado, a falha \ngeralmente est\u00e1 no circuito regulador de tens\u00e3o (VRM) da placa-m\u00e3e ou no rompimento/queima de \ncapacitores.", moneyChange: 150, repChange: 20, emotion: "happy" },
      ]
    },
    {
      id: "184", name: "Rafael", gender: "male",
      brokenPart: "Geral", diagnosticText: "Quando a BIOS n\u00e3o encontra nenhum dispositivo de boot, os cabos de dados/energia \npodem estar soltos, ou o disco pode estar com defeito.",
      dialogue: "\"Meu PC est\u00e1 dando a mensagem 'Reboot and Select proper Boot device' e n\u00e3o entra no  Windows.\" O atendente verifica os cabos, entra na BIOS e nota que nenhum disco de armazenamento \u00e9 reconhecido. Qual interven\u00e7\u00e3o deve ser feita?",
      options: [
        { text: "Atualizar a placa de v\u00eddeo para reconhecer o disco.", outcomeText: "Erro na manuten\u00e7\u00e3o! Quando a BIOS n\u00e3o encontra nenhum dispositivo de boot, os cabos de dados/energia \npodem estar soltos, ou o disco pode estar com defeito.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Checar se o HD ou SSD est\u00e1 desconectado e verificar a ordem ...", outcomeText: "Quando a BIOS n\u00e3o encontra nenhum dispositivo de boot, os cabos de dados/energia \npodem estar soltos, ou o disco pode estar com defeito.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "Limpar os coolers para resfriar o sistema e permitir o boot.", outcomeText: "Erro na manuten\u00e7\u00e3o! Quando a BIOS n\u00e3o encontra nenhum dispositivo de boot, os cabos de dados/energia \npodem estar soltos, ou o disco pode estar com defeito.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Trocar a fonte de alimenta\u00e7\u00e3o, pois ela bloqueia o reconheci...", outcomeText: "Erro na manuten\u00e7\u00e3o! Quando a BIOS n\u00e3o encontra nenhum dispositivo de boot, os cabos de dados/energia \npodem estar soltos, ou o disco pode estar com defeito.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },
    {
      id: "185", name: "Ana", gender: "male",
      brokenPart: "Geral", diagnosticText: "O teste do clipe isola a fonte. Se ela ligar e mantiver o cooler girando, o curto est\u00e1 na \nplaca-m\u00e3e. Se ela desarmar sozinha, a fonte est\u00e1 com defeito.",
      dialogue: "\"O PC liga por 2 segundos, os coolers giram e depois ele desliga totalmente sozinho.\" O  atendente suspeita de curto-circuito. Qual \u00e9 o procedimento padr\u00e3o na bancada para isolar se o defeito  est\u00e1 na fonte de alimenta\u00e7\u00e3o ou na placa-m\u00e3e?",
      options: [
        { text: "Fazer o teste do clipe de papel (jampear o fio verde ao pret...", outcomeText: "O teste do clipe isola a fonte. Se ela ligar e mantiver o cooler girando, o curto est\u00e1 na \nplaca-m\u00e3e. Se ela desarmar sozinha, a fonte est\u00e1 com defeito.", moneyChange: 150, repChange: 20, emotion: "happy" },
        { text: "Desconectar o cabo de rede para ver se o PC estabiliza.", outcomeText: "Erro na manuten\u00e7\u00e3o! O teste do clipe isola a fonte. Se ela ligar e mantiver o cooler girando, o curto est\u00e1 na \nplaca-m\u00e3e. Se ela desarmar sozinha, a fonte est\u00e1 com defeito.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Trocar a mem\u00f3ria RAM para ver se o curto para.", outcomeText: "Erro na manuten\u00e7\u00e3o! O teste do clipe isola a fonte. Se ela ligar e mantiver o cooler girando, o curto est\u00e1 na \nplaca-m\u00e3e. Se ela desarmar sozinha, a fonte est\u00e1 com defeito.", moneyChange: -50, repChange: -15, emotion: "angry" },
        { text: "Desligar o monitor e verificar a tomada.", outcomeText: "Erro na manuten\u00e7\u00e3o! O teste do clipe isola a fonte. Se ela ligar e mantiver o cooler girando, o curto est\u00e1 na \nplaca-m\u00e3e. Se ela desarmar sozinha, a fonte est\u00e1 com defeito.", moneyChange: -50, repChange: -15, emotion: "angry" },
      ]
    },

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
