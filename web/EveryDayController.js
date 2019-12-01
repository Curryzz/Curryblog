
var everyDayDao = require('../dao/EveryDayDao');
var timeUtil = require('../util/timeUtil');
var RespUtil = require('../util/RespUtil');
var path = new Map();

function editEveryDay(request,respones) {
    request.on('data',function (data) {
        everyDayDao.insertEveryDay(data.toString().trim(),timeUtil.getNow(),function (result) {
            respones.writeHead(200);
            respones.write(RespUtil.writeResult("0","添加成功",null));
            respones.end();
        })
    })
}
path.set('/editEveryDay',editEveryDay);



function queryEveryDay(request,respones) {
    everyDayDao.queryEveryDay(function (result) {
        respones.writeHead(200);
        respones.write(RespUtil.writeResult("0","添加成功",result));
        respones.end();
    })
}
path.set('/queryEveryDay',queryEveryDay);



module.exports.path = path;