import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router,Link,Route,browserHistory } from 'react-router';
import axios from 'axios';
import md5 from 'md5';
import './index.css';
// import './css/weui.css';
// import './css/main.css';


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
		this.handleChange = this.handleChange.bind(this);
		this.login = this.login.bind(this);
	}
	login(){
		var _this = this;
		this.setState(prevState =>({
			isLogining: !this.state.isLogining
		}));
		console.log("p:"+md5(this.state.phone));
		axios.post('http://localhost:20247/weixin/user/SigninPass',{
			phone: this.state.phone,
			password: md5(this.state.password).toUpperCase()
		})
		.then(function(response){
			var data = response.data;
			console.log('response:'+data.Msg);
			_this.setState(prevState =>({
				isLogining: !_this.state.isLogining
			}));

			if(data.Code == 10200){
				browserHistory.push('/orderlist');
			}
			else{
				alert(data.Msg);
			}
		})
		.catch(function(error){
			alert(error);
		});
	}
	handleChange(e){
		const name = e.target.name;
		this.setState({ 
			[name]:e.target.value 
		});
	}
	render(){
		return (
			<div>
				<div className='login-img'></div>
				<form>
					<label className="weui-cells__title" htmlFor="phone">手机号</label>
					<div className="weui-cell">
						<input className="weui-input" type="text" placeholder="请输入手机号" name="phone" value={ this.state.phone } onChange={this.handleChange} />
					</div>
					<div className="error-msg"></div>

					<label className="weui-cells__title" htmlFor="password">密码</label>
					<div className="weui-cell">
						<input className="weui-input" type="password" placeholder="请输入密码" value={this.state.password} name="password" onChange={this.handleChange} />
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