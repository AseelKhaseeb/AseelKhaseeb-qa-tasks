/// <reference types="cypress" />

it("task4",()=>{
    cy.visit("/")
    
    //get search element and type shirt then enter
    cy.get("#search").clear().type("shirt{enter}")

    //get the first element and click on it
    // cy.get(".product-items").children().first().find("a").first().click()
    cy.get(".product-items li:first a:first").click()

    //get M size element and click on it
    cy.get("[role=listbox]:first [role=option]:eq(2)").click()

    //get Purple color element and click on it
    cy.get("[role=listbox]:last [role=option]:eq(2)").click()

    //get qty element and type 3
    cy.get("#qty").clear().type(3)

    //get "Add to Cart" button and click on it
    cy.contains("Add to Cart").click()
})
