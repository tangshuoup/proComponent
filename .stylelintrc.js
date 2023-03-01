/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2023-02-06 10:49:00
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-02-14 15:02:43
 */
module.exports = {
  extends: ["stylelint-config-recess-order", "stylelint-config-standard", "stylelint-config-css-modules"],
  // 可以加入自定义规则，合理即可
  rules: {
    "no-descending-specificity": null,
    "length-zero-no-unit": null,
    "number-leading-zero": null,
    "selector-class-pattern": null,
  },
  customSyntax: "postcss-less",
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts", "**/{es,lib}/*.less"],
};
