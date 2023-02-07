/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2023-02-06 10:49:00
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-02-07 11:13:59
 */
module.exports = {
  extends: ['stylelint-config-recess-order', 'stylelint-config-standard', 'stylelint-config-css-modules'],
  // 可以加入自定义规则，合理即可
  rules: {
    'no-descending-specificity': null,
    'length-zero-no-unit': null,
    'number-leading-zero': null,
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
