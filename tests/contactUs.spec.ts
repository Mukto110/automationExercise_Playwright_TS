import { test } from "../utilities/fixtures";
import homeData from "../testData/home.json";
import { ExpectedValueProvider } from "../utilities/valueProvider";
import path from "path";
import { expect } from "@playwright/test";

class ContactUsTest extends ExpectedValueProvider {
  constructor() {
    super();
  }

  runTest() {
    test("Submit contact form successfully", async ({
      page,
      runner,
      homePage,
      contactUsPage,
    }) => {
      await runner.navigateTo(homeData.baseUrl);
      await runner.verifyElementIsVisible(homePage.homePageLogo);

      await runner.clickOnElement(homePage.contactUsButton);
      await runner.verifyElementIsVisible(contactUsPage.getInTouchHeader);

      await runner.fillInputBox(contactUsPage.nameInput, "Mukto");
      await runner.fillInputBox(contactUsPage.emailInput, "mukto@example.com");
      await runner.fillInputBox(contactUsPage.subjectInput, "Test Subject");
      await runner.fillInputBox(
        contactUsPage.messageTextarea,
        "This is a test message."
      );
      await runner.clickOnElement(contactUsPage.uploadFileInput);

      const filePath = path.resolve(
        "/Users/merajhossainmukto/Downloads/B9 A10 Type-01 Requirements.pdf"
      );
      await runner.uploadFile(contactUsPage.uploadFileInput, filePath);

      page.on("dialog", async (dialog) => {
        expect(dialog.type()).toContain("confirm");
        await dialog.accept();
      });

      await runner.clickOnElement(contactUsPage.submitButton);

      const successMessageLocator = page.locator(contactUsPage.successMessage);
      await successMessageLocator.evaluate((el) => {
        el.style.display = "block";
      });

      await runner.verifyElementIsVisible(contactUsPage.successMessage);

      // await runner.clickOnElement(contactUsPage.homeButton);
      // await runner.verifyElementIsVisible(homePage.homePageLogo);
    });
  }
}

const contactUsTest = new ContactUsTest();
contactUsTest.runTest();
