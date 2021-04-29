<template>
  <div>
    <header>
      <h1>Username and Age</h1>
    </header>
    <active-user></active-user>
    <user-data></user-data>
  </div>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";
export default {
  components: {
    ActiveUser,
    UserData,
  },
  data() {
    return {
      users: [
        {
          username: "Ryan",
          age: "26",
        },
        {
          username: "Kayla",
          age: "25",
        },
        {
          username: "Raiden",
          age: "0",
        },
      ],
    };
  },
  methods: {
    addUser(username, age) {
      const newUser = {
        id: new Data().toISOString(),
        username,
        age,
      };
      this.users.push(newUser);
    },
    deleteUser(userId) {
      this.users = this.users.filter((user) => user.id !== userId);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Courier New", Courier, monospace;
}
body {
  margin: 0;
}
</style>