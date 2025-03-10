import test, { chromium, expect } from "@playwright/test";
import { AngularDropDownPage } from "./pom/AngularDropDownPage";
import { CookiesOverlay } from "./pom/CookiesOverlay";

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

test("Kendo dropdown POM", async ({ page }) => {
  const angularDropDownPage = new AngularDropDownPage(page);

  const cookiesOverlay = new CookiesOverlay(page);
  await cookiesOverlay.acceptCookies();

  await angularDropDownPage.clickDropdown();
  const expectedItem = "Tennis";
  await angularDropDownPage.selectDropDownItems(expectedItem);
  expect(await angularDropDownPage.getSelectedValue()).toBe(expectedItem);
});
