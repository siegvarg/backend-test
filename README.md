# Bienvenido al proyecto de backend para devops

Este proyecto cuenta con los siguientes endpoints por defecto :

## Ejecucion del proyecto

Para poner el marcha el proyecto, lo puedes hacer con:

    npm run dev

Para construir el proyecto y dejar los ficheros finales en la carpeta __/dist__

    npm run build

    
## Lista de endpoints

* http://localhost:3000/
    * __resultado:__ Hola mundo al usuario default
    * __parametros:__ sin parametros

* http://localhost:3000/api-key
    * __resultado:__ la apikey de mi aplicacion es: default-key
    * __parametros:__ sin parametros

* http://localhost:3000/operar?operacion=suma&num1=10&num2=20
    * __resultado:__ El resultado de la operacion es: 30
    * __parametros:__ operacion:_string_, num1:_numeric_, num2:_numeric_

* http://localhost:3000/palindromo?frase=reconocer
    * __resultado:__ Hola, La frase ingresada es palindromo
    * __parametros:__ frase:_string_

* http://localhost:3000/primo?numero=7
    * __resultado:__ Hola, el numero ingresado es un numero primo
    * __parametros:__ numero:_numeric_

## Configuracion de parametros basicos
Los parametros de la aplicacion como el _api-key_ , el puerto del servidor http _port_ , o el usuario que levanta la aplicaci on _username_, se encuentran en el fichero config.ts.
Este fichero toma los valores de las variables de ambiente del sistema y en caso de que no se encuentren disponibles, las configura con un valor por defecto.