// 01_validar_registro.js
// Reto de video Semana 2 - ValidarRegistro con proposiciones lógicas

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let edad = 0;
let respuesta = '';

rl.question('¿Cuántos años tienes? ', (inputEdad) => {
  edad = parseInt(inputEdad, 10);

  rl.question('¿Aceptas los términos? (S/N) ', (inputRespuesta) => {
    // Convertimos a mayúsculas para estandarizar la respuesta
    respuesta = inputRespuesta.toUpperCase();

    // Proposición lógica: edad >= 14 Y respuesta === 'S'
    if (edad >= 14 && respuesta === 'S') {
      console.log('Registro exitoso');
    } else {
      console.log('No puedes registrarte');
    }

    rl.close();
  });
});