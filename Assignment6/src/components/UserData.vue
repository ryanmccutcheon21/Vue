<template>
  <form action="" @submit.prevent="submitData">
    <div>
      <label for="username">Username</label>
      <input type="text" v-model="userName" name="username" id="username" />
    </div>
    <div>
      <label for="age">Age</label>
      <input type="number" name="age" id="age" v-model="enteredAge" />
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-user"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit(this.enteredName, this.enteredAge);
    },
  },
};
</script>