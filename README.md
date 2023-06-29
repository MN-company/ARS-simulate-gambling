![Brand Image](brand-image.png)

# Automated Roulette System (ARS) 🎰

ARS is a Google Sheets file that simulates a live casino and allows players to place bets on a physical roulette wheel. The file uses a set of formulas and a script to calculate bets, winnings and player balance.

## Installation

1. Go to the [ARS sheet link](https://docs.google.com/spreadsheets/d/14G8uvZQG2EfwmBMk9HPM--t2D0ymGmPYAxfy_NaDtZI/edit#gid=255657849) and make a copy of the file.
2. In the duplicate sheet, go to "Extensions" and select "Apps Script" from the drop down menu.
3. Select the 'defaultValue' function and follow the instructions to sign in to your Google account. The script will only work on your sheet and will not share data with anyone else.

## How to use

1. After running the 'defaultValue' function, all values will be set to those in the table.
2. Players can enter their bets and the dealer have to click on the "Execute" button to update the values.
3. To calculate the balances of all players, select "calculateAllBalances" from the drop-down menu and press the "Execute" button.

# Little explenation 

## Dealer sheet

### Roulette table
![Roulette table](roulette.png)

The Dealer will be looking at the Roulette numbers to see where the winning number is located. The cells corresponding to its characteristics will turn green and "TRUE" will be written if the number is valid.

### History and winning number
![History of extracted numbers](history.png) 

The dealer should enter the number that came out of the roulette wheel in the "Winning Number" column and enter it in the history of previous numbers.

### Information about players
![players info](tabs.png)

The Dealer will keep an eye on the default values in the upper table, which must be changed according to his needs. The table below shows values such as the bet, balance and winnings for each player. These should not be changed as they are handled by formulas and scripts that work independently.

## Player sheet

### Bet, return and balance
![Bet, return and balance](RBB.png)

These cells delegate the calculation of bet, win/loss and balance to formulas.

### Normal betting 
![outside bet](regularplayer.png)

In all grey cells the player must enter the amount of money to be allocated to this bet.

### Other type of betting
![Other bet](otherbet.png)

As before, the player must enter the amount of money to bet in the grey cells and the correct number to bet on in the blue cells. 

## Licence

ARS is released under the terms of the GNU licence.

## Project Status

ARS is currently in beta stage and can be used without any problems. Some values in the script can be changed to customise player names, but this also involves changing references. See FAQ.

## Future goals

- Create a button to simplify the execution of the script, without having to manually change the function to be executed and without opening the Apps script.
- Create a method that decide if you have to run calculateAllBalance or load defaultValue
- Develop overlays for OBS or Streamlabs to enhance the streaming experience.

# FAQ --> THIS SECTION IS MOVED INTO THE WIKI

