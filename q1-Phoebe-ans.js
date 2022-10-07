/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y) {
    // Task 1: Add code here
    if (typeof(x) !== "number" || typeof(y) !== "number") {
        console.log(-1); 
    }
    else if (typeof(x) === "number" && typeof(y) === "number") {
        x = x + y; 
        y = x - y; 
        x = x - y; 
        console.log("x = " + x + " and y = " + y); 
    }; 
}; 

// Task 2: Add code here
console.log("e.g. when given x = 13 and y = 27, after swapping: "); 
swap(13, 27); 

console.log(); 

console.log("e.g. when either x or y or both are not numeric: "); 
swap(5, "five"); 

module.exports = swap; 
