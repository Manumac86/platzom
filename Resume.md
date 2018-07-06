# Fundamentos de JS - Creando nuestro paquete
Resumen para crear un paquete npm
## Paso 0. 
-Crear un repositorio en GIT.
## Paso 1.
- Dentro de “Terminal” en la carpeta que creamos iniciar escribiendo “npm init”
-Escribir: Nombre, Versión, Descripción, Entry point (archivo principal,  index.js), Git repository (url de nuestro archivo git), Keywords, Licencia “MIT”
## Paso 2.
- Crear un nuevo doc. txt llamado “Licence” y pegar el siguiente texto de Iniciativa MIT LICENCE, cambiando fecha y año.
## Paso 3.
- Crear un nuevo doc. txt llamado  README_md, (md significa “markdown”) Youtube video, Readme_md example, Markdown_cheatsheet
## Paso 4.
- Escribir el código en nuestro paquete y usar BABEL para que sea compatible.
- Crear carpeta SRC (código source o fuente). Dentro crear un código JS y pegarle nuestro código (user export default …)

## Paso 5.
- Hacer un “Test” con el código sig: npm install --save-dev mocha chai  (Utilizar 2 librerías muy comunes: mocha chai)
- Crear carpeta “test” y dentro un archivo llamado test.js.

## Paso 6.
- Publicarlo en NPM:
- git init
- git remote add origin + “link de nuestro proyecto de git”