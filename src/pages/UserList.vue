<template>
  <div class="container">
    <ul>
      <li v-for="user in loadedUsers" :key="user.id">
        {{ user.name }}
      </li>
    </ul>

    <form @submit.prevent="createUser">
      <div>
        <label for="username">Username</label>
        <input type="text" id="username" v-model="enteredName" />
      </div>
      <button>Add User</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "UserList",

  data() {
    return {
      enteredName: ''
    }

  },

  computed: {
    loadedUsers() {
      return this.$store.getters.users
    }
  },

  methods: {
    createUser() {
      this.$store.dispatch("addUser", { name: this.enteredName });
      this.enteredName = '';
    },
  },
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

form {
  text-align: center;
}
label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
input {
  font: inherit;
  display: block;
  width: 100%;
  margin-bottom: 0.5rem;
}
button {
  font: inherit;
  background-color: #3a003a;
  border: 1px solid #3a003a;
  color: white;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  border-radius: 30px;
}
button:hover,
button:active {
  background-color: #700a70;
  border-color: #700a70;
}
</style>