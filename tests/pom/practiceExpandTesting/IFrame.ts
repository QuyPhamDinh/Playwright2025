import { FrameLocator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class IFrame extends BasePage {
  private iframe: FrameLocator;
  private iframeCssSelector: string;
  constructor(page: Page, locator: string) {
    super(page);
    this.iframeCssSelector = locator;
    this.iframe = page.locator(locator).first().contentFrame();
  }

  public async scrollIntoView() {
    await this.page
      .locator(this.iframeCssSelector)
      .first()
      .scrollIntoViewIfNeeded();
  }

  public getIFrame(): FrameLocator {
    return this.iframe;
  }

  public async closeIFrame() {
    await this.iframe.locator("#cbb").click();
  }

   async waitForIFrame() {
    await this.page.waitForLoadState("domcontentloaded");
  }
}
