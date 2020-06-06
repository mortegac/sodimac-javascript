

const uppercaseModule  = require('./uppercase');

const { a, b, c, obj } = require('./uppercase');


console.log(uppercaseModule.uppercase('soy un test'));

console.log(a ,b ,c);

console.log(`${obj}`)
console.log(obj)

// JSON.stringify()   => Permite transformar el objeto a JSON STRING
console.log(`${ JSON.stringify(obj) }`)

console.table(obj)
