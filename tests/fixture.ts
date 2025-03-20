import { AngularDropDownPage } from "./pom/kendo/AngularDropDownPage";
import { AutoCompleteBindingPage } from "./pom/kendo/AutoCompleteBindingPage";
import { test as base } from "@playwright/test";
import { CookiesOverlay } from "./pom/kendo/CookiesOverlay";
import { AnimatedButtonPage } from "./pom/uitestingplayground/AnimatedButtonPage";
import { AlertPage } from "./pom/uitestingplayground/AlertPage";
import { GeoLocationPage } from "./pom/practiceExpandTesting/GeoLocationPage";
import { ShahidHomePage } from "./pom/shahid/ShahidHomePage";

type MyFixture = {
  angularDropdownPage: AngularDropDownPage;
  autocompletePage: AutoCompleteBindingPage;
  animatedButtonPage: AnimatedButtonPage;
  alertPage: AlertPage;
  geolocationPage: GeoLocationPage;
  shahidHomePage: ShahidHomePage;
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
  alertPage: async ({ page }, use) => {
    const alertPage = new AlertPage(page);
    await use(alertPage);
  },

  geolocationPage: async ({ page }, use) => {
    const geolocationPage = new GeoLocationPage(page);
    await use(geolocationPage);
  },

  shahidHomePage: async ({ page }, use) => {
    const shahidHomePage = new ShahidHomePage(page);
    await use(shahidHomePage);
  },
});
