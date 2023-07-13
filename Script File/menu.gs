var documentProperties = PropertiesService.getDocumentProperties();
var dealerEmail = documentProperties.getProperty('dealerEmail');
var ui = SpreadsheetApp.getUi(); // Or DocumentApp or SlidesApp or FormApp.

function createMenu() {
  ui.createMenu('ARS')
    .addItem('Spin', 'sec_calculateBalance')
    .addItem('Reset value', 'sec_defaultValue')
    .addSubMenu(
      ui.createMenu('Mode')
        .addItem('Lightning roulette [Beta]', 'sec_lightning')
        .addItem('Double spin roulette (Hybrid) [Alfa]', 'sec_doublespin')
    )
    .addSeparator()
    .addSubMenu(
      ui.createMenu('Settings')
      .addItem('Timer', 'sec_timer')
      .addItem('Lightning bonus', 'sec_lightningbonus')
    )
  .addToUi();
}

function sec_calculateBalance() {
  user = Session.getActiveUser().getEmail();
  if (user == dealerEmail) {
    calculateAllBalance();
  } else {
    Browser.msgBox('You are not the dealer');
  }
}

function sec_defaultValue() {
  user = Session.getActiveUser().getEmail();
  if (user == dealerEmail) {
    defaultValue();
  } else {
    Browser.msgBox('You are not the dealer');
  }
}

function sec_lightning() {
  var user = Session.getActiveUser().getEmail();
  var prompt = 'Vuoi attivare la lightning?';
  var lightning = PropertiesService.getScriptProperties().getProperty('lightning');
  if (user == dealerEmail) {
    var response = ui.alert(prompt, ui.ButtonSet.YES_NO);

    if (response == ui.Button.YES) {
      lightning = 'yes';
      lightning_mode();
      PropertiesService.getScriptProperties().setProperty('lightning', lightning);
    } else {
      lightning = 'no';
      PropertiesService.getScriptProperties().setProperty('lightning', lightning);
    }
  } else {
    Browser.msgBox('You are not the dealer');
  }
}

function sec_doublespin() {
  user = Session.getActiveUser().getEmail();
  if (user == dealerEmail) {
    doublespin();
  } else {
    Browser.msgBox('You are not the dealer');
  }
}

