import { test } from "../utilities/fixtures";
import homeData from "../testData/home.json";
import { ExpectedValueProvider } from "../utilities/valueProvider";

class LoginTest extends ExpectedValueProvider {
  constructor() {
    super();
  }

  runTest() {
    test.describe("Validating login page tests", () => {
      test("Login user with correct email and password", async ({
        runner,
        homePage,
        loginPage,
        accountDeletedPage,
      }) => {
        await runner.navigateTo(homeData.baseUrl);
        await runner.verifyElementIsVisible(homePage.homePageLogo);

        await runner.validateAndClick(
          homePage.signupButton,
          homeData.expectedText
        );
        await runner.verifyElementIsVisible(loginPage.loginHeader);

        await runner.fillInputBox(loginPage.emailInput, "mukto1@example.com");
        await runner.fillInputBox(loginPage.passwordInput, "11110000");
        await runner.clickOnElement(loginPage.loginButton);

        await runner.verifyElementIsVisible(homePage.loggedInAsUserName);
        await runner.clickOnElement(homePage.deleteAccountButton);

        await runner.verifyElementIsVisible(
          accountDeletedPage.accountDeletedHeader
        );
        // await runner.clickOnElement(accountDeletedPage.continueButton);
      });

      test("Login user with incorrect email and password", async ({
        runner,
        homePage,
        loginPage,
      }) => {
        await runner.navigateTo(homeData.baseUrl);
        await runner.verifyElementIsVisible(homePage.homePageLogo);

        await runner.validateAndClick(
          homePage.signupButton,
          homeData.expectedText
        );
        // await runner.verifyElementIsVisible(loginPage.loginHeader);

        // await runner.fillInputBox(
        //   loginPage.emailInput,
        //   "wronguser@example.com"
        // );
        // await runner.fillInputBox(loginPage.passwordInput, "wrongpassword");
        // await runner.clickOnElement(loginPage.loginButton);

        // await runner.verifyElementIsVisible(loginPage.incorrectLoginError);
      });
    });
  }
}

const loginTest = new LoginTest();
loginTest.runTest();
