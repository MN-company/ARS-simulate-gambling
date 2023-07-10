function onOpen() {
  createMenu()
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
