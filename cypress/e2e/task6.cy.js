/// <reference types="cypress" />

describe("",()=>{

    beforeEach(()=>{
        cy.visit("https://admin-demo.nopcommerce.com/")
        cy.login()
        cy.wait(1500)
    })

    // it("Verify that the user can login",()=>{
    //     cy.visit("https://admin-demo.nopcommerce.com/")
    //     cy.login()
    // })

    it("Verify that the user can add new product",()=>{
        cy.get("#nopSideBarPusher").click()
        cy.get(".nav-sidebar > li:eq(1) > a").click()
        cy.contains("Products").click()

        cy.wait(1500)

        cy.addProduct()
    })

    it("Verify that the user can search and delete products",()=>{
        cy.wait(1500)

        cy.get("#nopSideBarPusher").click()
        cy.get(".nav-sidebar > li:eq(1) > a").click()
        cy.contains("Products").click()

        cy.get("#SearchProductName").clear().type("Laptop1")
        cy.get("#search-products").click()
        
        cy.wait(1500)

        cy.get(".dataTables_scrollHead input").check()
        cy.get("#delete-selected").click()

        cy.wait(1500)

        cy.get("#delete-selected-action-confirmation-submit-button").click()

        cy.get("#SearchProductName").clear().type("Laptop1")
        cy.get("#search-products").click()
        cy.get("#products-grid tbody tr td").should("contain","No data available in table")
    })
})



