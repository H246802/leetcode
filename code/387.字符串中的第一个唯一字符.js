/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// 简单粗暴法
/**
 * @param {string} s
 * @return {number}
 */
// var firstUniqChar = function(s) {
//   if(!s) return -1
//   let obj = {}
//   for(let i = 0; i < s.length ; i++){
//     let el =s[i]
//     if(obj[el]){
//       obj[el] ++
//     }else{
//       obj[el] = 1
//     }
//   }
//   let arr = Object.keys(obj)
//   for(let i = 0; i < arr.length ; i++){
//     if(obj[arr[i]] === 1){
//       return s.indexOf(arr[i])
//     }
//   }
//   return  -1
// };

var firstUniqChar = function(s){
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
        return i
    }
}
return -1
}
firstUniqChar("leetcode")
// @lc code=end

