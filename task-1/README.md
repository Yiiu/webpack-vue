# 笔记1
## vue 路由的基本用法
html使用**v-link**进行导航,基本用法如下：
```html
<div id="app">
    <p>
        <a v-link="{ path : '/foo'}"></a>
    </p>
    <!-- 路由外链，路由的数据插入在这里面 -->
    <router-view></router-view>
    <!-- 它是一个顶级外链。它会渲染一个和顶级路由匹配的组件 -->
</div>
```
使用Javascript配合：
``` javascript
// 定义组件
var Foo = vue.extend({
    template: "<p>This is foo!</p>"
})
// 创建一个路由实例
var router = new VueRouter();
// 可以传入配置参数进行定制
router.map({
    "/foo" : {
        component: Foo
    }
})
//  启动应用，路由器会创建一个App实例
router.start(App, "#app")
```
在此，一个简单的路由功能就完成啦。快来试一试吧

## 嵌套路由
就以上面的为例，组件里面也是可以嵌套router-view的，我们只需要在组件中嵌套**router-view**就可以了,我们修改上面的js代码为：
``` javascript
var Foo = vue.extend({
  template:
    '<div class="foo">' +
      '<h2>This is Foo!</h2>' +
      '<router-view></router-view>' + // <- 嵌套的外链
    '</div>'
})
```
渲染相应的组建：
``` html
router.map({
    '/foo' : {
    component: Foo,
    // 在/foo下设置一个子路由
    subRoutes: {
        "bar" : {
            // 当匹配到/foo/bar时，会在Foo's <router-view>内渲染
            component: Bar
        }
    }
}
})