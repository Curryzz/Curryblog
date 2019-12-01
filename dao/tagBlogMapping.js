var dbUtil = require('./DButil');

function insertTagBlogMapping(tagId,blogId,ctime,utime,success) {
    var insertSql = "insert into tag_blog_mapping (`tag_id`,`blog_id`,`ctime`,`utime`) values (?,?,?,?)";
    var params = [tagId,blogId,ctime,utime];

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

module.exports.insertTagBlogMapping = insertTagBlogMapping;