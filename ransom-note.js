/*
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Example:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
*/

// isBadVersion this return: true | false

var canConstruct = function(ransomNote, magazine) {
  const ransomNoteArray = ransomNote.split('');
  let magazineCopy = magazine;
  const ransomNoteArrayLen = ransomNoteArray.length;

  let result = true;

  for(let i = 0; i < ransomNoteArrayLen; i++) {
    let char = ransomNoteArray[i];
    if(magazineCopy.indexOf(ransomNoteArray[i]) === -1) {
      result = false;
      break;
    } else {
      magazineCopy = magazineCopy.replace(char, '');
    }
  }

  return result;
};

//console.log(canConstruct("a", "b")) // false
//console.log(canConstruct("aa", "ab")) // false
console.log(canConstruct("aa", "aab")) // true
