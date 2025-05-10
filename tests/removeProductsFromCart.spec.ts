import { test } from "../utilities/fixtures";
import { ExpectedValueProvider } from "../utilities/valueProvider";

class RemoveCartTest extends ExpectedValueProvider {
  constructor() {
    super();
  }

  runTest() {
    test("User should be able to remove product from cart", async ({
      runner,
      homePage,
      productsPage,
      cartPage,
    }) => {
      await runner.navigateTo(process.env.BASE_URL!);
      await runner.verifyElementIsVisible(homePage.homePageLogo);

      await runner.clickOnElement(homePage.productsButton);
      await runner.mouseHover(productsPage.firstProductCard);
      await runner.clickOnElement(productsPage.firstAddToCartButton);
      await runner.clickOnElement(productsPage.viewCartButton);

      await runner.verifyContainText(cartPage.cartPageHeader, "Shopping Cart");

      await runner.clickOnElement(cartPage.firstProductDeleteButton);

      await runner.verifyElementIsHidden(cartPage.cartProduct1);
      await runner.verifyElementIsVisible(cartPage.emptyCartMessage);
    });
  }
}

const removeCartTest = new RemoveCartTest();
removeCartTest.runTest();
