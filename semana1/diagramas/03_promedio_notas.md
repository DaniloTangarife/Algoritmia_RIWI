### Diagrama de flujo — Promedio de notas

```mermaid
flowchart TD
    A([Inicio]) --> B[/Leer nota1/]
    B --> C[/Leer nota2/]
    C --> D[/Leer nota3/]
    D --> E[promedio = nota1 + nota2 + nota3 / 3]
    E --> F[/Mostrar promedio/]
    F --> G([Fin])