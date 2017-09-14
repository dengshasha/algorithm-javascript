    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    function ListNode (val) {
        this.val = val;
        this.next = null;
    }

    var removeNthFromEnd = function (head, n) {
        let dummy = new ListNode(null)
        dummy.next = head
        let current = dummy.next, length = 0
        while (current !== null) {
            current = current.next
            length++
        }
        if (length == 1) {
            return null
        }
        length = length - n
        current = dummy
        while (length > 0) {
            length--
            current = current.next
        }
        current.next = current.next.next
        return dummy.next
    };
