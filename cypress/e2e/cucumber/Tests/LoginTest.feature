Feature: Check login functionallity

    The user can login to website
    Background: visit the site
        Given The user navigated to admin-demo.nopcommerce website

    Scenario: Verify that the user can login successfully
        When Enter email input field 
        And Enter password input field 
        And Enter login button
        Then Navigate to home page  
