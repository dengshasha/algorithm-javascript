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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res = []
    recursive(root, [])
    return res
    function recursive(node, arr) {
        if(node === null) return;
        if(node.left === null && node.right === null) {
        arr.push(node.val);
        res.push(arr.join('->'))
        arr.pop()
        return;
        }
        arr.push(node.val)
        recursive(node.left, arr)
        recursive(node.right, arr)
        arr.pop()
    }
};

function TreeNode(value) {
    this.val = value
    this.left = null
    this.right = null
}

var testValue = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: {
                val: 6,
                left: null,
                right: null
            },
            right: null
        }
    },
    right: {
        val: 3,
        left: {
            val: 7,
            left: null,
            right: null
        },
        right: null
    }
}

printBinaryTreePath(testValue)
