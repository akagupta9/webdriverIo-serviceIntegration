import { LandingPage } from "../../pageobjects/landing.page";

describe("Capabilities - Chrome Only", () => {
    it("Test 1 For only chrome", async () => {
        console.log("Test 1 For only chrome");
        await new LandingPage().open("/");
    });
  });
  