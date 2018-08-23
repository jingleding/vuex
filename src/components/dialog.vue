<template>
    <div id="dialog">
        <div>我是一个弹窗哦</div>
        <button @click="$store.commit('showSwitch')">关闭</button>
    </div>
</template>
<script>
import {} from 'vuex'
export default {
}
</script>

<style>
#dialog{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 0, 0.5);
    z-index: 9;
}
</style>
