// 14. Longest Common Prefix
// Easy
// Topics
// Companies

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    if(strs.length == 0){
        return "";
    }

    strs.sort();
    
    // Compare the first and last strings in the sorted array
    let first = strs[0];
    let last = strs[strs.length - 1];
    let commonPrefix = "";

    for


};

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

 