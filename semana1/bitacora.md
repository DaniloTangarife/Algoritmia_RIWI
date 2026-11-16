# Bitácora — Semana 1

## MiniReto 1 · Kilómetro 0: el alquiler sin ambigüedades

### 1. Primera versión del algoritmo (lenguaje natural)

1. El cliente llega al local.
2. Se le pide el documento de identidad.
3. Se le pregunta qué bicicleta quiere alquilar.
4. Se revisa si hay bicicletas disponibles.
5. Se le entrega la bicicleta.
6. Se le cobra.
7. Se le entrega el casco.
8. Se le entrega el candado.
9. El cliente sale con la bicicleta.

### 2. Ambigüedades encontradas por el compañero

(Suponiendo que el compañero siguió los pasos literalmente y anotó dónde se quedó atascado:)

- Paso 4: "¿Qué pasa si no hay bicicletas disponibles?" — No se indica qué hacer.
- Paso 6: "¿Cuánto se cobra? ¿Antes o después de revisar la bicicleta?" — No se especifica el monto ni el momento exacto.
- Paso 5: "¿Quién entrega la bicicleta y cómo se verifica su estado?" — No se dice si se revisa antes de entregar.
- Paso 7 y 8: "¿Se entregan antes o después de cobrar?" — El orden no es claro.
- No hay un paso explícito de "fin" ni de qué hacer si el cliente no tiene documento.

### 3. Versión corregida del algoritmo

1. **Inicio**
2. El cliente llega al local.
3. El empleado saluda y le pide el documento de identidad.
4. **Si** el cliente no presenta documento, **entonces** se le informa que no puede alquilar y se termina el proceso.
5. El empleado pregunta qué bicicleta desea alquilar (urbana, montaña, etc.).
6. El empleado revisa el inventario de bicicletas disponibles.
7. **Si** no hay bicicletas disponibles del tipo solicitado, **entonces** se le informa al cliente y se le ofrece alternativa o se termina el proceso.
8. El empleado revisa el estado de la bicicleta (frenos, llantas, luces) y lo registra.
9. El empleado calcula el valor del alquiler según las horas y la tarifa.
10. El empleado le informa al cliente el valor a pagar.
11. El cliente paga.
12. El empleado entrega el casco y el candado.
13. El empleado entrega la bicicleta.
14. El cliente firma o confirma la recepción.
15. El cliente sale con la bicicleta, el casco y el candado.
16. **Fin**

### 4. Justificación de las cinco características (con fragmentos del propio algoritmo)

- **Precisión**: cada paso indica exactamente quién hace qué. Ejemplo: "El empleado revisa el estado de la bicicleta (frenos, llantas, luces) y lo registra." No dice "revisar la bici" a secas.
- **Finitud**: el algoritmo tiene un número limitado de pasos y siempre termina, ya sea en el paso 4, 7 o 16.
- **Orden**: los pasos siguen una secuencia lógica: primero documento, luego disponibilidad, luego revisión, luego cobro, luego entrega. Ejemplo: el paso 11 (pago) va antes del paso 13 (entrega de bicicleta).
- **Determinismo**: para las mismas condiciones, siempre se ejecuta lo mismo. Ejemplo: "Si el cliente no presenta documento, entonces se le informa que no puede alquilar y se termina el proceso." No hay dos caminos posibles ante la misma situación.
- **Efectividad**: cada paso produce un resultado concreto y alcanzable. Ejemplo: "El empleado calcula el valor del alquiler según las horas y la tarifa" produce un número que se usa en el paso 10.

### 5. Los cuatro pilares del pensamiento computacional

- **Descomposición**: dividí el proceso en partes manejables: verificación de documento, consulta de disponibilidad, revisión de la bicicleta, cálculo del cobro, entrega de implementos y salida.
- **Patrón**: con cada cliente se repite la misma secuencia: documento → solicitud → disponibilidad → revisión → cobro → entrega → salida.
- **Abstracción**: dejé por fuera detalles como el color de la bicicleta, el nombre del empleado, la forma exacta de pago (efectivo/tarjeta) o el modelo del candado, porque no afectan la lógica del alquiler.
- **Algoritmo final**: la versión corregida de 16 pasos que aparece arriba, con decisiones claras y un inicio y fin definidos.

## MiniReto 2 · La primera cotización en JavaScript

### Archivo creado
`semana1/algoritmos/01_cotizacion_basica.js`

### Tabla Entrada – Proceso – Salida

| Entrada | Tipo | Proceso | Salida |
|---|---|---|---|
| `nombreCliente` | String (Caracter) | — | Se usa en el mensaje final |
| `horasAlquiler` | Number entero (Entero) | `totalPagar = horasAlquiler * PRECIO_POR_HORA` | — |
| `PRECIO_POR_HORA` | Constante Number (Real) = 10000 | Se usa en la fórmula | — |
| `totalPagar` | Number (Real) | Resultado del cálculo | `"Hola, [nombre]: tu alquiler de [horas] horas cuesta $[total]"` |

### Casos de prueba

| Caso | Entrada | Resultado esperado (a mano) | Resultado obtenido |
|---|---|---|---|
| 1 hora | Nombre: Ana, Horas: 1 | $10000 | $10000 |
| 3 horas | Nombre: Ana, Horas: 3 | $30000 | $30000 |
| 8 horas | Nombre: Ana, Horas: 8 | $80000 | $80000 |

### Caso borde pendiente para Semana 2

Si la persona de taquilla ingresa `0` o un número negativo, el algoritmo actual calcula `totalPagar = 0` o un valor negativo, y lo muestra sin advertir el error. Esto se resolverá en la Semana 2 con estructuras de decisión (`if`), validando que `horasAlquiler > 0` antes de calcular.

## MiniReto 3 · Recorridos guiados: del pseudocódigo al diagrama de flujo

### Archivo creado
`semana1/algoritmos/02_cotizacion_recorrido.js`

### Prueba de escritorio (4 personas, Sabores de Barrio)

| Paso / Instrucción | nombreRecorrido | precioPorPersona | cantidadPersonas | valorTotal | valorAnticipo | saldoPendiente |
|---|---|---|---|---|---|---|
| Inicio | — | — | — | — | — | — |
| Leer nombreRecorrido | Sabores de Barrio | — | — | — | — | — |
| Leer precioPorPersona | Sabores de Barrio | 60000 | — | — | — | — |
| Leer cantidadPersonas | Sabores de Barrio | 60000 | 4 | — | — | — |
| valorTotal = 60000 * 4 | Sabores de Barrio | 60000 | 4 | 240000 | — | — |
| valorAnticipo = redondear(240000 * 0.30) | Sabores de Barrio | 60000 | 4 | 240000 | 72000 | — |
| saldoPendiente = 240000 - 72000 | Sabores de Barrio | 60000 | 4 | 240000 | 72000 | 168000 |

### Diagrama de flujo

El diagrama se encuentra en `semana1/diagramas/02_cotizacion_recorrido.md` (Mermaid).

Símbolos identificados:
- **Inicio y Fin**: óvalos.
- **Entrada**: paralelogramos (lectura de nombreRecorrido, precioPorPersona, cantidadPersonas).
- **Proceso**: rectángulos (cálculo de valorTotal, valorAnticipo, saldoPendiente).
- **Salida**: paralelogramos (mostrar los cuatro valores).

## MiniReto 4 · Asistente de taquilla v0.1: la cuenta del grupo

### Archivo creado
`semana1/algoritmos/03_cuenta_grupo.js`

### Descomposición del problema

1. `valorAlquiler = cantidadBicicletas * horasAlquiler * PRECIO_HORA_URBANA`
2. `valorRecorrido = precioRecorridoPorPersona * cantidadPersonas`
3. `subtotal = valorAlquiler + valorRecorrido`
4. `aporteVoluntario = subtotal * 0.10`
5. `total = subtotal + aporteVoluntario`
6. `valorPorPersona = total / cantidadPersonas`
7. `valorPorPersonaRedondeado = Math.ceil(valorPorPersona / 100) * 100`

### Fórmula de redondeo hacia arriba a la centena

`Math.ceil(valorPorPersona / 100) * 100`

Dividimos entre 100, redondeamos hacia arriba con `Math.ceil` y multiplicamos por 100 para volver a la escala original. Ejemplo: `33334 / 100 = 333.34` → `334` → `33400`.

### Casos de prueba

| Caso | Bicis | Horas | Precio recorrido | Personas | Total | Por persona (redondeado) |
|---|---|---|---|---|---|---|
| 3 personas, 3 bicis × 2 h, Río y Parques | 3 | 2 | 45000 | 3 | $214.500 | $71.500 |
| 4 personas, 3 bicis × 3 h, Sabores de Barrio | 3 | 3 | 60000 | 4 | $363.000 | $90.800 |
| Caso propio: 2 personas, 2 bicis × 1 h, Reto Las Palmas | 2 | 1 | 85000 | 2 | $209.000 | $104.500 |

Los tres casos coinciden con el cálculo manual y con la ejecución del programa.

