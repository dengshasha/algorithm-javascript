/**
 * @param {number[]} nums
 * @return {number[][]}
 * leetcode address: https://leetcode.com/problems/permutations-ii/
 */
var permuteUnique = function(nums) {
    let res = []
    function recursion(l, r) {
        if(l===r) {
            res.push(nums.slice(0))
            return;
        }
        let obj = {}
        for(let i = l; i <= r; i++) {
            if(!obj[nums[i]]) {
                swap(i,l,nums)
                recursion(l+1, r)
                swap(i,l,nums)
                obj[nums[i]] = 1
            }
        }
    }
    recursion(0, nums.length-1)
    return res;
};

function swap(i, j, nums) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
    return nums;
}

console.log(permuteUnique([2,2,1,1]))