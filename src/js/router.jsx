'use strict';

import React from 'react';
import ReactDOM from 'react-dom/server';
import { match } from 'react-router'
import { RouterContext } from 'react-router'
 
import routes from './routes.jsx';
 
export default function(req, res) {
    match({ routes, location:req.url }, (error, redirectLocation, renderProps) => {
    	console.log('server render to String');
        res.render("index.handlebars", {
            markup: ReactDOM.renderToString(<RouterContext {...renderProps} />)
        });
    });
}