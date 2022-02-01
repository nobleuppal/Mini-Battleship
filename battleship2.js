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
    }  
}

const shipSpawn = (length) => {
    let randLetter = Math.floor(Math.random() * 10);
    let randNumber = Math.floor(Math.random() * 10);
    let incrementor = 0;

    let x = Math.floor(Math.random() * 4);

    if (x == 0) {
        numPos(incrementor, length, randNumber, randLetter);
    }
    else if (x == 1) {
        numNeg(incrementor, length, randNumber, randLetter);
    }
    else if (x == 2) {
        lettPos(incrementor, length, randNumber, randLetter);     
    }
    else if (x == 3) {
        lettNeg(incrementor, length, randNumber, randLetter);
    }
}

const numPos = (i, length, randNum, randLett) => {
    console.log('numPos');
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
                    field.grid[randNum][randLett] = 'S';
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

const numNeg = (i, length, randNum, randLett) => {
    console.log('numNeg');
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
                    field.grid[randNum][randLett] = 'S';
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

const lettPos = (i, length, randNum, randLett) => {
    console.log('lettPos');

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
                    field.grid[randNum][randLett] = 'S';
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

const lettNeg = (i, length, randNum, randLett) => {
    console.log('lettNeg');

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
                    field.grid[randNum][randLett] = 'S';
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


const field = new Field(); 

shipSpawn(field.twoUnit);
shipSpawn(field.threeUnit);
shipSpawn(field.threeUnit);
shipSpawn(field.fourUnit);
shipSpawn(field.fiveUnit);


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



