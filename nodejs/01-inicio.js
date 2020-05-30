
const moment = require("moment");

const curso = 'Fullstack';
const numero = '11';
// const fecha = new Date();   //Devuelve la fecha de sistema 
// const fecha =  moment( FECHA ).format( FORMATO );
const fecha =  moment(new Date()).format('dddd MM [de] YYYY');


console.log(`
    Bienvenidos al curso de ${curso}
    clase número: ${numero}
    fecha: ${fecha}
    test
`);


//CTRL + C = Detener Nodemon 