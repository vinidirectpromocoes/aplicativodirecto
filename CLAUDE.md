# Vini iPhones — contexto da marca

Loja de produtos Apple lacrados (iPhone, iPad, MacBook) e perfumes originais.
WhatsApp de vendas: (85) 98433-0011 (DDD 85, Fortaleza/CE). Idioma: português do Brasil.

## Padrão de post do Instagram (feed 1080x1350)

Referência aprovada: `marketing/posts/referencia-perfumes.png`. Todo post novo segue esta estrutura,
de cima para baixo, centralizada sobre a foto real do produto:

1. Logo "VINI / IPHONES" em fonte fina (Montserrat 200/300), letras espaçadas.
2. Chamada pequena espaçada: `OFERTA ESPECIAL` (ou outra curta, sempre em caixa alta).
3. Título em 2 linhas, Plus Jakarta Sans 800, caixa alta: linha 1 branca (produto),
   linha 2 com degradê prateado (capacidade ou complemento).
4. Subtítulo curto em uma linha (ex.: "Lacrado e com 1 ano de garantia Apple.").
5. Até 3 selos em pílulas escuras translúcidas com borda clara (ex.: LACRADO, GARANTIA APPLE, BRINDES).
6. Rodapé: pílula branca com ícone do WhatsApp e `GARANTA O SEU: (85) 98433-0011`.

Foto: sempre foto real dos produtos, escurecida no topo para leitura do texto. Produto visível
abaixo dos selos. Tom: premium, limpo, sem excesso de elementos, sem emojis na arte.

## Como gerar posts

```
cd marketing/posts
# 1. coloque a foto em fotos/
# 2. adicione uma entrada em posts.json (id, foto, titulo1, titulo2, subtitulo, selos)
# 3. ajuste "topo" (px, desloca a foto para baixo/cima) e "zoom" para enquadrar o produto
node render.js            # gera todos em out/
node render.js <id>       # gera só um
node render.js --story    # versões stories 1080x1920 (enquadramento no bloco "story" de cada post)
```

Stories: mesmo layout do feed, com texto começando abaixo de 230px e o botão do WhatsApp
250px acima da base, para não ficarem sob a interface do Instagram.

Sempre confira o PNG gerado: texto não pode cobrir o produto principal.
