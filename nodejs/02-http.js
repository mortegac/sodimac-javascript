
const http = require("http");

// const lodash = require("lodash")
// const _ = require("lodash")
// underline undercore _

// const server = http.createServer( function ( request , response )){ 
//     response.end(MENSAJE)
// }

const server = http.createServer( function( request , response ){ 
    response.end('<h1>Bienvenidos al Backend</h1>');
});

server.listen(3000, function(){
    console.log("El servidor se ejecuta en el puerto " + this.address().port);
});
