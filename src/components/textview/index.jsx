/*
 * @Author: wangyangtao@xdf.cn
 * @Date: 2022-04-13 16:56:52
 * @LastEditors: wangyangtao@xdf.cnn
 * @LastEditTime: 2022-04-19 13:46:19
 * @Description: 描述信息
 */
import React from 'react';
import PropTypes from 'prop-types';
import Inner from '../inner'
import './style'


const TextView = ({ children }) => {
  return <div className='text-view'>
    测试组件{children}测试组件
    <Inner content="333"></Inner>
  </div>
}

TextView.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
    children: PropTypes.object
};

export default TextView;
