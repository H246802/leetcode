/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
// 思路: 通过分治算法找到所有字符串,判断字符串里面有没有重复的
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   if(!s) return 0
//   const arr = s.split("");
//   let res = 1
//   let rk = 0
//   arr.map((i,index)=>{
//     rk = index
//     let times = new Map()
//     while(rk < arr.length && !times.has(arr[rk])){
//       times.set(arr[rk],  true)
//       ++rk
//     }
//     res = Math.max(res, rk - index)
//   })
//   return res
// };
// console.log(lengthOfLongestSubstring('abcabcbb'))


var lengthOfLongestSubstring = function(s){
  if(s.length <= 1) return s.length
  let arr = s.split("")
  let hasStr = ""
  let startIndex = 0
  let maxLength = 1
  arr.map((i, index)=>{
    // 重复字符串在 目前筛选字符串的位置
    let cfstrIndex = hasStr.indexOf(i)
    if(index > 0 && cfstrIndex >= 0){
      startIndex = startIndex + cfstrIndex + 1
    }
    hasStr = s.slice(startIndex, index + 1)
    length = hasStr.length
    maxLength = Math.max(length, maxLength)
  })
  return maxLength
}
console.log(lengthOfLongestSubstring('pwwkew'))
// @lc code=end
