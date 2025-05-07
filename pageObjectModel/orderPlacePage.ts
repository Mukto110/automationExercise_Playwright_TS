import { Page } from "@playwright/test";

export class OrderPlacePage {
  readonly downloadInvoiceButton: string;
  readonly continueButton: string;
  constructor(page: Page) {
    this.downloadInvoiceButton = `css=a[class='btn btn-default check_out']`;
    this.continueButton = `css=a[data-qa='continue-button']`;
  }
}
