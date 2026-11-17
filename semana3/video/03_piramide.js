// 03_piramide.js
// Reto de video Semana 3 - Pirámide con ciclos anidados

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Altura de la pirámide: ', (input) => {
  let n = parseInt(input, 10);

  console.log(''); // Salto de línea inicial por estética

  // Ciclo de las filas (el de afuera)
  for (let fila = 1; fila <= n; fila++) {
    
    // 1. Ciclo para los espacios
    // De 1 hasta (n - fila). Ej: si n=4 y fila=1, imprime 3 espacios
    for (let j = 1; j <= n - fila; j++) {
      process.stdout.write(' ');
    }

    // 2. Ciclo para los asteriscos
    // De 1 hasta (2 * fila - 1). Ej: si fila=1, imprime 1 asterisco
    for (let j = 1; j <= (2 * fila) - 1; j++) {
      process.stdout.write('*');
    }

    // 3. Salto de línea al terminar la fila
    console.log('');
  }

  rl.close();
});