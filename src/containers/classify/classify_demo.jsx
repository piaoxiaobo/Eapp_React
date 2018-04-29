import React from 'react';
import './classify.css'

export default class Classify extends React.Component {
    render(){
      return(
      <div>
          <div className="wrap">
              <div className="header">
                  <div className="header_classify">
                      <a><span>分类</span></a>
                  </div>
                  <div className="header_brand">
                      <a><span>品牌</span></a>
                  </div>
              </div>
              <div className="classify_content">
                  <div className="content_left">
                      <div>
                          <ul>
                              <li>为您推荐</li>
                              <li>为您推荐</li>
                              <li>为您推荐</li>
                              <li>为您推荐</li>
                              <li>为您推荐</li>
                              <li>为您推荐</li>
                              <li>为您推荐</li>
                              <li>为您推荐</li>
                              <li>为您推荐</li>
                              <li>为您推荐</li>
                              <li>为您推荐</li>
                              <li>为您推荐</li>
                              <li>为您推荐</li>
                              <li>为您推荐</li>
                              <li>为您推荐</li>
                              <li>为您推荐</li>
                              <li>为您推荐</li>
                          </ul>
                      </div>
                  </div>
                  <div className="content_right">
                      <div>
                          <div className="sort">
                              <div className="sort_content">
                                  <a >热门分类</a>
                                  <ul className="sort_list">
                                      <li>
                                          <a >
                                              <div className="list_li">
                                                  <img src="images/sort/sort1.jpg" alt="" />
                                              </div>
                                              <p>体内驱虫</p>
                                          </a>
                                      </li>
                                      <li>
                                          <a >
                                              <div className="list_li">
                                                  <img src="images/sort/sort1.jpg" alt="" />
                                              </div>
                                              <p>体内驱虫</p>
                                          </a>
                                      </li>
                                      <li>
                                          <a >
                                              <div className="list_li">
                                                  <img src="images/sort/sort1.jpg" alt="" />
                                              </div>
                                              <p>体内驱虫</p>
                                          </a>
                                      </li>
                                      <li>
                                          <a >
                                              <div className="list_li">
                                                  <img src="images/sort/sort1.jpg" alt="" />
                                              </div>
                                              <p>体内驱虫</p>
                                          </a>
                                      </li>
                                      <li>
                                          <a >
                                              <div className="list_li">
                                                  <img src="images/sort/sort1.jpg" alt="" />
                                              </div>
                                              <p>体内驱虫</p>
                                          </a>
                                      </li>
                                      <li>
                                          <a >
                                              <div className="list_li">
                                                  <img src="images/sort/sort1.jpg" alt="" />
                                              </div>
                                              <p>体内驱虫</p>
                                          </a>
                                      </li>
                                      <li>
                                          <a >
                                              <div className="list_li">
                                                  <img src="images/sort/sort1.jpg" alt="" />
                                              </div>
                                              <p>体内驱虫</p>
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="footernav bottomBox">
                  <ul className="footernav_ul">
                      <li className="footer_icons"><a  ><i className="iconfont icon-mall"></i><span>首页</span></a></li>
                      <li className="footer_icons"><a  ><i className="iconfont icon-fenlei"></i><span>分类</span></a></li>
                      <li className="footer_icons"><a  ><i className="iconfont icon-gouwuche2"></i><span>购物车</span></a></li>
                      <li className="footer_icons icons_E"><a  ><i className="iconfont icon-biaoqing"></i><span>我的E宠</span></a></li>
                  </ul>
              </div>
          </div>
      </div>
      )
    }
 }