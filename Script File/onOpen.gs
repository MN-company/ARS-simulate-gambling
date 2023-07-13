function onOpen() {
  var scriptProperties = PropertiesService.getScriptProperties();
  lightning = scriptProperties.getProperty('lightning');
  if (lightning != 'no' || lightning != 'yes') {
    lightning = 'no';
    scriptProperties.setProperty('lightning', lightning);
  }
  createMenu();


}

function defaultValue(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Vista del dealer");
  var scriptProperties = PropertiesService.getScriptProperties();

  // Vista del dealer - Plyers value
  var formulaRanges = sheet.getRangeList(["Q17:Q25", "R17:R25"]);
  formulaRanges.clear({ contentsOnly: true, skipFilteredRows: true });


  // cash-in 
  var defCash1 = scriptProperties.getProperty('start_user1');
  var defCash2 = scriptProperties.getProperty('start_user2');
  var currCash1 = sheet.getRange("Q17");
  var currCash2 = sheet.getRange("Q18");
  var currBil1 = sheet.getRange("R17");
  var currBil2 = sheet.getRange("R18");
  currCash1.setValue(defCash1);
  currCash2.setValue(defCash2);
  currBil1.setValue(defCash1);
  currBil2.setValue(defCash2);

  // Clear values

  // Vista del dealer - History + Lightning + Winning number
  var formulaRanges = sheet.getRangeList(["A20:G31", "I24:M26", "I20:J21"]);
  formulaRanges.clear({ contentsOnly: true, skipFilteredRows: true });

  // user1
  var user1Sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("user1");
  var formulaRanges = user1Sheet.getRangeList(["B5:M5", "I14:M14", "C22", "F22", "I22", "L22", "B31", "M31", "C37", "F37", "I37", "L37", "C41", "F41", "I41", "L41", "B18","B19","E18","E19","H18","H19","K18","K19","B28:M28","B35:C35","E35","F35","H35","I35","K35","L35","B39:C39","E39","F39","H39:I39","K39:L39","B46:M46"]);

  // user2
  var user2Sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("user2");
  var formulaRanges = user2Sheet.getRangeList(["B5:M5", "I14:M14", "C22", "F22", "I22", "L22", "B31", "M31", "C37", "F37", "I37", "L37", "C41", "F41", "I41", "L41", "B18","B19","E18","E19","H18","H19","K18","K19","B28:M28","B35:C35","E35","F35","H35","I35","K35","L35","B39:C39","E39","F39","H39:I39","K39:L39","B46:M46"]);

  formulaRanges.clear({ contentsOnly: true, skipFilteredRows: true });

}
