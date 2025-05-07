import { Page } from "@playwright/test";

export class HomePage {
  readonly homePageLogo: string;
  readonly signupButton: string;
  readonly loggedInAsUserName: string;
  readonly deleteAccountButton: string;
  readonly logoutButton: string;
  readonly contactUsButton: string;
  readonly testCaseButton: string;
  readonly productsButton: string;
  readonly footerId: string;
  readonly subscriptionText: string;
  readonly subscriptionInput: string;
  readonly subscriptionArrowButton: string;
  readonly subscriptionSuccessMessage: string;
  readonly cartButton: string;
  readonly firstViewProductButton: string;
  readonly recommendedItemsHeader: string;
  readonly recommendedProductCard: string;
  readonly recommendedAddToCartButton: string;
  readonly recommendedViewCartButton: string;

  constructor(page: Page) {
    this.homePageLogo = `css=img[alt='Website for automation practice']`;
    this.signupButton = `xpath=/html[1]/body[1]/header[1]/div[1]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[4]/a[1]`;
    this.loggedInAsUserName = `css=ul.navbar-nav li:last-child`;
    this.deleteAccountButton = `css=a[href='/delete_account']`;
    this.logoutButton = `css=a[href='/logout']`;
    this.contactUsButton = `css=a[href='/contact_us']`;
    this.testCaseButton = `css=div[class='item active'] a[class='test_cases_list'] button[type='button']`;
    this.productsButton = `css=a[href='/products']`;
    this.footerId = `#footer`;
    this.subscriptionText = `css=div[class='single-widget'] h2`;
    this.subscriptionInput = `css=input[id='susbscribe_email']`;
    this.subscriptionArrowButton = `css=button[id='subscribe']`;
    this.subscriptionSuccessMessage = `xpath=//input[@name='csrfmiddlewaretoken']`;
    this.cartButton = `css=li a[href='/view_cart']`;
    this.firstViewProductButton = `css=a[href='/product_details/1']`;
    this.recommendedItemsHeader = `css=div[class='recommended_items'] h2[class='title text-center']`;
    this.recommendedProductCard = `xpath=//body/section/div[@class='container']/div[@class='row']/div[@class='col-sm-9 padding-right']/div[@class='recommended_items']/div[@id='recommended-item-carousel']/div[@class='carousel-inner']/div[@class='item active']/div[1]/div[1]`;
    this.recommendedAddToCartButton = `xpath=/html[1]/body[1]/section[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]`;
    this.recommendedViewCartButton = `xpath=/html[1]/body[1]/section[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/p[2]/a[1]/u[1]`;
  }
}
