# Gozem-Assessment
- Creating an api automated test case using Cypress.io  refer to https://www.cypress.io/

## Pre-Setup
- You must have the latest version of Nodejs installed in your machine. You may get it from https://nodejs.org/en
- Visusla Studio Code is the IDE recommended for this project.

## Setup
Use any comand line tool or gitbash to clone this repopsitory. Get into the root directory after cloning by typing **cd Gozem-Assessment** on your git bash 

__Run this on Git bash to install all node dependencies and cypress:__
```
npm install
npx cypress install
npx cypress open

```
## Execute Automation Tetsing
- On the cypress dashboard, you will see Welcome to Cypress! and 2 boxes E2E Testing and Component Tetsing. Since we are creating an api automation test framwork, we would select _**E2E Testing**_
- The default browser will be chome. Its not necessary to select any browser. Leave it on the default and click on _**Start E2E Testing in Chrome**_
- The browser will open the test dash board. Our test is named _test.cy.js_. click on these to execute the test.
- You may verify each execution by clicking on the steps on left side of the dashboard to see what has passed or failed.

## Understanding The Test
### This is an Automation assessment for a Booking.

* _Reference Types:_ The `/// <reference types="cypress" />` directive at the top of the file ensures that Cypress types are available for IntelliSense and type checking.
* _Describe Block:_ The describe block groups all the tests related to the “example to-do app”.
* _Variables:_ api_tocken, myBooking, and myBookingId are declared to store the API token, booking details, and booking ID, respectively.
* _Before Hook:_ The before hook runs once before all tests. It sends a POST request to authenticate and obtain an API token, which is then stored in the api_tocken variable.

**_Create Booking Test:_**
    Sends a POST request to create a new booking.
Verifies the response status is 200.
Logs the response body and stores the booking ID in myBookingId.

**_Read Booking Test_:**
  Sends a GET request to retrieve the booking details using the stored booking ID.
Verifies the response status is 200.
Logs the booking details and iterates through each key-value pair to log them individually.

**_Update Booking Test_:**
Sends a PUT request to update the booking details using the stored booking ID.
Verifies the response status is 200.
Logs the updated booking details and iterates through each key-value pair to log them individually.

**_Delete Booking Test_:**
Sends a DELETE request to remove the booking using the stored booking ID.
Verifies the response status is 201.
