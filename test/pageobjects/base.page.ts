import { Browser, Element } from "webdriverio";

export class Page {

  async open(path: string): Promise<void> {
   await browser.url(path);
   await browser.maximizeWindow();
  }

  async getElement(locator: string): Promise<Element<"async">> {
    const element = await $(locator);
    return element;
  }

  async getUrl(): Promise<string> {
   return await browser.getUrl();
  }

  async getElements(locator: string): Promise<Element<"async">[]> {
    const element = await $$(locator);
    return element;
  }

  async click(locator: string, timeOutInMs = 5000): Promise<void> {
    const element = await this.getElement(locator);
    await element.waitForClickable({ timeout: timeOutInMs });
    await element.click();
  }

  async setText(
    locator: string,
    valueToSet: string,
    clearValue = false,
    timeOutInMs = 5000
  ): Promise<void> {
    const element = await this.getElement(locator);
    await element.waitForDisplayed({ timeout: timeOutInMs });
    if (clearValue) {
      await element.clearValue();
    }
    await element.setValue(valueToSet);
  }

  async getText(locator: string, timeOutInMs = 5000): Promise<string> {
    const element = await this.getElement(locator);
    await element.waitForDisplayed({ timeout: timeOutInMs });
    const text = await element.getText();
    return text;
  }

  async isDisplayed(locator: string, timeOutInMs = 5000): Promise<boolean> {
    const element = await this.getElement(locator);
    await element.waitForDisplayed({ timeout: timeOutInMs });
    const isDisplayed = await element.isDisplayed();
    return isDisplayed;
  }

  async isElementEnabled(locator: string, timeOutInMs = 5000): Promise<boolean> {
    const element = await this.getElement(locator);
    await element.waitForDisplayed({ timeout: timeOutInMs });
    const isEnable = await element.isEnabled();
    return isEnable;
  }
}
