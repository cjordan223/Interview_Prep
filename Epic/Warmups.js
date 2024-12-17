// print numbers from 1 to 10
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// print odd numbers < 100
for (let i = 1; i < 100; i += 2) {
    console.log(i);
}

// print multiplication table with 7
for (let i = 1; i <= 9; i++) {
    console.log(7 * i);
}

//Given a natural number n, find the sum of the sum-series of the first N natural number.
//Sum-Series: is sum of first N natural numbers, i.e, sum-series of 5 is 15 ( 1 + 2 + 3 + 4 + 5 ).

function sumOfSumSeries(N) {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum = sum + (i * (i + 1)) / 2; // equation for sum series
    }
}

//ALTERNATE SOLUTION (recursion)
function sumOfSumSeries(N) {
    // Base Case: If N is 0, the sum is 0
    if (N === 0) return 0;

    // Calculate the sum of first N natural numbers
    const currentSum = (N * (N + 1)) / 2;

    // Recursive Case: Add currentSum to the result of sumOfSumSeries(N-1)
    return currentSum + sumOfSumSeries(N - 1);
}

// Example usage
console.log(sumOfSumSeries(5)); // Output: 35



