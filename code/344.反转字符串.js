/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let x = 0 ; 
  let y = s.length - 1
  while(x < y){
    [s[x], s[y]] = [s[y], s[x]]
    x++;
    y--
  }
};
var reverseString = function(s) {
  return s.reverse()
};
// @lc code=end

