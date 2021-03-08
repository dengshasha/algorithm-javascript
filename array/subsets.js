/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = []
    res.push([])
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j <= nums.length; j++) {
            res.push(nums.slice(i, j))
            let k = i+1
            while(++k < j) {
                let item = nums.slice(i, k-1).concat(nums.slice(k, j))
                res.push(item)
            }
        }
    }
    return res
};

console.log(subsets([3,2,4,1]))

// [1]
// [1,2]
// [2]