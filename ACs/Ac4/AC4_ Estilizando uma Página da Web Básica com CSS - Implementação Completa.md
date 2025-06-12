# AC4: Estilizando uma Página da Web Básica com CSS - Implementação Completa

## Visão Geral
Esta implementação atende a todas as instruções da atividade AC4, aplicando seletores, propriedades e valores CSS para aprimorar o design de uma página HTML básica.

## Arquivos Implementados

### 1. `index.html`
- O arquivo HTML base fornecido na atividade.
- Contém a estrutura da página: cabeçalho, seções de conteúdo, imagem e lista.
- Linka para o arquivo `styles.css` para a estilização.

### 2. `styles.css`
- Contém todas as regras CSS para estilizar a página HTML de acordo com as instruções.
- Inclui estilos para:
    - Estilo geral da página (cor de fundo, fonte, altura de linha).
    - Largura máxima e centralização do conteúdo principal.
    - Tipografia e cores de cabeçalhos e texto.
    - Alterações de cor para links (normal e visitado).
    - Estilização de imagens (borda, sombra, responsividade).
    - Estilização de listas (marcadores, margens e preenchimento).

## Instruções Implementadas

### ✅ Estrutura da página:
- Utilizado o HTML base fornecido.

### ✅ Estilo geral:
- **Cor de fundo:** `#f4f4f4` para a página inteira.
- **Largura máxima e centralização:** `max-width: 960px;` e `margin: 20px auto;` para o conteúdo principal (`main`).

### ✅ Tipografia e cor:
- **Tamanho de fonte base e altura de linha:** `line-height: 1.6;` para o `body`.
- **Família de fontes:** `Arial, sans-serif;` para o corpo do texto e `Georgia, serif;` para os cabeçalhos (`h1`, `h2`).
- **Cor e peso dos cabeçalhos:** `color: #0056b3;` e `font-weight: bold;`.
- **Alterações de cor instantâneas para links:** `a:hover` e `a:visited` com cores diferentes.

### ✅ Estilizando imagens e listas:
- **Para a imagem:**
    - **Borda:** `border: 1px solid #ddd;`.
    - **Sombra (efeito lifting):** `box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);`.
    - **Responsividade:** `max-width: 100%;` e `height: auto;`.
- **Para a lista:**
    - **Marcadores:** `list-style-type: disc;` (padrão, mas explicitamente definido).
    - **Margens e preenchimento:** `margin: 20px 0;` e `padding: 0 20px;` para `ul`.

## Como Testar

1.  Abra o arquivo `index.html` em um navegador web.
2.  Observe a aplicação dos estilos CSS:
    - A cor de fundo da página.
    - O conteúdo centralizado com largura máxima.
    - As fontes e cores dos textos e cabeçalhos.
    - As bordas e sombras na imagem.
    - A responsividade da imagem ao redimensionar a janela do navegador.
    - Os marcadores da lista e o espaçamento.
    - As mudanças de cor dos links ao passar o mouse e após serem visitados.

## Observações Técnicas

- A solução é em CSS puro, sem dependências externas.
- O código CSS está bem organizado e comentado, facilitando a compreensão de cada regra aplicada.
- A página é responsiva, adaptando-se a diferentes tamanhos de tela.

Se tiver qualquer dúvida ou precisar de mais alguma coisa, por favor, me avise!

