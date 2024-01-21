// Problem - 7

// ------- Take a Ten Minutes Walk -------
// arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
    // Check if the walk has exactly 10 steps
    if(walk.length !== 10)
    {
        return false;
    }

    const direction = {
        'e': 0,
        'w': 0,
        'n': 0,
        's': 0
    }

    // Count the number of steps in each direction
    for(let step of walk)
    {
        direction[step]++;
    }

    // Check if the number of north steps equals the number of south steps
    // and the number of east steps equals the number of west steps
    return direction['e'] === direction['w'] && direction['n'] === direction['s'];
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
console.log(isValidWalk(['w']));
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));