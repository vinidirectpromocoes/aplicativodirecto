// Gera os posts do Instagram (1080x1350) a partir de posts.json usando template.html.
// Uso: node render.js                  -> todos os posts (feed 1080x1350)
//      node render.js iphone-17        -> só o post com esse id
//      node render.js --story [id]     -> stories 1080x1920 (usa o bloco "story" de cada post)
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const dir = __dirname;
const posts = JSON.parse(fs.readFileSync(path.join(dir, 'posts.json'), 'utf8'));
const story = process.argv.includes('--story');
const filtro = process.argv.slice(2).find(a => !a.startsWith('--'));
const altura = story ? 1920 : 1350;

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: altura }, deviceScaleFactor: 1 });
  fs.mkdirSync(path.join(dir, 'out'), { recursive: true });

  for (const base of posts.filter(p => !filtro || p.id === filtro)) {
    const post = story ? { ...base, ...base.story, formato: 'story' } : base;
    await page.addInitScript(data => { window.POST = data; }, post);
    await page.goto('file://' + path.join(dir, 'template.html'), { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForFunction(() => document.getElementById('foto').complete);
    const saida = path.join(dir, 'out', `${post.id}${story ? '-story' : ''}.png`);
    await page.locator('#post').screenshot({ path: saida });
    console.log('ok', saida);
  }
  await browser.close();
})();
