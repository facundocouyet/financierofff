/**
 * F3 / FFF Consulting — endpoint "Caja a la fecha"
 * Misma lógica que el endpoint de Cáscara: lee el saldo de caja
 * (último número de la columna "Saldo") de la planilla de gestión
 * F3 2026 y lo devuelve como JSON, con el mismo formato que
 * data/cash.json del sitio (financierofff).
 *
 * CÓMO PUBLICARLO:
 * 1. Abrí la planilla → Extensiones → Apps Script.
 * 2. Pegá este código, guardá (Ctrl/Cmd+S).
 * 3. Implementar → Nueva implementación → tipo "Aplicación web".
 *      - Ejecutar como:  Yo (tu cuenta)
 *      - Quién tiene acceso:  Cualquier persona
 * 4. Autorizá los permisos y copiá la URL que termina en /exec.
 *    Pasámela y conecto la actualización diaria del sitio.
 *
 * Para verificar: abrí la URL /exec en el navegador; tenés que ver
 * el JSON con "cash", "fecha" y, en "fuente", la solapa y columna que detectó.
 */

function doGet() {
  var SHEET_ID = '1H-D5D0Liw12v6Vu11hz9Pdu4uFPIbD0kylk6HR-kLMU';

  // ── Opcional: fijá estos valores si querés saltear la autodetección ──
  var TAB        = '';   // nombre EXACTO de la solapa (ej. 'Financiero'). Vacío = autodetecta.
  var COL_SALDO  = 0;    // nº de columna del saldo (A=1, B=2 … G=7). 0 = autodetecta por encabezado.
  var COL_FECHA  = 0;    // nº de columna de la fecha. 0 = autodetecta.
  var HEADER_ROW = 1;    // fila donde están los títulos de columna.

  var ss = SpreadsheetApp.openById(SHEET_ID);
  var sh = TAB ? ss.getSheetByName(TAB) : null;

  // Autodetección de solapa: la primera que tenga un encabezado "saldo"/"caja"/"balance".
  if (!sh) {
    var sheets = ss.getSheets();
    for (var s = 0; s < sheets.length && !sh; s++) {
      var lc = sheets[s].getLastColumn() || 1;
      var hdr = sheets[s].getRange(HEADER_ROW, 1, 1, lc).getValues()[0];
      for (var c = 0; c < hdr.length; c++) {
        if (/saldo|caja|balance/i.test(String(hdr[c]))) { sh = sheets[s]; break; }
      }
    }
    if (!sh) sh = ss.getSheets()[0];
  }

  var lastRow = sh.getLastRow();
  var lastCol = sh.getLastColumn();
  var header  = sh.getRange(HEADER_ROW, 1, 1, lastCol).getValues()[0];

  function findCol(re, fallback) {
    for (var c = 0; c < header.length; c++) if (re.test(String(header[c]))) return c + 1;
    return fallback;
  }
  var colSaldo = COL_SALDO || findCol(/saldo|caja|balance/i, lastCol);
  var colFecha = COL_FECHA || findCol(/fecha|date|d[ií]a/i, 1);

  var saldoCol = sh.getRange(1, colSaldo, lastRow, 1).getValues();
  var fechaCol = sh.getRange(1, colFecha, lastRow, 1).getValues();

  // Último número válido de la columna del saldo (de abajo hacia arriba).
  var saldo = null, rowIdx = -1;
  for (var i = saldoCol.length - 1; i >= 0; i--) {
    var v = saldoCol[i][0];
    if (v !== '' && v !== null && !isNaN(Number(v))) { saldo = Number(v); rowIdx = i; break; }
  }

  // Fecha del último movimiento; si está vacía, hoy.
  var tz = 'America/Argentina/Buenos_Aires', fecha;
  var fv = rowIdx >= 0 ? fechaCol[rowIdx][0] : '';
  fecha = (fv instanceof Date)
    ? Utilities.formatDate(fv, tz, 'yyyy-MM-dd')
    : Utilities.formatDate(new Date(), tz, 'yyyy-MM-dd');

  var out = {
    cash: saldo,
    moneda: 'US$',
    fecha: fecha,
    actualizado: new Date().toISOString(),
    fuente: 'Planilla F3 2026 — solapa "' + sh.getName() + '", columna ' + colSaldo + ' (saldo, última fila)'
  };

  return ContentService
    .createTextOutput(JSON.stringify(out))
    .setMimeType(ContentService.MimeType.JSON);
}
