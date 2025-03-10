import { FrameLocator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class IFrame extends BasePage {
  private iframe: FrameLocator;
  private iframeCssSelector: string = "iframe[title='Demo']";
  constructor(page: Page) {
    super(page);
    this.iframe = page.frameLocator(this.iframeCssSelector);
  }

  public async scrollIntoView() {
    await this.page.locator(this.iframeCssSelector).scrollIntoViewIfNeeded();
  }

  public getIFrame(): FrameLocator {
    return this.iframe;
  }
}
