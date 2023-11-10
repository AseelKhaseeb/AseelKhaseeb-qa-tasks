/// <reference types="cypress" />

it("task",()=>{
    /* ==== Visit the website ==== */
    cy.visit("/breathe-easy-tank.html");
    /* ==== Click on s size// using id ==== */
    cy.get("#option-label-size-143-item-167").click()
    /* ==== Click on xs size// using id ==== */
    cy.get("#option-label-color-93-item-57").click()
    /* ==== Click on Add to Cart button// using id ==== */
    cy.get("#product-addtocart-button").click()
    /* ==== Wait 3 seconds ==== */
    cy.wait(3000)
    /* ==== Click on purple color// using class ==== */
    cy.get('.showcart').click()
    /* ==== Click on proceed to checkout// using id ==== */
    cy.get("#top-cart-btn-checkout").click()
    /* ==== Wait 5 seconds ==== */
    cy.wait(5000);

    //  start writing your code from here
  
    /* ==== Get email input// using div parent classes then input child id ==== */
    cy.get(".control._with-tooltip #customer-email")
    /* ==== Get first name input// using name attribute and its value is firstname ==== */
    cy.get("[name='firstname']")
    /* ==== Get last name input// using name attribute and its value is lastname ==== */
    cy.get("[name='lastname']")
    /* ==== Get company input// using name attribute and its value is company ==== */
    cy.get("[name=company]")
    /* ==== Get street address inputs// using name attribute and its value is street[index] ==== */
    cy.get("[name='street[0]']")
    cy.get("[name='street[1]']")
    cy.get("[name='street[2]']")
    /* ==== Get city input// using name attribute and its value is city ==== */
    cy.get("[name=city]")
    /* ==== Get state/province select// using name attribute and its value is region_id ==== */
    cy.get("[name=region_id]")
    /* ==== Get zip/postal code input// using name attribute and its value is postcode ==== */
    cy.get("[name=postcode]")
    // /* ==== Get country select// using name attribute and its value is country_id ==== */
    cy.get("[name=country_id]")
    // /* ==== Get phone number input// using name attribute and its value is telephone ==== */
    cy.get("[name=telephone]")
    // /* ==== Get first radio button// using name attribute and its value is ko_unique_1 ==== */
    cy.get("[name=ko_unique_1]")
    // /* ==== Get second radio button// using name attribute and its value is ko_unique_2 ==== */
    cy.get("[name=ko_unique_2]")

  })
  