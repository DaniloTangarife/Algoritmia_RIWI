// 03_cuenta_grupo.js
// MiniReto 4 - Asistente de taquilla v0.1: la cuenta del grupo
// Rueda Libre - Algoritmia Riwi

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Constantes del negocio
const PRECIO_HORA_URBANA = 10000;   // precio por hora de bicicleta urbana
const PORCENTAJE_APORTE = 0.10;     // aporte voluntario del 10%

// Variables de entrada
let cantidadBicicletas = 0;
let horasAlquiler = 0;
let precioRecorridoPorPersona = 0;
let cantidadPersonas = 0;

// Variables de proceso
let valorAlquiler = 0;
let valorRecorrido = 0;
let subtotal = 0;
let aporteVoluntario = 0;
let total = 0;
let valorPorPersona = 0;
let valorPorPersonaRedondeado = 0;

// --- ENTRADA ---
rl.question('Cantidad de bicicletas urbanas: ', (bicis) => {
  cantidadBicicletas = parseInt(bicis, 10);

  rl.question('Horas de alquiler: ', (horas) => {
    horasAlquiler = parseInt(horas, 10);

    rl.question('Precio del recorrido por persona: ', (precio) => {
      precioRecorridoPorPersona = parseFloat(precio);

      rl.question('Cantidad de personas del grupo: ', (personas) => {
        cantidadPersonas = parseInt(personas, 10);

        // --- PROCESO ---
        valorAlquiler = cantidadBicicletas * horasAlquiler * PRECIO_HORA_URBANA;
        valorRecorrido = precioRecorridoPorPersona * cantidadPersonas;
        subtotal = valorAlquiler + valorRecorrido;
        aporteVoluntario = subtotal * PORCENTAJE_APORTE;
        total = subtotal + aporteVoluntario;

        // Valor por persona exacto
        valorPorPersona = total / cantidadPersonas;

        // Redondeo hacia arriba a la centena
        valorPorPersonaRedondeado = Math.ceil(valorPorPersona / 100) * 100;

        // --- SALIDA ---
        console.log('===== RESUMEN DE LA CUENTA =====');
        console.log(`Valor del alquiler: $${valorAlquiler}`);
        console.log(`Valor del recorrido: $${valorRecorrido}`);
        console.log(`Subtotal: $${subtotal}`);
        console.log(`Aporte voluntario (10%): $${aporteVoluntario}`);
        console.log(`Total: $${total}`);
        console.log(`Valor por persona (redondeado a la centena): $${valorPorPersonaRedondeado}`);

        rl.close();
      });
    });
  });
});