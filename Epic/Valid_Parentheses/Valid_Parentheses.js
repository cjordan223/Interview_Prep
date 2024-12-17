/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            // Push open brackets onto the stack
            stack.push(char);
        } else {
            // Check if stack is empty or top of the stack doesn't match
            if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
                return false;
            }
        }
    }

    // If stack is empty, all brackets were matched correctly
    return stack.length === 0;
};
