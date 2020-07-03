/*
 * @lc app=leetcode.cn id=395 lang=javascript
 *
 * [395] 至少有K个重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// 首先要对所有字符串进行判断
var longestSubstring = function(s, k) {
  const arr = s.split('')
  const count = (left, right)=>{
    // 当前查找范围已经不满足 k 大小时直接返回 0
    if(right - left + 1< k){
      return 0
    }
    let times = new Map()
    // 遍历查看当前数组内元素
    for(let i = left; i <= right ; i ++){
      if(times.has(arr[i])){
        times.set(arr[i], times.get(arr[i]) + 1)
      }else{
        times.set(arr[i],1)
      } 
    }

    while(times.get(arr[left]) < k && right - left + 1 >= k) {
      left ++
    }
    
    while(times.get(arr[right]) < k && right - left + 1 >= k){
      right --
    }

    if(right - left + 1< k){
      return 0
    }
    
    for(let i = left; i <= right ; i++){
      if(times.get(arr[i]) < k){
        return Math.max(count(left, i-1),count(i+1,right))
      }
    }
    return right - left + 1

  }
  if(s.length < k){
    return 0
  }
  return count(0, s.length -1)
};
console.log(longestSubstring('aaabb',3))

// var longestSubstring = function(s, k) {
//   const count = (left, right) => {
//       if (right - left + 1 < k) return 0

//       let times = new Map()
//       // 统计各单词出现频率
//       for (let i = left; i <= right; i++) {
//           if (times.has(str[i])) {
//               times.set(str[i], times.get(str[i])+1)
//           } else {
//               times.set(str[i], 1)
//           }
//       }

//       // 如果该字符出现频次小于K，则不可能出现在结果子串中
//       // 分别排除，挪动两个指针
//       while(right - left + 1 >= k && times.get(str[left]) < k) {
//           ++ left
//       }
//       while(right - left + 1 >= k && times.get(str[right]) < k) {
//           -- right
//       }
//       // 排除子串中包含符合要求的字符，但是这个长度不会出现对应的频率
//       if (right - left + 1 < k) return 0

//       // debugger
//       // 再对子串进行处理
//       for (let i = left; i <= right; i++) {
//           // 如果发现不满足的字符出现在子串中，则分别查看改字符左右两边
//           if (times.get(str[i]) < k) {
//               return Math.max(count(left, i-1), count(i+1, right))
//           }
//       }

//       return right - left + 1
//   }

//   const str = s.split('')
//   return count(0, s.length - 1)
// };
// console.log(longestSubstring('abccdbabac',2))
// @lc code=end

