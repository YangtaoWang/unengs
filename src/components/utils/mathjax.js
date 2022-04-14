/*
 * @Author: wangyangtao@xdf.cn
 * @Date: 2022-04-14 14:12:43
 * @LastEditors: wangyangtao@xdf.cnn
 * @LastEditTime: 2022-04-14 14:45:42
 * @Description: 描述信息
 */
   
(function () {
    var script = document.createElement('script');
    script.src = 'https://ucancdn.xdf.cn/seal/static/MathJax.js?config=TeX-AMS_SVG-full';
    script.async = true;
    document.head.appendChild(script);
    script.onload = function () {
        window.MathJax.Hub.Config({
            showMathMenu: false,
            messageStyle: 'none',
            tex2jax: {
                inlineMath: [['\\(', '\\)'], ['$', '$']],
                displayMath: [['\\[', '\\]'], ['$$', '$$']],
                processEscapes: true
            },
            MathML: {
                extensions: ['content-mathml.js']
            },

            TeX: {
                equationNumbers: { autoNumber: ['AMS'], useLabelIds: true },
                extensions: ['mhchem.js']
            },
            SVG: { linebreaks: { automatic: true }, scale: 85, minScaleAdjust: 40 },
            CommonHTML: {
                linebreaks: { automatic: true },
                scale: 85,
                minScaleAdjust: 40
            }
        })
    }
})();
// require('mathjax')

