import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class CookiesOverlay extends BasePage {
  private acceptCookiesBtn: Locator;
  constructor(page: Page) {
    super(page);
    this.acceptCookiesBtn = page.getByRole("button", {
      name: "Accept and Close",
    });
  }

  public async acceptCookies() {
    await this.acceptCookiesBtn.click();
  }
}
