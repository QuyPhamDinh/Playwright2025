import { Locator } from "@playwright/test";
import { BasePage } from "../BasePage";

export class AlertPage extends BasePage {
  private alertButton: Locator;
  private confirmButton: Locator;
  private promptButton: Locator;

  private message: string;
  private defaultPromptMessage: string;
  private subSequentMessage: string;

  constructor(page) {
    super(page);
    this.url = "http://uitestingplayground.com/alerts";

    this.alertButton = this.page.locator("#alertButton");
    // this.alertButton = this.page.getByRole("button", { name: "Alert" });

    this.confirmButton = this.page.locator("#confirmButton");
    // this.confirmButton = this.page.getByRole("button", { name: "Confirm" });

    this.promptButton = this.page.locator("#promptButton");
    // this.promptButton = this.page.getByRole("button", { name: "Prompt" });
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

  async getDefaultPromptMessage(): Promise<string> {
    return this.defaultPromptMessage;
  }

  async getSubSequentMessage(): Promise<string> {
    return this.subSequentMessage;
  }

  /**
   * This method is no need because the alert is closed automatically
   */
  async closeAlert(): Promise<void> {
    this.page.on("dialog", async (dialog) => {
      await dialog.accept();
    });
  }

  async clickConfirmButton(): Promise<void> {
    this.page.on("dialog", async (dialog) => {
      this.message = dialog.message();
      await dialog.dismiss();
    });
    await this.confirmButton.click();
  }

  //   async clickPromptButton(): Promise<void> {
  //     this.page.on("dialog", async (dialog) => {
  //       console.log(
  //         `Dialog type: ${dialog.type()}, message: ${dialog.message()}`
  //       );

  //       this.message = dialog.message();
  //       this.defaultPromptMessage = dialog.defaultValue();

  //       if (dialog.type() === "alert") this.subSequentMessage = dialog.message();

  //       await dialog.accept("Hello, World!");
  //     });
  //     await this.promptButton.click();
  //   }

  async clickPromptButton(): Promise<void> {
    return new Promise<void>(async (resolve) => {
      this.page.on("dialog", async (dialog) => {
        console.log(
          `Dialog type: ${dialog.type()}, message: ${dialog.message()}`
        );

        if (dialog.type() === "prompt") {
          this.message = dialog.message();
          this.defaultPromptMessage = dialog.defaultValue();
          await dialog.accept("Hello, World!");
        } else if (dialog.type() === "alert") {
          this.subSequentMessage = dialog.message();
          await dialog.dismiss();
          resolve(); // Resolve the promise after the second dialog
        } else {
          await dialog.dismiss();
          resolve();
        }
      });
      await this.promptButton.click();
    });
  }
}
