/* Problem Understanding

Following the hints, we can break down the solution into three key steps using helper functions. Here's how we implement the countAndSay problem step by step.
Steps to Solve

    Helper Function 1:
        Maps a string of digits to pairs [digit, frequency].
        Example: "223314444411" → [[2, 2], [3, 2], [1, 1], [4, 5], [1, 2]].

    Helper Function 2:
        Converts an array of [digit, frequency] pairs into a string.
        Example: [[2, 2], [3, 2], [1, 1], [4, 5], [1, 2]] → "22" + "23" + "11" + "54" + "21" = "2223115421".

    Main Function:
        Start with "1" as the base case.
        Repeat the process n - 1 times:
            Use Helper Function 1 to get digit-frequency pairs.
            Use Helper Function 2 to generate the next sequence.
    */


           function getPairs(str) {
                const pairs = [];
                let count = 1; // initialize count
                
                for (let i = 0; i < str.length; i++) {
                    if(i < str.length - 1 && str[i] === str[i+1]) {
                        count++; // increment count if the next digit is the same
                    }
                    else {
                        pairs.push([str[i], count]); // add the pair to the array
                        count = 1; // reset count
                    }
                }    
                    return pairs;
            }
            
            function buildString(pairs) {
                let result = "";
                for( const [digit, count] of pairs) {
                    result += count.toString() + digit; // append frequency followed by the digit
                }
                return result;
            }
            /**
             * @param {number} n
             * @return {string}
             */
            var countAndSay = function(n) {
            
                let current = "1";
            
                for (let i = 1; i < n; i++) {
                    const pairs = getPairs(current);
                    current = buildString(pairs);
                }
                return current;
            };