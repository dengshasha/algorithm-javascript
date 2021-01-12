/**
 * 阿里面试题
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
var maxDepth = function(root) {
    let height = 0
    mapTree(root)
    return height
    function mapTree(node, curHeight=0) {
        if(!node) return;
        if(node.left === null && node.right=== null) {
            height = Math.max(height, curHeight+1)
            return;
        }
        if(node.left) {
            mapTree(node.left, curHeight+1)
        }
        if(node.right) {
            mapTree(node.right, curHeight+1)
        }
    }
};