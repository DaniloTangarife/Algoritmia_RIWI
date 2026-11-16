### Diagrama de flujo — EdadEnDias

```mermaid
flowchart TD
    A([Inicio]) --> B[/Leer edadAnios/]
    B --> C[diasVividos = edadAnios * 365]
    C --> D[/Mostrar diasVividos/]
    D --> E([Fin])