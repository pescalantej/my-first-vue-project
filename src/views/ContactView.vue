<script setup>
import { useFlash } from '@/composables/Useflash.js'

let { flash } = useFlash()
</script>

<template>
  <div>
    <p>
      <button @click="flash('Hello World', 'It Works On The Contact Page!', 'error')">
        Click Me
      </button>
    </p>
  </div>
</template>
