## webdriverIo-Project Creation

1. Run command npm init
2. Init the project npm init wdio .

## webdriverIo-capabilities
- ### Grouping Of Test Cases
    - Updating Config with Suites
    - Passing suite name from CMD
    - Command ``` SUITE=regression npm run test-with-suite ```
- ### Running Single File
    - Command ``` wdio wdio.conf.js --spec <Your File Path> ```

- ### Cross Browser Testing

- ### Parallel Run
    - Updating Config with maxInstances   
- ### Reporting
    - Updating Config with reporters
    - Can have multiple reports as well
    - support multiple Reports - allure, spec, dot etc.
    - Eg. ALlure-Report Integration  
- ### Custom Reporting
    - 
    - Can have multiple reports as well
    - support multiple Reports - allure, spec, dot etc.
    - Eg. ALlure-Report Integration  

- ### Framework
    - #### Mocha
        - Use ``` npm install @wdio/mocha-framework --save-dev ```
        - BDD : describe()/context(), it()/specify(), before(), after(), beforeEach(), and afterEach().
        - TDD : suite(), test(), suiteSetup(), suiteTeardown(), setup(), and teardown()
        - Some overlapping features has issue with wdio. eg. Parallel run

    - #### Jasmine
        - Use ``` npm install @wdio/jasmine-framework --save-dev ```
        - Mostly same as Mocha,, we can checkout detailed config of Jasmine and its hooks
        
        

     
   

