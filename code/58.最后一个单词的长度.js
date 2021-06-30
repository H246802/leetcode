/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.trim()
  if(!s) return 0
  let num = 0;
  let check = false
  for(let i = 0 ; i < s.length ; i++){
    if(/^[a-zA-Z]$/.test(s[i])){
      if(check){
        check = false
        num = 0
      }
      num ++
    }else{
      num = 1
      check = true
    }
  }
  return num
};
lengthOfLastWord("a ")
// @lc code=end

