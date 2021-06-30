/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/** 总结难点
 * 1. 链表的实现
 * 2. 大数的计算,先忽略 使用 BigInt
 */

// 逆序:
// 在一个排列中，如果一对数的前后位置与大小顺序相反，即前面的数大于后面的数，那么它们就称为一个逆序。一个排列中逆序的总数就称为这个排列的逆序数
// 按照题目意思应该先把数组遇到逆序成功
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 数组转链表
// function array2ListNode(arr){
//   var line = arr.map((i,j)=>{
//     // 生成 node 节点
//     return new ListNode(i)
//   })
//   for(var i = 0;i < line.length - 1; i++){
//     line[i].next = line[i+1]
//   }
//   return line[0]
// }
// 链表转数组
// function listNode2Array(list){
//   if(typeof list.val === "undefined") return
//   let arr = []
//   arr.push(list.val)
//   let next = list.next
//   while(next){
//     arr.push(next.val)
//     next = next.next
//   }
//   return arr
// }
// function listNode2Array(ListNode,val){
//   var arr = val && val.length ? val : []
//   arr.push(ListNode.val)
//   if (ListNode.next){
//     return listNode2Array(ListNode.next,arr)
//   }
//   return arr
// }
// var addTwoNumbers = function(l1, l2) {
//   console.log(l1,l2)
//   l1 = listNode2Array(l1)
//   l2 = listNode2Array(l2)
//   l1 = l1.reverse()
//   l2 = l2.reverse()
//   let res = BigInt(l1.join('')) + BigInt(l2.join('')) + ''
//   return array2ListNode(res.split('').reverse())
// };

/**
 * 网络看到的简单做法
 * @param {ListNode} l1
 * @param {ListNode} l2
 */
var addTwoNumbers = function (l1, l2) {
    var andOne = 0;
    var sum = new ListNode("0");
    var line = sum;
    while (andOne || l1 || l2) {
        let sumVal = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + andOne;
        andOne = sumVal >= 10 ? 1 : 0;
        sum.next = new ListNode(sumVal % 10);
        sum = sum.next;
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
    }
    return line.next;
};
// @lc code=end
