import { Page, Locator } from "@playwright/test";

export class ContactUsPage {
  readonly getInTouchHeader: string;
  readonly nameInput: string;
  readonly emailInput: string;
  readonly subjectInput: string;
  readonly messageTextarea: string;
  readonly uploadFileInput: string;
  readonly submitButton: string;
  readonly successMessage: string;
  readonly homeButton: string;

  constructor(page: Page) {
    this.getInTouchHeader = `xpath=//h2[text()='Get In Touch']`;
    this.nameInput = `css=input[placeholder='Name']`;
    this.emailInput = `css=input[placeholder='Email']`;
    this.subjectInput = `css=input[placeholder='Subject']`;
    this.messageTextarea = `css=textarea[id='message']`;
    this.uploadFileInput = `css=input[name='upload_file']`;
    this.submitButton = `xpath=/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[3]/form[1]/div[6]/input[1]`;
    this.successMessage = `xpath=/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[2]`;
    this.homeButton = `css=span i[class='fa fa-angle-double-left']`;
  }
}
