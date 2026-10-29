#!/usr/bin/env node
// Renderiza um post HTML em PNG. Cada elemento .canvas vira uma imagem
// (carrossel com 3 .canvas => nome-1.png, nome-2.png, nome-3.png).
//
// Uso: node render.js <post.html> <saida.png>
//
// Caminhos relativos do HTML (brand.css, logos, fotos/) resolvem na pasta
// assets/ da skill, então o post pode ficar salvo em qualquer lugar.
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

const [input, output] = process.argv.slice(2);
if (!input || !output) {
  console.error('Uso: node render.js <post.html> <saida.png>');
  process.exit(1);
}

const assetsDir = path.resolve(__dirname, '..', 'assets') + '/';

(async () => {
  let html = fs.readFileSync(input, 'utf8');
  if (!/<base\s/i.test(html)) {
    html = html.replace(/<head>/i, `<head><base href="file://${assetsDir}">`);
  }
  const tmp = path.join(path.dirname(path.resolve(output)), `.render-${process.pid}.html`);
  fs.writeFileSync(tmp, html);

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
  try {
    await page.goto('file://' + tmp, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(400);

    const canvases = await page.$$('.canvas');
    if (canvases.length === 0) throw new Error('Nenhum elemento .canvas encontrado no HTML.');
    const ext = path.extname(output) || '.png';
    const base = output.slice(0, output.length - path.extname(output).length);
    const written = [];
    // Uma arte por vez, sozinha na tela e com a viewport do tamanho dela: com várias
    // artes empilhadas além da viewport, o Chromium compõe camadas erradas (retângulos fantasma).
    for (let i = 0; i < canvases.length; i++) {
      const file = canvases.length === 1 ? base + ext : `${base}-${i + 1}${ext}`;
      const size = await page.evaluate(idx => {
        document.querySelectorAll('.canvas').forEach((c, j) => { c.style.display = j === idx ? '' : 'none'; });
        const r = document.querySelectorAll('.canvas')[idx].getBoundingClientRect();
        return { width: Math.ceil(r.width), height: Math.ceil(r.height) };
      }, i);
      await page.setViewportSize(size);
      await page.waitForTimeout(150);
      await canvases[i].screenshot({ path: file });
      written.push(file);
    }
    await page.evaluate(() => document.querySelectorAll('.canvas').forEach(c => { c.style.display = ''; }));

    // Avisa sobre texto que sai da arte (título cortado na borda, CTA fora da tela etc.).
    const overflow = await page.evaluate(() => {
      const out = [];
      for (const canvas of document.querySelectorAll('.canvas')) {
        const c = canvas.getBoundingClientRect();
        for (const el of canvas.querySelectorAll('*')) {
          if (el.closest('[aria-hidden="true"]') || !el.textContent.trim() || [...el.children].some(ch => ch.textContent.trim())) continue;
          const r = el.getBoundingClientRect();
          if (r.left < c.left - 1 || r.right > c.right + 1 || r.top < c.top - 1 || r.bottom > c.bottom + 1)
            out.push(el.textContent.trim().slice(0, 40));
        }
      }
      return out;
    });
    written.forEach(f => console.log('OK', f));
    if (overflow.length) console.log('ATENÇÃO, texto possivelmente cortado:', overflow.join(' | '));
  } finally {
    await browser.close();
    fs.unlinkSync(tmp);
  }
})().catch(err => { console.error(err.message); process.exit(1); });
