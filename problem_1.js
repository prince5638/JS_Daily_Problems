// Problem - 1

// ------- Track the Robot (Part 2) -------
// This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it moves, the robot rotates 90 degrees clockwise. Given the amount the robot has moved each time, you have to calculate the robot's final position.

// To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:

// 20 steps North, now at (0, 20)
// 30 steps East, now at (30, 20)
// 10 steps South. now at (30, 10)
// 40 steps West, now at (-10, 10)
// ...and will end up at coordinates (-10, 10).

// Examples
// trackRobot(20, 30, 10, 40) ➞ [-10, 10]

// trackRobot() ➞ [0, 0]
// No movement means the robot stays at (0, 0).

// trackRobot(-10, 20, 10) ➞ [20, -20]
// The amount to move can be negative.

// Notes : 
// Each movement is an integer (whole number).



let arr = [-10, 20, 10];

function trackRobot(...steps) {
	let arr = steps[0];
    console.log(arr);
    console.log(typeof arr);
    let temp = [0, 0];
    for(let i = 0; i < arr.length; i++)
    {
        if(i === 0)
        {
            temp[1] = arr[i];
            // console.log(temp);
        }
        else if(i === 1)
        {
            temp[0] = arr[i];
            // console.log(temp);
        }
        else if(i === 2)
        {
            temp[1] = temp[1] - arr[i];
            // console.log(temp);
        }
        else if(i === 3)
        {
            temp[0] = temp[0] - arr[i];
            // console.log(temp);
        }
    }
    return temp;
}

console.log(trackRobot(arr));