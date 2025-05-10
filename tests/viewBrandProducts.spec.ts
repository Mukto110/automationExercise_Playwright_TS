import { test } from "../utilities/fixtures";
import { ExpectedValueProvider } from "../utilities/valueProvider";

class BrandTest extends ExpectedValueProvider {
  constructor() {
    super();
  }

  runTest() {
    test("View and switch between different brand product pages", async ({
      runner,
      homePage,
      brandPage,
    }) => {
      await runner.navigateTo(process.env.BASE_URL!);
      await runner.verifyElementIsVisible(homePage.homePageLogo);
      await runner.clickOnElement(homePage.productsButton);
      await runner.verifyElementIsVisible(brandPage.brandsSideBar);
      await runner.clickOnElement(brandPage.brandPoloLink);

      await runner.verifyContainText(
        brandPage.brandHeaderTitle,
        "Brand - Polo Products"
      );
      await runner.verifyElementIsVisible(brandPage.firstBrandProductCard);

      await runner.clickOnElement(brandPage.brandHMLink);

      await runner.verifyContainText(
        brandPage.brandHeaderTitle,
        "Brand - H&M Products"
      );
      await runner.verifyElementIsVisible(brandPage.firstBrandProductCard);
    });
  }
}

const brandTest = new BrandTest();
brandTest.runTest();
