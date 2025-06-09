const BasePage = require('./BasePage');

class CompraPage extends BasePage {
    constructor(page){
        super(page);
        this.cartButton = '.shopping_cart_link';
        this.addButton = '#add-to-cart-sauce-labs-backpack';
        this.carrito = '.cart_item';
        this.checkOutButton = '#checkout';
        this.nombreInput = '#first-name';
        this.apellidoInput = '#last-name';
        this.postalInput = '#postal-code';
        this.continueButton = '#continue';
        this.finishButton = '#finish';
        this.backHomeButton = '#back-to-products';
        this.confirmMessage = '.complete-header';
        this.productText = '[data-test="inventory-item-name"]';

        this.listProduct = [
            {locator: '#add-to-cart-sauce-labs-backpack'                            , nombre: 'Sauce Labs Backpack'               }, 
            {locator: '#add-to-cart-sauce-labs-bike-light'                          , nombre: 'Sauce Labs Bike Light'             }, 
            {locator: '#add-to-cart-sauce-labs-bolt-t-shirt'                        , nombre: 'Sauce Labs Bolt T-Shirt'           },
            {locator: '#add-to-cart-sauce-labs-fleece-jacket'                       , nombre: 'Sauce Labs Fleece Jacket'          },
            {locator: '#add-to-cart-sauce-labs-onesie'                              , nombre: 'Sauce Labs Onesie'                 }, 
            {locator: 'button[id="add-to-cart-test.allthethings()-t-shirt-(red)"]'  , nombre: 'Test.allTheThings() T-Shirt (Red)' }
        ];
        
        this.listRemoveButton = [
            '#remove-sauce-labs-backpack', '#remove-sauce-labs-bike-light', '#remove-sauce-labs-bolt-t-shirt',
            '#remove-sauce-labs-fleece-jacket', '#remove-sauce-labs-onesie', 'button[id="remove-test.allthethings()-t-shirt-(red)"]'
        ];
    }

    async clicCartButton(){
        await this.click(this.cartButton);
    }

    async anadirProducto(){
        for (const selector of this.listProduct) {
            const button = this.page.locator(selector.locator);
            await button.waitFor({ state: 'visible' });
            await button.click();

            //Paso agregado solo para visualizar los clic
            //await this.wait(500);
        }
    }

    async eliminarProducto(){
        for (const selector of this.listRemoveButton) {
            const button = this.page.locator(selector);
            await button.waitFor({ state: 'visible' });
            await button.click();

            //Paso agregado solo para visualizar los clic
            //await this.wait(500);
        }
    }

    async validarProductos(){
        const listText = await this.page.locator(this.productText).allTextContents();

        for (const nombre of listText) {
            const existe = this.listProduct.some(p => p.nombre === nombre);
            if (!existe) {
                //si en caso fallara el agregar productos
                console.log('El valor no encontrado es: ' + nombre);
                return false; 
            }
        }
        return true
    }

    async carroVacio(){
        return this.existeElemento(this.carrito);
    }

    async clicCheckOut(){
        await this.click(this.checkOutButton);
    }

    async formularioCliente(nombre,apellido,postal){
        await this.fill(this.nombreInput, nombre);
        await this.fill(this.apellidoInput, apellido);
        await this.fill(this.postalInput, postal);
    }

    async clicContinue(){
        await this.click(this.continueButton);
    }

    async clicFinish(){
        await this.click(this.finishButton);
    }

    async clicBackHome(){
        await this.click(this.backHomeButton);
    }

    async confiramcionCompra(){
        return this.getText(this.confirmMessage);
    }
}
module.exports = CompraPage;