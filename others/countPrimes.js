/**
 * Created by dengxuelian on 2023/03/27
 * leetcode link: https://leetcode.com/problems/count-primes/description/
 */
/**
 * @param {number} n
 * @return {number}
 * 解法1
 */
var countPrimes_1 = function(n) {
    if(n <= 2) return 0;
    let count = n-2;
    let memo = []
    for(let i = 2; i*i < n; i++) {
        if(memo[i]) {
            // console.log(i)
            continue
        }
        // 某个数是另外两个数的乘积，则该数不是素数
        for(let j = i; j*i < n; j++) {
            !memo[j*i] && count--
            memo[j*i] = true
        }
    }
    return count;
};
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n <= 2) return 0;
    // 所有大于2的偶数一定不是素数，所以小于n的素数的最大数量是奇数的数量
    let count = Math.floor(n/2);
    let memo = []
    // 遍历的时候要跳过偶数
    for(let i = 3; i*i < n; i+=2) {
        if(memo[i]) continue
        for(let j = i; j*i < n; j+=2) {
            // 这里会出现两个不一样的数相乘，乘积一样的情况
            if(memo[j*i]) continue;
            // 某个数是另外两个数的乘积，则该数不是素数
            count--;
            memo[j*i] = true
        }
    }
    return count;
};
console.log('15:', countPrimes(48))
// console.log('1:', countPrimes(3))
// console.log('4:', countPrimes(8))
// console.log('4:', countPrimes(10))
// console.log('4:', countPrimes(11))
console.log('68937:', countPrimes(867896))
console.log('total:', total)
