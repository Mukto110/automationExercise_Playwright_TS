import { test } from "../../utilities/fixtures";

// Login data:
// email -> mukto@example.com
// password -> 11110000

const email: string = process.env.TEST_EMAIL || "mukto@example.com";
const password: string = process.env.TEST_PASSWORD || "11110000";

test("Logout user after successful login", async ({
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
  await runner.fillInputBox(loginPage.emailInput, email);
  await runner.fillInputBox(loginPage.passwordInput, password);
  await runner.clickOnElement(loginPage.loginButton);

  await runner.verifyElementIsVisible(homePage.loggedInAsUserName);
  await runner.clickOnElement(homePage.logoutButton);
  await runner.verifyElementIsVisible(loginPage.loginHeader);
});
