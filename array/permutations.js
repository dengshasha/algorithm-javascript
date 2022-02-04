/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = []
    function recursion(l, r) {
        if(l===r) {
            res.push(nums.slice(0))
            return;
        }
        for(let i = l; i <= r; i++) {
            swap(i,l,nums)
            recursion(l+1, r)
            swap(i,l,nums)
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

console.log(permute([1,2,3]))