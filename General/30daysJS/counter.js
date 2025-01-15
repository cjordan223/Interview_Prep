//Given an integer n, return a counter function. This counter function initially returns 
//n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {

    let count = n;
    //Closures: The inner function "remembers" the environment in which it was created, 
    //allowing count to persist and increment each time the function is called.


    return function() {
        count++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */