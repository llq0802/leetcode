// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
// 示例 2：

// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]
// 示例 3：

// 输入：nums = [3,3], target = 6
// 输出：[0,1]

/**
 * 
 * @param {*} nums 
 * @param {*} target 
 * @return 
 */
var twoSum1 = function (nums, target) {
  for (let i = 0, len = nums.length; i < len; i++) {
    for (let j = i + 1, len = nums.length; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};


/**
 *
 * @param {*} nums 
 * @param {*} target
 * @return {*} 
 */
const twoSum2 = function (nums, target) {
  const map = new Map();

  for (let i = 0, len = nums.length; i < len; i++) {
    const item = nums[i];
    if (map.has(target - item)) {
      return [map.get(target - item), i];
    }
    map.set(item, i);
  }
  return [];
};
