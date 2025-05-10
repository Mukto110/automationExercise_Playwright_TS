import { test } from "../utilities/fixtures";
import { ExpectedValueProvider } from "../utilities/valueProvider";

class ScrollTest extends ExpectedValueProvider {
  constructor() {
    super();
  }

  runTest() {
    test("Verify Scroll Up using 'Arrow' button and Scroll Down functionality", async ({
      runner,
      homePage,
    }) => {
      await runner.navigateTo(process.env.BASE_URL!);
      await runner.verifyElementIsVisible(homePage.homePageLogo);

      await runner.scrollToBottom();

      await runner.verifyElementIsVisible(homePage.subscriptionText);

      await runner.clickOnElement(homePage.scrollUpArrow);

      await runner.verifyContainText(
        homePage.practiceHeader,
        "Full-Fledged practice website for Automation Engineers"
      );
    });
  }
}

const scrollTest = new ScrollTest();
scrollTest.runTest();
