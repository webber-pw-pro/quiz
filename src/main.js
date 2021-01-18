import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/scss/main.css'

export const eventEmitter = new Vue()

new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.directive('phone', {
  bind(el) {
    el.oninput = function(e) {
      if (!e.isTrusted) {
        return
      }

      const startFrom = 8 // С какой цифры начинается номер. Если указать 7, к маске будет добавляться плюс

      if (startFrom === 8) {
        var plus = ''
        var digit = '8'
      } else {
        var plus = '+'
        var digit = '7'
      }


      const x = this.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
      if (!x[2] && x[1] !== '') {
        this.value = x[1] === digit ? plus + x[1] : plus + digit + x[1]
      } else {
        this.value = plus + (!x[3] ? x[1] + x[2] : x[1] + ' (' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : ''))
      }
    }
  },
})
