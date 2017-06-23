import { browser, by, element, promise } from 'protractor';

export class ProductListPageObject {

  get(): promise.Promise<void> {
    return browser.get('/products');
  }

  hasEmptyListMessage(): promise.Promise<boolean> {
    return element(by.css('#empty-list-message')).isPresent();
  }

  getProducts(): promise.Promise<string[]> {
    return element.all(by.css('ul#products-list li.product-item'))
      .map(productListItem => ({ name: productListItem.getText() }));
  }
}
