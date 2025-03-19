import { expect } from "@playwright/test";
import { test } from "../fixture";

test("test alert", async ({ alertPage }) => {
  await alertPage.goToPage();
  await alertPage.clickAlertButton();

  expect(await alertPage.getAlertText()).toBe(
    "Today is a working day.\n" + "Or less likely a holiday."
  );
});
