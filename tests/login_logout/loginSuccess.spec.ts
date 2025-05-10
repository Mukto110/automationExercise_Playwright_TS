import { test } from "../../utilities/fixtures";

const timestamp = Date.now();
const email = `mukto+${timestamp}@example.com`;

test("Login user with correct email and password", async ({
  runner,
  homePage,
  registerPage,
  accountCreatedPage,
  loginPage,
  accountDeletedPage,
}) => {
  await runner.navigateTo(process.env.BASE_URL!);
  if (await runner.isElementVisible(homePage.logoutButton)) {
    await runner.clickOnElement(homePage.logoutButton);
  }

  // User registration
  await runner.clickOnElement(homePage.signupButton);
  await runner.verifyElementIsVisible(registerPage.registerHeader);
  await runner.fillInputBox(registerPage.nameInput, "Mukto121");
  await runner.fillInputBox(registerPage.emailInput, email);
  await runner.clickOnElement(registerPage.signupButton);
  await runner.verifyElementIsVisible(registerPage.accountInfoHeader);
  await runner.clickOnElement(registerPage.radioButtonTitleMr);
  await runner.fillInputBox(registerPage.userPassword, "11110000");
  await runner.selectDropdownByValue(registerPage.day, "20");
  await runner.selectDropdownByValue(registerPage.month, "3");
  await runner.selectDropdownByValue(registerPage.year, "1995");
  await runner.clickOnElement(registerPage.newsletterCheckbox);
  await runner.clickOnElement(registerPage.specialOfferCheckbox);
  await runner.fillInputBox(registerPage.firstName, "Siddique");
  await runner.fillInputBox(registerPage.lastName, "Kuddus");
  await runner.fillInputBox(registerPage.company, "Fakir");
  await runner.fillInputBox(registerPage.address1, "siddique er nijer basha");
  await runner.fillInputBox(registerPage.address2, "siddique er baper basha");
  await runner.selectDropdownByValue(registerPage.country, "Canada");
  await runner.fillInputBox(registerPage.state, "Mirpur");
  await runner.fillInputBox(registerPage.city, "Dhaka");
  await runner.fillInputBox(registerPage.zipCode, "1216");
  await runner.fillInputBox(registerPage.mobileNumber, "2143214");
  await runner.clickOnElement(registerPage.createAccountButton);

  await runner.verifyElementIsVisible(accountCreatedPage.accountCreatedTitle);
  await runner.clickOnElement(accountCreatedPage.continueButton);
  //   Registration end

  await runner.clickOnElement(homePage.logoutButton);

  await runner.clickOnElement(homePage.signupButton);
  await runner.verifyElementIsVisible(loginPage.loginHeader);
  await runner.fillInputBox(loginPage.emailInput, email);
  await runner.fillInputBox(loginPage.passwordInput, "11110000");
  await runner.clickOnElement(loginPage.loginButton);

  await runner.verifyElementIsVisible(homePage.loggedInAsUserName);

  await runner.clickOnElement(homePage.deleteAccountButton);
  await runner.verifyElementIsVisible(accountDeletedPage.accountDeletedHeader);
  await runner.clickOnElement(accountDeletedPage.continueButton);
});
