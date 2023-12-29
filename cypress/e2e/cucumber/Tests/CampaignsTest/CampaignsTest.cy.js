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
    cy.get("#Password").clear().type(password)
})

When("Enter login button",()=>{
    cy.get("[type=submit]").click()
})

Then("Should be redirected to Dashboard page",()=>{
    cy.url().should("eq","https://admin-demo.nopcommerce.com/admin/")
    cy.get(".content-header").should("contain","Dashboard")
    cy.wait(1500)
})

When("Click on menu",()=>{
    cy.get("#nopSideBarPusher").click()
})

When("Click on Promotions link",()=>{
    cy.get(".nav-sidebar > li:eq(4) > a").click()
})

When("Click on Campaigns link",()=>{
    cy.get(".nav-sidebar > li:eq(4) > ul > li:eq(3) a").click()
    cy.wait(1500)
})

When("Click on Add new link",()=>{
    cy.contains("Add new").click()
})

When("Enter Name input field",()=>{
    cy.get("#Name").clear().type("Campaign1")
})

When("Enter Subject input field",()=>{
    cy.get("#Subject").clear().type("Subject1")
})

When("Enter Body textarea field",()=>{
    cy.get("#Body").clear().type("Body1")
})

When("Enter Planned date of sending input field",()=>{
    cy.get("#DontSendBeforeDate").clear().type("12/29/2023 12:00 AM")
})

When("Select Limited to store",()=>{
    cy.get("#StoreId").select(1)
})

When("Select Limited to customer role",()=>{
    cy.get("#CustomerRoleId").select(1)
})

When("Click on Save button",()=>{
    cy.get("[name=save]").click()
    cy.wait(1500)
})

Then("The campaign should be added successfully with {string}",(message)=>{
    cy.wait(1500)
    cy.get(".alert-success").should("contain",message)
})

Then("Search for the campaigns that added",()=>{
    cy.wait(1500)
    cy.get("#campaigns-grid tbody tr:last td").eq(0).should("have.text","Campaign1")
})
