import { test as base, Page } from "@playwright/test";
import { Utils } from "./utils";
import { RegisterPage } from "../pageObjectModel/registerPage";
import { HomePage } from "../pageObjectModel/homePage";
import { AccountCreatedPage } from "../pageObjectModel/accountCreatedPage";
import { AccountDeletedPage } from "../pageObjectModel/accountDeletedPage";
import { LoginPage } from "../pageObjectModel/loginPage";

const test = base.extend<{
  runner: Utils;
  registerPage: RegisterPage;
  homePage: HomePage;
  accountCreatedPage: AccountCreatedPage;
  accountDeletedPage: AccountDeletedPage;
  loginPage: LoginPage;
}>({
  runner: async ({ page }: { page: Page }, use) => {
    const utilsInstance = new Utils(page);
    await use(utilsInstance);
  },

  homePage: async ({ page }: { page: Page }, use) => {
    const homePageInstance = new HomePage(page);
    await use(homePageInstance);
  },

  registerPage: async ({ page }: { page: Page }, use) => {
    const registerPageInstance = new RegisterPage(page);
    await use(registerPageInstance);
  },

  accountCreatedPage: async ({ page }: { page: Page }, use) => {
    const accountCreatedPageInstance = new AccountCreatedPage(page);
    await use(accountCreatedPageInstance);
  },

  accountDeletedPage: async ({ page }: { page: Page }, use) => {
    const accountDeletedPageInstance = new AccountDeletedPage(page);
    await use(accountDeletedPageInstance);
  },

  loginPage: async ({ page }: { page: Page }, use) => {
    const loginPageInstance = new LoginPage(page);
    await use(loginPageInstance);
  },
});

export { test };
