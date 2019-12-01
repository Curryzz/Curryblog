var fs = require('fs');
var globalConfig = require('./config');
var loader = require('./loader');
var express = require('express');

var app = new express();
app.use(express.static('./page/'));
console.log(loader)
app.post('/editEveryDay',loader.get("/editEveryDay"));
app.get('/queryEveryDay',loader.get("/queryEveryDay"));

app.post('/editBlog',loader.get("/editBlog"));
app.get('/queryBlogByPage',loader.get("/queryBlogByPage"));

app.listen(globalConfig.port,function () {
    console.log('服务已启动')
})

