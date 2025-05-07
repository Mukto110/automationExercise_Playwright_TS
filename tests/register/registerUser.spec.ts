import { test } from "../../utilities/fixtures";
import homeData from "../../testData/home.json";
import { ExpectedValueProvider } from "../../utilities/valueProvider";

const timestamp = Date.now();
const email = `mukto+${timestamp}@example.com`;

class RegistrationTest extends ExpectedValueProvider {
  constructor() {
    super();
  }

  runTest() {
    test("Validating user register", async ({
      runner,
      homePage,
      registerPage,
      accountCreatedPage,
      accountDeletedPage,
    }) => {
      await runner.navigateTo(homeData.baseUrl);
      await runner.verifyElementIsVisible(homePage.homePageLogo);
      await runner.validateAndClick(
        homePage.signupButton,
        homeData.expectedText
      );
      await runner.verifyElementIsVisible(registerPage.registerHeader);
      await runner.fillInputBox(registerPage.nameInput, "Mukto121");
      await runner.fillInputBox(registerPage.emailInput, email);
      await runner.clickOnElement(registerPage.signupButton);
      await runner.verifyElementIsVisible(registerPage.accountInfoHeader);
      await runner.clickOnElement(registerPage.radioButtonTitleMr);
      await runner.verifyToHaveValue(registerPage.userName, "Mukto121");
      await runner.verifyToHaveValue(registerPage.userEmail, email);
      await runner.fillInputBox(registerPage.userPassword, "11110000");
      await runner.selectDropdownByValue(registerPage.day, "20");
      await runner.selectDropdownByValue(registerPage.month, "3");
      await runner.selectDropdownByValue(registerPage.year, "1995");
      await runner.clickOnElement(registerPage.newsletterCheckbox);
      await runner.clickOnElement(registerPage.specialOfferCheckbox);
      await runner.fillInputBox(registerPage.firstName, "Siddique");
      await runner.fillInputBox(registerPage.lastName, "Kuddus");
      await runner.fillInputBox(registerPage.company, "Fakir");
      await runner.fillInputBox(
        registerPage.address1,
        "siddique er nijer basha"
      );
      await runner.fillInputBox(
        registerPage.address2,
        "siddique er baper basha"
      );
      await runner.selectDropdownByValue(registerPage.country, "Canada");
      await runner.fillInputBox(registerPage.state, "Mirpur");
      await runner.fillInputBox(registerPage.city, "Dhaka");
      await runner.fillInputBox(registerPage.zipCode, "1216");
      await runner.fillInputBox(registerPage.mobileNumber, "2143214");
      await runner.clickOnElement(registerPage.createAccountButton);
      await runner.verifyElementIsVisible(
        accountCreatedPage.accountCreatedTitle
      );
      await runner.clickOnElement(accountCreatedPage.continueButton);
      await runner.wait(5);
      await runner.verifyElementIsVisible(homePage.loggedInAsUserName);
      await runner.verifyElementIsVisible(homePage.deleteAccountButton);
      await runner.clickOnElement(homePage.deleteAccountButton);
      await runner.verifyElementIsVisible(
        accountDeletedPage.accountDeletedHeader
      );
      await runner.clickOnElement(accountDeletedPage.continueButton);
    });
  }
}

const registrationTest = new RegistrationTest();
registrationTest.runTest();
