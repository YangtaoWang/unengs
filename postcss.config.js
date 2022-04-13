/*
 * @Author: wangyangtao@xdf.cn
 * @Date: 2022-04-13 20:31:54
 * @LastEditors: wangyangtao@xdf.cnn
 * @LastEditTime: 2022-04-13 20:31:54
 * @Description: 描述信息
 */
module.exports = {
    plugins: [
      require("autoprefixer")({
        browsers: [
          "last 2 versions",
          "Android >= 4.4",
          "Firefox ESR",
          "not ie < 9",
          "ff >= 30",
          "chrome >= 34",
          "safari >= 6",
          "opera >= 12.1",
          "ios >= 6"
        ]
      })
    ]
};
  
