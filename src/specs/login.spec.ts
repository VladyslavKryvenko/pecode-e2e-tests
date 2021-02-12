import * as dotenv from 'dotenv';
dotenv.config();

import {AssertionHelpers} from '../helpers/assertion.helpers';
import {AcceptanceHelpers} from '../helpers/acceptance.helpers';
import faker from 'faker';
import {LoginPage} from '../pages/login.page';

const loginPage = new LoginPage();
const I = new AcceptanceHelpers();
const II = new AssertionHelpers();


describe('login page tests', () => {

    beforeEach(() => {
        I.open(loginPage.url);
    });

    it('verify that all the elements are present on the page', () => {
        II.seeElement(loginPage.loginField)
            .seeElement(loginPage.passwordField)
            .seeElement(loginPage.loginButton);
    });

    it('should not login without password', () => {
        const firstName = faker.name.firstName();

        loginPage.login(firstName, '');

        II.see('Please enter your password.')
            .seeInUrl(loginPage.url);
    });

    it('should not login without username', () => {
        const password = faker.random.alphaNumeric(15);

        loginPage.login('', password);

        II.see('Please enter username.', loginPage.errorContainer)
            .seeInUrl(loginPage.url);
    });

    it('should not login using invalid credentials', () => {
        loginPage.login(process.env.LOGIN, process.env.PASS);

        II.see('No account found with that username.', loginPage.errorContainer)
            .seeInUrl(loginPage.url);
    });
});