function calculateBalance_user1() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Vista del dealer");
  var cashInRange = sheet.getRange("Q17");
  var a2Range = sheet.getRange("T17");
  var a4Range = sheet.getRange("S17");
  var a6Range = sheet.getRange("R17");

  // Rimuovi la formattazione come valuta dalle celle cash-in, A2 e A4
  cashInRange.setNumberFormat("General");
  a2Range.setNumberFormat("General");
  a4Range.setNumberFormat("General");
  a6Range.setNumberFormat("General");

  var cashInValue = cashInRange.getDisplayValue();
  var a2Value = a2Range.getDisplayValue();
  var a4Value = a4Range.getDisplayValue();
  var a6Value = a6Range.getDisplayValue();
  
  // Controllo se i valori di T17 e S17 sono validi
  if (isNaN(a2Value) || isNaN(a4Value)) {
    console.log("Errore: I valori di T17 o S17 non sono validi.");
    return;
  }

  // Controllo se il valore precedente di R17 è valido
  if (isNaN(a6Value) || a6Value === "") {
    console.log("Errore: Il valore precedente di R17 non è valido.");
    console.log("Imposto la cella R17 su 0");
    a6Range.setValue(0);
    a6Value = 0;
  }

  // Log dei valori delle celle
  console.log("cashInValue: " + cashInValue);
  console.log("a2Value: " + a2Value);
  console.log("a4Value: " + a4Value);
  console.log("a6Value: " + a6Value);

  var balance = parseInt(cashInValue) + (parseInt(a2Value) - parseInt(a4Value));
  var previousBalance = parseInt(a6Value);

  // Log del valore precedente di A6
  console.log("previousBalance: " + previousBalance);

  var isFirstExecution = (previousBalance === 0);

  if (isFirstExecution) {
    a6Range.setValue(parseInt(cashInValue) + parseInt(balance));
    cashInRange.setValue(0);
  } 
  else 
  {
    a6Range.setValue(previousBalance + parseInt(balance));
    cashInRange.setValue(0); // se mai ci dovessero essere errori
  }
}

function calculateBalance_user2() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Vista del dealer");
  var cashInRange = sheet.getRange("Q18");
  var a2Range = sheet.getRange("T18");
  var a4Range = sheet.getRange("S18");
  var a6Range = sheet.getRange("R18");

  // Rimuovi la formattazione come valuta dalle celle cash-in, A2 e A4
  cashInRange.setNumberFormat("General");
  a2Range.setNumberFormat("General");
  a4Range.setNumberFormat("General");
  a6Range.setNumberFormat("General");

  var cashInValue = cashInRange.getDisplayValue();
  var a2Value = a2Range.getDisplayValue();
  var a4Value = a4Range.getDisplayValue();
  var a6Value = a6Range.getDisplayValue();
  
  // Controllo se i valori di T18 e S18 sono validi
  if (isNaN(a2Value) || isNaN(a4Value)) {
    console.log("Errore: I valori di T18 o S18 non sono validi.");
    return;
  }

  // Controllo se il valore precedente di R18 è valido
  if (isNaN(a6Value) || a6Value === "") {
    console.log("Errore: Il valore precedente di R18 non è valido.");
    console.log("Imposto la cella R18 su 0");
    a6Range.setValue(0);
    a6Value = 0;
  }

  // Log dei valori delle celle
  console.log("cashInValue: " + cashInValue);
  console.log("a2Value: " + a2Value);
  console.log("a4Value: " + a4Value);
  console.log("a6Value: " + a6Value);

  var balance = parseInt(cashInValue) + (parseInt(a2Value) - parseInt(a4Value));
  var previousBalance = parseInt(a6Value);

  // Log del valore precedente di A6
  console.log("previousBalance: " + previousBalance);

  var isFirstExecution = (previousBalance === 0);

  if (isFirstExecution) {
    a6Range.setValue(parseInt(cashInValue) + parseInt(balance));
    cashInRange.setValue(0);
  } 
  else 
  {
    a6Range.setValue(previousBalance + parseInt(balance));
    cashInRange.setValue(0); // se mai ci dovessero essere errori
  }
}

function calculateAllBalance(){

  // Foglio
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Vista del dealer");

  // Celle che indicano la validità della giocata
  var valido_1 = sheet.getRange("U17");
  var valido_2 = sheet.getRange("U17");

  var validValue_1 = valido_1.getDisplayValue();
  var validValue_2 = valido_2.getDisplayValue();

  console.log(validValue_1);
  console.log(validValue_2);
 
  if (validValue_1 == "NON_VALIDO") {
    console.warn("Errore: La puntata del giocatore 1 supera il suo bilancio, la sua giocata verrà ignorata");

    var paoloSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Paolo");
    var formulaRanges = paoloSheet.getRangeList(["B5:M5", "I14:M14", "C22", "F22", "I22", "L22", "B31", "M31", "C37", "F37", "I37", "L37", "C41", "F41", "I41", "L41", "B18","B19","E18","E19","H18","H19","K18","K19","B28:M28","B35:C35","E35","F35","H35","I35","K35","L35","B39:C39","E39","F39","H39:I39","K39:L39","B46:M46"]);

    formulaRanges.clear({ contentsOnly: true, skipFilteredRows: true });
  }
  else
  {
    calculateBalance_user1();

    var paoloSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Paolo");
    var formulaRanges = paoloSheet.getRangeList(["B5:M5", "I14:M14", "C22", "F22", "I22", "L22", "B31", "M31", "C37", "F37", "I37", "L37", "C41", "F41", "I41", "L41"]);
    formulaRanges.clear({ contentsOnly: true, skipFilteredRows: true });
  }

  if (validValue_2 == "NON_VALIDO") {
    console.warn("Errore: La puntata del giocatore 2 supera il suo bilancio, la sua giocata verrà ignorata");
    var testSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Test");
    var formulaRanges = testSheet.getRangeList(["B5:M5", "I14:M14", "C22", "F22", "I22", "L22", "B31", "M31", "C37", "F37", "I37", "L37", "C41", "F41", "I41", "L41", "B18","B19","E18","E19","H18","H19","K18","K19","B28:M28","B35:C35","E35","F35","H35","I35","K35","L35","B39:C39","E39","F39","H39:I39","K39:L39","B46:M46"]);

    formulaRanges.clear({ contentsOnly: true, skipFilteredRows: true });
  }
  else
  {
    calculateBalance_user2();

    var testSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Test");
    var formulaRanges = testSheet.getRangeList(["B5:M5", "I14:M14", "C22", "F22", "I22", "L22", "B31", "M31", "C37", "F37", "I37", "L37", "C41", "F41", "I41", "L41"]);
    formulaRanges.clear({ contentsOnly: true, skipFilteredRows: true });
  }

}

function defaultValue(){

  // Foglio
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Vista del dealer");

  var aaa = sheet.getRange("Q2");
  var bbb = sheet.getRange("Q3");
  var ccc = sheet.getRange("R2");
  var ddd = sheet.getRange("R3");

  // Valori di default
  //Cash-in
  var defCash1 = aaa.getDisplayValue();
  var defCash2 = bbb.getDisplayValue();
  
  // Bilancio
  var defBil1 = ccc.getDisplayValue();
  var defBil2 = ddd.getDisplayValue();

  console.log("I valori di default sono:");
  console.log("Utente 1: " + defCash1);
  console.log("Utente 1: " + defBil1);

  console.log("I valori di default sono:");
  console.log("Utente 1: " + defCash2);
  console.log("Utente 2: " + defBil2);

  // Celle da sovrascrivere
  // Cash-in
  var currCash1 = sheet.getRange("Q17");
  var currCash2 = sheet.getRange("Q18");

  // Bilancio
  var currBil1 = sheet.getRange("R17");
  var currBil2 = sheet.getRange("R18");

  currCash1.setValue(defCash1);
  currCash2.setValue(defCash2);
  currBil1.setValue(defBil1);
  currBil2.setValue(defBil2);

  

  // Vista del dealer
  var formulaRanges = sheet.getRangeList(["A20:G31"]);
  formulaRanges.clear({ contentsOnly: true, skipFilteredRows: true });

  // Paolo
  var paoloSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Paolo");
  var formulaRanges = paoloSheet.getRangeList(["B5:M5", "I14:M14", "C22", "F22", "I22", "L22", "B31", "M31", "C37", "F37", "I37", "L37", "C41", "F41", "I41", "L41", "B18","B19","E18","E19","H18","H19","K18","K19","B28:M28","B35:C35","E35","F35","H35","I35","K35","L35","B39:C39","E39","F39","H39:I39","K39:L39","B46:M46"]);

  // Test
  var testSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Test");
  var formulaRanges = testSheet.getRangeList(["B5:M5", "I14:M14", "C22", "F22", "I22", "L22", "B31", "M31", "C37", "F37", "I37", "L37", "C41", "F41", "I41", "L41", "B18","B19","E18","E19","H18","H19","K18","K19","B28:M28","B35:C35","E35","F35","H35","I35","K35","L35","B39:C39","E39","F39","H39:I39","K39:L39","B46:M46"]);

  // Cancella le formule delle celle
  formulaRanges.clear({ contentsOnly: true, skipFilteredRows: true });

}
