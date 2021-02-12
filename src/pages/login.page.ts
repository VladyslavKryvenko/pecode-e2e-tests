import {AcceptanceHelpers} from '../helpers/acceptance.helpers';

const I = new AcceptanceHelpers();

export class LoginPage {

    url = '/qa-portal/registerlogin/registerlogin.php';

    get loginField() {return $('[name="username"]');}
    get passwordField() { return $('[name="password"]'); }
    get loginButton() { return $('[value="Login"]'); }

    get errorContainer() { return $('.has-error'); }


    login(username, password) {
        I.fill(this.loginField, username);
        I.fill(this.passwordField, password);

        I.click(this.loginButton);

        return this;
    }
}
