import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import { IFrame } from "./IFrame";

export class AutoCompleteBindingPage extends BasePage {
  private autoCompleteInput: Locator;
  private autoCompleteItems: Locator;

  private iFrame: IFrame;

  constructor(page: Page) {
    super(page);

    this.url =
      "https://www.telerik.com/kendo-angular-ui/components/dropdowns/autocomplete/data-binding";
    this.goToPage();

    this.iFrame = new IFrame(page);
    this.autoCompleteInput = this.iFrame
      .getIFrame()
      .locator("kendo-autocomplete input");
    this.autoCompleteItems = this.iFrame.getIFrame().locator("kendo-list li");
  }

  async typeInAutoComplete(text: string) {
    await this.iFrame.scrollIntoView();
    await this.autoCompleteInput.fill(text);
  }

  async getItemFocused(): Promise<Locator> {
    console.log(
      "Number of list items found:",
      await this.autoCompleteItems.count()
    );

    // THIS DOES NOT WORK
    // const focusItem = this.autoCompleteItems.filter({
    //   has: this.iFrame.getIFrame().locator("kendo-list li.k-list-item.k-focus"),
    // });

    const focusItem = this.iFrame
      .getIFrame()
      .locator("kendo-list li.k-list-item.k-focus");

    console.log("Focused items count:", await focusItem.count());

    return focusItem.first() ?? null;
  }
}
