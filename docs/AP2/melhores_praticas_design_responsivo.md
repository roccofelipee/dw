## Melhores Práticas de Design Responsivo (Mobile First e Media Queries)

### Mobile First
- Começar o desenvolvimento para telas pequenas (mobile) e, em seguida, expandir para telas maiores (desktop).
- Isso garante que a experiência do usuário em dispositivos móveis seja otimizada desde o início, focando no conteúdo essencial e na performance.
- Utilizar `min-width` nas media queries para aplicar estilos progressivamente à medida que a tela aumenta.

### Media Queries
- São regras CSS que permitem aplicar estilos diferentes com base nas características do dispositivo, como largura da tela, altura, orientação, etc.
- Sintaxe básica: `@media screen and (min-width: 800px) { /* estilos aqui */ }`
- Os `breakpoints` (pontos de interrupção) são os valores de largura onde o layout muda. É importante definir breakpoints que façam sentido para o conteúdo e design, e não apenas para tamanhos de dispositivos específicos.
- Devem ser usadas para ajustar o layout, tipografia, tamanhos de elementos e visibilidade de componentes para diferentes tamanhos de tela.

### Grids Flexíveis
- Em vez de layouts de largura fixa, usar grids flexíveis (com unidades relativas como porcentagens ou `em`/`rem`) para que os elementos se ajustem automaticamente ao espaço disponível.
- Isso evita barras de rolagem indesejadas e garante que o layout se adapte a uma ampla gama de tamanhos de tela.

### Imagens Responsivas
- Usar `max-width: 100%;` para que as imagens se ajustem ao tamanho do seu contêiner, sem transbordar.
- Considerar o uso de `srcset` e `sizes` para servir imagens otimizadas para diferentes resoluções e viewports, melhorando a performance.

### Viewport Meta Tag
- Essencial para o design responsivo, deve ser incluída no `<head>` do HTML:
  `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Isso garante que o navegador renderize a página com a largura do dispositivo e a escala inicial correta.


