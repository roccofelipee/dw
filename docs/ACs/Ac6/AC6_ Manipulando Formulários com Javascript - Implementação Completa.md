# AC6: Manipulando Formulários com Javascript - Implementação Completa

## Visão Geral
Esta implementação atende a todas as 12 questões da atividade AC6, criando um formulário completo com validações em JavaScript, feedback visual e funcionalidades avançadas.

## Arquivos Implementados

### 1. `index.html`
- Formulário HTML completo com todos os campos solicitados
- Estrutura semântica e acessível
- Campos: Nome, Email, Telefone, Assunto, Mensagem, Upload de Imagem

### 2. `styles.css`
- Estilização responsiva e moderna
- Feedback visual para campos inválidos (bordas vermelhas)
- Design limpo e profissional
- Suporte para spinner de carregamento

### 3. `script.js`
- Implementação completa de todas as funcionalidades JavaScript
- Validações em tempo real
- Máscara de telefone automática
- Pré-visualização de imagens

### 4. `success.html`
- Página de redirecionamento após envio bem-sucedido

## Questões Implementadas

### ✅ Questão 1: Acessar valores dos inputs
- Implementado através das propriedades `.value` dos elementos
- Exemplo: `nameInput.value`, `emailInput.value`

### ✅ Questão 2: Atualizar conteúdo da página em tempo real
- Listeners de evento `input` e `change` nos campos
- Exibição dinâmica dos valores na parte inferior da página
- Atualização sem necessidade de clicar no botão

### ✅ Questão 3: Validação antes do envio
- Nome obrigatório
- Email no formato correto (regex)
- Mensagem obrigatória

### ✅ Questão 4: Redefinir formulário após envio
- `form.reset()` após envio bem-sucedido
- Limpeza de todas as mensagens de erro
- Reset da pré-visualização de imagem

### ✅ Questão 5: Desativar botão até preenchimento completo
- Validação em tempo real com `toggleSubmitButton()`
- Botão habilitado apenas quando todas as validações passam
- Feedback visual imediato

### ✅ Questão 6: Spinner de carregamento
- Exibição de "Carregando..." durante o envio
- Ocultação do botão de envio durante o processo
- Simulação de 2 segundos de carregamento

### ✅ Questão 7: Mensagem de sucesso e redirecionamento
- Mensagem "Formulário enviado com sucesso!" em verde
- Redirecionamento automático após 3 segundos
- Página `success.html` dedicada

### ✅ Questão 8: Validação de tamanho da mensagem
- Mínimo de 100 caracteres obrigatório
- Mensagem de erro específica para tamanho insuficiente
- Validação em tempo real

### ✅ Questão 9: Feedback visual para campos inválidos
- Bordas vermelhas para campos com erro
- Mensagens de erro específicas abaixo de cada campo
- Classe CSS `.invalid` aplicada dinamicamente

### ✅ Questão 10: Campo de telefone com máscara
- Formato: (XX) XX XXXXX-XXXX
- Aplicação automática durante a digitação
- Remove caracteres não numéricos

### ✅ Questão 11: Campo de seleção de assunto
- Opções: Elogio, Reclamação, Sugestão
- Validação obrigatória
- Mensagem de erro se não selecionado

### ✅ Questão 12: Upload de imagem com pré-visualização
- Campo de arquivo para imagens
- Pré-visualização usando FileReader
- Limpeza automática após reset do formulário

## Funcionalidades Extras Implementadas

### Comentários Detalhados
- Cada questão está claramente comentada no código JavaScript
- Explicações precisas de como cada funcionalidade foi implementada

### Validação de Email Robusta
- Regex completo para validação de formato de email
- Suporte a domínios internacionais

### Design Responsivo
- Funciona em desktop e mobile
- Layout centralizado e adaptável

### Acessibilidade
- Labels associados aos inputs
- Estrutura semântica HTML5
- Contraste adequado de cores

## Como Testar

1. Abra o arquivo `index.html` em um navegador
2. Teste cada campo individualmente para ver as validações
3. Observe o feedback visual em tempo real
4. Preencha todos os campos corretamente
5. Clique em "Enviar" para ver o spinner e redirecionamento
6. Verifique a página de sucesso

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna e responsiva
- **JavaScript ES6+**: Funcionalidades interativas
- **FileReader API**: Pré-visualização de imagens
- **Regex**: Validação de email e formatação

## Observações Técnicas

- Código totalmente comentado conforme solicitado
- Implementação vanilla JavaScript (sem frameworks)
- Compatível com navegadores modernos
- Código limpo e bem estruturado
- Seguindo boas práticas de desenvolvimento web

