    /**
     * Definition for singly-linked list.
     * function ListNode(val) {
      *     this.val = val;
      *     this.next = null;
    * }
     */
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    var reverseList = function (head) {
        if (head === null || head.next === null) {
            return head
        }
        //反转链表，将当前元素的next指针反转指向该元素的前一个元素
        let current = head, previous = null, next = null;
        while (current !== null) {
            next = current.next //保存当前元素的next
            current.next = previous //将当前元素的previous的值更新为next的值
            previous = current //向后移动
            current = next //向后移动，接着遍历下一个元素
        }
        console.log(previous)
    };
