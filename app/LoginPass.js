import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router,Link,Route } from 'react-router-dom';
import './index.css';
import './css/weui.css';
import './css/main.css';


class LoginPass extends Component{
	constructor(props){
		super(props);
		this.state= { 
			phone: '',
			password: '',
			loginText: '登录',
			showErrors: false,
            showVis: 'hidden',
            isLogining: false
		};

		this.login = this.login.bind(this);
	}
	login(){
		this.setState(prevState =>({
			isLogining: !this.state.isLogining
		}));
	}
	render(){
		return (
			<div>
				<div className='login-img'></div>
				<form>
					<label className="weui-cells__title" htmlFor="phone">手机号</label>
					<div className="weui-cell">
						<input className="weui-input" type="text" placeholder="请输入手机号" id="phone" value={ this.state.phone } />
					</div>
					<div className="error-msg"></div>

					<label className="weui-cells__title" htmlFor="password">密码</label>
					<div className="weui-cell">
						<input className="weui-input" type="password" placeholder="请输入密码" value={this.state.password} id="password"/>
						<a className="forget-pass">忘记密码？</a>
					</div>
					<div className="error-msg"></div>

					<div className="weui-btn-area">
						<button className="weui-btn login-btn" type="button" onClick={this.login}>{this.state.isLogining ? '登录中' : '登录'}</button>
					</div>
					<div className="foot">
						<div className="dynamic-login"><Link to="/LoginCode">动态密码登录</Link></div>
						<div className="reg">还没有账号？<a>点击注册</a></div>
					</div>
				</form>
			</div>
		)
	}
}

export default LoginPass;