## Quickstart

npm install -g typescript

## Uso

`tsc -h` para ver la lista de comandos <br>
`tsc ruta.ts ruta.js` para compilar ruta.ts y pasarlo a ruta.js

### Configuración básica

En el archivo `tsconfig.json` de puede modificar la ruta `rootDir` y `outDir` para indicar los directorios.
`rootDir`: es el directorio donde se encuentran los archivos `.ts` <br>
`outDir`: es el directorio donde se van a compilar los archivos `.ts` a formato `.js` <br>

Una vez indicados los dierectorios solo hace falta llamar el comando `tsc` (typescript compiler) <br>
Se puede llamar al comando `tsc -w` para que se haga una compilación cada vez que se edite un archivo.