/**
 * Created by dengxuelian on 2022/11/1
 * leetcode link: https://leetcode.com/problems/coin-change/
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * // 解法1，DFS 会超时
 */
var coinChange = function(coins, amount) {
    if(amount <= 0) return 0;
    let new_coins = coins.filter(coin => coin <= amount).sort((a,b) => b-a)
    if(new_coins.length <= 0) return -1;

    function recursive(index, left, coinsNum) {
        if(left === 0) return coinsNum;
        if(index >= new_coins.length) return -1;
        // 当前元素值 > 剩余值，则跳过
        if(left < new_coins[index]) {
            return recursive(index+1, left, coinsNum)
        }
        // 取当前的
        let value1 = recursive(index, left-new_coins[index], coinsNum+1)
        // 不取当前的
        let value2 = recursive(index+1, left, coinsNum)

        if(value1 === -1) return value2
        if(value2 === -1) return value1
        return Math.min(value1, value2)
    }

    return recursive(0, amount, 0)
};
let count = 0;

// 解法2：带缓存的DFS
var coinChange_1 = function(coins, amount) {
    let dp = [];
    for(let i = 0; i < coins.length; i++) {
        dp[i] = []
    }

    function recursive(index, left) {
        if(left === 0) {
            return 0;
        }
        if(index >= coins.length || left < 0) {
            return Infinity;
        }
        if(dp[index][left]) {
            return dp[index][left];
        }
        // 当前元素值 > 剩余值，则跳过
        if(left < coins[index]) {
            let value = recursive(index+1, left)
            return dp[index][left] = value
        }
        // 取当前的
        let value1 = 1 + recursive(index, left-coins[index])
        // 不取当前的
        let value2 = recursive(index+1, left)

        return dp[index][left] = Math.min(value1, value2)
    }
    const res = recursive(0, amount, 0)
    return res === Infinity ? -1 : res;
};

// 解法3：动态规划
/**
 * 思路：将题目分解为
 * 1. 如果当前给的目标金额是0，则最少需要多少枚硬币？
 * 2. 如果当前给的目标金额是1，则最少需要多少枚硬币？
 * ...
 * n. 如果当前给的目标金额是n，则最少需要多少枚硬币？
 * 用一个数组dp来存放（0, n）的目标金额对应的最少硬币数量。
 * 先看初始条件，如果目标金额是0，则需要0枚硬币，dp[0] = 0
 * 接下来需要计算出，对每个目标金额1,2,3... n，需要的最少硬币数量，最后, dp[n]就是我们的答案。
 * 现在再来考虑给出的coins列表，对于每个coins[i]，如果coins[i] > 目标金额x，则这个面值的货币一个都不能用；
 * 如果coins[i] <= 目标金额x，那么可以尝试使用这枚硬币，此时还需要的金额 = 目标金额x - 当前这枚货币的面值coins[i]
 * 再转换一下，因为我们现在已经有金额(0,x-1)对应的硬币数量了，那么金额x对应的硬币数量 = 1 + dp[x-coins[i]]
 * 也就是加上当前这枚硬币（数量为1），剩余的金额是x-coins[i]，剩余金额需要的最少硬币是dp[x-coins[i]],
 * 这样我们就找到了，如果使用这枚硬币，最少需要的硬币数量了。
 * 但同时我们需要考虑，不使用这枚硬币的时候，最少需要的硬币数量，取这两个值中小的那个，才是最优解。
 * 这里就要回到dp的其余位置默认值的问题了，默认值用Infinity填充，在后面的计算中只要找到了硬币数量，就取两者最小。
 * */
var coinChange_2 = function(coins, amount) {
    let dp = [];
    coins.sort((a,b) => a - b)
    for(let i = 0; i <= amount; i++) {
        dp[i] = i === 0 ? 0 : Infinity
        for(let j = 0; j < coins.length; j++) {
            // 当前的币值比总金额还大，则退出
            // 因为coins是从小到大排序，所以后面的货币都会比总金额大，则无需继续
            if(coins[j] > i) break;
            dp[i] = Math.min(dp[i], 1 + dp[i-coins[j]])
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]
};

console.log('3:', coinChange_2([1,2,5], 11))
console.log('-1:', coinChange_2([2], 3))
console.log('0:', coinChange_2([1], 0))

console.log('20:', coinChange_2([186,419,83,408], 6249))
console.log('25:', coinChange_2([3,7,405,436], 8839))
