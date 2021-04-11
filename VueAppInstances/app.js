const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Become a Vue.js Ninja!',
            courseGoalB: 'Master Vue.js and build amazing apps!',
            // courseGoalB: '<h2>Master Vue.js and build amazing apps!</h2>',
            vueLink: 'https://vuejs.org/'
        }
    },
    // allows you to define functions that should execute when something 
    // happens. Methods takes an object with functions inside of it
    methods: {
        outputGoal() {
            const randNumber = Math.random();
            return randNumber < 0.5 ? this.courseGoalA : this.courseGoalB;
        }
    }
}).mount('#user-goal')