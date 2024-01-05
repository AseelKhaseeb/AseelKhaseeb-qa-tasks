class AddToCartPageAssertions {
  // methods needed for assertions in add to cart page
  checkAlertMessageContainValue(message) {
    cy.get("[role=alert]").should("contain", message);
  }

  checkCounterVisibilityOfTheCart() {
    cy.get(".counter-number").should("be.visible");
  }
}

export default AddToCartPageAssertions;