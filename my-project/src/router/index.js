import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ImageInput from '@/components/ImageInput'
import Apage from '@/components/Apage'
import TestFilter from '@/components/TestFilter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/ImageInput',
      name: 'ImageInput',
      component: ImageInput
    }, {
      path: '/Apage',
      name: 'Apage',
      component: Apage
    }, {
      path: '/TestFilter',
      name: 'TestFilter',
      component: TestFilter
    }
  ]
})
