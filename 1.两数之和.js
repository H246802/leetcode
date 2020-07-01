/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let hashMap = new Map()
  let arr = []
  nums.map((item,index)=>{
    let dif = target - item
    if(hashMap.has(dif)){
      arr = [hashMap.get(dif),index]
    }
    hashMap.set(item,index)
  })
  return arr
};
// @lc code=end

