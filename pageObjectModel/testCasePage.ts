import { Page } from "@playwright/test";

export class TestCasePage {
  readonly testCasesHeader: string;
  constructor(page: Page) {
    this.testCasesHeader = `css=h2[class='title text-center'] b`;
  }
}
