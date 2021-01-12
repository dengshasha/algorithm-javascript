/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode.com/problems/longest-consecutive-sequence/submissions/
 * 空间复杂度：O（N）
 * 时间复杂度：约等于O（N）
 */
var longestConsecutive = function(nums) {
    let numsSet = new Set(nums)
    let maxStep = 0
    nums.forEach((value) => {
        let tempStep = 1
        // 精彩的一句代码，可以将性能优化几倍以上！！！！
        //  这句代码可以保证每几个连续的数，只处理最小的值，中间出现的值都是O（1）
        if(!numsSet.has(value-1)) {
            while(numsSet.has(value+1)) {
                tempStep++;
                value += 1
            }
            maxStep = Math.max(tempStep, maxStep)
        }
    })
    return maxStep
};

console.log(longestConsecutive([100,4,200,1,3,2]))