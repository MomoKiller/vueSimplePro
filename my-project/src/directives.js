import Vue from 'vue'

// 注册全局自定义指令
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

// 注册局部指令
// directive: {
//     focus: {
//         inserted: function (el) {
//             el.focus();
//         }
//     }
// }

// -----不能用------------
Vue.directive('oppos', {
  inserted: function (el) {
    el.attr('title', '还有天理嘛，还有王法嘛？')
  }
})

Vue.directive('demo', {
  function (el, binding) {
    console.log(binding.value.color)
    console.log(binding.value.text)
  }
})

// -----------谷歌图片加载指针-----------------
Vue.directive('imga', {
  inserted: function (el, binding) {
    var color = Math.floor(Math.random() * 1000000)
    el.style.backgroundColor = '#' + color
    var img = new Image()
    img.src = binding.vue
    // img.onload = function () {
    //   el.style.backgroundImage = 'url(' + binding.value + ')'
    // }
    el.style.backgroundImage = 'url(' + binding.value + ')'
  }
})
