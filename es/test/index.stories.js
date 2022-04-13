"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WithTextView = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index"));

/*
 * @Author: wangyangtao@xdf.cn
 * @Date: 2022-04-13 16:57:06
 * @LastEditors: wangyangtao@xdf.cnn
 * @LastEditTime: 2022-04-13 20:03:01
 * @Description: 描述信息
 */
var _default = {
  title: "Example/TextView",
  component: _index.default
};
exports.default = _default;

var WithTextView = function WithTextView() {
  return /*#__PURE__*/_react.default.createElement(_index.default, null, "This is my test component");
};

exports.WithTextView = WithTextView;