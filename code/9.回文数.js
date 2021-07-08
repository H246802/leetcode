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
// var isPalindrome = function(x) {
//   return x < 0 ? false : ( x == x.toString().split('').reverse().join(''))
// };
// var isPalindrome = function(x) {
//   if(x < 0 || (x % 10 === 0 && x !== 0 )) return false
//   let x2 = x
//   let resveredNum = 0
//   while(x > 0){
//       resveredNum = x % 10 + resveredNum * 10
//       x = Math.floor(x / 10)
//   }
//   return resveredNum === x2
// };
var isPalindrome = function(x) {
  if(x < 0 || (x % 10 === 0 && x !== 0 )) return false
  let resveredNum = 0
  while(x > resveredNum){
      resveredNum = x % 10 + resveredNum * 10
      x = Math.floor(x / 10)
  }
  return resveredNum === x ||  x === Math.floor(resveredNum / 10)
};
// @lc code=end

