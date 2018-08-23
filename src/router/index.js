import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo from '@/components/demo'
import route1 from '@/components/route1'
import demoChild from '@/components/demoChild'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/demo',
      name: 'demo',
      component: demo,
      children: [
        {
          path: '/child',
          name: 'demoChild',
          component: demoChild
        }
      ]
    }, {
      path: '/1',
      name: 'route1',
      component: route1
    }
  ]
})
