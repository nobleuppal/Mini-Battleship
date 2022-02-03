let readlineSync = require('readline-sync');

class Field {
    constructor() {
    this.row1 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
    this.row2 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
    this.row3 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
    this.row4 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
    this.row5 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
    this.row6 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
    this.row7 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
    this.row8 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
    this.row9 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
    this.row10 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
    this.grid = [this.row1, this.row2, this.row3, this.row4, this.row5, this.row6, this.row7, this.row8, this.row9, this.row10];
    this.twoUnit = 2;
    this.threeUnit = 3;
    this.fourUnit = 4;
    this.fiveUnit = 5;
    this.allSunk = 0;
    this.shipSunk = false;
    this.reset();
    }  

    reset() {
        this.row1 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
        this.row2 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
        this.row3 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
        this.row4 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
        this.row5 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
        this.row6 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
        this.row7 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
        this.row8 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
        this.row9 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
        this.row10 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
        this.grid = [this.row1, this.row2, this.row3, this.row4, this.row5, this.row6, this.row7, this.row8, this.row9, this.row10];
        this.twoUnit = 2;
        this.threeUnit = 3;
        this.fourUnit = 4;
        this.fiveUnit = 5;
        this.allSunk = 0;
        this.shipSunk = false;
    }


}

const shipSpawn = (length, type) => {
    let randLetter = Math.floor(Math.random() * 10);
    let randNumber = Math.floor(Math.random() * 10);
    let incrementor = 0;

    let x = Math.floor(Math.random() * 4);

    if (x == 0) {
        numPos(incrementor, length, randNumber, randLetter, type);
    }
    else if (x == 1) {
        numNeg(incrementor, length, randNumber, randLetter, type);
    }
    else if (x == 2) {
        lettPos(incrementor, length, randNumber, randLetter, type);     
    }
    else if (x == 3) {
        lettNeg(incrementor, length, randNumber, randLetter, type);
    }
}

const numPos = (i, length, randNum, randLett, type) => {
    
    while (i < length) {
        randNum += 1;
        if (randNum == 10) {
            randNum = 0;
        }
        
        if (field.grid[randNum][randLett] == undefined) {
            if (i == (length - 1)) {
                for (j = 0; j < length; j++) {
                    randNum -= 1;   
                    if (randNum == -1) {
                        randNum = 9;
                    }
                    field.grid[randNum][randLett] = type;
                }
            }
        i++;
        }
        else {
            randLett = Math.floor(Math.random() * 10);
            randNum = Math.floor(Math.random() * 10);
            i = 0;
        }
    }
}

const numNeg = (i, length, randNum, randLett, type) => {
   
    while (i < length) {
        randNum -= 1;
        if (randNum == -1) {
            randNum = 9;
        }
        if (field.grid[randNum][randLett] == undefined) {
            if (i == (length - 1)) {
                for (j = 0; j < length; j++) {
                    randNum += 1;
                    if (randNum == 10) {
                        randNum = 0;
                    }
                    field.grid[randNum][randLett] = type;
                }
            }
        i++;
        }
        else {
            randLett = Math.floor(Math.random() * 10);
            randNum = Math.floor(Math.random() * 10);
            i = 0;
        }
    }
}

const lettPos = (i, length, randNum, randLett, type) => {

    while (i < length) {
        randLett += 1;
        if (randLett == 10) {
            randLett = 0;
        }
           
        if (field.grid[randNum][randLett] == undefined) {
            if (i == (length - 1)) {
                for (j = 0; j < length; j++) {
                    randLett -= 1;
                    if (randLett == -1) {
                        randLett = 9;
                    }                   
                    field.grid[randNum][randLett] = type;
                }
            }
        i++;
        }
        else {
            randLett = Math.floor(Math.random() * 10);
            randNum = Math.floor(Math.random() * 10);
            i = 0;
        }
    }
}

const lettNeg = (i, length, randNum, randLett, type) => {

    while (i < length) {
        randLett -= 1;
        if (randLett == -1) {
            randLett = 9;
        }
        if (field.grid[randNum][randLett] == undefined) {
            if (i == (length - 1)) {
                for (j = 0; j < length; j++) {
                    randLett += 1;
                    if (randLett == 10) {
                        randLett = 0;
                    }
                    field.grid[randNum][randLett] = type;
                }
            }
        i++;
        }
        else {
            randLett = Math.floor(Math.random() * 10);
            randNum = Math.floor(Math.random() * 10);
            i = 0;
        }
    }
}

const attack = function(location) {
    let alphabet = 'ABCDEFGHIJ';
    let numbers = [1,2,3,4,5,6,7,8,9,10];
    let upperCase = location[0].toUpperCase();
    let x;
    let y = alphabet.indexOf(upperCase);

    if (location[2] == 0) {
        x = numbers.indexOf(parseInt(location[1].concat(location[2])));
    }
    else {
        x = numbers.indexOf(parseInt(location[1]));
    }
  
    if (field.grid[y][x] != undefined && field.grid[y][x] != 'Miss!' && field.grid[y][x] != 'Hit!') {
      field.grid[y][x] = 'Hit!'
      console.log('Hit.You have hit a battleship');
      console.log(field.row1);
      console.log(field.row2);
      console.log(field.row3);
      console.log(field.row4);
      console.log(field.row5);
      console.log(field.row6);
      console.log(field.row7);
      console.log(field.row8);
      console.log(field.row9);
      console.log(field.row10); 
      field.allSunk += 1;
      if (field.allSunk == 17) {
        field.shipSunk = true;
      }
    }
    else if (field.grid[y][x] == 'Miss!') {
      console.log('You have already picked this location.Miss!');
    }
    else {
      field.grid[y][x] = 'Miss!';
      console.log('You have missed');
    }
}

const gameStart = () => {
    let answer = true;
    let key = '';
    while (answer != false) {
    field.shipSunk = false;
    key = readlineSync.keyInYN('Press any key to start the game.');
    shipSpawn(field.twoUnit, 'D');
    shipSpawn(field.threeUnit, 'S');
    shipSpawn(field.threeUnit, 'Cr');
    shipSpawn(field.fourUnit, 'B');
    shipSpawn(field.fiveUnit, 'Ca');

    console.log(field.row1);
    console.log(field.row2);
    console.log(field.row3);
    console.log(field.row4);
    console.log(field.row5);
    console.log(field.row6);
    console.log(field.row7);
    console.log(field.row8);
    console.log(field.row9);
    console.log(field.row10); 

    while (field.shipSunk == false) {
    let target = readlineSync.question('Enter a location to strike ie "A2"'); 
    attack(target);
    }
    field.reset();
    answer = readlineSync.keyInYN('You have destroyed all battleships. Would you like to play again?');
    }
}

const field = new Field(); 

gameStart();






