<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import WhatsAppFloat from './components/WhatsAppFloat.vue'
</script>

<template>
  <NavBar />
  <router-view />
  <Footer />
  <WhatsAppFloat />
</template>
