// Problem - 12

// ------- Break camelCase ------- 

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


function solution(string) {
    return string.replace(/[A-Z]/g, match => ` ${match}`);
}

let string = "camelCaseOk";
let occu = string.match(/c/g);
console.log(occu);

console.log(solution("camelCasing"));
console.log(solution("camelcasing"));
console.log(solution(""));