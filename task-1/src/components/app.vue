<template>
    <div>{{hello}}</div>
    <a v-link="{path :'/hello'}">hello</a>
    <router-view></router-view>
</template>
<script>
    export default{
        data () {
           return {
                hello:"这里是嵌套路由！！！1"
            }
        }
    }
</script>