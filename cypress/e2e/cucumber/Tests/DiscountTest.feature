Feature: Check add discount functionallity

    The user can add a new discount 
    Background: visit the site
        Given The user navigated to admin-demo.nopcommerce website
        When Enter email input field 
        And Enter password input field 
        And Enter login button
        Then Should be redirected to Dashboard page
        
    Scenario: Verify that the user can add a new discount successfully
        When Click on menu
        And Click on Promotions link
        And Click on Discounts link
        And Click on Add new link
        And Enter Name input field
        And Select Discount type
        # And Check Use percentage
        And Enter discount amount
        And Check Requires coupon code
        And Enter CouponCode
        And Enter MaximumDiscountedQuantity
        And Click on Save link
        Then The discount should be added successfully with "The new discount has been added successfully."
        And Search for the discount that added


          
