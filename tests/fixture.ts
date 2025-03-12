import { AngularDropDownPage } from "./pom/kendo/AngularDropDownPage";
import { AutoCompleteBindingPage } from "./pom/kendo/AutoCompleteBindingPage";
import { test as base } from "@playwright/test";
import { CookiesOverlay } from "./pom/kendo/CookiesOverlay";

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
