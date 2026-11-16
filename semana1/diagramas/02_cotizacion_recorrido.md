### Diagrama de flujo — 02_cotizacion_recorrido

```mermaid
flowchart TD
    A([Inicio]) --> B[/Leer nombreRecorrido/]
    B --> C[/Leer precioPorPersona/]
    C --> D[/Leer cantidadPersonas/]
    D --> E[valorTotal = precioPorPersona * cantidadPersonas]
    E --> F[valorAnticipo = redondear valorTotal * 0.30]
    F --> G[saldoPendiente = valorTotal - valorAnticipo]
    G --> H[/Mostrar nombreRecorrido/]
    H --> I[/Mostrar valorTotal/]
    I --> J[/Mostrar valorAnticipo/]
    J --> K[/Mostrar saldoPendiente/]
    K --> L([Fin])