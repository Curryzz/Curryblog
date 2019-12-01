var fs = require('fs')

var globalConfig = {}

var conf = fs.readFileSync('./server.conf');

var confArr = conf.toString().split('\r\n');

for(var i = 0 ; i < confArr.length ; i++ ){

    globalConfig[confArr[i].split('=')[0]] = confArr[i].split('=')[1]

}

module.exports = globalConfig;