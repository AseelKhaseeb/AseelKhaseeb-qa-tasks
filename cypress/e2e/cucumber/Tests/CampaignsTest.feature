Feature: Check add campaigns functionallity

    The user can add a new campaigns 
    Background: visit the site
        Given The user navigated to admin-demo.nopcommerce website
        When Enter email input field 
        And Enter password input field 
        And Enter login button
        Then Should be redirected to Dashboard page
        
    Scenario: Verify that the user can add a new campaigns successfully
        When Click on menu
        And Click on Promotions link
        And Click on Campaigns link
        And Click on Add new link
        And Enter Name input field
        And Enter Subject input field
        And Enter Body textarea field
        And Enter Planned date of sending input field
        And Select Limited to store
        And Select Limited to customer role
        And Click on Save button
        Then The campaign should be added successfully with "The new campaign has been added successfully."
        And Search for the campaigns that added
