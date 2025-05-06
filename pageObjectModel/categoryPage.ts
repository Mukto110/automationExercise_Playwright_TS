import { Page } from "@playwright/test";

export class CategoryPage {
  readonly categorySidebar: string;
  readonly womenCategoryHeader: string;
  readonly womenTopsLink: string;
  readonly categoryHeaderTitle: string;
  readonly menCategoryHeader: string;
  readonly menTShirtsLink: string;

  constructor(page: Page) {
    this.categorySidebar = `css=div[class='left-sidebar']`;
    this.womenCategoryHeader = `css=a[href='#Women']`;
    this.womenTopsLink = `css=a[href='/category_products/2']`;
    this.categoryHeaderTitle = `css=h2[class='title text-center']`;
    this.menCategoryHeader = `css=a[href='#Men']`;
    this.menTShirtsLink = `css=a[href='/category_products/3']`;
  }
}
