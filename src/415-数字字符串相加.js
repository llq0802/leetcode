// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
// 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
const addStrings1 = (num1, num2) => {

  const base10 = 10  // 10进制
  // 结果
  let result = '';
  // 进位标记
  let carry = 0;
  // 设置 num1  num2的长度，方便逆序遍历
  let num1Index = num1.length - 1,
    num2Index = num2.length - 1;


  while (num1Index >= 0 || num2Index >= 0) { // num1 或 num2 还有位可以相加
    // num1Index bIndex可能为负数值，需要转化为 0
    sum = (+num1[num1Index] || 0) + (+num2[num2Index] || 0) + carry;

    // 是否需要进位
    carry = sum >= base10 ? 1 : 0;

    // 计算最终结果
    result = (sum % base10) + result

    // 移位后往更高位靠
    num1Index--;
    num2Index--;
  }
  // 如果计算完毕后还有进位，那么前面 + 1
  if (carry) {
    result = '1' + result;
  }
  // 返回最终结果
  return result;
};



const addStrings = (num1, num2) => {


  if (num1.length === 1 && num2.length === 1) {
    return (+num1) + (+num2) + ''
  }



  let strNum1 = num1;
  let strNum2 = num2;
  const BASE_10 = 10;
  const len = Math.max(strNum1.length, strNum2.length);

  let res = '';
  let carry = 0;  // 进位的值
  // 填充到一样的长度 ,小的就前面补0
  if (strNum1.length > strNum2.length) {
    strNum2 = strNum2.padStart(len, '0')
  } else {
    strNum1 = strNum1.padStart(len, '0')
  }




  for (let index = len - 1; index >= 0; index--) {
    const curVal = parseInt(strNum1[index]) + parseInt(strNum2[index]) + carry;

    carry = curVal >= BASE_10 ? 1 : 0;

    res = (curVal % BASE_10) + res
  }



  // 如果第一位相加还有进位 则前面拼接1
  if (carry) {
    res = '1' + res;
  }

  return res
}

const str = addStrings('323', '69')
