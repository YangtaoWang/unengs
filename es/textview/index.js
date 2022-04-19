"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _inner = _interopRequireDefault(require("../inner"));

require("./style");

/*
 * @Author: wangyangtao@xdf.cn
 * @Date: 2022-04-13 16:56:52
 * @LastEditors: wangyangtao@xdf.cnn
 * @LastEditTime: 2022-04-19 13:46:19
 * @Description: 描述信息
 */
var TextView = function TextView(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "text-view"
  }, "\u6D4B\u8BD5\u7EC4\u4EF6", children, "\u6D4B\u8BD5\u7EC4\u4EF6", /*#__PURE__*/_react.default.createElement(_inner.default, {
    content: "333"
  }));
};

TextView.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  children: _propTypes.default.object
};
var _default = TextView;
exports.default = _default;