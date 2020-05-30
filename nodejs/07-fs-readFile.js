const fs = require('fs');


const pathFile = './data/clientes.csv';
const ENCODING = { encoding:'utf-8' };

// Permite leer un archivo
// fs.readFile( RUTA_ARCHIVO, ENCODING, FUNCION());

fs.readFile( pathFile, ENCODING, (error, data) =>{ 

    if(error){
        console.log('ERROR:', error);
        process.exit(1);

    }else{
        console.table('Datos:', [data]);
    }
});
