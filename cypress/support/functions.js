import { PageElements } from "./selectors";
import faker from 'faker';

export function verifyLogin () {
    cy.get(PageElements.loginButton).should('be.visible')
}

export function clearUsername () {
    cy.get(PageElements.userName).clear().should('be.empty').wait(1500)
}

export function clearPassword () {
    cy.get(PageElements.password).clear().should('be.empty').wait(1500)
}

export function usernameIsVisible() {
    cy.get("input[placeholder*='Username']").should('be.visible').wait(1500)
}

export function passwordIsVisible () {
    cy.get("input[placeholder*='Password']").should('be.visible').wait(1500)
}

export function positiveTest () { 
cy.get('#user-name').clear().should('be.empty')
cy.get('#password').clear().should('be.empty')
cy.get('#login-button').should('be.visible').click().wait(1500)
}

export function negativeTest () {
cy.get('input[placeholder*="Username"]').type(faker.address.streetAddress()).should('include.text', '')             
cy.get('input[placeholder*="Password"]').type(faker.datatype.number()).should('include.text', '') 
cy.get('#login-button').should('be.visible').click().wait(1500)
cy.get('input[placeholder*="Username"]').clear()
cy.get('input[placeholder*="Password"]').clear()
}

export function loginUser () {
cy.get('input[placeholder*="Username"]').type('standard_user').should('include.text', '').wait(1500);
cy.get('input[placeholder*="Password"]').type('secret_sauce').should('include.text', '').wait(1500);
cy.get('#login-button').click()
}

export function loggedVerification () {
cy.url().should('include', 'https://www.saucedemo.com/inventory.html') 
}

export function hamburgerMenu () {
cy.get('#react-burger-menu-btn').click().wait(1500)
cy.get('#logout_sidebar_link').click().wait(1500)
}

export function mainPage () {
cy.url().should('include', 'https://www.saucedemo.com/') 
}

