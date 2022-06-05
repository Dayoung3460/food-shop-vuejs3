<template>
  <confirm-dialog v-if="forceConfirm" @cancel="cancelChange" @confirm="confirmChange"></confirm-dialog>
  <li>
  <h2>{{ modeName }}</h2>
  <button @click="deactivate">Deactivate</button>
</li>
</template>

<script>
import ConfirmDialog from "@/components/ConfirmDialog";

export default {
  name: "AdminMode",

  props: ['modeName'],
  emits: ['deactivate'],
  components: {
    ConfirmDialog
  },

  data() {
    return {
      forceConfirm: false,
    };
  },
  methods: {
    deactivate() {
      this.forceConfirm = true;
    },
    cancelChange() {
      this.forceConfirm = false;
    },
    confirmChange() {
      this.$emit("deactivate");
    },
  },
}
</script>

<style scoped>
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