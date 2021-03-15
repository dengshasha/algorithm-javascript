/**
 * leetcode地址：https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let size = prices.length
    let dp = []
    let min = 0
    let sum = 0
    dp[0] = 0
    for(let i = 1; i < size; i++) {
        if(prices[i] < prices[min]) {
            min = i
        }
        if(prices[i] > prices[i-1]) {
            // sum += prices[i] - prices[i-1]
            dp[i] = dp[i-1] + prices[i]
        } else {
            dp[i] = dp[min] + prices[i]
        }
        
    }
    return 0
};

// console.log('7:', maxProfit([6,1,3,2,4,7]))
// console.log('6:', maxProfit([3,3,5,0,0,3,1,4]))
// 如果买卖1次，最大收益是6，买卖2次，最大收益是8
// console.log('13:', maxProfit([1,2,4,2,5,7]))
//5+7  6+7
console.log('13:', maxProfit([1,2,4,2,5,7,2,4,9,0]))