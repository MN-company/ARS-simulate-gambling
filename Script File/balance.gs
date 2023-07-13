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

function calculateAllBalance(){

  var scriptProperties = PropertiesService.getScriptProperties();
  var lightning = scriptProperties.getProperty('lightning');
  ui.alert(lightning);
  if (lightning == 'yes') {
    lightning_mode();
  }
  
  // Load sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Vista del dealer");

  // Cells indicating the validity of the bet
  var valido_1 = sheet.getRange("U17");
  var valido_2 = sheet.getRange("U18");

  // Gets cell values
  var validValue_1 = valido_1.getDisplayValue();
  var validValue_2 = valido_2.getDisplayValue();

  // Print cell values
  console.log(validValue_1);
  console.log(validValue_2);

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

