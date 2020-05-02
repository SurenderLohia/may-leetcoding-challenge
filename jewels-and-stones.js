/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A"

Example:
Input: J = "aA", S = "aAAbbbb"
Output: 3

*/

var numJewelsInStones = function(J, S) {
  const sArray = S.split('');
  
  let stone_and_jewels = 0;
  
  sArray.forEach(item => {
      if(J.indexOf(item) !== -1) {
         stone_and_jewels += 1; 
      }
  })
  
  return stone_and_jewels;
};