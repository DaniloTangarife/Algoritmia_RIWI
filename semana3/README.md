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

```text
Carros atendidos: 3
Total recaudado: $14000

