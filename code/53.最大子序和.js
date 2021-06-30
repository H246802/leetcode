/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = 0
  let res = nums[0]
  for (const num of nums) {
    if(sum > 0){
      sum += num
    }else{
      sum = num
    }
    res = Math.max(res, sum)
  }
  return res
};

function Status(l, r, m, i) {
  this.lSum = l;
  this.rSum = r;
  this.mSum = m;
  this.iSum = i;
}

const pushUp = (l, r) => {
  const iSum = l.iSum + r.iSum;
  const lSum = Math.max(l.lSum, l.iSum + r.lSum);
  const rSum = Math.max(r.rSum, r.iSum + l.rSum);
  const mSum = Math.max(Math.max(l.mSum, r.mSum), l.rSum + r.lSum);
  return new Status(lSum, rSum, mSum, iSum);
}

const getInfo = (a, l, r) => {
  if (l === r) return new Status(a[l], a[l], a[l], a[l]);
  const m = (l + r) >> 1;
  const lSub = getInfo(a, l, m);
  const rSub = getInfo(a, m + 1, r);
  return pushUp(lSub, rSub);
}

var maxSubArray = function(nums) {
  return getInfo(nums, 0, nums.length - 1).mSum;
};
maxSubArray( [-2,1,-3,4,-1,2,1,-5,4])


function mergeSort(arr) {  //采用自上而下的递归方法

  var len = arr.length;

  if(len < 2) {

      return arr;

  }

  var middle = Math.floor(len / 2),

      left = arr.slice(0, middle),

      right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right)

{

  var result = [];

  console.time('归并排序耗时');

  while (left.length && right.length) {

      if (left[0] <= right[0]) {

          result.push(left.shift());

      } else {

          result.push(right.shift());

      }

  }

  while (left.length)

      result.push(left.shift());

  while (right.length)

      result.push(right.shift());

  console.timeEnd('归并排序耗时');

  return result;

}

var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];

console.log(mergeSort(arr));
// @lc code=end

