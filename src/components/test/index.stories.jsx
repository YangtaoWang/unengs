/*
 * @Author: wangyangtao@xdf.cn
 * @Date: 2022-04-13 16:57:06
 * @LastEditors: wangyangtao@xdf.cnn
 * @LastEditTime: 2022-04-14 15:23:33
 * @Description: 描述信息
 */
import '../utils/mathjax.js'
import React from "react";
import TextView from "./index";

export default {
  title: "Example/TextView",
  component: TextView
};

const data = "（物质的分类）下列物质分类的正确组合是$(\\qquad)$<table border=\"1\" cellpadding=\"0\" cellspacing=\"0\" width=\"auto\"><tbody><tr><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\"> </td><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">碱</td><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">酸</td><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">盐</td><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">碱性氧化物</td><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">酸性氧化物</td></tr><tr><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">A</td><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">${\\mathrm{Cu}}_2（\\mathrm{OH}）_2{\\mathrm{CO}}_3$</td><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">${\\mathrm H}_2{\\mathrm{SO}}_4$</td><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">${\\mathrm{NaHCO}}_3$</td><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">${\\mathrm{SiO}}_2$</td><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">${\\mathrm{CO}}_2$</td></tr><tr><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">B</td><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">$\\mathrm{NaOH}$</td><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">$\\mathrm{HCl}$</td><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">$\\mathrm{NaCl}$</td><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">${\\mathrm{Na}}_2\\mathrm O$</td><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">$\\mathrm{CO}$</td></tr><tr><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">C</td><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">$\\mathrm{NaOH}$</td><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">${\\mathrm{NH}}_3$</td><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">${\\mathrm{CaF}}_2$</td><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">${\\mathrm{Al}}_2{\\mathrm O}_3$</td><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">${\\mathrm{SO}}_2$</td></tr><tr><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">D</td><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">$\\mathrm{KOH}$</td><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">${\\mathrm{HNO}}_3$</td><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">${\\mathrm{CaCO}}_3$</td><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">$\\mathrm{CaO}$</td><td colspan=\"1\" rowspan=\"1\" style=\"text-align: center;\" width=\"95\">${\\mathrm{SO}}_3$</td></tr></tbody></table>"

window.MathJax && window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, document.getElementById('ttt')], () => {
  console.log('111')
})


export const WithTextView = () => (
  <TextView>
    {/* This is my test component */}
    <div dangerouslySetInnerHTML={{ __html: data }} id="ttt">
    </div>
  </TextView>
);