import React from 'react';
import './login.css'

import axios from 'axios'


export default class Login extends React.Component {
     constructor(props){
                 super(props);
                 this.state = {
                     tologins:false,
                     codes:false,
                     computeTime:0

                 };
         this.showPhLogin = this.showPhLogin.bind(this);
         this.showPwLogin = this.showPwLogin.bind(this);
         this.updateCapt = this.updateCapt.bind(this);
         this.login = this.login.bind(this);
         this.getcode = this.getcode.bind(this);
         this.tologin = this.tologin.bind(this);
     }

    tologin(){
         let tologins = this.state.tologins;
            tologins = !tologins;
         this.setState({tologins})
    }

    getcode(){
        let phone = this.refs.phone.value;

        if(!/^1\d{10}$/.test(phone)){
            alert('请输入合法手机')
            return
        }
        if(phone){
            this.refs.gocode.style.display='none';
            this.refs.sendcode.style.display='block';

            this.state.computeTime =30;
            let computeTime = this.state.computeTime;
            console.log(computeTime)
            this.setState({computeTime});

            const intervalId = setInterval(() => {
                computeTime--
                this.setState({computeTime});
                // 一旦时间为0, 清除定时器
                if(computeTime===0) {
                    clearInterval(intervalId)
                    axios.get('/sendcode?phone='+phone)
                        .then(function (response) {
                            let result = response.data;
                            console.log(result)
                            if(result.code === 0){
                                alert('验证码获取成功');
                                return
                            }else{
                                alert('验证码获取失败');
                                return
                            }

                        })
                    this.refs.gocode.style.display='block';
                    this.refs.sendcode.style.display='none';
                }

            }, 1000);


        }else{
            alert('请输入手机号')
        }

    }

    login(){
     let name = this.refs.name.value;
     let pwd = this.refs.pwd.value;
     let phone = this.refs.phone.value;
     let pwd2 = this.refs.pwd2.value;
     let pwd3 = this.refs.pwd3.value;

     if(!phone){
         if(!name) {
             alert('必须指定用户名');
             return
         } else if(!pwd) {
             alert('必须指定密码');
             return
         }

         axios.post('/login_pwd', {
             name,
             pwd
         })
             .then(function (response) {
                let result = response.data;
                console.log(result);
                 if(result.code === 0){
                     alert('登陆成功');
                     return
                 }
             })

     }else{
         if(!phone){
             alert('请输入手机号');
             return
         }else if(!pwd2){
             alert('请输入图形验证码');
             return
         }else if(!pwd3){
             alert('请输入短信验证码');
             return
         }

         axios.post('/login_sms', {
             phone,
             pwd2,
             pwd3
         })
             .then(function (response) {
                 let result = response.data;
                 console.log(result);
                 if(result.code === 0){
                     alert('登陆成功');
                     return
                 }
             })
     }


    }

    updateCapt(event){
        event.target.src='http://localhost:3000/captcha?time='+Date.now();
        axios.get('/captcha')
            .then(res => {
                console.log(res)
            });
    }

    showPhLogin(){
        this.refs.pwdlogin.style.display='none';
        this.refs.phonelogin.style.display='block'
        this.refs.pwsild.style.display='none'
        this.refs.phsild.style.display='block'
    }
    showPwLogin(){
        this.refs.pwdlogin.style.display='block';
        this.refs.phonelogin.style.display='none';
        this.refs.phsild.style.display='none';
        this.refs.pwsild.style.display='block';

    }

    render(){
         let tologins = this.state.tologins;
         let computeTime =this.state.computeTime
      return(
          <div>
              <div className="login_header">
                  <div className="login_bg">
                      <div className="allBrand_titles" >
                          <div>
                              <a>
                          <span className="iconfont icon-return" ></span></a>
                          <span className="sp2s" onClick={this.tologin}>{tologins?'登陆':'注册'}</span>
                  </div>
              </div>
              <div className="mlogo"></div>
              <div className="login">
                  <ul>
                      <li>
                          <a onClick={()=>this.showPwLogin()}>{tologins?'普通注册':'普通登录'}</a>
                      <i ref="pwsild" ></i>
                  </li>
                  <li>
                      <a  onClick={()=>this.showPhLogin()}>{tologins?'手机动态密码注册':'手机动态密码登录'}</a>
                  <i className='sildph' ref="phsild"></i>
              </li>
          </ul>
    </div>
    </div>
    </div>
        <div className="login_content">
            <div className="mfrom">
                <div className="mfrom_content">
                    <form method="post"  action="" ref="pwdlogin" >
                        <ul className="mform_ul">
                            <li>
                                <span className="iconfont icon-yonghu name_icon"></span>
                                <input type="text" placeholder="输入用户名" ref="name"/>
                            </li>
                            <li>
                                <span className="iconfont icon-42 pwd_icon"></span>
                                <input type="password" placeholder="输入密码" ref="pwd"/>
                            </li>
                        </ul>
                    </form>
                    <form method="post"  action="" className='hidenphone' ref='phonelogin'>
                        <ul className="mform_ul">
                            <li>
                                <span className="iconfont icon-yonghu name_icon"></span>
                                <input type="text" placeholder="已注册的手机号" ref="phone"/></li>
                            <li>
                                <span className="iconfont icon-42 pwd_icon"></span>
                                <input type="text" placeholder="请输入图片内容" className="text" name="password" ref="pwd2"/>
                                    <span className="yzm"><img ref="upcapt" onClick={this.updateCapt} src="http://localhost:3000/captcha" alt="" /></span>
                            </li>
                            <li>
                                <span className="iconfont icon-42 pwd_icon"></span>
                                <input type="text" placeholder="动态密码" className="text" name="password"  ref="pwd3"/>
                                    <a  className="get_pass" ref='sendcode'>已发送{computeTime}</a>
                                    <a  className="get_phonepass" ref='gocode' onClick={this.getcode}>获取动态密码</a>
                            </li>
                        </ul>
                    </form>
                    <div className="forget_pwd"><a>忘记密码?</a></div>
                    <div>
                        <div className="login_btn" onClick={this.login}>{tologins?'注册':'登陆'}</div>
                    <div className='botbox'></div>
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