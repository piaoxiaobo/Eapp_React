import React from 'react';
import './shopcart.css'

export default class ShopCart extends React.Component {
    render(){
      return(
      <div>
          <div className="shoppingCart">
              <div className="allBrand_header">
                  <div className="allBrand_title" >
                      <div>
                          <a ><span className="iconfont icon-return back"></span></a>
                      <span className="sp1t">购物车</span>
                      <span className="iconfont icon-fenlei1 sp2t"  ></span>
              </div>
          </div>

      </div>
        <div className="shop_content ">
            <div className="gouwuche">
                <span className="iconfont icon-gouwuche2"></span>
            </div>
            <div className="gowu_title">购物车是空的</div>
            <div className="end_button">
                <a >
                    <span >去逛逛</span>
            </a>
            <a >
                <span>我的收藏</span>
            </a>
        </div>
    </div>
    </div>
      </div>
      )
    }
 }