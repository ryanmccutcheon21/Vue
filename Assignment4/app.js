const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            pIsVisible: true,
            bgColor: ''
        }
    },
    methods: {
        toggle() {
            this.pIsVisible = !this.pIsVisible
        }
    },
    computed: {
        paraClasses() {
            return {
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                visible: this.pIsVisible,
                hidden: !this.pIsVisible
            }
        }
    }
}).mount('#assignment')