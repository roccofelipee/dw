# InvestSmart - Simulador de Investimentos

## Descrição do Projeto

O InvestSmart é uma plataforma web educacional desenvolvida para auxiliar usuários na tomada de decisões de investimento através de simulações interativas e análise de dados econômicos em tempo real. O projeto foi desenvolvido como parte da Avaliação AP2 da disciplina de Desenvolvimento Web, demonstrando a aplicação prática de tecnologias front-end modernas.

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica das páginas
- **CSS3**: Estilização responsiva com Mobile First
- **JavaScript ES6+**: Funcionalidades interativas e consumo de APIs
- **Chart.js**: Biblioteca para geração de gráficos interativos
- **Font Awesome**: Ícones vetoriais
- **Google Fonts**: Tipografia moderna (Inter e Poppins)

## Funcionalidades Principais

### 1. Questionário Interativo de Perfil de Investidor
- Sistema de slides navegáveis com animações suaves
- Validação de formulários em tempo real
- Geração de relatório personalizado baseado nas respostas
- Gráficos de projeção de rentabilidade

### 2. Dados Econômicos em Tempo Real
- Consumo da API Awesome API para cotações de moedas
- Integração com Brasil API para feriados nacionais
- Exibição responsiva de dados econômicos
- Tratamento de erros e estados de carregamento

### 3. Simulador de Investimentos
- Calculadora de rentabilidade interativa
- Comparação entre diferentes tipos de investimento
- Gráficos dinâmicos com Chart.js
- Interface intuitiva para entrada de dados

### 4. Design Responsivo
- Abordagem Mobile First
- Layout adaptativo para diferentes dispositivos
- Uso de CSS Grid e Flexbox
- Tipografia escalável e acessível

## Estrutura do Projeto

```
ap2/
├── index.html              # Página principal com questionário
├── dados-economicos.html   # Página de dados econômicos
├── investimentos.html      # Página de simulação de investimentos
├── css/
│   └── style.css          # Estilos principais
├── js/
│   ├── main.js            # JavaScript principal
│   ├── economic-data.js   # Lógica para dados econômicos
│   └── investments.js     # Lógica para investimentos
└── imagens/               # Diretório para imagens (se necessário)
```

## APIs Utilizadas

### Awesome API
- **Endpoint**: `https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL`
- **Função**: Obter cotações atualizadas de moedas
- **Dados**: Dólar, Euro e Bitcoin em relação ao Real

### Brasil API
- **Endpoint**: `https://brasilapi.com.br/api/feriados/v1/{ano}`
- **Função**: Obter lista de feriados nacionais
- **Dados**: Feriados do ano atual

## Instalação e Uso

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexão com a internet (para APIs e CDNs)

### Como executar
1. Faça o download ou clone o projeto
2. Abra o arquivo `index.html` em um navegador web
3. Navegue pelas diferentes páginas usando o menu superior
4. Experimente as funcionalidades interativas

### Navegação
- **Home**: Questionário de perfil de investidor
- **Dados Econômicos**: Informações econômicas em tempo real
- **Investimentos**: Simulador de rentabilidade

## Características Técnicas

### HTML Semântico
- Uso de tags semânticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Estrutura acessível com atributos ARIA
- Meta tags para SEO e responsividade

### CSS Responsivo
- Metodologia Mobile First
- Variáveis CSS para consistência de design
- Grid e Flexbox para layouts flexíveis
- Animações e transições suaves

### JavaScript Modular
- Código organizado em módulos funcionais
- Validação de formulários robusta
- Tratamento de erros em requisições de API
- Manipulação dinâmica do DOM

### Performance e Acessibilidade
- Carregamento otimizado de recursos
- Suporte a leitores de tela
- Contraste adequado de cores
- Navegação por teclado

## Validação dos Requisitos da AP2

✅ **Uso de HTML, CSS e JavaScript**: Implementado com tecnologias modernas
✅ **Design Responsivo**: Mobile First com breakpoints adequados
✅ **Consumo de APIs**: Duas APIs diferentes integradas
✅ **Gráficos Interativos**: Chart.js para visualização de dados
✅ **Formulários com Validação**: Validação em tempo real
✅ **Navegação entre Páginas**: Menu responsivo funcional
✅ **Código Bem Estruturado**: Organização modular e comentários

## Melhorias Futuras

- Integração com mais APIs financeiras
- Sistema de autenticação de usuários
- Histórico de simulações
- Comparação de carteiras de investimento
- Notificações de mercado em tempo real

## Autor

Projeto desenvolvido para a disciplina de Desenvolvimento Web - AP2
Instituição: [Nome da Instituição]
Período: 2025.1

## Licença

Este projeto é destinado exclusivamente para fins educacionais.

