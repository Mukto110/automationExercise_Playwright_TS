import { test } from "../utilities/fixtures";
import { ExpectedValueProvider } from "../utilities/valueProvider";

class ScrollWithoutArrowTest extends ExpectedValueProvider {
  constructor() {
    super();
  }

  runTest() {
    test("Verify Scroll Up without 'Arrow' button and Scroll Down functionality", async ({
      runner,
      homePage,
    }) => {
      await runner.navigateTo(process.env.BASE_URL!);
      await runner.verifyElementIsVisible(homePage.homePageLogo);

      await runner.scrollToBottom();

      await runner.verifyElementIsVisible(homePage.subscriptionText);

      await runner.scrollToTop();

      await runner.verifyContainText(
        homePage.practiceHeader,
        "Full-Fledged practice website for Automation Engineers"
      );
    });
  }
}

const scrollTest = new ScrollWithoutArrowTest();
scrollTest.runTest();
