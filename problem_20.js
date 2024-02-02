// Problem - 20

// ------- Array - squareUp b! -------

// This is a question from codingbat

// Given an integer n greater than or equal to 0, create and return an array with the following pattern:

// squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
// squareUp(2) => [0, 1, 2, 1]
// squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
// n<=1000.

function squareUp(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    // Fill the array with zeros
    result.push(...Array(n - i).fill(0));

    // Fill the array with numbers in reverse order
    for (let j = i; j >= 1; j--) {
      result.push(j);
    }
  }

  return result;
}

// Test cases
console.log(squareUp(3)); // Output: [0, 0, 1, 0, 2, 1, 3, 2, 1]
console.log(squareUp(2)); // Output: [0, 1, 2, 1]
console.log(squareUp(4)); // Output: [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]