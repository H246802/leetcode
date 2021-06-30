/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  if(num < 1){
    return false
  }
  while(num % 4 === 0){
    num = num / 4
  }
  return num === 1
};
var isPowerOfFour = function(num) {
  return /^10*$/.test(num.toString(4))
};
// @lc code=end

