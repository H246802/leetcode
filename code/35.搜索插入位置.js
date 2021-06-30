/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    if(element >= target){
      // nums.splice(index , 0, target);
      return index
    }
    if (element < target && nums[index + 1] >= target && index <= nums.length - 2) {
      // nums.splice(index + 1, 0, target);
      return index + 1
    }
    if(index === nums.length -1){
      // nums.splice(index , 0 ,target)
      return index + 1
    }
  }
};
// @lc code=end
