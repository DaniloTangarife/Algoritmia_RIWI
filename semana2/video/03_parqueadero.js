// 03_parqueadero.js
// Reto de video Semana 2 - El parqueadero (Decisiones múltiples y casos borde)

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tipo = 0;
let minutos = 0;
let factura = '';
let tarifa = 0;
let horas = 0;
let valor = 0;

rl.question('Tipo de vehículo (1 = carro, 2 = moto): ', (inputTipo) => {
  tipo = parseInt(inputTipo, 10);

  rl.question('Minutos de permanencia: ', (inputMinutos) => {
    minutos = parseInt(inputMinutos, 10);

    rl.question('¿Tiene factura de compra? (S/N): ', (inputFactura) => {
      factura = inputFactura.toUpperCase();

      // 1. Validación de minutos negativos
      if (minutos < 0) {
        console.log('Los minutos no pueden ser negativos');
      } else {
        // 2. Asignación de tarifa por tipo (De Otro Modo atrapa lo raro)
        if (tipo === 1) {
          tarifa = 4000;
        } else if (tipo === 2) {
          tarifa = 2000;
        } else {
          tarifa = 0;
        }

        // 3. Validación de tipo válido
        if (tarifa === 0) {
          console.log('Tipo de vehículo no válido');
        } else {
          // 4. Cálculo de tiempo y valor
          if (minutos <= 15) {
            valor = 0;
          } else {
            // Fórmula para redondear hacia arriba las horas (ej. 61 min = 2 horas)
            horas = Math.trunc((minutos + 59) / 60);
            valor = horas * tarifa;

            // 5. Tope máximo
            if (valor > 30000) {
              valor = 30000;
            }

            // 6. Descuento por factura (se hace después del tope)
            if (factura === 'S') {
              valor = valor / 2;
            }
          }

          // Salida final
          console.log(`Valor a pagar: $${valor}`);
        }
      }

      rl.close();
    });
  });
});