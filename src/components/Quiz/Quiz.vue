<script setup>
import QuizContent from '@/components/Quiz/QuizContent.vue'
import QuizFooter from '@/components/Quiz/QuizFooter.vue'
import QuizHeader from '@/components/Quiz/QuizHeader.vue'

defineProps({ quiz: Object })
</script>

<template>
  <main>
    <QuizHeader />

    <QuizContent />

    <QuizFooter :quiz="quiz" />
  </main>
</template>