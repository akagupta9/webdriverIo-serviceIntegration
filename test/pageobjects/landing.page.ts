import { Page } from "./base.page";

export class LandingPage extends Page {
  private locators = {
    menuBarIcon: "a.menu-bar",
    optimusSubMenu: "//a//span[text()='Optimus']",
    careerSubMenu: "//a//span[text()='Career']",
    optimusPageTitle: "//h2//span[contains(text(),'Meet Optimus')]",
    careerPage:"//h2[contains(text(),'Join')]"
  };

  async navigateToOptimusPage(): Promise<void> {
    await this.click(this.locators.menuBarIcon);
    await this.click(this.locators.optimusSubMenu);
  }

  async navigateToCareerPage(): Promise<void> {
    await this.click(this.locators.menuBarIcon);
    await this.click(this.locators.careerSubMenu);
  }

  async isUserRedirectToOptimusPage(): Promise<boolean> {
    const isTitleDisplayed = await this.isDisplayed(this.locators.optimusPageTitle);
    return isTitleDisplayed;
  }

  async isUserRedirectToCareerPage(): Promise<boolean> {
    const isTitleDisplayed = await this.isDisplayed(this.locators.careerPage);
    return isTitleDisplayed;
  }
}
