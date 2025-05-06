import { Page } from "@playwright/test";

export class BrandPage {
  readonly brandsSideBar: string;
  readonly brandPoloLink: string;
  readonly brandHeaderTitle: string;
  readonly firstBrandProductCard: string;
  readonly brandHMLink: string;

  constructor(page: Page) {
    this.brandsSideBar = `css=div[class='brands_products']`;
    this.brandPoloLink = `css=a[href='/brand_products/Polo']`;
    this.brandHeaderTitle = `css=h2[class='title text-center']`;
    this.firstBrandProductCard = `xpath=//body/section/div[@class='container']/div[@class='row']/div[@class='col-sm-9 padding-right']/div[@class='features_items']/div[2]`;
    this.brandHMLink = `css=a[href='/brand_products/H&M']`;
  }
}
