import { LandingPage } from "../../pageobjects/landing.page";
import allureReporter from '@wdio/allure-reporter'

describe("Regression Suite : Career Page", () => {
  let landingPage: LandingPage = new LandingPage();

  it("Career Dashboard Navigation", async () => {
    allureReporter.addFeature('Career Page');
    await landingPage.open("/");
    await landingPage.navigateToCareerPage();
    const isUserRedirect = await landingPage.isUserRedirectToCareerPage();
    expect(isUserRedirect).toBeTruthy;
  });
});
