function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('AESA - Portal de Gestión Documental')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function getActiveData() {
  try {
    const sheetId = '1-Yi2nfl7wI_OORzTpdrMCMdjXvrYVPQ_aVaVdMTaGlM';
    const sheetName = 'DB_DOCUMENTOS';
    
    Logger.log(`[DEBUG] Intentando abrir Spreadsheet ID: ${sheetId}`);
    const ss = SpreadsheetApp.openById(sheetId);
    
    Logger.log(`[DEBUG] Intentando abrir Hoja: ${sheetName}`);
    const sheet = ss.getSheetByName(sheetName);
    
    if (!sheet) {
      Logger.log(`[ERROR] Hoja "${sheetName}" NO encontrada. Hojas disponibles: ${ss.getSheets().map(s => s.getName()).join(', ')}`);
      throw new Error(`Hoja "${sheetName}" no encontrada.`);
    }
    
    // Get all data
    const range = sheet.getDataRange();
    const values = range.getValues();
    
    Logger.log(`[DEBUG] Filas totales recuperadas: ${values.length}`);
    
    if (values.length < 2) {
      Logger.log('[WARN] La hoja tiene menos de 2 filas (Solo encabezados o vacía).');
      return [];
    }
    
    // Log Headers to verify column order
    const headers = values[0];
    Logger.log(`[DEBUG] Encabezados detectados: ${JSON.stringify(headers)}`);
    Logger.log(`[DEBUG] Verificando columnas críticas: Columna J (Index 9) debería ser ESTADO. Valor actual encabezado: "${headers[9]}"`);

    // Remove headers
    values.shift();

    // Filter and Map
    const filteredData = values.filter((row, index) => {
      // Index 9 is Column J (ESTADO)
      const rawState = row[9]; 
      const estado = String(rawState || "").trim().toLowerCase();
      
      const isActive = estado === 'activo';
      
      // Log first 3 rows to check what is being read
      if (index < 3) {
        Logger.log(`[DEBUG] Fila ${index + 2}: ID=${row[0]}, ESTADO_RAW="${rawState}", ESTADO_CLEAN="${estado}", ES_ACTIVO=${isActive}`);
      }
      
      return isActive;
    });

    Logger.log(`[DEBUG] Filas después de filtrar 'Activo': ${filteredData.length}`);

    const mappedData = filteredData.map(row => {
      return {
        ID: row[0],
        TITULO: row[1],
        DESCRIPCION_CORTA: row[2],
        DESCRIPCION_LARGA: row[3],
        CATEGORIA: row[4],
        FECHA: (row[5] instanceof Date) ? row[5].toISOString() : String(row[5]),
        LINK_FOTO: row[6],
        LINK_INFORMACION: row[7],
        ORDEN: row[8],
        ESTADO: row[9]
      };
    });

    if (mappedData.length > 0) {
      Logger.log(`[DEBUG] Primer elemento mapeado: ${JSON.stringify(mappedData[0])}`);
    } else {
      Logger.log('[WARN] No se encontraron datos activos para retornar.');
    }
    
    return mappedData;
      
  } catch (e) {
    Logger.log(`[ERROR] Error CRÍTICO en getActiveData: ${e.toString()} \nStack: ${e.stack}`);
    throw e;
  }
}