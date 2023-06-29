function calculateBalance_user1() {

  // Selecting the sheet and loading table values for the player
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Vista del dealer");
  var cashInRange = sheet.getRange("Q17");
  var a2Range = sheet.getRange("T17");
  var a4Range = sheet.getRange("S17");
  var a6Range = sheet.getRange("R17");

  // Removal of currency formatting from deposit, bet and win cells
  cashInRange.setNumberFormat("General");
  a2Range.setNumberFormat("General");
  a4Range.setNumberFormat("General");
  a6Range.setNumberFormat("General");

  // Gets the value without formatting the cell
  var cashInValue = cashInRange.getDisplayValue();
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

  // Logging of cell values
  console.log("cashInValue: " + cashInValue);
  console.log("a2Value: " + a2Value);
  console.log("a4Value: " + a4Value);
  console.log("a6Value: " + a6Value);

  var balance = parseInt(cashInValue) + (parseInt(a2Value) - parseInt(a4Value));
  var previousBalance = parseInt(a6Value);

  // Log of the previous value of balance
  console.log("previousBalance: " + previousBalance);

  var isFirstExecution = (previousBalance === 0);

  if (isFirstExecution) {
    a6Range.setValue(parseInt(cashInValue) + parseInt(balance));
    cashInRange.setValue(0);
  } 
  else 
  {
    a6Range.setValue(previousBalance + parseInt(balance));
    cashInRange.setValue(0); 
  }
}

function calculateBalance_user2() {

  // Selecting the sheet and loading table values for the player
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Vista del dealer");
  var cashInRange = sheet.getRange("Q18");
  var a2Range = sheet.getRange("T18");
  var a4Range = sheet.getRange("S18");
  var a6Range = sheet.getRange("R18");

  // Removal of currency formatting from deposit, bet and win cells
  cashInRange.setNumberFormat("General");
  a2Range.setNumberFormat("General");
  a4Range.setNumberFormat("General");
  a6Range.setNumberFormat("General");

  // Gets the value without formatting the cell
  var cashInValue = cashInRange.getDisplayValue();
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

  // Logging of cell values
  console.log("cashInValue: " + cashInValue);
  console.log("a2Value: " + a2Value);
  console.log("a4Value: " + a4Value);
  console.log("a6Value: " + a6Value);

  var balance = parseInt(cashInValue) + (parseInt(a2Value) - parseInt(a4Value));
  var previousBalance = parseInt(a6Value);

  // Log of the previous value of balance
  console.log("previousBalance: " + previousBalance);

  var isFirstExecution = (previousBalance === 0);

  if (isFirstExecution) {
    a6Range.setValue(parseInt(cashInValue) + parseInt(balance));
    cashInRange.setValue(0);
  } 
  else 
  {
    a6Range.setValue(previousBalance + parseInt(balance));
    cashInRange.setValue(0); 
  }
}

function calculateAllBalance(){

  // Load sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Vista del dealer");

  // Cells indicating the validity of the bet
  var valido_1 = sheet.getRange("U17");
  var valido_2 = sheet.getRange("U17");

  // Gets cell values
  var validValue_1 = valido_1.getDisplayValue();
  var validValue_2 = valido_2.getDisplayValue();

  // Print cell values
  console.log(validValue_1);
  console.log(validValue_2);
 
  if (validValue_1 == "NON_VALID") {
    console.warn("Error: Player 1's bet exceeds his budget, his bet will be ignored");

    // Deleting cell values where the player has bet and on which numbers he has bet
    var paoloSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("user1");
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

function defaultValue(){

  // Load sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Vista del dealer");

  var aaa = sheet.getRange("Q2");
  var bbb = sheet.getRange("Q3");
  var ccc = sheet.getRange("R2");
  var ddd = sheet.getRange("R3");

  // Default values

  // Deposit
  var defCash1 = aaa.getDisplayValue();
  var defCash2 = bbb.getDisplayValue();
  
  // Balance
  var defBil1 = ccc.getDisplayValue();
  var defBil2 = ddd.getDisplayValue();

  console.log("The default values are:");
  console.log("User 1: " + defCash1);
  console.log("User 1: " + defBil1);

  console.log("The default values are:");
  console.log("User 2: " + defCash2);
  console.log("User 2: " + defBil2);

  // Cells to be overwritten
  // Deposit 
  var currCash1 = sheet.getRange("Q17");
  var currCash2 = sheet.getRange("Q18");

  // Balance
  var currBil1 = sheet.getRange("R17");
  var currBil2 = sheet.getRange("R18");

  currCash1.setValue(defCash1);
  currCash2.setValue(defCash2);
  currBil1.setValue(defBil1);
  currBil2.setValue(defBil2);
  

  // Vista del dealer - History
  var formulaRanges = sheet.getRangeList(["A20:G31"]);
  formulaRanges.clear({ contentsOnly: true, skipFilteredRows: true });

  // user1
  var paoloSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("user1");
  var formulaRanges = paoloSheet.getRangeList(["B5:M5", "I14:M14", "C22", "F22", "I22", "L22", "B31", "M31", "C37", "F37", "I37", "L37", "C41", "F41", "I41", "L41", "B18","B19","E18","E19","H18","H19","K18","K19","B28:M28","B35:C35","E35","F35","H35","I35","K35","L35","B39:C39","E39","F39","H39:I39","K39:L39","B46:M46"]);

  // user2
  var testSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("user2");
  var formulaRanges = testSheet.getRangeList(["B5:M5", "I14:M14", "C22", "F22", "I22", "L22", "B31", "M31", "C37", "F37", "I37", "L37", "C41", "F41", "I41", "L41", "B18","B19","E18","E19","H18","H19","K18","K19","B28:M28","B35:C35","E35","F35","H35","I35","K35","L35","B39:C39","E39","F39","H39:I39","K39:L39","B46:M46"]);

  formulaRanges.clear({ contentsOnly: true, skipFilteredRows: true });

}
