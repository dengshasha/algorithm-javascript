/**
 * leetcode地址：https://leetcode.com/problems/sort-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 方法一：创建一个新链表，按序插入
 * 性能较差
 */
var sortList = function(head) {
    if(head === null) return head
    // 创建一个新链表
    let linkList = new ListNode(head.val)
    head = head.next;
    while(head !== null) {
        // 遍历原链表
        insertTo(new ListNode(head.val))
        head = head.next
    }
    return linkList
    function insertTo(node) {
        let current = linkList
        let previous = null
        while(current !== null) {
            if(node.val <= current.val) {
                //头部插入
                if(previous === null) {
                    node.next = linkList
                    linkList = node;
                } else {
                    //中间插入
                    node.next = previous.next
                    previous.next = node
                }
                return;
            }
            previous = current
            current = current.next
        }
        //尾部插入
        previous.next = node
    }
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 * 方法二：在原链表中执行排序，思路是：插入排序
 * 即：一开始的时候，链表中的前1个数有序，每次将当前值和前一个值比较，如果比前一个值小，则将该值插入已经有序的
 * 链表中，注意，这里插入的边界条件是，到达有序链表的边界，在有序链表中从前往后查找，找到第一个比当前值大的节点，
 * 将节点值交换。
 * 性能比起方法一好了很多
 */
var sortList_1 = function(head) {
    if(head === null || head.next === null) return head
    let current = head.next
    let previous = head
    let sortedSize = 1
    while(current !== null) {
        if(previous.val > current.val) { //需要排序
            let pointer = head
            let curSortedSize = 0
            // 找插入位置
            // 维持current之前的数都是有序的，只要在有序链表中做查找操作
            while(curSortedSize < sortedSize) {
                if(current.val < pointer.val) {
                    let temp = current.val
                    current.val = pointer.val
                    pointer.val = temp
                } else {
                    curSortedSize++
                    pointer = pointer.next
                }
            }
        }
        sortedSize++
        previous = current;
        current = current.next
    }
    return head
}

var test = {
    val: 4,
    next: {
        val: 2,
        next: {
            val: 1,
            next: {
                val: 3,
                next: {
                    val: 1,
                    next: null
                }
            }
        }
    }
}

console.log(sortList_1(test))