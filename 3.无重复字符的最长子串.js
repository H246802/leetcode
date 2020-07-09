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
var lengthOfLongestSubstring = function (s) {
  if(!s) return 0
  const arr = s.split("");
  let res = 1
  let rk = 0
  arr.map((i,index)=>{
    rk = index
    let times = new Map()
    while(rk < arr.length && !times.has(arr[rk])){
      times.set(arr[rk],  true)
      ++rk
    }
    res = Math.max(res, rk - index)
  })
  return res
};
console.log(lengthOfLongestSubstring('abcabcbb'))
// @lc code=end
