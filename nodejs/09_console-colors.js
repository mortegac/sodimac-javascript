
const chalk = require('chalk');
const colors = require('colors');

console.error(chalk.red("error: Texto de Prueba"));

colors.setTheme({
    warn: 'yellow',
    error: 'red',
    info: 'green',
    debug: 'blue'
});


console.log("warn: Texto de Prueba".warn)
console.log("debug: Texto de Prueba".debug)
   



