// Problem - 10

// ------- Your order, please ------- 

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""


// function order(words){
//     // creating an array for storing the words in sequence
//     const arr = new Array();
//     // regular expression for cheking the number in words that to (1-9) only
//     const regex = /[1-9]/;
    
//     // if str is empty then returning "" empty string
//     if(words.length === 0)
//     {
//         return "";
//     }
    
//     // looping through the words of the string and finding the number and pushing that words into an array at the index == number which i found from the word 
//     for(let word of words.split(" "))
//     {
//         const match = word.match(regex);
//         let index = match[0];
//         arr[index-1] = word;
//     }
//     return arr.join(" ");
// }

// Or

function order(words){
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}


// console.log(order(""));
console.log(order("is2 Thi1s T4est 3a"));