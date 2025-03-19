import { Locator } from "@playwright/test";
import { BasePage } from "../BasePage";

export class AlertPage extends BasePage {
  private alertButton: Locator;

  private message: string;

  constructor(page) {
    super(page);
    this.url = "http://uitestingplayground.com/alerts";

    this.alertButton = this.page.locator("#alertButton");
    // this.alertButton = this.page.getByRole("button", { name: "Alert" });
  }

  async clickAlertButton(): Promise<void> {
    this.page.on("dialog", async (dialog) => {
      this.message = dialog.message();
      await dialog.accept();
    });
    await this.alertButton.click();
  }

  async getAlertText(): Promise<string> {
    return this.message;
  }

  /**
   * This method is no need because the alert is closed automatically
   */
  async closeAlert(): Promise<void> {
    this.page.on("dialog", async (dialog) => {
      await dialog.accept();
    });
  }
}
