<template>
  {{ message }}
  <Button @update="update"></Button>
  <button @click="toggleBox">Toggle Box</button>
  <transition name="box-fade">
    <div class="box" v-if="isVisible">
      <h2>toggle visible</h2>
    </div>
  </transition>
  <div>
    <button>
      <router-link to="/">WelcomeScreen</router-link>
    </button>
    <button>
      <router-link to="/users">Users</router-link>
    </button>
  </div>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>

  <admin-center></admin-center>

<!-- composition api-->
  <hr/>
  <p>Using Composition API</p>
  <course-goals></course-goals>
</template>

<script>
import Button from './components/VueButton'
import AdminCenter from "@/components/AdminCenter";
import CourseGoals from '@/components/CourseGoals'

export default {
  name: 'App',
  components: {
    Button,
    AdminCenter,
    CourseGoals
  },

  data() {
    return {
      message: 'vue3',
      isVisible: true
    }
  },

  methods: {
    toggleBox() {
      this.isVisible = !this.isVisible
    },

    update() {
      this.message = 'changed message'
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.box {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 2rem;
}

.box-fade-enter-from,
.box-fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.box-fade-enter-active,
.box-fade-leave-active {
  transition: all 0.3s ease;
}

.box-fade-enter-to,
.box-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.route-enter-active,
.route-leave-active {
  transition: all 0.3s ease;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
