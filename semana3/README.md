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
```

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

```text
Promedio: 3.68
Aprobados: 4
Nota más alta: 4.9, y más baja: 2.8
¿Refuerzo? Sí, hay estudiantes en refuerzo
```

## Reto de Video 3 · Pirámide de asteriscos (Ciclos anidados)

### Archivo creado
`semana3/video/03_piramide.js`

### Tabla de Traza (Altura = 4)

| Fila | Espacios (n - fila) | Asteriscos (2 * fila - 1) | Salida Visual |
| :---: | :---: | :---: | :--- |
| **1** | 3 | 1 | `   *` |
| **2** | 2 | 3 | `  ***` |
| **3** | 1 | 5 | ` *****` |
| **4** | 0 | 7 | `*******` |

*(Nota: El caso borde de la última fila arroja 0 espacios, lo cual es correcto y no genera errores).*

### Pruebas de Escritorio

**Caso 1 (Altura = 1):**
- Fila 1: Espacios = `1 - 1 = 0`. Asteriscos = `(2*1) - 1 = 1`.
- Resultado:
```text
  *
```
**Caso 2 (Altura = 6):**

- Fila 1: Espacios = 5, Asteriscos = 1.

- Fila 2: Espacios = 4, Asteriscos = 3.

- Fila 3: Espacios = 3, Asteriscos = 5.

- Fila 4: Espacios = 2, Asteriscos = 7.

- Fila 5: Espacios = 1, Asteriscos = 9.

- Fila 6: Espacios = 0, Asteriscos = 11.

Resultado:

```text
     *
    ***
   *****
  *******
 *********
***********
```

## Reto de Video 4 · Factura Restaurante (SubProcesos)

### Archivo creado
`semana3/video/04_factura_restaurante.js`

### Descomposición del problema (SubProcesos)
- **LeerPedido()**: Acumula el subtotal multiplicando el precio por la cantidad de cada plato hasta que se ingrese un 0.
- **CalcularPorcentaje(base, porcentaje)**: Calcula el impuesto (8%) y la propina (10%).
- **ImprimirFactura()**: Suma todo y muestra el desglose en pantalla.

### Tabla de Traza (Prueba con 25000 x 2, 12000 x 1, 0)

| Vuelta | Acción | Valor leído | Subtotal acumulado |
| :--- | :--- | :--- | :--- |
| **1** | Ingresa precio 25000, cantidad 2 | 25000 | 50000 |
| **2** | Ingresa precio 12000, cantidad 1 | 12000 | 62000 |
| **3** | Ingresa precio 0 | 0 | 62000 (Sale del ciclo) |

### Resultado en Consola

```text
--- FACTURA ---
Subtotal:  $62000
Impuesto (8%):  $4960
Propina (10%):  $6200
Total:     $73160
```

## Reto de Video 5 · Árbol de Componentes

### Descripción
Se realizó el análisis de una página web real (Eneba Latam) aplicando los conceptos de descomposición, abstracción y reconocimiento de patrones.

### Archivos creados
- `semana3/video/arbol_componentes_eneba.md`: contiene el diagrama gráfico (Mermaid) del árbol de cajas y la explicación detallada.

### Resumen del análisis
- **Descomposición:** Se dividió la página en sus bloques lógicos principales (Navegación, Banner, Secciones de Juegos, Footer).
- **Abstracción:** Se ignoraron los detalles visuales (colores, imágenes específicas) para enfocarse en la estructura de los componentes.
- **Patrón (Ciclo):** Se identificó que la cuadrícula de juegos repite el mismo componente visual (la Tarjeta de Juego) "N" cantidad de veces, lo cual se representa en programación mediante un ciclo (como `for` o `map`).