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
    this.submitButton = `css=input[value='Submit']`;
    this.successMessage = `css=.status.alert.alert-success`;
    this.homeButton = `xpath=//a[@class='btn btn-success']`;
  }
}
