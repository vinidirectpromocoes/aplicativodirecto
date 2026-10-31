# Vini iPhones — contexto da marca

Loja de produtos Apple lacrados (iPhone, iPad, MacBook, AirPods, acessórios originais),
relógios Garmin lacrados e perfumes originais. Parcelamento em até 18x no crédito (sempre com "*verificar taxas*")
e avaliação do iPhone usado na troca.
WhatsApp de vendas: (85) 98433-0011 (DDD 85, Fortaleza/CE). Idioma: português do Brasil.

Logo oficial e arte de parcelamento aprovada: `marketing/posts/referencia-parcelamento-18x.png`.

## Fontes

- Título: **Fjalla One** (Google Fonts) — equivalente da fonte "Squeeze" do Instagram.
- Demais textos (chamada, frase, selos, botão, lista): **Quicksand** 600/700 — equivalente da "Deco" do Instagram.
- Logo VINI IPHONES: Montserrat fina (não muda).

## Padrão de post do Instagram (feed 1080x1350)

PADRÃO OFICIAL para TODO post com imagem de produto (feed e stories). Estrutura, de cima para
baixo, centralizada sobre a foto real do produto:

1. Logo "VINI / IPHONES" em fonte fina (Montserrat 200/300), letras espaçadas — pequeno no feed
   (50/21px); nos stories maior (66/27px) e mais no alto (160px).
2. Chamada pequena espaçada: `OFERTA ESPECIAL` (ou outra curta, sempre em caixa alta).
3. Título em UMA linha, sem quebra, TODO EM BRANCO, Fjalla One (equivalente da fonte Squeeze do Instagram), caixa alta: modelo +
   capacidade ao lado (ex.: IPHONE 17 256GB, IPAD 11 128GB & 256GB). Chamada e frase coladas ao título.
4. Subtítulo curto em uma linha (ex.: "Lacrado e com 1 ano de garantia Apple."), colado ao título.
   Nos stories a frase e os selos são maiores (34px / 23px).
5. Até 3 selos em pílulas escuras translúcidas com borda clara (ex.: LACRADO, GARANTIA APPLE, BRINDES).
6. Rodapé: pílula branca com ícone do WhatsApp e `GARANTA O SEU: (85) 98433-0011`.

Foto: sempre foto real dos produtos, ocupando a arte inteira, escurecida no topo para leitura.
Posts aprovados (não mexer sem pedido): iPhone 17, iPad 11, MacBook Neo, Perfumes Originais,
Acessórios Originais Apple, Toda Linha Apple e Garmin Lacrados. Produto visível
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

Stories: mesmo layout do feed, logo a partir de 160px, chamada/título logo abaixo e o botão do
WhatsApp 250px acima da base, para não ficarem sob a interface do Instagram.

Fotos de fornecedor/print: recorte antes (tire barra do celular, logos e preços de outras lojas,
textos sobrepostos) e salve em fotos/. Legendas e copy de anúncio ficam em `legendas.md`.

Layout "v2" (`"estilo": "v2"`, faixa de produto em fundo preto) existe no modelo, mas NÃO é mais
usado: todos os posts de produto seguem o padrão oficial acima.
Foto torta (ex.: caixas fotografadas na diagonal): endireite girando antes e recorte só a área
sem cantos vazios.

Sempre confira o PNG gerado: texto não pode cobrir o produto principal.
