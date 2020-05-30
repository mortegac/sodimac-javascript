const url = require('url');


const URI ='https://www.sodimac.cl/sodimac-cl/product/2771748/Motosierra-a-gasolina-18-3-HP-54-cc/2771748';
// const URI ='https://www.sodimac.cl/sodimac-cl/product?id=2771748&categoria=Motosierra-a-gasolina-18-3-HP-54-cc/2771748';


// url.parse( CADENA_URL , parseQueryString= false , slashesDenotHost= false )

const a = url.parse(URI, true, false);
const b = url.parse(URI, false. false).pathname;



// console.log('a', a);
// console.log('a', a.query.categoria);
// console.log('a', a.query['categoria']);
console.log('b', b);