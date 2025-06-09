class BasePage {

  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async fill(selector, value) {
    await this.page.locator(selector).fill(value);
  }

  async click(selector) {
    await this.page.locator(selector).click();
  }

  async getText(selector) {
    return (await this.page.locator(selector).textContent()).trim();
  }

  async urlContiene(path) {
    return this.page.url().includes(path);
  }
  
  async existeElemento(selector) {
    return await this.page.locator(selector).count() > 0;
  }
  
  async wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

module.exports = BasePage;