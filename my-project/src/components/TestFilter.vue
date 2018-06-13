<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <!-- <input v-focus> -->
    <ul class="todos">
      <li v-for="(todo,index) in todos" :key="index" :class="{'checked': todo.done}">
        <label>{{ index + 1}}.{{ todo.value }}</label>
        <time>{{ todo.created | date}}</time>
      </li>
    </ul>
    <a @click="say" class="a_btn">这是个按钮，不信试试</a>
    <!-- <a v-oppos>oppos!</a> -->
    <div v-demo="{ color: 'white', text: 'hello!'}"></div>
    <div v-for="(val,index) in list" v-imga="val.url" :key="index" class="img_list"></div>
  </div>
</template>

<style>
  .a_btn{
    display: block;
    height: 30px;
    line-height: 30px;
    width: 200px;
    background-color: #eeeeee;
    margin: 0 auto;
  }
  .img_list{
    width: 448px;
    height: 228px;
    float: left;
  }
</style>

<script>
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

export default {
  name: 'app',
  data () {
    return {
      title: 'vue-todos',
      todos: [
        {
          value: '这是一段测试的文本',
          done: false,
          created: Date.now()
        },
        {
          value: '这是另一段测试文本',
          done: true,
          created: Date.now() + 300000
        },
        {
          value: '最后的测试文本',
          done: false,
          created: Date.now() - 300000
        }
      ],
      list: [
        {
          url: 'http://pic4.40017.cn/scenery/destination/2017/01/19/10/tdIEZa_448x228_00.jpg'
        },
        {
          url: 'http://pic4.40017.cn/scenery/destination/2016/12/30/17/udvQ9Y_448x228_00.jpg'
        },
        {
          url: 'http://pic4.40017.cn/scenery/destination/2016/12/30/17/udvQ9Y_448x228_00.jpg'
        }
      ]
    }
  },
  methods: {
    say () {
      alert('这是个按钮')
    }
  }
}
</script>
