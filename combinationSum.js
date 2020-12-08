/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = []
    backTrack(0, target)
    function backTrack(index, total, arr=[]) {
        if(total === 0) {
            res.push([].concat(arr))
            return;
        }
        for(let i=index; i < candidates.length; i++) {
            if(candidates[i] <= total) {
                arr.push(candidates[i])
                backTrack(i, total - candidates[i], arr)
                arr.pop()
            }
        }
    }
    return res
};

// console.log(combinationSum([2,3,6,7], 7))
console.log(combinationSum([2,3,5], 8))