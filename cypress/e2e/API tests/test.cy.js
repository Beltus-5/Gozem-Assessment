/// <reference types="cypress" />


describe('Gozem-Assessment', () => {// Authinticating the API//
  let api_tocken, myBooking, myBookingId = '';
    // This block runs once before all tests in the suite
  before(() => {
       // Sending a POST request to authenticate and get an API token
    cy.request({
      method: 'POST',
      url: "/auth",
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        "username" : "admin",
        "password" : "password123"
    }
    }).then((response) => {
       // Verifying the response status is 200 (OK)
      expect(response.status).to.equal(200)
       // Logging the response body to the Cypress console
      cy.log(response.body)
       // Storing the API token for use in subsequent requests
      api_tocken = response.body.token
      cy.log(api_tocken)
    })
  })
  // Test case for creating a booking
  it('Create Booking', () =>{
      // Sending a POST request to create a new booking
    cy.request({
    method: 'POST',
    url: '/booking',
    headers: {
      "x-api-key": api_tocken,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body:{
      "firstname" : "Jim",
      "lastname" : "Brown",
      "totalprice" : 111,
      "depositpaid" : true,
      "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
      },
      "additionalneeds" : "Breakfast"
    }
    
  }).then((response) => {
      // Sending a POST request to create a new booking
    expect(response.status).to.equal(200)
    cy.log(response.body);
     // Logging the response body to the Cypress console
    myBookingId = response.body.bookingid;
    cy.log(myBookingId);
  })
})
    // Test case for reading a booking
  it('Read Booking', () =>{ 
      // Sending a GET request to retrieve the booking details
    cy.request({
    method: 'GET',
    url: '/booking/' + myBookingId,
    headers: {
      "x-api-key": api_tocken,
      'Accept': ' application/json'
    }
  }).then((response) => {
      // Verifying the response status is 200 (OK)
    expect(response.status).to.equal(200)
     // Storing the booking details for use in subsequent tests
    myBooking = response.body;
    cy.log(myBooking);
     // Logging each key-value pair in the booking details to the Cypress console
    Object.entries(myBooking).forEach(([key, value]) => {
      if(typeof value === 'object' && value !== null){
        Object.entries(value).forEach(([key, value]) => {
          cy.log(key + ' : ' + value)
        })
      }
      else{
        cy.log(key + ' : ' + value)
      }
    })
    })
  })
       // Updating the created booking above by changing the check out date and additional needs.
  it('Update Booking', () => { 

    cy.request({
      method: 'PUT',
      url: '/booking/' + myBookingId,
      headers: {
        "x-api-key": api_tocken,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM='
      },
      body:{
        "firstname" : "Jim",
        "lastname" : "Brown",
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
          "checkin" : "2018-01-01",
          "checkout" : "2020-02-03"
        },
        "additionalneeds" : "Beds"
      }
    }).then((response) => {
      // Verifying the response status is 200 (OK)
      expect(response.status).to.equal(200)
       // Storing the updated booking details
      myBooking = response.body;
      cy.log(myBooking);
       // Logging each key-value pair in the updated booking details to the Cypress console
      Object.entries(myBooking).forEach(([key, value]) => {
        if(typeof value === 'object' && value !== null){
          Object.entries(value).forEach(([key, value]) => {
            cy.log(key + ' : ' + value)
          })
        }
        else{
          cy.log(key + ' : ' + value)
        }
      })
      })
  })
    //  Deleting the created booking above 
  it('Update Booking', () => {
    cy.request({
      method: 'DELETE',
      url: '/booking/' + myBookingId,
      headers: {
        "x-api-key": api_tocken,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM='
      },
    }).then((response) => {
        // Verifying the response status is 201 (Created)
      expect(response.status).to.equal(201)

      })
  })
})

