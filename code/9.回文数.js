/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  return x < 0 ? false : ( x == x.toString().split('').reverse().join(''))
};
// @lc code=end

