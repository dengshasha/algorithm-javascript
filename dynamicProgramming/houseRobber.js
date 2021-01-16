/**
 * leetcode地址：https://leetcode.com/problems/house-robber/
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // 边界处理
    if(nums.length <= 0) return 0
    if(nums.length === 1) return nums[0]
    if(nums.length === 2) return Math.max(nums[0], nums[1])
    let dp = []
    // dp初始状态设置
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for(let i = 2; i < nums.length; i++) {
        // 转移方程
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1])
    }
    return dp[nums.length-1]
};

console.log('should 12:', rob([2,7,9,3,1]))