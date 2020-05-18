/*
  Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/

/**
 * Initialize your data structure here.
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

function getStats(p) {
  const stats = {};
  for (const char of p) {
      stats[char] = stats[char] || 0;
      stats[char]++;
  }
  return stats;
}

var findAnagrams = function(s, p) {
 const result = [];
  const usage = getStats(p);
  let unused = p.length;
  let overused = 0;
  
  for (let i = 0; i < p.length; i++) {
      if (usage.hasOwnProperty(s[i])) {
          if (--usage[s[i]] < 0) {
              overused++
          }
          unused--;
      }
  }
  
  if (unused === 0 && overused === 0) {
      result.push(0);
  }
  
  for (let j = 1; j < s.length - p.length + 1; j++) {
      const prev = s[j-1];
      const next = s[j + p.length - 1];
      if (usage.hasOwnProperty(prev)) {
          if ((usage[prev]++) < 0) {
              overused--;
          }
          unused++;
      }
      if (usage.hasOwnProperty(next)) {
          if ((--usage[next]) < 0) {
              overused++;
          }
          unused--;
      }
      if (unused === 0 && overused === 0) {
          result.push(j);
      }
  }
  
  return result; 
};
