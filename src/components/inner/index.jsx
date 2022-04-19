/*
 * @Author: wangyangtao@xdf.cn
 * @Date: 2022-04-19 13:32:34
 * @LastEditors: wangyangtao@xdf.cnn
 * @LastEditTime: 2022-04-19 13:40:50
 * @Description: 描述信息
 */
/*
 * @Author: wangyangtao@xdf.cn
 * @Date: 2022-04-13 16:56:52
 * @LastEditors: wangyangtao@xdf.cnn
 * @LastEditTime: 2022-04-19 12:57:05
 * @Description: 描述信息
 */
import React from 'react';
import PropTypes from 'prop-types';
import './style'


const Inner = ({ content }) => {
  return <div className='inner-view'>
    inner组件的content{content}
  </div>
}

Inner.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
    children: PropTypes.object
};

export default Inner;
