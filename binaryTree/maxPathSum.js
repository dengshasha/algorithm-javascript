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
 * @return {number}
 */
var maxPathSum = function(root) {
    if(root === null) return 0
    if(root.left === null && root.right === null) return root.val
    let sum = root.val
    recusive(root)
    return sum

    function recusive(node) {
        if(node.left === null && node.right === null) return node.val
        let left = node.left && recusive(node.left)
        let val = node.val
        let right = node.right && recusive(node.right)
        
        let maxOfLeftOrRight = Math.max(val, Math.max(left, right) + val)
        let max = Math.max(maxOfLeftOrRight, left + right + val)
        sum = Math.max(sum, max)
       return maxOfLeftOrRight;
    }
};

var test = {
    val: 1,
    left: {
        val: -2,
        left: {
            val: 1,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: {
                val: -1,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: -3,
        left: null,
        right: null
    }
}


/*
        1
       / \
      -2 -3
      /\ / \
     1 3 -2
       /\
         -1
*/

console.log(maxPathSum(test))
