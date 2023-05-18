import { defineStore } from 'pinia'

export let useTeamStore = defineStore('team', {
  // Here we define the states, actions and getters.
  // The way how defined state is a kind of standard but you could use other ways
  state: () => ({
    name: '',
    spots: 0,
    members: []
  }),
  actions: {
    // With fill we fill the state with the json file content.
    async fill() {
      let r = await import('@/team.json')
      this.$state = r.default
    },
    grow(spots) {
      this.spots = spots
    }
  },

  getters: {
    spotsRemaining() {
      return this.spots - this.members.length
    }
  }
})
