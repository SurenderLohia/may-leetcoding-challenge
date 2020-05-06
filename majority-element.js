/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const majorityValue = nums.length / 2;
  let result;
  const elementCounts = nums.reduce((acc, currentValue) => {
    if(!acc[currentValue]) {
      acc[currentValue] = 1;
    } else {
      acc[currentValue] += 1;
    }
    
    return acc;
  }, {});
  
  Object.keys(elementCounts).forEach(key => {
    let element = elementCounts[key];
    if(element > majorityValue) {
      result = key;
    }
  });
  
  //console.log('elementCounts', elementCounts);
  return result;
};
