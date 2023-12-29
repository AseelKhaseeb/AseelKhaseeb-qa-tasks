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

When("Click on Discounts link",()=>{
    cy.get(".nav-sidebar > li:eq(4) > ul > li:eq(0) a").click()
    cy.wait(1500)
})

When("Click on Add new link",()=>{
    cy.contains("Add new").click()
})

When("Enter Name input field",()=>{
    cy.get("#Name").clear().type("Discount1")
})

When("Select Discount type",()=>{
    cy.get("#DiscountTypeId").select("2")
})

// When("Check Use percentage",()=>{
//     cy.get("#UsePercentage").check()
// })

When("Enter discount amount",()=>{
    cy.get("#DiscountAmount").clear({force:true}).type(100,{force:true})
})

When("Check Requires coupon code",()=>{
    cy.get("#RequiresCouponCode").check()
})

When("Enter CouponCode",()=>{
    cy.get("#CouponCode").clear().type("123456")
})

When("Enter MaximumDiscountedQuantity",()=>{
    cy.get("#MaximumDiscountedQuantity").clear({force:true}).type(1000,{force:true})
})

When("Click on Save link",()=>{
    cy.get("button[name=save]").click()
})

Then("The discount should be added successfully with {string}",(message)=>{
    cy.get(".alert-success").should("contain",message)
})

Then("Search for the discount that added",()=>{
    cy.get("#SearchDiscountCouponCode").clear().type(123456)
    cy.get("#search-discounts").click()
    cy.get("#discounts-grid tbody tr td").eq(0).should("have.text","Discount1")
})


