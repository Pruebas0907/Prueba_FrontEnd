# Prueba_FrontEnd

Automatización de pruebas end-to-end usando Playwright, Cucumber y el patrón Page Object Model (POM).  
Este proyecto está diseñado para probar funcionalidades de 'https://www.saucedemo.com/'.

# Tecnologías usadas

- Playwright - https://playwright.dev/
- Cucumber.js - https://cucumber.io/
- JavaScript (ES6)
- Node.js
- Page Object Model (POM)

## Instalación

**TERMINAL BASH**
- git clone https://github.com/Pruebas0907/Prueba_FrontEnd.git
- cd Prueba_FrontEnd
- npm install

# Ejecucion

Para ejecutar los .feature tienes diferentes formas

**TERMINAL BASH**
- General: npx cucumber-js
- Por feature: npx cucumber-js features/login.feature
- Por tag: npx cucumber-js --tags '@**AQUI VA EL NOMBRE TAG**'
- Por un browser en especifico: BROWSER=firefox npx cucumber-js (Puedes mudificar el browser por firefox/webkit/chromium)

o puedes juntar todo

- BROWSER=firefox npx cucumber-js features/login.feature --tags '@Login'

# Funcionalidades cubiertas

- Inicio de sesión exitoso y fallido
- Validación de errores en login
- Agregado de productos al carrito
- Validación de carrito vacío
- Compra exitosa
- Validación de campos en compra

