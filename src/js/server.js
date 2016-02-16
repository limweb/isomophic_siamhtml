'use strict';

import path from 'path';
import express from 'express';
import exphbs from 'express-handlebars';
import favicon from 'serve-favicon';
import router from './router.jsx';
 
var app = express();
app.use(favicon(path.join(__dirname, '../../public/images/favicon.ico')));
app.use(express.static('public'));

app.use(router);  

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '../templates'));
 
var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening at http://%s:%s', host, port);
});

var React = require('react');
import ReactDOMServer from 'react-dom/server';
import App from './components/App.jsx';
// var App = React.createClass({
//     render: function () {
//         return (
//             <div>
//                 Hello, SiamHTML ES5!
//             </div>
//         );
//     }
// });

// class App extends React.Component {
 
//     render() {
//         return (
//             <div>
//                 Hello, SiamHTML ES6!
//             </div>
//         );
//    }
// }
// 
// 


// app.get('*', function(req, res){
// 	console.log('render in server');
//     // res.render("index.handlebars", {
//     //     markup: 'Hello, SiamHTML String!'
//     // });

//      res.render("index.handlebars", {
//         markup: ReactDOMServer.renderToString(React.createElement(App))
//     });
// });