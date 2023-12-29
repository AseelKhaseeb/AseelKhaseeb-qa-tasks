const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
    // baseUrl: "https://magento.softwaretestingboard.com/",
    // baseUrl: "https://demo.productionready.io/#/",
    baseUrl: "https://admin-demo.nopcommerce.com/",
    force: true
  },
});
