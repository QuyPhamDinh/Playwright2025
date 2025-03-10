import { Frame, FrameLocator, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { IFrame } from "./IFrame";

export class AngularDropDownPage extends BasePage {
  private dropdown: Locator;
  private dropdownItems: Locator;

  private iFrame: IFrame;

  constructor(page: Page) {
    super(page);

    this.url =
      "https://www.telerik.com/kendo-angular-ui/components/dropdowns#angular-dropdowns-overview";
    this.goToPage();

    this.iFrame = new IFrame(page);
    this.dropdown = this.iFrame
      .getIFrame()
      .locator("kendo-dropdownlist .k-input-value-text");
    this.dropdownItems = this.iFrame.getIFrame().locator("kendo-list span");
  }

  // private frameLocator(): FrameLocator {
  //   return this.page.frameLocator("iframe[title='Demo']");
  // }

  async getSelectedValue(): Promise<string> {
    const selectedValue = await this.dropdown.textContent();
    return selectedValue ?? "";
  }

  async selectDropDownItems(expectedItem: string) {
    const selectedItem = this.dropdownItems.locator(`text=\"${expectedItem}\"`);
    await selectedItem.scrollIntoViewIfNeeded();
    await selectedItem.click();
  }

  async clickDropdown() {
    await this.iFrame.scrollIntoView();
    await this.dropdown.click();
  }
}
