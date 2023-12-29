Feature: Check add affiliates functionallity

    The user can add a new affiliates 
    Background: visit the site
        Given The user navigated to admin-demo.nopcommerce website
        When Enter email input field 
        And Enter password input field 
        And Enter login button
        Then Should be redirected to Dashboard page
        
    Scenario: Verify that the user can add a new discount successfully
        When Click on menu
        And Click on Promotions link
        And Click on Affiliates link
        And Click on Add new link
        And Check Active checkbox
        And Enter FirstName input field
        And Enter Last name input field
        And Enter Address_Email input field
        And Enter Address_Company input field
        And Select Address_CountryId
        And Select State / province
        And Enter County / region input field
        And Enter City input field
        And Enter Address1 input field
        And Enter Address2 input field
        And Enter Zip / postal code input field
        And Enter Phone number code input field
        And Enter Fax number code input field
        And Enter Admin comment code textarea field
        And Enter Friendly URL name input field
        And Click on Save button
        Then The affiliate should be added successfully with "The new affiliate has been added successfully."
        And Search for the affiliate that added


          
