export const config: WebdriverIO.Config = {
  logLevel: "error",
  bail: 0,
  baseUrl: "https://testvagrant.com/",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  specs: ["./test/specs/framework/jasmine.spec.ts"],

  maxInstances: 2,
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {},
    },
  ],
  reporters: ["spec", "dot"],

  services: ["chromedriver"],
  framework: "jasmine",
  jasmineOpts: {
    defaultTimeoutInterval: 5000,
    expectationResultHandler: function (passed, assertion) {
      // do something
    },
  },
};
