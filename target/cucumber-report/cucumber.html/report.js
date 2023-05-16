$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "SauceDemo",
  "description": "",
  "id": "saucedemo",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7929374400,
  "status": "passed"
});
formatter.before({
  "duration": 3611485900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User enters username",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters Password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.userEntersUsername()"
});
formatter.result({
  "duration": 1128239200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userEntersPassword()"
});
formatter.result({
  "duration": 165938300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClicksOnLoginButton()"
});
formatter.result({
  "duration": 239121900,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should Login Successfully with valid Credentials",
  "description": "",
  "id": "saucedemo;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is able to Login and able to verify text Products",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userIsAbleToLoginAndAbleToVerifyTextProducts()"
});
formatter.result({
  "duration": 90266000,
  "status": "passed"
});
formatter.after({
  "duration": 876670800,
  "status": "passed"
});
formatter.after({
  "duration": 48000,
  "status": "passed"
});
formatter.before({
  "duration": 2893212800,
  "status": "passed"
});
formatter.before({
  "duration": 3555233300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User enters username",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters Password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.userEntersUsername()"
});
formatter.result({
  "duration": 424530200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userEntersPassword()"
});
formatter.result({
  "duration": 185503000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClicksOnLoginButton()"
});
formatter.result({
  "duration": 209416100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should able to verify that Six Products are displayed on page",
  "description": "",
  "id": "saucedemo;user-should-able-to-verify-that-six-products-are-displayed-on-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@sanity"
    },
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User is able to verify six products are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userIsAbleToVerifySixProductsAreDisplayed()"
});
formatter.result({
  "duration": 72815100,
  "status": "passed"
});
formatter.after({
  "duration": 1000524800,
  "status": "passed"
});
formatter.after({
  "duration": 24500,
  "status": "passed"
});
});