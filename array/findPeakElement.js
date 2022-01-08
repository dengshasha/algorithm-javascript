/**
 * leetcode address: https://leetcode.com/problems/find-peak-element/
 * @param {number[]} nums
 * @return {number}
 * Note that you just need to find a index satisfies the condition: nums[index] > nums[index-1] & nums[index] > nums[index+1]
 */
var findPeakElement = function(nums) {
    let left = 0, right = nums.length-1
    while(left < right) {
        let mid = Math.floor((right + left)/2)
        if(nums[mid] > nums[mid+1]) {
            right = mid
        } else {
            left = mid+1
        }
    }
    return right
};