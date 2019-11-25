
var randomTags =  new Vue({
    el:'#random_tags',
    data:{
        tags:["sa","cjashc","csahch","cjasvbvb","skcj","nvjanv","ahvbasv","vjsavjs","shvhh","nbvajbv","sa","cjashc","csahch","cjasvbvb","skcj","nvjanv","ahvbasv","vjsavjs","shvhh","nbvajbv"]
    },
    computed: {
        randomColor:function () {
            return function () {
                var red = Math.floor(Math.random()*255);
                var green = Math.floor(Math.random()*255);
                var blue = Math.floor(Math.random()*255);
                return "rgb("+ red +", "+ green +", "+ blue +")";
            }
        },
        randomSize:function () {
            return function () {
                var size = (Math.random()*20 + 12) +'px';
                return size;
            }
        }
    },
    created:function () {

    }
})