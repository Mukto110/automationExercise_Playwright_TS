import { test } from "../utilities/fixtures";
import homeData from "../testData/home.json";
import { ExpectedValueProvider } from "../utilities/valueProvider";

class CheckoutTest extends ExpectedValueProvider {
  constructor() {
    super();
  }

  runTest() {
    test.describe("Place Order: Register while Checkout", () => {
      test("Register user during checkout and place order successfully", async ({
        runner,
        homePage,
        productsPage,
        cartPage,
        accountCreatedPage,
        checkoutPage,
        paymentPage,
        accountDeletedPage,
        registerPage,
      }) => {
        await runner.navigateTo(homeData.baseUrl);
        await runner.verifyElementIsVisible(homePage.homePageLogo);
        // // Add products to cart
        await runner.clickOnElement(homePage.productsButton);
        await runner.mouseHover(productsPage.firstProductCard);
        await runner.clickOnElement(productsPage.firstAddToCartButton);
        await runner.clickOnElement(productsPage.viewCartButton);
        await runner.verifyContainText(
          cartPage.cartPageHeader,
          "Shopping Cart"
        );
        // // Proceed to Checkout
        await runner.clickOnElement(cartPage.proceedToCheckoutButton);
        await runner.clickOnElement(cartPage.registerOrLoginButton);
        // // Register user
        const uniqueEmail = `user${Date.now()}@example.com`;
        await runner.fillInputBox(registerPage.nameInput, "Test User");
        await runner.fillInputBox(registerPage.emailInput, uniqueEmail);
        await runner.clickOnElement(registerPage.signupButton);

        // Full signup form -->
        await runner.verifyElementIsVisible(registerPage.accountInfoHeader);
        await runner.clickOnElement(registerPage.radioButtonTitleMr);
        await runner.verifyToHaveValue(registerPage.userName, "Test User");
        await runner.verifyToHaveValue(registerPage.userEmail, uniqueEmail);
        await runner.fillInputBox(registerPage.userPassword, "12312312");
        await runner.selectDropdownByValue(registerPage.day, "20");
        await runner.selectDropdownByValue(registerPage.month, "3");
        await runner.selectDropdownByValue(registerPage.year, "1995");
        await runner.clickOnElement(registerPage.newsletterCheckbox);
        await runner.clickOnElement(registerPage.specialOfferCheckbox);
        await runner.fillInputBox(registerPage.firstName, "Test User");
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

        // <-- signup form end here -->

        await runner.clickOnElement(homePage.cartButton);
        await runner.clickOnElement(cartPage.proceedToCheckoutButton);
        // // Address and Order Review
        await runner.verifyElementIsVisible(checkoutPage.addressDetailsSection);
        await runner.verifyElementIsVisible(checkoutPage.reviewOrderSection);
        await runner.fillInputBox(
          checkoutPage.commentTextArea,
          "Test order, please deliver soon."
        );
        await runner.clickOnElement(checkoutPage.placeOrderButton);
        // // Payment
        await runner.verifyElementIsVisible(paymentPage.paymentPageHeader);
        await runner.fillInputBox(paymentPage.nameOnCardInput, "Test User");
        await runner.fillInputBox(
          paymentPage.cardNumberInput,
          "4242424242424242"
        );
        await runner.fillInputBox(paymentPage.cvcInput, "123");
        await runner.fillInputBox(paymentPage.expiryMonthInput, "12");
        await runner.fillInputBox(paymentPage.expiryYearInput, "2030");
        await runner.clickOnElement(paymentPage.payAndConfirmButton);
        // await runner.wait(5);
        // await runner.verifyElementIsVisible(paymentPage.successMessage);
        // // Delete account
        await runner.clickOnElement(homePage.deleteAccountButton);
        await runner.verifyElementIsVisible(
          accountDeletedPage.accountDeletedHeader
        );
        await runner.clickOnElement(accountDeletedPage.continueButton);
      });
    });
  }
}

const checkoutTest = new CheckoutTest();
checkoutTest.runTest();
