/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let firstElement = "1";
  for (var i = 1; i < n; i++) {
    // \1是反向引用，表示第一个括号里捕获的数据。 * —— {0,}。即任意多个。
    // 也就是说 匹配任意元素直到当前元素与上一个元素不相等，这个月就可以得到 m 的值
    firstElement = firstElement.replace(/(.)\1*/g, (m, g) => m.length + g);
  }
  return firstElement;
};

// var countAndSay = function (n) {
//   if (n == 1) {
//     return "1";
//   }
//   const zh = (a) => {
//     let m = 1;
//     let res = "";
//     for (let i = 0; i < a.length; i++) {
//       if (a[i] == a[i + 1]) {
//         m++;
//       } else {
//         res += m + a[i];
//         m = 1;
//       }
//     }
//     n--;
//     return n == 1 ? res : zh(res);
//   };
//   return zh("1");
// };
// @lc code=end
