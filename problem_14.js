// Problem - 14

// ------- Limiting Element Occurrences in an Array.|| Enough is enough! -------

// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].


function deleteNth(arr, n) {
    // Create a Map to store the occurrences of each element
    const occurrences = new Map();
    // Create an array to store the result
    const result = [];

    // Iterate through each element in the input array 'arr'
    for (const num of arr) {
        // Get the current count of occurrences for the element 'num'
        const count = occurrences.get(num) || 0;

        // Check if the count is less than the limit 'n'
        if (count < n) {
            // If so, push the element to the result array
            result.push(num);
            // Update the count of occurrences in the Map
            occurrences.set(num, count + 1);
        }
        // If the count is equal to or greater than 'n', do not add to the result array
    }

    // Return the final result array
    return result;
}

console.log(deleteNth([48,46,17,37,28,28,46,46,37,46,17,17,46,46,25,17,37,46,48,46,22,28,46,46,22,1,46,46,46,22,28,48,37,37,37,17,28,28,25,37,22,17,37,22,25], 1));
// console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3));
// console.log(deleteNth([20,37,20,21], 1));