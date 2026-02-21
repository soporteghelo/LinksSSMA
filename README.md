# Portal de Gestión Documental AESA - Manual de Implementación

Este documento detalla la estructura de datos, requisitos de imágenes y pasos para desplegar el portal en Google Apps Script.

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

## 2. Guía de Imágenes

Para asegurar una apariencia profesional, use las siguientes dimensiones. Ver `README_IMAGENES.md` para más detalles.

- **Banner Principal (Comunicados):** `1200 x 500 píxeles` (Formato panorámico).
- **Tarjetas (Documentos):** `600 x 300 píxeles` (Formato rectangular 2:1).
- **Formato:** JPG o PNG de preferencia, peso menor a 200KB.
- **Fallback:** Si deja el campo `LINK_FOTO` vacío, se mostrará una imagen genérica.

## 3. Pasos para Despliegue (Google Apps Script)

1.  Abra su proyecto en [script.google.com](https://script.google.com/).
2.  Cree o actualice los siguientes archivos HTML copiando el código entregado:
    *   **Index.html**: Estructura principal.
    *   **Styles.html**: Estilos CSS y diseño.
    *   **JavaScript.html**: Lógica del cliente.
    *   *(Opcional)* **Preview.html**: Solo para pruebas locales, no necesario en producción.
3.  Asegúrese de que su archivo `Code.gs` (Servidor) tenga la función `doGet` y `getActiveData` configuradas para leer la hoja `DB_DOCUMENTOS`.
4.  Implemente como aplicación web:
    *   Botón **Implementar** > **Nueva implementación**.
    *   Tipo: **Aplicación web**.
    *   Acceso: **Cualquier usuario** (si es público) o **Cualquier usuario de la organización**.
    *   Copie la URL generada.

## 4. Configuración de Categorías
El sistema agrupa automáticamente según el texto en la columna **`CATEGORIA`**. Las categorías predeterminadas con iconos son:
- `PETS` (Icono: Descripción)
- `Estándares` (Icono: Regla)
- `IPERC` (Icono: Alerta)
- `Capacitación` (Icono: Escuela)
- `Examen` (Icono: Quiz)
- `Comunicado` (Aparece en el Carrusel superior)
- Cualquier otra categoría se agrupará bajo el icono de "Carpeta".
