/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let len = nums.length
  let i = 1
  let count = 1
  while(i < nums.length){
    if(nums[i] === nums[i-1]){
      count += 1
      if(count > 2){
        nums.splice(i, 1)
        i--
      }
    }else{
      count = 1
    }
    i++
  }
  return nums.length
};
removeDuplicates([0,0,0,0,0])
// @lc code=end

