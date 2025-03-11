import { test } from "./fixture";
import { expect } from "@playwright/test";

test("Kendo dropdown", async ({ page }) => {
  await page.goto(
    "https://www.telerik.com/kendo-angular-ui/components/dropdowns#angular-dropdowns-overview"
  );

  const acceptCookiesBtn = page.getByRole("button", {
    name: "Accept and Close",
  });
  await acceptCookiesBtn.click();

  const exampleBtn = page.getByRole("button", { name: "EXAMPLE" });
  await exampleBtn.scrollIntoViewIfNeeded();

  const frame = page.frameLocator("iframe[title='Demo']");

  const dropdown = frame.locator("kendo-dropdownlist button");
  await dropdown.scrollIntoViewIfNeeded();
  await dropdown.click();
});

test("Kendo dropdown POM", async ({ angularDropdownPage }) => {
  await angularDropdownPage.clickDropdown();
  const expectedItem = "Tennis";
  await angularDropdownPage.selectDropDownItems(expectedItem);
  expect(await angularDropdownPage.getSelectedValue()).toBe(expectedItem);
});
