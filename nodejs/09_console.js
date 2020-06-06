
    console.log("log: Texto de Prueba")
    console.warn("warn: Texto de Prueba")
    console.error("error: Texto de Prueba")
    // console.log("%cTexto de prueba", "color: green; font-style: italic" )


// Instalar una libreria o Modulo permite dar color a los mensajes

const user = [ 'Vivaldi', 'Beethoven', 'Ludovico'];

const loop = (array) => {

    array.forEach( (element) => {
        console.log(element)
    });
}

const timer = () => {
  
    console.time('timerLabel');
    
    loop(user);

    console.timeEnd('timerLabel');
}

timer();



