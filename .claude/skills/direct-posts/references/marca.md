# Identidade Direct Promoções

## Contatos (conferir em toda arte)
- WhatsApp de cadastro: **85 99224-5035** (formato internacional: 5585992245035)
- Instagram: **@directpromocoes** (tudo junto, sem acento, minúsculo)
- Área de atuação: Região Metropolitana de Fortaleza – CE (Fortaleza, Caucaia, Aquiraz, Eusébio, Maracanaú, Maranguape e arredores)

## Logo
Carrinho de compras formado por três barras azuis horizontais (largura decrescente), alça escura à direita e duas rodas. Abaixo, **DIRECT** em Montserrat Black azul (degradê #1e6bff → #0d3fb8) e **PROMOÇÕES** pequeno, espaçado, em marinho.
- Fundo claro → `logo-carrinho.svg` + classe `.logo`.
- Fundo escuro → `logo-carrinho-branco.svg` + classe `.logo.on-dark`.
- Versão compacta (topo de carrossel) → carrinho + "DIRECT" lado a lado, sem "PROMOÇÕES".
- Não distorça, não troque as cores do carrinho, não coloque sombra colorida no logo.

## Cores
| Token | Hex | Uso |
|---|---|---|
| `--navy-900` | #061334 | fundo principal (escuro) |
| `--navy-800` | #0a1f56 | fundo, texto sobre branco |
| `--blue-600` / `--blue-500` | #1450d8 / #1e6bff | botões, cartões, destaques |
| `--sky-400` / `--sky-300` | #4fb0ff / #8fd0ff | título em degradê, kickers, detalhes |
| `--white` | #ffffff | texto principal no escuro, cartões |
| `--wa` | #25d366 | só o círculo do ícone do WhatsApp |
| `--accent` | #ffc83d | selo pontual (ex.: "NOVO", "URGENTE"); no máx. 1 por arte |

Proporção recomendada: ~70% marinho/azul, ~20% branco, ~10% azul-claro. Datas comemorativas podem trazer uma cor temática (vermelho no Natal, verde-amarelo no 7 de Setembro) como **acento**, sem substituir o azul da marca.

## Tipografia (varie a fonte de destaque entre posts)
- **Destaque** (títulos): alterne entre Anton, Archivo Black, Bebas Neue, Montserrat Black (900) e Poppins ExtraBold (800). Consulte o histórico para não repetir a do último post.
- **Texto**: Montserrat, Archivo ou Poppins (500–800). Um conceito pode pedir algo próprio (ex.: Space Mono no cupom fiscal).
- **Script** (Caveat, Kaushan Script): só um toque humano curto ("Feliz", "Chama a gente!"). No máximo um uso por arte.
- Todas do Google Fonts, carregadas no `<head>` do post.

## Linguagem visual (constantes x variáveis)
Constantes: logo do carrinho, paleta azul com acento amarelo, ícones de traço (estilo Lucide, stroke 2), acabamento limpo, botão de WhatsApp sempre com destaque.

Variáveis a cada post: conceito, composição, fundo, fonte de destaque, uso de foto/ilustração, forma do CTA — ver `references/conceitos.md`. Os elementos dos exemplos (`.glow`, `.glass`, `.pill`, foto fundida à direita) são **um** estilo possível, já usado; não o transforme em padrão.

## Tom de voz
Direto, acolhedor e respeitoso, falando com "você". Valoriza a experiência do trabalhador de supermercado. Frases curtas, verbos de ação ("Faça seu cadastro", "Chame no WhatsApp", "Junte-se ao nosso time"). Evite promessas que a empresa não garante (salário, vaga certa, "contratação imediata") a menos que o usuário confirme.
