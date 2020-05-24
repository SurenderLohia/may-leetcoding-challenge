/*
  Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input:
"Aabb"

Output:
"bbAa"

Explanation:
Note that 'A' and 'a' are treated as two different characters.
*/

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const charCountKeys = [];
  const charCounts = s.split('').reduce((acc, char) => {
    if(!acc[char]) {
      acc[char] = 1;
      charCountKeys.push(char);
    } else {
      acc[char] += 1;
    }

    return acc;
  }, {});

  const frequencyArray = charCountKeys.sort((a, b) => {
    return charCounts[b] - charCounts[a];
  });

  let frequencyString = '';

  frequencyArray.forEach(char => {
    frequencyString += char.repeat(charCounts[char]);
  });

  return frequencyString;
};

frequencySort('Aabb');
