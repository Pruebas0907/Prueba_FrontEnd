const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../../pages/loginPage');

let loginPage;

Given('el usuario navega a la pagina de login', async function () {
    loginPage = new LoginPage(this.page);
    await loginPage.openLoginPage();
});

When('el usuario ingresa el usuario {string} y contrasena {string}', async function (username, password) {
    await loginPage.login(username, password);
});

When('hace clic en el boton de login', async function () {
    await loginPage.clicLoginButton();
});

Then('deberia ver la pagina principal del inventario', async function () {
    expect(await loginPage.verPaginaInventario()).toBeTruthy();
});

Then('deberia ver un mensaje de error que diga {string}', async function (msg) {
    expect(await loginPage.getErrorMessage()).toBe(msg);
});