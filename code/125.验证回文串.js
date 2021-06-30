/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/[^0-9a-zA-Z]/g,'').toLowerCase()
  for(let i = 0 ; i < s.length ; i++){
    if(i <= (s.length -1 - i)){
      if(s[i] !== s[s.length - 1 -i]){
        return false
      }
    }
  }
  return true
};
// @lc code=end

