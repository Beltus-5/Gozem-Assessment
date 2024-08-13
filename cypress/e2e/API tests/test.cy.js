/// <reference types="cypress" />


describe('example to-do app', () => {
  let api_tocken, myBooking, myBookingId = '';
  before(() => {
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
      expect(response.status).to.equal(200)
      cy.log(response.body)
      api_tocken = response.body.token
      cy.log(api_tocken)
    })
  })

  it('Create Booking', () =>{
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
    expect(response.status).to.equal(200)
    cy.log(response.body);
    myBookingId = response.body.bookingid;
    cy.log(myBookingId);
  })
})

  it('Read Booking', () =>{
    cy.request({
    method: 'GET',
    url: '/booking/' + myBookingId,
    headers: {
      "x-api-key": api_tocken,
      'Accept': ' application/json'
    }
  }).then((response) => {
    expect(response.status).to.equal(200)
    myBooking = response.body;
    cy.log(myBooking);
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
      expect(response.status).to.equal(200)
      myBooking = response.body;
      cy.log(myBooking);
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
      expect(response.status).to.equal(201)

      })
  })
})

