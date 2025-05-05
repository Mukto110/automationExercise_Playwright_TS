import { Page } from "@playwright/test";

export class ProductsPage {
  readonly allProductsHeader: string;
  readonly productsList: string;
  readonly firstViewProductButton: string;
  readonly productName: string;
  readonly productCategory: string;
  readonly productPrice: string;
  readonly productAvailability: string;
  readonly productCondition: string;
  readonly productBrand: string;
  readonly searchInput: string;
  readonly searchButton: string;
  readonly searchedProductsHeader: string;
  readonly searchedProductList: string;

  constructor(page: Page) {
    this.allProductsHeader = `css=h2[class='title text-center']`;
    this.productsList = `css=div[class='features_items']`;
    this.firstViewProductButton = `css=a[href='/product_details/1']`;
    this.productName = `css=div[class='product-information'] h2`;
    this.productCategory = `xpath=//p[normalize-space()='Category: Women > Tops']`;
    this.productPrice = `css=div[class='product-information'] span span`;
    this.productAvailability = `xpath=//div[@class='product-details']//p[2]`;
    this.productCondition = `xpath=//body//section//p[3]`;
    this.productBrand = `xpath=//body//section//p[3]`;
    this.searchInput = `css=input[id='search_product']`;
    this.searchButton = `css=button[id='submit_search']`;
    this.searchedProductsHeader = `css=h2[class='title text-center']`;
    this.searchedProductList = `css=div[class='features_items']`;
  }
}
