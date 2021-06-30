/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  for (let i = 0; i < ransomNote.length; i++) {
    let el = ransomNote[i]
    if (magazine.indexOf(el) < 0) {
      return false;
    }
    magazine = magazine.replace(el, "");
  }
  return true
};
// @lc code=end
