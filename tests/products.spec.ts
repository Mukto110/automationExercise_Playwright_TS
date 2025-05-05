import { test } from "../utilities/fixtures";
import homeData from "../testData/home.json";
import { ExpectedValueProvider } from "../utilities/valueProvider";

class ProductsTest extends ExpectedValueProvider {
  constructor() {
    super();
  }

  runTest() {
    test.describe("Validating All Products and Product Detail page", () => {
      test("Verify All Products list and first product details", async ({
        runner,
        homePage,
        productsPage,
      }) => {
        await runner.navigateTo(homeData.baseUrl);

        await runner.verifyElementIsVisible(homePage.homePageLogo);

        await runner.clickOnElement(homePage.productsButton);

        await runner.verifyElementIsVisible(productsPage.allProductsHeader);

        await runner.verifyElementIsVisible(productsPage.productsList);

        await runner.clickOnElement(productsPage.firstViewProductButton);

        await runner.verifyUrlContains("product_details");

        await runner.verifyElementIsVisible(productsPage.productName);
        await runner.verifyElementIsVisible(productsPage.productCategory);
        await runner.verifyElementIsVisible(productsPage.productPrice);
        await runner.verifyContainText(
          productsPage.productAvailability,
          "Availability: In Stock"
        );
        await runner.verifyElementIsVisible(productsPage.productCondition);
        await runner.verifyElementIsVisible(productsPage.productBrand);
      });
    });
  }
}

const productsTest = new ProductsTest();
productsTest.runTest();
