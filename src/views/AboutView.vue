<script setup>
import { useCounterStore } from '@/stores/CounterStore'
let counter = useCounterStore()
</script>

<template>
  <div>
    <p>The current count is {{ counter.count }}.</p>
  </div>
</template>