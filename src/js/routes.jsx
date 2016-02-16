'use strict';

import React from 'react';
 
// โหลดความสามารถของ react-router มาใช้งาน
import { Route, IndexRoute } from 'react-router';
 
// โหลด component ต่างๆ
import App from './components/App.jsx';
// import Home from './components/Home.jsx';
class Home extends React.Component {
 
    render() {
        return (
            <div>
                Hello, SiamHTML ES6 Home.jsx!
            </div>
        );
   }
}
 
// import About from './components/About.jsx';
 class About extends React.Component {
 
    render() {
        return (
            <div>
                Hello, SiamHTML ES6 About.jsx!
            </div>
        );
   }
}
 
// ระบุว่า path นี้จะถูก handle ด้วย component ไหน
export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
    </Route>
);