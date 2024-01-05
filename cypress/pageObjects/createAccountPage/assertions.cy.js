class CreateAccountPageAssertions {
    // methods needed for assertions in create account page 
    checkAlertMessageContainValue(message){
        cy.get("[role=alert]").should("contain", message);
        return this;
    }
}

export default CreateAccountPageAssertions