import { Page } from "@playwright/test";

export class LoginPage {
  readonly loginHeader: string;
  readonly emailInput: string;
  readonly passwordInput: string;
  readonly loginButton: string;
  constructor(page: Page) {
    this.loginHeader = `css=div[class='login-form'] h2`;
    this.emailInput = `css=input[data-qa='login-email']`;
    this.passwordInput = `css=input[placeholder='Password']`;
    this.loginButton = `css=button[data-qa='login-button']`;
  }
}
