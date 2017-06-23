import { defineSupportCode } from 'cucumber';
import { ProductListPageObject } from '../pages/product-list.po';
import { AppMockBackend } from '../util/mock-backend';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

defineSupportCode(({ Before, Given, When, Then }) => {

  const productListPage = new ProductListPageObject();
  const mockBackend = new AppMockBackend();

  Before(() => {
    chai.should();
    chai.use(chaiAsPromised);
    return mockBackend.reset();
  });

  Given(/^the shop has (.*)$/, (fixture) => {
    mockBackend.setFixture(fixture);
  });

  When(/^I go to the product list page$/, () => {
    return productListPage.get();
  });

  Then(/^I should( not)? get an empty list message$/, (negate, callback) => {
    if (!!negate) {
      productListPage.hasEmptyListMessage().should.eventually.be.false.notify(callback);
    } else {
      productListPage.hasEmptyListMessage().should.eventually.be.true.notify(callback);
    }
  });

  Then(/^the product list has:$/, (expectedProducts, callback) => {
    productListPage.getProducts().should.eventually.deep.equal(expectedProducts.hashes()).notify(callback);
  });
});
