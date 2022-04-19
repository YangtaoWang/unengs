"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style");

/*
 * @Author: wangyangtao@xdf.cn
 * @Date: 2022-04-19 13:32:34
 * @LastEditors: wangyangtao@xdf.cnn
 * @LastEditTime: 2022-04-19 13:40:50
 * @Description: 描述信息
 */

/*
 * @Author: wangyangtao@xdf.cn
 * @Date: 2022-04-13 16:56:52
 * @LastEditors: wangyangtao@xdf.cnn
 * @LastEditTime: 2022-04-19 12:57:05
 * @Description: 描述信息
 */
var Inner = function Inner(_ref) {
  var content = _ref.content;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-view"
  }, "inner\u7EC4\u4EF6\u7684content", content);
};

Inner.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  children: _propTypes.default.object
};
var _default = Inner;
exports.default = _default;