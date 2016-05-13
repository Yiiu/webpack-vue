var vue = require("vue");
var VueRouter = require("vue-router")
var app = require("./components/app.vue")
var nav = require("./components/nav.vue")
vue.use(VueRouter)
// 定义组建
var sign = vue.extend({
    template: 
        "<div>sign</div>"+
            "<router-view></router-view>"+
        "</div>"
})
var Bar = vue.extend({
    template: 
        "<div>This is Bar!</div>"+
            "<h2>this is Bar</h2>"+
            "<router-view></router-view>"+
        "</div>"
})
var user = vue.extend({
    template:
        "<p>用户名是{{$route.params.userId}}</p>"
})
var App = vue.extend({})
var router = new VueRouter()
// 定义路由规则
router.map({
    // home
    "/" : {
        name: "app",
        component: app
    },
    "/sign" : {
        component: sign,
        // 在foo 下设置一个子路由
        subRoutes:{
            // /
            "/":{
                component:{
                    template:"<h2>zhuce</h2>"
                },
            },
            // foo/hello
            "/in":{
                name:"hello",
                component: nav
            }
        }
    },
    // bar
    "/bar" : {
        component: Bar
    },
    // 具名路由
    '/user/:userId': {
        name: 'user', // 给这条路径加上一个名字
        component: user
    }
})
// 开启路由功能
router.start(App, "#app")