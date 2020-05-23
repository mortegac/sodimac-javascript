
{/* <li>asas</li> */}
let user= [];
let listaHtml = "";
const frm = document.getElementById('frm');
const nameFrm = document.getElementById('name');
const emailFrm = document.getElementById('email');
const notif = document.getElementById("notification");
const list = document.getElementById("list");

const iconDelete = (index)=> `<a href='#' onClick='handlerClick(${index})'><ion-icon name="trash-outline"></ion-icon></a>`;
const notification = `<div class="notification is-danger is-light">
Debe ingresar todos los datos</div> ` 

const handlerClick = (index)=>{
    // alert('Eliminar indice:'+ index);
    // splice( indice, cantidad )
    user.splice( index, 1);
    console.log('delete-user:', user);

    if(user.length === 0){
        clearAllStorage();
    }

    generaList();

    return false;


}

const generaList = () => {
    
    if(user.length === 0){

        list.innerHTML = "<span class='tag is-danger is-light is-mediu'>Que esperas, ingresa un Usuario</span>";
        
    }else{
        setAllStorage();
        listaHtml = '';

        // FORMA TRADICIONAL DE RECORRE UN ARREGLO
        // for( let count=0; count < user.length; count++){
                    
        //     listaHtml = `${listaHtml} <li>${iconDelete(count)} ${user[count].name} ( ${user[count].email}) </li>`;

        // }
        // list.innerHTML = listaHtml;

        // .map
        // Permite iterar un arreglo de forma fácil
        const userList = user.map( (item, index) => {
            console.log('<item>', item)
            return `<li>
                ${iconDelete(index)} 
                ${item.name} 
                ( 
                    ${item.email}
                ) 
                </li>
            `});
        
        // join() concatenar cadenas de texto
        list.innerHTML = userList.join('');
    }

} 

// MANEJO DE LOCALSTORAGE

const getAllStorage = () => {

    // ...  = destructuring, esparcir los elementos 

    const localUser = localStorage.getItem('users');
    if(localUser){

        user = [...JSON.parse(localUser)];

        generaList();

        console.log('<user-localstorage >', user)


    }
}
const setAllStorage = () => {
    // JSON.stringify transforma el arreglo a una cadena de caracteres con formato JSON
    localStorage.setItem('users', JSON.stringify(user));
}
const clearAllStorage = () => localStorage.clear();

window.onload = () => {

    getAllStorage();

    frm.onsubmit = (e) =>{

        // Prevenimos el comportamiento por defecto del formulario
        e.preventDefault();

        if(nameFrm.value !== '' && emailFrm.value !== ''){
            
            notif.innerHTML = '';

            user.push({ name:nameFrm.value, email:emailFrm.value });
            setAllStorage();
            
            generaList();

            // listaHtml="";

            // for( let count=0; count < user.length; count++){
                
            //     listaHtml = `${listaHtml} <li>${iconDelete(count)} ${user[count].name} ( ${user[count].email}) </li>`;

            //     // console.log(count, ' = ', listaHtml)
            // }



            // list.innerHTML = listaHtml;


            nameFrm.value = '';
            emailFrm.value = '';
            
            console.log('new-user:', user);
            

        }else{

            notif.innerHTML = notification;

        }


    }

};

generaList();
console.log('user:', user);
