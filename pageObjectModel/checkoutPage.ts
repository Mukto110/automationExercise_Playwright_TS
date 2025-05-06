import { Page } from "@playwright/test";

export class CheckoutPage {
  readonly addressDetailsSection: string;
  readonly reviewOrderSection: string;
  readonly commentTextArea: string;
  readonly placeOrderButton: string;

  constructor(page: Page) {
    this.addressDetailsSection = `xpath=//h2[normalize-space()='Address Details']`;
    this.reviewOrderSection = `xpath=//h2[normalize-space()='Review Your Order']`;
    this.commentTextArea = `css=textarea[name='message']`;
    this.placeOrderButton = `css=a[href='/payment']`;
  }
}
