

// const reloj = () => {
//    ... 
// }


let hora = document.getElementById("hora");
let count = 0;

// console.log('count:', count);

function reloj(){
    
    // count=count+1;
    count++;

    console.log('count:', count);

    var fObj = new Date();
    // la fecha es retornada en formato fecha + hora

    var horas = fObj.getHours();

    var minutos = fObj.getMinutes();

    var segundos = fObj.getSeconds();


    // Explicacion de IF/ELSE
    // if (condicion){
        //Si se cumple
        //realizo esto
    // }else{
        //Si no se cumple
        //Realizo esto otro
    // }

    // por ejemplo 
    // ejemplo horas = 6

    if( horas <=9 ){
        // horas = "0" + horas;
        horas = `0${horas}`;
        // Resultado de horas = 06
    }

    if( minutos <=9 ){
        minutos = `0${minutos}`;
    }

    if( segundos <= 9 ){
        segundos = `0${segundos}`
    }

    // console.log(horas)
    // console.log(minutos)
    // console.log(segundos)

    hora.innerHTML= `
                    ${horas}
                    :
                    ${minutos}
                    :
                    ${segundos}
                    `;

console.log(this)
    if (count == '5') {
        clearInterval(id);
    }

}


// setTimeout - setInterval

// setTimeout se ejecuta solo una vez
// ============================================================
// DEFINICION:  setTimeout( funcion, cantidad_milisegundos  )
// setTimeout(reloj, 1500 )  // Se ejecutará cada 1.5 minutos

// setInterval
// ============================================================
// DEFINICION:  setInterval( funcion, cantidad_milisegundos)

const id= setInterval(reloj,1500);


// const id = setInterval(reloj, 1000); // Llama a la función cada 1 segundo


