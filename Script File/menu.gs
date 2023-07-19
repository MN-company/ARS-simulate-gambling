var scriptProperties = PropertiesService.getScriptProperties();
var ui = SpreadsheetApp.getUi(); 

function createMenu() {
  ui.createMenu('ARS')
    .addItem('Spin', 'sec_calculateBalance')
    .addItem('Reset value', 'sec_defaultValue')
    .addSubMenu(
      ui.createMenu('Mode')
        .addItem('Lightning roulette', 'sec_lightning')
        .addItem('Double spin roulette (Hybrid)', 'sec_doublespin')
    )
    .addSeparator()
    .addSubMenu(
      ui.createMenu('Settings')
        .addItem('Timer', 'sec_timer')
        .addItem('Change dealer', 'change_dealer')
        .addSeparator()
        .addItem("Change User1's deposit", "change_deposit1")
        .addItem("Change User2's deposit", "change_deposit2")
    )
    .addSeparator()
    .addSubMenu(
      ui.createMenu('Debug')
        .addItem('Dealer Mail', 'show_dealer')
        .addItem('Timer', 'show_timer')
        .addSeparator()
        .addItem("User1's deposit", "show_user1")
        .addItem("User2's deposit", "show_user2")
    )
  .addToUi();

}

// Debug

function show_dealer(){
  // alert = 
  ui.alert(scriptProperties.getProperty('dealerEmail'))
}

function show_timer(){
  ui.alert(scriptProperties.getProperty('timer'))
}

function show_user1(){
  ui.alert(scriptProperties.getProperty('start_user1'))
}

function show_user2(){
  ui.alert(scriptProperties.getProperty('start_user2'))
}

// Settings
function sec_timer() {
  var user = Session.getActiveUser().getEmail();
  
  if (user === scriptProperties.getProperty('dealerEmail')) {
    var response = ui.prompt('Set the timer value:');
    
    if (response.getSelectedButton() === ui.Button.OK) {
      var timerValue = response.getResponseText();
      scriptProperties.setProperty("timer", timerValue);
    } else{
      scriptProperties.setProperty("timer", timerValue);
    }
  } else {
    Browser.msgBox('You are not the dealer');
  }
}

function change_dealer(){
  var user = Session.getActiveUser().getEmail();
  
  if (user === scriptProperties.getProperty('dealerEmail')) {
    var response = ui.prompt("Inserisci l'email del dealer");
    var dealerEmailInput = response.getResponseText();
    scriptProperties.setProperty("dealerEmail", dealerEmailInput);
  } else {
    Browser.msgBox('You are not the dealer');
  }

  
}

function change_deposit1(){
  var user = Session.getActiveUser().getEmail();
  
  if (user === scriptProperties.getProperty('dealerEmail')) {
    var response = ui.prompt("Inserisci il deposito dell'utente");
    var deposit = response.getResponseText();
    scriptProperties.setProperty("start_user1", deposit);
  } else {
    Browser.msgBox('You are not the dealer');
  }
}

function change_deposit2(){
  var user = Session.getActiveUser().getEmail();
  
  if (user === scriptProperties.getProperty('dealerEmail')) {
    var response = ui.prompt("Inserisci il deposito dell'utente");
    var deposit = response.getResponseText();
    scriptProperties.setProperty("start_user2", deposit);
  } else {
    Browser.msgBox('You are not the dealer');
  }
}

// External functions

function sec_calculateBalance() {
  user = Session.getActiveUser().getEmail();
  if (user == scriptProperties.getProperty('dealerEmail')) {
    calculateAllBalance();
  } else {
    Browser.msgBox('You are not the dealer');
  }
}

function sec_defaultValue() {
  user = Session.getActiveUser().getEmail();
  if (user == scriptProperties.getProperty('dealerEmail')) {
    defaultValue();
  } else {
    Browser.msgBox('You are not the dealer');
  }
}

function sec_lightning() {
  var user = Session.getActiveUser().getEmail();
  var prompt = 'Do you want to use the lightning mode?';
  var lightning = PropertiesService.getScriptProperties().getProperty('lightning');
  if (user == scriptProperties.getProperty('dealerEmail')) {
    var response = ui.alert(prompt, ui.ButtonSet.YES_NO);

    if (response == ui.Button.YES) {
      lightning = 'yes';
      lightning_mode();
      PropertiesService.getScriptProperties().setProperty('lightning', lightning);
    } else {
      lightning = 'no';
      PropertiesService.getScriptProperties().setProperty('lightning', lightning);
      var formulaRanges = sheet.getRangeList(["I24:M26"]);
      formulaRanges.clear({ contentsOnly: true, skipFilteredRows: true });
    }
  } else {
    Browser.msgBox('You are not the dealer');
  }
}

function sec_doublespin() {
  var user = Session.getActiveUser().getEmail();
  var prompt = 'Do you want to use the double spin mode?';
  var doppioSpin = PropertiesService.getScriptProperties().getProperty('doubleSpin');
  if (user == scriptProperties.getProperty('dealerEmail')) {
    var response = ui.alert(prompt, ui.ButtonSet.YES_NO);

    if (response == ui.Button.YES) {
      doppioSpin = 'yes';
      doublespin();
      scriptProperties.setProperty('doubleSpin', doppioSpin);
    } else {
      doppioSpin = 'no';
      scriptProperties.setProperty('doubleSpin', doppioSpin);
      var formulaRanges = sheet.getRangeList(["L20"]);
      formulaRanges.clear({ contentsOnly: true, skipFilteredRows: true });
    }
  } else {
    Browser.msgBox('You are not the dealer');
  }
}

