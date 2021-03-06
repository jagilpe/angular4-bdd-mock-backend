import { MOCKSERVER_PORT } from '../../src/environments/environment.e2e';

const mockServer = require('mockserver-client');

export class AppMockBackend {

  private mockServerClient;

  constructor() {
    this.mockServerClient = mockServer.mockServerClient('localhost', MOCKSERVER_PORT);
  }

  reset(): Promise<void> {
    this.mockServerClient.setDefaultHeaders([
      {'name': 'Content-Type', 'values': ['application/json; charset=utf-8']},
      {'name': 'Cache-Control', 'values': ['no-cache, no-store']},
      {'name': 'Access-Control-Allow-Origin', 'values': '*'}
    ]);
    return this.mockServerClient.reset();
  }

  setFixture(fixture: string): void {
    switch (fixture) {
      case 'no product':
        this.mockServerClient.mockSimpleResponse('/products', [], 200);
        break;
      case 'three products':
        this.mockServerClient.mockSimpleResponse('/products', [
          { id: 1, name: 'Product 1'},
          { id: 2, name: 'Product 2'},
          { id: 3, name: 'Product 3'}
        ], 200);
        break;
    }
  }
}
