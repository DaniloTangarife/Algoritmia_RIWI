## Reto de Video 5 · Árbol de Componentes (Página Real: Eneba)

**Página analizada:** [Eneba Latam](https://www.eneba.com/latam)
**Concepto aplicado:** Descomposición, Abstracción y Patrones (ciclos).

### ¿Qué cajas se repiten (Ciclo)?
En la página principal de Eneba, los elementos que se repiten constantemente son las **Tarjetas de Videojuego**. Se generan mediante un ciclo (`for` o `map`) a partir de una lista de productos. 
- *Propiedad:* El diseño de cada tarjeta es idéntico (imagen, título, precio y botón de compra), solo cambian los datos.

### Árbol de Componentes (Mermaid)

```mermaid
flowchart TD
    Pagina[Página Principal Eneba]
    
    %% Nivel 1: Estructura principal
    Pagina --> Nav[Barra de Navegación]
    Pagina --> Hero[Banner Principal / Carrusel]
    Pagina --> Filtros[Menú de Filtros Laterales]
    Pagina --> Categorias[Secciones de Juegos]
    Pagina --> Footer[Pie de Página]

    %% Nivel 2: Desglose de Navegación
    Nav --> Logo[Logo]
    Nav --> Buscador[Barra de Búsqueda]
    Nav --> Carrito[Icono de Carrito]

    %% Nivel 2: Desglose de Secciones (Aquí está el ciclo)
    Categorias --> TituloSeccion[Título de la Sección]
    Categorias --> Grid[Cuadrícula de Juegos]
    
    %% El Ciclo
    Grid --> Tarjeta1[Tarjeta de Juego]
    Grid -.-> TarjetaN[...Tarjeta de Juego N veces]

    %% Nivel 3: Anatomía de la Tarjeta repetida
    Tarjeta1 --> Imagen[Imagen del Juego]
    Tarjeta1 --> Info[Nombre y Plataforma]
    Tarjeta1 --> Precio[Precio y Descuento]
    Tarjeta1 --> Boton[Botón Comprar]
    
    %% Nivel 2: Footer
    Footer --> Enlaces[Enlaces de Ayuda]
    Footer --> Redes[Redes Sociales]