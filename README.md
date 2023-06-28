# Automated Roulette System (ARS) 🎰

ARS is a Google Sheets file that simulates a live casino and allows players to place bets on a physical roulette wheel. The file uses a set of formulas and a script to calculate bets, winnings and player balance.

## Installation

1. Go to the [ARS sheet link](insert-link-here) and make a copy of the file.
2. In the duplicate sheet, go to "Extensions" and select "Apps Script" from the drop down menu.
3. Select the 'defaultValue' function and follow the instructions to sign in to your Google account. The script will only work on your sheet and will not share data with anyone else.

## How to use

1. After running the 'defaultValue' function, all values will be set to those in the table (see the 'Table defaults' section in the help).
2. Players can enter their bets and press the "Execute" button to update the values.
3. To calculate the balances of all players, select "calculateAllBalances" from the drop-down menu and press the "Execute" button.

# Little explenation 

## Dealer sheet

### Roulette table
![Roulette table](roulette.png)
Il dealer avrà sott'occhio rurri i numeri della roulette e dove si trova il numero vincente. Se il numero è valido le celle corrisapondenti alle sue caratteristiche si coloreranno di verde e verrà scritto "VERO".

### History and winning number
![History of extracted numbers](history.png)
Il dealer dovrà inserire sotto "Numero vincente" il numero uscito dalla roulette e inserire quest'ultimo nella cronologia dei numeri precedenti.

### Information about players
![players info](!tabs.png)
Il dealer avrà sott'occhio nella tabella superiore i valori di default che devono essere cambiati in base alle proprie esigenze. Nella tabella sotto invece ci sono i valori come la scommessa, il bilancio, e la vincità per ogni giocata. Quest'ultimi non vanno cambiati in quanto sono gestiti da formule e script che lavorano autonomamente.

## Player sheet

### Bet, return and balance
!

## Licence

ARS is released under the terms of the GNU licence.

## Project Status

ARS is currently in beta stage and can be used without any problems. Some values in the script can be changed to customise player names, but this also involves changing references. See the video section.

## Future goals

- Create a button to simplify the execution of the script, without having to manually change the function to be executed and without opening the Apps script.
- Create a method that decide if you have to run calculateAllBalance or load defaultValue
- Develop overlays for OBS or Streamlabs to enhance the streaming experience.
