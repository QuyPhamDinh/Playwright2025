import { expect } from "@playwright/test";
import { test } from "../fixture";
import { GeoLocationPage } from "../pom/practiceExpandTesting/GeoLocationPage";

test("test geolocation", async ({ geolocationPage }) => {
  await geolocationPage.goToPage();
  await geolocationPage.emulateGeolocation();
  await geolocationPage.clickWhereButton();
  expect(await geolocationPage.getLatvalue()).toBe(
    GeoLocationPage.latitude.toString()
  );
  expect(await geolocationPage.getLongvalue()).toBe(
    GeoLocationPage.longitude.toString()
  );
});
