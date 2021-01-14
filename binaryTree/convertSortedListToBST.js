class LinkList {
    constructor(head) {
        this.head = null
        this.size = 0
        if(head) {
            this.head = head
            while(head !== null) {
                this.size++
                head = head.next
            }
        }
        
    }
    clear() {
        this.head = null
    }
    get(index) {
        if(index > this.size || index < 0) return null
        let i = 0
        let current = this.head
        while(i < index) {
            current = current.next
            i++
        }
        return current.val
    }
    add(value) {
        let node = value instanceof ListNode ? value : new ListNode(value)
        let current = this.head
        if(this.head === null) {
            this.head = node
        } else {
            while (current.next !== null) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }
    remove(index) {
        if(index > this.size || index < 0) return null
        let current = this.head
        let previous = null
        let i = 0
        while(i < index) {
            previous = current;
            current = current.next
            i++;
        }
        if(previous === null) { //表示删除头部
            let value = current.val
            current = current.next;
            return value
        }
        let value = current.val
        previous.next = current.next
        return value
    }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 * 方法一：直接用链表，不过JS没有链表结构，需要自己实现一个
 */
var sortedListToBST = function(head) {
    let linkList = new LinkList(head)
    return createBST(0, linkList.size) 
    function createBST(start, end) {
        if(end <= start) return null
        let middle = Math.floor((end - start) / 2 + start)
        let node = new TreeNode(linkList.get(middle))
        if(end - start === 1) {
            return node
        }
        node.left = createBST(start, middle)
        node.right = createBST(middle+1, end)
        return node
    }
};

/**
 * @param {ListNode} head
 * @return {TreeNode}
 * 方法二：链表转换成数组再做
 */
var sortedListToBST_1 = function(head) {
    let arr = convertLinkNodeToArray(head)
    return createBST(0, arr.length) 
    function createBST(start, end) {
        if(end <= start) return null
        let middle = Math.floor((end - start) / 2 + start)
        let node = new TreeNode(arr[middle])
        if(end - start === 1) {
            return node
        }
        node.left = createBST(start, middle)
        node.right = createBST(middle+1, end)
        return node
    }
};

function convertLinkNodeToArray(head) {
    let arr = []
    let current = head
    while(current !== null) {
        arr.push(current.val)
        current = current.next
    }
    return arr
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var  testData = {
    val: -10,
    next: {
        val: -3,
        next: {
            val: 0,
            next: {
                val: 5,
                next: {
                    val: 9,
                    next: null
                }
            }
        }
    }
}

console.log(sortedListToBST_1(testData))