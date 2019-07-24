/**
 * @param {*} num 
 * Find fibonacci of a given number
 * @formula
 *      fib(x) = fib(x-2) + fib(x-1)
 *      where fib(0) = 1,  fib(1) = 1
 * @example:
 *  fib(5) = fib(3) + fib(4) => 3 + 5 = 8
 *  fib(4) = fib(2) + fib(3) => 2 + 3 = 5
 *  fib(3) = fib(1) + fib(2) => 1 + 2 = 3
 *  fib(2) = fib(0) + fib(1) => 1 + 1 = 2
 */
function fibonacci(num) {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

// test case
const fib = fibonacci(5);
console.log(fib);