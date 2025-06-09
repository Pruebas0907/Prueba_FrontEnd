Feature: Compra producto

  Como un cliente de Sauce Demo
  Quiero poder agregar productos al carrito y completar una compra
  Para poder adquirir los productos que necesito

  Background:
    Given el usuario navega a la pagina de login
    When el usuario ingresa el usuario "standard_user" y contrasena "secret_sauce"
    And hace clic en el boton de login

    @compra @carrito 
    Scenario: C01_Validar los productos agregados al carrito
        When el usuario selecciona productos a agregar
        And  hace clic en el boton cart link
        Then deberia ver los productos agregados   

    @compra @carrito
    Scenario: C02_Validar remover producto
        When el usuario selecciona productos a agregar
        And  hace clic en el boton cart link 
        And  el usuario selecciona productos a eliminar 
        Then deberia ver el carrito vacio    

    @compra @carrito
    Scenario: C03_Validar carrito vacio
        When hace clic en el boton cart link
        Then deberia ver el carrito vacio  

    @compra @exitosa
    Scenario: C04_Validar campos al comprar
        When el usuario selecciona productos a agregar
        And  hace clic en el boton cart link
        And  hace clic en el boton checkout
        When el usuario ingresa el nombre "<nombre>", apellido "<apellido>" y postal "<postal>"
        And  hace clic en el boton continue
        Then <resultado>
    
    Examples:
        | nombre | apellido | postal | resultado                                                                 |
        |        | test     | test   | deberia ver un mensaje de error que diga "Error: First Name is required"  |
        | test   |          | test   | deberia ver un mensaje de error que diga "Error: Last Name is required"   | 
        | test   | test     |        | deberia ver un mensaje de error que diga "Error: Postal Code is required" | 

        

    @compra @exitosa
    Scenario: C04_Validar campos al comprar
        When el usuario selecciona productos a agregar
        And  hace clic en el boton cart link
        And  hace clic en el boton checkout
        When el usuario ingresa el nombre "<nombre>", apellido "<apellido>" y postal "<postal>"
        And  hace clic en el boton continue
        And  hace clic en el boton finish
        When el usuario ve mensaje "<mensaje>"
        And  hace clic en el boton Back Home
        Then <resultado>

    Examples:
        | nombre  | apellido | postal  | mensaje                   | resultado |
        | testNom | testApe  | testPos | Thank you for your order! | deberia ver la pagina principal del inventario |