import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../../../pageObjects/shared/actions.cy";
import AddToCartPageActions from "../../../../../pageObjects/addToCart/actions.cy";
import AddToCartPageAssertions from "../../../../../pageObjects/addToCart/assertions.cy";

const sharedActionss = new sharedActions()
const addToCartActions = new AddToCartPageActions()
const addToCartAssertions = new AddToCartPageAssertions()

Given("The user navigated to magento website", () => {
  sharedActionss.openMagentoWebsite("");
});

Given("The user search for {string} product", (product) => {
  addToCartActions.typeInSearchInputField(product);
});

When("The user choose the product X", () => {
  addToCartActions.chooseTheProduct();
});

When("The user choose the size {string} and color {string} for product X", (size, colorIndex) => {
    cy.wait(1500);
    addToCartActions.chooseSizeAndColorForTheProduct(size, colorIndex);
});

When("The user click on Add to cart button", () => {
  addToCartActions.clickOnAddToCartButton()
});

Then("The product should be added to the cart successfully with {string}", (message) => {
    cy.wait(1000);
    addToCartAssertions.checkAlertMessageContainValue(message)
});

Then("The counter of the cart should be visible", () => {
  cy.wait(1000);
  addToCartAssertions.checkCounterVisibilityOfTheCart()
});