import { Page } from "@playwright/test";

export class AccountCreatedPage {
  readonly accountCreatedTitle: string;
  readonly continueButton: string;

  constructor(page: Page) {
    this.accountCreatedTitle = `css=h2[data-qa='account-created']`;
    this.continueButton = `css=a[data-qa='continue-button']`;
  }
}
