/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(s % 2) {return false}
  let old = s.split('')
  let now = []
  let mapChar = {'{':'}','[':']','(':')'}
  while(old.length){
    let leftChar = old.pop()
    if(mapChar[leftChar]){
      if(mapChar[leftChar] !== now.pop()){
        return false
      }
    }else{
      now.push(leftChar)
    }
  }
  return !now.length
};
isValid('{}[]{}')
// @lc code=end

