// 05_bisiesto.js
// Reto de video Semana 2 - Año Bisiesto

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let anio = 0;

rl.question('Ingrese el año: ', (input) => {
  anio = parseInt(input, 10);

  // Condición completa: (divisible entre 4 Y NO entre 100) O (divisible entre 400)
  if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
    console.log(`${anio} es bisiesto`);
  } else {
    console.log(`${anio} no es bisiesto`);
  }

  rl.close();
});