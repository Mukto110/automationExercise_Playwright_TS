import { Page } from "@playwright/test";

export class CartPage {
  readonly cartPageHeader: string;
  readonly proceedToCheckoutButton: string;
  readonly registerOrLoginButton: string;
  readonly firstProductDeleteButton: string;
  readonly cartProduct1: string;
  readonly emptyCartMessage: string;

  constructor(page: Page) {
    this.cartPageHeader = `css=li[class='active']`;
    this.proceedToCheckoutButton = `css=a[class='btn btn-default check_out']`;
    this.registerOrLoginButton = `xpath=//u[normalize-space()='Register / Login']`;
    this.firstProductDeleteButton = `css=i[class='fa fa-times']`;
    this.cartProduct1 = `css=tr[id='product-1']`;
    this.emptyCartMessage = `css=p[class='text-center'] b`;
  }
}
