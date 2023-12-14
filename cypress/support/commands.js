// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login',()=>{
    cy.fixture("files/example").then((data)=>{
        cy.get("#Email").clear().type(data.email)
        cy.get("#Password").clear().type(data.password)
        cy.get(".login-button").click()
    })
})

Cypress.Commands.add('addProduct',()=>{
    cy.fixture("files/example").then((data)=>{
        data.products.map((product)=>{

            cy.contains("Add new").click()

            cy.get("#Name").clear().type(product.product)

            cy.get("#product-info .card-tools button").click()

            cy.wait(1500)
            cy.get("#product-price-area input").last().clear({force:true}).type(product.price,{force:true})

            cy.wait(1500)
            cy.get("#product-info .card-tools button").click()
            
            cy.get("[name=save]").click()

            cy.get(".alert-success").should("contain","The new product has been added successfully.")
            cy.get("#SearchProductName").clear().type(product.product)
            cy.get("#search-products").click()
            cy.get("#products-grid tbody tr").should("contain",product.product).and("contain",product.price)
            cy.wait(1500)

        })


        // cy.get("#Name").clear().type(data.product1)

        // cy.get("#product-info .card-tools button").click()

        // cy.wait(1500)
        // cy.get("#product-price-area input").last().clear({force:true}).type(data.price1,{force:true})

        // cy.wait(1500)
        // cy.get("#product-info .card-tools").click()
        
        // cy.get("[name=save]").click()

        // cy.get(".alert-success").should("contain","The new product has been added successfully.")
        // cy.get("#SearchProductName").clear().type(data.product1)
        // cy.get("#search-products").click()
        // cy.get("#products-grid tbody tr").should("contain",data.product1).and("contain",data.price1)
    })
})