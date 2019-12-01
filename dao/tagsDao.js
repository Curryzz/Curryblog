var dbUtil = require('./DButil');


function insertTag(tag,ctime,utime,success) {
    var insertSql = "insert into tags (`tag`,`ctime`,`utime`) values (?,?,?)";

    var params = [tag,ctime,utime];

    var connection = dbUtil.createConnection();
    connection.connect();
    connection.query(insertSql,params,function (error,result) {
        if(error == null){
            success(result);
        }else{
            console.log(error);
        }
    })

}


function queryTag(tag,success) {
    var querySql = "select * from tags where tag = ?";

    var params = [tag];

    var connection = dbUtil.createConnection();
    connection.connect();
    connection.query(querySql,params,function (error,result) {
        if(error == null){
            success(result);
        }else{
            console.log(error);
        }
    })

}



module.exports.insertTag = insertTag;

module.exports.queryTag = queryTag;