# Guía de Dimensiones de Imágenes - Portal AESA

Para asegurar que el portal mantenga un diseño limpio y profesional, se recomienda seguir estas pautas de dimensionamiento para las imágenes.

## 1. Carrusel de Comunicados (Banner Principal)

Las imágenes en el carrusel ocupan todo el ancho de la sección superior y tienen una altura fija.

- **Ubicación:** Parte superior, sección "Comunicados".
- **Comportamiento:** La imagen cubre el ancho total (`object-cover`), recortándose verticalmente si es necesario para mantener la proporción.
- **Resolución Recomendada:** **1200px x 500px** (Mínimo).
- **Proporción Ideal:** **2.4 : 1** (Panorámica).
- **Consejo:** Evita colocar texto importante en los bordes extremos (superior/inferior), ya que podrían recortarse en pantallas muy anchas o móviles. Centraliza el punto focal.

> **Ejemplo:** Una foto grupal o de maquinaria amplia funciona mejor que un retrato vertical.

## 2. Tarjetas de Documentos (Grid)

Las imágenes de las tarjetas tienen una altura fija más pequeña y funcionan como encabezado visual del documento.

- **Ubicación:** Grid de categorías (dashboard y detalles).
- **Dimensiones CSS:** Altura fija de `h-28` (aprox. 112px) y ancho flexible según la columna.
- **Resolución Recomendada:** **600px x 300px** (Mínimo).
- **Proporción Ideal:** **2 : 1** (Rectangular horizontal).
- **Consejo:** Imágenes abstractas, texturas corporativas o iconos grandes sobre fondo de color funcionan muy bien. Evita textos pequeños. Si la imagen es cuadrada, se recortará el centro.

## 3. Optimización General

- **Formato:** JPG (para fotos) o PNG (para gráficos/iconos). WebP es ideal si es soportado por el origen.
- **Peso:** Intenta mantener las imágenes por debajo de **200KB** para asegurar tiempos de carga rápidos, especialmente en redes móviles.
- **Fallback:** El sistema usa una imagen genérica industrial si no se proporciona un link, pero se recomienda personalizarla para mejorar la identificación visual.
