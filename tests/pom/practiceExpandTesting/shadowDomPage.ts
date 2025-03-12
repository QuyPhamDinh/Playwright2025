import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class ShadowDomPage extends BasePage {
  private shadowHost: string = "#shadow-host";
  private shadowButton: Locator;
  private expandTestingLink: Locator;

  constructor(page: Page) {
    super(page);
    this.url = "https://practice.expandtesting.com/shadowdom";

    this.shadowButton = this.page.locator(`${this.shadowHost} >>> #my-btn`);
    this.expandTestingLink = this.page.getByText("Expand Testing");
  }

  async hoverOverButton(): Promise<Locator> {
    await this.expandTestingLink.scrollIntoViewIfNeeded();
    await this.shadowButton.hover();
    await this.page.waitForTimeout(800);
    return this.shadowButton;
  }

  async getBackgroundColor(): Promise<string> {
    return await this.shadowButton.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });
  }

  async debugAllStyles(): Promise<void> {
    const styles = await this.shadowButton.evaluate((el) => {
      const computedStyles = window.getComputedStyle(el);
      const stylesObject: Record<string, string> = {};

      for (let i = 0; i < computedStyles.length; i++) {
        const property = computedStyles[i];
        stylesObject[property] = computedStyles.getPropertyValue(property);
      }

      return JSON.stringify(stylesObject, null, 2);
    });

    console.log("Computed Styles:", styles);
  }

  async setupRoutes(): Promise<void> {
    await this.page.route("**/*", (route) => {
      const url = route.request().url();
      if (
        url.includes("ads") ||
        url.includes("doubleclick.net") ||
        url.includes("googleads")
      ) {
        route.abort(); //  Block ad requests
      } else {
        route.continue(); // Allow other requests
      }
    });
  }
}
