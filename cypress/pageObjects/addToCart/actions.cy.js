class AddToCartPageActions {
  //methods needed in add to cart page
  typeInSearchInputField(product) {
    cy.get("#search").type(`${product} {enter}`)
    return this
  }

  chooseTheProduct(){
    cy.get(".product-items li").first().click();
    return this
  }

  chooseSizeAndColorForTheProduct(size,colorIndex){
    cy.get(".swatch-attribute.size").contains(size).click()
    cy.get(".swatch-attribute.color").find(".swatch-option").eq(colorIndex).click()
    return this
  }

  clickOnAddToCartButton(){
    cy.get("#product-addtocart-button").click()
    return this
  }
}

export default AddToCartPageActions