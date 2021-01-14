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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let res = []
    recusive(root, 0, [])
    return res;
    function recusive(node, curSum, curList) {
        if(node === null) return;
        if(node.left === null && node.right === null) {
            curSum += node.val
            if(curSum === sum) {
                curList.push(node.val)
                res.push([].concat(curList))
                curList.pop()
            }
            return;
        }
        
        curSum += node.val
        curList.push(node.val)
        recusive(node.left, curSum, curList)
        recusive(node.right, curSum, curList)
        curList.pop()
    }
};
var testData = {
    val: 5,
    left: {
        val: 4,
        left: {
            val: 11,
            left: {
                val: 7,
                left: null,
                right: null
            },
            right: {
                val: 2,
                left: null,
                right: null
            }
        },
        right: null
    },
    right: {
        val: 8,
        left: {
            val: 13,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: {
                val: 5,
                left: null,
                right: null
            },
            right: {
                val: 1,
                left: null,
                right: null
            }
        }
    }
}
console.log(pathSum(testData, 22))
// console.log(pathSum(null, 0))