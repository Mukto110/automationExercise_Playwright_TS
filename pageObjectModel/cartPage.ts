import { Page } from "@playwright/test";

export class CartPage {
  readonly cartPageHeader: string;
  readonly proceedToCheckoutButton: string;
  readonly registerOrLoginButton: string;

  constructor(page: Page) {
    this.cartPageHeader = `css=li[class='active']`;
    this.proceedToCheckoutButton = `css=a[class='btn btn-default check_out']`;
    this.registerOrLoginButton = `xpath=//u[normalize-space()='Register / Login']`;
  }
}
