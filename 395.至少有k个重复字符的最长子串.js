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
