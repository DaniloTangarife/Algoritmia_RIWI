## Pruebas de Decisión y de Escritorio

**01_validar_registro.js**
- **Prueba de Decisión (Camino Verdadero):** Entrada: `edad = 14`, `respuesta = S` → Salida: `Registro exitoso`.
- **Prueba de Decisión (Camino Falso por edad):** Entrada: `edad = 13`, `respuesta = S` → Salida: `No puedes registrarte`.
- **Prueba de Decisión (Camino Falso por términos):** Entrada: `edad = 30`, `respuesta = N` → Salida: `No puedes registrarte`.
- **Prueba de Decisión (Camino Falso por ambas):** Entrada: `edad = 14`, `respuesta = s` (minúscula) → Salida: `Registro exitoso` *(Nota: el código convierte a mayúscula con `.toUpperCase()`, por lo que la lógica funciona correctamente)*.
- **Prueba de Escritorio (Caso 13 S):** 
  1. `edad = 13`, `respuesta = "S"`.
  2. Evalúa `13 >= 14` (Falso).
  3. Falso && Verdadero = Falso.
  4. Entra al `else` → Muestra "No puedes registrarte".