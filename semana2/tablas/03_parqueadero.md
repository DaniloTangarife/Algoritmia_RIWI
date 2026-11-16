## Tabla de Decisión — El Parqueadero

| REGLA | TIPO | MINUTOS | FACTURA | RESULTADO |
| :--- | :--- | :--- | :--- | :--- |
| R1 | Cualquiera | Menos de 0 | Cualquiera | Error: minutos negativos |
| R2 | Ni 1 ni 2 | 0 o más | Cualquiera | Error: tipo no válido |
| R3 | Carro o moto | De 0 a 15 | Cualquiera | Gratis |
| R4 | Carro o moto | Más de 15 | No | Horas × tarifa, máximo $30.000 |
| R5 | Carro o moto | Más de 15 | Sí | Lo mismo que R4, dividido entre 2 |