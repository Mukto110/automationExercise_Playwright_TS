import { test as base, Page } from "@playwright/test";
import { Utils } from "./utils";
import { RegisterPage } from "../pageObjectModel/registerPage";
import { HomePage } from "../pageObjectModel/homePage";
// import { LoginPage } from "../pom/loginPage";

const test = base.extend<{
  runner: Utils;
  registerPage: RegisterPage;
  homePage: HomePage;
  //   loginPage: LoginPage;
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
    const lambdaHomePageInstance = new RegisterPage(page);
    await use(lambdaHomePageInstance);
  },

  //   loginPage: async ({ page }: { page: Page }, use) => {
  //     const loginPageInstance = new LoginPage(page);
  //     await use(loginPageInstance);
  //   },
});

export { test };
