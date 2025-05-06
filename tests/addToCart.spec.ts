import { test } from "../utilities/fixtures";
import homeData from "../testData/home.json";
import { ExpectedValueProvider } from "../utilities/valueProvider";

class CartTest extends ExpectedValueProvider {
  constructor() {
    super();
  }

  runTest() {
    test.describe("Verify Adding Products to Cart", () => {
      test.beforeEach(async ({ runner, homePage }) => {
        await runner.navigateTo(homeData.baseUrl);
        await runner.verifyElementIsVisible(homePage.homePageLogo);
      });

      test("Add Products in Cart", async ({
        runner,
        homePage,
        productsPage,
      }) => {
        await runner.clickOnElement(homePage.productsButton);

        await runner.mouseHover(productsPage.firstProductCard);
        await runner.clickOnElement(productsPage.firstAddToCartButton);
        await runner.clickOnElement(productsPage.continueShoppingButton);

        await runner.mouseHover(productsPage.secondProductCard);
        await runner.clickOnElement(productsPage.secondAddToCartButton);
        await runner.clickOnElement(productsPage.viewCartButton);

        await runner.verifyElementIsVisible(productsPage.cartProduct1);
        await runner.verifyElementIsVisible(productsPage.cartProduct2);

        await runner.verifyContainText(
          productsPage.cartProduct1Price,
          "Rs. 500"
        );
        await runner.verifyContainText(
          productsPage.cartProduct2Price,
          "Rs. 400"
        );

        await runner.verifyContainText(productsPage.cartProduct1Quantity, "1");
        await runner.verifyContainText(productsPage.cartProduct2Quantity, "1");

        await runner.verifyContainText(
          productsPage.cartProduct1Total,
          "Rs. 500"
        );
        await runner.verifyContainText(
          productsPage.cartProduct2Total,
          "Rs. 400"
        );
      });

      test("Verify Product Quantity in Cart", async ({
        runner,
        homePage,
        productsPage,
        productDetailPage,
      }) => {
        await runner.clickOnElement(homePage.firstViewProductButton);

        await runner.verifyUrlContains("product_details");

        await runner.fillInputBox(productDetailPage.quantityInput, "4");
        await runner.clickOnElement(productDetailPage.addToCartButton);
        await runner.clickOnElement(productsPage.viewCartButton);

        await runner.verifyElementIsVisible(productsPage.cartProduct1);
        await runner.verifyContainText(productsPage.cartProduct1Quantity, "4");
      });
    });
  }
}

const cartTest = new CartTest();
cartTest.runTest();
