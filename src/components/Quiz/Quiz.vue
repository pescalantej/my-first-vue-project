<script setup>
import QuizContent from '@/components/Quiz/QuizContent.vue'
import QuizFooter from '@/components/Quiz/QuizFooter.vue'
import QuizHeader from '@/components/Quiz/QuizHeader.vue'
import { provide } from 'vue'

let props = defineProps({ quiz: Object })

provide('quiz', props.quiz)
</script>

<template>
  <main>
    <QuizHeader />

    <QuizContent />

    <QuizFooter />
  </main>
</template>