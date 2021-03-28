/**
 * @param {number[]} nums
 * @return {number}
 * leetcode地址：https://leetcode.com/problems/longest-increasing-subsequence/
 * 题目描述：查找数组中（整数）最长的递增子序列，并返回其长度
 */
var lengthOfLIS = function(nums) {
    let size = nums.length;
    if(size <= 1) return size
    let dp = []
    let path = 0
    for(let i = 0; i < size; i++) {
        dp[i] = 1
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j]+1)
            }
        }
        path = Math.max(path, dp[i])
    }
    return path;
};

console.log(lengthOfLIS([5, 7, -24, 12, 13, 2, 3, 12, 5, 6, 35]))