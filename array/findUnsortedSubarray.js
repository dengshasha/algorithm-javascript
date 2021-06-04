/**
 * @param {number[]} nums
 * @return {number}
 * leetcode地址：https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/
 */
var findUnsortedSubarray = function(nums) {
    let start = Infinity, end = 0
    let stack = []
    for(let i = 0, len = nums.length; i < len; i++) {
        while(stack.length && nums[stack[stack.length-1]] > nums[i]) {
            start = Math.min(start, stack.pop())
        }
        stack.push(i)
    }
    stack = []
    for(let i = nums.length-1; i >= 0; i--) {
        while(stack.length && nums[stack[stack.length-1]] < nums[i]) {
            end = Math.max(stack.pop(), end)
        }
        stack.push(i)
    }
    return end - start > 0 ? end - start + 1 : 0
};
console.log('2:',findUnsortedSubarray([2,1]))
console.log('0:',findUnsortedSubarray([1,2,3,3,3]))
console.log('5:',findUnsortedSubarray([1,3,4,2,2,2]))
console.log('5:',findUnsortedSubarray([2,6,4,8,10,9,15]))