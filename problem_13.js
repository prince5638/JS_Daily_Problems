// Problem - 13

// ------- Moving Zeros To The End -------

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


function moveZeros(arr) {
    let index;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 0)
        {
            index = arr.indexOf(arr[i]);
            arr.splice(index, 1);
            arr.push(0);
        }
    }
    return arr;
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));