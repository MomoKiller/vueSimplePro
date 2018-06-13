import Vue from 'vue'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

Vue.filter('date', function (val) {
  return moment(val).calendar()
})
// class filters {
//   date (val) {
//     return moment(val).calendar()
//   }
// }
// export {filters}
// export const formateDate = function (val) {
//   return moment(val).calendar()
// }
