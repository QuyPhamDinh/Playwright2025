import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class AnimatedButtonPage extends BasePage {
  private animatedButton: Locator;
  private startButton: Locator;
  private statusText: Locator;

  constructor(page: Page) {
    super(page);
    this.url = "http://uitestingplayground.com/animation";
    this.goToPage();

    this.startButton = this.page.getByRole("button", {
      name: "Start Animation",
    });
    this.animatedButton = this.page.getByRole("button", {
      name: "Moving Target   ",
    });

    this.statusText = this.page.locator("#opstatus");
  }

  async clickStartButton(): Promise<void> {
    await this.startButton.click();
  }

  async clickStopAnimatedButton(): Promise<void> {
    await this.page.waitForFunction(() => {
      const button = document.querySelector("#movingTarget");
      return button?.getAttribute("class")?.includes("spin");
    });
    await this.animatedButton.click();
  }

  async getStatusText(): Promise<string | null> {
    return await this.statusText.textContent();
  }
}
