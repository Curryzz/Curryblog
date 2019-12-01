var everyDay = new Vue({
    el:'#every_day',
    data:{
        content:"asjhcjacjashkjchaskjhckjashckjas"
    },
    computed:{
        getContent:function () {
            return this.content;
        }
    },
    created:function () {
        axios({
            method:"GET",
            url:"/queryEveryDay",
        }).then(function (resp) {
            everyDay.content = resp.data.data[0].content
            console.log(resp)
        }).catch(function (error) {
            console.log("请求失败！")
        })
    }
});

var articleList = new Vue({
    el:"#article_list",
    data:{
        page:1,
        pageSize:5,
        articleList:[
            {
                title:"使用Nginx反向代理部署laravel和history模式的Vue项目",
                content:"我们以在我本地的开发环境为例，windows7+nginx+Vue+Laravel5，假设我想使用的域名是zh30.com。想达成的效果：我们想直接访问时使用Vue开发的单页面应用index.html，做为我们的前台交互，且在Vue中使用history路由模式。后台和接口使用laravel框架进行开发，所以想使用zh30.com/admin 来访问后台管理，接口交互想使用zh30.com/api/xxx。第一步，本地解析hosts，zh30.com指向到127.0...",
                date:"2017-11-30",
                views:"101",
                tags:"laravel nginx proxy vue",
                id :"1",
                link:""
            }
        ]
    },
    computed:{
        getPage:function () {
            return function (page,pageSize) {
                axios({
                    method: "GET",
                    url:"/queryBlogByPage?page="+(page-1)+"&pageSize="+pageSize
                }).then(function (resp) {
                    var result = resp.data.data;
                    var list = [];
                    for (var i = 0 ; i < result.length ; i++){
                        var temp = {};
                        temp.title = result[i].title;
                        temp.content = result[i].content;
                        temp.date = result[i].date;
                        temp.views = result[i].views;
                        temp.tags = result[i].tags;
                        temp.id = result[i].id;
                        temp.link = "" + result[i].id;
                        list.push(temp);
                    }
                    articleList.articleList = list;
                    console.log(resp)
                }).catch(function (error) {
                    console.log("请求失败！")
                })
            }
        }
    },
    created:function () {
        this.getPage(this.page,this.pageSize)
    }

})