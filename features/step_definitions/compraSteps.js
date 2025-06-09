const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const CompraPage = require('../../pages/compraPage');

let compraPage;

When('el usuario selecciona productos a agregar',{ timeout: 30000 }, async function () {
    compraPage = new CompraPage(this.page);
    await compraPage.anadirProducto();
});

When('hace clic en el boton cart link', async function () {
    compraPage = new CompraPage(this.page);
    await compraPage.clicCartButton();
});

Then('deberia ver los productos agregados', async function () {
    expect(await compraPage.validarProductos()).toBe(true);
});

When('el usuario selecciona productos a eliminar', async function () {
    await compraPage.eliminarProducto();
});

Then('deberia ver el carrito vacio', async function () {
    expect(await compraPage.carroVacio()).toBe(false);
});

When('hace clic en el boton checkout', async function () {
    await compraPage.clicCheckOut();
});

When('el usuario ingresa el nombre {string}, apellido {string} y postal {string}', async function (nombre,apellido,postal) {
    await compraPage.formularioCliente(nombre,apellido,postal);
});

When('hace clic en el boton continue', async function () {
    await compraPage.clicContinue();
});

When('hace clic en el boton finish', async function () {
    await compraPage.clicFinish();
});

When('el usuario ve mensaje {string}', async function (msg) {
    expect(await compraPage.confiramcionCompra()).toBe(msg);
});

When('hace clic en el boton Back Home', async function () {
    await compraPage.clicBackHome();
});



