// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

var MOCKSERVER_PORT = 11080;

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/features/**/*.feature'
  ],
  capabilities: {
    'browserName': 'phantomjs',
    'phantomjs.binary.path':'./node_modules/phantomjs-prebuilt/bin/phantomjs'
  },
  directConnect: false,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./e2e/**/*.ts'],
    tags: [ "~@pending" ],
    strict: true,
    format: ["pretty"],
    dryRun: false,
    compiler: [ 'ts:ts-node']
  },
  onPrepare: () => {
    browser.manage().window().maximize(); // maximize the browser before executing the feature files
  },
  beforeLaunch: () => {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    let mockServer = require('mockserver-grunt');
    return mockServer.start_mockserver({ serverPort: MOCKSERVER_PORT });
  },
  afterLaunch: () => {
    // ...
    let mockServer = require('mockserver-grunt');
    return mockServer.stop_mockserver({ serverPort: MOCKSERVER_PORT });
  }
};
