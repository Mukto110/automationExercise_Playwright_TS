import { Page } from "@playwright/test";

export class PaymentPage {
  readonly paymentPageHeader: string;
  readonly nameOnCardInput: string;
  readonly cardNumberInput: string;
  readonly cvcInput: string;
  readonly expiryMonthInput: string;
  readonly expiryYearInput: string;
  readonly payAndConfirmButton: string;
  readonly successMessage: string;

  constructor(page: Page) {
    this.paymentPageHeader = `css=h2[class='heading']`;
    this.nameOnCardInput = `css=input[name='name_on_card']`;
    this.cardNumberInput = `css=input[name='card_number']`;
    this.cvcInput = `css=input[name='cvc']`;
    this.expiryMonthInput = `css=input[name='expiry_month']`;
    this.expiryYearInput = `css=input[name='expiry_year']`;
    this.payAndConfirmButton = `css=button[id='submit']`;
    this.successMessage = `css=div[class='form-row'] div[id='success_message']`;
  }
}
