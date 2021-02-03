/**
 * @param {number[]} nums
 * @return {number}
 * 方法一：带记忆能力的递归
 */
var lengthOfLIS = function(nums) {
    let memo = []
    for(let i = 0; i < nums.length; i++) {
        memo[i] = []
    }
    return recursive(-1, 0, -Infinity)
    function recursive(prePos, pos, value) {
        // 边界处理
        if(pos >= nums.length) return 0
        if(memo[prePos+1][pos]) {
            return memo[prePos+1][pos]
        }
        let path1 = 0, path2 = 0;
        if(nums[pos] > value) {
            path1 = 1 + recursive(pos, pos+1, nums[pos])
        }
        path2 = recursive(prePos, pos+1, value)
        return memo[prePos+1][pos] = Math.max(path1, path2)
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 * 方法二：动态规划
 *  */
var lengthOfLIS_dp = function(nums) {
    if(nums.length <= 0) return 0
    let dp = []
    dp[0] = 1
    let paths = 1
    for(let i = 1, size = nums.length; i < size; i++) {
        dp[i] = 1
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[j]+1, dp[i])
            }
        }
        paths = Math.max(dp[i], paths)
    }
    return paths
};

// console.log('4:',lengthOfLIS_dp([10,9,2,5,3,7,101,18]))
// console.log('4:',lengthOfLIS_dp([10,9,2,5,3,4,101,18]))
// console.log('4:',lengthOfLIS_dp([0,1,0,3,2,3]))
// console.log('1:', lengthOfLIS_dp([7,7,7,7,7,7,7]))
console.log('6:',lengthOfLIS_dp([5, 7, -24, 2,3,12,5,6,35]))