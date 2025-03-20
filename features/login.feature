Feature: Login Functionality

  Scenario: Verify customer success login
    Given user is on the login page
    When user enters valid credentials
    Then user should be verify successful login and redirected to the dashboard
