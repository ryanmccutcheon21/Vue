const app = Vue.createApp({
    data() {
        return {
            firstName: '',
            lastName: '',
            confirmedLastName: ''
        }
    },
    methods: {
        alert() {
            alert('Button clicked!')
        },
        updateFirstName(event) {
            this.firstName = event.target.value
        },
        updateLastName(event) {
            this.lastName = event.target.value
        },
        confirmedLastName() {
            this.confirmedLastName = this.lastName
        }
    }
}).mount('#assignment')