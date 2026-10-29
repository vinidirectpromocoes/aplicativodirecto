---
name: direct-posts
description: Cria posts de Instagram (feed 1080x1350, carrossel e stories 1080x1920) para a Direct Promoções — captação de repositores/diaristas/promotores para supermercados, posts informativos e datas comemorativas — no layout aprovado da marca variando foto e texto, e entrega PNG pronto, link de WhatsApp com mensagem e legenda. Use sempre que o pedido envolver arte, post, story, carrossel, banner, flyer ou "divulgação" da Direct Promoções, vagas/diárias em supermercado, recrutamento na região de Fortaleza (Aquiraz, Caucaia, Maracanaú, Eusébio etc.) ou uma data comemorativa para as redes da empresa, mesmo que a pessoa não diga "Instagram" nem "skill".
---

# Posts Direct Promoções

A Direct Promoções coloca repositores, auxiliares de depósito, operadores de caixa e outros diaristas em supermercados da Região Metropolitana de Fortaleza (CE). As redes sociais servem para três coisas, nesta ordem de frequência:

1. **Captação**: trazer gente com experiência em supermercado para o cadastro no WhatsApp.
2. **Informativo**: dicas e orientações para quem faz diárias (gera confiança e seguidores).
3. **Datas comemorativas**: presença de marca, homenagem a colaboradores e clientes.

## Regra principal: o padrão aprovado é o story de Aquiraz

A dona da conta aprovou o visual do primeiro story (Aquiraz) e reprovou as tentativas de layouts novos (um "cupom fiscal" e um corporativo de fundo claro foram considerados "nada a ver" e "amador"). Então:

- **Use sempre o layout dos templates** em `assets/templates/` (fundo marinho com brilhos azuis, logo em cartão branco com "— PROMOÇÕES —", frase manuscrita no canto, título em Anton com degradê, pílula de local, cartão de vidro com as funções, botão grande de WhatsApp). **Sem a linha diagonal** atravessando o topo (a Direct pediu para retirar). Não invente layout novo, não troque fundo nem fontes.
- **O que muda a cada post** — para não ficar repetido:
  1. **Foto**: alterne as fotos de `assets/fotos/`, sem repetir a do post anterior. Para **repositor e auxiliar de depósito, a Direct prefere foto de homem** (remete ao trabalho braçal): `foto-repositor.jpg` (prateleira), `foto-aux-deposito.jpg` (armazém, paleteira). `foto-repositora.jpg` serve para operador(a) de caixa, atendimento etc. A preferência é só da imagem — o texto continua aberto a todos (ver "Linha que não se cruza"). Ajuste `right`/`top`/`width`/`height` da `.photo` para o rosto ficar inteiro, abaixo do título e sem texto por cima.
  2. **Copy**: título (`.l1` + `.l2`), kicker, frase manuscrita (`.tag`), rótulo do cartão, requisito e frase acima do WhatsApp — escreva uma combinação diferente da do post anterior (banco de frases em `references/conceitos.md`).
  3. **Local e funções** conforme o pedido.
- Consulte `marketing/posts/historico.md` para saber a foto e as frases usadas por último.
- Referências visuais aprovadas pela Direct em `references/inspiracao/` (artes de vagas e o logo oficial). Para buscar mais ideias de foto/texto, Pinterest, Designi e Behance são as fontes que a Direct indica — mas a estrutura do layout continua a dos templates.

## Antes de começar

1. Leia `references/marca.md` (cores, logo, contatos, tom de voz) e a seção do tipo de post em `references/tipos-de-post.md` (conteúdo obrigatório, legendas, calendário de datas).
2. Leia o histórico `marketing/posts/historico.md` (no repositório): foto e frases do último post, para escolher outras.
3. Extraia do pedido: **tipo** (captação / informativo / data), **formato** (story, feed ou carrossel), **cidade/região**, **vagas/setores**, **data** e **foto**. Se algo essencial faltar e não houver padrão razoável, pergunte uma vez, de forma curta. Padrões:
   - formato não especificado → **story + feed** (mesma copy adaptada a cada formato); se pediu só um formato, faça só esse e ofereça o outro em uma linha;
   - informativo → carrossel de 3 a 5 slides no feed;
   - foto não enviada → use uma de `assets/fotos/` diferente da do último post. Se o usuário mandar foto nova (inclusive de uma arte pronta), recorte em retrato (~1000×3000, rosto no quarto de cima), apague restos de texto/cartões da arte original com retoque suave (cor amostrada da própria foto) e salve em `assets/fotos/`. Confira o retoque de perto no PNG final. Não dê nome, cargo ou depoimento à pessoa da foto;
   - funções: forma neutra quando couber ("Repositor(a)", "Operador(a) de caixa");
   - localidades: confira o nome certo (ex.: "Metrópole" é bairro de Caucaia — Nova Metrópole/Jurema; escreva "Caucaia e Metrópole – CE");
   - data comemorativa que já passou no ano → avise e prepare para a próxima ocorrência, salvo pedido contrário.

## Fluxo

1. **Copie o template** de `assets/templates/` para `marketing/posts/AAAA-MM-DD-<slug>/<formato>.html` (ou a pasta que o usuário indicar):
   | Tipo | Template |
   |---|---|
   | Vagas (story) | `story-captacao.html` |
   | Vagas (feed) | `feed-captacao.html` |
   | Ação em loja / case com marca (foto real) | 1º canvas de `feed-acao-em-loja-e-capa-reels.html` |
   | Capa de Reels | 2º canvas de `feed-acao-em-loja-e-capa-reels.html` (título dentro do centro 1080×1440) |
   | Data comemorativa (estilo único, marinho) | `feed-datas-estilo-unico.html` — copie um canvas, troque ícone, data, título e mensagem; datas sóbrias sem "Feliz"; datas comerciais (Black Friday) com CTA B2B |
   | Institucional (quem somos, marcas, trabalhe conosco) | `feed-institucional-fixados.html` |
   | Informativo (carrossel) | `feed-informativo.html` |
   | Capas de destaque | `capas-destaques.html` |

   Os templates de data com fundo claro (`*-data-comemorativa*.html`) ficam só como referência antiga — a Direct aprovou **um estilo único marinho** para datas.

2. **Troque foto, copy e local** (ver Regra principal). Mantenha a estrutura e os estilos; mexa só em textos, itens, ícones (`references/icones.md`) e no posicionamento da foto. Se o texto ficar maior (ex.: duas cidades), reduza a fonte daquele elemento no `<style>` do post em vez de mudar o layout.

3. **Renderize**:
   ```bash
   node <skill>/scripts/render.js marketing/posts/<pasta>/story.html marketing/posts/<pasta>/story.png
   ```
   Cada `.canvas` vira um PNG (carrossel → `feed-1.png`, `feed-2.png`…), exportado sozinho com a viewport do tamanho dele. O script avisa se algum texto saiu da arte. Precisa de internet para as fontes.

4. **Olhe o PNG** e passe pelo checklist. Ajuste e renderize de novo até ficar limpo — a primeira versão quase sempre tem sobreposição, espaço vazio ou algo na zona de resposta do story.

5. **Gere o link de WhatsApp** quando houver CTA de cadastro:
   ```bash
   python3 <skill>/scripts/whatsapp_link.py "Olá! Tenho interesse nas vagas de repositor em Caucaia. Já tenho experiência em supermercado."
   ```
   Saudação neutra ("Olá!") — "bom dia/boa tarde" fica errado em outro horário.

6. **Registre no histórico**: acrescente uma linha em `marketing/posts/historico.md` (data, pasta, tipo/formato, foto usada, título e frase manuscrita).

7. **Entregue**: PNGs ao usuário, link do WhatsApp, legenda pronta e, para stories, a dica da figurinha **Link** ("CADASTRE-SE AQUI") sobre o botão do WhatsApp. No repositório, faça commit da pasta do post e do histórico.

## Checklist de qualidade

- **Fiel ao padrão aprovado**: mesmo layout, fontes e cores do story de Aquiraz.
- **Diferente do anterior**: foto e frases trocadas em relação ao último post do histórico.
- **Uma mensagem por arte**: o título responde "o que é?" em até ~6 palavras.
- **Hierarquia clara**: título → apoio (cidade, kicker) → detalhes (vagas) → assinatura (WhatsApp, @, logo).
- **Legível no celular**: corpo ≥ 20px; título ≥ 60px no feed e ≥ 76px no story; contraste alto.
- **Zonas seguras do story**: nada essencial nos 250px do topo nem nos ~250px de baixo (y > 1670). Telefone e vagas acima disso; o @ pode ficar perto.
- **Nada cortado, sobreposto ou encostado**: margem lateral ≥ 64px; elementos não se atropelam; rosto de foto livre de texto.
- **Contato conferido dígito a dígito**: `85 99224-5035` e `@directpromocoes`.
- **Ortografia** pt-BR com acentos; nomes de cidade/bairro corretos.

## Regras de marca aprovadas no plano de 29/10/2026

- Nome nas artes: **Direct Promoções** — nunca "& Eventos".
- Logo: carrinho + DIRECT + "— PROMOÇÕES —"; versão branca ou cartão branco em fundo escuro.
- Público duplo: clientes (supermercados/indústrias) e diaristas. Posts B2B usam "Fale com a Direct"; posts de vaga usam "Cadastro pelo WhatsApp".
- Divisão de conteúdo: 40% ações em loja/cases · 25% vagas e dicas · 20% equipe/bastidores · 15% datas.
- Plano completo, bio, links e calendário: `marketing/plano-2026-11/README.md`.

## Linha que não se cruza: anúncio de vaga sem discriminação

Não escreva requisitos de sexo, idade, aparência, estado civil, gravidez, cor ou religião ("vaga para homens", "até 30 anos", "boa aparência"). É proibido no Brasil (Lei 9.029/95 e CLT art. 373-A). Se o pedido trouxer isso, faça a arte sem o requisito, explique em uma frase e ofereça descrever a função ("trabalho com carga e descarga").

## Arquivos da skill

- `references/conceitos.md` — banco de frases (títulos, frases manuscritas, chamadas) para variar a copy, e o que já foi reprovado.
- `references/marca.md` — identidade, paleta, fontes permitidas, tom de voz.
- `references/tipos-de-post.md` — conteúdo obrigatório por tipo, legendas, calendário de datas, referências.
- `references/icones.md` — ícones SVG prontos.
- `assets/templates/` — layouts aprovados (copiar e trocar foto/copy/local).
- `assets/brand.css` — tokens de cor e componentes opcionais.
- `assets/*.svg`, `assets/fotos/` — logo, ícones de WhatsApp/Instagram, fotos.
- `scripts/render.js` — HTML → PNG. `scripts/whatsapp_link.py` — link `wa.me`.
