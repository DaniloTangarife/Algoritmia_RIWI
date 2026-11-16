# Semana 1 · Introducción a la algoritmia y pensamiento computacional

## Proyecto: Rueda Libre — Asistente de taquilla v0.1

Esta carpeta contiene los tres algoritmos secuenciales en JavaScript que conforman la primera versión del asistente de taquilla de Rueda Libre, junto con la bitácora de pruebas y el diagrama de flujo.

## Contenido

- `bitacora.md`: descripción del proceso de alquiler, tablas entrada–proceso–salida, pruebas de escritorio y casos de prueba.
- `algoritmos/01_cotizacion_basica.js`: cotiza el alquiler de una bicicleta urbana por horas.
- `algoritmos/02_cotizacion_recorrido.js`: cotiza un recorrido guiado con anticipo del 30 % y saldo pendiente.
- `algoritmos/03_cuenta_grupo.js`: calcula la cuenta completa de un grupo (alquiler + recorrido + aporte voluntario) y el valor por persona redondeado a la centena.
- `diagramas/02_cotizacion_recorrido.md`: diagrama de flujo del algoritmo de recorridos (Mermaid).

## Cómo abrir y ejecutar los algoritmos

1. Tener instalado [Node.js](https://nodejs.org/).
2. Abrir una terminal en la raíz del repositorio.
3. Ejecutar cualquiera de los algoritmos con:

```bash
node semana1/algoritmos/01_cotizacion_basica.js
node semana1/algoritmos/02_cotizacion_recorrido.js
node semana1/algoritmos/03_cuenta_grupo.js