<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import WhatsAppIcon from './icons/WhatsAppIcon.vue'

const messagesByPath = {
  '/': "Hello! I visited your website and I'm interested in a vehicle.",
  '/inventory': "Hello! I'm browsing your inventory.",
  '/services': "Hello! I visited your Services page and I'd like to learn more.",
  '/about': "Hello! I visited your About page and I'd like to learn more."
}

const route = useRoute()
const href = computed(() => {
  const message = messagesByPath[route.path] ?? messagesByPath['/']
  return `https://wa.me/2348000000000?text=${encodeURIComponent(message)}`
})
</script>

<template>
  <a :href="href" class="wa-float" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
    <WhatsAppIcon :size="26" />
  </a>
</template>
