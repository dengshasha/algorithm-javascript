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
var zigzagLevelOrder = function(root) {
    if(!root) return []
    let queue = [root]
    let res = []
    let zig = true
    while(queue.length) {
        let temp = []
        let len = queue.length;
        for(let i = 0; i < len; i++) {
            if(zig) {
                let current = queue.shift()
                temp.push(current.val)
                if(current.left) {
                    queue.push(current.left)
                } 
                if(current.right) {
                    queue.push(current.right)
                }
            } else {
                let current = queue.pop()
                temp.push(current.val)
                if(current.right) {
                    queue.unshift(current.right)
                }
                if(current.left) {
                    queue.unshift(current.left)
                } 
            }
            
        }
        res.push(temp)
        zig = !zig
        
    }
    return res;
};

var testData1 = {
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

var testData2 = {
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

var testData3 = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: {
            val: 5,
            left: null,
            right: null
        }
    }
}

console.log(`[
    [3],
    [20,9],
    [15,7]
]`,zigzagLevelOrder(testData1))

console.log(`[
    [1],
    [3,2],
    [4,5]
]`,zigzagLevelOrder(testData2))

console.log(`[
    [1],
    [3,2],
    [4,5]
]`,zigzagLevelOrder(testData3))