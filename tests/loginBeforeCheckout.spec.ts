import { test } from "../utilities/fixtures";
import homeData from "../testData/home.json";
import { ExpectedValueProvider } from "../utilities/valueProvider";

class LoginBeforeCheckoutTest extends ExpectedValueProvider {
  constructor() {
    super();
  }

  // Existed account:
  // email -> mukto1@example.com
  // password -> 11110000

  runTest() {
    test.describe("Place Order: Login before Checkout", () => {
      test("Login before checkout and place order successfully", async ({
        runner,
        homePage,
        loginPage,
        productsPage,
        cartPage,
        checkoutPage,
        paymentPage,
        accountDeletedPage,
      }) => {
        await runner.navigateTo(homeData.baseUrl);
        await runner.verifyElementIsVisible(homePage.homePageLogo);

        await runner.clickOnElement(homePage.signupButton);
        await runner.fillInputBox(loginPage.emailInput, "mukto1@example.com");
        await runner.fillInputBox(loginPage.passwordInput, "11110000");
        await runner.clickOnElement(loginPage.loginButton);
        await runner.verifyElementIsVisible(homePage.loggedInAsUserName);

        await runner.clickOnElement(homePage.productsButton);
        await runner.mouseHover(productsPage.firstProductCard);
        await runner.clickOnElement(productsPage.firstAddToCartButton);
        await runner.clickOnElement(productsPage.viewCartButton);

        await runner.verifyContainText(
          cartPage.cartPageHeader,
          "Shopping Cart"
        );
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
    });
  }
}

const loginBeforeCheckoutTest = new LoginBeforeCheckoutTest();
loginBeforeCheckoutTest.runTest();
