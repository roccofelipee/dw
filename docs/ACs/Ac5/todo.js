// todo.js - Gerenciador de Lista de Tarefas

// Questão 1: Variáveis e Tipos de Dados
// Declare uma variável que será uma lista (array) vazia para armazenar as tarefas.
let tasks = []; // Array para armazenar as tarefas (strings)

// Função para adicionar uma nova tarefa
function addTask() {
    // Use diferentes tipos de dados, como strings para as tarefas
    const newTask = prompt("Digite a nova tarefa:");
    if (newTask) { // Verifica se o usuário digitou algo
        tasks.push(newTask.trim()); // Adiciona a tarefa ao array, removendo espaços em branco extras
        alert(`Tarefa "${newTask.trim()}" adicionada com sucesso!`);
    } else {
        alert("Nenhuma tarefa foi digitada.");
    }
}

// Função para remover uma tarefa específica
function removeTask() {
    if (tasks.length === 0) {
        alert("Não há tarefas para remover.");
        return;
    }

    // Listar todas as tarefas para que o usuário possa escolher qual remover
    listTasks();
    const taskIndex = prompt("Digite o NÚMERO da tarefa que deseja remover:");

    // Use operadores de comparação para verificar a escolha do usuário.
    // Use números para a escolha do usuário.
    const index = parseInt(taskIndex) - 1; // Converte para índice baseado em 0

    if (index >= 0 && index < tasks.length) {
        const removedTask = tasks.splice(index, 1); // Remove a tarefa do array
        alert(`Tarefa "${removedTask[0]}" removida com sucesso!`);
    } else if (taskIndex !== null) { // Verifica se o usuário não cancelou o prompt
        alert("Número de tarefa inválido.");
    }
}

// Função para listar todas as tarefas
function listTasks() {
    if (tasks.length === 0) {
        alert("Nenhuma tarefa na lista.");
        return;
    }

    // Manipulação de strings para exibir mensagens
    let taskList = "Lista de Tarefas:\n";
    for (let i = 0; i < tasks.length; i++) {
        taskList += `${i + 1}. ${tasks[i]}\n`;
    }
    alert(taskList);
}

// Questão 2: Operadores e Controle de Fluxo
// Use um loop para permitir que o usuário continue gerenciando a lista até que ele escolha sair.
let running = true;
while (running) {
    const choice = prompt(
        "Gerenciador de Tarefas\n\n" +
        "1. Adicionar Tarefa\n" +
        "2. Remover Tarefa\n" +
        "3. Listar Tarefas\n" +
        "4. Sair\n\n" +
        "Escolha uma opção:"
    );

    // Use operadores de comparação para verificar a escolha do usuário.
    // switch-case: Usado para tratar as opções do menu.
    switch (choice) {
        case "1":
            addTask();
            break;
        case "2":
            removeTask();
            break;
        case "3":
            listTasks();
            break;
        case "4":
            running = false;
            alert("Saindo do gerenciador de tarefas. Até mais!");
            break;
        case null: // Usuário clicou em cancelar
            running = false;
            alert("Saindo do gerenciador de tarefas. Até mais!");
            break;
        default:
            alert("Opção inválida. Por favor, escolha um número de 1 a 4.");
            break;
    }
}


