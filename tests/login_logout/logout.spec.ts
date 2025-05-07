import { test } from "../../utilities/fixtures";
import homeData from "../../testData/home.json";

// Login data:
// email -> mukto@example.com
// password -> 11110000

test("Logout user after successful login", async ({
  runner,
  homePage,
  loginPage,
}) => {
  await runner.navigateTo(homeData.baseUrl);
  if (await runner.isElementVisible(homePage.logoutButton)) {
    await runner.clickOnElement(homePage.logoutButton);
  }

  await runner.verifyElementIsVisible(homePage.homePageLogo);
  await runner.clickOnElement(homePage.signupButton);
  await runner.verifyElementIsVisible(loginPage.loginHeader);
  await runner.fillInputBox(loginPage.emailInput, "mukto@example.com");
  await runner.fillInputBox(loginPage.passwordInput, "11110000");
  await runner.clickOnElement(loginPage.loginButton);

  await runner.verifyElementIsVisible(homePage.loggedInAsUserName);
  await runner.clickOnElement(homePage.logoutButton);
  await runner.verifyElementIsVisible(loginPage.loginHeader);
});
