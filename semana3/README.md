## Reto de Video 1 · Cajero del Parqueadero (Ciclo con centinela)

### Archivo creado
`semana3/video/01_cajero_parqueadero.js`

### Tabla de Traza (Prueba con 4000, 8000, 2000 y 0)

| Vuelta | Acción | valor (leído) | total | carros | ¿Entra al ciclo? (valor <> 0) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Antes del ciclo** | Inicialización de variables | - | 0 | 0 | - |
| **1** | Se lee el primer valor | 4000 | 4000 | 1 | Sí |
| **2** | Se lee el segundo valor | 8000 | 12000 | 2 | Sí |
| **3** | Se lee el tercer valor | 2000 | 14000 | 3 | Sí |
| **4** | Se lee el cuarto valor | 0 | 14000 | 3 | No (Sale del ciclo) |

### Resultado en Consola

Carros atendidos: 3
Total recaudado: $14000

## Reto de Video 2 · Notas de cinco estudiantes

### Archivo creado
`semana3/video/02_calificaciones.js`

### Tabla de Traza (Prueba con 3.5, 2.8, 4.9, 3.0 y 4.2)

| Estudiante (i) | Nota | suma | aprobados | mayor | menor | alguienPerdio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Antes del ciclo** | - | 0 | 0 | 0 | 5 | Falso |
| **1** | 3.5 | 3.5 | 1 | 3.5 | 3.5 | Falso |
| **2** | 2.8 | 6.3 | 1 | 3.5 | 2.8 | Verdadero |
| **3** | 4.9 | 11.2 | 2 | 4.9 | 2.8 | Verdadero |
| **4** | 3.0 | 14.2 | 3 | 4.9 | 2.8 | Verdadero |
| **5** | 4.2 | 18.4 | 4 | 4.9 | 2.8 | Verdadero |

### Resultado en Consola

Promedio: 3.68
Aprobados: 4
Nota más alta: 4.9, y más baja: 2.8
¿Refuerzo? Sí, hay estudiantes en refuerzo