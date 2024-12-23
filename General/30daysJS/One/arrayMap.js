/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    
    let result =[];

    for(i = 0; i < arr.length; i++){
        result.push(fn(i), i)
    }
};


















/* 
2635. Apply Transform Over Each Element in Array
Easy
Companies
Hint

Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

 

Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 

Example 2:

Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.

Example 3:

Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.

 

Constraints:

    0 <= arr.length <= 1000
    -109 <= arr[i] <= 109
    fn returns a number

Seen this question in a real interview before?
1/5
Yes
No
Accepted
235.2K
Submissions
273.8K
Acceptance Rate
85.9%
Companies
Hint 1
Start by creating an array that will eventually be returned.
Hint 2
Loop over each element in the passed array. Push fn(arr[i]) to the returned array.
Similar Questions
Group By
Medium
Filter Elements from Array
Easy
Array Reduce Transformation
Easy
Discussion (88)
💡 Discussion Rules

1. Please don't post any solutions in this discussion.

2. The problem discussion is for asking questions about the problem or for sharing tips - anything except for solutions.

3. If you'd like to share your solution for feedback and ideas, please head to the solutions tab and post it there.
No comments yet.
Copyright ©️ 2024 LeetCode All rights reserved
*/