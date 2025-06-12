# AC5: Gerenciador de Lista de Tarefas - Implementação Completa

## Visão Geral
Esta implementação atende a todas as instruções da atividade AC5, criando um gerenciador de lista de tarefas interativo via JavaScript.

## Arquivos Implementados

### 1. `todo.js`
- Contém toda a lógica JavaScript para o gerenciador de tarefas.
- Implementa as funções de adicionar, remover e listar tarefas.
- Utiliza `prompt` para interação com o usuário e `alert` para feedback.

### 2. `index.html`
- Um arquivo HTML simples que carrega e executa o `todo.js`.
- Fornece instruções ao usuário sobre como interagir com o script através do console do navegador.

## Instruções e Conceitos Implementados

### ✅ 1. Variáveis e Tipos de Dados:
- `let tasks = [];`: Uma variável `tasks` (array) é declarada para armazenar as tarefas.
- `newTask` (string) e `choice` (string/número) são usados para representar as tarefas e as escolhas do usuário.

### ✅ 2. Operadores e Controle de Fluxo:
- **Operadores de comparação:** Utilizados para verificar a escolha do usuário no menu.
- **Loop `while`:** Mantém o programa em execução, permitindo que o usuário gerencie a lista de tarefas até que escolha sair.
- **`switch-case`:** Usado para direcionar a execução do programa com base na opção escolhida pelo usuário (adicionar, remover, listar, sair).

### ✅ 3. Funções com Arrays e Strings:
- **`addTask()`:** Adiciona uma nova tarefa ao array `tasks` usando `tasks.push()`. Utiliza `prompt` para obter a entrada do usuário e `alert` para confirmar a adição.
- **`removeTask()`:** Remove uma tarefa específica do array `tasks` usando `tasks.splice()`. Solicita ao usuário o número da tarefa a ser removida e valida a entrada.
- **`listTasks()`:** Lista todas as tarefas presentes no array `tasks`. Constrói uma string formatada para exibição usando concatenação de strings e um loop `for`, e exibe-a via `alert`.

## Como Testar

1.  Abra o arquivo `index.html` em um navegador web (Google Chrome, Firefox, etc.).
2.  Uma mensagem na página irá instruí-lo a abrir o console do navegador (geralmente pressionando `F12` e selecionando a aba "Console").
3.  O script `todo.js` será executado automaticamente, e você verá um `prompt` na tela solicitando que escolha uma opção (Adicionar, Remover, Listar, Sair).
4.  Interaja com o programa através dos `prompts` e observe os `alerts` com os resultados das operações.

## Observações Técnicas

- O script `todo.js` é um programa de console interativo, utilizando `prompt()` e `alert()` para a interface com o usuário.
- Todas as instruções e conceitos solicitados na atividade foram implementados e comentados no código.
- A solução é em JavaScript puro (Vanilla JS), sem dependências externas.

Se tiver qualquer dúvida ou precisar de mais alguma coisa, por favor, me avise!

