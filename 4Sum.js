/**
 * https://leetcode.com/problems/4sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let res = []
    nums = nums.sort((a,b) => a-b)
    backtrack(0, target)
    return res
    function backtrack(pos, total, arr=[]) {
        if(total === 0 && arr.length === 4) {
            res.push([].concat(arr))
            return;
        }
        //arr里面已经加入了4个，但还没到目标值，则退出
        if(arr.length >= 4) return;
        for(let i = pos; i < nums.length; i++) {
            // 防止重复
            if(i > pos && nums[i] === nums[i-1]) continue;
            // nums是有序数组，如果从某个正整数开始，当前值比目标值还要大，则不处理
            if(nums[i] > 0 && nums[i] > total) break;
            arr.push(nums[i])
            backtrack(i+1, total - nums[i], arr)
            arr.pop()
        }
    }
};
console.log(fourSum([1,0,-1,0,-2,2], 0))