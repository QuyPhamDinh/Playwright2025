import { test } from "./fixture";
import { expect } from "@playwright/test";

test("AutoComplete binding", async ({ autocompletePage }) => {
  const inputText = "Ar";
  await autocompletePage.typeInAutoComplete(inputText);
  const itemFocus = await autocompletePage.getItemFocused();
  expect(await itemFocus.textContent()).toContain(inputText);
});
