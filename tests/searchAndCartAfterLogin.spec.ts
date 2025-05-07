import { test } from "../utilities/fixtures";
import homeData from "../testData/home.json";
import { ExpectedValueProvider } from "../utilities/valueProvider";

class SearchAndCartTest extends ExpectedValueProvider {
  constructor() {
    super();
  }

  runTest() {
    test("Search products, add to cart, and verify cart persists after login", async ({
      runner,
      homePage,
      productsPage,
      cartPage,
      loginPage,
    }) => {
      await runner.navigateTo(homeData.baseUrl);
      await runner.verifyElementIsVisible(homePage.homePageLogo);

      const logoutVisible = await runner.isElementVisible(
        homePage.logoutButton
      );
      if (logoutVisible) {
        await runner.clickOnElement(homePage.logoutButton);
      }

      await runner.clickOnElement(homePage.productsButton);

      await runner.verifyContainText(
        productsPage.allProductsHeader,
        "All Products"
      );

      await runner.fillInputBox(productsPage.searchInput, "Tshirt");
      await runner.clickOnElement(productsPage.searchButton);

      await runner.verifyContainText(
        productsPage.searchedProductsHeader,
        "Searched Products"
      );

      await runner.verifyElementIsVisible(productsPage.firstProductCard);
      await runner.verifyElementIsVisible(productsPage.secondProductCard);

      await runner.mouseHover(productsPage.firstProductCard);
      await runner.clickOnElement(productsPage.firstAddToCartButton);
      await runner.clickOnElement(productsPage.continueShoppingButton);

      await runner.mouseHover(productsPage.secondProductCard);
      await runner.clickOnElement(productsPage.secondAddToCartButton);
      await runner.clickOnElement(productsPage.viewCartButton);

      await runner.verifyElementIsVisible(cartPage.cartProduct2);
      await runner.verifyElementIsVisible(cartPage.cartProduct28);

      await runner.verifyElementIsVisible(homePage.signupButton);
      await runner.clickOnElement(homePage.signupButton);
      await runner.fillInputBox(loginPage.emailInput, "mukto@example.com");
      await runner.fillInputBox(loginPage.passwordInput, "11110000");
      await runner.clickOnElement(loginPage.loginButton);

      await runner.clickOnElement(homePage.cartButton);
      await runner.verifyElementIsVisible(cartPage.cartProduct2);
      await runner.verifyElementIsVisible(cartPage.cartProduct28);

      await runner.clickOnElement(homePage.logoutButton);
    });
  }
}

const searchCartTest = new SearchAndCartTest();
searchCartTest.runTest();
