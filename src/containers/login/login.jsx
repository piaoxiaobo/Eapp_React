import React from 'react';
import './login.css'


export default class Login extends React.Component {
    render(){
      return(
          <div>
              <div className="login_header">
                  <div className="login_bg">
                      <div className="allBrand_titles" >
                          <div>
                              <a >
                          <span className="iconfont icon-return" ></span></a>
                          <span className="sp2s" >注册</span>
                  </div>
              </div>
              <div className="mlogo"></div>
              <div className="login">
                  <ul>
                      <li>
                          <a >普通登录</a>
                      <i></i>
                  </li>
                  <li>
                      <a  >手机动态密码登录</a>
                  <i></i>
              </li>
          </ul>
    </div>
    </div>
    </div>
        <div className="login_content">
            <div className="mfrom">
                <div className="mfrom_content">
                    <form method="post"  action="" >
                        <ul className="mform_ul">
                            <li>
                                <span className="iconfont icon-yonghu name_icon"></span>
                                <input type="text" placeholder="输入用户名"/>
                            </li>
                            <li>
                                <span className="iconfont icon-42 pwd_icon"></span>
                                <input type="password" placeholder="输入密码"/>
                            </li>
                        </ul>
                    </form>
                    <form method="post"  action="" v-show="isshow2">
                        <ul className="mform_ul">
                            <li>
                                <span className="iconfont icon-yonghu name_icon"></span>
                                <input type="text" placeholder="已注册的手机号" /></li>
                            <li>
                                <span className="iconfont icon-42 pwd_icon"></span>
                                <input type="text" placeholder="请输入图片内容" className="text" name="password"/>
                                    <span className="yzm"><img src="http://localhost:3000/captcha" alt="" /></span>
                            </li>
                            <li>
                                <span className="iconfont icon-42 pwd_icon"></span>
                                <input type="text" placeholder="动态密码" className="text" name="password" />
                                    <a  className="get_pass">短信已发送</a>
                                    <a  className="get_phonepass">获取动态密码</a>
                            </li>
                        </ul>
                    </form>
                    <div className="forget_pwd" ><a >忘记密码?</a></div>
                    <div>
                        <div className="login_btn" >登陆</div>
                    <div></div>
                    <div className="other-login">
                        <div className="other_title">合作网站登录</div>
                        <ul className="other_img">
                            <li>
                                <a >
                                    <img src="http://static.epetbar.com/mpet/images/login/login_ico4.png" alt=""/>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="http://static.epetbar.com/mpet/images/login/login_ico2.png" alt=""/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
      )
    }
 }