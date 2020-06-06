

const nodemailer = require('@nodemailer/pro');
const template = require('./templates/confirmacion.js');

console.clear();


// process = Maneja información del contexto de la app en nodejs
// process.argv[] = Devuelve el valor según el indice del argumento 
// console.log('0 = ', process.argv[0])
// console.log('1 = ', process.argv[1])
// console.log('2 = ', process.argv[2])
// console.log('3 = ', process.argv[3])
// console.log('4 = ', process.argv[4])

let obj = {
    nombre : process.argv[2], //Name
    email : process.argv[3], //Email
    hash : '5887d4fc097486a5e9e3e23a', //Id Unico que permitira identificar al usuario
}


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'fullstacksodimac@gmail.com',
        pass:'sodimac.,123'
    }
});


// Verificar conexión con la cuenta de GMAIL
transporter.verify( function(error, success){
    if(error){
        console.log(error);
    }else{
        console.log('Servidor de email esta OK');
    }

});

// Opciones del email a enviar
let mailOptions ={
    from: `${obj.nombre}<${obj.email}>`,
    to: `${obj.nombre}<${obj.email}>`,
    subject: '👻 Email testing 👻',
    text: 'EMAIL DE PRUEBA',
    html: template.emailConfirmacion(obj)
};


// Enviar email

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log(`
    INFORMACION: '
    ID: ${info.messageId}, 
    RESPONSE: ${info.response}`);
});





// console.log(obj);
