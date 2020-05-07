/*
In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.
Example 1:


Input: root = [1,2,3,4], x = 4, y = 3
Output: false
Example 2:


Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true
Example 3:



Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
*/

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  let a = null;
  let b = null;

  const find = (node, parent, depth) => {
      if(node === null) return;

      if(node.val === x) a = [depth, parent];
      if(node.val === y) b = [depth, parent];

      if(!a || !b) {
         find(node.left, node, depth + 1);
         find(node.right, node, depth + 1);
      }
  };

  find(root, null, 0);

  return a[0] === b[0] && a[1] !== b[1];
};
