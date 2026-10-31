# Vini iPhones — contexto da marca

Loja de produtos Apple lacrados (iPhone, iPad, MacBook, AirPods, acessórios originais),
relógios Garmin lacrados e perfumes originais. Parcelamento em até 18x no crédito (sempre com "*verificar taxas*")
e avaliação do iPhone usado na troca.
WhatsApp de vendas: (85) 98433-0011 (DDD 85, Fortaleza/CE). Idioma: português do Brasil.

Logo oficial e arte de parcelamento aprovada: `marketing/posts/referencia-parcelamento-18x.png`.

## Padrão de post do Instagram (feed 1080x1350)

Referência aprovada: `marketing/posts/referencia-perfumes.png`. Todo post novo segue esta estrutura,
de cima para baixo, centralizada sobre a foto real do produto:

1. Logo "VINI / IPHONES" em fonte fina (Montserrat 200/300), letras espaçadas.
2. Chamada pequena espaçada: `OFERTA ESPECIAL` (ou outra curta, sempre em caixa alta).
3. Título em UMA linha, sem quebra, TODO EM BRANCO, Plus Jakarta Sans 800, caixa alta: modelo +
   capacidade ao lado (ex.: IPHONE 17 256GB, IPAD 11 128GB & 256GB). Chamada e frase coladas ao título.
4. Subtítulo curto em uma linha (ex.: "Lacrado e com 1 ano de garantia Apple.").
5. Até 3 selos em pílulas escuras translúcidas com borda clara (ex.: LACRADO, GARANTIA APPLE, BRINDES).
6. Rodapé: pílula branca com ícone do WhatsApp e `GARANTA O SEU: (85) 98433-0011`.

Foto: sempre foto real dos produtos, ocupando a arte inteira, escurecida no topo para leitura.
Posts aprovados (não mexer sem pedido): iPhone 17, iPad 11, MacBook Neo e Perfumes Originais. Produto visível
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

Fotos de fornecedor/print: recorte antes (tire barra do celular, logos e preços de outras lojas,
textos sobrepostos) e salve em fotos/. Legendas e copy de anúncio ficam em `legendas.md`.

Layout "v2" (`"estilo": "v2"`), alternativo (usado em acessórios, linha Apple e Garmin). O padrão
principal é o descrito acima (iPhone 17, iPad 11, MacBook Neo, perfumes):
- fundo preto; sombreamento sutil (degradê preto leve e curto em cima e embaixo, nunca pesado);
- logo no topo com boa distância da copy; título + frase em cima, sobre o preto;
- produto numa faixa centralizada na largura toda (`"centralizar": true`), ocupando exatamente o
  espaço entre a frase e a base; `"posicao"` ajusta o ponto focal (ex.: "center 30%") e
  `"esfumado"` (px) a suavidade das bordas de cima/baixo da faixa;
- base: lista de modelos (`"lista"`) + selos, logo acima do botão do WhatsApp;
- stories: texto começa em 170px e é maior.
Foto torta (ex.: caixas fotografadas na diagonal): endireite girando antes e recorte só a área
sem cantos vazios.

Sempre confira o PNG gerado: texto não pode cobrir o produto principal.
