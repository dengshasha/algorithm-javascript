/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 方法一：暴力循环
 * 时间复杂度：O(n*logn) n是所有的ListNode的节点总量
 * 空间复杂度：O(n)
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let root = new ListNode(-1)
    let current = root
    let pointers = []
    let index = 0;
    for(let i = 0; i < lists.length; i++) {
        pointers[i] = lists[i]
    }
    while(true) {
        index = 0;
        while(index < pointers.length && pointers[index] === null) {
            index++;
        }
        // 所有的链表都查找完成了，退出循环
        if(index >= pointers.length) break;
        for(let i = 0; i < pointers.length; i++) {
            if(pointers[i] === null) continue;
            if(pointers[i].val < pointers[index].val) {
                index = i
            }
        }
        current.next = pointers[index]
        current = current.next;
        pointers[index] = pointers[index].next;
    }
    return root.next;
};

/**
 * 方法二：分治法
 * 时间复杂度：O(n*logk) n是所有的ListNode的节点总量, k是lists的长度
 * 空间复杂度：O(n)
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists_DC = function(lists) {
    if(lists.length <= 0) return new ListNode().next
    return merge_DC(0, lists.length-1)
    function merge_DC(start, end) {
        if(end - start <= 0) return lists[end]
        let mid = start + Math.floor((end - start) / 2)
        let left = merge_DC(start, mid)
        let right = merge_DC(mid+1, end)
        return mergeTwoLists(left, right)
    }
}

 /**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let res = new ListNode()
    let current = res
    while(l2 !== null && l1 !== null) {
        if(l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next
        } else {
            current.next = l2;
            l2 = l2.next
        }
        current = current.next
    }
    while (l2 !== null) {
        current.next = l2;
        l2 = l2.next
        current = current.next
    }
    while (l1 !== null) {
        current.next = l1;
        l1 = l1.next
        current = current.next
    }
    return res.next
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var a = {
    val: 1,
    next: {
        val: 4,
        next: {
            val: 5,
            next: null
        }
    }
}

var b = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null
        }
    }
}

var c = {
    val: 2,
    next: {
        val: 6,
        next:  null
    }
}

console.log(mergeKLists_DC([a,b,c]))
