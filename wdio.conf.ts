const video = require('wdio-video-reporter');

export const config: WebdriverIO.Config = {
  logLevel: "error",
  bail: 0,
  baseUrl: "https://testvagrant.com/",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  specs: ["./test/specs/**/*.ts"],
  exclude: ["./test/specs/framework/*.ts"],

  suites: {
    sanity: ["./test/specs/sanity/*.ts"],
    regression: ["./test/specs/regression/*.ts"],
    all: ["./test/specs/**/*.ts"],
  },

  maxInstances: 2,
  capabilities: [
    {
      browserName: "chrome",
      'goog:chromeOptions': {
        // args: ['--headless', '--disable-gpu'],
        }
      // specs: ["test/specs/chromeOnly/*.ts"], - it will override the suite config
    },
    // {
    //   maxInstances: 2,
    //   browserName: 'firefox',
    // },
  ],
 // reporters: ["spec", "dot"],

  // reporters: [
  //   [
  //     "allure",
  //     {
  //       outputDir: "allure-results",
  //     },
  //   ],
  // ],

  reporters: [
    [video, {
      saveAllVideos: true,       // If true, also saves videos for successful test cases
      videoSlowdownMultiplier: 3, // Higher to get slower videos, lower for faster videos [Value 1-100]
    }],
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: true,
    }],
  ],

  services: ["chromedriver"],
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
