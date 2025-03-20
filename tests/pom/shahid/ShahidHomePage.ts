import { Locator } from "@playwright/test";
import { BasePage } from "../BasePage";

export class ShahidHomePage extends BasePage {
  private contactUs: Locator;

  constructor(page) {
    super(page);
    this.url = "https://shahid.mbc.net/en";

    this.contactUs = this.page.locator(
      "#shahid-light-footer a[href='/en/contact-us']"
    );
  }

  async scrollTillFind(): Promise<boolean> {
    const MAX_SCROLL = 20;
    let index = 0;

    for (index = 0; index < MAX_SCROLL; index++) {
      if (await this.contactUs.isVisible()) return true;

      await this.page.evaluate(() => {
        window.scrollBy(0, document.body.scrollHeight);
      });
console.log("index : " + index);
      //   await this.page.waitForTimeout(1000);
    }

    console.log("index : " + index);

    return false;
  }

  async clickContactUs(): Promise<void> {
    // await this.page.waitForTimeout(8000);
    await this.contactUs.click();
  }
}
