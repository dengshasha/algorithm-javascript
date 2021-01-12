/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    let arr = [A,B,C,D]
    let res = []
    let step = 0
    for(let i = 0; i < arr.length-1; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            let k = 0;
            while(k < arr[i].length) {
                res[step] = arr[i][j] + arr[i+1][k]
                step++
                k++
            }
        }
    }
    console.log(step)
    console.log(res)
};

console.log(fourSumCount(
    [ 1, 2],
    [-2,-1],
    [-1, 2],
    [ 0, 2]
))