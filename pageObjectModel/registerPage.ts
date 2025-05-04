import { Page } from "@playwright/test";

class RegisterPage {
  readonly registerTitle: string;

  constructor(page: Page) {
    this.registerTitle = `css=div[class='signup-form'] h2`;
  }
}
