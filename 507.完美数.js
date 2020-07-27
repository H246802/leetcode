/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
// var checkPerfectNumber = function (num) {
//   if (num <= 1) {
//     return false;
//   }
//   const sqrt = Math.sqrt(num);
//   let i = 2;
//   let sum = 1;
//   for (; i < sqrt; i++) {
//     if (num % i === 0) {
//       sum += i;
//       sum += num / i;
//     }
//   }
//   return sum === num;
// };
// checkPerfectNumber(28);

var checkPerfectNumber = function (num) {
  switch (num) {
    case 6:
    case 28:
    case 496:
    case 8128:
    case 33550336:
      return true;
  }
  return false;
};
// @lc code=end
