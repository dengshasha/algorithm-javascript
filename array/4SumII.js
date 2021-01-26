/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    let hash = {}
    let len = A.length
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            let sum = A[i] + B[j]
            hash[sum] = hash[sum] ? hash[sum]+1 : 1
        }
    }
    let paths = 0
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            let sum = C[i] + D[j]
            if(hash[-sum]) {
                paths += hash[-sum]
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