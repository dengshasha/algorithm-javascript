/**
 * Created by dengxuelian on 2022/11/20
 */
/**
 * @param {number} n
 * @return {number}
 * Trailing 0s in n! = Count of 5s in prime factors of n!
 *                = floor(n/5) + floor(n/25) + floor(n/125) + ....
 */
var trailingZeroes = function(n) {
    let zero = 0
    let div = 5
    while (Math.floor(n / div) !== 0 ) {
        zero += Math.floor(n/div)
        div *= 5 
    }
    
    return zero;
};