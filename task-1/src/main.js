var vue = require("vue");
var VueRouter = require("vue-router")
var app = require("./components/app.vue")
vue.use(VueRouter)
// 定义组建
var Foo = vue.extend({
    template: 
        "<div>This is foo!</div>"+
            "<router-view></router-view>"+
        "</div>"
})
var Bar = vue.extend({
    template: 
        "<div>This is foo!</div>"+
            "<h2>this is Bar</h2>"+
            "<router-view></router-view>"+
        "</div>"
})
var hello = vue.extend({
    template: 
            "<h2>this is foo hello</h2>"

})
var App = vue.extend({})
var router = new VueRouter()
// 定义路由规则
router.map({
    // foo
    "/foo" : {
        component: Foo,
        // 在foo 下设置一个子路由
        subRoutes:{
            // /
            "/": {
                component:{
                    template:"<h2>this is foo</h2>"
                },
            },
            // foo/hello
            "/hello":{
                component: app
            }
        }
    },
    // bar
    "/bar" : {
        component: Bar
    }
})
// 开启路由功能
router.start(App, "#app")