import React from 'react';
import './css/index.css'

import {Route, Switch, Redirect} from 'react-router-dom';

export default class Home extends React.Component {
    render(){
      return(
        <div>
            <div className="index_wrap">
                <div id="header">
                    {/*头部广告*/}
                    <div>
                        <div className="overflow xiaozaiApp">
                            <div className="overflow rela">
       <span className="clsoe_btn">
        <img id="close_down_bar" src="images/app/close_down_bar.png" alt="xiaozaiApp" />
       </span>
                                <div className="appdowimg">
                                    <a >
                                        <img src="images/app/app.jpg" alt="xiaozaiapp" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*广告头部*/}
                    <div className="index_header">
                        <div className="main">
                            <div className="header_search">
                                <div className="search_location">
                                    <a >
                                        <span>狗狗</span>
                                        <span>|</span>
                                        <span className="myposition">北京</span>
                                        <i className="serach-ico"></i>
                                    </a>
                                </div>
                                <p  className="search-text">
                                    <a >
                                        <input type="search" placeholder="搜索商品和品牌" />
                                            <span className=""></span>
                                    </a>
                                </p>
                                <div>
                                    <a  className="news"><img src="images/news.png" alt="news" /></a>
                                </div>
                            </div>
                            <div className="find_nav">
                                <div className="find_nav_left dscroll">
                                    <div className="find_nav_list dscroll-div" >
                                        <ul className="dscroll-ul">
                                            <li className="dscroll-li"><a ><span><span className="rela">首页</span><i></i></span></a></li>
                                            <li className="dscroll-li"><a ><span><span className="rela">狗狗主粮</span><i></i></span></a></li>
                                            <li className="dscroll-li"><a ><span><span className="rela">零食</span><i></i></span></a></li>
                                            <li className="dscroll-li"><a ><span><span className="rela">医疗保健</span><i></i></span></a></li>
                                            <li className="dscroll-li"><a ><span><span className="rela">玩具</span><i></i></span></a></li>
                                            <li className="dscroll-li"><a ><span><span className="rela">外出</span><i></i></span></a></li>
                                            <li className="dscroll-li"><a ><span><span className="rela">服饰城</span><i></i></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*首页内容*/}
                <div className="index_content">
                    {/*轮播图*/}
                    <div className="carousel">
                        <img src="images/nav/Car_4.jpg" alt="" />
                    </div>
                    {/*导航*/}
                    <div>
                        <div className="columnnavdiv">
                            <div>
                                <ul className="nav_list">
                                    <li className="nav_list_item">
                                        <a ><img src="images/nav/nav_1.jpg" alt="" /></a>
                                    </li>
                                    <li className="nav_list_item">
                                        <a ><img src="images/nav/nav_2.jpg" alt="" /></a>
                                    </li>
                                    <li className="nav_list_item">
                                        <a ><img src="images/nav/nav_3.jpg" alt="" /></a>
                                    </li>
                                    <li className="nav_list_item">
                                        <a ><img src="images/nav/nav_4.jpg" alt="" /></a>
                                    </li>
                                    <li className="nav_list_item">
                                        <a ><img src="images/nav/nav_5.jpg" alt="" /></a>
                                    </li>
                                    <li className="nav_list_item">
                                        <a ><img src="images/nav/nav_6.jpg" alt="" /></a>
                                    </li>
                                    <li className="nav_list_item">
                                        <a ><img src="images/nav/nav_7.jpg" alt="" /></a>
                                    </li>
                                    <li className="nav_list_item">
                                        <a ><img src="images/nav/nav_8.jpg" alt="" /></a>
                                    </li>
                                    <li className="nav_list_item">
                                        <a ><img src="images/nav/nav_9.jpg" alt="" /></a>
                                    </li>
                                    <li className="nav_list_item">
                                        <a ><img src="images/nav/nav_10.jpg" alt="" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="banner_item">
                            <a >
                                <img src="images/nav/nav_banner.gif" alt="banner" />
                            </a>
                        </div>
                        <div className="banner-round"></div>
                        {/*每日疯抢*/}
                        <div className="surprise">
                            <div className="surprise-items">
                                <div className="one_day">
                                    <img src="images/nav/oneday.png" alt="每日疯抢" />
                                </div>
                                <div className="next_tip">下一场开始</div>
                                <div className="next_time">
                                    <div className="time1">
                                        <span className="time-1">10</span>
                                        <span className="time-zi">:</span>
                                        <span className="time-1">00</span>
                                    </div>
                                </div>
                                <div className="more">
                                    <a ><img src="images/nav/more.png" alt="more" /></a>
                                </div>
                            </div>
                            <div className="surprise_pro">
                                <div className="pro_warp">
                                    <div className="pro_slide">
                                        <div className="pro_block">
                                            <a >
                                                <div className="block_img">
                                                    <img src="images/block_img/block_img1.jpg" alt="" />
                                                </div>
                                                <div className="cred">
                                                    <span className="ft12">￥</span>
                                                    <span className="ft17">37.90</span>
                                                </div>
                                                <p className="ftc">省341.10</p>
                                            </a>
                                        </div>
                                        <div className="pro_block">
                                            <a >
                                                <div className="block_img">
                                                    <img src="images/block_img/block_img1.jpg" alt="" />
                                                </div>
                                                <div className="cred">
                                                    <span className="ft12">￥</span>
                                                    <span className="ft17">37.90</span>
                                                </div>
                                                <p className="ftc">省341.10</p>
                                            </a>
                                        </div>
                                        <div className="pro_block">
                                            <a >
                                                <div className="block_img">
                                                    <img src="images/block_img/block_img1.jpg" alt="" />
                                                </div>
                                                <div className="cred">
                                                    <span className="ft12">￥</span>
                                                    <span className="ft17">37.90</span>
                                                </div>
                                                <p className="ftc">省341.10</p>
                                            </a>
                                        </div>
                                        <div className="pro_block">
                                            <a >
                                                <div className="block_img">
                                                    <img src="images/block_img/block_img1.jpg" alt="" />
                                                </div>
                                                <div className="cred">
                                                    <span className="ft12">￥</span>
                                                    <span className="ft17">37.90</span>
                                                </div>
                                                <p className="ftc">省341.10</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*分割线*/}
                        <div className="xline"><div className="page-line"></div></div>
                        {/*推荐导购*/}
                        <div className="divboximg">
                            <div className="divboximg_left">
                                <a >
                                    <img src="images/divboximg/ytr_32.jpg" alt="#" />
                                </a>
                            </div>
                            <div className="divboximg_right">
                                <div className="divboximg_right_top">
                                    <a >
                                        <img src="images/divboximg/ytr_33.jpg" alt="#" />
                                    </a>
                                </div>
                                <div className="divboximg_right_bottom">
                                    <a >
                                        <img src="images/divboximg/ytr_18.jpg" alt="#" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="xline"><div className="page-line"></div></div>


                        <div className="shop_foreshow">
                            <a >
                                <img src="images/divboximg/shopyugao.jpg" alt="#" />
                            </a>
                        </div>
                        <div className="xline"><div className="page-line"></div></div>

                        <div className="e_items">
                            <div className="items_title">
                                <img src="images/items/items_title1.jpg" alt="" />
                                    <div className="title_more">
                                        <a >
                                            <img src="images/nav/more.png" alt="" />
                                        </a>
                                    </div>
                            </div>
                            <div className="items_item">
                                <a >
                                    <img src="images/items/items_item1.jpg" alt="" />
                                </a>
                            </div>
                            <div className="items_content">
                                <div className="items_content1">SodaPup 易拉罐漏食狗玩具 口感软弹洁牙护牙</div>
                                <div className="items_content2" >
                                    <i className="iconfont icon-yanjing"  ></i>
                                    <i >8036</i>
                                    <span >|</span>
                                    01:29
                                </div>
                            </div>
                        </div>
                        <div className="xline"><div className="page-line"></div></div>
                        <div className="e_items_box">
                            <div className="e_itemsleft_box">
                                <div className="left_box_top">
                                    <a >
                                        <img src="images/items/items_item2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="left_box_bottom">
                                    <a >
                                        <img src="images/items/items_item2.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="e_itemsright_box">
                                <div className="right_box_top">
                                    <a >
                                        <img src="images/items/items_item2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="right_box_bottom">
                                    <a >
                                        <img src="images/items/items_item2.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="xline"><div className="page-line"></div></div>
                        <div className="e_items">
                            <div className="items_title">
                                <img src="images/items/items_title1.jpg" alt="" />
                                    <div className="title_more">
                                        <a >
                                            <img src="images/nav/more.png" alt="" />
                                        </a>
                                    </div>
                            </div>
                            <div className="items_item_img">
                                <a >
                                    <img src="images/items/items_item3.jpg" alt="" />
                                </a>
                            </div>
                            <div className="xline"><div className="page-line"></div></div>
                            <div className="items_item_img">
                                <a >
                                    <img src="images/items/items_item3.jpg" alt="" />
                                </a>
                            </div>
                            <div className="xline"><div className="page-line"></div></div>
                            <div className="items_item_img">
                                <a >
                                    <img src="images/items/items_item3.jpg" alt="" />
                                </a>
                            </div>
                            <div className="xline"><div className="page-line"></div></div>
                            <div className="items_item_img">
                                <a >
                                    <img src="images/items/items_item3.jpg" alt="" />
                                </a>
                            </div>
                            <div className="xline"><div className="page-line"></div></div>
                            <div className="items_item_img">
                                <a >
                                    <img src="images/items/items_item3.jpg" alt="" />
                                </a>
                            </div>
                            <div className="xline"><div className="page-line"></div></div>
                            <div className="items_item_img">
                                <a >
                                    <img src="images/items/items_item3.jpg" alt="" />
                                </a>
                            </div>
                            <div className="xline"><div className="page-line"></div></div>
                            <div className="items_item_img">
                                <a >
                                    <img src="images/items/items_item3.jpg" alt="" />
                                </a>
                            </div>
                            <div className="xline"><div className="page-line"></div></div>
                            <div className="items_item_img">
                                <a >
                                    <img src="images/items/items_item3.jpg" alt="" />
                                </a>
                            </div>
                            <div className="xline"><div className="page-line"></div></div>
                            <div className="items_item_img">
                                <a >
                                    <img src="images/items/items_item3.jpg" alt="" />
                                </a>
                            </div>
                            <div className="xline"><div className="page-line"></div></div>
                            <div className="items_item_img">
                                <a >
                                    <img src="images/items/items_item3.jpg" alt="" />
                                </a>
                            </div>
                            <div className="xline"><div className="page-line"></div></div>
                            <div className="items_item_img">
                                <a >
                                    <img src="images/items/items_item3.jpg" alt="" />
                                </a>
                            </div>
                            <div className="xline"><div className="page-line"></div></div>
                            <div className="items_item_img">
                                <a >
                                    <img src="images/items/items_item3.jpg" alt="" />
                                </a>
                            </div>
                            <div className="xline"><div className="page-line"></div></div>
                        </div>
                        <div className="xline"><div className="page-line"></div></div>

                        <div className="e_items">
                            <div className="items_title">
                                <img src="images/items/items_title1.jpg" alt="" />
                                    <div className="title_more">
                                        <a >
                                            <img src="images/nav/more.png" alt="" />
                                        </a>
                                    </div>
                            </div>
                            <div className="items_item">
                                <a >
                                    <img src="images/items/items_item1.jpg" alt="" />
                                </a>
                            </div>
                            <div className="items_content">
                                <div className="items_content1">SodaPup 易拉罐漏食狗玩具 口感软弹洁牙护牙</div>
                                <div className="items_content2" >
                                    <i className="iconfont icon-yanjing" ></i>
                                    <i >8036</i>
                                    <span >|</span>
                                    01:29
                                </div>
                            </div>
                        </div>
                        <div className="xline"><div className="page-line"></div></div>
                        <div className="e_items">
                            <div className="items_title">
                                <img src="images/items/items_title1.jpg" alt="" />
                                    <div className="title_more">
                                        <a >
                                            <img src="images/nav/more.png" alt="" />
                                        </a>
                                    </div>
                            </div>
                            <div className="items_item">
                                <a >
                                    <img src="images/items/items_item1.jpg" alt="" />
                                </a>
                            </div>
                            <div className="items_content">
                                <div className="items_content1">SodaPup 易拉罐漏食狗玩具 口感软弹洁牙护牙</div>
                                <div className="items_content2" >
                                    <i className="iconfont icon-yanjing" ></i>
                                    <i >8036</i>
                                    <span >|</span>
                                    01:29
                                </div>
                            </div>
                        </div>
                        <div className="xline"><div className="page-line"></div></div>
                        <div className="e_items">
                            <div className="items_title">
                                <img src="images/items/items_title1.jpg" alt="" />
                                    <div className="title_more">
                                        <a >
                                            <img src="images/nav/more.png" alt=""/>
                                        </a>
                                    </div>
                            </div>
                            <div className="items_item">
                                <a >
                                    <img src="images/items/items_item1.jpg" alt=""/>
                                </a>
                            </div>
                            <div className="items_content">
                                <div className="items_content1">SodaPup 易拉罐漏食狗玩具 口感软弹洁牙护牙</div>
                                <div className="items_content2" >
                                    <i className="iconfont icon-yanjing"  ></i>
                                    <i >8036</i>
                                    <span >|</span>
                                    01:29
                                </div>
                            </div>
                        </div>
                        <div className="xline"><div className="page-line"></div></div>

                        <div>
                            <div>
                                <a >
                                    <img className='footer_img' src="images/eimg.jpg" alt="" />
                                </a>
                            </div>
                        </div>

                        <div className="footer" >
                            <div className="ft">
                                <span className="bt" title="触屏版">触屏版</span>
                                <span><a href="https://wap.epet.com/app.html">手机客户端</a></span>
                                <span><a href="https://wap.epet.com/AboutEpet.html">关于我们</a></span>
                                <span><a href="https://wap.epet.com/faq.html">联系我们</a></span>
                            </div>
                            <div className='footer_title'>© wap.epet.com 版权：重庆易宠科技有限公司</div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
      )
    }
 }