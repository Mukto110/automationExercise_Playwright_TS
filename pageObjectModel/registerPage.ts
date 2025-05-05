import { Page } from "@playwright/test";

export class RegisterPage {
  readonly registerHeader: string;
  readonly nameInput: string;
  readonly emailInput: string;
  readonly signupButton: string;
  readonly accountInfoHeader: string;
  readonly radioButtonTitleMr: string;
  readonly userName: string;
  readonly userEmail: string;
  readonly userPassword: string;
  readonly day: string;
  readonly month: string;
  readonly year: string;
  readonly newsletterCheckbox: string;
  readonly specialOfferCheckbox: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly company: string;
  readonly address1: string;
  readonly address2: string;
  readonly country: string;
  readonly state: string;
  readonly city: string;
  readonly zipCode: string;
  readonly mobileNumber: string;
  readonly createAccountButton: string;

  constructor(page: Page) {
    this.registerHeader = `css=div[class='signup-form'] h2`;
    this.nameInput = `css=input[placeholder='Name']`;
    this.emailInput = `css=input[data-qa='signup-email']`;
    this.signupButton = `css=button[data-qa='signup-button']`;
    this.accountInfoHeader = `css=body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h2:nth-child(1) > b:nth-child(1)`;
    this.radioButtonTitleMr = `css=input[id='id_gender1']`;
    this.userName = `css=input[id='name']`;
    this.userEmail = `css=input[id='email']`;
    this.userPassword = `css=input[id='password']`;
    this.day = `css=select[id='days']`;
    this.month = `css=select[id='months']`;
    this.year = `css=select[id='years']`;
    this.newsletterCheckbox = `css=input[id=newsletter]`;
    this.specialOfferCheckbox = `css=input[id=optin]`;
    this.firstName = `css=input[id='first_name']`;
    this.lastName = `css=input[id='last_name']`;
    this.company = `css=input[id='company']`;
    this.address1 = `css=input[id='address1']`;
    this.address2 = `css=input[id='address2']`;
    this.country = `css=select[id='country']`;
    this.state = `css=input[id='state']`;
    this.city = `css=input[id='city']`;
    this.zipCode = `css=input[id='zipcode']`;
    this.mobileNumber = `css=input[id='mobile_number']`;
    this.createAccountButton = `css=button[data-qa="create-account"]`;
  }
}
