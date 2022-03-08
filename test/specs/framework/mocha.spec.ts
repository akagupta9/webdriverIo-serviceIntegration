import { LandingPage } from "../../pageobjects/landing.page";
import allureReporter from '@wdio/allure-reporter'

describe("Suite With Mocha Framework", () => {
  let landingPage: LandingPage = new LandingPage();

  it("HealthCheck", async () => {
    allureReporter.addFeature('Sanity');
    await landingPage.open("/");
    const actualUrl = await landingPage.getUrl();
    expect(actualUrl == "https://testvagrant.com/").toBeTruthy;
  });
});
