<template>
  <li>
    <h2>{{ username }}</h2>
    <h3>{{ age }}</h3>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
  },
  emits: ["delete"],
  data() {
    return {
      detailsAreVisible: false,
    };
  },
};
</script>
