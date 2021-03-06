/*
  Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example 1:

Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL
Example 2:

Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL
Note:

The relative order inside both the even and odd groups should remain as it was in the input.
The first node is considered odd, the second node even and so on ...
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if(!head) return null;
   if(!head.next || !head.next.next) return head;
   let count = 0;
   let currentNode = head;
   let firstEven = currentNode.next;
  
   while(currentNode){
       let nextNode = currentNode.next;
       count++;     
       if(!currentNode.next || !currentNode.next.next){
           if(count % 2 === 0){
               currentNode.next = null;
           } else {
              currentNode.next = firstEven; 
           }
       } else {
           currentNode.next = currentNode.next.next;
       }
       currentNode = nextNode;
   }
   return head 
};
