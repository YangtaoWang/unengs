/*
 * @Author: wangyangtao@xdf.cn
 * @Date: 2022-04-13 16:56:52
 * @LastEditors: wangyangtao@xdf.cnn
 * @LastEditTime: 2022-04-13 17:05:21
 * @Description: 描述信息
 */
import React from 'react';
import './test.css'
import PropTypes from 'prop-types';


const TextView = ({ children }) => {
  return <div className='text-view'>
    测试组件{children}
  </div>
}

TextView.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
     children: PropTypes.string
};

export default TextView;
