/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  const reg = /[A-Z]/
  if(word.length <= 1){
    return true
  }
  let word1Check = reg.test(word[0])
  let word2Check = reg.test(word[1])
  if(word.length == 2){
    if(!word1Check && word2Check){
      return false
    }else{
      return true
    }
  }
  let res = false
  for(let i = 1 ; i < word.length; i++){
    let el = word[i]
    let elCheck = reg.test(el) 
    if(word1Check){
      if(word2Check){
        res = elCheck
      }else{
        res = !elCheck
      }
    }else{
      res = !elCheck
    }
    if(!res){
      return false
    }
  }
  return true
};
detectCapitalUse('Flag')
// @lc code=end

