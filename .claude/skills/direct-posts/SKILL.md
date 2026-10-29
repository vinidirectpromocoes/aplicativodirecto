---
name: direct-posts
description: Cria posts de Instagram (feed 1080x1350, carrossel e stories 1080x1920) na identidade visual da Direct Promoções — captação de repositores/diaristas/promotores para supermercados, posts informativos e datas comemorativas — e entrega PNG pronto, link de WhatsApp com mensagem e legenda. Use sempre que o pedido envolver arte, post, story, carrossel, banner, flyer ou "divulgação" da Direct Promoções, vagas/diárias em supermercado, recrutamento na região de Fortaleza (Aquiraz, Caucaia, Maracanaú, Eusébio etc.) ou uma data comemorativa para as redes da empresa, mesmo que a pessoa não diga "Instagram" nem "skill".
---

# Posts Direct Promoções

A Direct Promoções coloca repositores, auxiliares de depósito, operadores de caixa e outros diaristas em supermercados da Região Metropolitana de Fortaleza (CE). As redes sociais servem para três coisas, nesta ordem de frequência:

1. **Captação**: trazer gente com experiência em supermercado para o cadastro no WhatsApp.
2. **Informativo**: dicas e orientações para quem faz diárias (gera confiança e seguidores).
3. **Datas comemorativas**: presença de marca, homenagem a colaboradores e clientes.

O resultado de cada pedido é uma arte que parece feita por um designer, sempre na mesma identidade (marinho + azul, Anton + Montserrat, logo do carrinho), pronta para postar.

## Antes de começar

Leia `references/marca.md` (cores, logo, contatos, tom de voz). Para o tipo de post pedido, leia a seção correspondente de `references/tipos-de-post.md`; para datas, ali também está o calendário.

Extraia do pedido: **tipo** (captação / informativo / data), **formato** (story, feed ou carrossel), **cidade/região**, **vagas/setores**, **data** e **foto**. Se algo essencial faltar e não houver padrão razoável, pergunte uma vez, de forma curta. Padrões quando não for dito:
- formato não especificado → entregue **story + feed** do mesmo conteúdo; se a pessoa pediu só um formato, faça só esse e ofereça o outro em uma linha;
- informativo → carrossel de 3 a 5 slides no feed;
- foto não enviada → use `assets/fotos/` (hoje: `foto-repositor.jpg`, ilustrativa, com uniforme da marca) ou faça uma arte só tipográfica/ícones. A foto ilustrativa pode ser usada em captação; só não dê nome, cargo ou depoimento à pessoa da foto como se fosse um funcionário real;
- funções na arte: use a forma neutra quando couber ("Operador(a) de caixa", "Promotor(a)"); em títulos muito curtos o masculino genérico é aceitável, mas a legenda leva o "(a)" — reforça que a vaga é para todos;
- **data comemorativa que já passou no ano corrente**: avise o usuário em uma frase e prepare para a próxima ocorrência (ano seguinte), a menos que ele confirme que quer a data passada (ex.: post de "como foi").

## Fluxo

1. **Escolha o template** em `assets/templates/`:
   | Tipo | Story | Feed |
   |---|---|---|
   | Captação | `story-captacao.html` | `feed-captacao.html` |
   | Informativo | adapte o slide 1 de `feed-informativo.html` para `.story` | `feed-informativo.html` (carrossel) |
   | Data comemorativa | `story-data-comemorativa.html` (claro; para escuro, troque `.light` e use a base do feed escuro) | `feed-data-comemorativa.html` (escuro) ou `feed-data-comemorativa-clara.html` (claro) |

   Ícones prontos (vagas e datas) em `references/icones.md`.

2. **Copie** o template para `marketing/posts/AAAA-MM-DD-<slug>/<formato>.html` no repositório (ex.: `marketing/posts/2026-10-29-aquiraz-repositor/story.html`), ou para a pasta que o usuário indicar. Não edite o template original.

3. **Edite só o conteúdo**: textos, cidade, itens de vaga, ícone, foto. Os componentes (`.wa`, `.pill`, `.glass`, `.item`, `.logo`, `.ig`, `.headline`, `.grad-text`) vêm de `assets/brand.css`; reutilize-os em vez de criar estilos novos, para que todos os posts pareçam da mesma família. Caminhos relativos (`brand.css`, `logo-carrinho.svg`, `fotos/...`) resolvem em `assets/`; uma foto nova pode ser referenciada por caminho absoluto `file:///...` ou copiada para `assets/fotos/`.

4. **Renderize**:
   ```bash
   node <skill>/scripts/render.js marketing/posts/<pasta>/story.html marketing/posts/<pasta>/story.png
   ```
   Cada `.canvas` do HTML vira um PNG (carrossel → `feed-1.png`, `feed-2.png`…). O script avisa se algum texto saiu da arte (elementos decorativos com `aria-hidden="true"` são ignorados). As fontes vêm do Google Fonts, então a renderização precisa de internet; se as letras saírem genéricas, é isso.

5. **Olhe o PNG** (abra a imagem) e passe pelo checklist abaixo. Ajuste e renderize de novo até ficar limpo — a primeira versão quase sempre tem um título grande demais ou um espaço vazio.

6. **Gere o link de WhatsApp** quando houver CTA de cadastro:
   ```bash
   python3 <skill>/scripts/whatsapp_link.py "Olá! Tenho interesse em fazer diárias na região de Aquiraz. Já tenho experiência em supermercado."
   ```
   Prefira saudações neutras ("Olá!", "Olá, tudo bem?") — "bom dia/boa tarde" fica errado quando o story é visto em outro horário.

7. **Entregue**: envie os PNGs ao usuário, o link do WhatsApp, uma legenda pronta (ver `references/tipos-de-post.md`) e, para stories, a dica de colocar a figurinha **Link** com texto personalizado ("CADASTRE-SE AQUI") sobre o botão do WhatsApp. Se estiver trabalhando no repositório, faça commit da pasta do post (a não ser que o usuário diga o contrário).

## Checklist de qualidade

- **Uma mensagem por arte.** O título responde "o que é?" em até ~6 palavras; o resto apoia. Se tudo parece importante, nada é.
- **Hierarquia em 4 níveis**: título (Anton, grande) → apoio (kicker, pill de cidade) → detalhes (itens, texto) → assinatura (WhatsApp, @, logo).
- **Legível no celular**: corpo de texto ≥ 20px, título ≥ 60px no feed e ≥ 76px no story; contraste alto (texto claro sobre marinho ou marinho sobre branco).
- **Zonas seguras do story**: nada essencial nos 250px do topo (barra de progresso/perfil) nem nos ~250px de baixo (campo de resposta). O logo pode encostar no topo, o @ pode ficar perto de baixo; título, vagas e telefone não.
- **Nada cortado nem encostado**: margem lateral de 64px; nenhum texto saindo da arte (o render avisa).
- **Foto fundida no fundo** com a máscara de `.photo`, sem bordas duras; rosto não coberto por texto.
- **Contato sempre igual**: WhatsApp `85 99224-5035` e `@directpromocoes` (tudo junto, sem acento) — confira dígito a dígito.
- **Ortografia** em português do Brasil, com acentos (DEPÓSITO, DIÁRIAS, PROMOÇÕES).

## Linha que não se cruza: anúncio de vaga sem discriminação

Não escreva requisitos de sexo, idade, aparência, estado civil, gravidez, cor ou religião ("vaga para homens", "até 30 anos", "boa aparência"). É proibido no Brasil (Lei 9.029/95 e CLT art. 373-A) e expõe a empresa a denúncia. Se o pedido trouxer isso, faça a arte sem o requisito e explique o motivo em uma frase, oferecendo uma alternativa que descreva a função ("trabalho com carga e descarga", "atividade que exige esforço físico").

## Arquivos da skill

- `assets/brand.css` — cores, fontes e componentes; mude a identidade aqui.
- `assets/templates/` — os 6 templates acima.
- `assets/logo-carrinho.svg` / `logo-carrinho-branco.svg`, `icone-whatsapp.svg`, `icone-instagram.svg`, `fotos/`.
- `scripts/render.js` — HTML → PNG (Playwright/Chromium).
- `scripts/whatsapp_link.py` — link `wa.me` com mensagem pronta.
- `references/marca.md` — identidade e tom de voz.
- `references/tipos-de-post.md` — estrutura, textos-modelo, legendas e calendário de datas.
- `references/icones.md` — ícones SVG prontos para funções e datas.
