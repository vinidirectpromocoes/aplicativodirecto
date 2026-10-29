# Ícones (estilo Lucide: traço 2, cantos arredondados)

Cole dentro de `<div class="ic">…</div>` (itens de vaga/passos) ou `.symbol` (datas). Ajuste `width/height`
(50 no story, 40 no feed, 140–150 no símbolo de data; no símbolo use `stroke-width="1.6"`).
Todos usam `viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`
— abaixo só o miolo de cada um.

## Funções / vagas
| Uso | Miolo do SVG |
|---|---|
| Repositor (carrinho) | `<path d="M2 3h3l2.6 12.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.5L22 7H6"/><circle cx="10" cy="20.5" r="1.4"/><circle cx="18" cy="20.5" r="1.4"/>` |
| Aux. de depósito (caixa) | `<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5M12 13v8"/><path d="m7.5 5.5 9 5"/>` |
| Operador(a) de caixa (cartão) | `<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M6 15h4"/>` |
| Balconista (loja) | `<path d="M3 9l1.5-5h15L21 9"/><path d="M3 9h18v2a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0z"/><path d="M5 13v8h14v-8"/><path d="M10 21v-5h4v5"/>` |
| Atendimento (pessoas) | `<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7"/><path d="M18 14a6 6 0 0 1 3.5 6"/>` |
| Padaria/Gastronomia (chapéu) | `<path d="M7 18h10v3H7z"/><path d="M7 18v-4.5A4.5 4.5 0 0 1 6 5a5 5 0 0 1 6-2.5A5 5 0 0 1 18 5a4.5 4.5 0 0 1-1 8.5V18"/>` |
| Hortifruti (maçã) | `<path d="M12 7c-1.5-1-5-1.5-7 1.5S4 17 7 20c1.5 1.5 3 1 5 0 2 1 3.5 1.5 5 0 3-3 4-8.5 2-11.5S13.5 6 12 7z"/><path d="M12 7c0-2 1-4 3-5"/>` |
| Promotor(a) (etiqueta) | `<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/>` |
| Requisito/benefício (check) | `<path d="M20 6 9 17l-5-5"/>` |
| Local (pin) | `<path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>` |
| Data/agenda | `<rect x="3" y="4.5" width="18" height="16.5" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/>` |
| Documento/currículo | `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>` |

## Datas comemorativas
| Data | Miolo do SVG |
|---|---|
| Trabalhador (ferramenta) | `<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>` |
| Mães / Mulher / Namorados (coração) | `<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.2l7.8-7.8 1-1.1a5.5 5.5 0 0 0 0-7.7z"/>` |
| Crianças (balão) | `<path d="M12 16c-3.9 0-7-3.4-7-7.5S8.1 1 12 1s7 3.4 7 7.5S15.9 16 12 16z"/><path d="m10.6 16 1.4 1.6 1.4-1.6"/><path d="M12 17.6c0 1.6-1.6 1.9-1.6 3.2S12 22.6 12 23"/>` |
| Cliente / Pais (estrela) | `<path d="m12 2 2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 21l1.6-7L2 9.2l7.1-.6z"/>` |
| Natal / Ano-Novo (presente) | `<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/>` |
| Independência / Data Magna (bandeira) | `<path d="M4 22V4"/><path d="M4 4h13l-2 4 2 4H4"/>` |
| Páscoa (ovo) | `<path d="M12 22c-4 0-7-3-7-7.5C5 9 8 2 12 2s7 7 7 12.5c0 4.5-3 7.5-7 7.5z"/><path d="m6 13 3-2 3 2 3-2 3 2"/>` |
