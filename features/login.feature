Feature: Inicio de sesión

  Como un cliente de Sauce Demo
  Quiero poder iniciar sesion con mis credenciales
  Para poder visualizar la pagina principal

  Background:
    Given el usuario navega a la pagina de login

  @login
  Scenario Outline: C01_Validar el inicio de sesion con diferentes credenciales
    When el usuario ingresa el usuario "<username>" y contrasena "<password>"
    And hace clic en el boton de login
    Then <resultado>

    Examples:
      | username         | password      | resultado                                                  |
      | standard_user    | secret_sauce  | deberia ver la pagina principal del inventario             |
      | locked_out_user  | secret_sauce  | deberia ver un mensaje de error que diga "Epic sadface: Sorry, this user has been locked out." |
      | test             | test          | deberia ver un mensaje de error que diga "Epic sadface: Username and password do not match any user in this service"|
      |                  | test          | deberia ver un mensaje de error que diga "Epic sadface: Username is required" |
      | test             |               | deberia ver un mensaje de error que diga "Epic sadface: Password is required" |

