<template>
<button @click="updateMessage">Click me</button>
</template>

<script>
export default {
  name: "VueButton",

  emits: ['update'],

  methods: {
    updateMessage() {
      this.$emit('update')
    }
  }
}
</script>

<style scoped>

</style>