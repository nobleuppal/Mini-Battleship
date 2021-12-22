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



let key = readlineSync.keyInYN('Press any key to start the game.');
spawnShips();
let target = readlineSync.question('Enter a spawnShips to strike ie "A2"'); 
console.log(board1.row1);
console.log(board1.row2);
console.log(board1.row3);
console.log(board1.shipCounter);
















