---
name: direct-posts
description: Cria posts de Instagram (feed 1080x1350, carrossel e stories 1080x1920) para a Direct Promoções — captação de repositores/diaristas/promotores para supermercados, posts informativos e datas comemorativas — cada um com conceito e layout criados do zero, e entrega PNG pronto, link de WhatsApp com mensagem e legenda. Use sempre que o pedido envolver arte, post, story, carrossel, banner, flyer ou "divulgação" da Direct Promoções, vagas/diárias em supermercado, recrutamento na região de Fortaleza (Aquiraz, Caucaia, Maracanaú, Eusébio etc.) ou uma data comemorativa para as redes da empresa, mesmo que a pessoa não diga "Instagram" nem "skill".
---

# Posts Direct Promoções

A Direct Promoções coloca repositores, auxiliares de depósito, operadores de caixa e outros diaristas em supermercados da Região Metropolitana de Fortaleza (CE). As redes sociais servem para três coisas, nesta ordem de frequência:

1. **Captação**: trazer gente com experiência em supermercado para o cadastro no WhatsApp.
2. **Informativo**: dicas e orientações para quem faz diárias (gera confiança e seguidores).
3. **Datas comemorativas**: presença de marca, homenagem a colaboradores e clientes.

## Regra principal: cada post é criado do zero

A dona da conta pediu explicitamente: **nenhum post pode parecer cópia do anterior**. Trocar só cidade e vagas num layout já usado é o erro mais grave desta skill — o feed fica repetitivo e o público para de notar os posts.

O que **fica igual** em todo post (é isso que faz parecer a mesma marca):
- logo do carrinho + "DIRECT / PROMOÇÕES";
- paleta azul (marinho, azul, azul-claro, branco) com amarelo como acento opcional;
- contatos: WhatsApp 85 99224-5035 e @directpromocoes;
- tom de voz e qualidade de acabamento.

O que **muda** a cada post (escolha diferente do que está no histórico recente):
- **conceito criativo** — a ideia central (cupom fiscal, etiqueta de gôndola, crachá, placa de corredor, conversa de WhatsApp…). Banco de ideias em `references/conceitos.md`; inventar um novo é ainda melhor;
- **composição** — onde ficam título, conteúdo e CTA; alinhamento; elementos inclinados ou retos; grade ou colagem;
- **fundo** — marinho escuro, azul vivo, branco/claro, foto em tela cheia, dividido em blocos;
- **tipografia de destaque** — alterne entre Anton, Archivo Black, Bebas Neue, Montserrat Black, Poppins ExtraBold; script (Caveat, Kaushan Script) só como toque;
- **imagem** — foto, ilustração com ícones/SVG, objeto desenhado em CSS, ou só tipografia;
- **forma do botão de WhatsApp** — barra branca, pílula verde, adesivo, carimbo, balão de conversa…

Os arquivos em `assets/exemplos/` mostram o **nível de acabamento** esperado e trazem trechos úteis (máscara de foto, botão de WhatsApp, ícones). Use-os como referência, não como ponto de partida para copiar e trocar texto.

## Antes de começar

1. Leia `references/marca.md` (cores, logo, contatos, tom de voz) e a seção do tipo de post em `references/tipos-de-post.md` (conteúdo obrigatório, legendas, calendário de datas).
2. Leia o histórico `marketing/posts/historico.md` (no repositório) e olhe os PNGs dos últimos posts. Anote os conceitos, fundos e fontes usados nos **últimos 5 posts** — o novo post não pode repetir o conceito, e deve variar ao menos fundo **ou** tipografia em relação ao último.
3. Extraia do pedido: **tipo** (captação / informativo / data), **formato** (story, feed ou carrossel), **cidade/região**, **vagas/setores**, **data** e **foto**. Se algo essencial faltar e não houver padrão razoável, pergunte uma vez, de forma curta. Padrões:
   - formato não especificado → **story + feed** (podem compartilhar o conceito, adaptado a cada formato); se pediu só um formato, faça só esse e ofereça o outro em uma linha;
   - informativo → carrossel de 3 a 5 slides no feed;
   - foto não enviada → ilustração/tipografia, ou `assets/fotos/` (hoje só `foto-repositor.jpg`, já muito usada — prefira outra solução visual). Não dê nome, cargo ou depoimento à pessoa da foto como se fosse funcionário real;
   - funções: forma neutra quando couber ("Repositor(a)", "Operador(a) de caixa");
   - localidades: confira o nome certo (ex.: "Metrópole" é bairro de Caucaia — Nova Metrópole/Jurema; escreva "Caucaia e Metrópole – CE");
   - data comemorativa que já passou no ano → avise e prepare para a próxima ocorrência, salvo pedido contrário.

## Fluxo

1. **Defina o conceito** em uma frase antes de codar (ex.: "cupom fiscal: as vagas são os itens da nota, fundo azul vivo com padrão de carrinhos, título em Archivo Black com marca-texto amarelo"). Se ajudar, busque referências na web (Behance, Dribbble, Pinterest, campanhas de varejo) para o conceito escolhido.

2. **Escreva o HTML do zero** em `marketing/posts/AAAA-MM-DD-<slug>/<formato>.html` (ou na pasta que o usuário indicar):
   - um elemento `.canvas` por imagem, com o tamanho exato (story 1080×1920, feed 1080×1350); carrossel = vários `.canvas`;
   - fontes do Google Fonts via `<link>`; cores da paleta de `references/marca.md` (pode importar `brand.css` só pelos tokens, se quiser);
   - logos e ícones: `logo-carrinho.svg`, `logo-carrinho-branco.svg`, `icone-whatsapp.svg`, `icone-instagram.svg` (caminhos relativos resolvem em `assets/`) e os SVGs de `references/icones.md`;
   - elementos só decorativos (padrões, números gigantes de fundo) com `aria-hidden="true"`.

3. **Renderize**:
   ```bash
   node <skill>/scripts/render.js marketing/posts/<pasta>/story.html marketing/posts/<pasta>/story.png
   ```
   Cada `.canvas` vira um PNG (carrossel → `feed-1.png`, `feed-2.png`…). O script avisa se algum texto saiu da arte. Precisa de internet para as fontes.

4. **Olhe o PNG** e passe pelo checklist. Ajuste e renderize de novo até ficar limpo — a primeira versão quase sempre tem sobreposição, espaço vazio ou algo na zona de resposta do story.

5. **Gere o link de WhatsApp** quando houver CTA de cadastro:
   ```bash
   python3 <skill>/scripts/whatsapp_link.py "Olá! Tenho interesse nas vagas de repositor em Caucaia. Já tenho experiência em supermercado."
   ```
   Saudação neutra ("Olá!") — "bom dia/boa tarde" fica errado em outro horário.

6. **Registre no histórico**: acrescente uma linha em `marketing/posts/historico.md` (data, pasta, tipo/formato, conceito, fundo, fonte de destaque, foto sim/não).

7. **Entregue**: PNGs ao usuário, conceito em uma frase, link do WhatsApp, legenda pronta e, para stories, a dica da figurinha **Link** ("CADASTRE-SE AQUI") sobre o botão do WhatsApp. No repositório, faça commit da pasta do post e do histórico.

## Checklist de qualidade

- **Diferente de verdade**: colocado ao lado dos últimos posts, o novo é reconhecível como outro conceito à primeira vista — não só outra cor ou outro texto.
- **Uma mensagem por arte**: o título responde "o que é?" em até ~6 palavras.
- **Hierarquia clara**: título → apoio (cidade, kicker) → detalhes (vagas) → assinatura (WhatsApp, @, logo).
- **Legível no celular**: corpo ≥ 20px; título ≥ 60px no feed e ≥ 76px no story; contraste alto.
- **Zonas seguras do story**: nada essencial nos 250px do topo nem nos ~250px de baixo (y > 1670). Telefone e vagas acima disso; o @ pode ficar perto.
- **Nada cortado, sobreposto ou encostado**: margem lateral ≥ 64px; elementos não se atropelam; rosto de foto livre de texto.
- **Contato conferido dígito a dígito**: `85 99224-5035` e `@directpromocoes`.
- **Ortografia** pt-BR com acentos; nomes de cidade/bairro corretos.
- **Sinal de canal oficial** nos posts de captação (ex.: "WhatsApp oficial de cadastro") — golpes com falsas vagas são comuns no Instagram.

## Linha que não se cruza: anúncio de vaga sem discriminação

Não escreva requisitos de sexo, idade, aparência, estado civil, gravidez, cor ou religião ("vaga para homens", "até 30 anos", "boa aparência"). É proibido no Brasil (Lei 9.029/95 e CLT art. 373-A). Se o pedido trouxer isso, faça a arte sem o requisito, explique em uma frase e ofereça descrever a função ("trabalho com carga e descarga").

## Arquivos da skill

- `references/conceitos.md` — banco de conceitos criativos por tipo de post.
- `references/marca.md` — identidade, paleta, fontes permitidas, tom de voz.
- `references/tipos-de-post.md` — conteúdo obrigatório por tipo, legendas, calendário de datas, referências.
- `references/icones.md` — ícones SVG prontos.
- `assets/exemplos/` — posts de exemplo (nível de acabamento; não copiar o layout).
- `assets/brand.css` — tokens de cor e componentes opcionais.
- `assets/*.svg`, `assets/fotos/` — logo, ícones de WhatsApp/Instagram, fotos.
- `scripts/render.js` — HTML → PNG. `scripts/whatsapp_link.py` — link `wa.me`.
