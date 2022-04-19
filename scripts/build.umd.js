/*
 * @Author: wangyangtao@xdf.cn
 * @Date: 2022-04-18 10:23:41
 * @LastEditors: wangyangtao@xdf.cnn
 * @LastEditTime: 2022-04-19 13:16:05
 * @Description: 描述信息
 */

 const fs = require("fs");
 const path = require("path");
 const webpack = require("webpack");
 const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
 const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
 const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 const ProgressBarPlugin = require('progress-bar-webpack-plugin');
 
 const { version, name, description } = require("../package.json");
 
 const LOGO = `
               __                    _
   _______  __/ /_____        __  __(_)
  / ___/ / / / //_/ _ \\______/ / / / /
 / /__/ /_/ / ,< /  __/_____/ /_/ / /  
 \\___/\\__,_/_/|_|\\___/     \\__,_/_/
 
 `
 
 const config = {
   mode: "production",
   entry: {
    [name]: ["./src/components/index.js"]
   },
 
   //umd 模式打包
   output: {
     library: name,
     libraryTarget: "umd",
     umdNamedDefine: true, // 是否将模块名称作为 AMD 输出的命名空间
     path: path.join(process.cwd(), "dist"),
     filename: "[name].min.js"
   },
   //react 和 react-dom 不打包
   externals: {
     react: {
       root: "React",
       commonjs2: "react",
       commonjs: "react",
       amd: "react"
     },
     "react-dom": {
       root: "ReactDOM",
       commonjs2: "react-dom",
       commonjs: "react-dom",
       amd: "react-dom"
     }
   },
   resolve: {
     enforceExtension: false,
     extensions: [".js", ".jsx", ".json", ".less", ".css"]
   },
   module: {
     rules: [
       {
         test: /\.js[x]?$/,
         use: [
           {
             loader: "babel-loader"
           }
         ],
         exclude: "/node_modules/",
         include: [path.resolve("./src/components")]
       },
       {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, "css-loader" ]
        },
       {
        test: /\.(scss|sass)$/,
        use:  [
            MiniCssExtractPlugin.loader,
            {
              loader: require.resolve('css-loader'),
              options: {
                modules: true,
                importLoaders: 2,
                sourceMap: true
              }
            },
            {
              loader: require.resolve('postcss-loader')
            },
            {
              loader: require.resolve('sass-loader'),
              options: {
                sourceMap: true
              }
            }
            ].filter(Boolean),
        },
        {
         test: /\.(jpg|jpeg|png|gif|cur|ico)$/,
         use: [
           {
             loader: "file-loader",
             options: {
               name: "images/[name][hash:8].[ext]" //遇到图片  生成一个images文件夹  名字.后缀的图片
             }
           }
         ]
       }
     ]
   },
   optimization: {
     minimizer: [
       new UglifyJsPlugin({
         cache: true,
         parallel: true,
         uglifyOptions: {
           compress: {
             drop_debugger: true,
             drop_console: false
           },
         }
       }),
       new OptimizeCSSAssetsPlugin()
     ],
     noEmitOnErrors: true,
   },
   plugins: [
     new ProgressBarPlugin(),
     new MiniCssExtractPlugin({
       filename: "[name].min.css"
     }),
     // 在打包的文件之前 加上版权说明
     new webpack.BannerPlugin(` \n ${name} v${version} \n ${description} \n ${LOGO}\n`),
     new webpack.DefinePlugin({
       "process.env.NODE_ENV": JSON.stringify("production"),
       __DEBUG__: false,
     }),
     new webpack.LoaderOptionsPlugin({
       minimize: true
     }),
     new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
    }),
   ]
 };
 
module.exports = config;
 
 