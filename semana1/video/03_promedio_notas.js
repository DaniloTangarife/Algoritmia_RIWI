// 03_promedio_notas.js
// Reto de video Semana 1 - Promedio de 3 notas

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Variables de entrada
let nota1 = 0;
let nota2 = 0;
let nota3 = 0;

// Variable de proceso/salida
let promedio = 0;

// --- ENTRADA ---
rl.question('Ingrese la primera nota: ', (n1) => {
  nota1 = parseFloat(n1);

  rl.question('Ingrese la segunda nota: ', (n2) => {
    nota2 = parseFloat(n2);

    rl.question('Ingrese la tercera nota: ', (n3) => {
      nota3 = parseFloat(n3);

      // --- PROCESO ---
      promedio = (nota1 + nota2 + nota3) / 3;

      // --- SALIDA ---
      console.log(`El promedio de las 3 notas es: ${promedio.toFixed(2)}`);

      rl.close();
    });
  });
});