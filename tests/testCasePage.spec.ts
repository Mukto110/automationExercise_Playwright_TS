import { test } from "../utilities/fixtures";
import { ExpectedValueProvider } from "../utilities/valueProvider";

class TestCaseTest extends ExpectedValueProvider {
  constructor() {
    super();
  }

  runTest() {
    test("Verify Test Cases page is accessible and visible", async ({
      runner,
      homePage,
      testCasePage,
    }) => {
      await runner.navigateTo(process.env.BASE_URL!);
      await runner.verifyElementIsVisible(homePage.homePageLogo);
      await runner.clickOnElement(homePage.testCaseButton);
      await runner.verifyElementIsVisible(testCasePage.testCasesHeader);
    });
  }
}

const testCaseTest = new TestCaseTest();
testCaseTest.runTest();
