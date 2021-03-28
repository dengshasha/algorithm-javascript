/**
 * @param {number[]} nums
 * @return {boolean}
 * leetcode地址：https://leetcode.com/problems/contains-duplicate/
 * 题目描述：给一个包含数字的数组，检查是否至少有一个元素出现了两次及以上，如果有则返回true
 * 评价：过于简单
 */
var containsDuplicate = function(nums) {
    let hash = {}
    for(let i = 0, size = nums.length; i < size; i++) {
        if(hash[nums[i]]) return true
        hash[nums[i]] = 1
    }
    return false
};