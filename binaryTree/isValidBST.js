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
 * 方法一
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

/**
 * @param {TreeNode} root
 * @return {boolean}
 * 方法二
 */
var isValidBST_1 = function(root) {
    if(root === null || (root.left === null && root.right === null)) return true
    return recursive(root, -Infinity)
    function recursive(node, value) {
        if(node === null) return true;
        if(node.left === null && node.right === null) {
            // value = node.val
            return node.val > value
        }
        if(!recursive(node.left, value)) return false
        if(node.val <= value) return false
        value = node.val
        if(!recursive(node.right, value)) return false
        return true
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

var testData_2 = {
    val: 1,
    left: {
        val: 1,
        left: null,
        right: null
    },
    right: null
}

console.log('false:', isValidBST_1(testData_2))