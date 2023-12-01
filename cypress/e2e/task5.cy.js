/// <reference types="cypress" />

describe("creat an account",()=>{
    it("visible",()=>{
        cy.visit("/customer/account/create")
        cy.get("#firstname").should("be.visible")
        cy.get("#lastname").should("be.visible")
        cy.get("#email_address").should("be.visible")
        cy.get("#password").should("be.visible")
        cy.get("#password-confirmation").should("be.visible")
        cy.get(".submit").should("be.visible")
    })

    it.only("create an acount",()=>{
        cy.visit("/")
        cy.get(".header.links:first li").eq(2).find("a").click()
        cy.get("#firstname").clear().type("Aseel")
        cy.get("#lastname").clear().type("Khaseeb")
        cy.get("#email_address").clear().type("aseel@gmail.com")
        cy.get("#password").clear().type("Aa123456")
        cy.get("#password-confirmation").clear().type("Aa123456")
        cy.get(".submit").click()
    })
})
