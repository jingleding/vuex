<template>
    <div id="demo-chid">
        我是 demo 的子路由 {{ $route.query.id }}
        <router-link :to="{path: '/demo', query: {id: $route.query.id}}">点我回到parent</router-link>
    </div>
</template>
