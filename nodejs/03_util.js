const util = require('util');

// DEPRECADO, usar console.error
// const a = util.debug('Mensaje')

const b = util.log('Mesaje de error');


// Develve una representacion de un objeto, esto nos ayudará a depurar 
// const c = util.inspect( util, true, null );

// const arr = []
// Devuelve true si el "objeto" dado es una Array
const d = util.isArray([]);   // true
const e = util.isArray({});   //false


// Devuelve true si el "objeto" dado es una Date
const f = util.isDate(new Date());   // true

// Devuelve true si el "objeto" dado es una Error
const g = util.isError(new Error());   // true
const h = util.isError({ 
    name: 'error', message: 'Ocurrio un error'
});   


// console.log('a - debug :', a);
// console.error('Error')
// console.log('b - log :', b);

// console.log('c - inspect:', c);

console.log('d - isArray:', d);
console.log('e - isArray:', e);
console.log('f - isDate:', f);
console.log('g - isError:', g);
console.log('h - isDate:', h);
