const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            taskValue: '',
            show: true
        }
    },
    computed: {
        buttonCaption() {
            return this.show ? 'Hide List' : 'Show List'
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.taskValue)
        },
        toggleShow() {
            this.show = !this.show
        }
    }
}).mount('#assignment')