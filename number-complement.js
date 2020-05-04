/*
Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

Example 1:
Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

Example 2:
Input: 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
*/

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  let binaryCode = Number(num).toString(2);
  let binarCodeLen = binaryCode.length;
  let binaryComeComplement = '';

  for(let i = 0; i < binarCodeLen; i++) {
    let char = binaryCode[i];
    if(i === 0 && char === 0) {
      continue;
    }
    
    let charComplement = char == 0 ? 1 : 0;
    binaryComeComplement += charComplement;
  }
      
  
  let result = parseInt(binaryComeComplement, 2);

  return result;
};
