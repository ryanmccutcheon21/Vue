const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: ''
    }
  },
  computed: {
    fullName() {
      return this.name === '' || this.lastName === '' ? '' : `${this.name} ${this.lastName}`
    }
  },
  watch: {
    counter(val) {
      if (val > 50) {
        const that = this
        setTimeout(() => {
          that.counter = 0
        }, 2000)
      }
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value
    },
    add(num) {
      this.counter = this.counter + num
    },
    reduce(num) {
      this.counter = this.counter - num
    },
    resetInput() {
      this.name = ''
    }
  }
}).mount('#events')
