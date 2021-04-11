const app = Vue.createApp({
    data() {
        return {
            age: 26,
            name: 'Ryan McCutcheon',
            img: 'https://images.unsplash.com/photo-1521106581851-da5b6457f674?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZWFzdGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
        }
    },
    methods: {
        older() {
            return this.age + 5;
        },
        randNumber() {
            return Math.random();
        }
    }
}).mount('#assignment')