<template>
    <h2>{{hello}}</h2>
    <a v-link="{path :'/sign'}">注册</a>
    <router-view></router-view>
</template>
<script>
    export default{
        data () {
           return {
                hello:"hello"
            }
        }
    }
</script>