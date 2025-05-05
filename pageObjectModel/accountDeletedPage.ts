import { Page } from "@playwright/test";

export class AccountDeletedPage {
  readonly accountDeletedHeader: string;
  readonly continueButton: string;

  constructor(page: Page) {
    this.accountDeletedHeader = `css=h2[class='title text-center'] b`;
    this.continueButton = `css=.btn.btn-primary`;
  }
}
