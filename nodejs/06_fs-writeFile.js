
const fs = require('fs');

// Escribir un archivo
// fs.writeFile( RUTA_ARCHIVO, CONTENIDO_ARCHIVO ,funcion(ERROR) );

const pathFile='./data/bienvenido.txt';
const content = 'Bienvenido a Nodejs';

fs.writeFile( pathFile, content, (error) => {

    if(error){
        console.log('ERROR:', error);
        // Terminar este proceso
        process.exit(1);
    }else{
        console.log('Escritura fue realizada');
    }

} );


