### Diagrama de flujo — Calculadora de propinas

```mermaid
flowchart TD
    A([Inicio]) --> B[/Leer cuenta/]
    B --> C[/Leer porcentajePropina/]
    C --> D[/Leer cantidadPersonas/]
    D --> E[propina = cuenta * porcentajePropina / 100]
    E --> F[total = cuenta + propina]
    F --> G[cadaUnoPaga = total / cantidadPersonas]
    G --> H[/Mostrar propina/]
    H --> I[/Mostrar total/]
    I --> J[/Mostrar cadaUnoPaga/]
    J --> K([Fin])