// Escreve chamada + título (uma linha, branco) + frase sobre uma arte pronta, no padrão dos posts.
// Uso: node titulo-sobre-arte.js <arte.png> <saida.png> "<TÍTULO>" <centroY> ["<CHAMADA>"] ["<FRASE>"]
const fs = require('fs');
const { chromium } = require('playwright');
const [arte, saida, titulo, centroY, chamada = '', frase = ''] = process.argv.slice(2);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  await page.setContent(`<!doctype html><html><head>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;800&display=swap" rel="stylesheet">
<style>*{margin:0}body{width:1080px;height:1350px;position:relative;overflow:hidden;font-family:"Plus Jakarta Sans"}
img{position:absolute;inset:0}
#b{position:absolute;left:0;right:0;text-align:center}
.k{font-size:21px;font-weight:500;letter-spacing:.38em;padding-left:.38em;color:rgba(255,255,255,.82)}
#t{margin-top:18px;white-space:nowrap;font-weight:800;font-size:96px;line-height:.94;color:#fff;
letter-spacing:-.01em;text-shadow:0 4px 24px rgba(0,0,0,.35)}
.s{margin-top:22px;font-size:27px;font-weight:500;color:#f4f4f4;text-shadow:0 2px 12px rgba(0,0,0,.5)}</style></head>
<body><img src="data:image/png;base64,${fs.readFileSync(arte).toString('base64')}">
<div id="b"><div class="k"></div><div id="t"></div><div class="s"></div></div></body></html>`);
  await page.evaluate(async ([titulo, centroY, chamada, frase]) => {
    await document.fonts.ready;
    await document.fonts.load('800 96px "Plus Jakarta Sans"');
    const b = document.getElementById('b'), t = document.getElementById('t');
    t.textContent = titulo; b.querySelector('.k').textContent = chamada; b.querySelector('.s').textContent = frase;
    if (!chamada) b.querySelector('.k').remove();
    if (!frase) b.querySelector('.s').remove();
    let tam = 96;
    const r = document.createRange(); r.selectNodeContents(t);
    while (r.getBoundingClientRect().width > 940 && tam > 40) { tam -= 2; t.style.fontSize = tam + 'px'; }
    b.style.top = (centroY - b.offsetHeight / 2) + 'px';
  }, [titulo, Number(centroY), chamada, frase]);
  await page.waitForFunction(() => document.querySelector('img').complete);
  await page.screenshot({ path: saida });
  await browser.close();
})();
