<script setup>
import QuizContent from '@/components/Quiz/QuizContent.vue'
import QuizFooter from '@/components/Quiz/QuizFooter.vue'
import QuizHeader from '@/components/Quiz/QuizHeader.vue'
import { state } from '@/stores/quizStore.js'
</script>

<template>
  <main>
    <QuizHeader />

    <QuizContent />

    <QuizFooter />
  </main>
</template>