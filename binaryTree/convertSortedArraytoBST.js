/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return getBST(nums)
    function getBST(arr) {
        if(arr.length <= 0) return null;
        let middle = Math.floor(arr.length / 2)
        let node = new TreeNode(arr[middle])
        node.left = getBST(arr.slice(0, middle))
        node.right = getBST(arr.slice(middle+1))
        return node
    }
};
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
console.log(sortedArrayToBST([0,1,2,3,4,5,6,7]))

console.log(sortedArrayToBST([-10,-3,0,5,9]))