export const config: WebdriverIO.Config = {
  headless: true,
  logLevel: "error",
  bail: 0,
  baseUrl: "https://testvagrant.com/",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  specs: ["./test/specs/**/*.ts"],
  exclude: ["./test/specs/orderRun/*.ts"],

  suites: {
    sanity: ["./test/specs/sanity/*.ts"],
    regression: ["./test/specs/regression/*.ts"],
    all: ["./test/specs/**/*.ts"],
  },

  maxInstances: 2,
  capabilities: [
    {
      maxInstances: 2,
      browserName: "chrome",
      acceptInsecureCerts: true,
      // specs: ["test/specs/chromeOnly/*.ts"], - it will override the suite config
    },

    // {
    //   maxInstances: 2,
    //   browserName: "firefox",
    //   acceptInsecureCerts: true,
    // specs: ["test/ffOnly/*"],
    // },
  ],
  reporters: ["spec", "dot"],

  // reporters: [
  //   [
  //     "allure",
  //     {
  //       outputDir: "allure-results",
  //     },
  //   ],
  // ],
  services: ["chromedriver"],
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
