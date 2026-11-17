// 01_cajero_parqueadero.js
// Reto de video Semana 3 - El cajero del parqueadero (Ciclo con centinela)

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let valor = 0;
let total = 0;
let carros = 0;

// Función recursiva asíncrona para simular el ciclo "Mientras"
function procesarCaja() {
  rl.question('Valor cobrado (0 para cerrar caja): ', (input) => {
    valor = parseFloat(input);

    // Condición del centinela: si es diferente de 0, sigue el ciclo
    if (valor !== 0) {
      total = total + valor;
      carros = carros + 1;
      
      // Vuelve a llamar a la función (esto equivale al "Leer valor" dentro del ciclo)
      procesarCaja(); 
    } else {
      // Cuando entra el 0, sale del ciclo y muestra los resultados
      console.log(`\nCarros atendidos: ${carros}`);
      console.log(`Total recaudado: $${total}`);
      
      rl.close();
    }
  });
}

// Arrancamos el ciclo
console.log('--- INICIO DE CAJA ---');
procesarCaja();