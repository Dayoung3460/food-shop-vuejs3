<template>
<div>
  <goals-list :goals="filteredGoals"></goals-list>
  <add-goal @add-goal="addGoal"></add-goal>
</div>
</template>

<script>
// import { ref } from 'vue'
import AddGoal from "@/components/AddGoal";
import GoalsList from "@/components/GoalsList";

export default {
  name: "CourseGoals",
  components: {AddGoal, GoalsList},
  data() {
    return {
      goals: []
    }
  },

  computed: {
    filteredGoals() {
      return this.goals.filter((goal) =>
          !goal.text.includes('Angular') && !goal.text.includes('React')
      )
    }
  },

  methods: {
    addGoal(text) {
      const newGoal = {
        id: new Date().toISOString(),
        text: text
      }
      this.goals.push(newGoal)
    }
  }
}
</script>

<style scoped>
.container {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  max-width: 25rem;
  margin: 3rem auto;
  padding: 1rem;
  border-radius: 12px;
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