import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'react-router-dom';
import './index.css';
import './css/weui.css';
import './css/main.css';


class LoginCode extends Component{
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
				<h1>路由</h1>
			</div>
		)
	}
}

export default LoginCode;