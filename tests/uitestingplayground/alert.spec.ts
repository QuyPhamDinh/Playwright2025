import { expect } from "@playwright/test";
import { test } from "../fixture";

test("test alert", async ({ alertPage }) => {
  await alertPage.goToPage();
  await alertPage.clickAlertButton();
});

test("test alert Confirm", async ({ alertPage }) => {
  await alertPage.goToPage();
  await alertPage.clickConfirmButton();
  expect
    .soft(await alertPage.getAlertText())
    .toBe("Today is Friday.\n" + "Do you agree?");
});

test("test alert Pronpt", async ({ alertPage }) => {
  await alertPage.goToPage();
  await alertPage.clickPromptButton();
  expect(await alertPage.getAlertText()).toBe(
    "Choose \"cats\" or 'dogs'." + "\n" + "Enter your value:"
  );

  expect(await alertPage.getDefaultPromptMessage()).toBe("cats");

  expect(await alertPage.getSubSequentMessage()).toContain("Hello, World!");
});
