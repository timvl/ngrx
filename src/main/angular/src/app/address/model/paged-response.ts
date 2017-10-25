import {Page} from './page';

export class PagedResponse<T> {
  page: Page;
  content: Array<T>;

  constructor(page: Page, content: Array<T>) {
    this.page = page;
    this.content = content;
  }
}
