// 1. Deposit some money initially
// 2. Determine the number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine(******)
// 5. check if the user won
// 6. Give the user their winnings
// 7. Play again if the user wishes


const prompt = require("prompt-sync")(); 

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = { /*objects in js*/
  A: 2,     /*has properties and values*/
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOL_VALUES = {
  A: 5, /*this means if i get a line of A's I'm gonna multiply that bet by 5*/
  B: 4,
  C: 3,
  D: 2,
};

const deposit = () => {
 while(true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const floatconversion = parseFloat(depositAmount);

    /*To check if its a valid input*/
    if(isNaN(floatconversion) || floatconversion<=0){
        console.log("Invalid deposit amount, try again");
    }else{
        return floatconversion;
    }
 }
};

/*second part*/
/*just changed the function names the logic is same*/

const getNumberOfLines = () => {
    while (true) {
      const lines = prompt("Enter the number of lines to bet on (1-3): ");
      const floatconversion1 = parseFloat(lines);
  
      if (isNaN(floatconversion1) || floatconversion1 <= 0 || floatconversion1 > 3) {
        console.log("Invalid number of lines, try again.");
      } else {
        return floatconversion1;
      }
    }
  };

  /*Third part*/
  const getBet = (balance, lines) => {
    while (true) {
      const bet = prompt("Enter the bet per line: ");
      const numberBet = parseFloat(bet);
  
      if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
        console.log("Low Funds!! Please check your deposit amount");
      } else {
        return numberBet;
      }
    }
  };

  /*Fourth part*/
  const spin = () => {
    const symbols = []; /*empty arrray*/
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
      for (let i = 0; i < count; i++) {
        symbols.push(symbol);  /*adding elements inside an array like appending*/
      }
    }
    
 
    const reels = [];
    for (let i = 0; i < COLS; i++) {
      reels.push([]);
      const reelSymbols = [...symbols];
      for (let j = 0; j < ROWS; j++) {
        const randomIndex = Math.floor(Math.random() * reelSymbols.length);
        const selectedSymbol = reelSymbols[randomIndex];
        reels[i].push(selectedSymbol);
        reelSymbols.splice(randomIndex, 1);
      }
    }
    return reels;
};

/*Fifth part*/

const transpose = (reels) => {
  const rows = [];

  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }

  return rows;
};

const printRows = (rows) => {
  for (const row of rows) {
    let rowString = "";
    for (const [i, symbol] of row.entries()) {
      rowString += symbol;
      if (i != row.length - 1) {
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
};

const getWinnings = (rows, bet, lines) => {
  let winnings = 0;

  for (let row = 0; row < lines; row++) {
    const symbols = rows[row];
    let allSame = true;

    for (const symbol of symbols) {
      if (symbol != symbols[0]) {
        allSame = false;
        break;
      }
    }

    if (allSame) {
      winnings += bet * SYMBOL_VALUES[symbols[0]];
    }
  }

  return winnings;
};

const game = () => {
  let balance = deposit();

  while (true) {
    console.log("You have a balance of $" + balance);
    const floatconversion1 = getNumberOfLines();
    const bet = getBet(balance, floatconversion1);
    balance -= bet * floatconversion1;  /*shortend operator*/
    const reels = spin();
    const rows = transpose(reels);
    printRows(rows);
    const winnings = getWinnings(rows, bet, floatconversion1);
    balance += winnings;
    console.log("You won, $" + winnings.toString());

    if (balance <= 0) {
      console.log("You ran out of money!");
      break;
    }

    const playAgain = prompt("Do you want to play again (y/n)? ");

    if (playAgain != "y") break;
  
    }
};

game();
    
