# Historial de Versiones (Changelog)

Este documento contiene un resumen de las versiones del proyecto registradas en GitHub (commits y estado de sincronización).

## Estado Actual (Local)
* **Rama actual:** `main`
* **Sincronización:** Al día (Up to date) con `origin/main`.
* **Cambios sin confirmar:** Ninguno (Recién commiteados).

---

## Versiones (Commits)

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

*(Nota: Este archivo se irá actualizando conforme se agreguen nuevos commits y se envíen al repositorio remoto).*
