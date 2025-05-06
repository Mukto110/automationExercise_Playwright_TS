import { Page } from "@playwright/test";

export class ProductDetailPage {
  readonly quantityInput: string;

  constructor(page: Page) {
    this.quantityInput = `css=input[id='quantity']`;
  }
}
