/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    if(matrix.length <= 0) return;
    let n = matrix.length
    let min = matrix[0][0]
    let max = matrix[n-1][n-1]
    while(min < max) {
        // 每次确定当前走的矩阵的中间值
        let mid = Math.floor((max+min)/2)
        if(check(mid)) {
            // 比mid小的数有大于k个，所以第k大的数一定在小堆中
            max = mid
        } else {
            min = mid+1
        }
    }
    return min
    function check(mid) {
        // 从左下角开始走
        let i = n-1, j = 0
        // 记下比mid小的元素的数量
        let num = 0;
        while(i >= 0 && j < n) {
            // 当前的值比mid小，则可以知道，0到当前位置的元素都比mid小，所以num就等于行数，注意行是从0开始的
            if(matrix[i][j] <= mid) {
                // 列增加，往右走，只有右边才有比mid大的数
                j++
                num+= i+1
            } else {
                // 行减少，往上走
                i--;
            }
        }
        // 比mid小的元素的数量是否大于等于要寻找的第k个数的k值
        // 如果是比k大，那说明第k个数一定在比mid小的这一堆数里面
        // 否则，就在比mid大的一堆数里面
        return num >= k
    }
};