/**
 * leetcode地址：https://leetcode.com/problems/4sum-ii/submissions/
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
 var fourSumCount = function(A, B, C, D) {
    // 分成两组，sum1 + sum2 = 0, 所以满足sum2 = -sum1的就是要找的路径之一
    let size = A.length;
    let map = {}
    let paths = 0
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            let sum1 = A[i] + B[j]
            // 可能有两个以上的组合相加会得到相同的和，这种算多条路径的，所以要记录路径总数
            map[sum1] = map[sum1] ? map[sum1] + 1 : 1;
        }
    }
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            let sum2 = C[i] + D[j]
            if(map[-sum2]) { // 满足相加为0
                paths += map[-sum2]
            }
        }
    }
    return paths
};

console.log(fourSumCount(
    [-1,1,1,1,-1],
[0,-1,-1,0,1],
[-1,-1,1,-1,-1],
[0,1,0,-1,-1]
))