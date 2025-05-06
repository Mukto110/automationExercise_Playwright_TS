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

  constructor(page: Page) {
    this.homePageLogo = `css=img[alt='Website for automation practice']`;
    this.signupButton = `css=a[href='/login']`;
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
  }
}
