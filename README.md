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

* http://localhost:3000/validar-rut?rut=numero-rut
    * __resultado:__ El resultado de la operacion es: 30
    * __parametros:__ rut:_string_ con o sin puntos, con o sin guion.

* http://localhost:3000/buscar-subcadena?cadena=string&subcadena=substring
    * __resultado:__ La cadeja "string" tiene n repeticiones de la subcadena "substring"
    * __parametros:__ cadena:_string_ , subcadena:_string_

## Configuracion de parametros basicos
Los parametros de la aplicacion como el _api-key_ , el puerto del servidor http _port_ , o el usuario que levanta la aplicaci on _username_, se encuentran en el fichero config.ts.
Este fichero toma los valores de las variables de ambiente del sistema y en caso de que no se encuentren disponibles, las configura con un valor por defecto.