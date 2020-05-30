
const querystring = require('querystring');

// Serializar un objeto a una cadena 
// const a = querystring.stringify( CADENA );

const a = querystring.stringify(
    { foo:'bar', baz:['qux','quux'], corge:''} 
);

// Deserialzar una cadena a un objeto
// const b = querystring.parse( CADENA );

const b = querystring.parse('foo=bar&baz=qux&baz=quux&corge=');


console.log('a: stringify', a);

console.log('b: parse', b);