@regression
Feature: Orangehrmlive Login Page

    Scenario: Login using valid credentails
        Given I access Login Portal Page
        When I enter a username Admin
        And I enter a password admin123
        And I click on the login button
        Then I should be redirected to Dashboard page