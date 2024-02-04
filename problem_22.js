// Problem - 22

// ------- Number of Rectangles in a Grid -------

// Given a grid of size m x n, calculate the total number of rectangles contained in this rectangle. All integer sizes and positions are counted.

// Examples(Input1, Input2 --> Output):

// 3, 2 --> 18
// 4, 4 --> 100
// Here is how the 3x2 grid works (Thanks to GiacomoSorbi for the idea):

// 1 rectangle of size 3x2:

// [][][]
// [][][]
// 2 rectangles of size 3x1:

// [][][]
// 4 rectangles of size 2x1:

// [][]
// 2 rectangles of size 2x2

// [][]
// [][]
// 3 rectangles of size 1x2:

// []
// []
// 6 rectangles of size 1x1:

// []
// As you can see (1 + 2 + 4 + 2 + 3 + 6) = 18, and is the solution for the 3x2 grid.

// There is a very simple solution to this!


// The number of rectangles in an m x n grid can be calculated using the formula:
// ==>(m*(m+1)*n*(n+1))/(4)

function countRectangles(m, n) {
  return (m * (m + 1) * n * (n + 1)) / 4;
}

// Test cases
const result1 = countRectangles(3, 2);
console.log(result1); // Output: 18

const result2 = countRectangles(4, 4);
console.log(result2); // Output: 100