// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const subjectSelect = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const imageInput = document.getElementById('image');
    const submitButton = document.getElementById('submitButton');
    const spinner = document.getElementById('spinner');
    const resultDiv = document.getElementById('result');
    const imagePreviewDiv = document.getElementById('imagePreview');

    // Função para exibir mensagens de erro
    function displayError(inputElement, message) {
        const formGroup = inputElement.closest('.form-group');
        let errorDiv = formGroup.querySelector('.error-message');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            formGroup.appendChild(errorDiv);
        }
        errorDiv.textContent = message;
        inputElement.classList.add('invalid');
    }

    // Função para limpar mensagens de erro
    function clearError(inputElement) {
        const formGroup = inputElement.closest('.form-group');
        const errorDiv = formGroup.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
        inputElement.classList.remove('invalid');
    }

    // Questão 1: Como você pode acessar os valores dos inputs do formulário?
    // Os valores são acessados diretamente pelas propriedades .value dos elementos input, select e textarea.
    // Exemplo: nameInput.value, emailInput.value, etc.

    // Questão 2: Atualizar o conteúdo de uma página web com o conteúdo dos campos (escrever na página sem clicar no botão)?
    // Isso pode ser feito adicionando listeners de evento 'input' ou 'change' aos campos.
    // Para fins de demonstração, vamos exibir os valores em um div de resultado enquanto o usuário digita.
    function updateResultDiv() {
        resultDiv.innerHTML = `
            <p>Nome: ${nameInput.value}</p>
            <p>Email: ${emailInput.value}</p>
            <p>Telefone: ${phoneInput.value}</p>
            <p>Assunto: ${subjectSelect.value}</p>
            <p>Mensagem: ${messageInput.value}</p>
        `;
    }

    nameInput.addEventListener('input', updateResultDiv);
    emailInput.addEventListener('input', updateResultDiv);
    phoneInput.addEventListener('input', updateResultDiv);
    subjectSelect.addEventListener('change', updateResultDiv);
    messageInput.addEventListener('input', updateResultDiv);

    // Questão 3: Validar cada entrada do formulário antes de enviar o form?
    // Questão 8: Adicionar Validação de Tamanho da Mensagem (pelo menos 100 caracteres).
    // Questão 9: Adicionar Feedback Visual para Campos Inválidos (bordas vermelhas).
    // Questão 11: Exiba uma mensagem de erro se nenhum assunto for selecionado.
    function validateForm() {
        let isValid = true;

        // Validação do Nome (obrigatório)
        if (nameInput.value.trim() === '') {
            displayError(nameInput, 'Nome é obrigatório.');
            isValid = false;
        } else {
            clearError(nameInput);
        }

        // Validação do Email (formato)
        const emailPattern = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
        if (emailInput.value.trim() === '') {
            displayError(emailInput, 'Email é obrigatório.');
            isValid = false;
        } else if (!emailPattern.test(emailInput.value)) {
            displayError(emailInput, 'Formato de email inválido.');
            isValid = false;
        } else {
            clearError(emailInput);
        }

        // Validação do Assunto (obrigatório)
        if (subjectSelect.value === '') {
            displayError(subjectSelect, 'Selecione um assunto.');
            isValid = false;
        } else {
            clearError(subjectSelect);
        }

        // Validação da Mensagem (obrigatória e tamanho mínimo)
        if (messageInput.value.trim() === '') {
            displayError(messageInput, 'Mensagem é obrigatória.');
            isValid = false;
        } else if (messageInput.value.trim().length < 100) {
            displayError(messageInput, 'A mensagem deve ter pelo menos 100 caracteres.');
            isValid = false;
        } else {
            clearError(messageInput);
        }

        return isValid;
    }

    // Questão 5: Desativar o botão enviar até que todas as entradas do formulário sejam preenchidas?
    // A validação é feita em tempo real e o botão é ativado/desativado com base nela.
    function toggleSubmitButton() {
        submitButton.disabled = !validateForm();
    }

    // Adiciona listeners para validação em tempo real
    nameInput.addEventListener('input', toggleSubmitButton);
    emailInput.addEventListener('input', toggleSubmitButton);
    phoneInput.addEventListener('input', toggleSubmitButton);
    subjectSelect.addEventListener('change', toggleSubmitButton);
    messageInput.addEventListener('input', toggleSubmitButton);
    imageInput.addEventListener('change', toggleSubmitButton); // Também para o campo de imagem

    // Validação inicial ao carregar a página
    toggleSubmitButton();

    // Questão 10: Adicionar um Campo de Telefone com Máscara. [ (país) (ddd) xxxxx-xxxx ]
    // Usando uma função simples para aplicar a máscara.
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
        let formattedValue = '';

        if (value.length > 0) {
            formattedValue += '(' + value.substring(0, 2);
        }
        if (value.length > 2) {
            formattedValue += ') ' + value.substring(2, 4);
        }
        if (value.length > 4) {
            formattedValue += ' ' + value.substring(4, 9);
        }
        if (value.length > 9) {
            formattedValue += '-' + value.substring(9, 13);
        }
        e.target.value = formattedValue;
    });

    // Questão 12: Adicionar um Campo de Arquivo ao Formulário para permitir o upload de imagens.
    // Modifique o JavaScript para Exibir a Pré-visualização do Arquivo Selecionado
    // FileReader: Usa FileReader para ler o arquivo de imagem e exibir a pré-visualização.
    imageInput.addEventListener('change', function() {
        imagePreviewDiv.innerHTML = ''; // Limpa pré-visualização anterior
        const file = this.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = 'Pré-visualização da Imagem';
                imagePreviewDiv.appendChild(img);
            };

            reader.readAsDataURL(file);
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        if (!validateForm()) {
            resultDiv.textContent = 'Por favor, corrija os erros no formulário.';
            resultDiv.style.color = 'red';
            return;
        }

        // Questão 6: Mostrar um botão giratório (spinner) de carregamento enquanto o formulário está sendo enviado?
        submitButton.style.display = 'none';
        spinner.style.display = 'block';
        resultDiv.textContent = ''; // Limpa mensagens anteriores

        // Simula um envio de formulário assíncrono
        setTimeout(() => {
            // Questão 7: Exibir uma mensagem de sucesso após o envio do formulário e depois redirecionar para outra página?
            resultDiv.textContent = 'Formulário enviado com sucesso!';
            resultDiv.style.color = 'green';

            // Questão 4: Redefinir as entradas do formulário após enviar o formulário?
            form.reset();
            clearAllErrors(); // Limpa todos os erros após o reset
            imagePreviewDiv.innerHTML = ''; // Limpa pré-visualização da imagem
            toggleSubmitButton(); // Reativa/desativa o botão após o reset

            submitButton.style.display = 'block';
            spinner.style.display = 'none';

            // Redireciona após 3 segundos
            setTimeout(() => {
                window.location.href = 'success.html'; // Redireciona para uma página de sucesso
            }, 3000);

        }, 2000); // Simula 2 segundos de carregamento
    });

    function clearAllErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(el => el.remove());
        const invalidInputs = document.querySelectorAll('.invalid');
        invalidInputs.forEach(el => el.classList.remove('invalid'));
    }
});


