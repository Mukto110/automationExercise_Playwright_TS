import { Page } from "@playwright/test";

export class CheckoutPage {
  readonly addressDetailsSection: string;
  readonly reviewOrderSection: string;
  readonly commentTextArea: string;
  readonly placeOrderButton: string;
  readonly deliveryAddressHeader: string;
  readonly billingAddressHeader: string;
  readonly deliveryAddressBox: string;
  readonly billingAddressBox: string;
  readonly registerLoginButton: string;
  readonly commentInput: string;

  constructor(page: Page) {
    this.addressDetailsSection = `xpath=//h2[normalize-space()='Address Details']`;
    this.reviewOrderSection = `xpath=//h2[normalize-space()='Review Your Order']`;
    this.commentTextArea = `css=textarea[name='message']`;
    this.placeOrderButton = `css=a[href='/payment']`;
    this.deliveryAddressHeader = `xpath=//h3[normalize-space()='Your delivery address']`;
    this.billingAddressHeader = `xpath=//h3[normalize-space()='Your billing address']`;
    this.deliveryAddressBox = `css=ul[id='address_delivery']`;
    this.billingAddressBox = `css=ul[id='address_invoice']`;
    this.registerLoginButton = `xpath=//u[normalize-space()='Register / Login']`;
    this.commentInput = `css=textarea[name='message']`;
  }
}
