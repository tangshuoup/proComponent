'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = exports.Demo = void 0;
let _react = _interopRequireDefault(require('react'));
require('./index.less');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2023-01-30 14:42:38
 * @LastEditors: tangshuo
 * @LastEditTime: 2023-02-02 15:46:14
 */

let Demo = function Demo() {
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'demo',
    },
    '2gdg',
    /*#__PURE__*/ _react.default.createElement('span', null, 'rerdddddd'),
  );
};
exports.Demo = Demo;
let _default = Demo;
exports.default = _default;
