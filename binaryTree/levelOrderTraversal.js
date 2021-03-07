/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 二叉树广度遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
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
    return arr;
};

var testData = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}

console.log(levelOrder(testData))