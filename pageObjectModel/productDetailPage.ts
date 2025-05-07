import { Page } from "@playwright/test";

export class ProductDetailPage {
  readonly quantityInput: string;
  readonly addToCartButton: string;
  readonly reviewHeader: string;
  readonly reviewNameInput: string;
  readonly reviewEmailInput: string;
  readonly reviewTextArea: string;
  readonly submitReviewButton: string;
  readonly reviewSuccessMessage: string;

  constructor(page: Page) {
    this.quantityInput = `css=input[id='quantity']`;
    this.addToCartButton = `css=button[type='button']`;
    this.reviewHeader = `css=a[href='#reviews']`;
    this.reviewNameInput = `css=input[id='name']`;
    this.reviewEmailInput = `css=input[id='email']`;
    this.reviewTextArea = `css=textarea[id='review']`;
    this.submitReviewButton = `css=button[id='button-review']`;
    this.reviewSuccessMessage = `xpath=/html[1]/body[1]/section[1]/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/span[1]`;
  }
}
