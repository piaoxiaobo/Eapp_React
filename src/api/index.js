/**
 * Created by Bianrongcheng on 2018
 * 接口请求函数的模块
 */

import ajax from './ajax.js';
// const PXB ='http://localhost:3000';

// [1、获取E宠主页数据]
export const reqEAPP = () =>ajax('/api/newindex');

// [2、获取E宠分类]
export const reqCLASSIFY = () =>ajax('/api/classify');

// [3、获取E宠轮播]
export const reqCAROUSEL = () =>ajax('/api/carousel');

// [4、获取E宠品牌数据]
export const reqBRAND = () =>ajax('/api/brand');

// [4、获取E宠品牌数据]
export const reqALLBRAND = () =>ajax('/api/allbrand');

// [5、获取一次性验证码]
export const reqCaptcha = () => ajax('/api/captcha');

// [6、用户名密码登陆]
export const loginPwd = ({name, pwd}) => ajax('/api/login_pwd', {name, pwd}, 'POST');

// [7、发送短信验证码]
export const sendCode = (phone) => ajax('/api/sendcode', {phone});

// [8、手机号验证码登陆]
export const loginSms = ({phone, code,captcha}) => ajax('/api/login_sms', {phone, code,captcha}, 'POST');

// [9、根据会话获取用户信息]
export const reqUserInfo = () => ajax('/api/userinfo');

