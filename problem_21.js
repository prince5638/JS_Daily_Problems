// Problem - 21

// ------- factorial -------

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

function factorial(n)
{
  if (n < 0 || n > 12) {
    throw new RangeError("Input must be between 0 and 12, inclusive");
  }

  if (n === 0) {
    return 1; // By convention, 0! is 1
  }

  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
}

factorial(0);
factorial(1);
factorial(2);
factorial(19);