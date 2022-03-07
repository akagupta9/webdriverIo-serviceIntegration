import { LandingPage } from "../../pageobjects/landing.page";
import allureReporter from '@wdio/allure-reporter'

describe("Sanity Suite", () => {
  let landingPage: LandingPage = new LandingPage();

  it("Page Navigation", async () => {
    allureReporter.addFeature('Sanity');
    await landingPage.open("/");
    const actualUrl = await landingPage.getUrl();
    expect(actualUrl == "https://testvagrant.com/").toBeTruthy;
  });
});
