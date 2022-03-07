import WDIOReporter from "@wdio/reporter";

export default class CustomReporter extends WDIOReporter {
  constructor(options) {
    //options = Object.assign(options, { stdout: true, logFile: "./reporter.logs" });

    super(options);
  }

  onRunnerStart() {
    console.log("onRunnerStart");
  }
  onBeforeCommand() {
    console.log("onBeforeCommand");
  }
  onAfterCommand() {
    console.log("onAfterCommand");
  }
  onSuiteStart() {
    console.log("onSuiteStart");
  }
  onHookStart() {
    console.log("onHookStart");
  }
  onHookEnd() {
    console.log("onHookEnd");
  }
  onTestStart() {
    console.log("onTestStart");
  }
  onTestPass() {
    console.log("onTestPass");
  }
  onTestFail() {
    console.log("onTestFail");
  }
  onTestRetry() {
    console.log("onTestRetry");
  }
  onTestSkip() {
    console.log("onTestSkip");
  }
  onTestEnd() {
    console.log("onTestEnd");
  }
  onSuiteEnd() {
    console.log("onSuiteEnd");
  }
  onRunnerEnd() {
    console.log("onRunnerEnd");
  }
}
