/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 方法一：递归查找，先用mid标识要找的p, q的节点，如果找到了，递归函数就会返回true
 * 其次，left, right标识左子树和右子树返回的结果，如果mid,left,right任意2个值都为true
 * 就找到了祖先元素
 */
var lowestCommonAncestor = function(root, p, q) {
    let lca = null
    recursive(root)
    return lca
    function recursive(node) {
        if(node === null) return false
        let left = recursive(node.left)
        let right = recursive(node.right)
        let mid = node.val === p.val || node.val === q.val;
        if((left && right) || (left && mid) || (right && mid)) {
            lca = node
            return;
        }
        return left || right || mid;
    }
}
    

var testData = {
    val: 3,
    left: {
        val: 5,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 2,
            left: {
                val: 7,
                left: null,
                right: null
            },
            right: {
                val: 4,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: 1,
        left: {
            val: 0,
            left: null,
            right: null
        },
        right: {
            val: 8,
            left: null,
            right: null
        }
    }
}

var testData1 = {
    val: -1,
    left: {
        val: 0,
        left: {
            val: -2,
            left: {
                val: 8,
                left: null,
                right: null
            },
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
}

var p = {
    val: 5
}
var q = {
    val: 0
}

/**
 * -1
 * / \
 * 0  3
 * / \
 * -2 4
 * /
 * 8
*/

console.log(lowestCommonAncestor(testData, p, q))