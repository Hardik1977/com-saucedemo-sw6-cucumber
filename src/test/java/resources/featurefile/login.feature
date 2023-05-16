Feature: SauceDemo


  Background: User is on homepage
    Given User enters username
    And User enters Password
    And User clicks on Login button

  @smoke@regression
  Scenario: User should Login Successfully with valid Credentials
    Then User is able to Login and able to verify text Products

  @sanity@regression
  Scenario: User should able to verify that Six Products are displayed on page
    Then User is able to verify six products are displayed