/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {

    let result = [];

    function isSelfDividing(num){
        let current = num;
        while(current > 0){
         let digit = current % 10; // extract last digit
         if(digit == 0 ||  num % digit != 0){
            return false;
         }       
         current = Math.floor(current / 10); // remove last digit
        }

        return true;
    }

    for(i = left; i <= right; i++){
        if(isSelfDividing[i]){
            result.push(i);
        }
    }
return results;
};

/* 

Explanation

    isSelfDividing(num) Function:
        Extracts digits using num % 10.
        Checks:
            If the digit is 0, return false.
            If num % digit !== 0, return false.
        Continues by removing the last digit with Math.floor(num / 10).

    Main Loop:
        Loops through all numbers between left and right.
        Calls isSelfDividing() for each number.
        Adds numbers passing the check to the result array.

*/