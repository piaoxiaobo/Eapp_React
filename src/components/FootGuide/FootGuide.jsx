import React from 'react';
import './footGuide.css';
import {NavLink}  from 'react-router-dom'

export default class  extends React.Component {

    render(){

      return(
        <div className="footernav bottomBox">
            <ul className="footernav_ul">
               <li className="footer_icons"><NavLink to='/home' ><i className="iconfont icon-mall"></i><span>首页</span></NavLink></li>
               <li className="footer_icons"><NavLink to='/classify' ><i className="iconfont icon-fenlei"></i><span>分类</span></NavLink></li>
               <li className="footer_icons"><NavLink to='/shopcart' ><i className="iconfont icon-gouwuche2"></i><span>购物车</span></NavLink></li>
               <li className="footer_icons icons_E"><NavLink to='/login' ><i className="iconfont icon-biaoqing"></i><span>我的E宠</span></NavLink></li>
             </ul>
        </div>
      )
    }
 }










