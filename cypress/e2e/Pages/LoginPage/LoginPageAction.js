class LoginPageAction {

    navigate() {
        cy.visit('https://opensource-demo.orangehrmlive.com')
    }

    EnterUserName(username) {
        cy.get('input[name=username]').type(username);
        return this
    }

    EnterPassword(password) {
        cy.get('input[name=password]').type(password);
        return this
    }

    submit() {
        cy.get('button').contains('Login').click()
    }

}
export default LoginPageAction