import test, { expect } from "@playwright/test";
import { ShadowDomPage } from "./pom/practiceExpandTesting/shadowDomPage";
import { IFrame } from "./pom/practiceExpandTesting/IFrame";

test("test shdow dom", async ({ page }) => {
  const shadowDom = new ShadowDomPage(page);
  await shadowDom.setupRoutes();
  await shadowDom.goToPage();
  const iframe = new IFrame(page, "#aswift_3");

  const button = await shadowDom.hoverOverButton();

  expect(await shadowDom.getBackgroundColor()).toContain("rgb(236, 114, 17)");
});
