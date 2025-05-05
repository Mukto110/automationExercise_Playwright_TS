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

  constructor(page: Page) {
    this.homePageLogo = `css=img[alt='Website for automation practice']`;
    this.signupButton = `css=a[href='/login']`;
    this.loggedInAsUserName = `css=ul.navbar-nav li:last-child`;
    this.deleteAccountButton = `css=a[href='/delete_account']`;
    this.logoutButton = `css=a[href='/logout']`;
    this.contactUsButton = `css=a[href='/contact_us']`;
    this.testCaseButton = `css=div[class='item active'] a[class='test_cases_list'] button[type='button']`;
    this.productsButton = `css=a[href='/products']`;
  }
}
