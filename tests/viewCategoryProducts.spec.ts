import { test } from "../utilities/fixtures";
import homeData from "../testData/home.json";
import { ExpectedValueProvider } from "../utilities/valueProvider";

class CategoryTest extends ExpectedValueProvider {
  constructor() {
    super();
  }

  runTest() {
    test("View products under Women and Men categories", async ({
      runner,
      homePage,
      categoryPage,
    }) => {
      await runner.navigateTo(homeData.baseUrl);
      await runner.verifyElementIsVisible(homePage.homePageLogo);
      await runner.verifyElementIsVisible(categoryPage.categorySidebar);

      await runner.clickOnElement(categoryPage.womenCategoryHeader);
      await runner.clickOnElement(categoryPage.womenTopsLink);

      await runner.verifyContainText(
        categoryPage.categoryHeaderTitle,
        "Women - Tops Products"
      );

      await runner.clickOnElement(categoryPage.menCategoryHeader);
      await runner.clickOnElement(categoryPage.menTShirtsLink);

      await runner.verifyContainText(
        categoryPage.categoryHeaderTitle,
        "Men - Tshirts Products"
      );
    });
  }
}

const categoryTest = new CategoryTest();
categoryTest.runTest();
