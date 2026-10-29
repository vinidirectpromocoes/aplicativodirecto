# Tipos de post

Este arquivo diz **o que** cada tipo de post contém. O visual é sempre o dos templates aprovados; a variação de texto está em `conceitos.md`.

Sumário: 1. Captação · 2. Informativo · 3. Datas comemorativas · 4. Legendas · 5. Calendário · 6. Referências

## 1. Captação (vagas e cadastro)

**Objetivo:** fazer a pessoa certa chamar no WhatsApp. Tudo na arte serve a isso.

Estrutura (a do template `story-captacao.html`):
1. Logo + frase manuscrita (`.tag`).
2. Kicker ("VAGAS ABERTAS", "VAGAS PARA DIÁRIAS"…).
3. Título-pergunta que filtra o público ("TEM EXPERIÊNCIA EM **SUPERMERCADO?**").
4. Pílula com a(s) cidade(s): "Vagas em **CAUCAIA - CE** / **METRÓPOLE - CE**".
5. Cartão com 1–3 funções (story) ou 1–4 (feed); setores como chips.
6. Um requisito positivo.
7. Frase de ação + botão WhatsApp + @directpromocoes.

Funções comuns e ícone sugerido (estilo Lucide): Repositor → carrinho; Aux. de depósito → caixa/pacote; Operador de caixa → caixa registradora/cartão; Balconista → loja; Atendimento → pessoas; Açougue/Frios → faca/queijo; Padaria/Gastronomia → chapéu de chef; Promotor(a) de vendas → etiqueta/megafone.

Variações: "Vaga urgente" (selo discreto), "Diárias neste fim de semana" (linha com a data), várias cidades (uma linha de local, separadas por "·").

## 2. Informativo (carrossel)

**Objetivo:** ser útil para o diarista e criar confiança, terminando num convite leve ao cadastro.

- Slide 1 (capa/gancho): promessa clara + número quando houver ("3 atitudes…", "5 erros…"). Número gigante translúcido ao fundo (`aria-hidden`). "Arraste →" no canto.
- Slides do meio: 3–4 pontos por slide, cada um com número/ícone, título curto em negrito e uma frase de apoio.
- Último slide: CTA leve ("Quer fazer diárias? Faça seu cadastro") + WhatsApp + @ + logo.
- Numere (01/05) e mantenha o mesmo fundo/alinhamento em todos os slides para parecer uma peça só.

Pautas que funcionam: primeira diária; como funciona o cadastro; documentos necessários; o que faz cada função (repositor x aux. de depósito); cuidados com validade e FIFO/PEPS; segurança ao carregar peso; como montar ponta de gôndola; postura no atendimento; depoimento de diarista (com autorização).

Para story informativo: use o slide-capa adaptado ao formato `.story` e mande para o post do feed ou para o WhatsApp.

## 3. Datas comemorativas

**Objetivo:** homenagem e presença de marca, não venda. Nada de telefone grande; logo e @ discretos na assinatura.

Estrutura: símbolo da data num círculo → pílula com a data → "Feliz" em script → nome da data em Anton → mensagem de 1–2 frases ligando a data ao trabalho no supermercado/aos parceiros → assinatura (logo + @).

- Fundo escuro (`assets/templates/feed-data-comemorativa.html`): datas institucionais e sóbrias (Trabalhador, Consciência Negra, Independência, Data Magna do Ceará).
- Fundo claro (`story-data-comemorativa.html`, `feed-data-comemorativa-clara.html`): datas afetivas (Mães, Pais, Mulher, Cliente, Crianças, Natal).
- Pode-se usar uma cor temática como acento (`--hl`), mantendo o azul da marca dominante.
- Datas de luto ou temas sensíveis: sem "Feliz", sem script, mensagem respeitosa.

Exemplos de mensagem:
- Dia do Trabalhador: "A cada prateleira abastecida, um trabalho que faz a diferença. Obrigado a todos que fazem parte do nosso time!"
- Dia das Mães: "Para as mães que equilibram a rotina, o trabalho e o cuidado com quem amam: nossa homenagem."
- Dia do Cliente: "Obrigado aos supermercados parceiros que confiam no nosso trabalho."
- Natal: "Que o Natal encha a sua casa de paz, como vocês enchem as prateleiras o ano inteiro."

## 4. Legendas

Modelo de captação:
```
🛒 Tem experiência em supermercado? Estamos com oportunidades em [CIDADE] – CE!

Vagas para:
✅ [Função 1]
✅ [Função 2]

📲 Faça seu cadastro pelo WhatsApp: 85 99224-5035
(ou toque no link do story)

#vagas #empregoceara #[cidade] #fortaleza #repositor #diarias #supermercado #directpromocoes
```
Informativo: 1 frase de gancho + resumo em tópicos + "Salve este post e mande para quem vai começar a fazer diárias". Datas: a mensagem da arte + 2–3 hashtags.

## 5. Calendário de datas

Fixas: 1/1 Confraternização Universal · 8/3 Dia Internacional da Mulher · 15/3 Dia do Consumidor · 19/3 São José (feriado estadual – CE) · 25/3 Data Magna do Ceará (feriado estadual) · 13/4 Aniversário de Fortaleza · 1/5 Dia do Trabalhador · 12/6 Dia dos Namorados · 15/8 N. Sra. da Assunção (feriado em Fortaleza) · 7/9 Independência · 15/9 Dia do Cliente · 12/10 N. Sra. Aparecida / Dia das Crianças · 20/11 Dia da Consciência Negra (feriado nacional) · 25/12 Natal · 31/12 Véspera de Ano-Novo.

Móveis: Carnaval e Páscoa (variam por ano) · Dia das Mães (2º domingo de maio) · Dia dos Pais (2º domingo de agosto) · Black Friday (última sexta de novembro). Calcule a data do ano corrente antes de escrever na arte.

Para datas municipais de outras cidades da região (aniversários de Aquiraz, Caucaia etc.) ou "dia do profissional", confirme a data numa fonte confiável antes de publicar — não chute.

Período de pico de captação no varejo: outubro a dezembro (Black Friday e fim de ano) e as semanas antes de Páscoa e Dia das Mães.

## 6. Referências usadas na construção

- Estrutura de carrossel (gancho → desenvolvimento → CTA leve) e hierarquia título → apoio → detalhe → assinatura: [Cursa – 7 pilares do design para mídias sociais](https://cursa.app/pt/artigo/design-para-midias-sociais-7-pilares-para-criar-artes-que-param-o-feed-com-fluxo-de-trabalho-profissional), [SocialKit – estratégia de carrossel](https://socialk.it/pt/blog/instagram-carousel-strategy), [SocialKit – infográficos](https://socialk.it/pt/blog/infographics-for-social-media), [AdaptlyPost – texto em carrosséis](https://adaptlypost.com/pt/blog/text-overlays-on-instagram-carousels).
- Tamanhos (1080×1920 story, 1080×1350 feed 4:5) e zona segura de ~250px no story: [Inro – Instagram Story Size 2026](https://www.inro.social/blog/instagram-story-size), [Digital Applied – tamanhos 2026](https://www.digitalapplied.com/blog/social-media-image-sizes-2026-every-platform).
- Boas práticas de recrutamento no Instagram (CTA claro, cultura da equipe, levar para o canal de cadastro): [Haley Marketing](https://www.haleymarketing.com/2021/03/15/instagram-best-practices-for-staffing-recruiting-companies/), [Teamdash](https://www.teamdash.com/blog/how-to-recruit-on-instagram/), [Picmaker – we are hiring](https://www.picmaker.com/blog/we-are-hiring-poster/).
- Calendário de datas: [Publer – datas comemorativas 2026](https://publer.com/blog/pt/anota-na-agenda-a-lista-definitiva-de-datas-comemorativas-nas-redes-sociais-em-2026/).
- Linguagem visual de partida: as duas artes de referência enviadas pela Direct (marinho/azul, logo do carrinho, cartões de função, botão de WhatsApp).
- Ideias de pôster de vaga (títulos que geram curiosidade, cores vibrantes, ilustrações ligadas à função): [MyCreativeShop – now hiring poster ideas](https://mycreativeshop.com/learn/10-now-hiring-poster-ideas-to-find-your-dream-team), [Joveo – recruiting poster guide](https://www.joveo.com/recruiting-poster-ultimate-guide/).
- Alerta de golpes com falsas vagas no Instagram (por isso o selo de canal oficial): [Canaltech](https://canaltech.com.br/seguranca/golpe-da-vaga-de-emprego-criminosos-agora-usam-instagram-para-abordar-vitimas-231459/).
