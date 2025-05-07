import { test } from "../utilities/fixtures";
import homeData from "../testData/home.json";
import { ExpectedValueProvider } from "../utilities/valueProvider";

class AddReviewOnProductTest extends ExpectedValueProvider {
  constructor() {
    super();
  }

  runTest() {
    test("Add review on product", async ({
      runner,
      homePage,
      productsPage,
      productDetailPage,
    }) => {
      await runner.navigateTo(homeData.baseUrl);
      await runner.verifyElementIsVisible(homePage.homePageLogo);

      await runner.clickOnElement(homePage.productsButton);
      await runner.verifyContainText(
        productsPage.allProductsHeader,
        "All Products"
      );

      await runner.clickOnElement(productsPage.firstViewProductButton);

      await runner.scrollToElement(productDetailPage.reviewHeader);
      await runner.verifyContainText(
        productDetailPage.reviewHeader,
        "Write Your Review"
      );

      await runner.fillInputBox(productDetailPage.reviewNameInput, "Mukto");
      await runner.fillInputBox(
        productDetailPage.reviewEmailInput,
        "mukto@example.com"
      );
      await runner.fillInputBox(
        productDetailPage.reviewTextArea,
        "Great product, very satisfied!"
      );

      await runner.clickOnElement(productDetailPage.submitReviewButton);

      await runner.verifyContainText(
        productDetailPage.reviewSuccessMessage,
        "Thank you for your review."
      );
    });
  }
}

const reviewTest = new AddReviewOnProductTest();
reviewTest.runTest();
