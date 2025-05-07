import { Page } from "@playwright/test";

export class CartPage {
  readonly cartPageHeader: string;
  readonly proceedToCheckoutButton: string;
  readonly registerOrLoginButton: string;
  readonly firstProductDeleteButton: string;
  readonly cartProduct1: string;
  readonly cartProduct2: string;
  readonly cartProduct28: string;
  readonly emptyCartMessage: string;
  readonly cartRecommendedProduct: string;

  constructor(page: Page) {
    this.cartPageHeader = `css=li[class='active']`;
    this.proceedToCheckoutButton = `css=a[class='btn btn-default check_out']`;
    this.registerOrLoginButton = `xpath=//u[normalize-space()='Register / Login']`;
    this.firstProductDeleteButton = `css=i[class='fa fa-times']`;
    this.cartProduct1 = `css=tr[id='product-1']`;
    this.cartProduct2 = `css=tr[id='product-2']`;
    this.cartProduct28 = `css=tr[id='product-28']`;
    this.emptyCartMessage = `css=p[class='text-center'] b`;
    this.cartRecommendedProduct = `css=tr[id=product-4]`;
  }
}
