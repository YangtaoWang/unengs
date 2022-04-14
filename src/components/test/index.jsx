/*
 * @Author: wangyangtao@xdf.cn
 * @Date: 2022-04-13 16:56:52
 * @LastEditors: wangyangtao@xdf.cnn
 * @LastEditTime: 2022-04-14 14:32:50
 * @Description: 描述信息
 */
import React from 'react';
import './style/index'
import PropTypes from 'prop-types';


const TextView = ({ children }) => {
  return <div className='text-view'>
    测试组件{children}测试组件
  </div>
}

TextView.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
     children: PropTypes.object
};

export default TextView;
