/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let end = nums.length -1
  let start = 0
  while(start + 1 < end){
    let mid =  parseInt((end  + start ) / 2)
    if(nums[mid] === target){
      end = mid
      start = mid
    }else if(nums[mid] < target){
      start = mid
    }else if(nums[mid] > target){
      end = mid
    }
  }
  if(nums[start] === target){
    return start
  }
  if(nums[end] === target){
    return end
  }
  return -1
};
search([-1,0,3,5,9,12]  ,9 )
// @lc code=end

