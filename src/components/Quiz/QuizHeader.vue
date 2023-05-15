<script setup>
import { state } from '@/stores/quizStore.js'
</script>

<template>
  <header>
    <h1>{{ state.name }}</h1>

    <p>Read carefully the questions</p>
  </header>
</template>

<style scoped>
header {
  border: 1px solid white;
}
</style>