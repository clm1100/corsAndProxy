var express = require('express');
var proxy = require('http-proxy-middleware');
var app = express();
app.use(express.static('./public'));
 
// app.use('/api', proxy({ 
//     target: 'http://localhost:5000',
//     changeOrigin: false,
//     pathRewrite:{
//         "^/api":""
//     }
// }));
app.listen(3000);