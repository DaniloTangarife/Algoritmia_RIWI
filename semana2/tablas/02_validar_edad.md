## Tabla de Verdad — ValidarEdad
**Regla:** La edad es válida si está entre 0 y 120.
**Condición de inválida:** `edad < 0 O edad > 120` (Ley de De Morgan: NO(A Y B) = NO A O NO B).

| Edad < 0 (NO A) | Edad > 120 (NO B) | NO A OR NO B | Resultado |
| :---: | :---: | :---: | :--- |
| V | V | V | Edad inválida |
| V | F | V | Edad inválida |
| F | V | V | Edad inválida |
| F | F | F | Edad válida |