// 02_cotizacion_recorrido.js
// MiniReto 3 - Cotización de recorridos guiados con anticipo del 30%
// Rueda Libre - Algoritmia Riwi

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Constante del negocio: porcentaje de anticipo
const PORCENTAJE_ANTICIPO = 0.30;

// Variables de entrada
let nombreRecorrido = '';
let precioPorPersona = 0;
let cantidadPersonas = 0;

// Variables de proceso/salida
let valorTotal = 0;
let valorAnticipo = 0;
let saldoPendiente = 0;

// --- ENTRADA ---
rl.question('Ingrese el nombre del recorrido: ', (nombre) => {
  nombreRecorrido = nombre;

  rl.question('Ingrese el precio por persona: ', (precio) => {
    precioPorPersona = parseFloat(precio);

    rl.question('Ingrese la cantidad de personas: ', (cantidad) => {
      cantidadPersonas = parseInt(cantidad, 10);

      // --- PROCESO ---
      valorTotal = precioPorPersona * cantidadPersonas;
      valorAnticipo = Math.round(valorTotal * PORCENTAJE_ANTICIPO);
      saldoPendiente = valorTotal - valorAnticipo;

      // --- SALIDA ---
      console.log(`Recorrido: ${nombreRecorrido}`);
      console.log(`Valor total: $${valorTotal}`);
      console.log(`Anticipo (30%): $${valorAnticipo}`);
      console.log(`Saldo pendiente: $${saldoPendiente}`);

      rl.close();
    });
  });
});