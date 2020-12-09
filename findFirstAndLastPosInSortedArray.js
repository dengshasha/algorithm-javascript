/**
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * 要求：时间复杂度O(log n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = 0, end = nums.length;
    let indexList = [-1, -1]
    while(start < end) {
        let mid = start + Math.floor((end - start) / 2)
        if(nums[mid] === target) {
            indexList[0] = indexList[1] = mid;
            while(nums[--mid]=== target && mid >= 0) {
                indexList[0] = mid;
            }
            while(nums[++mid] === target && mid < nums.length) {
                indexList[1] = mid;
            }
            return indexList
        }
        if(nums[mid] < target) {
            start = mid+1;
        } else {
            end = mid
        }
    }
    return indexList
};

console.log('[3,4]:', searchRange([5,7,7,8,8,10], 8))
console.log('[-1,-1]:', searchRange([5,7,7,8,8,10], 6))
console.log('[-1,-1]:', searchRange([], 6))
console.log('[0, 0]:', searchRange([6], 6))