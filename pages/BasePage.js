export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(path) {
    await this.page.goto(path);
  }

  async getTitle() {
    return await this.page.title();
  }

  async waitForElement(locator, timeout = 30000) {
    await locator.waitFor({ state: 'visible', timeout });
  }
}
