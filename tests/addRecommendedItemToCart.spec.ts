import { test } from "../utilities/fixtures";
import homeData from "../testData/home.json";
import { ExpectedValueProvider } from "../utilities/valueProvider";

class AddRecommendedItemToCartTest extends ExpectedValueProvider {
  constructor() {
    super();
  }

  runTest() {
    test("Add to cart from Recommended Items section", async ({
      runner,
      homePage,
      cartPage,
    }) => {
      await runner.navigateTo(homeData.baseUrl);
      await runner.verifyElementIsVisible(homePage.homePageLogo);

      await runner.scrollToBottom();

      await runner.verifyContainText(
        homePage.recommendedItemsHeader,
        "recommended items"
      );

      await runner.mouseHover(homePage.recommendedProductCard);
      await runner.clickOnElement(homePage.recommendedAddToCartButton);

      await runner.clickOnElement(homePage.recommendedViewCartButton);

      await runner.verifyElementIsVisible(cartPage.cartRecommendedProduct);
    });
  }
}

const recommendedCartTest = new AddRecommendedItemToCartTest();
recommendedCartTest.runTest();
