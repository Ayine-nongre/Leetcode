function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }

/**
* @param {ListNode} head
* @return {ListNode}
*/
var insertGreatestCommonDivisors = function(head) {
   let linked_list = head;
   let lcm = gcd = 1;

   while (linked_list.next !== null){
       let next_node = linked_list.next;
       lcm = least_common_multiple(linked_list.val, next_node.val);
       gcd = Math.floor((linked_list.val * next_node.val) / lcm)

       let temp_node = new ListNode(gcd, next_node);
       
       linked_list.next = temp_node
       linked_list = linked_list.next.next
       
   }

   return head;
};

function least_common_multiple(a, b) {
   let lcm = Math.max(a, b);
   while (lcm % a !== 0 || lcm % b !== 0) {
       lcm += Math.max(a, b);
   }
   return lcm;
}