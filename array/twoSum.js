/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {}
    for (let i = 0, len = nums.length; i < len; i++) {
        if(obj[nums[i]] !== undefined) {
            return [obj[nums[i]], i]
        } 
        obj[target - nums[i]] = i
    }
};