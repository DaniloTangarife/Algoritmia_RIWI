// 02_validar_edad.js
// Reto de video Semana 2 - ValidarEdad con condición de inválida (Ley de De Morgan)

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let edad = 0;

rl.question('Ingrese la edad: ', (inputEdad) => {
  edad = parseInt(inputEdad, 10);

  // Aplicando la negación de (edad >= 0 Y edad <= 120)
  // NO (A Y B) = NO A O NO B
  // Por lo tanto: (edad < 0) O (edad > 120)
  
  if (edad < 0 || edad > 120) {
    // Condición de inválida
    console.log('Edad inválida');
  } else {
    // Si no es inválida, es válida
    console.log('Edad válida');
  }

  rl.close();
});