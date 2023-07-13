function lightning_mode() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Vista del dealer");
  var moltiplicatore = [50, 50, 50, 50, 100, 100, 100, 100, 150, 150, 150, 200, 200, 300, 400, 500];
  
  // Genera un numero casuale da 0 a 60
  var light_number1 = Math.floor(Math.random() * 37); // Il primo ci deve essere sempre
  var light_number2 = Math.floor(Math.random() * 61);
  var light_number3 = Math.floor(Math.random() * 61);
  var light_number4 = Math.floor(Math.random() * 61);
  var light_number5 = Math.floor(Math.random() * 61);
  
  sheet.getRange('I24').setValue(light_number1);
  var index = Math.floor(Math.random() * 16);
  var winX = moltiplicatore[index];
  sheet.getRange('I26').setValue(winX)

  // Imposta il valore della cella J24
  if (light_number2 > 36) {
    sheet.getRange('J24').setValue(null);
    sheet.getRange('J26').setValue(null);
  } else {
    sheet.getRange('J24').setValue(light_number2);
    var index = Math.floor(Math.random() * 8);
    var winX = moltiplicatore[index];
    sheet.getRange('J26').setValue(winX);
  }

  // Imposta il valore della cella K24
  if (light_number3 > 36) {
    sheet.getRange('K24').setValue(null);
    sheet.getRange('K26').setValue(null);
  } else {
    sheet.getRange('K24').setValue(light_number3);
    var index = Math.floor(Math.random() * 8);
    var winX = moltiplicatore[index];
    sheet.getRange('K26').setValue(winX);
  }

  // Imposta il valore della cella L24
  if (light_number4 > 36) {
    sheet.getRange('L24').setValue(null);
    sheet.getRange('L26').setValue(null);
  } else {
    sheet.getRange('L24').setValue(light_number4);
    var index = Math.floor(Math.random() * 8);
    var winX = moltiplicatore[index];
    sheet.getRange('L26').setValue(winX);
  }

  // Imposta il valore della cella M24
  if (light_number5 > 36) {
    sheet.getRange('M24').setValue(null);
    sheet.getRange('M26').setValue(null);
  } else {
    sheet.getRange('M24').setValue(light_number5);
    var index = Math.floor(Math.random() * 8);
    var winX = moltiplicatore[index];
    sheet.getRange('M26').setValue(winX);
  }
}
