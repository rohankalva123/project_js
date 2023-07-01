
# Slot Machine Madness:
Welcome to the world of Slot Machine Madness, where luck and hilarity collide! Get ready to embark on a wild ride filled with spinning reels, 
crazy symbols, and unexpected winnings. Brace yourself for an adventure as you test your luck and try to strike it rich!

# Prerequisites:
Make sure you have a sense of humour and Node.js installed on your machine before diving into this madness.

# How to Play:
Start the madness by running the game. Head over to your terminal, navigate to the directory 
where the JavaScript file is located, and buckle up for the rollercoaster ride by entering the following command:

node filename.js

Replace the filename with the actual name of the JavaScript file.

The game will kick off by demanding your hard-earned cash. Enter a deposit amount that will make your piggy bank quiver in excitement.
Next up, you'll be faced with the pivotal decision of choosing the number of lines to bet on. Will you go with one, two, or three? 
Remember, more lines mean more chances to win, but also more chances to have your mind blown by the absurdity of the game. 
Prepare to place your bets, my friend! Enter the amount you want to bet per line, but make sure it's within the limits of your balance. 
The higher the bet, the higher the stakes. It's like walking a tightrope but with spinning reels!

Hold onto your hats as the game calculates your winnings. If Lady Luck is on your side and decides to join in on the madness, you might just walk away with a pocketful of imaginary riches. 
Don't forget to thank her with a bow and a round of applause!

Your balance will be updated to reflect your winnings or losses. The numbers may rise and fall, but remember, it's all in the name of crazy entertainment! 
The game will notify you of your new balance and give you a moment to catch your breath before the next round.

But wait! There's more madness to be had. You have the power to decide whether the madness should continue. 
Will you dive back in for another round of exhilarating spins and hilarious surprises? Or will you bid adieu to the madness and retreat to the safety of the real world? The choice is yours...

If your balance plummets to zero, the game will sympathetically inform you that your journey has come to an end. 
But fret not, for the madness never truly ends! You can always start anew and relieve the craziness whenever you desire.

# Game Logic
Here's a breakdown of the code and the logic used in the game:

The game starts by prompting the player to enter a deposit amount. The input is validated to ensure it is a valid positive number.

The player is then asked to enter the number of lines to bet on. The input is validated to ensure it is a number between 1 and 3.

The player is asked to enter the bet amount per line. The input is validated to ensure it is a valid bet amount within the available balance.

The game spins the reels by randomly selecting symbols for each row. The symbols are stored in a 2D array representing the reels.

The symbols on each row are transposed to create an array representing the rows.

The rows are printed to the console, displaying the symbols on each row.

The game calculates the player's winnings based on the symbols on each row and the bet amount. If any row has all symbols the same, the player wins and the winnings are added to the balance.

The player's balance is updated, and the current balance is displayed along with the winnings.

If the balance reaches zero, the game informs the player that they have run out of money and exits.
The player is given the option to play again. If they choose to continue, the game starts from the beginning with the updated balance. If they choose to exit, the game ends.

Please note that this is a simplified implementation of a slot machine game for demonstration purposes. 
The game can be expanded and enhanced with additional features and visuals as per your requirements.

## Enjoy playing the slot machine game!
