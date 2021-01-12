//字节跳动面试题
function printBinaryTreePath(treeNode) {
    print(treeNode)
    function print(treeNode, value=[]) {
        if(treeNode === null) return;
        if(treeNode.left === null && treeNode.right === null) {
            value.push(treeNode.value)
            console.log(value)
            return;
        }
        if(treeNode.left) {
            value.push(treeNode.value)
            print(treeNode.left, [].concat(value))
            value.pop()
        }
        if(treeNode.right) {
            value.push(treeNode.value)
            print(treeNode.right, [].concat(value))
            value.pop()
        }
    }
}

function TreeNode(value) {
    this.value = value
    this.left = null
    this.right = null
}

var testValue = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4,
            left: null,
            right: null
        },
        right: {
            value: 5,
            left: {
                value: 6,
                left: null,
                right: null
            },
            right: null
        }
    },
    right: {
        value: 3,
        left: {
            value: 7,
            left: null,
            right: null
        },
        right: null
    }
}

printBinaryTreePath(testValue)
