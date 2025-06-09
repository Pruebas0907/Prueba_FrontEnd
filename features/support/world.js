const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('playwright');

class CustomWorld {
  constructor() {
    this.browser = null;
    this.context = null;
    this.page = null;
  }

  async launchBrowser() {
    const browserName = process.env.BROWSER || 'chromium'; 

    switch (browserName.toLowerCase()) {
      case 'firefox':
        this.browser = await firefox.launch({ headless: false });
        break;
      case 'webkit':
        this.browser = await webkit.launch({ headless: false });
        break;
      case 'chromium':
      default:
        this.browser = await chromium.launch({ headless: false });
    }

    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async closeBrowser() {
    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
  }
}

setWorldConstructor(CustomWorld);