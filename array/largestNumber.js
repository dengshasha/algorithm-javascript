/**
 * leetcode地址：https://leetcode.com/problems/largest-number/
 * @param {number[]} nums
 * @return {string}
 * 写的时候感觉这个答案是抖机灵，结果发现参考也是这个思路
 */
var largestNumber = function(nums) {
    let res = nums.sort(compare).join('')
    return res[0] === '0' ? '0' : res    
};
var compare = (a, b) =>  a+''+b > b+''+a ? -1 : 1

console.log(largestNumber([2,3,9]))
// case 1: 两个数，位数不同，但前n位相同
console.log(largestNumber([13, 130])) 
console.log(largestNumber([13, 132]))
console.log(largestNumber([3,30,34,5,9]))