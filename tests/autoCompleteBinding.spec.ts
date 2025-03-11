import test, { expect, Locator } from "@playwright/test";
import { CookiesOverlay } from "./pom/CookiesOverlay";
import { AutoCompleteBindingPage } from "./pom/AutoCompleteBindingPage";

test("AutoComplete binding", async ({ page }) => {
  const autoCompleteBindingPage = new AutoCompleteBindingPage(page);
  const cookiesOverlay = new CookiesOverlay(page);
  await cookiesOverlay.acceptCookies();

  const inputText = "Ar";
  await autoCompleteBindingPage.typeInAutoComplete(inputText);
  const itemFocus = await autoCompleteBindingPage.getItemFocused();
  expect(await itemFocus.textContent()).toContain(inputText);
});
