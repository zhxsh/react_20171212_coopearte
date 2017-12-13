import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/weui.css';
import './css/main.css';

class Root extends Component{
	constructor(props){
		super(props);

	}
	render(){
		return (
			<div>
				<div className='login-img'></div>
				<form>
					<label className="weui-cells__title" htmlFor="phone">手机号</label>
					<div className="weui-cell">
						<input className="weui-input" type="text" placeholder="请输入手机号" id="phone" />
					</div>
				</form>
			</div>
		)
	}
}


export default Root;