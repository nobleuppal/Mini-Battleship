let readlineSync = require('readline-sync');

class Board {
  constructor() {
    this.row1 = [undefined, undefined, undefined];
    this.row2 = [undefined, undefined, undefined];
    this.row3 = [undefined, undefined, undefined];
    this.grid = [this.row1, this.row2, this.row3];
    this.shipCounter = 1;
    this.shipSunk = false;
    this.j = 0;
  }
}

const board1 = new Board();
const spawnShips = () => {
  let k = 0;
  while (k < 2) {
    if (key != undefined) {
      let randRow = Math.floor(Math.random() * board1.grid.length); // could possibly equal 3 FIX!
      let randCol = Math.floor(Math.random() * board1.grid.length); // could possibly equal 3 FIX!
      for (const [i, row] of board1.grid.entries()) {
        if (i == randRow) {
          for (const [j, column] of board1.grid[i].entries()) {
            if (j == randCol && column == undefined) {
              board1.grid[i][j] = 'Ship'.concat(board1.shipCounter);
              board1.shipCounter += 1;
            }
          }
        }
      }
    }
    k += 1;
  }
}

const attack = function(location) {
  let alphabet = 'ABC';
  let numbers = '123';
  location[0].toUpperCase();
  let y = alphabet.lastIndexOf(location[0]);
  let x = numbers.lastIndexOf(location[1]);
  if (board1.grid[y][x] != undefined && board1.grid[y][x] != 'Miss!') {
    board1.grid[y][x] = 'Hit!'
    console.log('Hit.You have sunk a battleship');
    board1.j += 1;
    if (board1.j == 2) {
      board1.shipSunk = true;
      console.log(board1.shipSunk);
    }
  }
  else if (board1.grid[y][x] == 'Miss!') {
    console.log('You have already picked this location.Miss!');
  }
  else {
    board1.grid[y][x] = 'Miss!';
    console.log('You have missed');
  }
}

let answer = true;
let key = '';


while (answer != false) {
key = readlineSync.keyInYN('Press any key to start the game.');
spawnShips();
console.log(board1.row1);
console.log(board1.row2);
console.log(board1.row3);
while (board1.shipSunk == false) {
let target = readlineSync.question('Enter a location to strike ie "A2"'); 
attack(target);
console.log(board1.shipSunk);
console.log(board1.row1);
console.log(board1.row2);
console.log(board1.row3);
}
answer = readlineSync.keyInYN('You have destroyed all battleships. Would you like to play again?');
}

console.log(board1.shipCounter);
















