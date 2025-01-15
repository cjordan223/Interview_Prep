function oddEvenSum(arrayA, arrayB, flag) {
  let diffs = 0;

  // Loop through all indices
  for (let i = 0; i < arrayA.length; i++) {
    // Check if the index matches the flag
    if ((flag === "even" && i % 2 === 0) || (flag === "odd" && i % 2 !== 0)) {
      let value = arrayA[i] - arrayB[i];
      diffs += value;
    }
  }

  // Determine the result AFTER calculating the total sum
  if (diffs > 0) {
    console.log(diffs);
    return "PLAYER A WINS";
  } else if (diffs < 0) {
    console.log(diffs);
    return "PLAYER B WINS";
  } else {
    console.log(diffs);
    return "TIE";
  }
}



// 2. Two-Pointer Array Sorting
function sortArray(arr) {
  // Move all negative numbers to the left and positive numbers to the right, maintaining relative order.
}

// 3. Maximize Number with Digit Swapping
function maximizeNumber(num) {
  // Rearrange the digits of an integer by swapping adjacent digits with the same parity to maximize the number.
}

// 4. Stack Parentheses Matching
function isBalanced(s) {
  // Check if a string of parentheses is balanced using a stack.
}

// 5. Next Greater Element
function nextGreaterElement(arr) {
  // For each element in an array, find the next greater element to the right using a stack.
}

// 6. Circle Intersection
function circleIntersection(circle1, circle2) {
  // Determine if two circles intersect, touch, or are separate based on their radii and center coordinates.
  // circle1 and circle2 should be objects with {x, y, r}.
}

// 7. Summation with Conditions
function conditionalSum(arr, condition) {
  // Sum elements in the array that satisfy the given condition function (e.g., num => num % 2 === 0).
}

// 8. Find Missing Number
function findMissingNumber(arr) {
  // Given an array of numbers from 1 to n with one missing, find the missing number in O(n) time.
}

// 9. Largest Contiguous Subarray Sum (Kadane's Algorithm)
function maxSubArray(nums) {
  // Find the maximum sum of a contiguous subarray.
}

// 10. String Compression
function compressString(s) {
  // Compress a string by replacing consecutive repeating characters with the character and count.
  // If the compressed string is not shorter, return the original string.
}


// Test case 1: Odd indices
console.log(oddEvenSum([10, 20, 30], [5, 15, 25], "odd")); // Output: "TIE"
// Test case 2: Even indices
console.log(oddEvenSum([10, 20, 30], [5, 15, 25], "even")); // Output: "PLAYER A WINS"
// Test case 3: Negative differences
console.log(oddEvenSum([1, 3, 5], [2, 4, 6], "odd")); // Output: "PLAYER B WINS"