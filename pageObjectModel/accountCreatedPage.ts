import { Page } from "@playwright/test";

export class AccountCreatedPage {
  readonly accountCreatedTitle: string;
  readonly continueButton: string;

  constructor(page: Page) {
    this.accountCreatedTitle = `css=h2[class='title text-center'] b`;
    this.continueButton = `css=a[class="btn btn-primary"]`;
  }
}
