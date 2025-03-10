import { Page } from "@playwright/test";

export class BasePage {
  protected page: Page;
  protected url: string;

  constructor(page: Page) {
    this.page = page;
  }

  async goToPage() {
    await this.page.goto(this.url);
  }

  async acceptCookies() {
    await this.page.click("text=Accept and Close");
  }
}
