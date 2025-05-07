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
    this.cartPageHeader = `xpath=/html[1]/body[1]/section[1]/div[1]/div[1]/ol[1]/li[2]`;
    this.proceedToCheckoutButton = `xpath=/html[1]/body[1]/section[1]/div[1]/section[1]/div[1]/div[1]/div[1]/a[1]`;
    this.registerOrLoginButton = `xpath=//u[normalize-space()='Register / Login']`;
    this.firstProductDeleteButton = `xpath=/html[1]/body[1]/section[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[6]/a[1]/i[1]`;
    this.cartProduct1 = `css=tr[id='product-1']`;
    this.cartProduct2 = `css=tr[id='product-2']`;
    this.cartProduct28 = `css=tr[id='product-28']`;
    this.emptyCartMessage = `css=p[class='text-center'] b`;
    this.cartRecommendedProduct = `css=tr[id=product-4]`;
  }
}
