'use strict';
// โหลด React มาใช้งาน
import React from 'react'
import ReactDOM from 'react-dom';
 
// โหลดความสามารถของ react-router มาใช้งาน
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
 
// โหลด route ต่างๆ ที่เราได้กำหนดไว้
import routes from './routes.jsx';
 
// render ลงไปใน DOM ที่ #content
ReactDOM.render(<Router routes={routes} history={createBrowserHistory()} />,document.getElementById('content'));