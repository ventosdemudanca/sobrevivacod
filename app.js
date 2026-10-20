const subjects = [
  { name: 'Matemática e Lógica', icon: '∑', color: '#38343E', ink: '#C3A8DC', description: 'Raciocínio, números e ideias' },
  { name: 'Computação em Nuvem', icon: '☁', color: '#38343E', ink: '#C3A8DC', description: 'Serviços e tecnologia cloud' },
  { name: 'Desenvolvimento Web', icon: '⌘', color: '#38343E', ink: '#C3A8DC', description: 'HTML, CSS e muito mais' },
  { name: 'Comandos do Terminal', icon: '>_', color: '#38343E', ink: '#C3A8DC', description: 'Conheça o terminal por dentro' },
  { name: 'Kali Linux', icon: '⌁', color: '#38343E', ink: '#C3A8DC', description: 'Ferramentas e hacking ético' },
  { name: 'Programação', icon: '⌘', color: '#38343E', ink: '#C3A8DC', description: 'Lógica, Python e prática' },
  { name: 'Redes de Computadores', icon: '⌘', color: '#38343E', ink: '#C3A8DC', description: 'Como os dispositivos se conectam' },
  { name: 'Cibersegurança', icon: '♧', color: '#38343E', ink: '#C3A8DC', description: 'Proteção no mundo digital' },
  { name: 'Banco de Dados', icon: '▤', color: '#38343E', ink: '#C3A8DC', description: 'Dados, tabelas e SQL' },
];

const mathTopics = [
  { title: 'Conjuntos', icon: '∪', questions: [
    ['O que é um conjunto?', 'É uma coleção bem definida de elementos, como números, letras ou objetos. Exemplo: A = {1, 2, 3}.'],
    ['O que é um elemento?', 'É cada item que pertence a um conjunto. No conjunto A = {1, 2, 3}, o número 2 é um elemento.'],
    ['O que significa ∈?', 'Significa “pertence a”. Exemplo: 2 ∈ {1, 2, 3}.'],
    ['O que significa ⊂?', 'Significa “está contido em” ou “é subconjunto de”. A ⊂ B quando todo elemento de A também pertence a B.'],
    ['O que é união de conjuntos?', 'É o conjunto dos elementos que estão em A, em B ou nos dois. O símbolo é ∪.'],
    ['O que é interseção?', 'É o conjunto dos elementos comuns a A e B. O símbolo é ∩.'],
    ['O que é diferença entre conjuntos?', 'A − B reúne os elementos que pertencem a A, mas não pertencem a B.'],
  ]},
  { title: 'Lógica', icon: '⊢', questions: [
    ['O que é uma proposição?', 'É uma frase declarativa que pode ser julgada como verdadeira ou falsa. Perguntas e ordens não são proposições.'],
    ['O que é uma proposição verdadeira?', 'É uma proposição cujo valor lógico é verdadeiro (V), de acordo com o que ela afirma.'],
    ['O que é uma proposição falsa?', 'É uma proposição cujo valor lógico é falso (F).'],
    ['O que é uma negação?', 'É a afirmação que inverte o valor lógico de uma proposição. Se P é verdadeira, “não P” é falsa.'],
    ['O que significa E (AND)?', 'A conjunção “E” só é verdadeira quando as duas proposições são verdadeiras.'],
    ['O que significa OU (OR)?', 'O “OU” inclusivo é verdadeiro quando pelo menos uma das proposições é verdadeira; só é falso se ambas forem falsas.'],
    ['O que significa SE... ENTÃO?', 'É uma condicional. “Se P, então Q” só é falsa quando P é verdadeira e Q é falsa.'],
    ['O que é uma tabela-verdade?', 'É uma tabela que mostra o valor lógico de uma expressão para todas as combinações possíveis de valores das proposições.'],
  ]},
  { title: 'Princípios de contagem', icon: '×', questions: [
    ['O que é princípio multiplicativo?', 'Se uma escolha acontece em etapas independentes, multiplicamos o número de opções de cada etapa.'],
    ['O que é princípio aditivo?', 'Quando escolhemos entre casos alternativos que não acontecem juntos, somamos as possibilidades de cada caso.'],
    ['Quando devo multiplicar?', 'Quando a situação envolve etapas sucessivas: uma escolha E depois outra. Conte as opções de cada etapa e multiplique.'],
    ['Quando devo somar?', 'Quando há alternativas mutuamente exclusivas: uma opção OU outra. Conte cada caso e some.'],
    ['O que é uma combinação?', 'É uma escolha em que a ordem não importa. Para escolher k entre n: C(n,k) = n!/[k!(n−k)!].'],
    ['O que é uma permutação?', 'É uma ordenação de todos os elementos. Para n elementos distintos: n! maneiras.'],
    ['O que é um arranjo?', 'É uma escolha ordenada de parte dos elementos. A ordem importa: A(n,k) = n!/(n−k)!.'],
  ]},
  { title: 'Porcentagem', icon: '%', questions: [
    ['Como calcular uma porcentagem?', 'Transforme a porcentagem em fração sobre 100 e multiplique pelo valor. Exemplo: 20% de 50 = 0,20 × 50 = 10.'],
    ['Como calcular um desconto?', 'Subtraia o desconto do preço. Exemplo: 10% de desconto em R$ 80 dá R$ 8 de desconto; o preço final é R$ 72.'],
    ['Como calcular um aumento?', 'Some ao valor inicial a parcela do aumento. Exemplo: aumento de 10% em R$ 80: 80 × 1,10 = R$ 88.'],
    ['Como transformar porcentagem em decimal?', 'Divida por 100. Exemplo: 25% = 25 ÷ 100 = 0,25.'],
  ]},
  { title: 'Probabilidade', icon: '◉', questions: [
    ['O que é probabilidade?', 'É uma medida da chance de um evento acontecer, variando de 0 (impossível) a 1 (certo).'],
    ['Como calcular uma probabilidade?', 'Em resultados igualmente prováveis: P(evento) = número de resultados favoráveis ÷ número de resultados possíveis.'],
    ['O que é espaço amostral?', 'É o conjunto de todos os resultados possíveis de um experimento.'],
    ['O que é um evento?', 'É um conjunto de resultados do espaço amostral que atende a uma condição.'],
    ['Qual a diferença entre evento possível e impossível?', 'Um evento possível tem pelo menos um resultado favorável. Um evento impossível não tem nenhum e sua probabilidade é zero.'],
  ]},
];

const cloudAnswers = {
  'O que é computação em nuvem?': 'É o uso de recursos de computação — como servidores, armazenamento e software — disponibilizados pela internet sob demanda.',
  'O que é Cloud Computing?': 'É o nome em inglês para computação em nuvem: serviços e recursos computacionais acessados pela internet.',
  'Para que serve a computação em nuvem?': 'Para usar processamento, armazenamento, bancos de dados, redes e aplicativos sem precisar manter toda a infraestrutura local.',
  'Qual a diferença entre armazenamento local e armazenamento em nuvem?': 'No armazenamento local, os dados ficam em um dispositivo ou servidor próprio. Na nuvem, ficam em servidores de um provedor e são acessados pela internet.',
  'Quais são as vantagens da computação em nuvem?': 'Acesso remoto, capacidade ajustável, implantação rápida e pagamento conforme o uso são vantagens comuns. A disponibilidade depende do serviço e da conexão.',
  'O que é um servidor em nuvem?': 'É um servidor virtual disponibilizado por um provedor, que pode ser configurado e acessado pela internet.',
  'O que é armazenamento em nuvem?': 'É guardar arquivos e dados em servidores remotos de um provedor e acessá-los pela internet.',
  'O que significa IaaS?': 'Infrastructure as a Service — infraestrutura como serviço. Oferece recursos como máquinas virtuais, rede e armazenamento.',
  'O que significa PaaS?': 'Platform as a Service — plataforma como serviço. Oferece um ambiente gerenciado para desenvolver e executar aplicações.',
  'O que significa SaaS?': 'Software as a Service — software como serviço. É um aplicativo pronto, acessado pela internet, geralmente por navegador ou app.',
  'Qual a diferença entre IaaS, PaaS e SaaS?': 'IaaS oferece infraestrutura; PaaS oferece uma plataforma para criar aplicações; SaaS entrega o software pronto para uso.',
  'Qual modelo oferece infraestrutura?': 'IaaS (Infraestrutura como Serviço).',
  'Qual modelo oferece uma plataforma para desenvolvimento?': 'PaaS (Plataforma como Serviço).',
  'Qual modelo oferece um software pronto para utilização?': 'SaaS (Software como Serviço).',
  'O que é AWS?': 'Amazon Web Services é a plataforma de serviços de computação em nuvem da Amazon.',
  'O que é Microsoft Azure?': 'É a plataforma de computação em nuvem da Microsoft, com serviços de infraestrutura, dados, desenvolvimento e outros.',
  'O que é Google Cloud?': 'É a plataforma de computação em nuvem do Google, com serviços de infraestrutura, dados, inteligência artificial e desenvolvimento.',
  'Para que servem os provedores de nuvem?': 'Eles operam a infraestrutura e oferecem serviços de computação, armazenamento, rede e software pela internet.',
  'Qual a diferença entre AWS, Azure e Google Cloud?': 'São provedores diferentes, com catálogos, ferramentas, preços e integrações próprios. Todos oferecem serviços de nuvem; a escolha depende da necessidade.',
  'O que é virtualização?': 'É uma técnica que abstrai recursos físicos para criar ambientes computacionais virtuais, como máquinas virtuais.',
  'O que é uma máquina virtual?': 'É um computador simulado por software, com recursos virtuais e um sistema operacional próprio.',
  'O que é escalabilidade?': 'É a capacidade de aumentar ou reduzir os recursos de um sistema para acompanhar a demanda.',
  'O que é elasticidade?': 'É ajustar recursos para cima ou para baixo com rapidez, muitas vezes de forma automática, conforme a demanda muda.',
  'O que é disponibilidade?': 'É o quanto um serviço permanece acessível e funcionando quando é necessário.',
  'O que é redundância?': 'É manter componentes ou cópias alternativas para reduzir interrupções quando algo falha.',
  'O que é uma nuvem pública?': 'É uma infraestrutura operada por um provedor e oferecida a vários clientes, com recursos de cada cliente isolados logicamente.',
  'O que é uma nuvem privada?': 'É uma infraestrutura de nuvem dedicada a uma organização, que pode ser operada por ela ou por um provedor.',
  'O que é uma nuvem híbrida?': 'É a combinação integrada de ambientes de nuvem privada e pública, permitindo distribuir sistemas e dados entre eles.',
};

const cloudTopics = questionBank.find((subject) => subject.subject === 'Computação em Nuvem').topics.map((topic) => ({
  title: topic.title,
  icon: topic.title === 'IaaS / PaaS / SaaS' ? '☁' : topic.title === 'Provedores' ? '↗' : topic.title === 'Outros conceitos' ? '◈' : '⌁',
  questions: topic.questions.map((question) => [question, cloudAnswers[question]]),
}));
const terminalAnswers = [
  ['É uma interface para digitar comandos e receber resultados do sistema.', 'Linux é uma família de sistemas operacionais livres e de código aberto, baseada no kernel Linux.', 'O terminal é a interface; o shell interpreta os comandos digitados nele.', 'É uma instrução em texto que o shell interpreta e executa.', 'É uma pasta usada para organizar arquivos e outros diretórios.', 'É o endereço completo de um local no sistema, começando pela raiz /.', 'O absoluto começa na raiz; o relativo é interpretado a partir do diretório atual.', 'É um atalho para o diretório pessoal do usuário.', 'Representa o diretório atual.', 'Representa o diretório pai, um nível acima.'],
  ['Muda o diretório atual do terminal.', 'Use cd Documentos.', 'Use cd .. para subir um nível até o diretório pai.', 'Use cd ~ ou simplesmente cd.', 'Sobe um nível para o diretório pai.', 'cd /home usa o caminho absoluto a partir da raiz; cd home procura uma pasta home dentro do diretório atual.', 'Coloque o nome entre aspas, por exemplo cd "Meus Documentos".'],
  ['Lista arquivos e diretórios.', 'Use ls nome-da-pasta ou ls /caminho/da/pasta.', 'Exibe uma listagem detalhada, incluindo permissões, proprietário, tamanho e data.', 'Inclui arquivos ocultos, cujos nomes começam com ponto.', 'ls mostra a listagem simples; ls -la inclui arquivos ocultos e detalhes.', 'Passe o caminho como argumento, por exemplo ls /home/ana/Documentos.'],
  ['Cria diretórios.', 'Use mkdir Projetos.', 'Informe vários nomes: mkdir Fotos Música Estudos.', 'Cria diretórios intermediários necessários e não reclama se já existirem.', 'Normalmente mostra um erro; use mkdir -p para não falhar se a pasta já existir.'],
  ['Remove arquivos; normalmente não os envia para a lixeira.', 'Use rm teste.txt.', 'rm remove arquivos; rmdir remove diretórios vazios.', 'Remove diretórios e seu conteúdo recursivamente.', 'Pode apagar arquivos e pastas sem confirmação e sem recuperação fácil. Confira o caminho antes de executar.', 'Não. rm costuma excluir diretamente; alguns ambientes oferecem comandos separados para a lixeira.'],
  ['Copia arquivos ou diretórios.', 'Use cp arquivo.txt backup.txt.', 'Informe origem e destino, por exemplo cp arquivo.txt Documentos/.', 'Copia diretórios e seu conteúdo recursivamente.', 'Copiar cria outra cópia; mover muda a localização do arquivo original.'],
  ['Move ou renomeia arquivos e diretórios.', 'Use mv antigo.txt novo.txt.', 'Use mv arquivo.txt Documentos/.', 'mv muda o local ou nome do original; cp cria uma cópia e mantém o original.', 'Dependendo das opções e do sistema, o destino pode ser sobrescrito. Verifique nomes e use -i para pedir confirmação.'],
  ['Regras que controlam quem pode ler, alterar ou executar arquivos e diretórios.', 'Read: permite ler o conteúdo; em diretórios, listar nomes.', 'Write: permite alterar o arquivo; em diretórios, criar, renomear ou remover itens, conforme outras permissões.', 'Execute: permite executar o arquivo; em diretórios, permite acessá-lo/atravessá-lo.', 'Proprietário é o usuário dono; grupo são usuários do grupo associado; outros são os demais usuários.', 'Altera permissões, por exemplo chmod 644 arquivo.txt.', 'Altera proprietário e, opcionalmente, grupo; por exemplo sudo chown ana:grupo arquivo.txt.', 'O proprietário tem rwx; grupo e outros têm r-x. É comum em diretórios e programas públicos.', 'O proprietário tem rw-; grupo e outros têm r--. É comum para arquivos que não precisam ser executados.', 'Permissões amplas podem expor dados ou permitir alterações e execução indevidas. Conceda só o necessário.'],
  ['Um programa em execução, identificado pelo sistema e usando recursos como CPU e memória.', 'Mostra informações sobre processos em execução.', 'Exibe processos e atualiza informações de uso de recursos continuamente.', 'Process ID: número que identifica um processo.', 'Envia um sinal a um processo; por padrão, solicita encerramento. Use o PID correto.', 'Fechar uma janela pode encerrar apenas sua interface; o processo associado pode continuar rodando. Encerrar o processo termina sua execução.', 'É um processo que continua executando sem ocupar a interação atual do terminal.', 'Lista tarefas iniciadas em segundo plano ou suspensas na sessão de shell atual.'],
  ['Arquivo guarda dados; diretório organiza arquivos e outros diretórios.', 'Use touch arquivo.txt.', 'Mostra o conteúdo de arquivos de texto no terminal; também pode concatenar arquivos.', 'Mostra o caminho do diretório atual.', 'Use cat arquivo.txt para mostrar tudo; para leitura paginada, use less arquivo.txt.', 'É um arquivo cujo nome começa com ponto, como .config.', 'Use ls -a ou ls -la.', 'É o topo da hierarquia de diretórios, representado por /.', 'É a pasta pessoal do usuário, normalmente /home/nome-do-usuário.', '/ é a raiz do sistema; ~ é um atalho para o diretório pessoal do usuário atual.'],
];
const terminalTopics = questionBank.find((subject) => subject.subject === 'Comandos do Terminal').topics.map((topic, topicIndex) => ({
  title: topic.title,
  icon: ['⌘', '↪', '≡', '+', '−', '⧉', '↗', '⚿', '◷', '▤'][topicIndex],
  questions: topic.questions.map((question, questionIndex) => [question, terminalAnswers[topicIndex][questionIndex]]),
}));
const programmingAnswers = [
  ['É uma linguagem de programação de alto nível, conhecida por sua sintaxe legível.', 'É usada em automação, análise de dados, inteligência artificial, desenvolvimento web, ciência e educação.', 'É um nome que identifica um valor guardado para uso no programa.', 'Atribua um valor com =, por exemplo: nome = "Ana".', 'São categorias de valores que determinam quais dados uma variável guarda e quais operações fazem sentido.', 'É um tipo de dado usado para representar texto, escrito entre aspas, como "Olá".', 'É um número sem parte decimal, como 7 ou -3; em Python, o tipo é int.', 'É um número que pode ter parte fracionária, como 2.5; em Python, o tipo comum é float.', 'É um valor lógico que só pode ser True ou False.'],
  ['Executa um bloco quando uma condição é verdadeira.', 'Define o bloco alternativo quando a condição do if não é verdadeira.', 'Testa uma condição adicional quando as anteriores falharam.', 'É uma expressão avaliada como verdadeira (True) ou falsa (False).', 'É o operador de comparação “igual a”.', '= atribui um valor; == compara dois valores e produz True ou False.'],
  ['É uma estrutura que repete instruções.', 'Percorre os elementos de uma sequência ou intervalo, executando o bloco para cada item.', 'Repete um bloco enquanto uma condição for verdadeira.', 'for costuma percorrer uma sequência conhecida; while repete enquanto a condição continuar verdadeira.', 'Interrompe imediatamente o laço mais próximo.', 'Pula o restante da repetição atual e segue para a próxima.'],
  ['É um bloco reutilizável de código que pode receber dados e realizar uma tarefa.', 'Inicia a definição de uma função em Python.', 'É o nome de uma variável indicado na definição da função para receber um valor.', 'É o valor concreto enviado ao chamar uma função.', 'Encerra a função e pode devolver um resultado a quem a chamou.'],
  ['É uma coleção ordenada de itens, que pode ser alterada.', 'Use colchetes, por exemplo: frutas = ["maçã", "uva"].', 'Use o índice entre colchetes; o primeiro item fica no índice 0.', 'É uma coleção que associa chaves a valores, como um cadastro nomeado.', 'A lista acessa itens por posição; o dicionário acessa valores por chaves.'],
  ['É organizar instruções claras para resolver um problema, dividindo-o em passos que possam ser executados.', 'É uma sequência finita e ordenada de passos para resolver uma tarefa ou problema.', 'É executar instruções uma após a outra, na ordem definida.', 'É escolher entre caminhos diferentes conforme uma condição, por exemplo com if e else.', 'É repetir instruções enquanto percorre itens ou até uma condição mudar.', 'Combina ou modifica valores lógicos para formar condições mais completas.', 'AND só é verdadeiro quando todas as condições avaliadas são verdadeiras.', 'OR é verdadeiro quando pelo menos uma das condições é verdadeira.', 'NOT inverte o valor lógico: True vira False e False vira True.', 'É acompanhar as instruções e os valores passo a passo para entender o resultado e encontrar erros.'],
  ['Exemplo: numero = 8; se numero % 2 == 0, mostre "par"; caso contrário, mostre "ímpar".', 'A saída será 0, 1 e 2, cada número em uma linha. range(3) começa em 0 e termina antes de 3.', 'Comece total em 0 e percorra range(1, 6), somando cada número ao total. O resultado é 15.', 'Exemplo: def dobro(numero): return numero * 2. Depois, dobro(4) devolve 8.', 'Use if idade >= 18: para mostrar uma mensagem como "maior de idade"; caso contrário, mostre "menor de idade".', 'Use frutas[1]; os índices começam em zero, então o segundo item é "uva".', 'Percorra a lista com for e incremente um contador quando item == "oi".', 'Defina um primeiro item como maior provisório; percorra os demais e atualize esse valor sempre que encontrar um número maior.'],
];
const programmingTopics = questionBank.find((subject) => subject.subject === 'Programação').topics.map((topic, topicIndex) => ({
  title: topic.title,
  icon: ['🐍', '⑂', '↻', 'ƒ', '▦', '⊢', '✎'][topicIndex],
  questions: topic.questions.map((question, questionIndex) => [question, programmingAnswers[topicIndex][questionIndex]]),
}));
const networkTopicData = [
  { title: 'Conceitos', icon: '⌘', level: 1, questions: [
    ['O que é uma rede de computadores?', 'É um conjunto de dispositivos conectados para trocar dados e compartilhar recursos.'],
    ['O que é um endereço IP?', 'É um endereço lógico usado para identificar uma interface em uma rede IP e encaminhar dados até ela.'],
    ['O que é IPv4?', 'É a versão 4 do Protocolo de Internet, que usa endereços de 32 bits, geralmente escritos em quatro números, como 192.0.2.1.'],
    ['O que é IPv6?', 'É a versão 6 do Protocolo de Internet, com endereços de 128 bits, escritos em hexadecimal e separados por dois-pontos.'],
    ['O que é um endereço MAC?', 'É um identificador de camada de enlace usado por uma interface para comunicação na rede local.'],
    ['O que é um roteador?', 'É um equipamento que encaminha pacotes entre redes diferentes usando informações de roteamento.'],
    ['O que é um switch?', 'É um equipamento que conecta dispositivos de uma rede local e encaminha quadros conforme os endereços MAC aprendidos.'],
    ['O que é um servidor?', 'É um sistema que oferece serviços ou recursos a outros dispositivos, como páginas web ou arquivos.'],
    ['O que é um cliente?', 'É um dispositivo ou programa que solicita ou utiliza um serviço oferecido por um servidor.'],
  ]},
  { title: 'Topologias e tipos de rede', icon: '◉', level: 1, questions: [
    ['O que é uma topologia de rede?', 'É a forma como os dispositivos e conexões de uma rede estão organizados, física ou logicamente.'],
    ['O que é uma topologia em estrela?', 'É uma organização em que cada dispositivo se conecta a um ponto central, como um switch.'],
    ['O que é uma topologia em barramento?', 'É uma organização em que vários dispositivos compartilham um meio principal de comunicação.'],
    ['O que é uma topologia em anel?', 'É uma organização em que cada dispositivo se conecta ao próximo, formando um circuito fechado lógico ou físico.'],
    ['O que é uma topologia em malha?', 'É uma organização com múltiplas conexões entre nós, podendo oferecer caminhos alternativos.'],
    ['Qual é a vantagem da topologia em estrela?', 'Uma falha em um cabo de dispositivo tende a afetar só aquele dispositivo; o ponto central, porém, é crítico.'],
    ['O que é uma LAN?', 'Local Area Network: rede local, limitada a uma área como casa, escola ou escritório.'],
    ['O que é uma WAN?', 'Wide Area Network: rede que conecta redes ou dispositivos em grandes áreas geográficas.'],
    ['O que é uma WLAN?', 'Wireless LAN: rede local sem fio, normalmente baseada em Wi-Fi.'],
    ['Qual é a diferença entre LAN e WAN?', 'LAN cobre uma área local; WAN interconecta redes em áreas geográficas maiores.'],
    ['O que é uma rede ponto a ponto?', 'É uma rede em que dispositivos podem compartilhar recursos diretamente, sem depender de um servidor central dedicado.'],
    ['O que é uma rede cliente-servidor?', 'É uma arquitetura em que clientes solicitam serviços de servidores que os fornecem.'],
    ['O que é uma VPN?', 'É uma conexão que cria um túnel protegido sobre outra rede; a proteção depende dos protocolos e da configuração usados.'],
  ]},
  { title: 'Endereçamento IP e sub-redes', icon: 'IP', level: 1, questions: [
    ['O que é um endereço IP público?', 'É um endereço globalmente roteável na internet, geralmente atribuído ao roteador ou serviço por um provedor.'],
    ['O que é um endereço IP privado?', 'É um endereço reservado para redes internas e que não é roteado diretamente pela internet pública.'],
    ['Qual é a diferença entre IP público e privado?', 'O público é roteável globalmente; o privado é reutilizado em redes internas e costuma sair para a internet por NAT.'],
    ['O que é uma máscara de sub-rede?', 'É um valor que indica quais bits de um endereço IPv4 identificam a rede e quais identificam o host.'],
    ['Para que serve a máscara de sub-rede?', 'Para determinar a parte de rede, a parte de host e se um destino está na sub-rede local.'],
    ['O que é CIDR?', 'É uma notação para indicar o tamanho do prefixo de rede, como 192.168.1.0/24.'],
    ['O que significa /24 em um endereço IP?', 'Indica que os primeiros 24 bits formam o prefixo de rede; em IPv4, equivale à máscara 255.255.255.0.'],
    ['O que é gateway padrão?', 'É o próximo roteador usado quando o destino não está na rede local.'],
    ['Para que serve o gateway padrão?', 'Para encaminhar tráfego de uma rede local a outras redes, como a internet.'],
    ['O que é loopback?', 'É um endereço reservado para um dispositivo testar a própria pilha de rede sem enviar tráfego a outro dispositivo.'],
    ['Qual é a função do endereço 127.0.0.1?', 'É o endereço loopback IPv4 mais conhecido; aponta para o próprio computador.'],
    ['O que significa o endereço 0.0.0.0?', 'É o endereço IPv4 não especificado; seu significado depende do contexto, como uma rota padrão ou escuta em todas as interfaces locais.'],
    ['O que é NAT?', 'Network Address Translation: técnica que traduz endereços IP, frequentemente entre endereços privados e um endereço público.'],
    ['Para que serve o NAT?', 'Pode permitir que vários dispositivos de uma rede privada compartilhem endereços públicos e traduzir endereços entre redes.'],
    ['O que é uma sub-rede?', 'É uma divisão lógica de um bloco de endereços IP em uma rede menor.'],
    ['Por que dividir uma rede em sub-redes?', 'Para organizar endereços, separar áreas ou funções e facilitar o controle e o gerenciamento do tráfego.'],
  ]},
  { title: 'Protocolos', icon: '⇄', level: 1, questions: [
    ['O que é DNS?', 'Domain Name System: sistema distribuído que associa nomes de domínio a informações como endereços IP.'],
    ['Para que serve o DNS?', 'Ajuda aplicações a localizar serviços usando nomes legíveis, como exemplo.com, em vez de exigir que a pessoa memorize IPs.'],
    ['O que é DHCP?', 'Dynamic Host Configuration Protocol: protocolo que automatiza a configuração de rede de dispositivos clientes.'],
    ['Para que serve o DHCP?', 'Pode fornecer automaticamente endereço IP, máscara/prefixo, gateway e servidores DNS.'],
    ['O que é TCP?', 'É um protocolo de transporte orientado a conexão que fornece entrega ordenada e mecanismos de confiabilidade.'],
    ['O que é UDP?', 'É um protocolo de transporte sem conexão que envia datagramas sem garantir entrega ou ordem.'],
    ['Qual a diferença entre TCP e UDP?', 'TCP fornece conexão, ordem e retransmissão; UDP tem menos mecanismos e pode ser útil quando baixa latência ou controle pela aplicação são desejáveis.'],
    ['O que é HTTP?', 'É um protocolo de aplicação usado para transferir representações e mensagens na Web.'],
    ['O que é HTTPS?', 'É HTTP protegido por TLS, que ajuda a dar confidencialidade, integridade e autenticação do servidor.'],
  ]},
  { title: 'Modelos de rede', icon: '▥', level: 1, questions: [
    ['O que é o modelo OSI?', 'É um modelo de referência que organiza funções de comunicação em camadas para facilitar estudo e projeto de redes.'],
    ['Quantas camadas possui o modelo OSI?', 'Sete camadas.'],
    ['Quais são as camadas do modelo OSI?', 'Física, Enlace de Dados, Rede, Transporte, Sessão, Apresentação e Aplicação.'],
    ['O que é o modelo TCP/IP?', 'É uma arquitetura de referência baseada nos protocolos usados na internet, geralmente descrita em quatro camadas.'],
    ['Qual a diferença entre OSI e TCP/IP?', 'OSI é um modelo de referência de sete camadas; TCP/IP descreve a arquitetura prática da internet e costuma agrupar funções em quatro camadas.'],
  ]},
  { title: 'Portas e protocolos', icon: '⚑', level: 2, questions: [
    ['O que é uma porta de rede?', 'É um número de transporte que ajuda a direcionar a comunicação a um serviço ou processo em um dispositivo.'],
    ['Qual é a diferença entre endereço IP e porta?', 'O IP identifica a interface de rede de destino; a porta identifica o serviço ou ponto de comunicação nesse dispositivo.'],
    ['O que é um socket de rede?', 'É um ponto final de comunicação identificado por elementos como protocolo, endereço IP e porta.'],
    ['Para que serve a porta 80?', 'É a porta padrão mais comum para HTTP sem TLS.'],
    ['Para que serve a porta 443?', 'É a porta padrão mais comum para HTTPS sobre TLS.'],
    ['Para que serve a porta 22?', 'É a porta padrão mais comum para SSH, protocolo de acesso remoto seguro.'],
    ['Para que serve a porta 53?', 'É a porta padrão associada ao DNS, que pode usar UDP ou TCP conforme a consulta e a resposta.'],
    ['Para que serve a porta 25?', 'É usada tradicionalmente para transferência de e-mail entre servidores via SMTP; envio de cliente costuma usar portas de submissão próprias.'],
    ['O que é uma porta bem conhecida (well-known port)?', 'É uma porta do intervalo 0–1023, reservado pela IANA para serviços de uso comum.'],
    ['O que significa uma porta estar aberta?', 'Significa que há um serviço aceitando conexões naquele endereço e protocolo, sujeito às regras de rede.'],
    ['O que significa uma porta estar fechada?', 'O destino foi alcançado, mas não há serviço aceitando conexões naquela porta naquele momento.'],
    ['O que significa uma porta filtrada?', 'Uma regra ou dispositivo impede determinar se o serviço está aberto ou fechado a partir da resposta recebida.'],
    ['O que é ICMP?', 'É um protocolo de controle e mensagens de erro usado junto ao IP; ferramentas de diagnóstico podem usá-lo.'],
    ['Para que serve o protocolo ARP?', 'Em uma rede IPv4 local, ajuda a descobrir o endereço de enlace associado a um endereço IPv4.'],
    ['O que é o protocolo SSH?', 'É um protocolo para comunicação remota segura, incluindo acesso a terminal e transferência de arquivos.'],
    ['Qual é a diferença entre HTTP e FTP?', 'HTTP transfere recursos seguindo o modelo Web; FTP é um protocolo tradicional de transferência de arquivos.'],
    ['O que é o protocolo SMTP?', 'É um protocolo usado para enviar e retransmitir mensagens de e-mail.'],
    ['O que é IMAP?', 'É um protocolo de acesso a e-mail que normalmente mantém mensagens sincronizadas com o servidor.'],
    ['O que é POP3?', 'É um protocolo de acesso a e-mail que normalmente permite baixar mensagens do servidor para um cliente.'],
  ]},
  { title: 'Equipamentos de rede', icon: '▣', level: 2, questions: [
    ['Qual é a função de um modem?', 'Adapta sinais para permitir comunicação pelo meio e tecnologia usados pelo provedor; o papel exato depende da conexão.'],
    ['Qual é a diferença entre modem e roteador?', 'O modem ou terminal de acesso conecta ao serviço do provedor; o roteador encaminha tráfego entre redes. Um aparelho doméstico pode combinar ambos.'],
    ['Qual é a diferença entre switch e roteador?', 'O switch conecta dispositivos em uma rede local; o roteador encaminha pacotes entre redes IP.'],
    ['O que é um ponto de acesso (Access Point)?', 'É um equipamento que permite conectar dispositivos sem fio a uma rede, geralmente integrando-os à LAN.'],
    ['Para que serve uma placa de rede?', 'Conecta um dispositivo a uma rede e envia ou recebe quadros pelo meio disponível.'],
    ['O que é um repetidor de sinal?', 'É um dispositivo que recebe e retransmite um sinal para ampliar a cobertura, conforme a tecnologia.'],
    ['O que é um firewall de rede?', 'É um sistema que permite ou bloqueia tráfego conforme regras de segurança configuradas.'],
    ['O que é um balanceador de carga?', 'É um sistema que distribui solicitações entre vários servidores ou recursos disponíveis.'],
    ['O que é um proxy?', 'É um intermediário que faz solicitações em nome de um cliente ou encaminha seu tráfego.'],
    ['O que é um servidor proxy reverso?', 'É um intermediário na frente de servidores, recebendo solicitações dos clientes e encaminhando-as aos serviços internos.'],
    ['Como um switch aprende os endereços MAC?', 'Ele observa o endereço MAC de origem dos quadros e associa esse endereço à porta por onde o quadro chegou.'],
    ['O que acontece quando um roteador recebe um pacote destinado a outra rede?', 'Consulta sua tabela de rotas, escolhe o próximo salto/interface e encaminha o pacote, se houver uma rota válida.'],
  ]},
  { title: 'Funcionamento da comunicação', icon: '⇢', level: 2, questions: [
    ['O que é um pacote de dados?', 'É uma unidade de dados transmitida em uma rede de camada IP, acompanhada de informações de controle.'],
    ['O que é um quadro (frame)?', 'É uma unidade de dados da camada de enlace, usada para comunicação em um enlace local.'],
    ['O que é um segmento TCP?', 'É uma unidade de dados do TCP, com campos de controle e dados da aplicação.'],
    ['O que é um datagrama UDP?', 'É uma unidade independente de dados enviada pelo UDP, sem estabelecer conexão de transporte.'],
    ['Qual é a diferença entre pacote e quadro?', 'O pacote costuma se referir à camada de rede; o quadro é da camada de enlace e transporta o pacote no enlace local.'],
    ['O que é encapsulamento de dados?', 'É adicionar cabeçalhos — e às vezes outras informações — a dados ao passarem pelas camadas de rede.'],
    ['O que é desencapsulamento?', 'É remover e interpretar os cabeçalhos recebidos, camada por camada, até entregar os dados à aplicação.'],
    ['O que é o handshake TCP?', 'É a troca inicial de mensagens usada para estabelecer uma conexão TCP e sincronizar parâmetros.'],
    ['Quais são as etapas do handshake TCP de três vias?', 'SYN, SYN-ACK e ACK.'],
    ['O que significa comunicação full-duplex?', 'Permite transmitir e receber dados ao mesmo tempo no enlace.'],
    ['Qual é a diferença entre half-duplex e full-duplex?', 'Half-duplex permite comunicação nos dois sentidos, mas alternada; full-duplex permite os dois sentidos simultaneamente.'],
    ['O que é MTU?', 'Maximum Transmission Unit: tamanho máximo da unidade de dados que um enlace consegue transportar sem fragmentação naquele nível.'],
    ['O que é fragmentação de pacotes?', 'É dividir um pacote em partes menores para que possa atravessar um enlace com limite de tamanho menor; depende do protocolo e do caminho.'],
    ['O que acontece quando você digita um endereço de site no navegador?', 'O navegador interpreta o endereço, localiza o servidor — muitas vezes com DNS — estabelece a conexão apropriada, envia uma solicitação HTTP(S) e processa a resposta.'],
    ['Qual é o caminho dos dados entre seu computador e um servidor Web?', 'Os dados passam pela rede local, gateway/roteadores e redes intermediárias até o servidor; a resposta retorna por rotas que podem ser diferentes.'],
  ]},
  { title: 'Wi-Fi e redes sem fio', icon: '◌', level: 2, questions: [
    ['O que é Wi-Fi?', 'É uma família de tecnologias de rede local sem fio baseada nos padrões IEEE 802.11.'],
    ['Qual é a diferença entre Wi-Fi e internet?', 'Wi-Fi conecta dispositivos sem fio a uma rede local; essa rede pode ter ou não acesso à internet.'],
    ['O que é SSID?', 'É o nome que identifica uma rede Wi-Fi.'],
    ['O que é um canal Wi-Fi?', 'É uma faixa ou subdivisão de frequência usada para comunicação sem fio; canais próximos podem se sobrepor dependendo da banda.'],
    ['Qual é a diferença entre as bandas de 2,4 GHz e 5 GHz?', '2,4 GHz costuma alcançar mais longe e atravessar obstáculos melhor, mas sofre mais interferência; 5 GHz costuma oferecer mais canais e pode ter maior capacidade a distâncias menores.'],
    ['O que é interferência de sinal?', 'É a perturbação causada por outros sinais, ruído ou obstáculos que pode reduzir qualidade e estabilidade da comunicação.'],
    ['O que é WPA2?', 'É uma geração de mecanismo de segurança para redes Wi-Fi, baseada em mecanismos de autenticação e criptografia.'],
    ['O que é WPA3?', 'É uma geração mais recente de segurança Wi-Fi, com melhorias de proteção e autenticação em relação às versões anteriores.'],
    ['Qual é a diferença entre WPA2 e WPA3?', 'WPA3 adiciona melhorias de segurança, mas suporte e modo de compatibilidade dependem dos dispositivos e da configuração da rede.'],
    ['O que é um ponto de acesso falso?', 'É um ponto de acesso que imita ou se apresenta como uma rede legítima para induzir dispositivos a se conectarem.'],
    ['O que é uma rede Wi-Fi pública?', 'É uma rede sem fio oferecida em locais compartilhados, cujo operador e nível de proteção variam.'],
    ['Quais são os riscos de se conectar a uma rede desconhecida?', 'Pode haver rastreamento, redes falsas ou exposição em serviços sem proteção; use HTTPS, evite compartilhar dados sensíveis e confirme a rede legítima.'],
  ]},
  { title: 'Diagnóstico de redes', icon: '⌕', level: 3, questions: [
    ['Para que serve o comando ping?', 'Envia mensagens de teste — geralmente ICMP Echo — para observar se há resposta e medir o tempo de ida e volta.'],
    ['Para que serve o comando traceroute?', 'Tenta mostrar os saltos de roteadores no caminho até um destino; o nome e o comportamento variam por sistema.'],
    ['Qual é a função do tracert no Windows?', 'Exibe uma estimativa do caminho de roteamento até um destino, usando o mecanismo de TTL e respostas de rede.'],
    ['Para que serve o comando ipconfig?', 'No Windows, mostra e ajuda a gerenciar configurações de interfaces de rede.'],
    ['Para que serve o comando ip addr no Linux?', 'Mostra endereços IP e informações das interfaces de rede.'],
    ['Para que serve o comando ip route?', 'Mostra ou gerencia a tabela de rotas IP no Linux.'],
    ['Para que serve o comando nslookup?', 'Consulta informações DNS, como endereços associados a um nome de domínio.'],
    ['Para que serve o comando dig?', 'Faz consultas DNS detalhadas e apresenta registros e respostas do resolvedor.'],
    ['Para que serve o comando netstat?', 'Mostra informações de conexões, portas em escuta, estatísticas e, conforme opções, rotas.'],
    ['Para que serve o comando ss no Linux?', 'Exibe estatísticas de sockets e conexões; costuma ser usado para inspecionar portas e estados de rede.'],
    ['Como verificar o endereço IP do computador?', 'No Windows, use ipconfig; no Linux, use ip addr. Confira a interface que está conectada.'],
    ['Como descobrir o gateway padrão?', 'No Windows, consulte ipconfig; no Linux, consulte ip route e procure a rota default.'],
    ['Como verificar se um domínio está resolvendo para um IP?', 'Consulte o domínio com nslookup ou dig e veja se a resposta contém registros de endereço.'],
    ['Como identificar se um problema está na conexão local ou no acesso à internet?', 'Verifique primeiro a interface e o gateway local; depois compare testes a destinos externos e a resolução DNS. Cada teste isola uma parte do caminho.'],
    ['O que significa receber uma mensagem de Request timed out?', 'O teste não recebeu resposta dentro do tempo esperado; pode haver falha, filtro, congestionamento ou o destino pode não responder a esse tipo de teste.'],
    ['Por que o ping pode falhar mesmo quando um site está funcionando?', 'O destino ou a rede pode bloquear ICMP enquanto permite HTTP/HTTPS; ping não é um teste definitivo de disponibilidade do site.'],
  ]},
  { title: 'Segurança de redes', icon: '盾', level: 4, questions: [
    ['O que é uma rede segura?', 'É uma rede protegida por controles adequados de acesso, configuração, atualização, monitoramento e resposta a incidentes.'],
    ['O que é segmentação de rede?', 'É dividir a rede em zonas menores para organizar tráfego, limitar acessos e reduzir o alcance de incidentes.'],
    ['O que é uma VLAN?', 'É uma rede local virtual que separa logicamente dispositivos em uma infraestrutura de switches compatível.'],
    ['Para que serve uma VLAN?', 'Para separar grupos ou funções, controlar o tráfego entre segmentos e apoiar a organização e segurança da rede.'],
    ['O que é spoofing de IP?', 'É falsificar ou alterar o endereço IP de origem em pacotes; isso pode ocultar a origem aparente, mas não garante comunicação de retorno.'],
    ['O que é MAC spoofing?', 'É alterar o endereço MAC apresentado por uma interface de rede.'],
    ['O que é ARP spoofing?', 'É enviar informações ARP falsas em uma rede IPv4 local para associar um IP ao MAC incorreto.'],
    ['O que é DNS spoofing?', 'É fornecer uma resposta DNS falsa ou alterada para direcionar uma consulta a um destino incorreto.'],
    ['O que é um ataque Man-in-the-Middle?', 'É uma tentativa de se colocar entre duas partes para observar ou alterar a comunicação; TLS válido ajuda a proteger contra isso.'],
    ['O que é um ataque de negação de serviço?', 'É uma tentativa de reduzir ou interromper a disponibilidade de um serviço, por exemplo consumindo recursos.'],
    ['O que é um IDS?', 'Intrusion Detection System: sistema que monitora eventos ou tráfego para detectar possíveis atividades suspeitas.'],
    ['O que é um IPS?', 'Intrusion Prevention System: sistema que monitora o tráfego e pode bloquear atividades que correspondam a regras ou detecções.'],
    ['Qual é a diferença entre IDS e IPS?', 'IDS alerta ou registra detecções; IPS pode agir no caminho do tráfego para bloquear ou limitar eventos.'],
    ['O que é uma ACL (Access Control List)?', 'É uma lista de regras que permite ou nega tráfego ou acesso conforme critérios definidos.'],
    ['Por que devemos fechar portas e serviços desnecessários?', 'Para reduzir a superfície de ataque e evitar manter serviços expostos sem necessidade.'],
    ['Como o uso de HTTPS protege a comunicação?', 'TLS ajuda a criptografar os dados em trânsito, detectar alterações e autenticar o servidor apresentado.'],
    ['Por que atualizar o firmware do roteador é importante?', 'Atualizações podem corrigir falhas, melhorar estabilidade e manter recursos de segurança em dia.'],
  ]},
  { title: 'Desempenho e qualidade da conexão', icon: '↗', level: 1, questions: [
    ['O que é latência?', 'É o tempo que os dados levam para percorrer um trajeto; costuma ser medido em milissegundos.'],
    ['O que é vazão?', 'É a quantidade efetiva de dados transferida por unidade de tempo em uma comunicação.'],
    ['O que é perda de pacotes?', 'É quando pacotes enviados não chegam ao destino ou não são recebidos corretamente.'],
    ['O que pode causar perda de pacotes?', 'Congestionamento, sinal fraco, interferência, cabos defeituosos, falhas em equipamentos ou erros de configuração.'],
    ['Qual a diferença entre velocidade e latência?', 'Velocidade costuma indicar capacidade de transferência; latência mede o tempo de resposta. Uma não determina sozinha a outra.'],
    ['O que é jitter?', 'É a variação do atraso entre pacotes sucessivos.'],
    ['O que é largura de banda?', 'É a capacidade máxima teórica de transmissão de um enlace por unidade de tempo.'],
    ['Qual é a diferença entre largura de banda e vazão?', 'Largura de banda é a capacidade disponível; vazão é o volume efetivamente transferido, normalmente menor por perdas e sobrecarga.'],
    ['O que é throughput?', 'É a taxa de dados efetivamente entregue com sucesso ao destino; em muitos contextos é usado como sinônimo de vazão.'],
    ['O que é RTT (Round-Trip Time)?', 'É o tempo de ida e volta de uma mensagem entre origem e destino.'],
    ['Como a distância pode afetar a latência?', 'Distâncias maiores aumentam o percurso físico e geralmente acrescentam atraso, embora rotas e equipamentos também influenciem.'],
    ['Como o congestionamento afeta uma rede?', 'Pode formar filas, aumentar latência e jitter e provocar perda de pacotes.'],
    ['O que é QoS (Quality of Service)?', 'É um conjunto de mecanismos para classificar e priorizar tráfego conforme requisitos de serviço.'],
    ['Como identificar uma conexão instável?', 'Observe variação de latência, perda de pacotes, desconexões ou quedas de vazão ao longo do tempo e compare por cabo/Wi-Fi.'],
    ['Por que uma conexão pode ter alta velocidade e ainda apresentar lentidão em jogos?', 'Jogos dependem muito de latência, jitter e perda; alta largura de banda não elimina esses problemas.'],
    ['Como a perda de pacotes afeta chamadas de vídeo?', 'Pode causar congelamentos, falhas de áudio, imagem degradada ou necessidade de retransmissão e correção.'],
    ['Qual é a diferença entre Mbps e MB/s?', 'Mbps são megabits por segundo; MB/s são megabytes por segundo. Um byte tem 8 bits, sem considerar sobrecarga.'],
  ]},
  { title: 'Internet e infraestrutura', icon: '◎', level: 2, questions: [
    ['O que é um ISP?', 'Internet Service Provider: empresa ou organização que fornece acesso à internet ou serviços relacionados.'],
    ['O que é um backbone da internet?', 'É uma parte de alta capacidade da infraestrutura que interconecta redes e grandes pontos de troca de tráfego.'],
    ['O que é um sistema autônomo (AS)?', 'É um conjunto de redes e roteadores sob uma administração comum, identificado por um número AS para roteamento interdomínio.'],
    ['O que é BGP?', 'Border Gateway Protocol: protocolo usado para trocar informações de roteamento entre sistemas autônomos.'],
    ['O que é uma CDN?', 'Content Delivery Network: rede distribuída de servidores que entrega conteúdo a partir de locais próximos aos usuários.'],
    ['Para que serve uma CDN?', 'Pode reduzir latência e carga na origem ao armazenar e entregar conteúdo em pontos distribuídos.'],
    ['O que é um domínio?', 'É um nome hierárquico registrado no DNS, como exemplo.com, usado para localizar serviços.'],
    ['Qual é a diferença entre domínio e endereço IP?', 'Domínio é um nome legível resolvido pelo DNS; endereço IP é usado para encaminhamento na rede.'],
    ['O que é um certificado digital?', 'É um documento eletrônico que vincula uma identidade a uma chave pública, assinado por uma autoridade certificadora ou cadeia confiável.'],
    ['O que é TLS?', 'Transport Layer Security: protocolo que protege comunicações, oferecendo criptografia, integridade e autenticação conforme a configuração.'],
    ['Como um navegador verifica a segurança de um site HTTPS?', 'Valida a conexão TLS e verifica aspectos do certificado, como cadeia de confiança, validade e correspondência do domínio.'],
    ['O que é um servidor DNS recursivo?', 'É um resolvedor que consulta outros servidores DNS em nome do cliente até obter uma resposta ou falhar.'],
    ['O que é cache DNS?', 'É o armazenamento temporário de respostas DNS para acelerar consultas seguintes até o prazo de validade expirar.'],
    ['O que acontece quando um registro DNS está desatualizado?', 'Clientes podem continuar recebendo um endereço antigo até que o registro seja corrigido e caches expirarem ou serem atualizados.'],
  ]},
];
const networkQuestionSubject = questionBank.find((subject) => subject.subject === 'Redes de Computadores');
networkQuestionSubject.topics = networkTopicData.map((topic) => ({ title: topic.title, questions: topic.questions.map(([question]) => question) }));
const networkTopics = networkTopicData.map((topic) => ({ ...topic, questions: topic.questions }));
const databaseTopics = [
  { title: 'Conceitos', icon: '▤', questions: [
    ['O que é um banco de dados?', 'É uma coleção organizada de dados armazenada para consulta, atualização e gerenciamento.'],
    ['Para que serve um banco de dados?', 'Para guardar e organizar dados e permitir que sejam consultados e atualizados com consistência.'],
    ['O que é uma tabela?', 'É uma estrutura que organiza dados relacionados em linhas e colunas.'],
    ['O que é uma linha ou registro?', 'É uma ocorrência individual da tabela, formada pelos valores de suas colunas.'],
    ['O que é uma coluna?', 'É uma característica ou atributo definido para os registros da tabela, como nome ou data de nascimento.'],
    ['O que é um campo?', 'É o espaço de um registro correspondente a uma coluna; contém o valor daquele atributo para aquela linha.'],
    ['O que é um SGBD?', 'É um Sistema de Gerenciamento de Banco de Dados: software usado para criar, consultar, atualizar e administrar bancos de dados.'],
  ]},
  { title: 'SQL', icon: '⌘', questions: [
    ['O que é SQL?', 'É uma linguagem usada para definir, consultar e manipular dados em bancos relacionais.'],
    ['Para que serve SELECT?', 'Para consultar e retornar dados de uma ou mais tabelas.'],
    ['Para que serve INSERT?', 'Para inserir novos registros em uma tabela.'],
    ['Para que serve UPDATE?', 'Para alterar dados de registros existentes.'],
    ['Para que serve DELETE?', 'Para remover registros de uma tabela.'],
    ['Para que serve WHERE?', 'Para filtrar linhas que atendem a uma condição em comandos como SELECT, UPDATE e DELETE.'],
    ['Para que serve ORDER BY?', 'Para ordenar as linhas do resultado por uma ou mais colunas, em ordem crescente ou decrescente.'],
    ['Para que serve GROUP BY?', 'Para agrupar linhas com valores iguais em determinadas colunas, geralmente junto de funções como COUNT, SUM ou AVG.'],
  ]},
  { title: 'Relacionamentos', icon: '⇄', questions: [
    ['O que é uma chave primária?', 'É uma coluna ou conjunto de colunas que identifica cada linha de forma única; seus valores não se repetem nem ficam nulos.'],
    ['O que é uma chave estrangeira?', 'É uma coluna ou conjunto de colunas que referencia uma chave de outra tabela e ajuda a manter a integridade entre elas.'],
    ['O que é um relacionamento entre tabelas?', 'É uma associação entre registros de tabelas, normalmente feita por chaves relacionadas.'],
    ['O que é relacionamento 1:1?', 'Cada registro de uma tabela se relaciona com, no máximo, um registro da outra, e vice-versa.'],
    ['O que é relacionamento 1:N?', 'Um registro de uma tabela pode se relacionar com vários registros da outra; cada um destes aponta para um registro do primeiro lado.'],
    ['O que é relacionamento N:N?', 'Vários registros de cada tabela podem se relacionar com vários da outra; normalmente é representado por uma tabela associativa.'],
    ['Por que dividir informações em diferentes tabelas?', 'Para organizar dados por assunto, reduzir duplicações e facilitar consistência e manutenção, conectando as tabelas por chaves.'],
  ]},
];
const databaseQuestionSubject = questionBank.find((subject) => subject.subject === 'Banco de Dados');
databaseQuestionSubject.topics = databaseTopics.map((topic) => ({ title: topic.title, questions: topic.questions.map(([question]) => question) }));
const cyberTopicData = [
  { title: 'Conceitos básicos', icon: '⌘', area: 'fundamentals', questions: [
    ['O que é cibersegurança?', 'É a prática de proteger sistemas, redes, dispositivos e dados contra riscos digitais.'],
    ['O que é uma ameaça?', 'É algo que pode causar dano a um sistema, ativo ou informação.'],
    ['O que é uma vulnerabilidade?', 'É uma fraqueza que pode ser explorada ou causar impacto à segurança.'],
    ['O que é um ataque?', 'É uma ação que tenta comprometer sistemas, dados ou serviços.'],
    ['O que é um risco?', 'É a possibilidade de uma ameaça explorar uma vulnerabilidade e causar impacto.'],
    ['O que é malware?', 'É um software criado para realizar ações prejudiciais, como roubar dados ou interromper sistemas.'],
  ]},
  { title: 'Fundamentos aprofundados', icon: '⊙', area: 'fundamentals', questions: [
    ['Qual é a diferença entre segurança da informação e cibersegurança?', 'Segurança da informação protege informações em qualquer formato; cibersegurança enfatiza sistemas e ambientes digitais.'],
    ['O que significa confidencialidade?', 'Garantir que a informação seja acessada somente por pessoas ou sistemas autorizados.'],
    ['O que significa integridade dos dados?', 'Preservar a exatidão e impedir alterações ou destruições não autorizadas.'],
    ['O que significa disponibilidade?', 'Manter sistemas e informações acessíveis quando usuários autorizados precisam deles.'],
    ['O que é a tríade CIA da segurança da informação?', 'Confidencialidade, Integridade e Disponibilidade: três objetivos fundamentais de proteção.'],
    ['Qual é a diferença entre ameaça, vulnerabilidade e risco?', 'A ameaça pode causar dano; a vulnerabilidade é uma fraqueza; o risco combina a chance de exploração com seus impactos.'],
    ['O que é uma superfície de ataque?', 'O conjunto de pontos onde um sistema pode ser acessado ou exposto a ameaças.'],
    ['O que é um ativo de informação?', 'Um dado, sistema, serviço ou recurso que tem valor e precisa ser protegido.'],
    ['O que é um incidente de segurança?', 'Um evento confirmado que compromete ou ameaça a confidencialidade, integridade ou disponibilidade.'],
    ['O que é uma política de segurança?', 'Um conjunto formal de regras e responsabilidades para proteger informações e sistemas.'],
    ['O que significa princípio do menor privilégio?', 'Conceder a cada usuário ou processo somente os acessos mínimos necessários para sua tarefa.'],
    ['O que é defesa em profundidade?', 'Usar camadas complementares de controles para que uma falha isolada não comprometa toda a proteção.'],
  ]},
  { title: 'Ataques básicos', icon: '⚠', area: 'threats', questions: [
    ['O que é phishing?', 'É uma tentativa de enganar alguém para obter dados, dinheiro ou acesso, geralmente por mensagem ou página falsa.'],
    ['Como identificar um possível phishing?', 'Confira remetente e endereço do site, desconfie de urgência e pedidos inesperados e confirme pelo canal oficial.'],
    ['O que é ransomware?', 'É um tipo de malware que bloqueia ou criptografa dados e tenta extorquir a vítima.'],
    ['O que é spyware?', 'É um software que coleta informações ou monitora atividades sem autorização adequada.'],
    ['O que é vírus?', 'É um tipo de malware que se anexa a arquivos ou programas e pode se espalhar quando eles são executados.'],
    ['O que é trojan?', 'É um malware disfarçado de programa legítimo para induzir a instalação ou execução.'],
    ['O que é engenharia social?', 'É manipular pessoas para que revelem informações ou realizem ações que enfraquecem a segurança.'],
  ]},
  { title: 'Ataques e ameaças aprofundados', icon: '⌖', area: 'threats', questions: [
    ['Qual é a diferença entre phishing, spear phishing e whaling?', 'Phishing é amplo; spear phishing é direcionado a uma pessoa ou grupo; whaling mira pessoas de alto nível ou influência.'],
    ['Qual é a diferença entre vírus, worm e trojan?', 'Vírus depende de um arquivo hospedeiro; worm pode se propagar entre sistemas; trojan se disfarça de software legítimo.'],
    ['O que é um keylogger?', 'É um software ou dispositivo que registra teclas digitadas, podendo capturar informações sensíveis.'],
    ['O que é um rootkit?', 'É um conjunto de técnicas ou componentes maliciosos que busca ocultar presença ou manter acesso privilegiado.'],
    ['O que é um botnet?', 'É um conjunto de dispositivos comprometidos controlados remotamente, muitas vezes sem conhecimento dos proprietários.'],
    ['O que é um ataque de força bruta?', 'É tentar muitas combinações de credenciais até encontrar uma que funcione.'],
    ['O que é um ataque de dicionário?', 'É testar combinações de uma lista de palavras ou senhas comuns em uma tentativa de adivinhar credenciais.'],
    ['O que é credential stuffing?', 'É tentar credenciais vazadas de um serviço em outros, explorando a reutilização de senhas.'],
    ['O que é um ataque de negação de serviço (DoS)?', 'É uma tentativa de tornar um serviço indisponível ao esgotar recursos ou impedir seu funcionamento normal.'],
    ['Qual é a diferença entre DoS e DDoS?', 'DoS usa uma origem; DDoS coordena várias origens distribuídas para sobrecarregar o alvo.'],
    ['O que é um ataque Man-in-the-Middle (MitM)?', 'É uma tentativa de se inserir entre participantes de uma comunicação para observar ou alterar dados.'],
    ['O que é spoofing?', 'É falsificar uma identidade ou informação de origem, como endereço de rede ou remetente, para parecer confiável.'],
    ['O que é envenenamento de DNS?', 'É alterar ou falsificar respostas DNS para que um nome leve a um endereço incorreto.'],
    ['Como funciona um golpe de suporte técnico falso?', 'O golpista finge representar uma empresa de suporte e pressiona a vítima a fornecer acesso, dados ou pagamento.'],
    ['O que é um ataque à cadeia de suprimentos de software?', 'É comprometer um fornecedor, dependência ou processo de distribuição para atingir quem usa o software afetado.'],
  ]},
  { title: 'Proteção de contas e dispositivos', icon: '🔑', area: 'defense', questions: [
    ['O que é um firewall?', 'É um controle que filtra tráfego de rede conforme regras de segurança.'],
    ['Para que serve um firewall?', 'Para permitir ou bloquear conexões e reduzir comunicações não autorizadas.'],
    ['O que é criptografia?', 'É transformar dados com uma chave para que só quem tenha a chave adequada consiga ler ou validar a informação.'],
    ['O que é autenticação?', 'É verificar a identidade alegada de uma pessoa, dispositivo ou serviço.'],
    ['O que é autenticação de dois fatores?', 'É usar dois fatores de categorias diferentes para confirmar uma identidade.'],
    ['O que é autenticação multifator (MFA)?', 'É autenticar usando dois ou mais fatores independentes, como conhecimento, posse ou característica biométrica.'],
    ['Qual é a diferença entre autenticação de dois fatores e autenticação multifator?', 'Dois fatores usa exatamente dois fatores; MFA é o termo geral para dois ou mais.'],
    ['O que caracteriza uma senha forte?', 'Uma senha longa, única e difícil de adivinhar; um gerenciador pode criar e armazenar senhas distintas.'],
    ['Por que não devemos reutilizar senhas?', 'Se uma senha vazar em um serviço, reutilizá-la pode expor outras contas.'],
    ['O que é um gerenciador de senhas?', 'É uma ferramenta que armazena e ajuda a criar senhas fortes e diferentes para cada conta.'],
    ['O que é uma passkey?', 'É uma credencial criptográfica vinculada a um dispositivo ou gerenciador, usada para autenticar sem senha tradicional.'],
    ['O que fazer quando uma conta é invadida?', 'Use um dispositivo confiável para trocar a senha, encerre sessões, ative MFA, revise dados de recuperação e avise o serviço e contatos relevantes.'],
    ['Como verificar se um e-mail é suspeito?', 'Confira o endereço completo do remetente, o contexto, links e anexos; confirme solicitações sensíveis por outro canal conhecido.'],
    ['Por que devemos bloquear a tela dos dispositivos?', 'Para impedir que alguém próximo acesse dados e aplicativos sem autorização quando o aparelho estiver desacompanhado.'],
    ['Quais são os riscos de instalar APKs de fontes desconhecidas?', 'O arquivo pode conter malware, roubar dados ou pedir permissões indevidas; prefira fontes oficiais e verifique o desenvolvedor.'],
    ['Por que devemos revisar as permissões dos aplicativos?', 'Para limitar o acesso a câmera, localização, contatos e outros dados ao que é necessário para a função do app.'],
    ['Como reconhecer um aplicativo falso?', 'Confira desenvolvedor, loja e endereço oficial, avaliações com cautela, permissões solicitadas e sinais de imitação.'],
    ['O que fazer antes de vender ou doar um celular?', 'Faça backup do que deseja guardar, encerre contas, remova cartões e redefina o dispositivo conforme as instruções oficiais do fabricante.'],
    ['O que é backup?', 'É uma cópia separada de dados que pode ser usada para recuperá-los após perda, falha ou incidente.'],
    ['Por que manter sistemas atualizados?', 'Atualizações corrigem vulnerabilidades conhecidas e também podem melhorar estabilidade e compatibilidade.'],
  ]},
  { title: 'Redes e segurança', icon: '⇄', area: 'defense', questions: [
    ['O que é um sistema IDS?', 'Intrusion Detection System: monitora eventos ou tráfego e alerta sobre possíveis atividades suspeitas.'],
    ['Qual é a diferença entre IDS e IPS?', 'IDS detecta e alerta; IPS também pode bloquear tráfego suspeito de forma automática.'],
    ['O que é uma VPN?', 'É uma conexão que transporta tráfego por um túnel protegido entre dispositivos ou redes, conforme sua configuração.'],
    ['Uma VPN garante anonimato total?', 'Não. O provedor, sites, contas, navegador e outros metadados ainda podem identificar ou relacionar atividades.'],
    ['Quais são os riscos de usar Wi-Fi público?', 'Redes falsas, configuração insegura e exposição de tráfego sem proteção são riscos; prefira HTTPS e evite ações sensíveis em redes desconhecidas.'],
    ['O que é uma rede Wi-Fi falsa?', 'É um ponto de acesso que imita ou se apresenta como uma rede legítima para atrair conexões.'],
    ['O que é segmentação de rede?', 'É separar uma rede em zonas menores para limitar acessos e reduzir o alcance de incidentes.'],
    ['O que é uma porta de rede aberta?', 'É uma porta em que um serviço está aceitando conexões, sujeita às regras de rede.'],
    ['Por que devemos desativar serviços desnecessários?', 'Para reduzir pontos expostos e limitar oportunidades de exploração.'],
    ['O que é uma DMZ em redes?', 'É uma zona de rede separada que hospeda serviços acessíveis externamente, isolando-os da rede interna.'],
    ['Como o HTTPS ajuda a proteger a comunicação?', 'TLS ajuda a criptografar dados em trânsito, detectar alterações e autenticar o servidor.'],
    ['O HTTPS garante que um site é confiável?', 'Não. Ele protege a conexão com o domínio autenticado, mas não garante que o site ou seu conteúdo sejam honestos.'],
    ['Qual é a diferença entre criptografia e hash?', 'Criptografia é reversível com a chave adequada; hash é uma transformação de sentido único usada para verificar ou representar dados.'],
    ['O que é um certificado digital?', 'É um documento que vincula uma identidade a uma chave pública e tem sua validade atestada por uma assinatura confiável.'],
  ]},
  { title: 'Segurança de sistemas e aplicações', icon: '⌘', area: 'applications', questions: [
    ['O que é uma vulnerabilidade de software?', 'É uma falha de código, projeto ou configuração que pode comprometer a segurança.'],
    ['O que é uma atualização de segurança?', 'É uma atualização que corrige ou reduz falhas de segurança em software ou firmware.'],
    ['O que é uma falha de dia zero (zero-day)?', 'É uma vulnerabilidade ainda desconhecida ou sem correção disponível para os responsáveis ou usuários afetados.'],
    ['O que é injeção de SQL?', 'É uma falha em que entrada não confiável altera a estrutura de uma consulta SQL.'],
    ['Como uma injeção de SQL pode comprometer um banco de dados?', 'Pode permitir leitura, alteração ou exclusão não autorizada de dados, conforme a falha e as permissões da aplicação.'],
    ['Como consultas parametrizadas ajudam a prevenir SQL Injection?', 'Elas separam valores fornecidos pelo usuário das instruções SQL, evitando que os valores sejam interpretados como código.'],
    ['O que é XSS (Cross-Site Scripting)?', 'É uma falha em que conteúdo não confiável acaba executado como código no navegador de quem acessa uma página.'],
    ['O que é CSRF (Cross-Site Request Forgery)?', 'É uma falha que induz um navegador autenticado a enviar uma ação não desejada a um site.'],
    ['O que é controle de acesso?', 'É definir e aplicar quais identidades podem realizar quais ações sobre cada recurso.'],
    ['Qual é a diferença entre autenticação e autorização?', 'Autenticação verifica quem é a identidade; autorização determina o que ela pode fazer.'],
    ['O que é exposição de dados sensíveis?', 'É permitir que informações confidenciais ou pessoais sejam acessadas por pessoas ou sistemas sem autorização adequada.'],
    ['Por que senhas não devem ser armazenadas em texto puro?', 'Se o banco de dados for exposto, as senhas ficam imediatamente legíveis; use hash de senha apropriado com salt.'],
    ['O que são hashes de senha e salt?', 'Hash de senha é uma derivação lenta e de sentido único; salt é um valor aleatório único por senha que dificulta comparações e pré-cálculos.'],
    ['O que é gerenciamento seguro de sessões?', 'É proteger identificadores de sessão com geração segura, transmissão protegida, expiração e encerramento adequado.'],
    ['Por que não devemos deixar chaves de API no código público?', 'Quem encontrar a chave pode usar os privilégios associados e causar acesso indevido ou custos; guarde segredos fora do código e revogue os expostos.'],
    ['O que é o princípio de Secure by Design?', 'É incorporar segurança desde a concepção e em todo o ciclo de desenvolvimento, em vez de adicioná-la somente no final.'],
  ]},
  { title: 'Criptografia e proteção de dados', icon: '◇', area: 'defense', questions: [
    ['Qual é a diferença entre criptografia simétrica e assimétrica?', 'Simétrica usa uma chave compartilhada; assimétrica usa um par de chave pública e chave privada.'],
    ['O que é uma chave criptográfica?', 'É um valor usado por um algoritmo para cifrar, decifrar, assinar ou verificar dados.'],
    ['O que é uma função hash?', 'É uma função que produz um resumo de tamanho definido a partir dos dados; uma boa função criptográfica dificulta recuperar ou encontrar entradas equivalentes.'],
    ['Para que serve uma assinatura digital?', 'Ajuda a verificar a origem e a integridade de uma mensagem usando criptografia de chave pública.'],
    ['O que é um certificado TLS?', 'É um certificado digital usado em conexões TLS para associar uma identidade, como um domínio, a uma chave pública.'],
    ['O que significa criptografia de ponta a ponta?', 'Os dados são protegidos de modo que somente os dispositivos participantes previstos possam decifrar o conteúdo, sob as condições do sistema.'],
    ['Qual é a diferença entre dados em trânsito e dados em repouso?', 'Em trânsito, estão sendo enviados por uma rede; em repouso, estão armazenados em um dispositivo ou serviço.'],
    ['O que é anonimização de dados?', 'É tratar dados para que a pessoa não possa ser identificada por meios razoáveis disponíveis, considerando o contexto.'],
    ['O que é pseudonimização?', 'É substituir identificadores diretos por códigos ou identificadores separados; dados ainda podem ser ligados à pessoa com informação adicional.'],
    ['Por que o backup também precisa de proteção?', 'Cópias podem conter os mesmos dados sensíveis e também podem ser alteradas, apagadas ou roubadas.'],
    ['O que é um backup imutável?', 'É uma cópia protegida contra alteração ou exclusão durante um período definido, conforme controles do sistema de armazenamento.'],
  ]},
  { title: 'Monitoramento e resposta a incidentes', icon: '◷', area: 'operations', questions: [
    ['O que são logs?', 'São registros cronológicos de eventos gerados por sistemas, aplicativos e equipamentos.'],
    ['Para que servem os logs de segurança?', 'Ajudam a detectar atividades suspeitas, investigar incidentes e entender o que aconteceu.'],
    ['O que é um SIEM?', 'É uma plataforma que centraliza e correlaciona registros e alertas para apoiar monitoramento e investigação de segurança.'],
    ['O que é um alerta de segurança?', 'É uma notificação de que um evento pode exigir análise ou resposta.'],
    ['Como identificar um possível acesso não autorizado?', 'Procure logins inesperados, falhas repetidas, novos dispositivos ou mudanças de conta que você não reconhece.'],
    ['O que fazer ao detectar um malware?', 'Desconecte o dispositivo da rede se for seguro, não use contas nele, preserve informações e acione suporte confiável ou a equipe responsável.'],
    ['Por que devemos isolar um dispositivo infectado da rede?', 'Para reduzir a propagação e a comunicação do malware com outros dispositivos ou serviços.'],
    ['Qual é a diferença entre contenção, erradicação e recuperação?', 'Contenção limita o incidente; erradicação remove sua causa; recuperação restaura sistemas e operações de forma segura.'],
    ['O que é análise forense digital?', 'É a coleta e análise metódica de evidências digitais para entender um incidente, preservando sua integridade.'],
    ['Para que serve um plano de resposta a incidentes?', 'Define papéis e passos para preparar, detectar, conter, investigar, comunicar e recuperar após incidentes.'],
    ['O que é um plano de continuidade de negócios?', 'É um plano para manter ou retomar atividades prioritárias durante e após interrupções.'],
    ['O que é recuperação de desastres (Disaster Recovery)?', 'É o conjunto de estratégias e procedimentos para restaurar sistemas e dados após uma interrupção grave.'],
  ]},
  { title: 'Backup e recuperação', icon: '⟲', area: 'operations', questions: [
    ['Qual é a diferença entre backup completo, incremental e diferencial?', 'Completo copia tudo; incremental copia mudanças desde o último backup; diferencial copia mudanças desde o último completo.'],
    ['Qual é a diferença entre sincronização e backup?', 'Sincronização replica alterações e exclusões; backup mantém cópias recuperáveis em pontos no tempo.'],
    ['O que é a regra de backup 3-2-1?', 'Manter três cópias dos dados, em dois tipos de mídia, com uma cópia fora do local principal.'],
    ['Por que devemos testar a restauração dos backups?', 'Para confirmar que as cópias são legíveis e que os procedimentos recuperam os dados no tempo necessário.'],
    ['Como o ransomware pode afetar os backups?', 'Pode criptografar ou apagar cópias que estejam conectadas ou acessíveis com as mesmas credenciais.'],
    ['Por que manter uma cópia offline pode ajudar?', 'Ela fica menos acessível a ataques que atingem sistemas conectados, desde que seja guardada e restaurada com segurança.'],
    ['O que é o RPO?', 'Recovery Point Objective: quantidade máxima de perda de dados medida em tempo que se aceita após uma interrupção.'],
    ['O que é o RTO?', 'Recovery Time Objective: prazo-alvo para restaurar um serviço após uma interrupção.'],
  ]},
  { title: 'Segurança na prática', icon: '✎', area: 'operations', questions: [
    ['Como verificar se um arquivo é suspeito sem executá-lo?', 'Não abra; confira origem e extensão, faça uma verificação com ferramenta de segurança atualizada e, se necessário, peça análise especializada.'],
    ['Como conferir as permissões de um arquivo?', 'Use as propriedades do sistema ou uma ferramenta de listagem de permissões; compare com o acesso mínimo necessário.'],
    ['Como identificar conexões de rede suspeitas?', 'Revise ferramentas e alertas confiáveis de monitoramento e compare processos, destinos e horários com o uso esperado.'],
    ['Como verificar se um dispositivo está atualizado?', 'Consulte a área oficial de atualização do sistema e confira se não há atualizações de segurança pendentes.'],
    ['Como analisar os logs de um sistema?', 'Defina o período e sistema, procure eventos relacionados, compare com a atividade esperada e preserve os registros originais.'],
    ['Como criar uma política básica de senhas?', 'Exija senhas únicas e longas, ofereça gerenciador de senhas e MFA e evite regras que incentivem reutilização.'],
    ['Como elaborar um plano de resposta a incidentes?', 'Defina responsáveis, contatos, critérios de acionamento, contenção, preservação de evidências, comunicação e recuperação.'],
    ['Como montar um laboratório seguro para estudar ataques?', 'Use máquinas próprias ou ambientes de treinamento, isole a rede e os dados e siga o escopo e as regras do laboratório.'],
    ['Qual é a diferença entre um teste de segurança autorizado e um ataque real?', 'O teste tem permissão explícita, escopo e limites acordados; um ataque real não tem essa autorização.'],
    ['Como documentar uma vulnerabilidade encontrada?', 'Registre ativo e versão, impacto, evidências mínimas, condições de reprodução autorizadas e recomendações de correção sem expor dados.'],
    ['Como priorizar a correção de vulnerabilidades?', 'Considere impacto, probabilidade de exploração, exposição, dados afetados e criticidade do sistema.'],
    ['O que é um teste de penetração (pentest)?', 'É uma avaliação delimitada e autorizada que simula técnicas de ataque para encontrar e relatar falhas.'],
  ]},
  { title: 'Privacidade e LGPD', icon: '◉', area: 'privacy', questions: [
    ['O que são dados pessoais?', 'São informações relacionadas a uma pessoa natural identificada ou identificável.'],
    ['O que são dados pessoais sensíveis?', 'São dados sobre origem racial ou étnica, religião, opinião política, saúde, vida sexual, genética ou biometria, nos termos da LGPD.'],
    ['O que é a LGPD?', 'É a Lei Geral de Proteção de Dados Pessoais do Brasil, Lei nº 13.709/2018, que regula o tratamento de dados pessoais.'],
    ['O que é tratamento de dados pessoais?', 'É qualquer operação com dados pessoais, como coleta, acesso, uso, armazenamento, compartilhamento ou eliminação.'],
    ['O que significa consentimento?', 'É uma manifestação livre, informada e inequívoca para uma finalidade determinada; a LGPD também prevê outras bases legais.'],
    ['O que é minimização de dados?', 'É limitar a coleta e o uso ao mínimo necessário para finalidades legítimas e informadas.'],
    ['Qual é a diferença entre controlador e operador?', 'Controlador toma decisões sobre o tratamento; operador trata os dados em nome do controlador e conforme suas instruções.'],
    ['Quais são os direitos dos titulares de dados?', 'Incluem confirmação e acesso, correção, informação, portabilidade nos termos aplicáveis, revisão e outros direitos previstos na LGPD.'],
    ['Por que não devemos coletar dados desnecessários?', 'Reduzir a coleta diminui exposição, riscos de vazamento e responsabilidades de proteção.'],
    ['O que fazer em caso de vazamento de dados?', 'Conter e investigar o incidente, preservar registros, acionar responsáveis e seguir as regras atuais da ANPD para avaliar comunicação a titulares e autoridade.'],
    ['Por que é importante limitar o acesso aos dados dos usuários?', 'Para reduzir o risco de uso indevido e garantir que cada pessoa acesse apenas o necessário para sua função.'],
    ['O que é privacidade desde a concepção (Privacy by Design)?', 'É considerar privacidade desde o planejamento do produto e incorporá-la em decisões, padrões e controles ao longo do ciclo de vida.'],
  ]},
];
const cyberQuestionSubject = questionBank.find((subject) => subject.subject === 'Cibersegurança');
cyberQuestionSubject.topics = cyberTopicData.map((topic) => ({ title: topic.title, questions: topic.questions.map(([question]) => question) }));
const cyberTopics = cyberTopicData.map((topic) => ({ ...topic, questions: topic.questions }));
const kaliAnswers = [
  [
    'É uma distribuição Linux baseada em Debian, criada para testes de segurança e perícia digital.',
    'É utilizada por profissionais e estudantes para auditoria de segurança, análise forense e testes autorizados.',
    'Kali já vem preparada com ferramentas de segurança; uma distribuição comum prioriza uso geral. Kali também pode ser personalizada para outros fins.',
    'Abra o menu de aplicativos e procure Terminal. Em muitos ambientes gráficos, Ctrl+Alt+T também abre um terminal.',
    'Execute whoami.',
    'Execute ip addr (ou ip a) para ver as interfaces e seus endereços.',
    'Atualize a lista de pacotes com sudo apt update e, depois de revisar as alterações, aplique atualizações com sudo apt full-upgrade.',
  ],
  [
    'É a etapa de coletar informações sobre sistemas, dispositivos e serviços dentro do escopo autorizado de uma avaliação.',
    'É um número que identifica um ponto de comunicação de um protocolo em um dispositivo; serviços podem escutar em portas específicas.',
    'É um programa que oferece uma função pela rede, como um servidor web ou de DNS.',
    'É um identificador de rede de um dispositivo; IPv4 e IPv6 são versões do protocolo IP.',
    'É uma ferramenta que verifica hosts ou portas para ajudar a identificar serviços acessíveis. Use apenas em redes autorizadas.',
  ],
  [
    'É uma ferramenta de código aberto para descoberta de hosts e análise de serviços e portas em redes.',
    'Ajuda administradores e avaliadores autorizados a descobrir hosts, portas abertas e serviços em uma rede.',
    'É um analisador de protocolos de rede que captura e examina pacotes.',
    'Ajuda a observar e entender o tráfego de rede para diagnóstico ou estudo. Capture apenas tráfego que você tem autorização para analisar.',
    'É uma plataforma de testes de segurança para aplicações web, com ferramentas como proxy, repetidor e scanner.',
    'O Burp Proxy permite interceptar e inspecionar requisições e respostas web em testes autorizados, como nos laboratórios da Web Security Academy.',
    'É uma plataforma de código aberto para desenvolvimento e execução de módulos de validação de segurança.',
    'É usada por profissionais autorizados para validar vulnerabilidades em ambientes controlados e documentar resultados.',
  ],
  [
    'É uma avaliação autorizada e delimitada que simula técnicas de ataque para encontrar e relatar falhas de segurança.',
    'É uma fraqueza em software, configuração ou processo que pode afetar a segurança.',
    'É um ambiente controlado e isolado para aprender e testar ferramentas sem atingir sistemas reais.',
    'A autorização define limites e protege pessoas, dados e serviços. Testar sem permissão pode causar danos e consequências legais.',
  ],
  [
    'É explorar, estudar ou modificar sistemas e tecnologias. O termo pode descrever atividade autorizada ou maliciosa; o contexto e a permissão importam.',
    'É alguém que investiga ou trabalha com sistemas e tecnologia. A intenção e a autorização distinguem atuações defensivas, criminosas ou ambíguas.',
    'White Hat atua com autorização para proteger; Black Hat age com intenção maliciosa ou ilegal; Gray Hat pode encontrar falhas sem autorização, mesmo sem intenção de causar dano.',
    'É avaliar sistemas com permissão, escopo combinado e objetivo de melhorar a segurança.',
    'É uma ação que tenta comprometer confidencialidade, integridade ou disponibilidade de sistemas e dados.',
    'Em geral: definir escopo e autorização, coletar informações, avaliar falhas, validar com cuidado, registrar evidências e comunicar resultados e correções.',
    'É uma fraqueza que pode ser explorada para afetar a segurança de um sistema.',
    'É uma técnica ou código que aproveita uma vulnerabilidade. Sua validação deve ocorrer apenas em escopo autorizado e controlado.',
    'É a ação ou resultado que um exploit tenta executar após aproveitar uma falha. Em estudo, analise apenas exemplos inofensivos em laboratório.',
    'É um ambiente isolado, próprio para aprender e testar conceitos em alvos deliberadamente vulneráveis, sem envolver sistemas de terceiros.',
    'No teste autorizado há permissão explícita, escopo e limites; acessar um sistema sem permissão é invasão e pode causar danos e consequências legais.',
  ],
  [
    'Uma mensagem ou página tenta enganar a pessoa para que clique, abra um anexo ou revele informações. O objetivo costuma ser roubar dados ou obter acesso.',
    'Copiam aparência, logotipo e textos de um serviço conhecido, mas usam endereço, domínio ou fluxo que não corresponde ao site legítimo.',
    'Confira o endereço do remetente e do site, desconfie de urgência e pedidos inesperados, não use os links da mensagem e confirme pelo canal oficial.',
  ],
  [
    'É coletar informações sobre hosts, serviços e exposição de uma rede dentro de um escopo autorizado.',
    'Indica que algum programa pode estar aceitando conexões naquele número de porta; o contexto ajuda a identificar o serviço.',
    'Em laboratório, direcione o Nmap somente ao alvo definido e autorizado e use os resultados para observar portas e serviços expostos.',
    'Podem sugerir se a porta aceita, recusa ou filtra conexões e, com outras evidências, indicar o tipo de serviço. Não revelam tudo sozinhas.',
  ],
  [
    'É uma falha em que dados fornecidos pelo usuário alteram a estrutura de uma consulta ao banco de dados.',
    'Isso pode ocorrer quando a aplicação concatena entrada diretamente no comando SQL em vez de tratá-la como dado.',
    'Use uma aplicação deliberadamente vulnerável e isolada, como um laboratório de treinamento; observe a diferença entre entrada e consulta sem atingir sistemas reais.',
    'Consultas parametrizadas separam código e valores, impedindo que a entrada seja interpretada como parte da instrução SQL.',
  ],
  [
    'É uma vulnerabilidade em que conteúdo não confiável acaba sendo executado no navegador de quem visita a página.',
    'Ocorre quando a aplicação insere dados não confiáveis no HTML ou no DOM sem codificação e tratamento adequados.',
    'Refletido volta na resposta imediata; armazenado fica salvo e aparece depois; baseado em DOM surge no processamento inseguro feito pelo JavaScript do navegador.',
    'Use um laboratório intencionalmente vulnerável e siga os exercícios guiados; observe o contexto e as proteções, sem testar sites de terceiros.',
  ],
  [
    'É uma tentativa de tornar um serviço indisponível ao sobrecarregar recursos ou impedir o atendimento normal de usuários.',
    'DoS vem de uma origem; DDoS usa várias origens distribuídas. Ambos buscam interromper o serviço.',
    'A demanda excessiva consome banda, conexões, memória ou processamento, atrasando ou impedindo respostas legítimas.',
    'Use uma simulação local de carga, com limites baixos e autorização. Não gere tráfego contra serviços públicos ou de terceiros.',
  ],
  [
    'É tentar várias combinações de senha para encontrar uma que funcione. Em contas reais, isso pode bloquear usuários e é atividade não autorizada.',
    'É testar combinações retiradas de uma lista de palavras ou senhas comuns, em vez de todas as possibilidades.',
    'É testar credenciais vazadas de um serviço em outros, apostando que pessoas reutilizaram a mesma senha.',
    'Use apenas contas fictícias em um laboratório isolado, com poucas tentativas e sem credenciais reais.',
  ],
  [
    'É quando alguém se posiciona como intermediário entre participantes de uma comunicação para tentar observar ou alterar dados.',
    'Pode ocorrer em redes ou dispositivos comprometidos; em um curso, estude o conceito com diagramas ou capturas de tráfego sintéticas.',
    'HTTPS autentica o servidor e criptografa a conexão, ajudando a impedir leitura ou alteração por intermediários. Ainda é importante conferir avisos do navegador.',
    'Analise uma captura de tráfego criada para o laboratório ou uma demonstração isolada. Não intercepte redes ou dispositivos alheios.',
  ],
  [
    'Em uma máquina de laboratório dentro do seu escopo, use o Nmap para identificar portas e tentar reconhecer serviços; registre o alvo e os resultados.',
    'Capture tráfego da sua própria máquina ou de uma rede de laboratório e use o Wireshark para filtrar protocolos e entender a comunicação.',
    'Use o navegador de teste integrado do Burp contra uma aplicação de laboratório, observe requisições e respostas e mantenha o alvo no escopo.',
    'Exploit é uma técnica que aproveita uma vulnerabilidade. Em laboratório isolado, um teste controlado verifica se a falha existe e registra o impacto sem atingir outros sistemas.',
    'Em um serviço e conta fictícios, avalie limites de tentativa e bloqueio. Faça isso apenas com autorização e sem usar listas de credenciais reais.',
    'Em uma aplicação sua ou de laboratório, a descoberta de conteúdo pode comparar caminhos conhecidos com as respostas do servidor. Limite a ferramenta ao alvo autorizado.',
    'Em um app vulnerável de laboratório, use a ferramenta apenas dentro do escopo para verificar a suspeita; corrija o código com consultas parametrizadas.',
  ],
];
const kaliTopics = questionBank.find((subject) => subject.subject === 'Kali Linux').topics.map((topic, topicIndex) => ({
  title: topic.title,
  icon: ['⌁', '⌖', '⚙', '盾', '✦', '✉', '⌖', '▤', '⌘', '◉', '🔑', '⇄', '⚙'][topicIndex],
  questions: topic.questions.map((question, questionIndex) => [question, kaliAnswers[topicIndex][questionIndex]]),
}));
const kaliAttackGuides = {
  'Phishing': {
    intro: 'Uma fraude de engenharia social tenta levar alguém a confiar numa mensagem, abrir um link ou revelar dados.',
    flow: ['Mensagem inesperada', 'Pessoa avalia remetente e contexto', 'Link ou anexo pode levar a conteúdo enganoso', 'Ação precipitada pode expor dados'],
    safePractice: 'Prática segura: compare mensagens fictícias e marque sinais suspeitos; não crie páginas de login nem colete credenciais.',
    signals: 'Sinais para reconhecer: urgência artificial, remetente ou domínio estranho, pedido de senha ou código, anexo inesperado e erros ou inconsistências.',
    source: ['CISA — reconhecer phishing', 'https://www.cisa.gov/be-cyber-smart/report-incident'],
  },
  'Reconhecimento e varredura de portas': {
    intro: 'Reconhecimento organiza informações sobre ativos e serviços antes de uma avaliação. Toda descoberta deve respeitar o escopo autorizado.',
    flow: ['Confirmar autorização e alvo', 'Mapear somente ativos do laboratório', 'Observar portas e serviços expostos', 'Registrar achados e limites'],
    safePractice: 'Prática segura: use uma máquina virtual sua, na rede isolada do laboratório. Nunca escolha um IP público ou de terceiros como alvo de treino.',
    signals: 'Sinais para investigar: serviço inesperado, versão desatualizada ou porta exposta sem necessidade. Uma porta aberta, sozinha, não prova uma falha.',
    source: ['Nmap — guia oficial', 'https://nmap.org/book/toc.html'],
  },
  'SQL Injection': {
    intro: 'SQL Injection ocorre quando uma entrada não confiável é interpretada como parte da consulta ao banco, em vez de permanecer apenas um dado.',
    flow: ['Aplicação recebe entrada', 'Consulta é montada de forma insegura', 'Entrada pode alterar a lógica da consulta', 'Parâmetros separam dados de instruções'],
    safePractice: 'Prática segura: compare, em um laboratório local deliberadamente vulnerável, uma consulta insegura com uma versão corrigida usando parâmetros.',
    signals: 'Sinais para reconhecer: erros de banco inesperados, resultados que mudam com entradas incomuns e consultas construídas por concatenação. Confirme só no escopo de teste.',
    source: ['OWASP — prevenção de SQL Injection', 'https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html'],
  },
  'XSS — Cross-Site Scripting': {
    intro: 'XSS é uma falha em que o navegador trata conteúdo não confiável como código ativo dentro do contexto de um site.',
    flow: ['Aplicação recebe ou lê conteúdo', 'Conteúdo não é tratado para o contexto', 'Navegador o interpreta como parte da página', 'Codificação de saída reduz o risco'],
    safePractice: 'Prática segura: use um laboratório guiado e observe onde o dado entra e aparece. Não teste contas, sites ou navegadores de outras pessoas.',
    signals: 'Sinais para investigar: conteúdo fornecido pelo usuário reaparece sem codificação, uso inseguro de sinks do DOM e ausência de tratamento por contexto.',
    source: ['PortSwigger — XSS e seus tipos', 'https://portswigger.net/web-security/cross-site-scripting'],
  },
  'DoS e DDoS': {
    intro: 'Ataques de negação de serviço tentam prejudicar a disponibilidade ao esgotar recursos ou impedir respostas normais.',
    flow: ['Chegam solicitações em volume anormal', 'Recursos de rede ou servidor ficam ocupados', 'Usuários legítimos percebem lentidão', 'Mitigação filtra, limita ou absorve tráfego'],
    safePractice: 'Prática segura: use apenas uma simulação local com volume limitado e sem tráfego de rede. Não use geradores de carga contra serviços reais.',
    signals: 'Sinais para reconhecer: picos de tráfego, erros, latência elevada, esgotamento de conexões ou recursos e muitas solicitações semelhantes.',
    source: ['Cloudflare — mitigação de DDoS', 'https://www.cloudflare.com/learning/ddos/ddos-mitigation/'],
  },
  'Ataques a senhas': {
    intro: 'Tentativas automatizadas podem adivinhar senhas ou reutilizar credenciais vazadas para tentar acessar contas.',
    flow: ['Atacante obtém nomes de usuário ou listas', 'Várias tentativas chegam à autenticação', 'Controles detectam repetição e risco', 'MFA, limites e senhas únicas reduzem impacto'],
    safePractice: 'Prática segura: use apenas contas fictícias e poucas tentativas dentro de um laboratório isolado; não use listas vazadas nem credenciais reais.',
    signals: 'Sinais para reconhecer: muitas falhas de login, tentativas distribuídas, bloqueios incomuns e acessos de locais ou horários atípicos.',
    source: ['MITRE ATT&CK — Brute Force', 'https://attack.mitre.org/techniques/T1110/'],
  },
  'Man-in-the-Middle (MitM)': {
    intro: 'MitM descreve uma situação em que um intermediário tenta observar ou alterar a comunicação entre duas partes.',
    flow: ['Dois dispositivos iniciam comunicação', 'Um intermediário tenta se inserir no caminho', 'Dados sem proteção podem ficar expostos', 'HTTPS válido ajuda a autenticar e cifrar a conexão'],
    safePractice: 'Prática segura: estude um diagrama ou arquivo de captura sintético. Não intercepte redes Wi-Fi, tráfego ou dispositivos de terceiros.',
    signals: 'Sinais para reconhecer: alertas de certificado, redirecionamentos inesperados, conexão sem HTTPS e mudanças incomuns na rede.',
    source: ['MDN — segurança e HTTPS', 'https://developer.mozilla.org/en-US/docs/Web/Security/Transport_Layer_Security'],
  },
};
kaliTopics.forEach((topic) => Object.assign(topic, kaliAttackGuides[topic.title] || {}));
const simHome = '/home/estudante';
let simFs = new Map();
let simCwd = simHome;
let simOutput = [];
let simProcesses = [];

function resetSimulator() {
  simFs = new Map([
    ['/', { type: 'dir', mode: '755', owner: 'root' }],
    ['/home', { type: 'dir', mode: '755', owner: 'root' }],
    [simHome, { type: 'dir', mode: '755', owner: 'estudante' }],
    [`${simHome}/Documentos`, { type: 'dir', mode: '755', owner: 'estudante' }],
    [`${simHome}/Documentos/anotacoes.txt`, { type: 'file', content: 'Meu espaço de estudos no terminal simulado.\n', mode: '644', owner: 'estudante' }],
    [`${simHome}/Projetos`, { type: 'dir', mode: '755', owner: 'estudante' }],
    [`${simHome}/Projetos/README.md`, { type: 'file', content: 'Projetos de aprendizagem.\n', mode: '644', owner: 'estudante' }],
    [`${simHome}/.config`, { type: 'dir', mode: '700', owner: 'estudante' }],
  ]);
  simCwd = simHome;
  simOutput = ['Bem-vinda ao terminal simulado!', 'Este ambiente é fictício: nada aqui acessa ou altera arquivos do computador.', 'Digite help para ver os comandos disponíveis.'];
  simProcesses = [{ pid: 101, command: 'estudos-app' }, { pid: 204, command: 'editor-demo' }];
}

function simPath(input = '.') {
  let value = input === '~' ? simHome : input.startsWith('~/') ? `${simHome}/${input.slice(2)}` : input;
  const parts = (value.startsWith('/') ? value : `${simCwd}/${value}`).split('/');
  const resolved = [];
  for (const part of parts) {
    if (!part || part === '.') continue;
    if (part === '..') resolved.pop();
    else resolved.push(part);
  }
  return `/${resolved.join('/')}`;
}

function simParent(path) { return path === '/' ? '/' : path.slice(0, path.lastIndexOf('/')) || '/'; }
function simBase(path) { return path === '/' ? '/' : path.slice(path.lastIndexOf('/') + 1); }
function simDisplayPath(path = simCwd) { return path === simHome ? '~' : path.startsWith(`${simHome}/`) ? `~${path.slice(simHome.length)}` : path; }
function simTokenize(line) { return (line.match(/"[^"]*"|'[^']*'|[^\s]+/g) || []).map((part) => part.replace(/^(?:"([\s\S]*)"|'([\s\S]*)')$/, (_, doubleQuoted, singleQuoted) => doubleQuoted ?? singleQuoted)); }
function simChildren(path) {
  const prefix = path === '/' ? '/' : `${path}/`;
  return [...simFs.entries()].filter(([candidate]) => candidate.startsWith(prefix) && candidate !== path && !candidate.slice(prefix.length).includes('/'));
}

function terminalSimulatorMarkup() {
  return `<section class="simulator-card"><div class="simulator-heading"><div><div class="section-kicker">AMBIENTE DE TREINO</div><h3>Terminal simulado</h3><p>Os comandos funcionam somente em uma estrutura fictícia, dentro desta página.</p></div><button type="button" class="sim-reset" data-sim-reset>Restaurar arquivos de exemplo</button></div>
    <div class="simulator-window"><div class="simulator-bar"><span></span><span></span><span></span><strong>terminal — estudante</strong></div><pre id="sim-output" class="sim-output" role="log" aria-live="polite"></pre>
      <form id="sim-form" class="sim-form"><label id="sim-prompt" for="sim-command">estudante@estudos:~$</label><input id="sim-command" type="text" autocomplete="off" spellcheck="false" aria-label="Digite um comando para o terminal simulado"><button type="submit">Executar</button></form></div>
    <div class="sim-examples"><span>Experimente:</span><button type="button" data-sim-command="pwd">pwd</button><button type="button" data-sim-command="ls -la">ls -la</button><button type="button" data-sim-command="cat Documentos/anotacoes.txt">cat anotacoes.txt</button><button type="button" data-sim-command="mkdir Estudos">mkdir Estudos</button><button type="button" data-sim-command="help">help</button></div>
    <p class="simulator-safety">Este simulador reconhece apenas os comandos de estudo listados em <code>help</code>. Ele não executa comandos do Windows, Linux ou macOS.</p></section>`;
}

function renderSimulatorOutput() {
  const output = document.querySelector('#sim-output');
  const prompt = document.querySelector('#sim-prompt');
  if (output) output.textContent = simOutput.join('\n');
  if (prompt) prompt.textContent = `estudante@estudos:${simDisplayPath()}$`;
  if (output) output.scrollTop = output.scrollHeight;
}

function executeSimCommand(line) {
  const trimmed = line.trim();
  if (!trimmed) return;
  simOutput.push(`estudante@estudos:${simDisplayPath()}$ ${trimmed}`);
  if (/[;&|<>`$]/.test(trimmed)) {
    simOutput.push('Operadores de shell não estão disponíveis neste simulador. Cada comando é tratado isoladamente.');
    renderSimulatorOutput();
    return;
  }
  const [command, ...args] = simTokenize(trimmed);
  const getNode = (path) => simFs.get(simPath(path));
  const requireDir = (path) => {
    const node = getNode(path);
    if (!node) throw new Error(`Não existe: ${path}`);
    if (node.type !== 'dir') throw new Error(`Não é um diretório: ${path}`);
    return node;
  };
  try {
    let result = '';
    if (command === 'help') result = 'Comandos simulados: pwd, cd, ls (-a, -l), mkdir (-p), touch, cat, cp (-r), mv, rm (-r, -f), rmdir, chmod, chown, whoami, ps, top, jobs, kill, clear, help.\nUse aspas em nomes com espaços. Nenhum comando é executado fora deste ambiente.';
    else if (command === 'clear') simOutput = [];
    else if (command === 'pwd') result = simCwd;
    else if (command === 'whoami') result = 'estudante';
    else if (command === 'cd') {
      const target = simPath(args[0] || '~');
      if (!simFs.has(target)) throw new Error(`Não existe: ${args[0] || '~'}`);
      if (simFs.get(target).type !== 'dir') throw new Error(`Não é um diretório: ${args[0]}`);
      simCwd = target;
    } else if (command === 'ls') {
      const showAll = args.some((arg) => arg.includes('a'));
      const long = args.some((arg) => arg.includes('l'));
      const targetArg = args.find((arg) => !arg.startsWith('-')) || '.';
      const target = simPath(targetArg);
      if (!simFs.has(target)) throw new Error(`Não existe: ${targetArg}`);
      if (simFs.get(target).type === 'file') result = simBase(target);
      else result = simChildren(target).filter(([path]) => showAll || !simBase(path).startsWith('.')).map(([path, node]) => long ? `${node.type === 'dir' ? 'd' : '-'}${node.mode} ${node.owner.padEnd(10)} ${simBase(path)}${node.type === 'dir' ? '/' : ''}` : `${simBase(path)}${node.type === 'dir' ? '/' : ''}`).join('\n') || '(diretório vazio)';
    } else if (command === 'mkdir') {
      const recursive = args.includes('-p');
      const paths = args.filter((arg) => !arg.startsWith('-'));
      if (!paths.length) throw new Error('Uso: mkdir [-p] nome-da-pasta');
      for (const value of paths) {
        const target = simPath(value);
        if (simFs.has(target)) { if (!recursive) throw new Error(`Já existe: ${value}`); continue; }
        const parent = simParent(target);
        if (!simFs.has(parent)) {
          if (!recursive) throw new Error(`A pasta pai não existe: ${simDisplayPath(parent)}`);
          const missing = [];
          let cursor = parent;
          while (!simFs.has(cursor) && cursor !== '/') { missing.unshift(cursor); cursor = simParent(cursor); }
          missing.forEach((path) => simFs.set(path, { type: 'dir', mode: '755', owner: 'estudante' }));
        }
        requireDir(parent);
        simFs.set(target, { type: 'dir', mode: '755', owner: 'estudante' });
      }
    } else if (command === 'touch') {
      if (!args.length) throw new Error('Uso: touch nome-do-arquivo');
      for (const value of args) {
        const target = simPath(value);
        if (simFs.has(target)) { if (simFs.get(target).type === 'dir') throw new Error(`É um diretório: ${value}`); }
        else { requireDir(simParent(target)); simFs.set(target, { type: 'file', content: '', mode: '644', owner: 'estudante' }); }
      }
    } else if (command === 'cat') {
      if (!args.length) throw new Error('Uso: cat nome-do-arquivo');
      result = args.map((value) => { const node = getNode(value); if (!node) throw new Error(`Não existe: ${value}`); if (node.type !== 'file') throw new Error(`Não é um arquivo: ${value}`); return node.content || '(arquivo vazio)'; }).join('\n');
    } else if (command === 'rm' || command === 'rmdir') {
      const recursive = command === 'rmdir' || args.some((arg) => arg.includes('r'));
      const targets = args.filter((arg) => !arg.startsWith('-'));
      if (!targets.length) throw new Error(`Uso: ${command} ${command === 'rm' ? '[-r] ' : ''}caminho`);
      for (const value of targets) {
        const target = simPath(value);
        const node = simFs.get(target);
        if (!node) throw new Error(`Não existe: ${value}`);
        if (target === '/' || target === simHome || simCwd === target || simCwd.startsWith(`${target}/`)) throw new Error('Este simulador protege a raiz, sua pasta pessoal e o diretório atual.');
        if (node.type === 'dir' && !recursive) throw new Error('É um diretório. Use rm -r para remover seu conteúdo simulado.');
        if (command === 'rmdir' && simChildren(target).length) throw new Error('O diretório não está vazio.');
        [...simFs.keys()].filter((path) => path === target || path.startsWith(`${target}/`)).forEach((path) => simFs.delete(path));
      }
    } else if (command === 'cp' || command === 'mv') {
      const recursive = args.some((arg) => arg.includes('r'));
      const paths = args.filter((arg) => !arg.startsWith('-'));
      if (paths.length !== 2) throw new Error(`Uso: ${command} ${command === 'cp' ? '[-r] ' : ''}origem destino`);
      const [sourceArg, destinationArg] = paths;
      const source = simPath(sourceArg);
      const sourceNode = simFs.get(source);
      if (!sourceNode) throw new Error(`Não existe: ${sourceArg}`);
      if (source === '/' || source === simHome || destinationArg === '.') throw new Error('Escolha um caminho de arquivo ou pasta dentro do ambiente de treino.');
      if (sourceNode.type === 'dir' && !recursive) throw new Error('Para copiar diretórios, use cp -r.');
      let destination = simPath(destinationArg);
      if (simFs.get(destination)?.type === 'dir') destination = `${destination}/${simBase(source)}`;
      if (destination === source || destination.startsWith(`${source}/`)) throw new Error('Não é possível copiar ou mover uma pasta para dentro dela mesma.');
      requireDir(simParent(destination));
      if (command === 'cp') {
        if (simFs.has(destination)) throw new Error(`O destino já existe: ${destinationArg}`);
        const copies = [...simFs.entries()].filter(([path]) => path === source || path.startsWith(`${source}/`));
        copies.forEach(([path, node]) => simFs.set(`${destination}${path.slice(source.length)}`, { ...node }));
      } else {
        const moving = [...simFs.entries()].filter(([path]) => path === source || path.startsWith(`${source}/`));
        moving.forEach(([path]) => simFs.delete(path));
        moving.forEach(([path, node]) => simFs.set(`${destination}${path.slice(source.length)}`, node));
      }
    } else if (command === 'chmod' || command === 'chown') {
      if (args.length !== 2) throw new Error(`Uso: ${command} ${command === 'chmod' ? 'permissões' : 'proprietário'} caminho`);
      const node = getNode(args[1]);
      if (!node) throw new Error(`Não existe: ${args[1]}`);
      if (command === 'chmod') { if (!/^([0-7]{3,4}|[ugoa][+=-][rwx]+)$/.test(args[0])) throw new Error('Use uma permissão como 755, 644 ou u+x.'); node.mode = args[0]; }
      else node.owner = args[0];
      result = `${command}: alteração aplicada apenas ao item simulado.`;
    } else if (command === 'ps' || command === 'top') result = `PID  COMMAND\n${simProcesses.map((process) => `${process.pid}    ${process.command}`).join('\n') || '(nenhum processo simulado em execução)'}`;
    else if (command === 'jobs') result = 'Nenhum trabalho em segundo plano nesta sessão simulada.';
    else if (command === 'kill') {
      const pid = Number(args[0]);
      const index = simProcesses.findIndex((process) => process.pid === pid);
      if (index < 0) throw new Error(`PID simulado não encontrado: ${args[0] || '(vazio)'}`);
      simProcesses.splice(index, 1); result = `Processo simulado ${pid} encerrado.`;
    } else throw new Error(`Comando não disponível: ${command}. Digite help para consultar os comandos simulados.`);
    if (result) simOutput.push(result);
  } catch (error) { simOutput.push(`Erro: ${error.message}`); }
  renderSimulatorOutput();
}

resetSimulator();

const examQuestions = [
  { number: 1, prompt: 'Uma cafeteria oferece 10 tipos diferentes de doces. Um cliente deseja escolher 3 doces distintos para montar uma caixa degustação. Não é permitido repetir o mesmo doce, e a ordem de escolha não altera a composição da caixa. Quantas caixas diferentes podem ser formadas?', options: ['720', '120', '30', '1000', '60'], answer: 1, explanation: 'A ordem não importa, então é uma combinação: C(10,3) = 10 × 9 × 8 ÷ 3! = 120. A resposta é B.' },
  { number: 2, prompt: 'Dados os conjuntos A = {1; 3/2; 2; 3; 4} e B = {x ∈ ℕ | x³ > 9}, podemos concluir que o número de elementos de A ∩ B é:', options: ['1', '2', '3', '4', '5'], answer: 1, explanation: 'Como x é natural e x³ > 9, os elementos de B começam em 3. Da lista de A, os elementos comuns são 3 e 4. Portanto, há 2 elementos: alternativa B.' },
  { number: 3, prompt: 'Numa caixa há 26 balas: cinco são de cereja, seis de chocolate, sete de abacaxi e oito de leite. Qual o menor número de balas que devo retirar, sem olhar, para garantir que retirei pelo menos uma bala de cada tipo?', options: ['4', '12', '19', '22', '26'], answer: 3, explanation: 'No pior caso, podemos retirar todas as balas de três sabores e nenhuma do quarto. Para evitar o sabor com menos balas (cereja), podemos retirar 6 + 7 + 8 = 21 balas. A próxima, a 22ª, garante uma de cereja e já há uma de cada um dos outros sabores. Alternativa D.' },
  { number: 4, prompt: ' (ENEM — 2017) Para se cadastrar em um site, uma pessoa precisa escolher uma senha composta por quatro caracteres, sendo dois algarismos e duas letras (maiúsculas ou minúsculas). As letras e os algarismos podem estar em qualquer posição. O alfabeto tem 26 letras e uma letra maiúscula difere da minúscula. Quantas senhas são possíveis?', answerText: '1.622.400 senhas', explanation: 'Escolhemos quais 2 das 4 posições terão algarismos: C(4,2) = 6. Para essas posições há 10² opções; para as duas posições com letras há 52² opções (26 minúsculas e 26 maiúsculas). Total: 6 × 10² × 52² = 1.622.400. A formatação das alternativas recebidas ficou incompleta, então o resultado foi calculado pelo enunciado.' },
  { number: 5, prompt: 'Dados os conjuntos A = ]1; 3/2[ e B = [−1; 5/3], o conjunto A ∪ B pode ser representado pelo intervalo:', options: ['[−1; 5/3]', ']1; 5/3]', '[−1; 3/2[', ']1; −1[', '[1; 5/3]'], answer: 0, explanation: 'O intervalo A está inteiramente dentro de B. A união não acrescenta nenhum ponto a B. Alternativa A.' },
  { number: 6, prompt: 'Quantas filas podem ser formadas com oito pessoas se duas delas devem permanecer juntas?', options: ['40.320', '20.160', '10.080', '5.040', '2.520'], answer: 2, explanation: 'Considere as duas pessoas juntas como um bloco. Há 7! maneiras de ordenar as unidades e 2 maneiras de trocar as pessoas no bloco: 7! × 2 = 10.080. Alternativa C.' },
  { number: 7, prompt: 'Quantos elementos possui o conjunto-solução da equação |x − 1| + |x − 3| = 4?', options: ['0', '1', '2', '3', '4'], answer: 2, explanation: 'As soluções são x = 0 e x = 4. Portanto, há duas soluções. Alternativa C.' },
  { number: 8, prompt: 'Quantos são os subconjuntos do conjunto interseção de A = {1; 3; −1; 4} e B = {3; −1; 5}?', options: ['Alternativa A (ilegível na cópia)', '1', '2', '3', '4'], answer: 4, explanation: 'A ∩ B = {3, −1}, com 2 elementos. Um conjunto com 2 elementos tem 2² = 4 subconjuntos. Alternativa E.' },
  { number: 9, prompt: 'Um dado cúbico normal e um dado dodecaédrico numerado de 1 a 12 são lançados juntos. Quantas somas diferentes das faces são possíveis?', options: ['60', '17', '16', '12', '5'], answer: 1, explanation: 'As somas inteiras possíveis vão de 2 a 18, totalizando 17. Alternativa B.' },
];

const cloudExamQuestions = [
  { number: 1, prompt: 'Atualmente, várias empresas têm utilizado a conteinerização de aplicações. Dentro dessa plataforma, como pode ser definido o termo contêiner?', options: ['É uma estrutura para armazenamento de dados não estruturados.', 'É uma forma de virtualização a nível de sistema operacional, que permite executar aplicações isoladas em um único sistema operacional real.', 'É uma linguagem de programação para usar a plataforma Docker.', 'É uma estrutura secundária para armazenar redundâncias no desenvolvimento de software.', 'É uma estrutura de banco de dados relacional compartilhada entre projetos.'], answer: 1, explanation: 'Um contêiner isola uma aplicação e suas dependências, compartilhando o kernel do sistema operacional do host. A definição corresponde à alternativa B.' },
  { number: 2, prompt: 'Como se denomina a camada de software que simula múltiplos ambientes computacionais em um servidor físico e gerencia o compartilhamento dos recursos de hardware?', options: ['Compilador.', 'Hipervisor.', 'Kernel monolítico.', 'Driver de rede.', 'Bootloader.'], answer: 1, explanation: 'O hipervisor cria e administra máquinas virtuais e distribui os recursos físicos entre elas. Alternativa B.' },
  { number: 3, prompt: 'Uma das principais vantagens da computação em nuvem é a elasticidade. Qual característica representa essa elasticidade?', options: ['Permitir aumentar ou diminuir rapidamente a capacidade de computação e armazenamento conforme a necessidade.', 'Impedir que a capacidade seja aumentada rapidamente.', 'Impossibilitar mudanças na capacidade de computação e armazenamento.', 'Impedir economia por meio da redução de recursos ociosos.', 'Não ter relação com a flexibilidade de recursos.'], answer: 0, explanation: 'Elasticidade permite ajustar recursos rapidamente, para acompanhar variações na demanda. Alternativa A.' },
  { number: 4, prompt: 'Qual provedor de nuvem é conhecido pela integração com soluções corporativas como Active Directory e os serviços de produtividade do Office?', options: ['Amazon Web Services (AWS).', 'Google Cloud Platform (GCP).', 'Microsoft Azure.', 'IBM Cloud.', 'Oracle Cloud.'], answer: 2, explanation: 'O Azure integra-se de forma nativa ao ecossistema Microsoft, incluindo Microsoft Entra ID (antes Active Directory) e Microsoft 365. Alternativa C.' },
  { number: 5, prompt: 'Na virtualização baseada em contêineres, qual elemento central do sistema operacional hospedeiro é compartilhado pelos contêineres em execução?', options: ['O BIOS/UEFI.', 'O kernel do sistema operacional.', 'O painel de controle de um hipervisor tipo 1.', 'A memória cache L1 física do processador.', 'O firmware da placa-mãe.'], answer: 1, explanation: 'Os contêineres compartilham o kernel do sistema operacional hospedeiro, embora mantenham processos e ambientes isolados. Alternativa B.' },
  { number: 6, prompt: 'O fornecimento pela internet de serviços como servidores, armazenamento, bancos de dados, rede e software, com recursos flexíveis e economia de escala, é chamado de:', options: ['Computação local.', 'Computação indoor.', 'Computação em nuvem.', 'Computação FireWire.', 'Computação de desenvolvimento ágil.'], answer: 2, explanation: 'A descrição corresponde à entrega sob demanda de recursos computacionais pela internet: computação em nuvem. Alternativa C.' },
  { number: 7, prompt: 'Dois recursos IaaS são usados para construir uma plataforma, que por sua vez é utilizada para implementar aplicações. Quais modelos completam a sequência I, II e III?', options: ['IaaS — PaaS — SaaS.', 'IaaS — SaaS — PaaS.', 'PaaS — SaaS — IaaS.', 'SaaS — PaaS — IaaS.', 'SaaS — IaaS — PaaS.'], answer: 0, explanation: 'IaaS fornece a infraestrutura; sobre ela pode ser construída uma PaaS; a plataforma pode suportar aplicações disponibilizadas como SaaS. Alternativa A.', note: 'A figura mencionada no enunciado não veio na cópia. A sequência foi respondida com base na descrição textual.' },
  { number: 8, prompt: 'Qual modelo especializado de serviço em nuvem foca em recuperação de desastres, replicando servidores, dados e aplicações para permitir recuperação após incidentes críticos?', options: ['CaaS (Comunicação como Serviço).', 'DBaaS (Banco de Dados como Serviço).', 'DRaaS (Recuperação de Desastres como Serviço).', 'MaaS (Malware como Serviço).', 'FaaS (Função como Serviço).'], answer: 2, explanation: 'DRaaS significa Disaster Recovery as a Service e oferece recursos para recuperar sistemas e dados após uma interrupção grave. Alternativa C.' },
  { number: 9, prompt: 'O armazenamento em nuvem pode ser feito por diferentes modelos de implantação. Qual opção não corresponde a um modelo conhecido?', options: ['Nuvens públicas.', 'Nuvens comunitárias.', 'Nuvens híbridas.', 'Nuvens simples.', 'Nuvens privadas.'], answer: 3, explanation: 'Pública, comunitária, híbrida e privada são modelos de implantação conhecidos. “Nuvem simples” não é uma categoria padrão. Alternativa D.' },
  { number: 10, prompt: 'Entre os três modelos de serviço em nuvem, qual é geralmente apontado como o mais maduro?', options: ['SaaS.', 'PaaS.', 'IaaS.', 'On-premises.', 'Nenhuma das alternativas.'], answer: 0, explanation: 'SaaS é o modelo mais antigo e consolidado de entrega de software como serviço. Alternativa A.' },
];
const webCssExamQuestions = [
  { number: 1, prompt: 'A propriedade e o valor da regra CSS que estabelecem a distância de 16px entre o conteúdo de um elemento HTML e sua borda são:', options: ['margin: 16px;', 'border-width: 16px;', 'word-spacing: 16px;', 'letter-spacing: 16px;', 'padding: 16px;'], answer: 4, explanation: 'Padding define o espaço interno entre o conteúdo e a borda. A resposta é E.' },
  { number: 2, prompt: '(COPEL/2015 — Adaptada) Assinale a alternativa que apresenta padrões válidos para definição de cores em CSS.', options: ['RGB, RGB com porcentagem e LAB.', 'Palavras-chave, RGB com porcentagem e hexadecimal com canal alpha.', 'CMYK, RGB e palavras-chave.', 'HSL, RGB e números hexadecimais.', 'RGBA, HSLA e números decimais.'], answer: 3, explanation: 'O gabarito esperado nesta questão é D. Atenção: a questão usa nomenclatura antiga e pode ser ambígua, pois CSS moderno também aceita formatos LAB e notações com alpha; confira a versão do conteúdo cobrada pela prova.', note: 'Questão potencialmente ambígua por misturar sintaxes de cores de versões diferentes do CSS.' },
  { number: 3, prompt: 'A propriedade responsável por alterar o posicionamento dos elementos em CSS é:', options: ['display', 'padding', 'border', 'position', 'line-height'], answer: 3, explanation: 'A propriedade position define o método de posicionamento de um elemento. A resposta é D.' },
  { number: 4, prompt: '(FGV/2021) Qual é o papel da propriedade padding em relação a um box?', options: ['Definir a altura e a largura.', 'Definir a espessura da área que separa as bordas do preenchimento.', 'Definir a espessura das margens externas.', 'Definir a espessura e o estilo da borda.', 'Definir a unidade utilizada para estabelecer as dimensões.'], answer: 1, explanation: 'Padding é o preenchimento interno do box, entre o conteúdo e a borda. A resposta é B.' },
  { number: 5, prompt: '(UNIOESTE/2022 — Adaptada) A Cascading Style Sheets (CSS) é uma linguagem de folha de estilo criada para:', options: ['Separar forma e conteúdo em arquivos distintos para reduzir o tempo de carregamento.', 'Descrever a apresentação de documentos HTML, definindo como seus elementos são exibidos.', 'Elaborar e executar funções matemáticas complexas a partir do HTML.', 'Simplificar a diagramação HTML com estruturas hierárquicas.', 'Programar roteadores e switches em alto nível.'], answer: 1, explanation: 'CSS descreve a apresentação visual de documentos HTML. A resposta é B.' },
  { number: 6, prompt: '(AOCP/2013 — Adaptada) Qual é a responsabilidade do CSS em uma aplicação web?', options: ['Prover o conteúdo da aplicação.', 'Processar dados no servidor.', 'Fazer chamadas assíncronas ao servidor.', 'Cuidar da formatação visual do conteúdo apresentado.', 'Processar conteúdos de downloads.'], answer: 3, explanation: 'CSS controla a apresentação e a formatação visual do conteúdo. A resposta é D.' },
  { number: 7, prompt: 'No CSS, qual seletor localiza um elemento pelo atributo id?', options: ['#id', '.id', '*id', ':id', '~id'], answer: 0, explanation: 'O caractere # seleciona elementos pelo id. A resposta é A.' },
  { number: 8, prompt: '(FURB/2022) Qual propriedade CSS pode ser usada para deixar um texto em negrito?', options: ['text-decoration: bold', 'boldness: true', 'font-weight: bold', 'font-style: bold', 'text-thickness: bold'], answer: 2, explanation: 'A propriedade font-weight controla o peso da fonte. A resposta é C.' },
  { number: 9, prompt: '(AOCP/2013) Quais são formas comuns de aplicar CSS a um documento HTML?', options: ['Em arquivo separado, no cabeçalho, dentro de cada tag e fora das tags.', 'Em arquivo separado, no cabeçalho do HTML e dentro de elementos HTML.', 'Em arquivo separado e no cabeçalho do HTML.', 'No cabeçalho e dentro de cada tag HTML.', 'Somente no cabeçalho do HTML.'], answer: 1, explanation: 'As formas clássicas são folha externa, bloco <style> no <head> e estilo inline no atributo style. A resposta é B.' },
];
const webJavaScriptExamQuestions = [
  { number: 1, prompt: 'O Document Object Model (DOM) é um conceito central no desenvolvimento web com JavaScript. A respeito da definição e das características da interface DOM, assinale a opção correta.', options: ['É uma extensão proprietária exclusiva da linguagem JavaScript que não pode ser manipulada por nenhuma outra linguagem.', 'Trata-se de uma representação estruturada em formato de árvore composta por nós e objetos com propriedades, métodos e eventos.', 'Consiste em um banco de dados local que armazena permanentemente os elementos HTML no disco rígido do cliente.', 'É um protocolo de comunicação síncrona encarregado de sincronizar o CSS com o interpretador nativo do sistema operacional.', 'Trata-se de uma folha de estilos compilada que substitui a marcação HTML original durante a interpretação da página.'], answer: 1, explanation: 'O DOM representa o documento como uma árvore de nós e objetos que scripts podem consultar e modificar. A resposta é B.' },
  { number: 2, prompt: 'Sobre AJAX, avalie as afirmações: (1) permite atualizar dinamicamente partes de uma página; (2) XML não é obrigatório; (3) XMLHttpRequest envia requisições do script para o lado cliente. Qual sequência é correta?', options: ['V – V – V', 'V – V – F', 'V – F – V', 'F – F – V', 'F – F – F'], answer: 1, explanation: 'As duas primeiras afirmações são verdadeiras. A terceira, como escrita, é falsa: o navegador (cliente) envia a requisição ao servidor. Resposta B.', note: 'O enunciado original diz “para o lado client”; se pretendia dizer “do lado cliente”, a terceira afirmação também seria verdadeira e a sequência mudaria para V–V–V.' },
  { number: 3, prompt: 'Qual é a principal vantagem de requisições assíncronas em aplicações web interativas?', options: ['Impedir que o servidor receba mais de uma chamada simultânea por navegador.', 'Bloquear as interações da interface até que toda a resposta seja finalizada.', 'Permitir comunicação em segundo plano sem congelar a interface ou exigir recarregamento da página.', 'Eliminar a necessidade de autenticação e HTTPS.', 'Forçar a compilação de scripts no servidor antes da resposta HTTP.'], answer: 2, explanation: 'A comunicação assíncrona permite que a página continue respondendo enquanto aguarda dados. A resposta é C.' },
  { number: 4, prompt: 'Em relação à estrutura de um documento JSON, assinale a afirmativa correta.', options: ['Objetos são delimitados por colchetes [] e propriedades são separadas por ponto e vírgula.', 'Objetos são delimitados por chaves {} e formados por pares de nome e valor separados por dois-pontos :.', 'Arrays exigem parênteses () e aspas simples.', 'JSON depende exclusivamente de JavaScript e não pode ser lido por outras plataformas.', 'Todos os valores numéricos devem ser precedidos pela palavra function.'], answer: 1, explanation: 'Objetos JSON usam chaves e pares chave/valor separados por dois-pontos; pares são separados por vírgulas. A resposta é B.' },
  { number: 5, prompt: 'Qual é o papel específico do JavaScript na tríade de tecnologias web que operam no navegador?', options: ['Definir a estrutura semântica do documento.', 'Formatar o estilo visual, layout e cores.', 'Controlar o comportamento dinâmico e a interatividade das páginas.', 'Gerenciar exclusivamente bancos de dados relacionais.', 'Compilar previamente o código em linguagem de máquina.'], answer: 2, explanation: 'JavaScript implementa comportamento e interatividade; HTML estrutura e CSS apresenta visualmente. A resposta é C.' },
  { number: 6, prompt: 'A respeito da estrutura switch em JavaScript, assinale a afirmativa correta.', options: ['Avalia diferentes valores de uma expressão com cláusulas case; break pode interromper a execução dos casos seguintes.', 'Executa obrigatoriamente todos os casos, sem possibilidade de interromper a execução.', 'Substitui exclusivamente laços de repetição sobre arrays.', 'Exige declarar previamente o tipo de cada case com var.', 'Dispensa default quando nenhum case corresponde.'], answer: 0, explanation: 'switch compara uma expressão com os valores case; break evita a continuação para os casos seguintes. A resposta é A.' },
  { number: 7, prompt: '(FAEPESUL/2019) Qual valor é retornado por somar(15)? A função soma x começando em 0 enquanto x < num.', options: ['105', '45', '10', '9', '0'], answer: 0, explanation: 'A função soma 0 + 1 + ... + 14, resultando em 105. A resposta é A.' },
  { number: 8, prompt: 'Considerando um vetor cidades, qual expressão acessa dinamicamente seu último elemento, mesmo que o tamanho mude?', options: ['cidades[cidades.length]', 'cidades[cidades.length - 1]', 'cidades.lastIndex()', 'cidades.popIndex()', 'cidades[cidades.size]'], answer: 1, explanation: 'Os índices começam em zero, então o último índice é length - 1. A resposta é B.' },
  { number: 9, prompt: '(FGV/2018 — Adaptada) Qual forma inclui um arquivo JavaScript externo em uma página HTML?', options: ['<script load="xxx.js"></script>', '<inputJava>xxx.js</inputJava>', '<script onload="xxx.js"></script>', '<src file="xxx.js"></src>', '<script src="xxx.js"></script>'], answer: 4, explanation: 'Use a tag script com o atributo src apontando para o arquivo. A resposta é E.' },
  { number: 10, prompt: 'Embora XML apareça no nome AJAX, quais outros formatos podem ser manipulados por essas técnicas?', options: ['Somente arquivos executáveis binários .exe.', 'Documentos HTML, texto puro e dados estruturados em JSON.', 'Exclusivamente arquivos CSS minificados.', 'Apenas esquemas relacionais em SQL nativo.', 'Apenas tabelas de transformação XSLT.'], answer: 1, explanation: 'AJAX pode trabalhar com vários formatos, incluindo HTML, texto e JSON. A resposta é B.' },
];
const webHtmlExamQuestions = [
  { number: 1, prompt: 'A HTML permite criar listas de definição para apresentar termos e explicações. Qual combinação de tags é usada como container, termo e descrição?', options: ['<ol>, <li> e <ld>', '<ul>, <li> e <dt>', '<dl>, <dt> e <dd>', '<list>, <item> e <desc>', '<table>, <tr> e <td>'], answer: 2, explanation: 'A lista de definições usa <dl> como container, <dt> para o termo e <dd> para sua descrição. Resposta C.' },
  { number: 2, prompt: 'Qual conjunto apresenta a estrutura básica de um documento HTML?', options: ['<html> e <body>', '<DocType>, <html> e <body>', '<html>, <body>, <header> e <footer>', '<DocType>, <html>, <head> e <body>', '<DocType>, <html>, <head>, <body> e <footer>'], answer: 3, explanation: 'A estrutura básica inclui <!DOCTYPE html>, <html>, <head> e <body>. O footer é opcional. Resposta D.' },
  { number: 3, prompt: '(IBADE/2022 — Adaptada) Para que é utilizada a tag <select></select> em uma página HTML?', options: ['Representar um controle que apresenta um menu de opções.', 'Representar as opções de dentro de um menu.', 'Inserir links previamente selecionados.', 'Definir um texto selecionado para ficar em negrito.', 'Inserir imagens selecionadas de um banco de dados.'], answer: 0, explanation: '<select> cria um controle de seleção; suas opções são declaradas com <option>. Resposta A.' },
  { number: 4, prompt: 'Em um formulário HTML, qual elemento permite inserir textos longos com múltiplas linhas, como mensagens ou comentários?', options: ['<input type="text">', '<textarea>', '<select>', '<label>', '<input type="multiline">'], answer: 1, explanation: '<textarea> permite entrada de texto em várias linhas. Resposta B.' },
  { number: 5, prompt: '(UFMT/2022) Relacione os elementos HTML às respectivas características. 1. <div> · 2. <br> · 3. <h1> · 4. <!-- -->. Na ordem: insere quebra de linha; cria uma nova seção; põe um comentário; define um título. Marque a sequência correta.', options: ['3, 4, 2, 1.', '3, 1, 4, 2.', '2, 1, 3, 4.', '2, 1, 4, 3.', '2, 4, 1, 3.'], answer: 3, explanation: '<br> insere uma quebra de linha (2); <div> cria um contêiner/seção genérica (1); <!-- --> marca um comentário (4); <h1> define um título de nível 1 (3). Sequência 2, 1, 4, 3: alternativa D.' },
  { number: 6, prompt: '(FGV/2021) Considere uma tabela com duas linhas <tr>, cada uma contendo duas células <th>. Quantas linhas e colunas ela terá?', options: ['Duas linhas e duas colunas.', 'Quatro linhas e uma coluna.', 'Quatro colunas e uma linha.', 'Uma linha e uma coluna.', 'Linhas e colunas desalinhadas.'], answer: 0, explanation: 'Cada <tr> cria uma linha e cada célula <th> cria uma coluna. São duas linhas e duas colunas. Resposta A.' },
  { number: 7, prompt: 'Quais melhorias são esperadas em novas especificações HTML? I. Aumentar o tempo de resposta entre requisições. II. Formalizar regras e características. III. Corrigir problemas de compatibilidade. IV. Criar novas tags.', options: ['I, apenas.', 'II, apenas.', 'I, II e III, apenas.', 'II, III e IV, apenas.', 'I e IV, apenas.'], answer: 3, explanation: 'Formalizar regras, corrigir incompatibilidades e introduzir novos elementos são melhorias esperadas. Aumentar o tempo de resposta não é. Resposta D.' },
  { number: 8, prompt: 'Qual opção contém apenas tags consideradas obsoletas, substituídas por recursos mais adequados como CSS?', options: ['<section>, <article> e <header>', '<center>, <font> e <applet>', '<p>, <span> e <div>', '<audio>, <video> e <img>', '<table>, <tr> e <td>'], answer: 1, explanation: '<center>, <font> e <applet> são elementos obsoletos. Resposta B.' },
  { number: 9, prompt: 'Quais dois padrões serviram de base para a criação da especificação original da HTML?', options: ['SGML e HyTime.', 'XML e XHTML.', 'CSS e JavaScript.', 'HTTP e TCP/IP.', 'DTD e W3C.'], answer: 0, explanation: 'A especificação inicial da HTML foi definida como uma aplicação de SGML e aproveitou conceitos de HyTime. Resposta A.' },
  { number: 10, prompt: 'No código, tjProcesso.envolvidos é a lista ["João", "Maria"] e o script exibe tjProcesso.envolvidos[0]. Qual resultado aparece na página?', options: ['Maria', 'João', '2022.1', 'Tejota', 'tjProcesso'], answer: 1, explanation: 'O índice 0 acessa o primeiro item do array: “João”. Resposta B.' },
];
const cyberExamQuestions = [
  { number: 1, prompt: 'As regras de firewall filtram o tráfego entre redes. Qual política é mais comumente recomendada?', options: ['Aceitar todos por padrão, negar alguns.', 'Negar por padrão, autorizar explicitamente.', 'Aceitar por padrão, negar por exceção.', 'Autorizar todos por padrão, restringir alguns.', 'Negar todos por padrão, sem exceções.'], answer: 1, explanation: 'A política de negação padrão bloqueia o que não foi explicitamente autorizado. Isso reduz a exposição e segue o princípio do menor privilégio. Resposta B.' },
  { number: 2, prompt: 'Qual alternativa contém exclusivamente mecanismos de segurança lógica?', options: ['Catracas com crachá, portas corta-fogo e extintores de incêndio.', 'Criptografia, firewalls, listas de controle de acesso (ACL) e senhas.', 'Câmeras de segurança (CFTV), no-breaks e sprinklers.', 'Cancelas de veículos, trituradores de papel e fechaduras biométricas.', 'Salas-cofres, geradores a diesel e cercas perimetrais.'], answer: 1, explanation: 'Criptografia, firewall, ACLs e senhas são controles lógicos, aplicados a sistemas e dados. As outras opções descrevem controles físicos ou ambientais. Resposta B.' },
  { number: 3, prompt: 'Qual característica diferencia uma informação de um dado bruto?', options: ['A informação é um valor numérico isolado sem aplicação prática.', 'A informação consiste em um dado contextualizado ao qual se atribui uma percepção de valor.', 'A informação é um dado armazenado exclusivamente em formato físico antes do processamento.', 'A informação é uma chave criptográfica aplicada a bits desconexos.', 'A informação independe de contexto temporal ou situacional para produzir ganhos financeiros.'], answer: 1, explanation: 'Dados são fatos ou registros brutos; quando organizados e contextualizados, podem adquirir significado e valor como informação. Resposta B.' },
  { number: 4, prompt: 'Considere as afirmações sobre controle de acesso físico e lógico. I. Quando alguém deixa um grupo de acesso, o grupo deve ser extinto e recriado com os usuários restantes. II. Acessos não aprovados para um novo trabalho devem ser retirados ou adaptados, incluindo chaves e identificações. III. O acesso a áreas com informações sensíveis deve ser restrito a pessoas autorizadas, preferencialmente com autenticação, como cartão mais PIN. Está correto o que se afirma em:', options: ['I e II, apenas.', 'I, II e III.', 'I e III, apenas.', 'II e III, apenas.', 'III, apenas.'], answer: 3, explanation: 'A afirmação I é falsa: a saída de um usuário não exige extinguir e recriar o grupo; basta revisar e ajustar as permissões. As afirmações II e III descrevem boas práticas de controle de acesso. Resposta D.' },
  { number: 5, prompt: 'Sistemas de controle de acesso que reconhecem características biológicas humanas, como impressão digital, face ou retina, são denominados:', options: ['Controles criptográficos simétricos.', 'Firewalls com inspeção de estado.', 'Sistemas de autenticação biométrica.', 'Mecanismos de assinatura por chave pública.', 'Protocolos de zonas desmilitarizadas.'], answer: 2, explanation: 'Biometria usa características físicas ou comportamentais para verificar uma identidade. Resposta C.' },
  { number: 6, prompt: 'Em uma empresa, qual exemplo representa um controle físico da primeira camada de segurança ao se aproximar de uma instalação?', options: ['Firewalls.', 'Criptografia.', 'Catracas e elevadores.', 'Cancelas com seguranças verificando identificações.', 'Sistemas de detecção de intrusão.'], answer: 3, explanation: 'Uma cancela com verificação de identificação controla o perímetro externo antes da entrada na instalação. Resposta D.' },
  { number: 7, prompt: 'Qual aspecto da segurança da informação garante especificamente que a informação foi criada ou gerada por uma fonte autorizada?', options: ['Integridade.', 'Disponibilidade.', 'Confidencialidade.', 'Autenticidade.', 'Não repúdio.'], answer: 3, explanation: 'Autenticidade permite confirmar a origem ou autoria legítima da informação. Integridade trata de preservar sua exatidão e evitar alterações indevidas. Resposta D.' },
  { number: 8, prompt: 'Assinale um procedimento de segurança da informação que pode ser adotado pelas organizações.', options: ['Realizar periodicamente análises de riscos para contemplar mudanças nos requisitos de segurança.', 'Não envolver a direção na segurança da informação.', 'Descartar o inventário de ativos existente.', 'Evitar treinamentos de segurança para os funcionários.', 'Conceder aos funcionários acesso completo aos sistemas e à rede.'], answer: 0, explanation: 'Análises periódicas de riscos ajudam a identificar mudanças e atualizar controles. Inventários, participação da direção, treinamento e acesso mínimo também são importantes. Resposta A.' },
  { number: 9, prompt: 'De acordo com a família de normas ABNT ISO/IEC 27000, em quais dois aspectos principais se divide a segurança física?', options: ['Criptografia simétrica e criptografia assimétrica.', 'Equipamentos e ambiente.', 'Firewalls de aplicação e detectores de intrusão.', 'Confidencialidade e irretratabilidade.', 'Redes cabeadas e conexões sem fio.'], answer: 1, explanation: 'A segurança física considera a proteção dos equipamentos e do ambiente onde informações e sistemas são processados ou armazenados. Resposta B.' },
  { number: 10, prompt: 'Um servidor atinge o limite de capacidade e deixa de responder a requisições legítimas. Qual pilar da segurança da informação foi diretamente violado?', options: ['Autenticidade.', 'Legalidade.', 'Disponibilidade.', 'Não repúdio.', 'Confidencialidade.'], answer: 2, explanation: 'Disponibilidade garante que dados e serviços estejam acessíveis aos usuários autorizados quando necessários. Resposta C.' },
  { number: 11, prompt: 'Qual software nocivo (spyware) captura e registra as teclas digitadas para tentar obter senhas e números de cartão?', options: ['Adware.', 'Exploit.', 'Keylogger.', 'Port scanner.', 'Datalogger.'], answer: 2, explanation: 'Keylogger é o tipo de spyware que registra as teclas digitadas. Resposta C.' },
  { number: 12, prompt: '(FEPESE/2017) Sobre Negação de Serviço (DoS e DDoS), classifique as afirmações: (1) DoS pode usar um computador para tirar de operação um serviço, computador ou rede. (2) Quando coordenado e distribuído entre vários computadores, chama-se DDoS. (3) O objetivo principal é invadir e coletar informações do alvo. (4) Muitos computadores participam sem o conhecimento do dono por estarem infectados e integrarem botnets. Qual sequência é correta?', options: ['V – V – F – V', 'V – F – F – V', 'V – F – F – F', 'F – V – V – F', 'F – F – V – F'], answer: 0, explanation: 'As afirmações 1, 2 e 4 são verdadeiras. A 3 é falsa: DoS/DDoS buscam afetar a disponibilidade do serviço, não têm como objetivo principal coletar informações. Resposta A.' },
  { number: 13, prompt: 'A prática de buscar documentos e mídias descartados inadequadamente em lixos corporativos é conhecida como:', options: ['DNS poisoning.', 'Trashing (ou dumpster diving).', 'UDP flood.', 'Sniffing.', 'Defacement.'], answer: 1, explanation: 'Trashing ou dumpster diving é a busca por informações em materiais descartados sem cuidado. Resposta B.' },
  { number: 14, prompt: 'Na Segurança da Informação, como se conceitua uma vulnerabilidade em relação aos ativos de uma organização?', options: ['Uma ação intencional externa destinada a interromper serviços de rede.', 'Uma ferramenta tecnológica para criptografar bases confidenciais.', 'Uma fraqueza de um ativo ou grupo de ativos que pode ser explorada por uma ou mais ameaças.', 'O valor financeiro total medido pelo market share.', 'O procedimento de restauração de dados a partir de backups.'], answer: 2, explanation: 'Vulnerabilidade é uma fraqueza de um ativo que pode ser explorada por uma ameaça. Resposta C.' },
  { number: 15, prompt: 'Como se chama a alteração visual não autorizada do conteúdo de um portal ou página web, muitas vezes explorando falhas em CMS ou plug-ins?', options: ['Defacement (pichação de site).', 'Phishing bancário.', 'Ping of death.', 'Dumpster diving.', 'Session hijacking.'], answer: 0, explanation: 'Defacement é a modificação não autorizada do conteúdo ou da aparência de um site. Resposta A.' },
  { number: 16, prompt: 'Observe a relação entre ativo, vulnerabilidade, incidente/ameaça e impacto. Qual alternativa apresenta a associação mais apropriada?', options: ['Ativo: servidor de aplicação; vulnerabilidade: falta de atualizações do sistema operacional; incidente/ameaça: exploração de vulnerabilidades conhecidas; impacto: perda de confidencialidade, integridade e disponibilidade.', 'Ativo: servidor Web; vulnerabilidade: servidor acessível pela internet; incidente/ameaça: ataque hacker DDoS; impacto: integridade.', 'Ativo: firewall da rede; vulnerabilidade: ausência de manutenção periódica; incidente/ameaça: defeito no firmware; impacto: perda de confidencialidade nos acessos à internet.', 'Ativo: servidor Web; vulnerabilidade: ataque hacker DDoS; incidente/ameaça: falta de atualizações do sistema operacional; impacto: indisponibilidade.', 'Ativo: firewall da rede; vulnerabilidade: falta de atualizações do IOS; incidente/ameaça: perda de desempenho; impacto: não suporta atualizações de hardware.'], answer: 0, explanation: 'A alternativa A organiza corretamente os conceitos: servidor é o ativo, falta de atualização é a vulnerabilidade, exploração é o evento/ameaça e a perda de CIA é o impacto. Nas demais, conceitos aparecem em colunas trocadas ou com impacto incompatível.' },
  { number: 17, prompt: 'Durante o desenvolvimento de um software web, um revisor de segurança encontra uma vulnerabilidade no código. Qual é a responsabilidade mais apropriada?', options: ['Corrigir a vulnerabilidade, contatando os desenvolvedores que programaram o trecho.', 'Separar a vulnerabilidade e alertar a equipe de segurança para que o problema seja resolvido.', 'Separar a vulnerabilidade, tratando o código com erro como mais um problema que requer correção.', 'Isolar o problema e solicitar que a equipe de desenvolvimento corrija a vulnerabilidade imediatamente.', 'Corrigir o problema e relatar a vulnerabilidade à equipe de segurança.'], answer: 3, explanation: 'A vulnerabilidade deve ser registrada e encaminhada à equipe de desenvolvimento para correção conforme o processo do projeto. Resposta D.' },
  { number: 18, prompt: 'Qual alternativa apresenta exclusivamente exemplo de ativo intangível?', options: ['Prensas de papel-moeda e supercomputadores.', 'Imagem da organização e valor de mercado da marca.', 'Fórmulas químicas armazenadas e algoritmos de busca.', 'Servidores de banco de dados e fitas de backup.', 'Colaboradores operacionais e prestadores terceirizados.'], answer: 1, explanation: 'A imagem da organização e o valor de sua marca são ativos intangíveis. Resposta esperada: B.', note: 'A formulação pode ser ambígua: fórmulas e algoritmos também podem ser considerados ativos intangíveis, dependendo da classificação usada no material da disciplina.' },
  { number: 19, prompt: 'Qual exemplo pode ser considerado um ativo lógico tangível?', options: ['Informação.', 'Marca.', 'Colaboradores.', 'Humanos.', 'Imagem da organização.'], answer: 0, explanation: 'Pela classificação presumida nesta questão, informação é o exemplo de ativo lógico tangível. Resposta esperada: A.', note: 'A expressão “lógico tangível” depende da taxonomia adotada pelo material da disciplina; em outras classificações, informação digital costuma ser tratada como ativo lógico intangível. Confira o gabarito da instituição.' },
  { number: 20, prompt: 'Como se denomina o malware que criptografa arquivos e sistemas da vítima e exige pagamento para fornecer a chave de descriptografia?', options: ['Ransomware.', 'Sniffer.', 'Adware.', 'Trojan horse.', 'Worm.'], answer: 0, explanation: 'Ransomware bloqueia ou criptografa dados e exige resgate para tentar obter pagamento. O pagamento não garante recuperação. Resposta A.' },
  { number: 21, prompt: 'A tríade CID representa os objetivos que um Sistema de Gestão da Segurança da Informação busca preservar. O que significa CID?', options: ['Complacência, Integridade, Durabilidade.', 'Confidencialidade, Integridade, Disponibilidade.', 'Consistência, Implementação, Durabilidade.', 'Computação, Internet, Dados.', 'Certificação, Inovação, Desenvolvimento.'], answer: 1, explanation: 'CID corresponde a Confidencialidade, Integridade e Disponibilidade. Resposta B.' },
  { number: 22, prompt: 'Qual é o principal objetivo da Norma ISO/IEC 27001?', options: ['Definir padrões para testes de penetração cibernética.', 'Prover requisitos para estabelecer, implementar, manter e melhorar continuamente um SGSI.', 'Estabelecer diretrizes para descarte seguro de dados.', 'Fornecer um padrão para comunicações de rede seguras.', 'Criar uma estrutura para treinamento em segurança cibernética.'], answer: 1, explanation: 'A ISO/IEC 27001 especifica requisitos para estabelecer, implementar, manter e melhorar continuamente um Sistema de Gestão da Segurança da Informação. Resposta B.', note: 'O enunciado descreve o objetivo da norma; a edição internacional atual é ISO/IEC 27001:2022.' },
  { number: 23, prompt: 'A ABNT NBR ISO/IEC 27007 apresenta diretrizes para auditoria de SGSI. Qual item é um objeto legítimo de verificação para determinar conformidade?', options: ['Balanços patrimoniais de empresas concorrentes não auditadas.', 'Política, objetivos, procedimentos e critérios de avaliação e tratamento de riscos adotados pela organização.', 'Nível salarial individual de todos os funcionários operacionais.', 'Desempenho do valor de mercado das ações da organização.', 'Preferências pessoais e convicções políticas dos gestores de segurança.'], answer: 1, explanation: 'A auditoria verifica evidências relacionadas ao SGSI e aos critérios de auditoria da própria organização, incluindo políticas, objetivos, processos e tratamento de riscos. Resposta B.' },
  { number: 24, prompt: 'Por que uma organização pode optar pela certificação ISO/IEC 27001?', options: ['Para evitar toda e qualquer ameaça cibernética.', 'Para garantir que nenhum incidente de segurança ocorra.', 'Para demonstrar conformidade com requisitos de SGSI e gerenciar riscos.', 'Para substituir a necessidade de uma equipe de segurança.', 'Para garantir satisfação do usuário em todas as transações.'], answer: 2, explanation: 'A certificação pode demonstrar que o SGSI foi avaliado frente aos requisitos da norma e apoia a gestão de riscos; ela não elimina todos os riscos nem garante ausência de incidentes. Resposta C.' },
  { number: 25, prompt: 'Qual norma técnica apresenta um código de prática para a gestão da segurança da informação?', options: ['ABNT NBR ISO/IEC 27002:2013.', 'ABNT NBR ISO 9001:2008.', 'ABNT NBR ISO/IEC 27001:2013.', 'ABNT NBR ISO 14001:2004.', 'ABNT NBR ISO/IEC 20000-1:2011.'], answer: 0, explanation: 'A ISO/IEC 27002:2013 apresentava diretrizes e código de prática para controles de segurança da informação. Resposta A.', note: 'A edição 2013 foi retirada e substituída pela ISO/IEC 27002:2022. A questão mantém a edição histórica citada no enunciado.' },
  { number: 26, prompt: 'Qual legislação nacional estabelece regras para o uso e tratamento de dados pessoais no Brasil?', options: ['HIPAA.', 'PCI-DSS.', 'LGPD (Lei Geral de Proteção de Dados Pessoais).', 'GDPR.', 'Sarbanes-Oxley Act (SOX).'], answer: 2, explanation: 'No Brasil, a Lei nº 13.709/2018, conhecida como LGPD, regula o tratamento de dados pessoais. Resposta C.' },
  { number: 27, prompt: 'Qual é a principal diferença entre o escopo da ISO/IEC 27001 e da ISO/IEC 27002?', options: ['A ISO/IEC 27001 define requisitos auditáveis para o SGSI; a ISO/IEC 27002 fornece controles e orientações de implementação.', 'A ISO/IEC 27001 trata exclusivamente de segurança física e a ISO/IEC 27002, de segurança lógica.', 'A ISO/IEC 27002 estabelece requisitos obrigatórios e a ISO/IEC 27001 traz apenas sugestões.', 'A ISO/IEC 27001 aplica-se apenas ao governo e a ISO/IEC 27002, a empresas privadas.', 'A ISO/IEC 27002 substitui totalmente a ISO/IEC 27001.'], answer: 0, explanation: 'A 27001 especifica requisitos para o SGSI, enquanto a 27002 reúne controles de segurança e orientações de implementação. Resposta A.' },
  { number: 28, prompt: 'Segundo o fluxo de trabalho de auditoria de sistemas de gestão (ISO 19011), qual é uma sequência típica de etapas?', options: ['Preparo/início; condução das atividades; preparo, aprovação e distribuição do relatório; acompanhamento.', 'Execução de teste de invasão; correção de código; homologação; fechamento do contrato.', 'Notificação judicial; análise pericial; apreensão de servidores; julgamento administrativo.', 'Levantamento de requisitos; codificação; testes unitários; entrega ao cliente.', 'Certificação imediata; vistoria de equipamentos; elaboração de normas; reunião inicial.'], answer: 0, explanation: 'A auditoria inclui início e preparação, condução das atividades, elaboração e distribuição do relatório e, quando aplicável, acompanhamento. Resposta A.', note: 'A ISO 19011 teve nova edição em 2026; o enunciado pode seguir uma edição anterior do conteúdo da disciplina.' },
  { number: 29, prompt: 'No Brasil, qual entidade é reconhecida como Fórum Nacional de Normalização e publica as Normas Brasileiras correspondentes aos padrões internacionais da ISO?', options: ['Associação Brasileira de Normas Técnicas (ABNT).', 'Gabinete de Segurança Institucional (GSI).', 'Inmetro.', 'Comitê Gestor da Internet no Brasil (CGI.br).', 'Autoridade Nacional de Proteção de Dados (ANPD).'], answer: 0, explanation: 'A ABNT é o Foro Nacional de Normalização e responsável pela elaboração das Normas Brasileiras (ABNT NBR). Resposta A.' },
  { number: 30, prompt: 'Qual é um benefício da adoção da ABNT NBR ISO/IEC 27001:2013 por uma organização?', options: ['Oportunidade de identificar e eliminar fraquezas.', 'Mecanismo para eliminar o sucesso do sistema.', 'Não participação da gerência na segurança da informação.', 'Fornece insegurança a todas as partes interessadas.', 'Isola recursos com outros sistemas de gerenciamento.'], answer: 0, explanation: 'A adoção da norma ajuda a identificar e tratar riscos e fraquezas do SGSI. Resposta A.' },
];
let activeExamQuestions = examQuestions;
let activeSubjectName = 'Matemática e Lógica';
let activeReviewTopics = mathTopics;
let activeWebExamTopic = 'html';
let activeKaliSection = 'foundations';
let activeNetworkLevel = 1;
let activeCyberSection = 'fundamentals';
let activeCyberExamTopic = 'principles';
let activeProgrammingPanel = 'review';
const defaultProgrammingCode = `nome = "Ana"\nfor numero in range(1, 4):\n    print(f"Oi, {nome}! Número {numero}")`;
let programmingCodeDraft = (() => { try { return localStorage.getItem('study-programming-code') || defaultProgrammingCode; } catch { return defaultProgrammingCode; } })();
let pythonWorker = null;
let pythonRunTimer = null;
let pythonWorkerReady = false;

const grid = document.querySelector('#subject-grid');
const searchInput = document.querySelector('#search-input');
const emptyState = document.querySelector('#empty-state');
const dialog = document.querySelector('#subject-dialog');
const subjectView = document.querySelector('#subject-view');
const notesView = document.querySelector('#notes-view');
const homeSections = [document.querySelector('.welcome-section'), document.querySelector('#materias'), document.querySelector('.coming-soon'), document.querySelector('.page-footer')];
let practiceState = { selectedSubjects: [], questions: [], position: 0, answered: 0, mastered: 0, revisit: 0 };

function renderSubjects(filter = '') {
  const normalizedFilter = filter.trim().toLocaleLowerCase('pt-BR');
  const filteredSubjects = subjects.filter((subject) =>
    `${subject.name} ${subject.description}`.toLocaleLowerCase('pt-BR').includes(normalizedFilter),
  );
  grid.innerHTML = filteredSubjects.map((subject) => `
    <button class="subject-card" type="button" data-subject="${subject.name}">
      <span class="card-top"><span class="subject-icon" style="background:${subject.color};color:${subject.ink}">${subject.icon}</span><span class="card-arrow" aria-hidden="true">↗</span></span>
      <span class="subject-title">${subject.name}</span><span class="subject-description">${subject.description} · ${questionsFor([subject.name]).length} perguntas</span><span class="card-decoration" aria-hidden="true"></span>
    </button>`).join('');
  emptyState.hidden = filteredSubjects.length > 0;
  grid.hidden = filteredSubjects.length === 0;
}

function renderReview() {
  const topics = activeReviewTopics;
  return `<div class="topic-list">${topics.map((topic, topicIndex) => `
    <section class="topic-card"><div class="topic-heading"><span class="topic-icon">${topic.icon}</span><div><h3>${topic.title}</h3><span>${topic.questions.length} perguntas para revisar</span></div></div>
      ${topic.intro ? `<p class="kali-attack-intro">${topic.intro}</p><div class="attack-guide-grid"><div class="attack-guide-block"><strong>Como a sequência pode acontecer</strong><ol class="attack-flow">${topic.flow.map((step) => `<li>${step}</li>`).join('')}</ol></div><div class="attack-guide-block"><strong>Prática segura</strong><p>${topic.safePractice}</p><strong>O que observar</strong><p>${topic.signals}</p>${topic.source ? `<a class="official-source" href="${topic.source[1]}" target="_blank" rel="noopener noreferrer">${topic.source[0]} ↗</a>` : ''}</div></div>` : ''}
      <div class="review-questions">${topic.questions.map(([question, answer], questionIndex) => {
        const id = `review-${topicIndex}-${questionIndex}`;
        return `<details class="review-item"><summary>${question}<span class="review-plus" aria-hidden="true">+</span></summary><p>${answer}</p></details>`;
      }).join('')}</div>
    </section>`).join('')}</div>`;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function renderExam(questionSet = activeExamQuestions) {
  return `${activeSubjectName === 'Desenvolvimento Web' ? `<div class="web-exam-topics" role="group" aria-label="Assunto da prova"><button type="button" class="subject-tab ${activeWebExamTopic === 'html' ? 'active' : ''}" data-exam-topic="html" aria-pressed="${activeWebExamTopic === 'html'}">HTML</button><button type="button" class="subject-tab ${activeWebExamTopic === 'css' ? 'active' : ''}" data-exam-topic="css" aria-pressed="${activeWebExamTopic === 'css'}">CSS</button><button type="button" class="subject-tab ${activeWebExamTopic === 'javascript' ? 'active' : ''}" data-exam-topic="javascript" aria-pressed="${activeWebExamTopic === 'javascript'}">JavaScript</button></div>` : ''}<div class="exam-intro"><div><div class="section-kicker">PRATIQUE COM QUESTÕES REAIS</div><h3>Questões da minha prova</h3><p>Responda primeiro e confira a explicação em seguida.</p></div><span class="exam-count">${questionSet.length} questões</span></div>
    <div class="exam-list">${questionSet.map((question) => `
      <article class="exam-card ${question.incomplete ? 'exam-incomplete' : ''}" data-question="${question.number}">
        <div class="exam-meta"><span class="exam-number">QUESTÃO ${question.number}</span><span class="review-label">Marcar para revisão <input type="checkbox" aria-label="Marcar questão ${question.number} para revisão" /></span></div>
        <p class="exam-prompt">${escapeHTML(question.prompt)}</p>${question.note && !question.incomplete ? `<div class="source-note">${escapeHTML(question.note)}</div>` : ''}
        ${question.incomplete ? `<div class="incomplete-note"><strong>Enunciado incompleto</strong><span>${escapeHTML(question.note)}</span></div>` : question.options ? `<div class="exam-options">${question.options.map((option, index) => `<button type="button" class="exam-option" data-option="${index}"><span>${String.fromCharCode(65 + index)}</span>${escapeHTML(option)}</button>`).join('')}</div><div class="answer-feedback" hidden></div>` : `<button type="button" class="reveal-answer">Conferir resposta</button><div class="answer-feedback" hidden></div>`}
      </article>`).join('')}</div>`;
}

function openMathSubject() {
  activeSubjectName = 'Matemática e Lógica';
  activeExamQuestions = examQuestions;
  activeReviewTopics = mathTopics;
  homeSections.forEach((section) => { section.hidden = true; });
  subjectView.hidden = false;
  subjectView.innerHTML = `<button class="back-button" id="back-to-subjects" type="button">← Voltar às matérias</button>
    <header class="subject-hero"><span class="subject-hero-icon">∑</span><div><div class="section-kicker">TEMA 1</div><h2>Matemática e Lógica</h2><p>Aprenda os conceitos, revise com perguntas e pratique com questões da prova.</p></div></header>
    <div class="subject-tabs" role="tablist" aria-label="Conteúdo de Matemática e Lógica"><button type="button" class="subject-tab active" role="tab" aria-selected="true" data-tab="review">🧠 Revisão rápida</button><button type="button" class="subject-tab" role="tab" aria-selected="false" data-tab="practice">✎ Responder com minhas palavras</button><button type="button" class="subject-tab" role="tab" aria-selected="false" data-tab="exam">📝 Questões da minha prova</button></div>
    <div id="subject-tab-content" class="subject-tab-content">${renderReview()}</div>`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openCloudSubject() {
  activeSubjectName = 'Computação em Nuvem';
  activeExamQuestions = cloudExamQuestions;
  activeReviewTopics = cloudTopics;
  homeSections.forEach((section) => { section.hidden = true; });
  subjectView.hidden = false;
  subjectView.innerHTML = `<button class="back-button" id="back-to-subjects" type="button">← Voltar às matérias</button>
    <header class="subject-hero"><span class="subject-hero-icon">☁</span><div><div class="section-kicker">TEMA 2</div><h2>Computação em Nuvem</h2><p>Conheça os conceitos, pratique com respostas próprias e revise questões da prova.</p></div></header>
    <div class="subject-tabs" role="tablist" aria-label="Conteúdo de Computação em Nuvem"><button type="button" class="subject-tab active" role="tab" aria-selected="true" data-tab="review">🧠 Revisão rápida</button><button type="button" class="subject-tab" role="tab" aria-selected="false" data-tab="practice">✎ Responder com minhas palavras</button><button type="button" class="subject-tab" role="tab" aria-selected="false" data-tab="exam">📝 Questões da minha prova</button></div>
    <div id="subject-tab-content" class="subject-tab-content">${renderReview()}</div>`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openWebSubject() {
  activeSubjectName = 'Desenvolvimento Web';
  activeWebExamTopic = 'html';
  activeExamQuestions = webHtmlExamQuestions;
  const cssReview = [
    ['O que significa CSS?', 'Cascading Style Sheets, ou folhas de estilo em cascata.'],
    ['Para que serve o CSS?', 'Para definir a apresentação visual de documentos HTML, como cores, fontes, espaçamentos e layout.'],
    ['Qual a diferença entre HTML e CSS?', 'HTML estrutura e descreve o conteúdo; CSS define sua aparência e apresentação.'],
    ['O que é um seletor?', 'É a parte da regra CSS que identifica quais elementos HTML receberão os estilos.'],
    ['O que é uma propriedade CSS?', 'É o aspecto que será alterado, como color, padding ou font-size.'],
    ['O que é um valor CSS?', 'É a configuração atribuída a uma propriedade, como red para color ou 16px para padding.'],
    ['Para que serve color?', 'Define a cor do texto de um elemento.'],
    ['Para que serve background-color?', 'Define a cor de fundo de um elemento.'],
    ['Para que serve font-size?', 'Define o tamanho do texto.'],
    ['Para que serve font-weight?', 'Define o peso ou espessura da fonte, como normal ou bold.'],
    ['Para que serve padding?', 'Define o espaço interno entre o conteúdo do elemento e sua borda.'],
    ['Para que serve margin?', 'Define o espaço externo ao redor da borda de um elemento.'],
    ['Qual a diferença entre padding e margin?', 'Padding é o espaço interno entre conteúdo e borda; margin é o espaço externo ao redor da borda.'],
    ['O que é o Box Model?', 'É o modelo que representa um elemento como conteúdo, padding, borda e margin.'],
    ['Para que serve position?', 'Define como um elemento é posicionado, por exemplo no fluxo normal, relativo, absoluto, fixo ou sticky.'],
    ['Como selecionar um elemento pelo id?', 'Use # seguido do identificador, por exemplo #menu.'],
    ['Como selecionar um elemento pela class?', 'Use um ponto antes do nome da classe, por exemplo .cartao.'],
  ];
  activeReviewTopics = [{ title: 'CSS', icon: '#', questions: cssReview }];
  homeSections.forEach((section) => { section.hidden = true; });
  subjectView.hidden = false;
  subjectView.innerHTML = `<button class="back-button" id="back-to-subjects" type="button">← Voltar às matérias</button>
    <header class="subject-hero"><span class="subject-hero-icon">⌘</span><div><div class="section-kicker">HTML, CSS E JAVASCRIPT</div><h2>Desenvolvimento Web</h2><p>Revise os conceitos e pratique as questões de CSS da sua prova.</p></div></header>
    <div class="subject-tabs" role="tablist" aria-label="Conteúdo de Desenvolvimento Web"><button type="button" class="subject-tab active" role="tab" aria-selected="true" data-tab="review">🧠 Revisão rápida</button><button type="button" class="subject-tab" role="tab" aria-selected="false" data-tab="practice">✎ Responder com minhas palavras</button><button type="button" class="subject-tab" role="tab" aria-selected="false" data-tab="exam">📝 Questões da minha prova</button></div>
    <div id="subject-tab-content" class="subject-tab-content">${renderReview()}</div>`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openTerminalSubject() {
  activeSubjectName = 'Comandos do Terminal';
  activeReviewTopics = terminalTopics;
  homeSections.forEach((section) => { section.hidden = true; });
  subjectView.hidden = false;
  subjectView.innerHTML = `<button class="back-button" id="back-to-subjects" type="button">← Voltar às matérias</button>
    <header class="subject-hero"><span class="subject-hero-icon">&gt;_</span><div><div class="section-kicker">LINUX E LINHA DE COMANDO</div><h2>Comandos do Terminal</h2><p>Revise conceitos e comandos com explicações diretas. Pratique escrevendo respostas com suas palavras.</p></div></header>
    <div class="subject-tabs" role="tablist" aria-label="Conteúdo de Comandos do Terminal"><button type="button" class="subject-tab active" role="tab" aria-selected="true" data-tab="review">🧠 Revisão rápida</button><button type="button" class="subject-tab" role="tab" aria-selected="false" data-tab="practice">✎ Responder com minhas palavras</button><button type="button" class="subject-tab" role="tab" aria-selected="false" data-tab="simulator">⌨ Terminal simulado</button></div>
    <div id="subject-tab-content" class="subject-tab-content">${renderReview()}</div>`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderProgrammingActivities() {
  return `<div class="program-activity-grid">
    <article class="program-activity-card"><span class="activity-label">PREVER A SAÍDA</span><h3>O que aparece na tela?</h3><p>Leia sem executar. Considere que <code>range(4)</code> começa em zero e não inclui o 4.</p><pre><code>total = 0
for numero in range(4):
    total += numero
print(total)</code></pre><details><summary>Revelar resposta e raciocínio</summary><p>A saída é <code>6</code>. O laço soma 0 + 1 + 2 + 3.</p></details></article>
    <article class="program-activity-card"><span class="activity-label">ENCONTRAR O ERRO</span><h3>Por que a condição falha?</h3><p>Identifique o problema e tente corrigir antes de abrir a explicação.</p><pre><code>nota = 8
if nota = 7:
    print("Nota igual a 7")</code></pre><details><summary>Revelar correção</summary><p>Dentro do <code>if</code>, use <code>==</code> para comparar. O sinal <code>=</code> atribui valor. Como a comparação precisa detectar a nota 7, escreva <code>if nota == 7:</code>.</p></details></article>
    <article class="program-activity-card"><span class="activity-label">DESAFIO EM ETAPAS</span><h3>Calculadora de média</h3><p>Crie um programa que receba três notas, calcule a média e informe se a pessoa foi aprovada.</p><ol><li>Guarde três notas em variáveis.</li><li>Some-as e divida por 3.</li><li>Use <code>if/else</code> para comparar com a média mínima escolhida.</li><li>Mostre a média e o resultado.</li></ol><details><summary>Ver uma solução possível</summary><pre><code>nota1 = 7
nota2 = 8
nota3 = 6
media = (nota1 + nota2 + nota3) / 3
print("Média:", media)
if media >= 7:
    print("Aprovado")
else:
    print("Precisa revisar")</code></pre><p>Experimente trocar os valores e acompanhar como a condição muda.</p></details></article>
    <article class="program-activity-card"><span class="activity-label">PEQUENO PROJETO</span><h3>Quiz de uma pergunta</h3><p>Monte um quiz simples: guarde uma resposta, compare com a resposta esperada e exiba uma mensagem.</p><details><summary>Ver roteiro e exemplo</summary><ol><li>Crie uma variável com a resposta da pessoa.</li><li>Compare usando <code>==</code>.</li><li>Use <code>if/else</code> para mostrar o resultado.</li></ol><pre><code>resposta = "python"
if resposta == "python":
    print("Acertou!")
else:
    print("Tente novamente")</code></pre></details></article>
  </div>`;
}

function renderPythonStudio() {
  return `<section class="python-studio"><div class="studio-intro"><div><div class="section-kicker">AMBIENTE DE PRÁTICA</div><h3>Code Studio · Python</h3><p>Escreva ou escolha um exemplo e clique em Executar. O código é executado no seu navegador.</p></div><span class="studio-badge">PYTHON</span></div>
    <div class="studio-safety">A primeira execução baixa o ambiente Python oficial e precisa de internet. O projeto não envia seu código a um servidor. A execução acontece em um worker separado para ajudar a manter a página responsiva; use para estudo e não coloque dados pessoais, senhas ou segredos. Este primeiro editor ainda não oferece entrada interativa com <code>input()</code>.</div>
    <label class="studio-example-label" for="python-example">Começar com um exemplo</label><select id="python-example"><option value="keep">Manter meu código</option><option value="variables">Variáveis e tipos</option><option value="conditions">Condições</option><option value="loops">Laços de repetição</option><option value="function">Função</option><option value="collections">Lista e dicionário</option><option value="empty">Código em branco</option></select>
    <label class="studio-example-label" for="python-code">Seu código Python</label><textarea id="python-code" spellcheck="false" autocapitalize="off" autocomplete="off" aria-label="Editor de código Python">${escapeHTML(programmingCodeDraft)}</textarea>
    <div class="studio-actions"><button type="button" class="studio-run" data-python-run>▶ Executar</button><button type="button" class="studio-stop" data-python-stop hidden>■ Interromper</button><button type="button" class="studio-clear" data-python-clear>Limpar saída</button><span>Ctrl + Enter para executar</span></div>
    <div class="studio-output-wrap"><div class="studio-output-title">SAÍDA</div><pre id="python-output" class="studio-output" aria-live="polite">Pronto para executar. A inicialização do Python acontece ao clicar em Executar.</pre></div>
  </section>`;
}

const pyodideBaseUrl = 'https://cdn.jsdelivr.net/pyodide/v314.0.7/full/';
function saveProgrammingDraft() { try { localStorage.setItem('study-programming-code', programmingCodeDraft); } catch {} }
function stopPythonExecution(message = 'Execução interrompida.') {
  if (pythonRunTimer) window.clearTimeout(pythonRunTimer);
  pythonRunTimer = null;
  if (pythonWorker) pythonWorker.terminate();
  pythonWorker = null;
  pythonWorkerReady = false;
  const output = document.querySelector('#python-output');
  if (output && message) output.textContent = message;
  const runButton = document.querySelector('[data-python-run]');
  const stopButton = document.querySelector('[data-python-stop]');
  if (runButton) runButton.disabled = false;
  if (stopButton) stopButton.hidden = true;
}

function startPythonWorker() {
  const workerSource = `import { loadPyodide } from "${pyodideBaseUrl}pyodide.mjs";
const pyodidePromise = loadPyodide({ indexURL: "${pyodideBaseUrl}" });
self.postMessage({ type: "loading" });
pyodidePromise.then(() => self.postMessage({ type: "ready" })).catch(error => self.postMessage({ type: "error", message: error.message }));
self.onmessage = async event => {
  if (event.data.type !== "run") return;
  try {
    const pyodide = await pyodidePromise;
    pyodide.setStdout({ batched: text => self.postMessage({ type: "stdout", text }) });
    pyodide.setStderr({ batched: text => self.postMessage({ type: "stderr", text }) });
    const result = await pyodide.runPythonAsync(event.data.code);
    self.postMessage({ type: "done", result: result === undefined ? "" : String(result) });
  } catch (error) {
    self.postMessage({ type: "error", message: error.message });
  }
};`;
  const blobUrl = URL.createObjectURL(new Blob([workerSource], { type: 'text/javascript' }));
  try {
    pythonWorker = new Worker(blobUrl, { type: 'module' });
  } catch (error) {
    URL.revokeObjectURL(blobUrl);
    throw error;
  }
  pythonWorker.onmessage = (event) => {
    const { type, text = '', message = '', result = '' } = event.data;
    const output = document.querySelector('#python-output');
    if (type === 'loading') { if (output) output.textContent = 'Carregando o ambiente Python oficial… isso pode levar alguns instantes.'; return; }
    if (type === 'ready') {
      pythonWorkerReady = true;
      URL.revokeObjectURL(blobUrl);
      if (output) output.textContent = 'Python pronto. Executando seu código…';
      return;
    }
    if (type === 'stdout' || type === 'stderr') {
      if (output) output.textContent = `${output.textContent === 'Python pronto. Executando seu código…' ? '' : `${output.textContent}\n`}${type === 'stderr' ? `Aviso: ${text}` : text}`.slice(-12000);
      return;
    }
    if (type === 'done') {
      if (pythonRunTimer) window.clearTimeout(pythonRunTimer);
      pythonRunTimer = null;
      const priorOutput = output?.textContent || '';
      const hasPrinted = priorOutput && priorOutput !== 'Python pronto. Executando seu código…';
      if (output) output.textContent = `${hasPrinted ? priorOutput : ''}${result ? `${hasPrinted ? '\n' : ''}${result}` : ''}${hasPrinted || result ? '' : '(O código terminou sem mostrar uma saída.)'}`;
      const runButton = document.querySelector('[data-python-run]');
      const stopButton = document.querySelector('[data-python-stop]');
      if (runButton) runButton.disabled = false;
      if (stopButton) stopButton.hidden = true;
      return;
    }
    if (type === 'error') {
      if (pythonRunTimer) window.clearTimeout(pythonRunTimer);
      pythonRunTimer = null;
      if (output) output.textContent = `Erro ou falha ao iniciar o Python:\n${message}`;
      const runButton = document.querySelector('[data-python-run]');
      const stopButton = document.querySelector('[data-python-stop]');
      if (runButton) runButton.disabled = false;
      if (stopButton) stopButton.hidden = true;
      if (!pythonWorkerReady) { pythonWorker?.terminate(); pythonWorker = null; }
    }
  };
  pythonWorker.onerror = (event) => {
    if (pythonRunTimer) window.clearTimeout(pythonRunTimer);
    pythonRunTimer = null;
    const output = document.querySelector('#python-output');
    if (output) output.textContent = `Não foi possível carregar o ambiente Python. Confira sua conexão e tente novamente.\n${event.message || ''}`;
    const runButton = document.querySelector('[data-python-run]');
    const stopButton = document.querySelector('[data-python-stop]');
    if (runButton) runButton.disabled = false;
    if (stopButton) stopButton.hidden = true;
    pythonWorker?.terminate();
    pythonWorker = null;
    pythonWorkerReady = false;
    URL.revokeObjectURL(blobUrl);
  };
  return pythonWorker;
}

function runPythonStudio() {
  const editor = document.querySelector('#python-code');
  const output = document.querySelector('#python-output');
  if (!editor || !output || !editor.value.trim()) { if (output) output.textContent = 'Escreva algum código antes de executar.'; return; }
  programmingCodeDraft = editor.value;
  saveProgrammingDraft();
  const runButton = document.querySelector('[data-python-run]');
  const stopButton = document.querySelector('[data-python-stop]');
  runButton.disabled = true;
  stopButton.hidden = false;
  output.textContent = 'Preparando a execução…';
  try {
    if (!pythonWorker) startPythonWorker();
    pythonWorker.postMessage({ type: 'run', code: editor.value });
    if (pythonRunTimer) window.clearTimeout(pythonRunTimer);
    pythonRunTimer = window.setTimeout(() => stopPythonExecution('Tempo limite atingido. O worker foi encerrado para manter o site responsivo. Revise seu laço e tente novamente.'), 90000);
  } catch (error) {
    stopPythonExecution(`Não foi possível iniciar o ambiente Python.\n${error.message}`);
  }
}

function renderProgrammingPanel(panel) {
  if (panel === 'activities') return renderProgrammingActivities();
  if (panel === 'studio') return renderPythonStudio();
  if (panel === 'practice') return `<div class="program-practice-intro"><h3>Pratique e acompanhe seu progresso</h3><p>Receba perguntas de lógica, Python e desafios. Escreva a resposta, compare com o que aprendeu e marque se conseguiu explicar.</p><button type="button" class="studio-run" data-programming-practice>✎ Começar prática</button></div>`;
  activeReviewTopics = programmingTopics;
  return renderReview();
}

function openProgrammingSubject() {
  activeSubjectName = 'Programação';
  activeProgrammingPanel = 'review';
  activeReviewTopics = programmingTopics;
  homeSections.forEach((section) => { section.hidden = true; });
  subjectView.hidden = false;
  subjectView.innerHTML = `<button class="back-button" id="back-to-subjects" type="button">← Voltar às matérias</button>
    <header class="subject-hero"><span class="subject-hero-icon">🐍</span><div><div class="section-kicker">LÓGICA, PYTHON E PRÁTICA</div><h2>Programação</h2><p>Entenda a lógica, revise Python e resolva desafios passo a passo. Tente responder antes de abrir cada explicação.</p><a class="official-source" href="https://docs.python.org/3/tutorial/" target="_blank" rel="noopener noreferrer">Tutorial oficial do Python ↗</a> <a class="official-source" href="https://www.csunplugged.org/en/computational-thinking/" target="_blank" rel="noopener noreferrer">Pensamento computacional — CS Unplugged ↗</a></div></header>
    <div class="subject-tabs program-tabs" role="tablist" aria-label="Conteúdo de Programação"><button type="button" class="subject-tab active" role="tab" aria-selected="true" data-programming-panel="review">🧠 Revisão</button><button type="button" class="subject-tab" role="tab" aria-selected="false" data-programming-panel="activities">🎯 Atividades</button><button type="button" class="subject-tab" role="tab" aria-selected="false" data-programming-panel="studio">⌨ Code Studio</button><button type="button" class="subject-tab" role="tab" aria-selected="false" data-programming-panel="practice">✎ Minha prática</button></div>
    <div id="programming-panel-content" class="subject-tab-content">${renderProgrammingPanel(activeProgrammingPanel)}</div>`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderKaliSection(section) {
  const sections = {
    foundations: ['Básico', 'Redes', 'Ferramentas', 'Segurança', 'Fundamentos do hacking'],
    attacks: ['Phishing', 'Reconhecimento e varredura de portas', 'SQL Injection', 'XSS — Cross-Site Scripting', 'DoS e DDoS', 'Ataques a senhas', 'Man-in-the-Middle (MitM)'],
    tools: ['Ferramentas', 'Ferramentas em prática'],
  };
  if (section === 'labs') return `<div class="lab-safety-callout"><strong>Pratique somente em ambientes preparados</strong><p>Máquinas intencionalmente vulneráveis devem ficar isoladas, sem exposição à internet. Use apenas sistemas próprios ou laboratórios que autorizam explicitamente o treinamento.</p></div><div class="kali-resource-grid">
    <article class="kali-resource"><span>OWASP</span><h3>Juice Shop</h3><p>Aplicação web intencionalmente vulnerável, feita para treinamento e desafios de segurança.</p><a href="https://owasp.org/www-project-juice-shop/" target="_blank" rel="noopener noreferrer">Abrir projeto oficial ↗</a></article>
    <article class="kali-resource"><span>DVWA</span><h3>Damn Vulnerable Web Application</h3><p>Aplicação de treinamento para estudar vulnerabilidades web em ambiente controlado. Não publique em hospedagem ou servidor acessível pela internet.</p><a href="https://github.com/digininja/DVWA" target="_blank" rel="noopener noreferrer">Abrir repositório oficial ↗</a></article>
    <article class="kali-resource"><span>RAPID7</span><h3>Metasploitable 2</h3><p>Máquina virtual intencionalmente vulnerável, destinada a prática de segurança em laboratório isolado.</p><a href="https://docs.rapid7.com/metasploit/metasploitable-2/" target="_blank" rel="noopener noreferrer">Ler documentação oficial ↗</a></article>
    <article class="kali-resource"><span>OVERTHEWIRE</span><h3>Bandit</h3><p>Jogo de níveis para iniciantes praticarem fundamentos de Linux e terminal.</p><a href="https://overthewire.org/wargames/bandit/" target="_blank" rel="noopener noreferrer">Abrir Bandit ↗</a></article>
    <article class="kali-resource"><span>PORTSWIGGER</span><h3>Web Security Academy</h3><p>Conteúdo gratuito e laboratórios interativos de segurança web, incluindo SQL Injection e XSS.</p><a href="https://portswigger.net/web-security" target="_blank" rel="noopener noreferrer">Abrir Academy ↗</a></article>
  </div>`;
  const selectedTitles = sections[section] || sections.foundations;
  activeReviewTopics = kaliTopics.filter((topic) => selectedTitles.includes(topic.title));
  const toolResources = section === 'tools' ? `<div class="kali-tool-resources"><div class="section-kicker">REFERÊNCIAS OFICIAIS</div><div class="kali-resource-grid">
    <article class="kali-resource"><span>RECONHECIMENTO</span><h3>Nmap</h3><p>Documentação da ferramenta para descoberta de hosts e análise de serviços em redes autorizadas.</p><a href="https://nmap.org/book/toc.html" target="_blank" rel="noopener noreferrer">Ler guia oficial ↗</a></article>
    <article class="kali-resource"><span>ANÁLISE DE REDE</span><h3>Wireshark</h3><p>Captura e análise de protocolos. Trabalhe somente com tráfego próprio ou autorizado.</p><a href="https://www.wireshark.org/docs/" target="_blank" rel="noopener noreferrer">Ler documentação ↗</a></article>
    <article class="kali-resource"><span>SEGURANÇA WEB</span><h3>Burp Suite</h3><p>Ferramentas para inspecionar aplicações web e praticar em laboratórios de treinamento.</p><a href="https://portswigger.net/burp/documentation" target="_blank" rel="noopener noreferrer">Ler documentação ↗</a></article>
    <article class="kali-resource"><span>VALIDAÇÃO CONTROLADA</span><h3>Metasploit Framework</h3><p>Plataforma de validação de segurança; use apenas em máquinas de laboratório dentro do escopo autorizado.</p><a href="https://docs.metasploit.com/" target="_blank" rel="noopener noreferrer">Ler documentação ↗</a></article>
    <article class="kali-resource"><span>AUDITORIA AUTORIZADA</span><h3>Hydra</h3><p>Ferramenta de auditoria de autenticação. Estude limites e proteções com contas fictícias em laboratório isolado.</p><a href="https://www.kali.org/tools/hydra/" target="_blank" rel="noopener noreferrer">Ver página oficial do Kali ↗</a></article>
    <article class="kali-resource"><span>ENUMERAÇÃO WEB</span><h3>Gobuster</h3><p>Ajuda a localizar caminhos em aplicações de teste. Restrinja a ferramenta a alvos próprios e autorizados.</p><a href="https://www.kali.org/tools/gobuster/" target="_blank" rel="noopener noreferrer">Ver página oficial do Kali ↗</a></article>
    <article class="kali-resource"><span>TESTE DE SQLI</span><h3>SQLmap</h3><p>Ferramenta para testar possíveis falhas de SQL Injection em aplicações dentro do escopo autorizado.</p><a href="https://www.kali.org/tools/sqlmap/" target="_blank" rel="noopener noreferrer">Ver página oficial do Kali ↗</a></article>
  </div></div>` : '';
  return `${toolResources}${renderReview()}`;
}

function openKaliSubject() {
  activeSubjectName = 'Kali Linux';
  activeKaliSection = 'foundations';
  const sectionContent = renderKaliSection(activeKaliSection);
  homeSections.forEach((section) => { section.hidden = true; });
  subjectView.hidden = false;
  subjectView.innerHTML = `<button class="back-button" id="back-to-subjects" type="button">← Voltar às matérias</button>
    <header class="subject-hero"><span class="subject-hero-icon">⌁</span><div><div class="section-kicker">FERRAMENTAS E HACKING ÉTICO</div><h2>Kali Linux</h2><p>Conceitos, ataques, ferramentas e laboratórios para aprender segurança com responsabilidade.</p></div></header>
    <div class="kali-section-head"><div class="kali-section-nav" role="tablist" aria-label="Seções de Kali Linux"><button type="button" class="kali-section-button active" role="tab" aria-selected="true" data-kali-section="foundations">Fundamentos do Kali</button><button type="button" class="kali-section-button" role="tab" aria-selected="false" data-kali-section="attacks">Hacking e ataques</button><button type="button" class="kali-section-button" role="tab" aria-selected="false" data-kali-section="tools">Ferramentas</button><button type="button" class="kali-section-button" role="tab" aria-selected="false" data-kali-section="labs">Laboratórios</button></div><button type="button" class="kali-practice-button" data-kali-practice>✎ Praticar perguntas</button></div>
    <div id="kali-section-content" class="subject-tab-content">${sectionContent}</div>`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function networkReferencesMarkup() {
  return `<details class="network-references"><summary>Fontes oficiais e referências confiáveis</summary><ul>
    <li><a href="https://www.cisco.com/site/us/en/learn/topics/networking/what-is-computer-networking.html" target="_blank" rel="noopener noreferrer">Cisco — fundamentos de redes, switches, roteadores e endereços</a></li>
    <li><a href="https://www.rfc-editor.org/rfc/rfc8200.html" target="_blank" rel="noopener noreferrer">IETF / RFC Editor — especificação IPv6 (RFC 8200)</a></li>
    <li><a href="https://www.rfc-editor.org/rfc/rfc9293.html" target="_blank" rel="noopener noreferrer">IETF / RFC Editor — TCP (RFC 9293)</a> · <a href="https://www.rfc-editor.org/rfc/rfc768.html" target="_blank" rel="noopener noreferrer">UDP (RFC 768)</a> · <a href="https://www.rfc-editor.org/rfc/rfc1034.html" target="_blank" rel="noopener noreferrer">DNS (RFC 1034)</a></li>
    <li><a href="https://www.rfc-editor.org/rfc/rfc9110.html" target="_blank" rel="noopener noreferrer">IETF / RFC Editor — semântica HTTP (RFC 9110)</a> · <a href="https://www.rfc-editor.org/rfc/rfc8446.html" target="_blank" rel="noopener noreferrer">TLS 1.3 (RFC 8446)</a></li>
    <li><a href="https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml" target="_blank" rel="noopener noreferrer">IANA — registro oficial de portas e serviços</a></li>
    <li><a href="https://learn.microsoft.com/pt-br/windows-server/administration/windows-commands/ipconfig" target="_blank" rel="noopener noreferrer">Microsoft Learn — ipconfig</a> · <a href="https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/tracert" target="_blank" rel="noopener noreferrer">tracert</a> · <a href="https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/nslookup" target="_blank" rel="noopener noreferrer">nslookup</a></li>
  </ul></details>`;
}

function renderNetworkLevel(level) {
  activeNetworkLevel = level;
  activeReviewTopics = networkTopics.filter((topic) => topic.level === level);
  const descriptions = {
    1: 'Comece pelos conceitos, endereçamento, protocolos essenciais, modelos e noções de desempenho.',
    2: 'Explore portas, equipamentos, comunicação entre camadas, Wi-Fi e a infraestrutura da internet.',
    3: 'Aprenda o propósito dos comandos e uma sequência segura para investigar problemas na própria conexão.',
    4: 'Revise controles defensivos e conceitos de ameaças. As respostas são conceituais; práticas ficam restritas à rede própria ou autorizada.',
  };
  const count = activeReviewTopics.reduce((total, topic) => total + topic.questions.length, 0);
  return `<div class="network-level-intro"><p>${descriptions[level]} <strong>${count} perguntas</strong></p><button type="button" class="network-practice-button" data-network-practice>✎ Praticar respostas</button></div>${renderReview()}${networkReferencesMarkup()}`;
}

function openNetworksSubject() {
  activeSubjectName = 'Redes de Computadores';
  activeNetworkLevel = 1;
  homeSections.forEach((section) => { section.hidden = true; });
  subjectView.hidden = false;
  subjectView.innerHTML = `<button class="back-button" id="back-to-subjects" type="button">← Voltar às matérias</button>
    <header class="subject-hero"><span class="subject-hero-icon">⇄</span><div><div class="section-kicker">FUNDAMENTOS, PRÁTICA E SEGURANÇA</div><h2>Redes de Computadores</h2><p>Avance por níveis: comece com o essencial e explore os temas adicionais quando estiver pronta.</p></div></header>
    <div class="subject-tabs network-level-tabs" role="tablist" aria-label="Níveis de Redes de Computadores"><button type="button" class="subject-tab active" role="tab" aria-selected="true" data-network-level="1">1 · Fundamentos</button><button type="button" class="subject-tab" role="tab" aria-selected="false" data-network-level="2">2 · Protocolos e infraestrutura</button><button type="button" class="subject-tab" role="tab" aria-selected="false" data-network-level="3">3 · Diagnóstico prático</button><button type="button" class="subject-tab" role="tab" aria-selected="false" data-network-level="4">4 · Segurança</button></div>
    <div id="network-level-content" class="subject-tab-content">${renderNetworkLevel(activeNetworkLevel)}</div>`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function databaseReferencesMarkup() {
  return `<details class="network-references"><summary>Documentação oficial para continuar estudando</summary><ul>
    <li><a href="https://www.postgresql.org/docs/current/tutorial-sql.html" target="_blank" rel="noopener noreferrer">PostgreSQL — introdução a SQL</a></li>
    <li><a href="https://www.postgresql.org/docs/current/sql-select.html" target="_blank" rel="noopener noreferrer">PostgreSQL — SELECT, WHERE, GROUP BY e ORDER BY</a></li>
    <li><a href="https://www.postgresql.org/docs/current/ddl-constraints.html" target="_blank" rel="noopener noreferrer">PostgreSQL — chaves e restrições de integridade</a></li>
  </ul></details>`;
}

function databaseReviewMarkup() {
  return `${renderReview()}${databaseReferencesMarkup()}`;
}

function openDatabaseSubject() {
  activeSubjectName = 'Banco de Dados';
  activeReviewTopics = databaseTopics;
  homeSections.forEach((section) => { section.hidden = true; });
  subjectView.hidden = false;
  subjectView.innerHTML = `<button class="back-button" id="back-to-subjects" type="button">← Voltar às matérias</button>
    <header class="subject-hero"><span class="subject-hero-icon">▤</span><div><div class="section-kicker">DADOS, TABELAS E SQL</div><h2>Banco de Dados</h2><p>Revise os conceitos fundamentais, comandos SQL e relacionamentos entre tabelas com respostas curtas.</p></div></header>
    <div class="subject-tabs" role="tablist" aria-label="Conteúdo de Banco de Dados"><button type="button" class="subject-tab active" role="tab" aria-selected="true" data-tab="review">🧠 Revisão rápida</button><button type="button" class="subject-tab" role="tab" aria-selected="false" data-tab="practice">✎ Responder com minhas palavras</button></div>
    <div id="subject-tab-content" class="subject-tab-content">${databaseReviewMarkup()}</div>`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function cyberReferencesMarkup() {
  return `<details class="network-references cyber-references"><summary>Fontes oficiais e referências confiáveis</summary><ul>
    <li><a href="https://www.nist.gov/cyberframework" target="_blank" rel="noopener noreferrer">NIST — Cybersecurity Framework 2.0</a> · <a href="https://csrc.nist.gov/pubs/sp/800/61/r3/final" target="_blank" rel="noopener noreferrer">resposta a incidentes</a></li>
    <li><a href="https://www.iso.org/standard/27001" target="_blank" rel="noopener noreferrer">ISO/IEC 27001</a> · <a href="https://www.iso.org/standard/75652.html" target="_blank" rel="noopener noreferrer">ISO/IEC 27002</a> · <a href="https://www.iso.org/standard/19011" target="_blank" rel="noopener noreferrer">ISO 19011</a> · <a href="https://abnt.org.br/institucional/" target="_blank" rel="noopener noreferrer">ABNT</a></li>
    <li><a href="https://www.cisa.gov/secure-our-world" target="_blank" rel="noopener noreferrer">CISA — phishing, senhas, MFA e atualizações</a></li>
    <li><a href="https://owasp.org/projects/top-ten" target="_blank" rel="noopener noreferrer">OWASP Top 10</a> · <a href="https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html" target="_blank" rel="noopener noreferrer">SQL Injection</a> · <a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html" target="_blank" rel="noopener noreferrer">XSS</a></li>
    <li><a href="https://cheatsheetseries.owasp.org/cheatsheets/CSRF_Prevention_Cheat_Sheet.html" target="_blank" rel="noopener noreferrer">OWASP — prevenção de CSRF</a> · <a href="https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html" target="_blank" rel="noopener noreferrer">armazenamento de senhas</a> · <a href="https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html" target="_blank" rel="noopener noreferrer">gestão de segredos</a></li>
    <li><a href="https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados" target="_blank" rel="noopener noreferrer">ANPD — direitos dos titulares e proteção de dados</a> · <a href="https://www.gov.br/pt-br/lgpd/lei-no-13-709-18-lei-geral-de-protecao-de-dados-lgpd" target="_blank" rel="noopener noreferrer">Lei nº 13.709/2018 (LGPD)</a></li>
    <li><a href="https://www.gov.br/anpd/pt-br/assuntos/incidente-de-seguranca" target="_blank" rel="noopener noreferrer">ANPD — incidentes de segurança com dados pessoais</a></li>
  </ul></details>`;
}

function renderCyberSection(section) {
  if (section === 'exam') {
    const topics = [
      ['principles', 'Princípios da segurança e ciclo de vida da informação'],
      ['threats', 'Ameaças e vulnerabilidades'],
      ['standards', 'Normas de segurança da informação'],
    ];
    return `<div class="subject-tabs cyber-exam-nav" role="tablist" aria-label="Tópicos das questões de Cibersegurança">${topics.map(([key, label]) => `<button type="button" class="subject-tab ${activeCyberExamTopic === key ? 'active' : ''}" role="tab" aria-selected="${activeCyberExamTopic === key}" data-cyber-exam-topic="${key}">${label}</button>`).join('')}</div><div id="cyber-exam-content">${renderCyberExamTopic(activeCyberExamTopic)}</div>${cyberReferencesMarkup()}`;
  }
  const groups = cyberTopics.filter((topic) => topic.area === section);
  activeReviewTopics = groups;
  const count = groups.reduce((total, topic) => total + topic.questions.length, 0);
  const copy = {
    fundamentals: 'Comece pelos termos essenciais, objetivos de proteção, risco e princípios de segurança.',
    threats: 'Aprenda a reconhecer ameaças e diferenças entre tipos de golpe e malware, com foco em prevenção.',
    defense: 'Revise proteção de contas, dispositivos, redes, criptografia e cópias de segurança.',
    applications: 'Conecte segurança ao desenvolvimento web, bancos de dados, APIs e armazenamento seguro.',
    operations: 'Estude monitoramento, recuperação e práticas defensivas em ambientes próprios ou autorizados.',
    privacy: 'Conheça conceitos gerais da LGPD e proteção de dados pessoais. Consulte a ANPD para orientações atuais.',
  };
  return `<div class="network-level-intro"><p>${copy[section]} <strong>${count} perguntas</strong></p><button type="button" class="network-practice-button" data-cyber-practice>✎ Praticar esta matéria</button></div>${renderReview()}${cyberReferencesMarkup()}`;
}

function renderCyberExamTopic(topic) {
  const ranges = { principles: [1, 10], threats: [11, 20], standards: [21, 30] };
  const [first, last] = ranges[topic] || ranges.principles;
  activeExamQuestions = cyberExamQuestions.filter((question) => question.number >= first && question.number <= last)
    .map((question, index) => ({ ...question, number: index + 1 }));
  return renderExam(activeExamQuestions);
}

function openCybersecuritySubject() {
  activeSubjectName = 'Cibersegurança';
  activeCyberExamTopic = 'principles';
  activeExamQuestions = cyberExamQuestions;
  activeCyberSection = 'fundamentals';
  homeSections.forEach((section) => { section.hidden = true; });
  subjectView.hidden = false;
  subjectView.innerHTML = `<button class="back-button" id="back-to-subjects" type="button">← Voltar às matérias</button>
    <header class="subject-hero"><span class="subject-hero-icon">♧</span><div><div class="section-kicker">FUNDAMENTOS, DEFESA E PRIVACIDADE</div><h2>Cibersegurança</h2><p>Revisão em níveis, do básico a temas aprofundados. Os conteúdos sobre ataques são conceituais e voltados a reconhecimento, prevenção e ambientes autorizados.</p></div></header>
    <div class="subject-tabs cyber-nav" role="tablist" aria-label="Seções de Cibersegurança"><button type="button" class="subject-tab active" role="tab" aria-selected="true" data-cyber-section="fundamentals">1 · Fundamentos</button><button type="button" class="subject-tab" role="tab" aria-selected="false" data-cyber-section="threats">2 · Ataques e ameaças</button><button type="button" class="subject-tab" role="tab" aria-selected="false" data-cyber-section="defense">3 · Defesa e proteção</button><button type="button" class="subject-tab" role="tab" aria-selected="false" data-cyber-section="applications">4 · Segurança de aplicações</button><button type="button" class="subject-tab" role="tab" aria-selected="false" data-cyber-section="operations">5 · Monitoramento e prática</button><button type="button" class="subject-tab" role="tab" aria-selected="false" data-cyber-section="privacy">6 · Privacidade e LGPD</button><button type="button" class="subject-tab" role="tab" aria-selected="false" data-cyber-section="exam">📝 Questões da prova</button></div>
    <div id="cyber-section-content" class="subject-tab-content">${renderCyberSection(activeCyberSection)}</div>`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function shuffle(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function questionsFor(subjectNames) {
  return questionBank.filter((subject) => subjectNames.includes(subject.subject)).flatMap((subject) =>
    subject.topics.flatMap((topic) => topic.questions.map((question) => ({ subject: subject.subject, topic: topic.title, question }))),
  );
}

function practiceCardMarkup() {
  if (!practiceState.questions.length) return '<div class="practice-empty">Marque pelo menos uma matéria para começar.</div>';
  const total = practiceState.questions.length;
  const current = practiceState.questions[practiceState.position % total];
  const round = Math.floor(practiceState.position / total) + 1;
  const questionNumber = (practiceState.position % total) + 1;
  return `<div class="practice-stats"><span>${practiceState.answered} respondidas</span><span>✦ ${practiceState.mastered} dominadas</span><span>↻ ${practiceState.revisit} para revisar</span></div>
    <article class="practice-question-card"><div class="practice-question-meta"><span>${current.subject}</span><span>${current.topic}</span></div><div class="practice-progress">Pergunta ${questionNumber} de ${total}${round > 1 ? ` · rodada ${round}` : ''}</div><h3>${current.question}</h3>
      <label class="answer-label" for="practice-answer">Sua resposta</label><textarea id="practice-answer" rows="4" placeholder="Escreva com suas palavras..."></textarea>
      <button id="practice-submit" class="practice-submit" type="button" disabled>Finalizar resposta</button>
      <div id="practice-evaluation" class="practice-evaluation" hidden><p>Compare sua explicação com o que estudou. Não existe correção automática: respostas certas podem ser escritas de várias formas.</p><div><button type="button" class="rate-mastered" data-practice-rate="mastered">Consegui explicar</button><button type="button" class="rate-review" data-practice-rate="revisit">Quero revisar de novo</button></div></div>
      <button type="button" class="practice-skip" data-practice-skip>Pular esta pergunta</button>
    </article>`;
}

function refreshPracticeCard() {
  const panel = document.querySelector('#practice-card');
  if (panel) panel.innerHTML = practiceCardMarkup();
}

let practiceReturnMarkup = null;
function renderPracticePage(initialSubjects = subjects.map((subject) => subject.name)) {
  practiceReturnMarkup = subjectView && !subjectView.hidden ? subjectView.innerHTML : null;
  if (pythonWorker) {
    const editor = document.querySelector('#python-code');
    if (editor) programmingCodeDraft = editor.value;
    stopPythonExecution(null);
  }
  const selected = subjects.map((subject) => subject.name).filter((name) => initialSubjects.includes(name));
  practiceState = { selectedSubjects: selected, questions: shuffle(questionsFor(selected)), position: 0, answered: 0, mastered: 0, revisit: 0 };
  homeSections.forEach((section) => { section.hidden = true; });
  subjectView.hidden = false;
  const totalQuestions = questionBank.reduce((sum, subject) => sum + subject.topics.reduce((topicSum, topic) => topicSum + topic.questions.length, 0), 0);
  subjectView.innerHTML = `<button class="back-button" id="back-to-subjects" type="button">← Voltar às matérias</button>
    <header class="subject-hero practice-hero"><span class="subject-hero-icon">✎</span><div><div class="section-kicker">PRATIQUE ATIVAMENTE</div><h2>Responder com minhas palavras</h2><p>Sorteie perguntas, escreva sua explicação e acompanhe o que já domina.</p></div></header>
    <section class="practice-workspace"><details class="practice-filter" open><summary><span>Escolher matérias</span><span id="selected-subject-count">${selected.length} de ${subjects.length} selecionadas</span></summary>
      <div class="practice-filter-actions"><span>${totalQuestions} perguntas no total</span><button type="button" data-practice-select="all">Marcar todas</button><button type="button" data-practice-select="none">Limpar</button></div>
      <div class="practice-subject-options">${subjects.map((subject) => `<label><input type="checkbox" data-practice-subject="${subject.name}" ${selected.includes(subject.name) ? 'checked' : ''}><span>${subject.name}</span></label>`).join('')}</div>
    </details><div id="practice-card">${practiceCardMarkup()}</div></section>`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

grid.addEventListener('click', (event) => {
  const card = event.target.closest('[data-subject]');
  if (!card) return;
  if (card.dataset.subject === 'Matemática e Lógica') { openMathSubject(); return; }
  if (card.dataset.subject === 'Computação em Nuvem') { openCloudSubject(); return; }
  if (card.dataset.subject === 'Desenvolvimento Web') { openWebSubject(); return; }
  if (card.dataset.subject === 'Comandos do Terminal') { openTerminalSubject(); return; }
  if (card.dataset.subject === 'Kali Linux') { openKaliSubject(); return; }
  if (card.dataset.subject === 'Programação') { openProgrammingSubject(); return; }
  if (card.dataset.subject === 'Redes de Computadores') { openNetworksSubject(); return; }
  if (card.dataset.subject === 'Cibersegurança') { openCybersecuritySubject(); return; }
  if (card.dataset.subject === 'Banco de Dados') { openDatabaseSubject(); return; }
  const subject = subjects.find((item) => item.name === card.dataset.subject);
  renderPracticePage([subject.name]);
});

subjectView.addEventListener('click', (event) => {
  if (event.target.closest('#back-to-subjects')) {
    if (pythonWorker) stopPythonExecution(null);
    if (practiceReturnMarkup !== null) {
      subjectView.innerHTML = practiceReturnMarkup;
      subjectView.hidden = false;
      practiceReturnMarkup = null;
    } else {
      subjectView.hidden = true;
      homeSections.forEach((section) => { section.hidden = false; });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const programmingPanelButton = event.target.closest('[data-programming-panel]');
  if (programmingPanelButton) {
    if (document.querySelector('#python-code')) { programmingCodeDraft = document.querySelector('#python-code').value; saveProgrammingDraft(); }
    if (pythonWorker && activeProgrammingPanel === 'studio') stopPythonExecution('Execução parada ao sair do Code Studio.');
    activeProgrammingPanel = programmingPanelButton.dataset.programmingPanel;
    subjectView.querySelectorAll('[data-programming-panel]').forEach((button) => {
      const active = button === programmingPanelButton;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', String(active));
    });
    document.querySelector('#programming-panel-content').innerHTML = renderProgrammingPanel(activeProgrammingPanel);
    return;
  }
  const networkLevelButton = event.target.closest('[data-network-level]');
  if (networkLevelButton) {
    const level = Number(networkLevelButton.dataset.networkLevel);
    subjectView.querySelectorAll('[data-network-level]').forEach((button) => {
      const active = button === networkLevelButton;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', String(active));
    });
    document.querySelector('#network-level-content').innerHTML = renderNetworkLevel(level);
    return;
  }
  const cyberSectionButton = event.target.closest('[data-cyber-section]');
  if (cyberSectionButton) {
    activeCyberSection = cyberSectionButton.dataset.cyberSection;
    subjectView.querySelectorAll('[data-cyber-section]').forEach((button) => {
      const active = button === cyberSectionButton;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', String(active));
    });
    document.querySelector('#cyber-section-content').innerHTML = renderCyberSection(activeCyberSection);
    return;
  }
  const cyberExamTopicButton = event.target.closest('[data-cyber-exam-topic]');
  if (cyberExamTopicButton) {
    activeCyberExamTopic = cyberExamTopicButton.dataset.cyberExamTopic;
    subjectView.querySelectorAll('[data-cyber-exam-topic]').forEach((button) => {
      const active = button === cyberExamTopicButton;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', String(active));
    });
    document.querySelector('#cyber-exam-content').innerHTML = renderCyberExamTopic(activeCyberExamTopic);
    return;
  }
  if (event.target.closest('[data-cyber-practice]')) { renderPracticePage(['Cibersegurança']); return; }
  if (event.target.closest('[data-network-practice]')) { renderPracticePage(['Redes de Computadores']); return; }
  if (event.target.closest('[data-programming-practice]')) { renderPracticePage(['Programação']); return; }
  if (event.target.closest('[data-python-run]')) { runPythonStudio(); return; }
  if (event.target.closest('[data-python-stop]')) { stopPythonExecution(); return; }
  if (event.target.closest('[data-python-clear]')) {
    const output = document.querySelector('#python-output');
    if (output) output.textContent = 'Saída limpa. Execute o código para ver o resultado.';
    return;
  }
  const kaliSectionButton = event.target.closest('[data-kali-section]');
  if (kaliSectionButton) {
    activeKaliSection = kaliSectionButton.dataset.kaliSection;
    subjectView.querySelectorAll('[data-kali-section]').forEach((button) => {
      const active = button === kaliSectionButton;
      button.classList.toggle('active', active);
      button.setAttribute('aria-selected', String(active));
    });
    document.querySelector('#kali-section-content').innerHTML = renderKaliSection(activeKaliSection);
    return;
  }
  if (event.target.closest('[data-kali-practice]')) { renderPracticePage(['Kali Linux']); return; }
  const tab = event.target.closest('[data-tab]');
  if (tab) {
    if (tab.dataset.tab === 'practice') { renderPracticePage([activeSubjectName]); return; }
    subjectView.querySelectorAll('.subject-tab').forEach((button) => {
      const isActive = button === tab;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-selected', String(isActive));
    });
    const tabContent = document.querySelector('#subject-tab-content');
    if (tab.dataset.tab === 'simulator') {
      tabContent.innerHTML = terminalSimulatorMarkup();
      renderSimulatorOutput();
      document.querySelector('#sim-command')?.focus();
    } else tabContent.innerHTML = tab.dataset.tab === 'exam' ? renderExam(activeExamQuestions) : activeSubjectName === 'Banco de Dados' ? databaseReviewMarkup() : renderReview();
    return;
  }
  const simCommandButton = event.target.closest('[data-sim-command]');
  if (simCommandButton) {
    const input = document.querySelector('#sim-command');
    if (input) { input.value = simCommandButton.dataset.simCommand; input.focus(); }
    return;
  }
  if (event.target.closest('[data-sim-reset]')) {
    resetSimulator();
    renderSimulatorOutput();
    document.querySelector('#sim-command')?.focus();
    return;
  }
  const examTopic = event.target.closest('[data-exam-topic]');
  if (examTopic) {
    activeWebExamTopic = examTopic.dataset.examTopic;
    activeExamQuestions = activeWebExamTopic === 'javascript' ? webJavaScriptExamQuestions : activeWebExamTopic === 'css' ? webCssExamQuestions : webHtmlExamQuestions;
    document.querySelector('#subject-tab-content').innerHTML = renderExam(activeExamQuestions);
    return;
  }
  const selectSubjects = event.target.closest('[data-practice-select]');
  if (selectSubjects) {
    subjectView.querySelectorAll('[data-practice-subject]').forEach((checkbox) => { checkbox.checked = selectSubjects.dataset.practiceSelect === 'all'; });
    updatePracticeSelection();
    return;
  }
  const rateButton = event.target.closest('[data-practice-rate]');
  if (rateButton) {
    practiceState.answered += 1;
    if (rateButton.dataset.practiceRate === 'mastered') practiceState.mastered += 1;
    else practiceState.revisit += 1;
    practiceState.position += 1;
    refreshPracticeCard();
    return;
  }
  if (event.target.closest('[data-practice-skip]')) { practiceState.position += 1; refreshPracticeCard(); return; }
  if (event.target.closest('#practice-submit')) {
    const answer = subjectView.querySelector('#practice-answer');
    if (answer.value.trim()) {
      answer.readOnly = true;
      subjectView.querySelector('#practice-submit').hidden = true;
      subjectView.querySelector('#practice-evaluation').hidden = false;
    }
    return;
  }
  const option = event.target.closest('[data-option]');
  const revealButton = event.target.closest('.reveal-answer');
  if (!option && !revealButton) return;
  const card = event.target.closest('.exam-card');
  const question = activeExamQuestions.find((item) => item.number === Number(card.dataset.question));
  const feedback = card.querySelector('.answer-feedback');
  if (option) {
    const selected = Number(option.dataset.option);
    card.querySelectorAll('.exam-option').forEach((button) => {
      button.disabled = true;
      if (Number(button.dataset.option) === question.answer) button.classList.add('correct');
      if (button === option && selected !== question.answer) button.classList.add('incorrect');
    });
    feedback.innerHTML = `<strong>${selected === question.answer ? 'Resposta correta!' : `A resposta correta é ${String.fromCharCode(65 + question.answer)}.`}</strong><span>${escapeHTML(question.explanation)}</span>`;
  } else {
    revealButton.hidden = true;
    feedback.innerHTML = `<strong>${escapeHTML(question.answerText)}</strong><span>${escapeHTML(question.explanation)}</span>`;
  }
  feedback.hidden = false;
});

subjectView.addEventListener('submit', (event) => {
  if (event.target.id !== 'sim-form') return;
  event.preventDefault();
  const input = document.querySelector('#sim-command');
  executeSimCommand(input.value);
  input.value = '';
  input.focus();
});

subjectView.addEventListener('input', (event) => {
  if (event.target.id === 'practice-answer') subjectView.querySelector('#practice-submit').disabled = !event.target.value.trim();
  if (event.target.id === 'python-code') { programmingCodeDraft = event.target.value; saveProgrammingDraft(); }
});
subjectView.addEventListener('change', (event) => {
  const pythonEditor = document.querySelector('#python-code');
  if (event.target.id === 'python-example' && pythonEditor) {
    const examples = {
      variables: 'nome = "Lia"\nidade = 20\nprint("Olá,", nome)\nprint("Idade:", idade)',
      conditions: 'nota = 8\nif nota >= 7:\n    print("Aprovado")\nelse:\n    print("Precisa revisar")',
      loops: 'for numero in range(1, 6):\n    print(numero)',
      function: 'def dobro(numero):\n    return numero * 2\n\nprint(dobro(5))',
      collections: 'frutas = ["maçã", "uva", "pera"]\nprecos = {"maçã": 2.5, "uva": 4.0}\nprint(frutas[1])\nprint(precos["uva"])',
      empty: '',
    };
    if (examples[event.target.value] !== undefined) {
      pythonEditor.value = examples[event.target.value];
      programmingCodeDraft = pythonEditor.value;
      saveProgrammingDraft();
      document.querySelector('#python-output').textContent = 'Exemplo carregado. Clique em Executar para testar.';
    }
    return;
  }
  if (!event.target.matches('[data-practice-subject]')) return;
  updatePracticeSelection();
});

function updatePracticeSelection() {
  practiceState.selectedSubjects = [...subjectView.querySelectorAll('[data-practice-subject]:checked')].map((checkbox) => checkbox.dataset.practiceSubject);
  practiceState.questions = shuffle(questionsFor(practiceState.selectedSubjects));
  practiceState.position = 0;
  const count = document.querySelector('#selected-subject-count');
  if (count) count.textContent = `${practiceState.selectedSubjects.length} de ${subjects.length} selecionadas`;
  refreshPracticeCard();
}

const notesStorageKey = 'sobrevivacod-notes-v1';
const studyPlanStorageKey = 'sobrevivacod-study-plan-v1';
let savedStudyNotes = (() => { try { return JSON.parse(localStorage.getItem(notesStorageKey) || '[]'); } catch { return []; } })();
const studyPlanInput = document.querySelector('#study-plan-input');
const studyPlanStatus = document.querySelector('#study-plan-status');
const studyNoteList = document.querySelector('#study-note-list');
const studyNoteForm = document.querySelector('#study-note-form');
const studyNoteSubject = document.querySelector('#study-note-subject');
if (studyPlanInput) studyPlanInput.value = (() => { try { return localStorage.getItem(studyPlanStorageKey) || ''; } catch { return ''; } })();
if (studyNoteSubject) studyNoteSubject.innerHTML = subjects.map((subject) => `<option value="${escapeHTML(subject.name)}">${escapeHTML(subject.name)}</option>`).join('');
function renderStudyNotes() {
  if (!studyNoteList) return;
  studyNoteList.innerHTML = savedStudyNotes.length ? [...savedStudyNotes].reverse().map((note) => `
    <article class="saved-study-note"><div class="saved-study-note-top"><span>${escapeHTML(note.subject)}</span><time>${new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(note.createdAt))}</time></div>
      <h4>${escapeHTML(note.title)}</h4><p>${escapeHTML(note.content).replace(/\n/g, '<br>')}</p><button type="button" data-delete-study-note="${escapeHTML(note.id)}" aria-label="Excluir anotação ${escapeHTML(note.title)}">Excluir</button></article>`).join('') : '<p class="study-notes-empty">Suas anotações salvas aparecerão aqui.</p>';
}
renderStudyNotes();
document.querySelectorAll('[data-notes-tab]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-notes-tab]').forEach((tab) => { const active = tab === button; tab.classList.toggle('active', active); tab.setAttribute('aria-selected', String(active)); });
    document.querySelectorAll('[data-notes-panel]').forEach((panel) => { panel.hidden = panel.dataset.notesPanel !== button.dataset.notesTab; });
  });
});
document.querySelector('#save-study-plan')?.addEventListener('click', () => {
  try { localStorage.setItem(studyPlanStorageKey, studyPlanInput.value); studyPlanStatus.textContent = 'Plano salvo neste navegador.'; }
  catch { studyPlanStatus.textContent = 'Não foi possível salvar neste navegador.'; }
});
studyNoteForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.querySelector('#study-note-title').value.trim();
  const content = document.querySelector('#study-note-content').value.trim();
  if (!title || !content) return;
  savedStudyNotes.push({ id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, subject: studyNoteSubject.value, title, content, createdAt: new Date().toISOString() });
  try { localStorage.setItem(notesStorageKey, JSON.stringify(savedStudyNotes)); }
  catch { document.querySelector('#study-note-status').textContent = 'Não foi possível salvar neste navegador.'; return; }
  studyNoteForm.reset(); renderStudyNotes(); document.querySelector('#study-note-status').textContent = 'Anotação salva!';
});
studyNoteList?.addEventListener('click', (event) => {
  const button = event.target.closest('[data-delete-study-note]');
  if (!button) return;
  savedStudyNotes = savedStudyNotes.filter((note) => note.id !== button.dataset.deleteStudyNote);
  try { localStorage.setItem(notesStorageKey, JSON.stringify(savedStudyNotes)); } catch {}
  renderStudyNotes();
});
function showHome() {
  if (subjectView.hidden) return;
  if (pythonWorker) stopPythonExecution(null);
  subjectView.hidden = true;
  homeSections.forEach((section) => { section.hidden = false; });
  document.querySelector('.breadcrumb strong').textContent = 'Início';
}
document.querySelector('.brand').addEventListener('click', showHome);
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    if (link.getAttribute('href') === '#practice') { renderPracticePage(); return; }
    showHome();
    if (link.getAttribute('href') === '#materias') document.querySelector('#materias').scrollIntoView({ behavior: 'smooth' });
  });
});
searchInput.addEventListener('input', () => renderSubjects(searchInput.value));
document.querySelector('#dialog-close').addEventListener('click', () => dialog.close());
document.querySelector('#dialog-ok').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
document.querySelector('#today-label').textContent = new Intl.DateTimeFormat('pt-BR', { weekday: 'short', day: 'numeric', month: 'short' }).format(new Date()).replace('.', '');
document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); searchInput.focus(); }
  if ((event.metaKey || event.ctrlKey) && event.key === 'Enter' && document.querySelector('#python-code')) { event.preventDefault(); runPythonStudio(); }
});

const settingsDialog = document.querySelector('#settings-dialog');
const zoomControl = document.querySelector('#zoom-control');
const zoomValue = document.querySelector('#zoom-value');
const themeStorageKey = 'sobrevivacod-theme-v1';
const zoomStorageKey = 'sobrevivacod-zoom-v1';
function applyTheme(theme, save = true) {
  const selectedTheme = theme === 'light' ? 'light' : 'dark';
  document.documentElement.dataset.theme = selectedTheme;
  document.querySelectorAll('[data-theme-choice]').forEach((button) => {
    const active = button.dataset.themeChoice === selectedTheme;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.content = selectedTheme === 'light' ? '#F3F2F5' : '#2B2931';
  if (save) { try { localStorage.setItem(themeStorageKey, selectedTheme); } catch {} }
}
function applyZoom(value, save = true) {
  const zoom = Math.max(80, Math.min(120, Number(value) || 100));
  document.documentElement.style.setProperty('--site-zoom', String(zoom / 100));
  if (zoomControl) zoomControl.value = String(zoom);
  if (zoomValue) zoomValue.textContent = `${zoom}%`;
  if (save) { try { localStorage.setItem(zoomStorageKey, String(zoom)); } catch {} }
}
let preferredTheme = 'dark'; let preferredZoom = 100;
try { preferredTheme = localStorage.getItem(themeStorageKey) || 'dark'; preferredZoom = Number(localStorage.getItem(zoomStorageKey)) || 100; } catch {}
applyTheme(preferredTheme, false); applyZoom(preferredZoom, false);
document.querySelector('#settings-open').addEventListener('click', () => settingsDialog.showModal());
document.querySelector('#settings-close').addEventListener('click', () => settingsDialog.close());
settingsDialog.addEventListener('click', (event) => { if (event.target === settingsDialog) settingsDialog.close(); });
zoomControl.addEventListener('input', () => applyZoom(zoomControl.value));
document.querySelector('#zoom-reset').addEventListener('click', () => applyZoom(100));
document.querySelectorAll('[data-theme-choice]').forEach((button) => button.addEventListener('click', () => applyTheme(button.dataset.themeChoice)));
renderSubjects();





