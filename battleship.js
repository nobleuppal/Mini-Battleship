let readlineSync = require('readline-sync');

class Board {
  constructor() {
    this.row1 = [undefined, undefined, undefined];
    this.row2 = [undefined, undefined, undefined];
    this.row3 = [undefined, undefined, undefined];
    this.grid = [this.row1, this.row2, this.row3];
    this.shipCounter = 1;
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
    console.log('Hit.you have sunk a battleship');
  }
  else if (board1.grid[y][x] == 'Miss!') {
    console.log('you have already picked this location. Miss!');
  }
  else {
    board1.grid[y][x] = 'Miss!';
    console.log('you have missed');
  }
}



let key = readlineSync.keyInYN('Press any key to start the game.');
spawnShips(board1);
console.log(board1.row1);
console.log(board1.row2);
console.log(board1.row3);
let target = readlineSync.question('Enter a location to strike ie "A2"'); 
attack(target);
console.log(board1.row1);
console.log(board1.row2);
console.log(board1.row3);
console.log(board1.shipCounter);
















