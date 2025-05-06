import { test } from "../utilities/fixtures";
import homeData from "../testData/home.json";
import { ExpectedValueProvider } from "../utilities/valueProvider";

class TestCaseTest extends ExpectedValueProvider {
  constructor() {
    super();
  }

  runTest() {
    test.describe("Validating Test Cases page", () => {
      test("Verify Test Cases page is accessible and visible", async ({
        runner,
        homePage,
        testCasePage,
      }) => {
        await runner.navigateTo(homeData.baseUrl);

        await runner.verifyElementIsVisible(homePage.homePageLogo);

        await runner.clickOnElement(homePage.testCaseButton);

        await runner.verifyElementIsVisible(testCasePage.testCasesHeader);
      });
    });
  }
}

const testCaseTest = new TestCaseTest();
testCaseTest.runTest();
