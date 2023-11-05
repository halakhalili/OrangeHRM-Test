class LoginPageAssertion {

    LoginAssertion() {
        cy.url.should('be.equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
            //expect(url).equal('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
        return
    }
}