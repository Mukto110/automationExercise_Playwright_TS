import { test } from "../utilities/fixtures";
import { ExpectedValueProvider } from "../utilities/valueProvider";
import fs from "fs/promises";

class DownloadInvoiceTest extends ExpectedValueProvider {
  constructor() {
    super();
  }

  runTest() {
    test("Download Invoice after placing order", async ({
      runner,
      homePage,
      productsPage,
      cartPage,
      registerPage,
      accountCreatedPage,
      checkoutPage,
      paymentPage,
      orderPlacePage,
      accountDeletedPage,
    }) => {
      const timestamp = Date.now();
      const email = `mukto+${timestamp}@example.com`;

      await runner.navigateTo(process.env.BASE_URL!);
      await runner.verifyElementIsVisible(homePage.homePageLogo);

      if (await runner.isElementVisible(homePage.logoutButton)) {
        await runner.clickOnElement(homePage.logoutButton);
      }

      await runner.clickOnElement(homePage.productsButton);
      await runner.verifyContainText(
        productsPage.allProductsHeader,
        "All Products"
      );
      await runner.mouseHover(productsPage.firstProductCard);
      await runner.clickOnElement(productsPage.firstAddToCartButton);
      await runner.clickOnElement(productsPage.viewCartButton);
      await runner.verifyElementIsVisible(cartPage.cartProduct1);

      await runner.clickOnElement(cartPage.proceedToCheckoutButton);
      await runner.clickOnElement(checkoutPage.registerLoginButton);

      //   // Register User
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

      await runner.verifyElementIsVisible(homePage.loggedInAsUserName);

      await runner.clickOnElement(homePage.cartButton);
      await runner.verifyElementIsVisible(cartPage.cartProduct1);
      await runner.clickOnElement(cartPage.proceedToCheckoutButton);

      await runner.verifyElementIsVisible(checkoutPage.deliveryAddressBox);
      await runner.verifyElementIsVisible(checkoutPage.billingAddressBox);

      await runner.fillInputBox(
        checkoutPage.commentInput,
        "Please deliver between 9am-5pm"
      );
      await runner.clickOnElement(checkoutPage.placeOrderButton);

      await runner.fillInputBox(paymentPage.nameOnCardInput, "Mukto Siddique");
      await runner.fillInputBox(
        paymentPage.cardNumberInput,
        "4242424242424242"
      );
      await runner.fillInputBox(paymentPage.cvcInput, "123");
      await runner.fillInputBox(paymentPage.expiryMonthInput, "04");
      await runner.fillInputBox(paymentPage.expiryYearInput, "2028");
      await runner.clickOnElement(paymentPage.payAndConfirmButton);

      // const successMessageLocator = page.locator(paymentPage.successMessage);

      // await successMessageLocator.evaluate((el) => {
      //   el.style.display = "block";
      //   el.style.visibility = "visible";
      //   el.style.opacity = "1";
      // });

      // await runner.verifyContainText(
      //   paymentPage.successMessage,
      //   "Your order has been placed successfully!"
      // );

      const downloadPath = await runner.waitForDownload(() =>
        runner.clickOnElement(orderPlacePage.downloadInvoiceButton)
      );
      await runner.clickOnElement(orderPlacePage.continueButton);

      await runner.clickOnElement(homePage.deleteAccountButton);
      await runner.verifyElementIsVisible(
        accountDeletedPage.accountDeletedHeader
      );
      await runner.clickOnElement(accountDeletedPage.continueButton);

      try {
        await fs.unlink(downloadPath);
        console.log(`🧹 Deleted downloaded invoice file: ${downloadPath}`);
      } catch (error) {
        console.warn(`⚠️ Failed to delete invoice: ${error}`);
      }
    });
  }
}

const invoiceTest = new DownloadInvoiceTest();
invoiceTest.runTest();
