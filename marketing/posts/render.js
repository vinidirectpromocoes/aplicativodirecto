// Gera os posts do Instagram (1080x1350) a partir de posts.json usando template.html.
// Uso: node render.js            -> todos os posts
//      node render.js iphone-17  -> só o post com esse id
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const dir = __dirname;
const posts = JSON.parse(fs.readFileSync(path.join(dir, 'posts.json'), 'utf8'));
const filtro = process.argv[2];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
  fs.mkdirSync(path.join(dir, 'out'), { recursive: true });

  for (const post of posts.filter(p => !filtro || p.id === filtro)) {
    await page.addInitScript(data => { window.POST = data; }, post);
    await page.goto('file://' + path.join(dir, 'template.html'), { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForFunction(() => document.getElementById('foto').complete);
    const saida = path.join(dir, 'out', `${post.id}.png`);
    await page.locator('#post').screenshot({ path: saida });
    console.log('ok', saida);
  }
  await browser.close();
})();
