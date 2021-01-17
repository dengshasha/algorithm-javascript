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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let arr = inorderTraversal(root)
    if(arr.length <= 1) return true 
    let pre = arr[0]
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] <= pre) return false
        pre = arr[i]
    }
    return true
};

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

var testData = {
    val: 5,
    left: {
        val: 1,
        left: null,
        right: null
    },
    right: {
        val: 4,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 9,
            left: null,
            right: null
        }
    }
}

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
            val: 6,
            left: null,
            right: null
        }
    },
    right: null
}

console.log(isValidBST(testData_1))