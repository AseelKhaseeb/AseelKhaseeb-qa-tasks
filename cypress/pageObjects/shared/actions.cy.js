class sharedActions {
    openMagentoWebsite(path){
        cy.visit(`https://magento.softwaretestingboard.com/${path}`);
        return this;
    }
}

export default sharedActions;