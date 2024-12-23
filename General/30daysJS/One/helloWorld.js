/**
 * @return {Function}
 */
var createHelloWorld = function() {
    //rest syntax
    return function(...args) {
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        let string = "Hello World";

        return string;

        
        
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */