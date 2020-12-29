/**
 * https://leetcode.com/problems/largest-rectangle-in-histogram/
 * 这个题和https://leetcode.com/problems/container-with-most-water/ 类似
 * 和取最大面积的水的区别是，每一项数据会影响最终的面积，像不同长度的木板围成的木桶一样。
 * 方法一：暴力解法
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = 0;
    for(let i = 0; i < heights.length; i++) {
        let curMinNum = heights[i]
        // 加这一句代码，性能直接从900+ms降到了300+ms
        // 这句代码的意思是，相邻的两个值，后面出现的值比前一个小或者和前一个相等，累加的结果一定比前一次少，这一轮循环没有必要
        // 注意，一定要是相邻的！
        if(i > 0 && heights[i] <= heights[i-1]) continue;
        for(let j = i; j < heights.length; j++) {
            curMinNum = Math.min(curMinNum, heights[j])
            let area = curMinNum * (j-i+1)
            maxArea = Math.max(maxArea, area)
        }
    }
    return maxArea;
};

var largestRectangleArea_1 = function(heights) {
    let dp = []
    for(let i = 0; i < heights.length; i++) {
        dp[i] = []
    }
}

console.log('12:', largestRectangleArea([2,2,5,6,2,3]))
console.log('10:', largestRectangleArea([2,1,5,6,2,3]))