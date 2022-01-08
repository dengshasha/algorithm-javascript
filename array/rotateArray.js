/**
 * leetcode地址：https://leetcode.com/problems/rotate-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // k如果超过了数组的长度，求余后的数才是真正需要翻转的次数
    let time = k % nums.length
    // 如果求余后为0，就无需翻转
    if(time > 0) {
        let sIdx = nums.length - time
        let roArr = nums.splice(sIdx)
        nums.unshift(...roArr)
    }
};