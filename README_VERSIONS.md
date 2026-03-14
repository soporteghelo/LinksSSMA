# Historial de Versiones (Changelog)

Este documento contiene un resumen de las versiones del proyecto registradas en GitHub (commits y estado de sincronización).

## Estado Actual (Local)
* **Rama actual:** `main`
* **Sincronización:** Al día (Up to date) con `origin/main`.
* **Cambios sin confirmar:** Ninguno (Recién commiteados).

---

## Versiones (Commits)

### 🔹 Versión 4.6 (Local)
* **Commit:** `(pendiente)`
* **Fecha:** 2026-03-14
* **Autor:** soporteghelo
* **Estado:** **Local (Pendiente de Push)**
* **Descripción:**
  > v4.6: Mejoras UX — PAC sincronizado, navegación en comunicados, toasts y layout modal.
  > - **PAC (JavaScript.html):** Se sincronizó completamente el renderizado de la tabla PAC con Preview.html: columnas con anchos fijos (46/18/18/18%), botones `inline-flex`, CSS responsivo con `@media`, "Sin enlace" en gris cursiva.
  > - **PAC Video Inline:** Al hacer clic en "Ver" de la columna Video, el MP4 se reproduce directamente dentro del modal. Si el link no es un video, abre en nueva pestaña.
  > - **Comunicados:** Al abrir un comunicado desde el carrusel, las flechas de navegación ← → ahora funcionan para moverse entre comunicados sin cerrar el modal.
  > - **Modal Layout:** El botón "CLICK AQUI" se reubicó a la posición superior izquierda (donde estaba la fecha); la fecha se desplazó a la derecha en la misma fila. Aplicado en `Index.html` y `Preview.html`.
  > - **Toast Notifications:** Se reemplazaron todos los `alert()` del flujo de Feedback por toasts visuales con animación slide-up, colores por tipo (verde/amarillo/rojo/azul) e íconos Material. Auto-dismiss a los 3.5s.

### 🔹 Versión 4.5 (Local)
* **Commit:** `(pendiente)`
* **Fecha:** 2026-03-14
* **Autor:** soporteghelo
* **Estado:** **Local (Pendiente de Push)**
* **Descripción:**
  > v4.5: Corrección crítica de tarjetas y estilos en JavaScript.html.
  > - **Bug Fix (Cards):** Se corrigieron etiquetas HTML malformadas (`< div class= >`, `</div >`) en la función `createCard` de `JavaScript.html` que causaban que las tarjetas renderizaran HTML como texto plano en producción.
  > - **Bug Fix (Búsqueda):** Se corrigieron las mismas etiquetas rotas en los estados de "búsqueda vacía" y "sin resultados".
  > - **Bug Fix (Descripción PAC):** Se reparó el bloque de estilos CSS incrustado para la vista PAC: etiqueta `<style>` rota y propiedades CSS con espacios inválidos (`border - radius`, `font- family`).
  > - **Bug Fix (Modal HTML):** Se corrigió el renderizado de descripciones HTML genéricas (`< style >`, `</style >`).

### 🔹 Versión 4.4 (Local)
* **Commit:** `(pendiente)`
* **Fecha:** 2026-03-14
* **Autor:** soporteghelo
* **Estado:** **Local (Pendiente de Push)**
* **Descripción:**
  > v4.4: Implementación de Botón Flotante y Buzón de Mejoras (Feedback).
  > - **Backend (GAS):** Adición de la función `saveFeedback` en `Code.gs` para registrar comentarios automáticamente en una nueva pestaña "FEEDBACK" del Google Sheet. Se centralizó el ID del Spreadsheet en una variable global (`SPREADSHEET_ID`) para facilitar la portabilidad del código.
  > - **Frontend (UI):** Incorporación de un botón flotante circular en la esquina inferior derecha con colores institucionales y un modal animado ("Buzón de Mejoras") para recolectar ideas de los usuarios.
  > - **UX:** Validación de longitud mínima de caracteres, estados de carga ("Enviando...") con animaciones de spinner y alertas de confirmación.
  > - **Compatibilidad:** Implementado en `Index.html` (producción) y `Preview.html` (con simulación local para pruebas de interfaz).

### 🔹 Versión 4.3 (Local)
* **Commit:** `(pendiente)`
* **Fecha:** 2026-03-14
* **Autor:** soporteghelo
* **Estado:** **Local (Pendiente de Push)**
* **Descripción:**
  > v4.3: Incorporación de Navegación Interactiva dentro del Modal.
  > - **Frontend (JS & UI):** Se agregaron botones flotantes ("Anterior" y "Siguiente") dentro del modal de `Index.html` y `Preview.html` respetando los colores de la marca institucional (`#2b3a62`).
  > - **Lógica (JS):** Las funciones `openModal` y la nueva `navigateModal` exponen el estado global del índice del slide activo (`currentModalIndex`) y de los items actualmente listados (`currentCategoryItems`), permitiendo avanzar y retroceder fluidamente entre documentos de la misma categoría.
  > - **UX:** La navegación no requiere cerrar el modal. El DOM se inactiva y reinicia según necesidad visual (Pausa de videos embebidos/iframes entre saltos). Las flechas de los bordes se desactivan al inicio o final de las listas.

### 🔹 Versión 4.2 (Local)
* **Commit:** `(pendiente)`
* **Fecha:** 2026-03-10
* **Autor:** soporteghelo
* **Estado:** **Local (Pendiente de Push)**
* **Descripción:**
  > v4.2: Implementación de Visor de Documentos Incrustado en el Modal.
  > - **Frontend (JS & UI):** Se agregaron contenedores (`iframe` y `video`) en el modal de detalles para `Index.html` y `Preview.html`.
  > - **Lógica (JS):** Se actualizó la función `openModal` para detectar enlaces de PDF, YouTube y MP4, mostrándolos directamente en el modal en lugar de abrir una pestaña nueva. Otros enlaces mantienen el botón externo.
  > - **UX:** Se oculta la imagen de portada cuando hay un medio incrustado para maximizar el espacio, al cerrar el modal se detiene la reproducción del iframe y video.
  > - **Pruebas:** Se añadió data simulada en `Preview.html` con un PDF local, video MP4 y YouTube funcional.

### 🔹 Versión 4.1 (Pushed)
* **Commit:** `a83204a`
* **Fecha:** 2026-02-24
* **Autor:** soporteghelo
* **Estado:** **Subido a GitHub (Pushed)**
* **Descripción:**
  > v4.1: Corrección de bug en el botón de emergencia. Se eliminó el ID duplicado en el modal para mostrar la imagen correctamente.

### 🔹 Versión 4.0 (Pushed)
* **Commit:** `(pendiente)`
* **Fecha:** 2026-02-24
* **Autor:** soporteghelo
* **Estado:** **Subido a GitHub (Pushed)**
* **Descripción:**
  > v4.0: Optimizaciones de UI móvil, zoom instantáneo y mejoras de tarjetas de categoría.
  > - **Header Responsivo:** Reducción de tamaño del logo y texto en pantallas pequeñas. El botón EMERGENCIA muestra sólo el ícono en móvil muy angosto (`sm:inline`).
  > - **Zoom Instantáneo:** Removida la clase `transition-transform duration-300` del `#zoomModalImage` en `Index.html` y `Preview.html` para hacer el pinch-to-zoom inmediato.
  > - **Auto-scaling de Títulos:** Implementada lógica JS (`setTimeout`) que reduce el `font-size` del título de cada tarjeta de categoría hasta que cabe en una línea, evitando desbordamientos.
  > - **Etiqueta renombrada:** "Elementos" reemplazado por "Items" en el conteo de los bloques de categoría (`JavaScript.html`, `Preview.html`).

---

### 🔹 Versión 3.0 (Pushed)
* **Commit:** `dbf98af`
* **Fecha:** 2026-02-24
* **Autor:** soporteghelo
* **Estado:** **Subido a GitHub (Pushed)** - Esta es la versión que actualmente se encuentra en el repositorio remoto (`origin/main`).
* **Descripción:** 
  > v3.0: Añadida funcionalidad de Zoom de Imágenes (Pinch-to-zoom).
  > - **Frontend (JS & UI):** Integración de modal de zoom en `Index.html` y `Preview.html`. El botón de lupa (`zoom_in`) ahora es permanentemente visible en color institucional sobre las resoluciones de fotos.
  > - **Interactividad:** Adición de eventos `wheel`, `touchstart`, `touchmove`, `mousedown`, etc., en `JavaScript.html` y el sub-script de `Preview.html` para permitir pellizcar, acercar, alejar (exponencialmente hasta 4x) y arrastrar la vista renderizada sobre la pantalla.

---

### 🔹 Versión 2.0 (Pushed)
* **Commit:** `e50cfe6`
* **Fecha:** 2026-02-23
* **Autor:** soporteghelo
* **Estado:** **Subido a GitHub (Pushed)** - Esta es la versión que actualmente se encuentra en el repositorio remoto (`origin/main`).
* **Descripción:** 
  > v2.0: Gran actualización de rendimiento y UX.
  > - **Backend:** Añadido `CacheService` en `Code.gs` (5 mins de TTL) para evitar quota limits.
  > - **Frontend (JS & UI):** Búsqueda optimizada con *Debounce* (350ms); imágenes con *Lazy Loading*; renderizado progresivo (paginación de tarjetas) en categorías; efecto de hover linterna desactivado para móviles. Sanitización XSS básica.
  > - **Documentación:** Fusión de `README_IMAGENES.md` dentro de `README.md` junto con nuevas 'Buenas Prácticas'.
  > - **Preview:** Script local para generar 200 items de prueba en `Preview.html` probando carga masiva.

---

### 🔹 Versión Anterior
* **Commit:** `91180ab`
* **Fecha:** 2026-02-21
* **Autor:** soporteghelo
* **Estado:** **Subido a GitHub (Pushed)** - Rama `origin/main`.
* **Descripción:** 
  > Mejora modal, header HTML/PAC y ajustes de UI. Version Estable.

*(Nota: Este archivo se irá actualizando conforme se agreguen nuevos commits y se envíen al repositorio remoto).
