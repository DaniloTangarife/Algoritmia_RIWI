// 01_edad_en_dias.js
// Reto de video Semana 1 - Calcular cuántos días ha vivido una persona

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const DIAS_POR_ANIO = 365;

let edadAnios = 0;
let diasVividos = 0;

rl.question('Ingrese su edad en años: ', (edad) => {
  edadAnios = parseInt(edad, 10);

  diasVividos = edadAnios * DIAS_POR_ANIO;

  console.log(`Has vivido aproximadamente ${diasVividos} días.`);

  rl.close();
});