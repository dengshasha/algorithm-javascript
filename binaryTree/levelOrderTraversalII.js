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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(!root) return []
    //辅助队列
    let queue = []
    let arr = []
    //将根节点推入队列
    queue.push(root)
    while(queue.length) {
        let len = queue.length;
        let levelList = []
        for(let i = 0; i < len; i++) {
            let current = queue.shift()
            levelList.push(current.val)
            current.left && queue.push(current.left)
            current.right && queue.push(current.right)
        }
        arr.push(levelList)
    }
    return arr.reverse();
};