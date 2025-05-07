# Automation Exercise - Playwright Framework (TypeScript)

This is an end-to-end (E2E) test automation framework built using **Playwright** with **TypeScript**, following best practices like the **Page Object Model (POM)**, **custom test runner**, and **test data separation**. The test cases are written against [automationexercise.com](http://automationexercise.com).

---

## 📁 Project Structure

- **.github/**
  - `workflows/` – CI configuration (optional)
  
- **pageObjectModel/**
  - `*.ts` – One file per page (e.g. `loginPage.ts`)

- **testData/**
  - `home.json` – JSON test data (e.g., URLs, titles, expected values)

- **tests/**
  - `login_logout/`
    - `loginBeforeCheckout.spec.ts` – Test for login and checkout scenario

- **utilities/**
  - `fixtures.ts` – Global fixtures (shared across tests)
  - `utils.ts` – Custom runner/helper class
  - `valueProvider.ts` – Expected values provider

- `playwright.config.ts` – Playwright configuration

- `README.md` – This file


---

## ⚙️ Key Features

- ✅ TypeScript support
- ✅ Page Object Model (POM)
- ✅ Custom test runner (`Utils.ts`) for reusable actions
- ✅ Data-driven tests using JSON files
- ✅ Soft assertions for flexible validations
- ✅ Centralized environment handling with fixtures
- ✅ LocalStorage, SessionStorage, and Cookie cleanup
- ✅ `wait()` utility for dynamic waits

---

## 🧪 Sample Test Flow

```ts
test("Search and add to cart flow", async ({ runner, homePage, productsPage, cartPage }) => {
  await runner.navigateTo(homeData.baseUrl);
  await runner.clickOnElement(homePage.productsButton);
  await runner.fillInputBox(productsPage.searchInput, "Tshirt");
  await runner.clickOnElement(productsPage.searchButton);
  await runner.clickOnElement(productsPage.firstAddToCartButton);
  await runner.clickOnElement(productsPage.viewCartButton);
  await runner.verifyElementIsVisible(cartPage.cartProduct2);
});


🧰 Commands -->
Install dependencies:
npm install

Run tests:
npx playwright test

Open HTML report:
npx playwright show-report

🌐 Test Data & Configuration
All static expected values like button texts, page titles, or URLs are kept in JSON files under /testData/ for separation of concerns.

Example: testData/home.json
{
  "baseUrl": "http://automationexercise.com",
  "pageTitle": "Automation Exercise"
}

🧼 Cleanup Strategy

After each test:
LocalStorage and SessionStorage are cleared
Cookies are cleared
Load state is awaited (except on certain routes, if needed)
This ensures clean test isolation.

👨‍💻 Author
Meraj Hossain Mukto
Automating for learning and growth.
Custom Playwright framework inspired by --> https://github.com/Mahbub091/playwright_TS_Project
