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
var isSymmetric = function(root) {
    let arr = []
    
    let curHeight = 0, curItemNum = 1

    // function isSymmertricTree(node) {
    //     if(!root) return true
    //     if((node.left && node.right === null) || (node.right && node.left === null)) return false;
    //     isSymmertricTree(node.left)
    //     isSymmertricTree(node.right)
    // }
    
};

function convertTreeToArray(root, arr) {
    if(!root) return arr;
    arr.push(root.val)
    
}