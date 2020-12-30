/**
 * https://leetcode.com/problems/fibonacci-number/
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let memo = {}
    return function memorize(n) {
        if(n === 0 ) return 0
        if(n === 1 ) return 1
        if(memo[n]) return memo[n]
        return memo[n] = memorize(n-1) + memorize(n-2)
    }(n)
};

console.log(fib(4))