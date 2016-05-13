
<template>
    <nav transition="expand">
        <h1>{{hello}}</h1>
        <p>
            <!-- 使用指令 v-link 进行导航 -->
            <h1>hello in {{$route.path}}</h1>
        </p>
        <router-view></router-view>
    </nav>
</template>