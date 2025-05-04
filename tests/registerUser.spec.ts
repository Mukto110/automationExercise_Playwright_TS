import { test } from "../utilities/fixtures";
import homeData from "../testData/home.json";
import { ExpectedValueProvider } from "../utilities/valueProvider";

class RegistrationTest extends ExpectedValueProvider {
  constructor() {
    super();
  }
  runTest() {
    test.describe("Validating register page test", () => {
      test("Validating user register", async ({
        runner,
        homePage,
        registerPage,
      }) => {
        await runner.navigateTo(homeData.baseUrl);
        await runner.verifyElementIsVisible(homePage.homePageLogo);
        await runner.validateAndClick(
          homePage.signupButton,
          homeData.expectedText
        );
        await runner.verifyElementIsVisible(registerPage.registerHeader);
        await runner.fillInputBox(registerPage.nameInput, "Mukto121");
        await runner.fillInputBox(registerPage.emailInput, "mukto@example.com");
        await runner.clickOnElement(registerPage.signupButton);
        await runner.verifyElementIsVisible(registerPage.accountInfoHeader);
        await runner.clickOnElement(registerPage.radioButtonTitleMr);
        await runner.verifyToHaveValue(registerPage.userName, "Mukto121");
        await runner.verifyToHaveValue(
          registerPage.userEmail,
          "mukto@example.com"
        );
        await runner.fillInputBox(registerPage.userPassword, "12342345");
        await runner.selectDropdownByValue(registerPage.day, "4");
        await runner.selectDropdownByValue(registerPage.month, "4");
        await runner.selectDropdownByValue(registerPage.year, "1997");
        await runner.clickOnElement(registerPage.newsletterCheckbox);
        await runner.clickOnElement(registerPage.specialOfferCheckbox);
        await runner.fillInputBox(registerPage.firstName, "Meraj Hossain");
        await runner.fillInputBox(registerPage.lastName, "Mukto");
        await runner.fillInputBox(registerPage.company, "Devsdenbd");
        await runner.fillInputBox(registerPage.address1, "amar basha");
        await runner.fillInputBox(registerPage.address2, "amin er basha");
        await runner.selectDropdownByValue(registerPage.country, "Australia");
        await runner.fillInputBox(registerPage.state, "Mirpur");
        await runner.fillInputBox(registerPage.city, "Dhaka");
        await runner.fillInputBox(registerPage.zipCode, "1216");
        await runner.fillInputBox(registerPage.mobileNumber, "12345678");
        await runner.clickOnElement(registerPage.createAccountButton);
      });
    });
  } // end run test
}

const testSuit = new RegistrationTest();
testSuit.runTest();
