// Escreve um título em uma linha (branco, Plus Jakarta Sans 800) sobre uma arte pronta.
// Uso: node titulo-sobre-arte.js <arte.png> <saida.png> "<TÍTULO>" <centroY>
const fs = require('fs');
const { chromium } = require('playwright');
const [arte, saida, titulo, centroY] = process.argv.slice(2);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  await page.setContent(`<!doctype html><html><head>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800&display=swap" rel="stylesheet">
<style>*{margin:0}body{width:1080px;height:1350px;position:relative;overflow:hidden}
img{position:absolute;inset:0}
#t{position:absolute;left:0;right:0;text-align:center;white-space:nowrap;font:800 96px "Plus Jakarta Sans";
color:#fff;letter-spacing:-.01em;text-shadow:0 4px 24px rgba(0,0,0,.35);line-height:1}</style></head>
<body><img src="data:image/png;base64,${fs.readFileSync(arte).toString('base64')}"><div id="t"></div></body></html>`);
  await page.evaluate(async ([titulo, centroY]) => {
    await document.fonts.load('800 96px "Plus Jakarta Sans"');
    const t = document.getElementById('t'); t.textContent = titulo;
    let tam = 96;
    const r = document.createRange(); r.selectNodeContents(t);
    while (r.getBoundingClientRect().width > 940 && tam > 40) { tam -= 2; t.style.fontSize = tam + 'px'; }
    t.style.top = (centroY - t.offsetHeight / 2) + 'px';
  }, [titulo, Number(centroY)]);
  await page.waitForFunction(() => document.querySelector('img').complete);
  await page.screenshot({ path: saida });
  await browser.close();
})();
