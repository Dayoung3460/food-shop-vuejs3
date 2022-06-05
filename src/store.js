import {createStore} from "vuex";

export const store = createStore({
  state() {
    return {
      users: []
    }
  },

  mutations: {
    addUser(state, payload) {
      const newUser = {
        id: new Date().toISOString(),
        name: payload.name
      }
      state.users.push(newUser)
    }
  },

  actions: {
    addUser(context, payload) {
      context.commit('addUser', payload)
    }
  },

  getters: {
    users(state) {
      return state.users
    }
  }
})
