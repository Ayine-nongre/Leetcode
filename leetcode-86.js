 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
  }
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

var partition = function(head, x) {
    let linked_list = new ListNode(head.val, head.next)
    let pivot

    while (linked_list.next !== null) {
        if (linked_list.val === x){
            pivot = new ListNode(linked_list.val, linked_list.next)
            break
        }
        linked_list = linked_list.next
    }

    
};