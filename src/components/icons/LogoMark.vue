<script setup>
defineProps({
  color: { type: String, default: '#0a0a0a' }
})
</script>

<template>
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <circle cx="9" cy="9" r="8.25" :stroke="color" stroke-width="1.5" />
    <path d="M3.5 10.5c0 0 1.5-3 5.5-3s5.5 3 5.5 3" :stroke="color" stroke-width="1.5" stroke-linecap="round" />
    <circle cx="5.5" cy="12" r="1.25" :fill="color" />
    <circle cx="12.5" cy="12" r="1.25" :fill="color" />
  </svg>
</template>
