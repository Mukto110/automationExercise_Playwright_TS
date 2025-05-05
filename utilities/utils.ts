import { expect, Page } from "@playwright/test";
import logger from "./logger";
// import { allure } from "allure-playwright";
import { ExpectedValueProvider } from "./valueProvider";

export class Utils {
  private page: Page;
  private expected: ExpectedValueProvider;

  constructor(page: Page) {
    this.page = page;
    this.expected = new ExpectedValueProvider();
  }

  private async captureScreenshotOnFailure(testName: string): Promise<void> {
    try {
      const screenshot = await this.page.screenshot();
      //   allure.attachment(`${testName} Screenshot`, screenshot, "image/png");
      logger.error(`${testName} failed. Screenshot captured.`);
    } catch (error) {
      logger.error("Error capturing screenshot:", error);
    }
  }

  private logMessage(message: string, level: "info" | "error" = "info"): void {
    if (level === "info") {
      logger.info(message);
    } else {
      logger.error(message);
    }
  }

  async navigateTo(url: string): Promise<void> {
    try {
      await this.page.goto(url);
      this.logMessage(`Navigated to ${url}`);
    } catch (error) {
      const errorMsg = `Failed to navigate to ${url}`;
      this.logMessage(errorMsg, "error");
      await this.captureScreenshotOnFailure("navigateTo");
      throw new Error(errorMsg);
    }
  }

  async verifyElementIsVisible(identifier: string): Promise<void> {
    try {
      await expect.soft(this.page.locator(identifier)).toBeVisible();
      this.logMessage(
        `Verified element with identifier ${identifier} is visible`
      );
    } catch (error) {
      const errorMsg = `Failed to verify element with identifier ${identifier} is visible`;
      this.logMessage(errorMsg, "error");
      await this.captureScreenshotOnFailure("verifyElementIsVisible");
      throw new Error(errorMsg);
    }
  }

  async clickOnElement(identifier: string): Promise<void> {
    try {
      await this.page.isVisible(identifier);
      await this.page.locator(identifier).click();
      this.logMessage(`Clicked on element with identifier: ${identifier}`);
    } catch (error) {
      const errorMsg = `Failed to click on element with identifier: ${identifier}`;
      this.logMessage(errorMsg, "error");
      await this.captureScreenshotOnFailure("clickOnElement");
      throw new Error(errorMsg);
    }
  }

  async validateAndClick(
    identifier: string,
    expectedText: string
  ): Promise<void> {
    try {
      await this.page.locator(identifier).focus();
      await expect.soft(this.page.locator(identifier)).toBeVisible();
      const actualText = await this.page.locator(identifier).textContent();

      if (actualText && actualText.trim() === expectedText) {
        await this.page.locator(identifier).click();
        this.logMessage(
          `Validated and clicked on ${identifier} with expected text "${expectedText}"`
        );
      } else {
        const errorMsg = `Text mismatch on ${identifier}. Expected: "${expectedText}", Found: "${actualText}"`;
        this.logMessage(errorMsg, "error");
        await this.captureScreenshotOnFailure("validateAndClick");
        throw new Error(errorMsg);
      }
    } catch (error) {
      throw error;
    }
  }

  async verifyTitle(title: string): Promise<void> {
    try {
      await expect(this.page).toHaveTitle(title);
      this.logMessage(`Verified page title: "${title}"`);
    } catch (error) {
      const errorMsg = `Failed to verify title: "${title}"`;
      this.logMessage(errorMsg, "error");
      await this.captureScreenshotOnFailure("verifyTitle");
      throw new Error(errorMsg);
    }
  }

  async fillInputBox(identifier: string, text: string): Promise<void> {
    try {
      await this.page.locator(identifier).fill(text);
      this.logMessage(`Filled input box (${identifier}) with text: "${text}"`);
    } catch (error) {
      const errorMsg = `Failed to fill input box (${identifier}) with text: "${text}"`;
      this.logMessage(errorMsg, "error");
      await this.captureScreenshotOnFailure("fillInputBox");
      throw new Error(errorMsg);
    }
  }

  async verifyToHaveValue(
    identifier: string,
    inputFieldText: string
  ): Promise<void> {
    try {
      await expect
        .soft(this.page.locator(identifier))
        .toHaveValue(inputFieldText);
      this.logMessage(
        `Verified element (${identifier}) has value: "${inputFieldText}"`
      );
    } catch (error) {
      const errorMsg = `Failed to verify element (${identifier}) has value: "${inputFieldText}"`;
      this.logMessage(errorMsg, "error");
      await this.captureScreenshotOnFailure("verifyToHaveValue");
      throw new Error(errorMsg);
    }
  }

  async selectDropdownByValue(selector: string, value: string): Promise<void> {
    try {
      await this.page.selectOption(selector, { value });
      this.logMessage(`Selected dropdown (${selector}) value: "${value}"`);
    } catch (error) {
      const errorMsg = `Failed to select value "${value}" in dropdown: ${selector}`;
      this.logMessage(errorMsg, "error");
      await this.captureScreenshotOnFailure("selectDropdownByValue");
      throw new Error(errorMsg);
    }
  }

  async verifyContainText(
    identifier: string,
    expectedText: string
  ): Promise<void> {
    try {
      await expect
        .soft(this.page.locator(identifier))
        .toContainText(expectedText);
      this.logMessage(
        `Verified element with identifier ${identifier} contains text: "${expectedText}"`
      );
    } catch (error) {
      const errorMsg = `Failed to verify element with identifier ${identifier} contains text: "${expectedText}"`;
      this.logMessage(errorMsg, "error");
      await this.captureScreenshotOnFailure("verifyContainText");
      throw new Error(errorMsg);
    }
  }

  async wait(
    time: number,
    options: {
      waitForSelector?: string;
      waitForNetworkIdle?: boolean;
      waitForLoadState?: "load" | "domcontentloaded" | "networkidle";
    } = {}
  ): Promise<void> {
    const { waitForSelector, waitForNetworkIdle, waitForLoadState } = options;

    try {
      await this.page.waitForTimeout(time * 1000);

      if (waitForSelector) {
        await this.page.waitForSelector(waitForSelector, {
          state: "visible",
          timeout: time * 1000,
        });
        this.logMessage(`Waited for selector: ${waitForSelector}`);
      }

      if (waitForNetworkIdle) {
        await this.page.waitForLoadState("networkidle", {
          timeout: time * 1000,
        });
        this.logMessage("Waited for network idle");
      }

      if (waitForLoadState) {
        await this.page.waitForLoadState(waitForLoadState, {
          timeout: time * 1000,
        });
        this.logMessage(`Waited for page load state: ${waitForLoadState}`);
      }
    } catch (error) {
      const errorMsg = "Failed to wait for the specified conditions";
      this.logMessage(errorMsg, "error");
      await this.captureScreenshotOnFailure("wait");
      throw new Error(errorMsg);
    }
  }

  async pause(): Promise<void> {
    try {
      await this.page.pause();
      this.logMessage("Paused the test execution for debugging.");
    } catch (error) {
      const errorMsg = "Failed to pause the test execution";
      this.logMessage(errorMsg, "error");
      await this.captureScreenshotOnFailure("pause");
      throw new Error(errorMsg);
    }
  }
}
