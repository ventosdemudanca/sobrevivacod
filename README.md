# SobrevivaCod — Central de Estudos

Uma interface local para organizar matérias de estudo. A tela inicial reúne nove temas. **Matemática e Lógica** e **Computação em Nuvem** têm perguntas de revisão com respostas e questões interativas de prova. **Desenvolvimento Web** tem revisão e listas de prova separadas para HTML, CSS e JavaScript. **Comandos do Terminal** oferece revisão rápida, prática de autoavaliação e um terminal simulado em memória, sem seção de prova. O simulador aceita um conjunto limitado de comandos e opera apenas em arquivos fictícios dentro da página; ele não executa comandos do sistema nem acessa arquivos reais. **Programação** reúne revisão de lógica e Python, atividades interativas (prever saída, encontrar erros e resolver desafios em etapas), autoavaliação e um Code Studio que executa Python no navegador via Pyodide. O rascunho do editor fica salvo no armazenamento local do navegador. O primeiro carregamento do Code Studio precisa de internet; `input()` interativo ainda não está disponível. **Redes de Computadores** organiza revisão básica e adicional em quatro níveis: Fundamentos, Protocolos e infraestrutura, Diagnóstico prático e Segurança. As respostas são curtas e acompanhadas por links para referências técnicas e documentação oficial; não há seção de prova nessa matéria. **Kali Linux** tem quatro áreas independentes — Fundamentos do Kali, Hacking e ataques, Ferramentas e Laboratórios — com perguntas de revisão, explicações curtas, sequências visuais dos ataques, práticas seguras e links para documentação oficial. O conteúdo é voltado a estudo em sistemas próprios ou ambientes explicitamente autorizados; não há seção de prova nessa matéria. **Cibersegurança** reúne revisão básica e aprofundada em seis áreas: Fundamentos, Ataques e ameaças, Defesa e proteção, Segurança de aplicações, Monitoramento e prática, e Privacidade e LGPD. Inclui links para NIST, CISA, OWASP e ANPD. A aba de questões da prova separa os exercícios em três listas: Princípios da segurança e ciclo de vida da informação, Ameaças e vulnerabilidades, e Normas de segurança da informação. Cada lista tem numeração própria, correção imediata e explicações. **Banco de Dados** traz revisão rápida com respostas em Conceitos, SQL e Relacionamentos, além de autoavaliação e links para a documentação oficial do PostgreSQL. O modo **Responder com minhas palavras** reúne perguntas das nove matérias, com sorteio geral ou por matérias selecionadas e autoavaliação da resposta.

## Como abrir

1. Abra a pasta do projeto no Explorador de Arquivos.
2. Dê dois cliques em `index.html`.
3. O software será aberto no navegador. Não precisa instalar nada nem ter conexão com a internet para usar a interface básica.

Também é possível abrir a pasta no Visual Studio Code e usar a extensão **Live Server** para visualizar alterações enquanto aprende e edita os arquivos. Para usar o Code Studio, mantenha uma conexão com a internet na primeira execução para carregar o Pyodide.

## Estrutura

- `index.html` — conteúdo e estrutura da tela.
- `styles.css` — cores, cartões e adaptação para celular e computador.
- `app.js` — matérias, busca e interação dos cartões.
- `question-bank.js` — perguntas usadas no modo de prática.

Os arquivos usam HTML, CSS e JavaScript sem bibliotecas. As fontes externas são um detalhe visual opcional; se estiver sem internet, o navegador usa fontes locais semelhantes.
