/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 二叉树中序遍历，左 => 根 => 右
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(root === null) return null
    let res = []
    recursive(root)
    return res
    function recursive(node) {
        if(node.left === null && node.right === null) {
            res.push(node.val)
            return;
        }
        node.left && recursive(node.left)
        res.push(node.val)
        node.right && recursive(node.right)
    }
};

var testData_1 = {
    val: 7,
    left: {
        val: 5,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 8,
            left: null,
            right: null
        }
    },
    right: {
        val: 9,
        left: null,
        right: null
    }
}

console.log(inorderTraversal(testData_1))