/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {

    const n = num.length;
    // Helper function to check is the string is a valid sequence
    const isValid = (num1, num2, start) => {
        while(start < n) {

            const sum = (BigInt(num1) + BigInt(num2)).toString();

            if(!num.startsWith(sum, start)) return false;
            //compute next number as a string

            start += sum.length;
            num1 = num2;
            num2 = sum;
        }
        return true;
        
    };

    for(let i = 1; i < n; i++) {
        for(let j = i + 1; j< n; j++) {
            const num1 = num.slice(0,i);
            const num2 = num.slice(i,j);

            if((num1.length > 1 && num1[0] === '0') || (num2.length > 1 && num2[0]==='0')) continue;

            if(isValid(num1,num2, j)) return true;
        }
    }
    
    return false;
};

/* Explanation of Code:
1. Helper Function isValid:
• Takes two initial numbers ( num1, num2 ) and the starting index.
• Iteratively checks if the remaining string matches the additive sequence.

2. Outer Loops:

• Try all combinations of the first two numbers:

• i defines the end of the first number.

• j defines the end of the second number.

3. Avoid Leading Zeros:

• Skip numbers like "02" or "003".
4. Biglnt Usage:

• Handles large numbers to avoid overflow.*/