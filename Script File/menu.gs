const dealerEmail = 'example@gmail.com';
var ui = SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.

function createMenu() {
      ui.createMenu('ARS')
        .addItem('Calculate balance', 'sec_calculateBalance')
        .addItem('Reset value', 'sec_defaultValue')
      .addSubMenu(ui.createMenu('Mode')
        .addItem('Lightning roulette [Beta]', 'sec_lightning')
        .addItem('Double spin roulette (Hybrid) [Alfa]', 'sec_doublespin'))
      .addToUi();
}


function sec_calculateBalance(){
  user = Session.getActiveUser().getEmail()
  if (user == dealerEmail){
    calculateAllBalance();
  }
  else{
    Browser.msgBox('You are not the dealer');
  }
}

function sec_defaultValue(){
  user = Session.getActiveUser().getEmail()
  if (user == dealerEmail){
    defaultValue();
  }
  else{
    Browser.msgBox('You are not the dealer');
  }
}

function sec_lightning(){
  user = Session.getActiveUser().getEmail()
  if (user == dealerEmail){
    lightning();
  }
  else{
    Browser.msgBox('You are not the dealer');
  }
}

function sec_doublespin(){
  user = Session.getActiveUser().getEmail()
  if (user == dealerEmail){
    doublespin();
  }
  else{
    Browser.msgBox('You are not the dealer');
  }
}
