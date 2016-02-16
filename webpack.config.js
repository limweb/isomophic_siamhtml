'use strict';

var path = require('path');
var webpack = require('webpack');
 
module.exports = {
 
    // ให้ webpack เริ่มรวมโค้ดที่ไฟล์ client.js
    entry: path.resolve(__dirname, 'src/js/client.js'),
 
    // แล้วตั้งชื่อไฟล์ output ว่า bundle.js
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'bundle.js'
    },
 
    // อ่านไฟล์นามสกุล .js, .jsx ด้วย Babel
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};