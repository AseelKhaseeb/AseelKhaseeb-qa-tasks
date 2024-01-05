import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import CreateAccountPageActions from "../../../../../pageObjects/createAccountPage/actions.cy";
import sharedActions from "../../../../../pageObjects/shared/actions.cy";
import sharedAssertions from "../../../../../pageObjects/shared/assertions.cy";
import CreateAccountPageAssertions from "../../../../../pageObjects/createAccountPage/assertions.cy";

let random = Math.floor(Math.random() * 100);
const firstName = "Razan";
const lastName = "user";
const email = "razanUsser" + random + "@gmail.com";
const password = "test@123%6";
const confirmPassword = "test@123%6";
const url = "https://magento.softwaretestingboard.com/customer/account/";

const sharedAction = new sharedActions();
const sharedAssertionss = new sharedAssertions();
const createAccountActions = new CreateAccountPageActions();
const createAccountAssertions = new CreateAccountPageAssertions();

Given("The user navigated to create account page", () => {
  sharedAction.openMagentoWebsite("/customer/account/create");
});

When("Type {string} in the field", (fieldName) => {
  switch (fieldName) {
    case "firstName":
      createAccountActions.typeInFirstNameInputField(firstName);
      break;
    case "lastName":
      createAccountActions.typeInLastNameInputField(lastName);
      break;
    case "email":
      createAccountActions.typeInEmailInputField(email);
      break;
    case "password":
      createAccountActions.typeInPasswordInputField(password);
      break;
    case "confirmPassword":
      createAccountActions.typeInConfirmPasswordInputField(confirmPassword);
      break;
  }
});

When("Clicks on Create an account button", () => {
  createAccountActions.clickOnCreateAccountButton();
});

Then("The Account should be created successfully", () => {
  sharedAssertionss.checkUrlEqualValue(url);
  sharedAssertionss.checkPageTitleContainValue("My Account");
});

Then("{string} message will be shown", (msg) => {
  createAccountAssertions.checkAlertMessageContainValue(msg);
});
