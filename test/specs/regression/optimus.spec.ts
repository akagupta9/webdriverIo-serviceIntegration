import { LandingPage } from "../../pageobjects/landing.page";
import allureReporter from '@wdio/allure-reporter'

describe("Regression Suite : Optimus Page", () => {
  let landingPage: LandingPage = new LandingPage();

  it("Optimus Dashboard Navigation", async () => {
    allureReporter.addFeature('Optimus Page');
    await landingPage.open("/");
    await landingPage.navigateToOptimusPage;
    await landingPage.navigateToOptimusPage();
    const isUserRedirect = await landingPage.isUserRedirectToOptimusPage();
    expect(isUserRedirect);
  });
});
