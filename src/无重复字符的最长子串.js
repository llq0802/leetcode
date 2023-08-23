// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。


/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {

  if (s.length === 1) return 1

  let res = 0, temp = [], sLen = s.length

  for (let i = 0; i < sLen; i++) {

    const index = temp.indexOf(s[i])

    if (index !== -1) {

      temp.splice(0, index + 1) //删除包含当前字符之前的字符串数组

    }

    temp.push(s[i])

    res = Math.max(res, temp.length)

  }
  return res
};




/**
 *
 * 查找两个字符串的最长公共子串的Javascript函数
 * @param {*} str1
 * @param {*} str2
 * @return {*} 
 */
function findEqual(str1, str2) {
  let short, long
  if (str1.length < str2.length) {
    short = str1
    long = str2
  } else {
    short = str2
    long = str1
  }

  for (let i = short.length - 1; i >= 0; i--) {

    for (let j = 0; j < i; j++) {

      if (long.indexOf(short.slice(j, i + 1)) !== -1) {

        return short.slice(j, i + 1)

      }

    }

  }


}


/**
 *
 * 查找两个字符串的最长公共子串的Javascript函数
 * @param {*} str1
 * @param {*} str2
 * @return {*} 
 */
function findLongestCommonStr(s1, s2) {
  var commonStr = '', L1 = s1.length, L2 = s2.length;
  // 比较s1,s2的长度，看谁长谁短
  var shortStr = L1 > L2 ? s2 : s1;
  var longStr = L1 > L2 ? s1 : s2;
  // 短的字符串的长度
  var strLen = shortStr.length;


  // i是从哪里开始截取，j是截取的长度
  // 遍历短的字符串，从大到小递减
  for (let j = strLen; j > 0; j--) {
    // 不同的长度有总共有i个可能，从做到右遍历
    for (let i = 0; i <= strLen - j; i++) {
      // 截取出短字符串的部分字符串
      commonStr = shortStr.substr(i, j);
      // 为了便于观测运行的过程，打印看一下会直观很多
      console.log('commonStr:', commonStr, 'i:', i, 'j:', j);

      // 放在长字符串里看看有没有匹配的，如果有直接返回
      if (longStr.indexOf(commonStr) >= 0) return commonStr
    }
  }
  // 没有的话返回空字符串
  return ''
}

// console.log(findLongestCommonStr("qwer--", "qtrrwqw-")); //qw