<template>
  <teleport to="body">
    <div>
      <div class="backdrop"></div>
      <dialog open>
        <header>
          <h2>Are you sure?</h2>
        </header>
        <section>
          <p>Do you want to proceed with this operation?</p>
        </section>
        <menu>
          <button @click="cancel">No</button>
          <button @click="confirm">Yes</button>
        </menu>
      </dialog>
    </div>
  </teleport>

</template>

<script>
export default {
  name: "ConfirmDialog",

  emits: ["cancel", "confirm"],
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    confirm() {
      this.$emit("confirm");
    },
  },
}
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}
dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}
header {
  background-color: #3a0061;
  color: white;
  width: 100%;
  padding: 1rem;
}
header h2 {
  margin: 0;
}
section {
  padding: 1rem;
}
menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

button {
  background-color: #1f001f;
  border: 1px solid #1f001f;
  color: white;
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  margin-right: 1rem;
}
button:hover,
button:active {
  background-color: #750a75;
  border-color: #750a75;
}

</style>