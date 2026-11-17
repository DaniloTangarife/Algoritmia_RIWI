# Algoritmia 1 · Riwi 🚀

Este repositorio contiene la resolución de los retos, miniretos y ejercicios prácticos de **Algoritmia 1** de Riwi, todos desarrollados en **JavaScript** y ejecutados mediante **Node.js**.

El objetivo del curso es construir el **Asistente de taquilla para Rueda Libre** (un emprendimiento de alquiler de bicicletas), aplicando progresivamente los conceptos de pensamiento computacional, lógica booleana, estructuras de decisión y ciclos, además de resolver ejercicios complementarios de los videos de cada sesión.

👤 **Autor:** Danilo Tangarife Bustamante
🔗 **Repositorio:** [github.com/DaniloTangarife/Algoritmia_RIWI](https://github.com/DaniloTangarife/Algoritmia_RIWI)

## 🧭 Navegación rápida

| Semana | Carpeta | Documentación |
| --- | --- | --- |
| 🟢 Semana 1 | [`semana1/`](./semana1/) | [`semana1/README.md`](./semana1/README.md) |
| 🟡 Semana 2 | [`semana2/`](./semana2/) | [`semana2/README.md`](./semana2/README.md) |
| 🔴 Semana 3 | [`semana3/`](./semana3/) | [`semana3/README.md`](./semana3/README.md) |

## 📂 Estructura del Repositorio

El repositorio está organizado por semanas:

```text
Algoritmia_Riwi/
├── semana1/
│   ├── algoritmos/      # Miniretos del proyecto Rueda Libre (secuenciales)
│   ├── diagramas/       # Diagramas de flujo (Mermaid)
│   ├── video/           # Retos prácticos del video
│   ├── bitacora.md      # Pruebas y análisis de la semana 1
│   └── README.md        # Documentación específica de la semana 1
├── semana2/
│   ├── tablas/          # Tablas de verdad (Markdown)
│   ├── video/           # Retos prácticos del video (decisiones y lógica)
│   └── README.md        # Pruebas de decisión y escritorio de la semana 2
├── semana3/
│   ├── video/           # Retos prácticos, trazas y árbol de componentes
│   └── README.md        # Documentación de ciclos y subprocesos de la semana 3
└── README.md            # Este archivo (Documentación global)
```

### 🔗 Enlaces a carpetas y archivos

**Semana 1**
- [`algoritmos/`](./semana1/algoritmos/): Miniretos del proyecto Rueda Libre (secuenciales)
- [`diagramas/`](./semana1/diagramas/): Diagramas de flujo (Mermaid)
- [`video/`](./semana1/video/): Retos prácticos del video
- [`bitacora.md`](./semana1/bitacora.md): Pruebas y análisis de la semana 1
- [`README.md`](./semana1/README.md): Documentación específica de la semana 1

**Semana 2**
- [`tablas/`](./semana2/tablas/): Tablas de verdad (Markdown)
- [`video/`](./semana2/video/): Retos prácticos del video (decisiones y lógica)
- [`README.md`](./semana2/README.md): Pruebas de decisión y escritorio de la semana 2

**Semana 3**
- [`video/`](./semana3/video/): Retos prácticos, trazas y árbol de componentes
- [`README.md`](./semana3/README.md): Documentación de ciclos y subprocesos de la semana 3

## 📚 Lógica y Temáticas por Semana

Cada carpeta contiene su propio `README.md` con el detalle de los archivos y pruebas. A continuación, un resumen de la lógica trabajada:

### 🟢 Semana 1: Algoritmia y Pensamiento Computacional

📁 [Ver carpeta](./semana1/) · 📄 [Ver README](./semana1/README.md)

- **Enfoque:** Algoritmos secuenciales (Entrada → Proceso → Salida).
- **Proyecto:** Cotización básica de alquiler, cotización de recorridos con anticipo y cuenta de un grupo con redondeo a la centena. ([`algoritmos/`](./semana1/algoritmos/))
- **Retos del video:** Cálculo de edad en días, calculadora de propinas y promedio de notas. ([`video/`](./semana1/video/))
- **Conceptos clave:** Descomposición, abstracción, variables, constantes y operaciones matemáticas.

### 🟡 Semana 2: Lógica y Estructuras de Decisión

📁 [Ver carpeta](./semana2/) · 📄 [Ver README](./semana2/README.md)

- **Enfoque:** Proposiciones lógicas, tablas de verdad ([`tablas/`](./semana2/tablas/)) y decisiones múltiples (`if` / `else if` / `else`).
- **Retos del video:** Validación de registro (operadores lógicos `&&`), validación de edad (Ley de De Morgan), simulación de parqueadero (decisiones múltiples y casos borde), semáforo de inventario y cálculo de año bisiesto. ([`video/`](./semana2/video/))
- **Conceptos clave:** Evaluación de condiciones, anidación de decisiones, operadores de comparación y conexión con casos límite.

### 🔴 Semana 3: Repetición y Descomposición

📁 [Ver carpeta](./semana3/) · 📄 [Ver README](./semana3/README.md)

- **Enfoque:** Ciclos (`while`, `for`), acumuladores, contadores, banderas y subprocesos (funciones).
- **Retos del video:** Cajero con centinela (ciclo `while`), notas de 5 estudiantes (contadores y banderas), pirámide de asteriscos (ciclos anidados), factura de restaurante (descomposición en subprocesos) y análisis de árbol de componentes de una página real. ([`video/`](./semana3/video/))
- **Conceptos clave:** Bucles controlados por centinela, iteraciones anidadas, modularización del código y abstracción visual.

## 🛠️ ¿Cómo ejecutar los archivos?

1. Asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu computadora.
2. Clona el repositorio y abre una terminal en la raíz:

   ```bash
   git clone https://github.com/DaniloTangarife/Algoritmia_RIWI.git
   cd Algoritmia_RIWI
   ```

3. Ejecuta el archivo que desees usando el comando `node`.

Ejemplos de ejecución:

```bash
# Ejecutar un minireto del proyecto (Semana 1)
node semana1/algoritmos/01_cotizacion_basica.js

# Ejecutar un reto de video de lógica (Semana 2)
node semana2/video/03_parqueadero.js

# Ejecutar un reto de video de ciclos (Semana 3)
node semana3/video/03_piramide.js
```

Archivos de los ejemplos: [`01_cotizacion_basica.js`](./semana1/algoritmos/01_cotizacion_basica.js) · [`03_parqueadero.js`](./semana2/video/03_parqueadero.js) · [`03_piramide.js`](./semana3/video/03_piramide.js)

> **Nota:** Todos los programas utilizan la librería nativa `readline` de Node.js, por lo que te pedirán los datos directamente en la consola. Sigue las instrucciones en pantalla para ingresar los valores.

## 📝 Historial de Versiones

- **v1.0 (Final):** Repositorio completo con los retos de las 3 semanas, documentación global, READMEs específicos, trazas, diagramas y pruebas de escritorio.

---

Hecho por **Danilo Tangarife Bustamante** · [Repositorio en GitHub](https://github.com/DaniloTangarife/Algoritmia_RIWI)