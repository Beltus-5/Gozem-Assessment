# Gozem-Assessment
This is an Automation assessment for a Booking.
Explanation
Reference Types: The /// <reference types="cypress" /> directive at the top of the file ensures that Cypress types are available for IntelliSense and type checking.
Describe Block: The describe block groups all the tests related to the “example to-do app”.
Variables: api_tocken, myBooking, and myBookingId are declared to store the API token, booking details, and booking ID, respectively.
Before Hook: The before hook runs once before all tests. It sends a POST request to authenticate and obtain an API token, which is then stored in the api_tocken variable.
Create Booking Test:
Sends a POST request to create a new booking.
Verifies the response status is 200.
Logs the response body and stores the booking ID in myBookingId.
Read Booking Test:
Sends a GET request to retrieve the booking details using the stored booking ID.
Verifies the response status is 200.
Logs the booking details and iterates through each key-value pair to log them individually.
Update Booking Test:
Sends a PUT request to update the booking details using the stored booking ID.
Verifies the response status is 200.
Logs the updated booking details and iterates through each key-value pair to log them individually.
Delete Booking Test:
Sends a DELETE request to remove the booking using the stored booking ID.
Verifies the response status is 201.
