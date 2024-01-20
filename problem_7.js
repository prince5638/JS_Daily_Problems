// Problem - 7

// ------- Binary Addition -------

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a,b) {
    let sum = a + b;
    let rem = 0;
    const arr = [];

    while(sum > 0)
    {
        rem = sum % 2;
        arr.unshift(rem);
        sum = Math.floor(sum/2);
    }
    const result = console.log(`${a} + ${b} = ${a+b} in decimal or ${arr.join("")} in binary`);
    return result;
}

addBinary(1,2);


// // easy way to do this 
// function addBinary(a, b) {
//     // Convert the decimal sum to binary using toString(2)
//     const sum = a + b;
//     const binarySum = sum.toString(2);

//     return binarySum;
// }
  
// Examples
// console.log(addBinary(1, 1)); // Output: "10"
// console.log(addBinary(5, 9)); // Output: "1110"
  
// The toString(2) method is used to convert the decimal sum to its binary representation.
// here in toString we have to pass the argument 2 only ... because we want the answer in binary if we write 10 then it will return decimal value for binarySum variable.