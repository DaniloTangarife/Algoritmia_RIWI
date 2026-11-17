// 02_calificaciones.js
// Reto de video Semana 3 - Notas de cinco estudiantes

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Variables iniciales
let suma = 0;
let aprobados = 0;
let mayor = 0;       // Como las notas son hasta 5.0, el 0 asegura que la primera nota lo reemplace
let menor = 5;       // Como las notas son desde 0.0, el 5 asegura que la primera nota lo reemplace
let alguienPerdio = false;

let i = 1;

// Función recursiva para simular el ciclo "Para i <- 1 Hasta 5"
function pedirNota() {
  if (i <= 5) {
    rl.question(`Nota del estudiante ${i}: `, (input) => {
      let nota = parseFloat(input);

      // Acumulador y contador
      suma = suma + nota;
      if (nota >= 3) {
        aprobados = aprobados + 1;
      } else {
        alguienPerdio = true; // Bandera
      }

      // Máximo y mínimo
      if (nota > mayor) {
        mayor = nota;
      }
      if (nota < menor) {
        menor = nota;
      }

      i = i + 1; // Incremento
      pedirNota(); // Siguiente vuelta
    });
  } else {
    // Salida de datos al terminar el ciclo
    let promedio = suma / 5;
    
    console.log(`\nPromedio: ${promedio.toFixed(2)}`);
    console.log(`Aprobados: ${aprobados}`);
    console.log(`Nota más alta: ${mayor}, y más baja: ${menor}`);
    
    if (alguienPerdio) {
      console.log('¿Refuerzo? Sí, hay estudiantes en refuerzo');
    } else {
      console.log('¿Refuerzo? No');
    }

    rl.close();
  }
}

console.log('--- INGRESO DE CALIFICACIONES ---');
pedirNota();