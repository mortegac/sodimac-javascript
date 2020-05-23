

let numbers = [1,2,3,4,5,6];

// const indice = numbers.indexOf(4)
// numbers[indice] = 8

// Diferencia entre arreglo y Objetos
// let objeto = [
//     { numero : 1 },
//     { numero : 2 },
//     { numero : 3 },
//     { numero : 4 }
//     ]

let texto = "soy un texto";

console.log(numbers)
console.log('[indice 4]: ', numbers[3])

const contenido = document.getElementById("contenido");

contenido.innerHTML=`
Largo: ${numbers.length}
<br />
Indice[3]: ${numbers[3]}
<br />
Indice[5]: ${numbers[5]}
<br />
<hr/>
number = array: ${Array.isArray(numbers)}
<br />
texto = array: ${Array.isArray(texto)}
<hr/>
number: ${numbers}
<br />
<hr/>
ELIMINANDO ELEMENTOS
<hr/>
<br/> numbers.shift(): ${numbers.shift()}
<i>Elimina el primer elemento del arreglo y lo devuelve</i>
<p>number: ${numbers}</p>
<br/>
<br/> numbers.pop(): ${numbers.pop()}
<i>Elimina el último elemento del arreglo y lo devuelve</i>
<p>number: ${numbers}</p>

<hr/>
AGREGAR NUEVOS ELEMENTOS AL ARREGLO
<hr/>
<br/> numbers.push(8): ${numbers.push(8)}
<i>Agrega un elemento al final del arreglo y devuelve la longitud</i>
<p>${numbers}</p>

<br/> numbers.unshift(9): ${numbers.unshift(9)}
<i>Agrega un elemento al inicio del arreglo y devuelve la longitud</i>
<p>${numbers}</p>

<hr/>
OTROS
<hr/>
<br /> numbers.join('@'): ${numbers.join('@')}
<br /> numbers.join('-'): ${numbers.join('-')}
<i>Permite agregar un caracter entre los elementos del arreglo</i>
<hr/>
<br /> numbers.indexOf(4): ${numbers.indexOf(4)}
<br /> numbers.indexOf(7): ${numbers.indexOf(7)}
<i>Devuelve el primer indice del elemento que coincida con el valor especificado, Devueve -1 si no encuentra el elemento</i>

<hr>
<br /> numbers.reverse(): ${numbers.reverse()}
<i>Invierte el orden de los elementos del arreglo</i>

`