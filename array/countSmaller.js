/**
 * @param {number[]} nums
 * @return {number[]}
 * leetcode address: https://leetcode.com/problems/count-of-smaller-numbers-after-self/
 */
var countSmaller = function(nums) {
    let res = []
    let len = nums.length;
    let sort = [nums[len-1]]
    res[len-1] = 0;
    for(let i = len-2; i >= 0; i--) {
        let pos = findPos(nums[i], sort)
        sort.splice(pos, 0, nums[i])
        res[i] = pos;
    }
    return res;
};

function findPos(value, arr) {
    let i = 0, j = arr.length;
    let mid;
    while(i < j) {
        mid = Math.floor((j+i)/2)
        if(arr[mid] < value) {
            i = mid+1
        } else {
            j = mid
        }
    }
    return i;
}

console.log(countSmaller([5,2,6,1]))