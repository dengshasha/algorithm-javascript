/**
 * https://leetcode.com/problems/combination-sum-ii/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    if(candidates.length <= 0) return []
    let res = []
    candidates = candidates.sort((a,b) => a-b)
    backTrack(0, target)
    function backTrack(pos, total, arr=[]) {
        if(total === 0) {
            if(!isExist(res, arr)) {
                res.push([].concat(arr))
            }
            return;
        }
        if(pos >= candidates.length) return;
        backTrack(pos+1, total, arr)
        if(candidates[pos] <= total) {
            arr.push(candidates[pos])
            backTrack(pos+1, total-candidates[pos], arr)
            arr.pop()
        }
    }
    return res
    function isExist(target, arr) {
        let str = arr.join('')
        for(let i = 0; i < target.length; i++) {
            let cur = target[i].join('')
            if(cur === str) return true
        }
    }
};

/**
 * 优化方案
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum_2 = function(candidates, target) {
    let res = []
    // 先排序
    candidates = candidates.sort((a,b) => a-b)
    backTrack(0, target)
    return res;
    function backTrack(pos, total, arr=[]) {
        if(total === 0) {
            res.push([].concat(arr))
            return;
        }
        for(let i = pos; i < candidates.length; i++) {
            // 这一步是为了过滤已经有的组合
            if(i > pos && candidates[i] === candidates[i-1]) continue;
            if(candidates[i] <= total) {
                arr.push(candidates[i])
                backTrack(i+1, total-candidates[i], arr)
                arr.pop()
            }
        }
    }
};
console.log(combinationSum_2([1], 2))
console.log(combinationSum_2([1,2], 2))
console.log(combinationSum_2([10,1,2,7,6,1,5], 8))