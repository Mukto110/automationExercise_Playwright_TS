import { test } from "../../utilities/fixtures";
import homeData from "../../testData/home.json";
import { ExpectedValueProvider } from "../../utilities/valueProvider";

// Existing account ->
// email -> mukto@example.com
// pass -> 11110000

const email: string = process.env.TEST_EMAIL || "mukto@example.com";

class RegisterWithExistingEmailTest extends ExpectedValueProvider {
  constructor() {
    super();
  }

  runTest() {
    test("Register user with existing email", async ({
      runner,
      homePage,
      registerPage,
    }) => {
      await runner.navigateTo(process.env.BASE_URL!);
      await runner.verifyElementIsVisible(homePage.homePageLogo);
      await runner.validateAndClick(
        homePage.signupButton,
        homeData.expectedText
      );
      await runner.verifyElementIsVisible(registerPage.registerHeader);
      await runner.fillInputBox(registerPage.nameInput, "Mukto121");
      await runner.fillInputBox(registerPage.emailInput, email);
      await runner.clickOnElement(registerPage.signupButton);
      await runner.verifyElementIsVisible(
        registerPage.emailAlreadyExistMessage
      );
    });
  }
}

const registerWithExistingEmailTest = new RegisterWithExistingEmailTest();
registerWithExistingEmailTest.runTest();
