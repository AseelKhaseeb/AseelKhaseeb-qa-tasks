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

When("Click on Affiliates link",()=>{
    cy.get(".nav-sidebar > li:eq(4) > ul > li:eq(1) a").click()
    cy.wait(1500)
})

When("Click on Add new link",()=>{
    cy.contains("Add new").click()
})

When("Check Active checkbox",()=>{
    cy.get("#Active").check()
})

When("Enter FirstName input field",()=>{
    cy.get("#Address_FirstName").clear().type("Aseel")
})

When("Enter Last name input field",()=>{
    cy.get("#Address_LastName").clear().type("Khaseeb")
})

When("Enter Address_Email input field",()=>{
    cy.get("#Address_Email").clear().type("aseel@gmail.com")
})

When("Enter Address_Company input field",()=>{
    cy.get("#Address_Company").clear().type("Com123")
})

When("Select Address_CountryId",()=>{
    cy.get("#Address_CountryId").select("Palestine")
})

When("Select State / province",()=>{
    cy.get("#Address_StateProvinceId").select("Other")
})

When("Enter County / region input field",()=>{
    cy.get("#Address_County").clear().type("Palestine")
})

When("Enter City input field",()=>{
    cy.get("#Address_City").clear().type("Tulkarm")
})

When("Enter Address1 input field",()=>{
    cy.get("#Address_Address1").clear().type("Address1")
})

When("Enter Address2 input field",()=>{
    cy.get("#Address_Address2").clear().type("Address2")
})

When("Enter Zip / postal code input field",()=>{
    cy.get("#Address_ZipPostalCode").clear().type("T1234")
})

When("Enter Phone number code input field",()=>{
    cy.get("#Address_PhoneNumber").clear().type("0599123456")
})

When("Enter Fax number code input field",()=>{
    cy.get("#Address_FaxNumber").clear().type(6758)
})

When("Enter Admin comment code textarea field",()=>{
    cy.get("#AdminComment").clear().type("Admin comment")
})

When("Enter Friendly URL name input field",()=>{
    cy.get("#FriendlyUrlName").clear().type("Friendly Url Name")
})

When("Click on Save button",()=>{
    cy.get("[name=save]").click()
})

Then("The affiliate should be added successfully with {string}",(message)=>{
    cy.get(".alert-success").should("contain",message)
})

Then("Search for the affiliate that added",()=>{
    cy.get("#SearchFirstName").clear().type("Aseel")
    cy.get("#SearchLastName").clear().type("Khaseeb")
    cy.get("#search-affiliates").click()
    cy.get("#affiliates-grid tbody tr td").eq(0).should("have.text","Aseel")
    cy.get("#affiliates-grid tbody tr td").eq(1).should("have.text","Khaseeb")
})


