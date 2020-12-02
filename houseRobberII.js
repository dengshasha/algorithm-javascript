/**
 * leetcode地址：https://leetcode.com/problems/house-robber-ii/
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const len = nums.length
    // 边界处理
    if(len <= 0) return 0
    if(len === 1) return nums[0]
    if(len === 2) return Math.max(nums[0], nums[1])
    // 分解问题，头尾相连，那么就考虑，仅包含头时取得的最大值，仅包含尾时取得的最大值，取两者的最大值即可
    return Math.max(rob_child(0, len-1), rob_child(1, len))
    function rob_child(start, end) {
        let dp = []
        dp[0] = nums[start]
        dp[1] = Math.max(nums[start], nums[start+1])
        for(let i = 2; i < end-start; i++) {
            dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i+start])
        }
        return dp[dp.length-1]
    }
};

console.log('should 3:', rob([2,3,2]))

console.log('should 4:', rob([1,2,3,1]))

console.log('should 3:', rob([1,2,1,1]))