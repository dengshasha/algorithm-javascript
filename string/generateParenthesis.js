/**
 * Created by dengxuelian on 2023/3/1
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const pareLen = n * 2;
    let res = []

    function recursive(i, pareStr, leftTotal, rightTotal) {
        if(i === pareLen-1) {
            res.push(pareStr)
            return;
        }

        if(leftTotal < n) {
            recursive(i+1, pareStr+'(', leftTotal+1, rightTotal)
        }
        if(rightTotal < leftTotal) {
            recursive(i+1, pareStr+')', leftTotal, rightTotal+1)
        }
        
    }
    recursive(0, '(', 1, 0)
    return res
};