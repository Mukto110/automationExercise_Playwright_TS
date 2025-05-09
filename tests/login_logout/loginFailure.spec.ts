import { test } from "../../utilities/fixtures";

test("Login user with incorrect email and password", async ({
  runner,
  homePage,
  loginPage,
}) => {
  await runner.navigateTo(process.env.BASE_URL!);
  if (await runner.isElementVisible(homePage.logoutButton)) {
    await runner.clickOnElement(homePage.logoutButton);
  }

  await runner.verifyElementIsVisible(homePage.homePageLogo);
  await runner.clickOnElement(homePage.signupButton);
  await runner.verifyElementIsVisible(loginPage.loginHeader);
  await runner.fillInputBox(loginPage.emailInput, "wrong@example.com");
  await runner.fillInputBox(loginPage.passwordInput, "wrongpass");
  await runner.clickOnElement(loginPage.loginButton);
  await runner.verifyElementIsVisible(loginPage.incorrectLoginError);
});
