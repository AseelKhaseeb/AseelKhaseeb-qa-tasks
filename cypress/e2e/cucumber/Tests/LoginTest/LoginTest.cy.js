import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const email = "admin@yourstore.com";
const password = "admin";

Given("The user navigated to admin-demo.nopcommerce website",()=>{
    cy.visit("/")
})

When("Enter email input field",()=>{
    cy.get("#Email").clear().type(email)
})

When("Enter password input field",()=>{
    cy.get("#Email").clear().type(email)
    cy.get("#Password").clear().type(password)
})

When("Enter login button",()=>{
    cy.get("[type=submit]").click()
})

Then("Navigate to home page",()=>{
    cy.url().should("eq","https://admin-demo.nopcommerce.com/admin/")
    cy.get(".content-header").should("contain","Dashboard")
})
