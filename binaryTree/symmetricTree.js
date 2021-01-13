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
 * 方法一：利用广度遍历
 */
var isSymmetric = function(root) {
    if(!root) return true;
    let queue = [root]
    let isSym = true
    while(queue.length) {
        let temp = []
        let len = queue.length;
        for(let i = 0; i < len; i++) {
            let current = queue.shift()
            // 注意对空节点的处理，空节点会影响对称性判断
            if(!current) {
                temp.push(null)
                continue;
            }
            temp.push(current.val)
            queue.push(current.left)
            queue.push(current.right)
        }
        while(temp.length > 1) {
            let l = temp.pop(), r = temp.shift()
            if(l !== r) {
                isSym = false
                break
            }
        }
        if(!isSym) break;
    }
    return isSym
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 * 方法二：来自评论同学的思路
 */
var isSymmetric_1 = function(root) {
    if(!root) return true;
    return isSymmetricRec(root.left, root.right)
    function isSymmetricRec(left, right) {
        if(left === null && right === null) return true;
        if(left === null && right || right === null && left) return false;
        if(left.val !== right.val) return false;
        return isSymmetricRec(left.left, right.right) && isSymmetricRec(left.right, right.left)
    }
};

var testData = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: {
            val: 3,
            left: null,
            right: null
        }
    },
    right: {
        val: 2,
        left: null,
        right: {
            val: 3,
            left: null,
            right: null
        }
    }
}

var testData1 = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: null
        }
    },
    right: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    }
}

console.log('false:',isSymmetric_1(testData))
console.log('true:', isSymmetric_1(testData1))