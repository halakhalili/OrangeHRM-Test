/// <reference types="cypress" />
import LoginPageAction from "cypress\e2e\Pages\LoginPage\Action.js"
import LoginPageAssertion from "cypress\e2e\Pages\LoginPage\Assertion.js"

const Assert = new LoginPageAssertion();
const login = new LoginPageAction();

describe("Login To OrangeHRM", () => {
    it("Login with valid username and password", () => {
        login.navigate();
        login.EnterUserName(Admin);
        login.EnterPassword(admin123);
        login.submit();
        Assert.LoginAssertion();
    })
})