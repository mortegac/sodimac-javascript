

# Habilitar ES6 en nodejs


## Instalar un transpilador

```
npm install -D babel-cli
npm install -D babel-preset-es2015
```

## Crear archivo de configuración de Babel

```
touch .babelrc
```

## Configurar la versión del ECMACSCRIPT a utilizar 

```
{
"presets": ["es2015"]
}
```


## Agregar un script que ejecute el tranpilador
```
  "scripts": {
    "transpile": "babel --presets es2015 -d dist-server/ custom_modules/es6/"
  },
```

## Instalar librería que permite ejecutar varias tareas 

```
npm install --save npm-run-all
```

## Agregar un script que ejecute la transpilación
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "transpile": "babel --presets es2015 -d dist-server/ custom_modules/es6/",
    "server": "nodemon ./dist-server",
    "build": "npm-run-all transpile server"
  },
```

## Ejecutar en la terminal 

`npm run build`

