/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const len = digits.length
  for (let index = len - 1; index >= 0; index--) {
    digits[index] += 1
    digits[index] %= 10
    if(digits[index] != 0){
      return digits
    }
  }
  return [1,...digits]
};
// @lc code=end

