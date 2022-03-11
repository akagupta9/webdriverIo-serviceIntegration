const video = require("wdio-video-reporter");

export const config: WebdriverIO.Config = {
  logLevel: "error",
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        // args: ['--headless', '--disable-gpu'],
      },
      // specs: ["test/specs/chromeOnly/*.ts"],
    },
  ],
  //services: ['devtools'],
  services: ["chromedriver"],
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
    [
      video,
      {
        saveAllVideos: true, // If true, also saves videos for successful test cases
        videoSlowdownMultiplier: 3, // Higher to get slower videos, lower for faster videos [Value 1-100]
      },
    ],
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
