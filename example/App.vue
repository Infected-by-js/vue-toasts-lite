<script setup lang="ts">
import { ref } from 'vue'
import { toast, ToastsLiteProvider } from '@infectedbyjs/vue-toasts-lite'


const showToast = (type: 'success' | 'error' | 'loading' | 'warn') => {
  toast.add({
    type,
    message: `This is a ${type} toast`,
    duration: 3000
  })
}
</script>

<template>
  <div class="container">
    <h1>Vue Toasts Lite Example</h1>
    <div class="buttons">
      <button @click="showToast('success')">Success Toast</button>
      <button @click="showToast('error')">Error Toast</button>
      <button @click="showToast('loading')">Loading Toast</button>
      <button @click="showToast('warn')">Warning Toast</button>
    </div>
    <ToastsLiteProvider />
  </div>
</template>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background: #4CAF50;
  color: white;
  cursor: pointer;
  transition: opacity 0.2s;
}

button:hover {
  opacity: 0.8;
}
</style> 