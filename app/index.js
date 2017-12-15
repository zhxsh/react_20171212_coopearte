import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route,IndexRoute,Link,hashHistory } from 'react-router';
// import { BrowserRouter, Route,Switch } from 'react-router-dom';
// import { Router, Route,BrowserRouter,Switch } from 'react-router-dom';

import Root from './root';
import LoginPass from './LoginPass';
import LoginCode from './LoginCode';
import Clock from './components/Clock';
import Clock1 from './components/Clock1';


ReactDOM.render((
	<Router historty="hashHistory">
		<Route Path="/" component={ Clock } >
			<IndexRoute component={ Clock1 } />
			<Route Path="LoginPass" component={ LoginPass } />
			<Route Path="LoginCode" component={ LoginCode } />
		</Route>
	</Router>
	),document.getElementById('root')
);