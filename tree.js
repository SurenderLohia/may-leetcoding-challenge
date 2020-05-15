/*
  Implement a trie with insert, search, and startsWith methods.

  Example:

  Trie trie = new Trie();

  trie.insert("apple");
  trie.search("apple");   // returns true
  trie.search("app");     // returns false
  trie.startsWith("app"); // returns true
  trie.insert("app");   
  trie.search("app");     // returns true
  Note:

  You may assume that all inputs are consist of lowercase letters a-z.
  All inputs are guaranteed to be non-empty strings.
*/

/**
 * Initialize your data structure here.
 */
var trieNode = function (value) {
  this.val = value;
  this.isEnd = false;
  this.children = {};
};

var Trie = function () {
  this.root = new trieNode();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let currNode = this.root;
  for (let letter of word) {
    if (!currNode.children[letter])
      currNode = currNode.children[letter] = new trieNode(letter);
    else currNode = currNode.children[letter];
  }
  currNode.isEnd = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word, isPrefix = false) {
  let currNode = this.root;
  for (let letter of word) {
    if (!currNode.children[letter]) return false;
    else currNode = currNode.children[letter];
  }
  return isPrefix ? true : currNode.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  return this.search(prefix, true);
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

//var obj = new Trie();
