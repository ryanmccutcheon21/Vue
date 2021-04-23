const app = Vue.createApp({
    data() {
        return {
            detailsAreVisible: false,
            friends: [
                {
                    id: 'Kayla',
                    name: 'Kayla McCutcheon',
                    phone: '9187065018',
                    email: 'kayla@localhost.com'
                },
                {
                    id: 'Raiden',
                    name: 'Raiden McCutcheon',
                    phone: '9187605018',
                    email: 'raiden@localhost.com'
                },
            ]
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }
}).mount('#app')