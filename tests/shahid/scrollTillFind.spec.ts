import { test } from "../fixture";

test("test scroll with dynamic elements", async ({ shahidHomePage }) => {
  await shahidHomePage.goToPage();
  await shahidHomePage.clickContactUs();
//   await shahidHomePage.scrollTillFind();

//   await shahidHomePage.clickContactUs();
});
