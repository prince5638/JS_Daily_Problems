// Problem - 17

// ------- Build Tower -------

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

// ["--*--","-***-","*****"]

function towerBuilder(nFloors) {
    // Array to store each row of the pattern
    let pattern = [] 

    // Loop to iterate through each row
    for(let i = 0; i < nFloors; i++)
    {
        let space = "";
        // Calculate the number of spaces before the stars
        space = ' '.repeat(nFloors - i -1);

        // Calculate the number of stars in the current row
        let starts = '*'.repeat(2 * i + 1);
        // Concatenate spaces, stars, and additional spaces to form the row
        let row = space + starts + space;
        // Add the completed row to the pattern array
        pattern.push(row);
    }
    return pattern;
}

console.log(towerBuilder(1));
console.log(towerBuilder(3));
console.log(towerBuilder(6));