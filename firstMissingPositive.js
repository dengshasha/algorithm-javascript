/**
 * https://leetcode.com/problems/first-missing-positive/
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let minNum = 1
    let hash = {}
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] <= 0) continue;
        hash[nums[i]] = 1;
        if(nums[i] === minNum) { //最小正数已经出现在数组中了，需要更新
            while(hash[minNum]) {
                minNum++
            }
        }
    }
    return minNum
};
console.log('2:', firstMissingPositive([1,1]))
console.log('3:', firstMissingPositive([2,1]))
console.log('3:', firstMissingPositive([1,2,0]))
console.log('2:', firstMissingPositive([3,4,-1,1]))
console.log('1:', firstMissingPositive([7,8,9,11,12]))