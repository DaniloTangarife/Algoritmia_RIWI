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

  ## Pruebas de Decisión y de Escritorio

**02_validar_edad.js**
- **Prueba de Decisión (Válida):** Entrada: `edad = 0` → Salida: `Edad válida`.
- **Prueba de Decisión (Válida):** Entrada: `edad = 120` → Salida: `Edad válida`.
- **Prueba de Decisión (Inválida por menor):** Entrada: `edad = -1` → Salida: `Edad inválida`.
- **Prueba de Decisión (Inválida por mayor):** Entrada: `edad = 121` → Salida: `Edad inválida`.

- **Prueba de Escritorio (Caso -1):**
  1. `edad = -1`.
  2. Evalúa `-1 < 0` (Verdadero) || `-1 > 120` (Falso).
  3. Verdadero || Falso = Verdadero.
  4. Entra al `if` → Muestra "Edad inválida".

- **Prueba de Escritorio (Caso 0):**
  1. `edad = 0`.
  2. Evalúa `0 < 0` (Falso) || `0 > 120` (Falso).
  3. Falso || Falso = Falso.
  4. Entra al `else` → Muestra "Edad válida".