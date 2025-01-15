// 2703. Return Length of Arguments Passed
// Easy
// Companies
// Write a function argumentsLength that returns the count of arguments passed to it.





/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {

    let elements = args.length - 1;

    return elements;
    
};

/**
 * argumentsLength(1, 2, 3); // 3
 */


// Explanation:

//     (...args) gathers all the arguments passed into an array.
//     args.length returns the number of elements in the array, which corresponds to the number of arguments passed to the function.
//     If no arguments are passed, args is an empty array, and its length will be 0.








 

// Example 1:

// Input: args = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

// One value was passed to the function so it should return 1.

// Example 2:

// Input: args = [{}, null, "3"]
// Output: 3
// Explanation: 
// argumentsLength({}, null, "3"); // 3

// Three values were passed to the function so it should return 3.

 

// Constraints:

//     args is a valid JSON array
//     0 <= args.length <= 100

