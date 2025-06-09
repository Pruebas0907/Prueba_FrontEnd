const BasePage = require('./BasePage');

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.usernameInput = '#user-name';
        this.passwordInput = '#password';
        this.loginButton = '#login-button';
        this.errorMessage = '[data-test="error"]';
    }

    async openLoginPage() {
        await this.navigate('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.fill(this.usernameInput, username);
        await this.fill(this.passwordInput, password);
    }

    async clicLoginButton (){
        await this.click(this.loginButton);
    }

    async getErrorMessage() {
        return this.getText(this.errorMessage);
    }

    async verPaginaInventario() {
        return this.urlContiene('/inventory.html');
    }
}

module.exports = LoginPage;