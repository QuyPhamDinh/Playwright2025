import { AngularDropDownPage } from "./pom/kendo/AngularDropDownPage";
import { AutoCompleteBindingPage } from "./pom/kendo/AutoCompleteBindingPage";
import { test as base } from "@playwright/test";
import { CookiesOverlay } from "./pom/kendo/CookiesOverlay";
import { AnimatedButtonPage } from "./pom/uitestingplayground/AnimatedButtonPage";

type MyFixture = {
  angularDropdownPage: AngularDropDownPage;
  autocompletePage: AutoCompleteBindingPage;
  animatedButtonPage: AnimatedButtonPage;
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
  animatedButtonPage: async ({ page }, use) => {
    const animatedButtonPage = new AnimatedButtonPage(page);
    await use(animatedButtonPage);
  },
});
