import * as FUNC from '../support/functions.js'

describe('Test task', () => {
    before (()=> {
    cy.visit("https://www.saucedemo.com/")});

    it('Verification that the page loaded successfully', () => {
        cy.request("https://www.saucedemo.com/").then((response)=>{
            expect(response.status).equal(200)
      });
    });

      it('Verification that login button is visible', () => {
        FUNC.verifyLogin()
      });

      it('Clear "Username" input field', () => {
        FUNC.clearUsername()
      });

      it('Clear "Password" input field', () => {
       FUNC.clearPassword()
      });

      it('Verification that "Username" input field is visible by placeholder', () => {
        FUNC.usernameIsVisible()
      });

      it('Verification that "Password" input field is visible by placeholder', () => {
      FUNC.passwordIsVisible()
      });

      it('Positive test, verification that user is not able to login with empty input fields', () => {
      FUNC.positiveTest()
      });

      it('Negative test, verification that user is not able to login with random data input fields', () => {
      FUNC.negativeTest()
      });

      it('Verification that user is able to login with valid data input fields', () => {
      FUNC.loginUser()
      })

      it('Verification that user logged successfuly by url', () => {
      FUNC.loggedVerification()
      });

      it('Open hamburger menu and logout the user', () => {
      FUNC.hamburgerMenu()
      });

      it('Verification that the user was redirected to the main page', () => {
      FUNC.mainPage()
      })
});
