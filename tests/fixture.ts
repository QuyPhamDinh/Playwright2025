import { AngularDropDownPage } from "./pom/AngularDropDownPage";
import { AutoCompleteBindingPage } from "./pom/AutoCompleteBindingPage";
import { test as base } from "@playwright/test";
import { CookiesOverlay } from "./pom/CookiesOverlay";

type MyFixture = {
  angularDropdownPage: AngularDropDownPage;
  autocompletePage: AutoCompleteBindingPage;
};

export const test = base.extend<MyFixture>({
  angularDropdownPage: async ({ page }, use) => {
    const angularDropdownPage = new AngularDropDownPage(page);
    const cookiesOverlay = new CookiesOverlay(page);
    await cookiesOverlay.acceptCookies();
    await use(angularDropdownPage);
  },
  autocompletePage: async ({ page }, use) => {
    const autocompletePage = new AutoCompleteBindingPage(page);
    const cookiesOverlay = new CookiesOverlay(page);
    await cookiesOverlay.acceptCookies();
    await use(autocompletePage);
  },
});
