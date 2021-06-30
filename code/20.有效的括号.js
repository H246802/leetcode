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

// 所有的原理都是靠栈操作，后进先出。
var isValid = function(s) {
  if(s.length % 2) {return false}
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

var isValid = function(str){
  let len = str.length
  if(len % 2) return false
  let now = []
  const mapChar = {
    "{":"}",
    "(":")",
    "[":"]",
  }
  for(let i = 0 ; i < len ; i++){
    let letter = str[i]
    switch(letter){
      case "{":
      case "[":
      case "(":
        now.push(str[i])
      break
      case "}":
      case "]":
      case ")":
        if(mapChar[now.pop()] !== letter)  return false
    }
  }
  return now.length === 0
}
isValid('{}[]{}')
// @lc code=end

