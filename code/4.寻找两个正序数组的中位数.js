/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(!nums1.length && !nums2.length) return 0
    let arr = nums1.concat(nums2).sort((a,b)=> a-b)
    let len = arr.length
    if(arr.length % 2 !== 0){
        return arr[Math.floor(len / 2)]
    }else{
        let mids = arr[len / 2] + arr[len/2 -1]
        return  mids / 2
    }
};
findMedianSortedArrays([1,3],[2])
// @lc code=end

