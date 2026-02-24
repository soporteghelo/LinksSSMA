# Portal de Gestión Documental AESA - Manual de Implementación y Buenas Prácticas

Este documento detalla la estructura de datos, requisitos de imágenes, pasos para desplegar el portal en Google Apps Script y las buenas prácticas de programación aplicadas para asegurar escalabilidad y rendimiento.

---

## 1. Estructura de Google Sheets (Base de Datos)

El sistema requiere una Hoja de Cálculo de Google con una pestaña llamada **`DB_DOCUMENTOS`**.

### Columnas Requeridas
La primera fila (encabezados) debe contener exactamente estos nombres:

| Columna | Nombre Campo | Descripción | Ejemplo |
|:---:|:---|:---|:---|
| A | **ID** | Identificador único (numérico o texto). | `101` |
| B | **TITULO** | Título principal del documento. | `Procedimiento de Trabajo en Altura` |
| C | **DESCRIPCION_CORTA** | Breve resumen para la tarjeta (Máx 2 líneas). | `Estándares para trabajos sobre 1.80m.` |
| D | **DESCRIPCION_LARGA** | Descripción detallada para la ventana emergente. | `Incluye lista de EPPs, permisos requeridos...` |
| E | **CATEGORIA** | Categoría para agrupación. **Debe ser exacta.** | `Comunicado`, `PETS`, `Estándares`, `IPERC`, `Capacitación` |
| F | **FECHA** | Fecha de publicación o actualización. | `15/02/2026` |
| G | **LINK_FOTO** | URL pública de la imagen de portada. | `https://ejemplo.com/foto.jpg` |
| H | **LINK_INFORMACION** | URL del documento PDF o recurso externo. | `https://drive.google.com/...` |
| I | **ORDEN** | Número para ordenar tarjetas (Menor a mayor). | `1`, `2`, `10` |
| J | **ESTADO** | Control de visibilidad. Solo muestra 'Activo'. | `Activo`, `Inactivo` |

> **Nota:** La columna "ESTADO" es fundamental. Si está vacía o dice algo distinto a "Activo", el documento no aparecerá en el portal.

---

## 2. Guía de Dimensiones de Imágenes

Para asegurar que el portal mantenga un diseño limpio y profesional, se recomienda seguir estas pautas de dimensionamiento para las imágenes.

### 2.1 Carrusel de Comunicados (Banner Principal)
Las imágenes en el carrusel ocupan todo el ancho de la sección superior y tienen una altura fija.
- **Ubicación:** Parte superior, sección "Comunicados".
- **Resolución Recomendada:** **1200px x 500px** (Mínimo).
- **Proporción Ideal:** **2.4 : 1** (Panorámica).
- **Consejo:** Evita colocar texto importante en los bordes extremos (superior/inferior), ya que podrían recortarse en pantallas muy anchas o móviles. Centraliza el punto focal. Una foto grupal o de maquinaria amplia funciona mejor que un retrato vertical.

### 2.2 Tarjetas de Documentos (Grid)
Las imágenes de las tarjetas tienen una altura fija más pequeña y funcionan como encabezado visual del documento.
- **Ubicación:** Grid de categorías (dashboard y detalles).
- **Resolución Recomendada:** **600px x 300px** (Mínimo).
- **Proporción Ideal:** **2 : 1** (Rectangular horizontal).
- **Consejo:** Imágenes abstractas, texturas corporativas o iconos grandes sobre fondo de color funcionan muy bien. Evita textos pequeños. Si la imagen es cuadrada, se recortará el centro.

### 2.3 Optimización
- **Formato:** JPG (para fotos) o PNG (para gráficos/iconos). WebP es ideal.
- **Peso:** Intenta mantener las imágenes por debajo de **200KB** para asegurar tiempos de carga rápidos.
- **Fallback:** El sistema usa una imagen genérica si el campo `LINK_FOTO` está vacío.

---

## 3. Pasos para Despliegue (Google Apps Script)

1.  Abra su proyecto en [script.google.com](https://script.google.com/).
2.  Cree o actualice los siguientes archivos HTML copiando el código entregado:
    *   **Index.html**: Estructura principal.
    *   **Styles.html**: Estilos CSS y diseño.
    *   **JavaScript.html**: Lógica del cliente.
3.  Asegúrese de que su archivo `Code.gs` tenga la función `doGet` y `getActiveData` configuradas para leer su hoja `DB_DOCUMENTOS`.
4.  Implemente como aplicación web:
    *   Botón **Implementar** > **Nueva implementación**.
    *   Tipo: **Aplicación web**.
    *   Acceso: **Cualquier usuario**.
    *   Copie la URL generada.

---

## 4. Configuración de Categorías
El sistema agrupa automáticamente según el texto en la columna **`CATEGORIA`**. Las categorías predeterminadas con iconos son:
- `PETS`, `Estándares`, `IPERC`, `Capacitación`, `Examen`
- `Comunicado` (Aparece en el Carrusel superior de forma automática)

---

## 5. Buenas Prácticas de Programación Aplicadas

El portal ha sido rediseñado y optimizado bajo modernos estándares de desarrollo web para entornos de bajos recursos (ej. celulares de mineros en campo):

*   **1. Caché de Servidor (Server-side Caching):** Implementado en `Code.gs` mediante `CacheService`. Los datos se procesan una vez y se guardan en memoria por 5 minutos. **Beneficio:** Evita bloqueos de cuota por parte de Google (Quotas limit exceded) permitiendo cientos de usuarios concurrentes y respondiendo en milisegundos en lugar de segundos.
*   **2. Debounce en Búsquedas en Tiempo Real:** Implementado en `JavaScript.html`. El buscador espera que el usuario termine de tipear (~300ms) antes de filtrar miles de filas. **Beneficio:** Previene "congelamientos" de pantalla por reconstrucciones excesivas del DOM por cada tecla presionada.
*   **3. Lazy Loading de Imágenes (Carga Diferida):** El navegador solo descarga las imágenes de las tarjetas a medida que el usuario hace scroll hacia abajo. **Beneficio:** Ahorra dramáticamente el consumo de datos móviles y evita que el navegador móvil (Chrome/Safari) crashee por errores de "Out of Memory" (OOM).
*   **4. Optimización de Animaciones (Graceful Degradation):** Los complejos efectos visuales vinculados al movimiento del cursor ("efecto linterna") se activan dinámicamente según el dispositivo y se han mitigado con CSS transform. **Beneficio:** Evita el consumo excesivo de batería y caídas de fotogramas (lag) en celulares de gama baja.
*   **5. Renderizado Progresivo / Paginación:** Al abrir una categoría con cientos de documentos, el sistema no inyecta todo el HTML de golpe. **Beneficio:** Mantiene fluida la interfaz de usuario.
*   **6. Prevención de XSS (Cross-Site Scripting):** La renderización de texto enriquecido y HTML desde la base de datos se maneja bajo estrictos `DOMParser` limitados. **Beneficio:** Evita que inyecciones de código malicioso en la hoja de cálculo se ejecuten en los dispositivos de los usuarios.
