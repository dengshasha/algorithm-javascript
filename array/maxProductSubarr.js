/**
 * Created by dengxuelian on 2022/11/7
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// 解法1：暴力解法（会超时）
var maxProduct = function(nums) {
    let product = nums[0];
    for(let i = 1; i < nums.length; i++) {
        let cur = nums[i]
        product = Math.max(product, cur)
        for(let j = i-1; j >= 0; j--) {
            cur *= nums[j]
            product = Math.max(product, cur)
        }
    }
    return product;
};

var maxProduct_1 = function(nums) {
    let min = nums[0], max = nums[0], product = nums[0]
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] < 0) {
            let temp = min
            min = max;
            max = temp;
        }
        min = Math.min(nums[i] * min, nums[i])
        max = Math.max(nums[i] * max, nums[i])
        product = Math.max(product, max)
    }
    return product
}
console.log('6:', maxProduct_1([2,3,-2,4]))
console.log('2:', maxProduct_1([0,2,0]))
console.log('24:', maxProduct_1([2,-5,-2,-4,3]))