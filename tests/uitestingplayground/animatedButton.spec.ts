import exp from "constants";
import { test } from "../fixture";
import { expect } from "@playwright/test";

test("test animated button", async ({ animatedButtonPage }) => {
  await animatedButtonPage.clickStartButton();
  await animatedButtonPage.clickStopAnimatedButton();

  expect(await animatedButtonPage.getStatusText()).toBe(
    "Moving Target clicked. It's class name is 'btn btn-primary'"
  );
});
