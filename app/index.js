import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route,IndexRoute,Link,hashHistory,browserHistory } from 'react-router';
import axios from 'axios';
// import { BrowserRouter, Route,Switch } from 'react-router-dom';
// import { Router, Route,BrowserRouter,Switch } from 'react-router-dom';

import Root from './root';
import LoginPass from './LoginPass';
import LoginCode from './LoginCode';
import OrderList from './OrderList';
import Clock from './components/Clock';
import Clock1 from './components/Clock1';

const serverAddress = 'http://localhost:20247';
axios.default.baseURL = serverAddress;

ReactDOM.render((
	<Router history= { browserHistory }>
		<Route path="/" component={ Root } >
			<IndexRoute component={ LoginPass } />
			<Route path="LoginPass" component={ LoginPass } />
			<Route path="LoginCode" component={ LoginCode } />
			<Route path="OrderList" component={ OrderList } />
		</Route>
	</Router>
	),document.getElementById('root')
);