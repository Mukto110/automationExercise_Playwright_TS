import { test } from "../utilities/fixtures";
import { ExpectedValueProvider } from "../utilities/valueProvider";

class ProductsTest extends ExpectedValueProvider {
  constructor() {
    super();
  }

  runTest() {
    test.describe("Validating All Products and Product Detail page", () => {
      test.beforeEach(async ({ runner, homePage, productsPage }) => {
        await runner.navigateTo(process.env.BASE_URL!);

        await runner.verifyElementIsVisible(homePage.homePageLogo);

        await runner.clickOnElement(homePage.productsButton);

        await runner.verifyElementIsVisible(productsPage.allProductsHeader);
      });

      test("Verify All Products list and first product details", async ({
        runner,
        productsPage,
      }) => {
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

      test("Verify product search displays correct results", async ({
        runner,
        productsPage,
      }) => {
        await runner.fillInputBox(productsPage.searchInput, "top");
        await runner.clickOnElement(productsPage.searchButton);
        await runner.verifyElementIsVisible(
          productsPage.searchedProductsHeader
        );
        await runner.verifyElementIsVisible(productsPage.searchedProductList);
      });
    });
  }
}

const productsTest = new ProductsTest();
productsTest.runTest();
