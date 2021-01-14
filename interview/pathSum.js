/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    return recusive(root, 0)
    function recusive(node, curSum) {
        if(node === null) return false
        if(node.left === null && node.right === null) {
            curSum += node.val
            return curSum === sum;
        }
        return recusive(node.left, curSum+node.val) || recusive(node.right, curSum+node.val)
    }
};
var testData = {
    val: 5,
    left: {
        val: 4,
        left: {
            val: 11,
            left: {
                val: 7,
                left: null,
                right: null
            },
            right: {
                val: 2,
                left: null,
                right: null
            }
        },
        right: null
    },
    right: {
        val: 8,
        left: null,
        right: null
    }
}
console.log(hasPathSum(testData, 22))
console.log(hasPathSum(null, 0))