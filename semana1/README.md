# Semana 1 · Introducción a la algoritmia y pensamiento computacional

## Proyecto: Rueda Libre — Asistente de taquilla v0.1

Esta carpeta contiene los algoritmos secuenciales en JavaScript que conforman la primera versión del asistente de taquilla de Rueda Libre, junto con la bitácora de pruebas, los diagramas de flujo y los retos prácticos del video de la sesión.

## Contenido

### Algoritmos del Proyecto (Rueda Libre)
- `bitacora.md`: descripción del proceso de alquiler, tablas entrada–proceso–salida, pruebas de escritorio y casos de prueba.
- `algoritmos/01_cotizacion_basica.js`: cotiza el alquiler de una bicicleta urbana por horas.
- `algoritmos/02_cotizacion_recorrido.js`: cotiza un recorrido guiado con anticipo del 30 % y saldo pendiente.
- `algoritmos/03_cuenta_grupo.js`: calcula la cuenta completa de un grupo (alquiler + recorrido + aporte voluntario) y el valor por persona redondeado a la centena.
- `diagramas/02_cotizacion_recorrido.md`: diagrama de flujo del algoritmo de recorridos (Mermaid).

### Retos del Video
- `video/01_edad_en_dias.js`: calcula los días vividos a partir de la edad en años.
- `video/02_calculadora_propinas.js`: calcula la propina, el total y la división de la cuenta entre varias personas.
- `video/03_promedio_notas.js`: calcula el promedio de tres notas.
- `video/diagramas/`: diagramas de flujo en Mermaid para cada reto del video.

## Cómo ejecutar los algoritmos

1. Tener instalado [Node.js](https://nodejs.org/).
2. Abrir una terminal en la raíz del repositorio.
3. Ejecutar cualquiera de los archivos con el comando `node`. Por ejemplo:

# Algoritmos del proyecto
```bash
node semana1/algoritmos/01_cotizacion_basica.js
node semana1/algoritmos/02_cotizacion_recorrido.js
node semana1/algoritmos/03_cuenta_grupo.js

# Retos del video
node semana1/video/01_edad_en_dias.js
node semana1/video/02_calculadora_propinas.js
node semana1/video/03_promedio_notas.js
```

## Pruebas de Ejecución

### Algoritmos del Proyecto

**01_cotizacion_basica.js**
- **Ejemplo 1:** Entrada: `nombreCliente = Ana`, `horasAlquiler = 3` → Salida: `Hola, Ana: tu alquiler de 3 horas cuesta $30000`.
- **Ejemplo 2:** Entrada: `nombreCliente = Carlos`, `horasAlquiler = 8` → Salida: `Hola, Carlos: tu alquiler de 8 horas cuesta $80000`.

**02_cotizacion_recorrido.js**
- **Ejemplo 1:** Entrada: `nombreRecorrido = Sabores de Barrio`, `precioPorPersona = 60000`, `cantidadPersonas = 4` → Salida: `Valor total: $240000`, `Anticipo: $72000`, `Saldo: $168000`.
- **Ejemplo 2:** Entrada: `nombreRecorrido = Río y Parques`, `precioPorPersona = 45000`, `cantidadPersonas = 3` → Salida: `Valor total: $135000`, `Anticipo: $40500`, `Saldo: $94500`.

**03_cuenta_grupo.js**
- **Ejemplo 1:** Entrada: `cantidadBicicletas = 3`, `horasAlquiler = 2`, `precioRecorrido = 45000`, `cantidadPersonas = 3` → Salida: `Total: $214500`, `Por persona: $71500`.
- **Ejemplo 2:** Entrada: `cantidadBicicletas = 3`, `horasAlquiler = 3`, `precioRecorrido = 60000`, `cantidadPersonas = 4` → Salida: `Total: $363000`, `Por persona: $90800`.

### Retos del Video

**01_edad_en_dias.js**
- **Ejemplo 1:** Entrada: `edadAnios = 20` → Salida: `Has vivido aproximadamente 7300 días`.
- **Ejemplo 2:** Entrada: `edadAnios = 35` → Salida: `Has vivido aproximadamente 12775 días`.

**02_calculadora_propinas.js**
- **Ejemplo 1:** Entrada: `cuenta = 120000`, `porcentajePropina = 10`, `cantidadPersonas = 4` → Salida: `Propina: $12000`, `Total a pagar: $132000`, `Cada uno paga: $33000`.
- **Ejemplo 2:** Entrada: `cuenta = 80000`, `porcentajePropina = 15`, `cantidadPersonas = 2` → Salida: `Propina: $12000`, `Total a pagar: $92000`, `Cada uno paga: $46000`.

**03_promedio_notas.js**
- **Ejemplo 1:** Entrada: `nota1 = 4.5`, `nota2 = 3.8`, `nota3 = 2.9` → Salida: `El promedio de las 3 notas es: 3.73`.
- **Ejemplo 2:** Entrada: `nota1 = 5.0`, `nota2 = 4.0`, `nota3 = 3.5` → Salida: `El promedio de las 3 notas es: 4.17`.

### Historial de versiones

- **v0.1:** tres algoritmos secuenciales del asistente de taquilla y tres retos del video, todos con sus respectivos diagramas de flujo y bitácora.