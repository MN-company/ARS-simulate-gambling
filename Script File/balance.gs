function calculateBalance_user1() {

  // Selecting the sheet and loading table values for the player
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Vista del dealer");
  var a2Range = sheet.getRange("T17");
  var a4Range = sheet.getRange("S17");
  var a6Range = sheet.getRange("R17");

  // Removal of currency formatting from deposit, bet and win cells
  a2Range.setNumberFormat("General");
  a4Range.setNumberFormat("General");
  a6Range.setNumberFormat("General");

  // Gets the value without formatting the cell
  var a2Value = a2Range.getDisplayValue();
  var a4Value = a4Range.getDisplayValue();
  var a6Value = a6Range.getDisplayValue();
  
  // Checking if T17 and S17 values are valid
  if (isNaN(a2Value) || isNaN(a4Value)) {
    console.log("Error: The values of T17 or S17 are invalid.");
    console.log("Setting cells to 0, and the bet will be ignored");

    // If the values are not numbers, they will be set to zero and the budget will not be affected
    a2Range.setValue(0);
    a4Range.setValue(0);
    a2Value = 0;
    a4Value = 0;
  }

  // Check if the previous value of R17 is valid
  if (isNaN(a6Value) || a6Value === "") {
    console.log("Error: The previous value of R17 is invalid.");
    console.log("Setting cell R17 to 0");
    a6Range.setValue(0);
    a6Value = 0;
  }

  var balance =(parseInt(a2Value) - parseInt(a4Value));
  var previousBalance = parseInt(a6Value);

  a6Range.setValue(previousBalance + balance);
}

function calculateBalance_user2() {

  // Selecting the sheet and loading table values for the player
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Vista del dealer");
  var a2Range = sheet.getRange("T18");
  var a4Range = sheet.getRange("S18");
  var a6Range = sheet.getRange("R18");

  // Removal of currency formatting from deposit, bet and win cells
  a2Range.setNumberFormat("General");
  a4Range.setNumberFormat("General");
  a6Range.setNumberFormat("General");

  // Gets the value without formatting the cell
  var a2Value = a2Range.getDisplayValue();
  var a4Value = a4Range.getDisplayValue();
  var a6Value = a6Range.getDisplayValue();
  
  // Checking if T18 and S18 values are valid
  if (isNaN(a2Value) || isNaN(a4Value)) {
    console.log("Errore: I valori di T18 o S18 non sono validi.");
    a2Range.setValue(0);
    a4Range.setValue(0);
    a2Value = 0;
    a4Value = 0;
  }

  // Check if the previous value of R18 is valid
  if (isNaN(a6Value) || a6Value === "") {
    console.log("Errore: Il valore precedente di R18 non è valido.");
    console.log("Imposto la cella R18 su 0");
    a6Range.setValue(0);
    a6Value = 0;
  }

  var balance =(parseInt(a2Value) - parseInt(a4Value));
  var previousBalance = parseInt(a6Value);

  a6Range.setValue(previousBalance + balance);
}

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
    var index = Math.floor(Math.random() * 16);
    var winX = moltiplicatore[index];
    sheet.getRange('J26').setValue(winX);
  }

  // Imposta il valore della cella K24
  if (light_number3 > 36) {
    sheet.getRange('K24').setValue(null);
    sheet.getRange('K26').setValue(null);
  } else {
    sheet.getRange('K24').setValue(light_number3);
    var index = Math.floor(Math.random() * 16);
    var winX = moltiplicatore[index];
    sheet.getRange('K26').setValue(winX);
  }

  // Imposta il valore della cella L24
  if (light_number4 > 36) {
    sheet.getRange('L24').setValue(null);
    sheet.getRange('L26').setValue(null);
  } else {
    sheet.getRange('L24').setValue(light_number4);
    var index = Math.floor(Math.random() * 16);
    var winX = moltiplicatore[index];
    sheet.getRange('L26').setValue(winX);
  }

  // Imposta il valore della cella M24
  if (light_number5 > 36) {
    sheet.getRange('M24').setValue(null);
    sheet.getRange('M26').setValue(null);
  } else {
    sheet.getRange('M24').setValue(light_number5);
    var index = Math.floor(Math.random() * 16);
    var winX = moltiplicatore[index];
    sheet.getRange('M26').setValue(winX);
  }
}

function doublespin(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Vista del dealer");
  
  // Genera un numero casuale da 0 a 36
  var hybrid_number = Math.floor(Math.random() * 37); 
  sheet.getRange('L20').setValue(hybrid_number)
}

function calculateAllBalance(){

  var scriptProperties = PropertiesService.getScriptProperties();

  if (scriptProperties.getProperty('lightning') == 'yes') {
    lightning_mode();
  }

  if (scriptProperties.getProperty('doubleSpin') == 'yes') {
    doublespin();
  }
  
  // Load sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Vista del dealer");

  // Cells indicating the validity of the bet
  var valido_1 = sheet.getRange("U17");
  var valido_2 = sheet.getRange("U18");

  // Gets cell values
  var validValue_1 = valido_1.getDisplayValue();
  var validValue_2 = valido_2.getDisplayValue();

  var timer = scriptProperties.getProperty('timer');
  Utilities.sleep(timer) // Avvia lo spin dal menù prima di far routare la roulette

  if (validValue_1 == "NON_VALID") {
    console.warn("Error: Player 1's bet exceeds his budget, his bet will be ignored");

    // Deleting cell values where the player has bet and on which numbers he has bet
    var user1Sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("user1");
    var formulaRanges = user1Sheet.getRangeList(["B5:M5", "I14:M14", "C22", "F22", "I22", "L22", "B31", "M31", "C37", "F37", "I37", "L37", "C41", "F41", "I41", "L41", "B18","B19","E18","E19","H18","H19","K18","K19","B28:M28","B35:C35","E35","F35","H35","I35","K35","L35","B39:C39","E39","F39","H39:I39","K39:L39","B46:M46"]);

    formulaRanges.clear({ contentsOnly: true, skipFilteredRows: true });
  }
  else
  {
    calculateBalance_user1();

    // Deleting the player's win and bet cell values
    var user1Sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("user1");
    var formulaRanges = user1Sheet.getRangeList(["B5:M5", "I14:M14", "C22", "F22", "I22", "L22", "B31", "M31", "C37", "F37", "I37", "L37", "C41", "F41", "I41", "L41"]);
    formulaRanges.clear({ contentsOnly: true, skipFilteredRows: true });
  }

  if (validValue_2 == "NON_VALID") {
    console.warn("Errore: La puntata del giocatore 2 supera il suo bilancio, la sua giocata verrà ignorata");
    
    // Deleting cell values where the player has bet and on which numbers he has bet
    var user2Sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("user2");
    var formulaRanges = testSheet.getRangeList(["B5:M5", "I14:M14", "C22", "F22", "I22", "L22", "B31", "M31", "C37", "F37", "I37", "L37", "C41", "F41", "I41", "L41", "B18","B19","E18","E19","H18","H19","K18","K19","B28:M28","B35:C35","E35","F35","H35","I35","K35","L35","B39:C39","E39","F39","H39:I39","K39:L39","B46:M46"]);

    formulaRanges.clear({ contentsOnly: true, skipFilteredRows: true });
  }
  else
  {
    calculateBalance_user2();

    // Deleting the player's win and bet cell values
    var user2Sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("user2");
    var formulaRanges = user2Sheet.getRangeList(["B5:M5", "I14:M14", "C22", "F22", "I22", "L22", "B31", "M31", "C37", "F37", "I37", "L37", "C41", "F41", "I41", "L41"]);
    formulaRanges.clear({ contentsOnly: true, skipFilteredRows: true });
  }

}

