<template>
  <div class="hello">
    <router-view></router-view>
    <h1>{{ ages }}</h1>
    <router-link :to="linkClickNum($route.query.id)">点我去child</router-link>
    <input type="text" v-model="ages">
    <h3>{{ $route.query.name}}>>>>>>></h3>
    <button @click="setAges">点我哦</button>
    <button @click="dialogShow(1)">打开弹窗{{ show }}</button>
    <button @click="dialogShow(0)">赶点我吗＝＝＝＝{{ info }}</button>
    <Dialog v-show="show"></Dialog>
  </div>
</template>

<script>
import {} from 'vuex'
import Dialog from './dialog.vue'
export default {
  components: {
    Dialog
  },
  name: 'HelloWorld',
  computed: {
    ages () {
        return this.$store.getters.getBigAges
    },
    show () {
        return this.$store.getters.show
    },
    info () {
        return this.$store.getters.info
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    setAges () {
      this.$store.dispatch('getAges')
    },
    dialogShow (type) {
      this.$store.dispatch('showSwitch', {'type': type})
    },
    linkClickNum (id) {
      id = id || 0
      return {path: '/child', query: {'id': +id + 1}}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
