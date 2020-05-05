/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Example:
You may assume that both strings contain only lowercase letters.

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
*/


/**
 * @param {string}
 * @return {number}
 */
var firstUniqChar = function(s) {
  const sLen = s.length;
  const charCounts = {};

  for(let i = 0; i < sLen; i++) {
    let char = s[i];
    if(!charCounts[char]) {
      charCounts[char] = {
        count: 1,
        index: i
      }
    } else {
      charCounts[char].count += 1;
    }
  }

  const firstNonRepeatingChar = Object.keys(charCounts).find(char => charCounts[char].count === 1);

  if(!firstNonRepeatingChar) {
    return -1;
  }
  
  const firstNonRepeatingIndex = charCounts[firstNonRepeatingChar].index;

  return firstNonRepeatingIndex;
};
