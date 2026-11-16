// 02_calculadora_propinas.js
// Reto de video Semana 1 - Calculadora de propinas

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Variables de entrada
let cuenta = 0;
let porcentajePropina = 0;
let cantidadPersonas = 0;

// Variables de proceso/salida
let propina = 0;
let total = 0;
let cadaUnoPaga = 0;

// --- ENTRADA ---
rl.question('Ingrese el valor de la cuenta: ', (valorCuenta) => {
  cuenta = parseFloat(valorCuenta);

  rl.question('Ingrese el porcentaje de propina (ej. 10): ', (porcentaje) => {
    porcentajePropina = parseFloat(porcentaje);

    rl.question('Ingrese la cantidad de personas: ', (personas) => {
      cantidadPersonas = parseInt(personas, 10);

      // --- PROCESO ---
      propina = (cuenta * porcentajePropina) / 100;
      total = cuenta + propina;
      cadaUnoPaga = total / cantidadPersonas;

      // --- SALIDA ---
      console.log('===== RESUMEN =====');
      console.log(`Propina: $${propina}`);
      console.log(`Total a pagar: $${total}`);
      console.log(`Cada uno paga: $${cadaUnoPaga}`);

      rl.close();
    });
  });
});