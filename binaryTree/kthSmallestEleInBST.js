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
 * @param {number} k
 * @return {number}
 * 方法一：将二叉搜索树转换成有序数组
 */
var kthSmallest = function(root, k) {
    let arr = convertBSTToArray(root)
    return arr.find((item, index) => index+1 === k)
};

function convertBSTToArray(root) {
    if(root === null) return []
    return convert(root)
    function convert(node, arr=[]) {
        if(node === null) return [];
        if(node.left === null && node.right === null) return [node.val];
        let left = convert(node.left, arr)
        let right = convert(node.right, arr)
        let curValue = node.val
        return [...left, curValue, ...right]
    }
}

var  testData = {
    val: 3,
    left: {
        val: 1,
        left: null,
        right: {
            val: 2,
            left: null,
            right: null
        }
    },
    right: {
        val: 4,
        left: null,
        right: null
    }
}

console.log(kthSmallest(testData, 1))