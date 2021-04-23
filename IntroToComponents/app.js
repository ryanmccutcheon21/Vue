const app = Vue.createApp({
    data() {
        return {
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
    }
})

app.component('friend-contact', {
    template: `
    <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'Kayla',
                name: 'Kayla McCutcheon',
                phone: '9187065018',
                email: 'kayla@localhost.com',
            },
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }
})

app.mount('#app')