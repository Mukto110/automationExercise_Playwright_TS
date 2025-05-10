import { test } from "../utilities/fixtures";
import { ExpectedValueProvider } from "../utilities/valueProvider";

class SubscriptionTest extends ExpectedValueProvider {
  constructor() {
    super();
  }

  runTest() {
    test.describe("Verify Subscription on Home Page", () => {
      test.beforeEach(async ({ runner, homePage }) => {
        await runner.navigateTo(process.env.BASE_URL!);
        await runner.verifyElementIsVisible(homePage.homePageLogo);
      });

      test("Verify Subscription on Home Page", async ({ runner, homePage }) => {
        await runner.scrollToElement(homePage.footerId);

        await runner.verifyContainText(
          homePage.subscriptionText,
          "Subscription"
        );

        await runner.fillInputBox(
          homePage.subscriptionInput,
          "testuser@example.com"
        );
        await runner.clickOnElement(homePage.subscriptionArrowButton);

        // await runner.verifyElementIsVisible(homePage.subscriptionSuccessMessage);
        // await runner.verifyContainText(
        //   homePage.subscriptionSuccessMessage,
        //   "You have been successfully subscribed!"
        // );
      });
    });

    test.describe("Verify Subscription on Cart Page", () => {
      test.beforeEach(async ({ runner, homePage }) => {
        await runner.navigateTo(process.env.BASE_URL!);
        await runner.verifyElementIsVisible(homePage.homePageLogo);
      });

      test("Verify Subscription in Cart Page", async ({ runner, homePage }) => {
        await runner.clickOnElement(homePage.cartButton);
        await runner.scrollToElement(homePage.footerId);

        await runner.verifyContainText(
          homePage.subscriptionText,
          "Subscription"
        );
        await runner.fillInputBox(
          homePage.subscriptionInput,
          "testuser@example.com"
        );
        await runner.clickOnElement(homePage.subscriptionArrowButton);
        // await runner.verifyElementIsVisible(
        //   homePage.subscriptionSuccessMessage
        // );
        // await runner.verifyContainText(
        //   homePage.subscriptionSuccessMessage,
        //   "You have been successfully subscribed!"
        // );
      });
    });
  }
}

const subscriptionTest = new SubscriptionTest();
subscriptionTest.runTest();
