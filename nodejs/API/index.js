const http = require('http');

// finalhandler Invoca a la raiz del la solicitud HTTP
const finalhandler = require('finalhandler');

// Devolver HTML
const serveStatic = require('serve-static');


let todos = [];
let count = 1;  // Contabilizar los ID, asi podemos incrementarlo
const serve = serveStatic('public/', { 'index': ['index.html', 'index.htm']});

// Expresión Regular
        // Explicación
        // nn/nn/nnnn <= patron
        // patron === dia/mes/año

const pattern = /^\/todos\/(\d+)$/;
// /^\/todos\   Validará que la url contenga el texto "todos\"
// /(\d+)$/;    Validará que sea un número


// request = llamada
// response = respuesta
const server = http.createServer( (request, response) =>{

    console.log('request', request.url);
    // GET
    // POST

    const method = request.method.toLowerCase();

    if(app[method]){
        return app[method](request, response);
    }
});

const app = {
    //create
    post: function(request, response){
        let body,
        todo;

        //request.writeHead(200, { 'Content-type': 'application/json' });

        // EVENTOS
        request.on('data', function(chunk){
            // Quiere decir que recibo datos
            console.log('<chunk> ', chunk.toString());

            body = chunk.toString();
            
            todo = JSON.parse(body);

            todo.id = count++;

            // Almacenar el nuevo objeto en el arreglo todos
            todos.push(todo);

            response.end(JSON.stringify(todo));

        });
    },
    get: function(request, response){
        let url = request.url,
        todo,
        id,
        i

        if(url === '/todos/'){
            response.writeHead(200, {'Content-type':'application/json'} );
            response.end(JSON.stringify(todos));
            return;
        }

        // Patrón = todos/1
        if( pattern.test(url) ){
            id = +pattern.exec(url)[1];

            response.writeHead(200, {'Content-type':'application/json'});

            // Recorrer el arreglo de Todos y buscar el ID
            for (i=0; i < todos.length; i++){
                if(todos[i].id === id){
                    break;
                }
            }

            response.end( JSON.stringify(todos[i]) );

        }

        // response.write('API con metodos GET y POST');
        // response.end();

        serve(request, response, finalhandler(request, response));

    }
}

server.listen(3000);
console.log('Servidor escucha en el puerto 3000...');





// CASO SIMPLE DE USO 
// const server = http.createServer( (request, response) =>{

//     console.log('request', request.url);
   
    // if(request.url === '/'){
    //     response.write('<h1>Mi primera API</h1>');
    //     response.end();
    // }

    // if(request.url === '/animales'){
    //     response.write(JSON.stringify(['vaca','chancho','Pollo','Leon',]));
    //     response.end();
    // }

    // switch(request.url) {

    //     case '/':
    //         response.write('<h1>Mi primera API</h1>');
    //         response.end();

    //     case '/animales:1':
    //         response.write(JSON.stringify(['vaca','chancho','Pollo','Leon',]));
    //         response.end();
    // }

// });