# WunderFlats Coding Challenge

## Getting started

> #### Requirements [Important]
+ You will need to have  [Node](https://nodejs.org/en/) and NPM installed
+ You will need to have the Java Development Kit (JDK) installed. The minimum required version is 7. 
You can check this by running `java -version` from the command line.


> #### Getting the source code
To get started, clone the repository using the commands

```bash
git clone https://github.com/boboghumah/saloodo-assessment.git
```

> #### Install test dependencies
```bash
npm install
```

> #### Running the tests
```bash
npm test
```

## How the test works 

- This project uses the [Nightwatch.js](http://nightwatchjs.org/) testing framework which is an automated testing framework based on selenium.

- It uses a `nightwatch.conf.js` file which specifies various configuration settings like test environments, test file paths, reports, selenium specific settings .e.g (browser driver settings) and other useful configurations.

-  In the  `nightwatch.conf.js`  file, i specified the `src_folders` to  `tests`. **Nightwatch** will take this folder and look for all JavaScript files in it, and then will try to run them as tests.

-  The  `page_objects`  folder contains a `pages.js` file which a list of custom helpers/commands to increase the testing capabilities and reusability. The file also serves as  a `page object`.
 > - A page object wraps an HTML page, or fragment, with an application-specific API, allowing you to manipulate page elements without digging around in the HTML of the application under test.

-  The  `package.json` file  contains the metadata and node package dependencies for the project. 

- When `npm install` is run in the command line, it checks the `package.json` file and install all the dependencies specified there.

- When the test command `npm test` is run from the terminal, it looks for the command specified for the `tests` inside the `package.json` file  and executes it. 

- The `config.js` file contains a list of the test data which are used in the test file 

-  The `tests` folder contains the **actual** test files which **Nightwatch** runs.

**Note:**  To run the test on multiple browsers in parallel  i.e `chrome` and `firefox` in parallel, just add the name of the browser to the test command in the `package.json` file.
>**E.g:** `"test": "nightwatch -c nightwatch.conf.js -e chrome" ` runs on only chrome
>>`"test": "nightwatch -c nightwatch.conf.js -e chrome,firefox" ` runs on both chrome and firefox in parallel.


## What the test covers

> + The test covers two scenarios:
>-- `'Validate that a user can sign up successfully'`
									**AND**
>-- `'Validate that users can change their profile data successfully'`
>
>In other to be able to achieve the aim of the test which is to `Create a set of tests that verify that users can change their user profile data`, i had to create a user profile first which will be used to validate the test scenario.
>
>The test contains various `assertions` and `verifications`  such as `verifying that  WunderFlats logo is visible on the homepage` and also all other web elements interacted with during the test are present.
>
>To overcome limitation of the test environment, i had to create a dynamic email address test data which appends the current date/timestamp to it hence, solving the problem of the user account limited time availability.  



