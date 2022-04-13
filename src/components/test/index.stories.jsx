/*
 * @Author: wangyangtao@xdf.cn
 * @Date: 2022-04-13 16:57:06
 * @LastEditors: wangyangtao@xdf.cnn
 * @LastEditTime: 2022-04-13 17:10:27
 * @Description: 描述信息
 */
import React from "react";
import TextView from "./test.jsx";

export default {
  title: "Example/TextView",
  component: TextView,
};

export const WithTextView = () => (
  <TextView>
    This is my test component
  </TextView>
);