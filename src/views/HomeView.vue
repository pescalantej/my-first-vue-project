<script setup>
import { useStorage } from '@/composables/useStorage'

let food = useStorage('food', 'salad')
let age = useStorage('age', '37')
</script>

<template>
  <div>
    <p>What is your favorite food? <input type="text" v-model="food" /></p>
    <p>How old are you? <input type="text" v-model="age" /></p>
  </div>
</template>