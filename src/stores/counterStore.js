import { defineStore } from 'pinia'

export let useCounterStore = defineStore('counter', {
  // It's like data
  state() {
    return {
      count: 0
    }
  },

  // It's like methods
  actions: {
    increment() {
      if (this.count < 10) {
        return this.count++
      }
    }
  },

  // It's like computed property
  getters: {
    remaining() {
      return 10 - this.count
    }
  }
})
