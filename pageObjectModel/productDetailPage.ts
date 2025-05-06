import { Page } from "@playwright/test";

export class ProductDetailPage {
  readonly quantityInput: string;
  readonly addToCartButton: string;

  constructor(page: Page) {
    this.quantityInput = `css=input[id='quantity']`;
    this.addToCartButton = `css=button[type='button']`;
  }
}
