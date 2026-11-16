// 01_cotizacion_basica.js
// MiniReto 2 - Cotización básica de alquiler de bicicleta urbana
// Rueda Libre - Algoritmia Riwi

const readline = require('readline');

// Interfaz de lectura por consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Constante del negocio: precio por hora de bicicleta urbana
const PRECIO_POR_HORA = 10000;

// Variable para el nombre del cliente (tipo Caracter/String)
let nombreCliente = '';

// Variable para las horas de alquiler (tipo Entero/Number)
let horasAlquiler = 0;

// Variable para el total a pagar (tipo Real/Number)
let totalPagar = 0;

// --- ENTRADA ---
rl.question('Ingrese el nombre del cliente: ', (nombre) => {
  nombreCliente = nombre;

  rl.question('Ingrese las horas de alquiler: ', (horas) => {
    horasAlquiler = parseInt(horas, 10);

    // --- PROCESO ---
    totalPagar = horasAlquiler * PRECIO_POR_HORA;

    // --- SALIDA ---
    console.log(`Hola, ${nombreCliente}: tu alquiler de ${horasAlquiler} horas cuesta $${totalPagar}`);

    rl.close();
  });
});