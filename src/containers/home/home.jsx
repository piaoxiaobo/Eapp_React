import React from 'react';
import axios from 'axios'
import './css/index.css'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import BScroll from 'better-scroll';


export default class Home extends React.Component {
     constructor(props){
                 super(props);
                 this.state = {
                    home:{}
         }
         this.close = this.close.bind(this)
     }

   /* componentDidUpdate(){

        new Swiper(".swiper-container", {
            loop: true,
            autoplay: true,
            pagination: {
                el: '.swiper-pagination',
            }
        });

    }*/
    componentDidMount() {

        axios.get('/newindex')
            .then(res => {
               const home = res.data.data;
               console.log(home);
                this.setState({home});
            });

        new BScroll('.pro_warp', {
            click: true,
            scrollX: true,
        });

    }

    close(){
        this.refs.titletop.style.display='none';
        this.refs.indexwrap.style.margin='23px auto 0';
    }
    render(){
      let navs = this.state.home.navigation;
      let xrzx = this.state.home.xrzx;
      let menus = this.state.home.menus;
      let goods = this.state.home.goods;
      let carousel = this.state.home.carousel;
      let pics = this.state.home.pinpaitemai;
      if(!menus&&!navs&&!goods&&!carousel&&!xrzx&&!pics){
          menus=[];
          navs=[];
          goods=[];
          carousel=[];
          xrzx={};
      }

      return(
        <div>
            <div className="index_wrap">
                <div id="header">
                    {/*头部广告*/}
                    <div  ref='titletop'>
                        <div className="overflow xiaozaiApp">
                            <div className="overflow rela">
                               <span className="clsoe_btn">
                                <img id="close_down_bar" onClick={this.close}
                                     src="images/app/close_down_bar.png" alt="xiaozaiApp" />
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
                                            {
                                                menus.map((menu,index)=>{
                                                   return <li className="dscroll-li" key={index}><a ><span><span className="rela">{menu.menu_name}</span><i></i></span></a></li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*首页内容*/}
                <div className="header_box"></div>
                <div className="index_content" ref='indexwrap'>
                    {/*轮播图*/}
                    <div className="swiper-container">
                        <div className="swiper-wrapper" >
                            {
                                carousel.map((item,index) =>{
                                   return <div className="swiper-slide" key={index}><img src={item.image} alt=""/></div>

                                })
                            }
                        </div>
                    <div className="swiper-pagination"></div>
                </div>
                    {/*导航*/}
                    <div>
                        <div className="columnnavdiv">
                            <div>
                                <ul className="nav_list">
                                    {
                                        navs.map((nav,index)=>{
                                            return <li className="nav_list_item" key={index}>
                                                <a ><img src={nav.image} alt="" /></a>
                                            </li>
                                        })
                                    }

                                </ul>
                            </div>
                        </div>
                        <div className="banner_item">
                            <a >
                                <img src={xrzx.imgurl} alt="banner" />
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
                                <div className="pro_warp">
                                    <div className="pro_items">
                                        {
                                            goods.map((good,index)=>{
                                                return  <div className="pro_block" key={index}>
                                                    <a >
                                                        <div className="block_img">
                                                            <img src={good.image} alt="" />
                                                        </div>
                                                        <div className="cred">
                                                            <span className="ft12">￥</span>
                                                            <span className="ft17">{good.sale_price}</span>
                                                        </div>
                                                        <p className="ftc">{good.little_price}</p>
                                                    </a>
                                                </div>
                                            })
                                        }
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