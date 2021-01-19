/**
 * @param {number[]} nums
 * @return {number[]}
 * 方法一：先累乘所有项，将含0项特殊处理
 * 如果数组中有2个及以上的含0项，则所有项累积的结果都是0
 * 如果数组中有1个含0项，则除了含0项的累积不为0，其余都为0
 */
var productExceptSelf = function(nums) {
    let zeroNum = 0
    let product = nums.reduce((acc, cur) => {
        if(cur === 0) {
            zeroNum++;
            return acc;
        }
        return acc * cur
    }, 1)
    if(zeroNum > 1) {
        return nums.map(() => 0)
    }
    if(zeroNum === 1) {
        return nums.map(n => n === 0 ? product: 0)
    }
    return nums.map(n => product/n)
};

console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([0,0]))
console.log(productExceptSelf([1,0]))