/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = []
    let size = nums.length
    search(0, [])
    function search(start, temp=[]) {
        res.push(temp)
        for(let i = start; i < size; i++) {
            temp.push(nums[i])
            search(i+1, [...temp])
            temp.pop()
        }
    }
    return res
};

console.log(subsets([1,2,3,4]))

// [1]
// [1,2]
// [2]