import { test } from "../../utilities/fixtures";
import homeData from "../../testData/home.json";
import { ExpectedValueProvider } from "../../utilities/valueProvider";
import { fakeUser } from "../../utilities/fakeData";

const email = fakeUser.email;
const password = fakeUser.password;

class LoginBeforeCheckoutTest extends ExpectedValueProvider {
  constructor() {
    super();
  }

  runTest() {
    test("Login before checkout and place order successfully", async ({
      runner,
      homePage,
      loginPage,
      productsPage,
      cartPage,
      checkoutPage,
      paymentPage,
      accountDeletedPage,
      registerPage,
      accountCreatedPage,
    }) => {
      await runner.navigateTo(process.env.BASE_URL!);
      await runner.verifyElementIsVisible(homePage.homePageLogo);

      // Register Account //
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
      await runner.fillInputBox(registerPage.userPassword, password);
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
      // Register end //

      await runner.clickOnElement(homePage.logoutButton);

      await runner.clickOnElement(homePage.signupButton);
      await runner.fillInputBox(loginPage.emailInput, email);
      await runner.fillInputBox(loginPage.passwordInput, password);
      await runner.clickOnElement(loginPage.loginButton);
      await runner.verifyElementIsVisible(homePage.loggedInAsUserName);

      await runner.clickOnElement(homePage.productsButton);
      await runner.mouseHover(productsPage.firstProductCard);
      await runner.clickOnElement(productsPage.firstAddToCartButton);
      await runner.clickOnElement(productsPage.viewCartButton);
      await runner.verifyContainText(cartPage.cartPageHeader, "Shopping Cart");
      await runner.clickOnElement(cartPage.proceedToCheckoutButton);

      await runner.verifyElementIsVisible(checkoutPage.addressDetailsSection);
      await runner.verifyElementIsVisible(checkoutPage.reviewOrderSection);
      await runner.fillInputBox(
        checkoutPage.commentTextArea,
        "Test order placed after login"
      );
      await runner.clickOnElement(checkoutPage.placeOrderButton);

      await runner.verifyElementIsVisible(paymentPage.paymentPageHeader);
      await runner.fillInputBox(paymentPage.nameOnCardInput, "Logged User");
      await runner.fillInputBox(
        paymentPage.cardNumberInput,
        "4242424242424242"
      );
      await runner.fillInputBox(paymentPage.cvcInput, "123");
      await runner.fillInputBox(paymentPage.expiryMonthInput, "12");
      await runner.fillInputBox(paymentPage.expiryYearInput, "2030");
      await runner.clickOnElement(paymentPage.payAndConfirmButton);

      // await runner.verifyElementIsVisible(paymentPage.successMessage);

      await runner.clickOnElement(homePage.deleteAccountButton);
      await runner.verifyElementIsVisible(
        accountDeletedPage.accountDeletedHeader
      );
      await runner.clickOnElement(accountDeletedPage.continueButton);
    });
  }
}

const loginBeforeCheckoutTest = new LoginBeforeCheckoutTest();
loginBeforeCheckoutTest.runTest();
