const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false 
  });
  const context = await browser.newContext({
    recordVideo : {
        dir: `videos`
    }}
  ); //Strart a window
  const page = await context.newPage();
  await page.goto('https://www.wikipedia.org/');
  await page.getByRole('link', { name: 'Español 1 876 000+ artículos' }).click();
  await page.getByRole('link', { name: 'Invasión rusa de Ucrania', exact: true }).click();
  await page.getByRole('heading', { name: 'Invasión rusa de Ucrania' }).click();
  await page.getByRole('heading', { name: 'Invasión rusa de Ucrania' }).locator('span').click();
  await page.getByText('Ir al contenido Menú principal Menú principal mover a la barra lateral ocultar N').press('Control+c');
  await page.screenshot({path: `test.png`})

  // ---------------------
  await context.close();
  await browser.close();
})();