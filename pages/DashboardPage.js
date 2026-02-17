import { BasePage } from './BasePage.js';

export class DashboardPage extends BasePage {
  constructor(page) {
    super(page);
    this.logoutButton = page.locator('button, a, [role="button"]').filter({ hasText: /logout/i });
  }

  async logout() {
    await this.logoutButton.click();
  }
}
