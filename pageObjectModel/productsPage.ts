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
  readonly firstProductCard: string;
  readonly firstAddToCartButton: string;
  readonly continueShoppingButton: string;
  readonly secondProductCard: string;
  readonly secondAddToCartButton: string;
  readonly viewCartButton: string;
  readonly cartProduct1: string;
  readonly cartProduct2: string;
  readonly cartProduct1Price: string;
  readonly cartProduct2Price: string;
  readonly cartProduct1Quantity: string;
  readonly cartProduct2Quantity: string;
  readonly cartProduct1Total: string;
  readonly cartProduct2Total: string;

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
    this.firstProductCard = `xpath=//body/section/div[@class='container']/div[@class='row']/div[@class='col-sm-9 padding-right']/div[@class='features_items']/div[2]/div[1]/div[1]/div[1]`;
    this.firstAddToCartButton = `xpath=/html[1]/body[1]/section[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/a[1]`;
    this.continueShoppingButton = `css=button[class='btn btn-success close-modal btn-block']`;
    this.secondProductCard = `xpath=//body/section/div[@class='container']/div[@class='row']/div[@class='col-sm-9 padding-right']/div[@class='features_items']/div[3]/div[1]/div[1]/div[1]`;
    this.secondAddToCartButton = `xpath=/html[1]/body[1]/section[2]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[2]/div[1]/a[1]`;
    this.viewCartButton = `xpath=//u[normalize-space()='View Cart']`;
    this.cartProduct1 = `css=tr[id='product-1']`;
    this.cartProduct2 = `css=tr[id='product-2']`;
    this.cartProduct1Price = `css=tr[id='product-1'] td[class='cart_price'] p`;
    this.cartProduct2Price = `css=tr[id='product-2'] td[class='cart_price'] p`;
    this.cartProduct1Quantity = `css=tr[id='product-1'] button[class='disabled']`;
    this.cartProduct2Quantity = `css=tr[id='product-2'] button[class='disabled']`;
    this.cartProduct1Total = `css=tr[id='product-1'] p[class='cart_total_price']`;
    this.cartProduct2Total = `css=tr[id='product-2'] p[class='cart_total_price']`;
  }
}
