// const btn = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');


// function addGoal() {
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValue;
//     listEl.append(listItemEl);
//     inputEl.value = '';
// }

// btn.addEventListener('click', addGoal);

Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    // another way to write above data fucntion is data: function() {}
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app');