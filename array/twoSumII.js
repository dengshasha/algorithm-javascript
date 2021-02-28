/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    return dc(0, numbers.length-1)
    function dc(start, end) {
        if(end - start <= 0) return []
        let diff = target - (numbers[end] + numbers[start])
        if(diff === 0) return [start+1, end+1]
        // 表示当前的值比目标值小
        if(diff > 0) {
            return dc(start+1, end)
        }
        return dc(start, end-1)
    }
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([2,3,4], 6))