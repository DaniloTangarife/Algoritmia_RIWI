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