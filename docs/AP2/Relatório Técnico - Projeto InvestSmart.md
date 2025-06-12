# Relatório Técnico - Projeto InvestSmart

**Disciplina**: Desenvolvimento Web  
**Avaliação**: AP2  
**Período**: 2025.1  
**Autor**: [Seu Nome]  
**Data**: 11 de junho de 2025

---

## Resumo Executivo

O projeto InvestSmart representa uma implementação completa de uma aplicação web educacional voltada para simulação de investimentos e análise de dados econômicos. Desenvolvido utilizando as tecnologias fundamentais da web (HTML5, CSS3 e JavaScript ES6+), o projeto demonstra a aplicação prática de conceitos avançados de desenvolvimento front-end, incluindo design responsivo, consumo de APIs externas, validação de formulários e visualização de dados através de gráficos interativos.

A aplicação foi concebida seguindo as melhores práticas de desenvolvimento web moderno, com ênfase especial na experiência do usuário, acessibilidade e performance. O resultado é uma plataforma funcional que não apenas atende aos requisitos técnicos estabelecidos, mas também oferece valor educacional real para usuários interessados em aprender sobre investimentos.

## 1. Introdução e Objetivos

### 1.1 Contexto do Projeto

O mercado financeiro brasileiro tem experimentado um crescimento significativo no número de investidores pessoa física nos últimos anos. Segundo dados da B3 (Brasil, Bolsa, Balcão), o número de investidores cadastrados ultrapassou a marca de 5 milhões em 2023, representando um crescimento exponencial em relação aos anos anteriores [1]. Este cenário evidencia a necessidade crescente de ferramentas educacionais que auxiliem novos investidores na compreensão dos diferentes tipos de investimento disponíveis no mercado.

Neste contexto, o projeto InvestSmart foi desenvolvido como uma resposta a essa demanda, oferecendo uma plataforma web interativa que combina educação financeira com tecnologia moderna. A aplicação permite que usuários explorem diferentes cenários de investimento através de simulações baseadas em dados reais de mercado, contribuindo para uma tomada de decisão mais informada e consciente.

### 1.2 Objetivos Específicos

O desenvolvimento do InvestSmart teve como objetivos principais:

**Objetivo Técnico**: Demonstrar proficiência no uso de tecnologias web fundamentais (HTML5, CSS3 e JavaScript) através da implementação de uma aplicação completa e funcional que atenda aos critérios de avaliação estabelecidos para a AP2.

**Objetivo Educacional**: Criar uma ferramenta que contribua para a educação financeira dos usuários, oferecendo simulações realistas de investimentos e acesso a dados econômicos atualizados que auxiliem na compreensão do mercado financeiro.

**Objetivo de Usabilidade**: Desenvolver uma interface intuitiva e responsiva que proporcione uma experiência de usuário consistente em diferentes dispositivos, desde smartphones até desktops, seguindo os princípios de design centrado no usuário.

**Objetivo de Performance**: Implementar uma aplicação otimizada que carregue rapidamente e responda de forma eficiente às interações do usuário, mesmo quando consumindo dados de APIs externas.

## 2. Metodologia de Desenvolvimento

### 2.1 Abordagem de Design

O desenvolvimento do InvestSmart seguiu uma abordagem metodológica estruturada, baseada nas melhores práticas de desenvolvimento web moderno. A metodologia adotada pode ser caracterizada pelos seguintes princípios fundamentais:

**Mobile First Design**: A estratégia de desenvolvimento priorizou a experiência em dispositivos móveis, reconhecendo que uma parcela significativa dos usuários acessa aplicações web através de smartphones e tablets. Esta abordagem garantiu que a aplicação fosse otimizada para telas menores desde o início do desenvolvimento, com posterior adaptação para telas maiores através de media queries progressivas.

**Progressive Enhancement**: O projeto foi desenvolvido seguindo o princípio de melhoria progressiva, onde a funcionalidade básica é garantida em todos os navegadores, com recursos avançados sendo adicionados gradualmente para navegadores que os suportam. Esta abordagem assegura compatibilidade ampla e graceful degradation quando necessário.

**Semantic HTML First**: A estrutura da aplicação foi construída utilizando HTML semântico como base, garantindo acessibilidade e SEO adequados antes da aplicação de estilos e funcionalidades JavaScript. Esta abordagem resulta em código mais limpo, manutenível e acessível.

### 2.2 Arquitetura da Informação

A arquitetura da informação foi cuidadosamente planejada para proporcionar uma navegação intuitiva e um fluxo de usuário lógico. A aplicação foi estruturada em três seções principais:

**Seção Principal (Home)**: Contém o questionário interativo de perfil de investidor, implementado como um sistema de slides que guia o usuário através de perguntas progressivas sobre seus objetivos financeiros, tolerância ao risco e horizonte de investimento.

**Seção de Dados Econômicos**: Apresenta informações econômicas atualizadas obtidas através de APIs externas, incluindo cotações de moedas e calendário de feriados nacionais, fornecendo contexto econômico relevante para decisões de investimento.

**Seção de Investimentos**: Oferece ferramentas de simulação que permitem aos usuários comparar diferentes tipos de investimento e visualizar projeções de rentabilidade através de gráficos interativos.

### 2.3 Tecnologias e Ferramentas

A seleção de tecnologias foi baseada em critérios de compatibilidade, performance e facilidade de manutenção:

**HTML5**: Utilizado para estruturação semântica do conteúdo, aproveitando elementos como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<footer>` para criar uma hierarquia clara e acessível.

**CSS3**: Empregado para estilização responsiva, utilizando recursos modernos como CSS Grid, Flexbox, variáveis CSS (custom properties) e media queries para criar layouts adaptativos e visualmente atraentes.

**JavaScript ES6+**: Implementado para funcionalidades interativas, manipulação do DOM, validação de formulários e consumo de APIs, utilizando recursos modernos como arrow functions, async/await, destructuring e modules.

**Chart.js**: Biblioteca externa escolhida para geração de gráficos interativos devido à sua facilidade de uso, documentação abrangente e compatibilidade com diferentes tipos de visualização de dados.

**Font Awesome**: Utilizado para ícones vetoriais, proporcionando consistência visual e escalabilidade em diferentes resoluções de tela.

**Google Fonts**: Integração com as fontes Inter e Poppins para garantir tipografia moderna e legível em todos os dispositivos.

## 3. Implementação Técnica

### 3.1 Estrutura HTML Semântica

A implementação da estrutura HTML seguiu rigorosamente os princípios de marcação semântica, resultando em código que não apenas funciona corretamente, mas também comunica significado tanto para navegadores quanto para tecnologias assistivas. A estrutura base de cada página segue o padrão:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <!-- Meta tags essenciais para SEO e responsividade -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título Específico da Página</title>
    <meta name="description" content="Descrição relevante para SEO">
</head>
<body>
    <header class="header">
        <nav class="nav">
            <!-- Navegação principal -->
        </nav>
    </header>
    
    <main class="main">
        <section class="hero-section">
            <!-- Conteúdo principal da página -->
        </section>
    </main>
    
    <footer class="footer">
        <!-- Informações de rodapé -->
    </footer>
</body>
</html>
```

Esta estrutura garante que o conteúdo seja interpretado corretamente por leitores de tela e outros dispositivos assistivos, além de fornecer uma base sólida para a aplicação de estilos CSS e funcionalidades JavaScript.

### 3.2 Sistema de Design CSS

O sistema de design foi implementado utilizando uma abordagem baseada em variáveis CSS (custom properties), permitindo consistência visual e facilidade de manutenção. As variáveis foram organizadas em categorias lógicas:

**Variáveis de Cor**: Definindo uma paleta coesa que inclui cores primárias, secundárias, de estado (sucesso, erro, aviso) e escalas de cinza para texto e backgrounds.

**Variáveis Tipográficas**: Estabelecendo uma escala tipográfica harmoniosa com tamanhos de fonte, pesos e alturas de linha consistentes.

**Variáveis de Espaçamento**: Criando um sistema de espaçamento baseado em múltiplos de uma unidade base, garantindo ritmo visual consistente.

**Variáveis de Layout**: Definindo breakpoints, raios de borda, sombras e outros elementos de design que contribuem para a identidade visual da aplicação.

A implementação do design responsivo seguiu a metodologia Mobile First, com media queries progressivas:

```css
/* Estilos base para mobile */
.container {
    width: 100%;
    padding: 0 1rem;
}

/* Tablet - 768px e acima */
@media screen and (min-width: 768px) {
    .container {
        max-width: 768px;
        margin: 0 auto;
    }
}

/* Desktop - 1024px e acima */
@media screen and (min-width: 1024px) {
    .container {
        max-width: 1024px;
    }
}
```

### 3.3 Funcionalidades JavaScript

A implementação JavaScript foi estruturada de forma modular, com separação clara de responsabilidades entre diferentes arquivos:

**main.js**: Contém a lógica principal da aplicação, incluindo navegação do header, sistema de slides do questionário, validação de formulários e geração de relatórios.

**economic-data.js**: Responsável pelo consumo das APIs de dados econômicos, tratamento de erros e renderização das informações na interface.

**investments.js**: Implementa a lógica de simulação de investimentos e geração de gráficos interativos.

A arquitetura JavaScript seguiu padrões modernos de desenvolvimento:

```javascript
// Exemplo de função assíncrona para consumo de API
async function fetchExchangeRates() {
    try {
        const response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro ao buscar taxas de câmbio:", error);
        return null;
    }
}
```

### 3.4 Integração com APIs Externas

A aplicação integra duas APIs externas para fornecer dados atualizados:

**Awesome API**: Utilizada para obter cotações de moedas em tempo real. A API retorna dados estruturados em JSON com informações sobre dólar comercial, euro e bitcoin em relação ao real brasileiro.

**Brasil API**: Empregada para obter informações sobre feriados nacionais, permitindo que usuários tenham contexto sobre dias não úteis que podem afetar o mercado financeiro.

A implementação do consumo de APIs incluiu tratamento robusto de erros, estados de carregamento e fallbacks para situações onde os dados não estão disponíveis:

```javascript
// Tratamento de estados de carregamento e erro
function renderEconomicData() {
    const container = document.getElementById("economic-data-container");
    
    // Estado de carregamento
    container.innerHTML = `
        <div class="loading-state">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Carregando dados econômicos...</p>
        </div>
    `;
    
    // Busca dados e renderiza ou exibe erro
    Promise.all([fetchExchangeRates(), fetchNationalHolidays()])
        .then(([exchangeData, holidaysData]) => {
            renderDataCards(exchangeData, holidaysData);
        })
        .catch(error => {
            renderErrorState(error);
        });
}
```

## 4. Funcionalidades Implementadas

### 4.1 Questionário Interativo de Perfil de Investidor

O questionário representa uma das funcionalidades mais complexas da aplicação, implementado como um sistema de slides navegáveis que guia o usuário através de uma série de perguntas estruturadas para determinar seu perfil de investidor. A implementação inclui:

**Sistema de Navegação por Slides**: Desenvolvido com JavaScript vanilla, o sistema permite navegação fluida entre diferentes etapas do questionário, com animações CSS que proporcionam feedback visual durante as transições.

**Validação Progressiva**: Cada etapa do questionário inclui validação específica que impede o avanço caso informações obrigatórias não tenham sido fornecidas. A validação é realizada em tempo real, proporcionando feedback imediato ao usuário.

**Barra de Progresso Dinâmica**: Uma barra de progresso visual indica ao usuário sua posição atual no questionário e o progresso restante, melhorando a experiência de usuário e reduzindo a taxa de abandono.

**Geração de Relatório Personalizado**: Com base nas respostas fornecidas, o sistema gera um relatório personalizado que inclui recomendações de investimento adequadas ao perfil identificado, acompanhadas de gráficos de projeção de rentabilidade.

A lógica de recomendação implementada considera três perfis principais de investidor:

**Conservador**: Prioriza segurança e previsibilidade, com recomendações focadas em renda fixa (70%) e fundos DI (30%).

**Moderado**: Busca equilíbrio entre segurança e rentabilidade, com distribuição entre renda fixa (40%), fundos multimercado (30%) e ações de dividendos (30%).

**Arrojado**: Aceita maior risco em busca de retornos superiores, com foco em ações de crescimento (50%), fundos de ações/ETFs (30%) e criptomoedas (20%).

### 4.2 Dados Econômicos em Tempo Real

A seção de dados econômicos fornece informações atualizadas que são essenciais para a tomada de decisões de investimento informadas. A implementação inclui:

**Cotações de Moedas**: Integração com a Awesome API para obter cotações atualizadas de dólar comercial, euro e bitcoin em relação ao real brasileiro. Os dados são apresentados de forma clara e acessível, com indicação da fonte e timestamp da última atualização.

**Calendário de Feriados**: Utilização da Brasil API para exibir os próximos feriados nacionais, informação relevante para investidores que precisam considerar dias não úteis em suas estratégias.

**Tratamento de Indisponibilidade**: A aplicação inclui tratamento robusto para situações onde as APIs estão indisponíveis, exibindo mensagens informativas e mantendo a funcionalidade básica da aplicação.

**Cache Local**: Implementação de cache simples para reduzir o número de requisições às APIs e melhorar a performance da aplicação.

### 4.3 Simulador de Investimentos

O simulador permite que usuários explorem diferentes cenários de investimento através de uma interface intuitiva e gráficos interativos:

**Calculadora de Rentabilidade**: Interface que permite inserir valor inicial, aportes mensais e período de investimento, com cálculos automáticos de projeções baseadas em diferentes taxas de rentabilidade.

**Comparação de Investimentos**: Visualização simultânea de diferentes tipos de investimento (poupança, renda fixa, renda variável) em um único gráfico, facilitando a comparação de performance.

**Gráficos Interativos**: Utilização da biblioteca Chart.js para criar visualizações dinâmicas que respondem às interações do usuário, incluindo tooltips informativos e legendas claras.

**Responsividade dos Gráficos**: Os gráficos são totalmente responsivos, adaptando-se automaticamente a diferentes tamanhos de tela mantendo legibilidade e funcionalidade.

### 4.4 Design Responsivo e Acessibilidade

A implementação do design responsivo seguiu as melhores práticas de desenvolvimento web moderno:

**Mobile First**: Todos os componentes foram desenvolvidos primeiro para dispositivos móveis, com melhorias progressivas para telas maiores.

**Breakpoints Estratégicos**: Definição de breakpoints em 768px (tablet) e 1024px (desktop) para garantir experiência otimizada em diferentes dispositivos.

**Tipografia Responsiva**: Uso de unidades relativas (rem, em) e media queries para garantir legibilidade em todas as resoluções.

**Imagens Responsivas**: Implementação de técnicas para otimização de imagens em diferentes densidades de pixel.

A acessibilidade foi considerada em todos os aspectos do desenvolvimento:

**Navegação por Teclado**: Todos os elementos interativos são acessíveis via teclado, com indicadores visuais claros de foco.

**Atributos ARIA**: Uso apropriado de atributos ARIA para melhorar a experiência com leitores de tela.

**Contraste de Cores**: Paleta de cores que atende aos padrões WCAG 2.1 para contraste adequado.

**Texto Alternativo**: Descrições apropriadas para elementos visuais e ícones.

## 5. Análise de Performance e Otimização

### 5.1 Métricas de Performance

A performance da aplicação foi cuidadosamente otimizada através de várias estratégias:

**Carregamento de Recursos**: Implementação de carregamento assíncrono para bibliotecas externas, reduzindo o tempo de carregamento inicial da página.

**Minificação de Código**: Embora não implementada nesta versão de desenvolvimento, a estrutura do código permite fácil minificação para produção.

**Otimização de Imagens**: Uso de formatos de imagem modernos e técnicas de lazy loading quando aplicável.

**Cache de API**: Implementação de cache simples para reduzir requisições desnecessárias às APIs externas.

### 5.2 Compatibilidade de Navegadores

A aplicação foi testada e otimizada para compatibilidade com os principais navegadores:

**Navegadores Modernos**: Suporte completo para Chrome 90+, Firefox 88+, Safari 14+, Edge 90+.

**Graceful Degradation**: Funcionalidade básica mantida em navegadores mais antigos, com recursos avançados disponíveis progressivamente.

**Polyfills**: Uso seletivo de polyfills para garantir compatibilidade com recursos JavaScript modernos em navegadores mais antigos.

### 5.3 Otimizações Implementadas

**Lazy Loading de Bibliotecas**: Chart.js é carregado dinamicamente apenas quando necessário, reduzindo o tempo de carregamento inicial.

**Debouncing de Eventos**: Implementação de debouncing para eventos de redimensionamento e input, melhorando a responsividade da interface.

**Otimização de Consultas DOM**: Minimização de consultas ao DOM através de cache de elementos frequentemente acessados.

**Tratamento Eficiente de Erros**: Sistema de tratamento de erros que não compromete a performance da aplicação.

## 6. Validação dos Requisitos

### 6.1 Checklist de Requisitos da AP2

A aplicação atende integralmente aos requisitos estabelecidos para a avaliação:

✅ **Uso de HTML, CSS e JavaScript**: Implementação completa utilizando as três tecnologias fundamentais da web, com código bem estruturado e comentado.

✅ **Design Responsivo**: Implementação Mobile First com breakpoints adequados e layout que se adapta perfeitamente a diferentes dispositivos e orientações.

✅ **Consumo de APIs**: Integração com duas APIs externas distintas (Awesome API e Brasil API) com tratamento adequado de erros e estados de carregamento.

✅ **Gráficos Interativos**: Implementação de gráficos dinâmicos utilizando Chart.js, com interatividade e responsividade adequadas.

✅ **Formulários com Validação**: Sistema robusto de validação de formulários com feedback em tempo real e prevenção de envio de dados inválidos.

✅ **Navegação entre Páginas**: Menu de navegação responsivo e funcional, com indicação clara da página atual e transições suaves.

✅ **Código Bem Estruturado**: Organização modular do código, uso de comentários explicativos e seguimento de boas práticas de desenvolvimento.

### 6.2 Funcionalidades Adicionais

Além dos requisitos mínimos, a aplicação inclui funcionalidades que demonstram conhecimento avançado:

**Sistema de Slides Interativo**: Implementação complexa de navegação por slides com animações e validação progressiva.

**Geração Dinâmica de Relatórios**: Sistema que gera conteúdo personalizado baseado nas interações do usuário.

**Tratamento Robusto de APIs**: Implementação de fallbacks, cache e tratamento de diferentes cenários de erro.

**Acessibilidade Avançada**: Consideração de usuários com necessidades especiais através de implementação de padrões WCAG.

## 7. Conclusões e Aprendizados

### 7.1 Objetivos Alcançados

O desenvolvimento do projeto InvestSmart resultou no cumprimento integral dos objetivos estabelecidos inicialmente. Do ponto de vista técnico, a aplicação demonstra proficiência no uso das tecnologias web fundamentais, implementando funcionalidades complexas de forma elegante e eficiente. A integração bem-sucedida de múltiplas APIs, o sistema de validação robusto e a implementação de gráficos interativos evidenciam um domínio sólido dos conceitos de desenvolvimento front-end moderno.

Do ponto de vista educacional, a aplicação oferece valor real para usuários interessados em aprender sobre investimentos, combinando informações atualizadas de mercado com ferramentas de simulação que facilitam a compreensão de conceitos financeiros complexos. O questionário de perfil de investidor, em particular, representa uma ferramenta educacional valiosa que pode auxiliar usuários reais na identificação de estratégias de investimento adequadas ao seu perfil.

### 7.2 Desafios Enfrentados e Soluções

Durante o desenvolvimento, diversos desafios técnicos foram enfrentados e superados:

**Integração de APIs Externas**: O consumo de APIs de terceiros apresentou desafios relacionados a CORS, tratamento de erros e variabilidade na disponibilidade dos serviços. Estes foram resolvidos através da implementação de tratamento robusto de erros, fallbacks adequados e cache local para melhorar a confiabilidade.

**Responsividade Complexa**: A criação de layouts que funcionem adequadamente em uma ampla gama de dispositivos exigiu planejamento cuidadoso e testes extensivos. A adoção da metodologia Mobile First e o uso estratégico de CSS Grid e Flexbox permitiram superar estes desafios.

**Performance com Bibliotecas Externas**: O carregamento de bibliotecas como Chart.js poderia impactar negativamente a performance inicial da aplicação. Este desafio foi resolvido através da implementação de carregamento dinâmico e lazy loading.

**Validação Complexa de Formulários**: A implementação de validação em tempo real que não comprometa a experiência do usuário exigiu cuidadoso balanceamento entre feedback imediato e prevenção de spam de mensagens de erro.

### 7.3 Aprendizados Técnicos

O desenvolvimento deste projeto proporcionou aprendizados significativos em várias áreas:

**Arquitetura de Aplicações Web**: A experiência de estruturar uma aplicação completa desde o planejamento até a implementação forneceu insights valiosos sobre a importância de uma arquitetura bem pensada e modular.

**APIs e Integração de Dados**: O trabalho com APIs externas destacou a importância do tratamento adequado de erros, cache e design de interfaces resilientes a falhas de rede.

**Design Responsivo Avançado**: A implementação de layouts complexos que funcionam em múltiplos dispositivos aprofundou o entendimento sobre CSS Grid, Flexbox e media queries.

**JavaScript Moderno**: O uso de recursos ES6+ como async/await, destructuring e arrow functions demonstrou como o JavaScript moderno pode resultar em código mais limpo e manutenível.

### 7.4 Possibilidades de Expansão

O projeto InvestSmart estabelece uma base sólida que pode ser expandida em várias direções:

**Backend e Persistência**: Implementação de um backend para armazenar perfis de usuário, histórico de simulações e preferências personalizadas.

**Mais Fontes de Dados**: Integração com APIs adicionais para obter dados de ações, fundos de investimento e outros instrumentos financeiros.

**Funcionalidades Avançadas**: Implementação de alertas de mercado, comparação de carteiras e simulações mais sofisticadas baseadas em dados históricos.

**Autenticação e Personalização**: Sistema de login que permita aos usuários salvar suas simulações e receber recomendações personalizadas.

**Versão Mobile Nativa**: Desenvolvimento de aplicações móveis nativas que aproveitem a base de conhecimento e funcionalidades já implementadas.

### 7.5 Considerações Finais

O projeto InvestSmart representa mais do que uma simples aplicação web desenvolvida para fins acadêmicos. Ele demonstra a capacidade de combinar conhecimentos técnicos sólidos com uma compreensão das necessidades reais dos usuários, resultando em uma ferramenta que é simultaneamente educativa e tecnicamente robusta.

A experiência de desenvolvimento destacou a importância de seguir metodologias estruturadas, implementar testes adequados e considerar aspectos como acessibilidade e performance desde o início do projeto. Estes aprendizados são transferíveis para projetos futuros e representam uma base sólida para o desenvolvimento profissional na área de tecnologia.

O sucesso na implementação de todos os requisitos estabelecidos, combinado com a adição de funcionalidades que vão além do mínimo exigido, demonstra não apenas competência técnica, mas também iniciativa e criatividade na resolução de problemas. Estas qualidades são essenciais para o sucesso em qualquer carreira relacionada ao desenvolvimento de software.

Em última análise, o projeto InvestSmart serve como evidência concreta da capacidade de transformar conhecimentos teóricos em aplicações práticas e funcionais, preparando o caminho para desafios mais complexos e projetos de maior escala no futuro.

---

## Referências

[1] B3 - Brasil, Bolsa, Balcão. "Evolução do Investidor Pessoa Física". Disponível em: https://www.b3.com.br/pt_br/market-data-e-indices/servicos-de-dados/market-data/consultas/mercado-a-vista/evolucao-do-investidor-pf/

[2] Mozilla Developer Network. "HTML Semantic Elements". Disponível em: https://developer.mozilla.org/en-US/docs/Web/HTML/Element

[3] W3C Web Accessibility Initiative. "Web Content Accessibility Guidelines (WCAG) 2.1". Disponível em: https://www.w3.org/WAI/WCAG21/quickref/

[4] Google Developers. "Web Fundamentals - Responsive Web Design". Disponível em: https://developers.google.com/web/fundamentals/design-and-ux/responsive

[5] Chart.js Documentation. "Getting Started". Disponível em: https://www.chartjs.org/docs/latest/getting-started/

[6] Awesome API. "Documentação da API de Cotações". Disponível em: https://docs.awesomeapi.com.br/

[7] Brasil API. "Documentação da API de Feriados". Disponível em: https://brasilapi.com.br/docs#tag/Feriados

---

**Nota**: Este relatório foi elaborado como parte da documentação técnica do projeto InvestSmart, desenvolvido para a disciplina de Desenvolvimento Web. Todas as implementações descritas foram testadas e validadas durante o processo de desenvolvimento.

