const app = Vue.createApp({
    data() {
        return {
            result: 0
        }
    },
    computed: {
        add1() {
           return this.result++
        },
        add5() {
           return this.result += 5
        },
        whereAt() {
            return this.result < 37 ? 'Not there yet' : 'Too much!'
        }
    },
    watch: {
        result(val) {
          if (val >= 37) {
            const that = this
            setTimeout(() => {
              that.result = 0
            }, 5000)
          }
        }
      }
}).mount('#assignment')