import { test as base, Page } from "@playwright/test";
import { Utils } from "./utils";
import { RegisterPage } from "../pageObjectModel/registerPage";
import { HomePage } from "../pageObjectModel/homePage";
import { AccountCreatedPage } from "../pageObjectModel/accountCreatedPage";
import { AccountDeletedPage } from "../pageObjectModel/accountDeletedPage";
import { LoginPage } from "../pageObjectModel/loginPage";
import { ContactUsPage } from "../pageObjectModel/contactUsPage";
import { TestCasePage } from "../pageObjectModel/testCasePage";
import { ProductsPage } from "../pageObjectModel/productsPage";
import { ProductDetailPage } from "../pageObjectModel/productDetailPage";
import { CartPage } from "../pageObjectModel/cartPage";
import { CheckoutPage } from "../pageObjectModel/checkoutPage";
import { PaymentPage } from "../pageObjectModel/paymentPage";

const test = base.extend<{
  runner: Utils;
  registerPage: RegisterPage;
  homePage: HomePage;
  accountCreatedPage: AccountCreatedPage;
  accountDeletedPage: AccountDeletedPage;
  loginPage: LoginPage;
  contactUsPage: ContactUsPage;
  testCasePage: TestCasePage;
  productsPage: ProductsPage;
  productDetailPage: ProductDetailPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  paymentPage: PaymentPage;
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

  contactUsPage: async ({ page }: { page: Page }, use) => {
    const contactUsPageInstance = new ContactUsPage(page);
    await use(contactUsPageInstance);
  },

  testCasePage: async ({ page }: { page: Page }, use) => {
    const testCasePageInstance = new TestCasePage(page);
    await use(testCasePageInstance);
  },

  productsPage: async ({ page }: { page: Page }, use) => {
    const productsPageInstance = new ProductsPage(page);
    await use(productsPageInstance);
  },

  productDetailPage: async ({ page }: { page: Page }, use) => {
    const productDetailPageInstance = new ProductDetailPage(page);
    await use(productDetailPageInstance);
  },

  cartPage: async ({ page }: { page: Page }, use) => {
    const cartPageInstance = new CartPage(page);
    await use(cartPageInstance);
  },

  checkoutPage: async ({ page }: { page: Page }, use) => {
    const checkoutPageInstance = new CheckoutPage(page);
    await use(checkoutPageInstance);
  },

  paymentPage: async ({ page }: { page: Page }, use) => {
    const paymentPageInstance = new PaymentPage(page);
    await use(paymentPageInstance);
  },
});

export { test };
