// 2629. Function Composition
// Easy
// Companies
// Hint

// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

 
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
        
    return function(x) {

        for(let i = functions.length - 1; i >= 0; i--){

            x = functions[i](x);

        }
        
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */









// Example 1:

// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65

// Example 2:

// Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000
// Explanation:
// Evaluating from right to left ...
// 10 * (1) = 10
// 10 * (10) = 100
// 10 * (100) = 1000

// Example 3:

// Input: functions = [], x = 42
// Output: 42
// Explanation:
// The composition of zero functions is the identity function

 

// Constraints:

//     -1000 <= x <= 1000
//     0 <= functions.length <= 1000
//     all functions accept and return a single integer

// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 167.1K
// Submissions
// 192.6K
// Acceptance Rate
// 86.7%
// Companies
// Hint 1
// Start by returning a function that takes in a number and returns a number.
// Hint 2
// Call each of the functions in the correct order. Each time passing the output of the previous function into the next function.
// Similar Questions
// Memoize
// Medium
// Counter
// Easy
// Discussion (51)
// 💡 Discussion Rules

// 1. Please don't post any solutions in this discussion.

// 2. The problem discussion is for asking questions about the problem or for sharing tips - anything except for solutions.

// 3. If you'd like to share your solution for feedback and ideas, please head to the solutions tab and post it there.
// No comments yet.
