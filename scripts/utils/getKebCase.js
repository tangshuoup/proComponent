/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2023-02-21 10:46:38
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-02-21 15:38:32
 */

// 驼峰转横杠
module.exports = function getKebabCase(str) {
  let temp = str.replace(/[A-Z]/g, function (i) {
    return "-" + i.toLowerCase();
  });
  if (temp.slice(0, 1) === "_") {
    temp = temp.slice(1);
  }
  return temp;
};
