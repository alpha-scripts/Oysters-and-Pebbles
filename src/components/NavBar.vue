<script setup>
import { ref } from 'vue'
import WhatsAppIcon from './icons/WhatsAppIcon.vue'
import { useNavScroll } from '../composables/useNavScroll'

const { scrolled } = useNavScroll()
const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <div class="announce-bar">
    <span>Free delivery within Lagos on all vehicle purchases</span>
    <span class="sep">·</span>
    <a href="tel:+2347030424072">Call us: +234 703 042 4072</a>
  </div>

  <header class="nav-wrap" id="nav" :class="{ scrolled }">
    <nav class="nav-inner">
      <router-link to="/" class="logo" aria-label="Oysters and Pebbles Autos home">
        <img src="/images/logo.png" alt="" class="logo-mark" />
        <div class="logo-text">
          <span class="logo-name">O&amp;P Autos</span>
          <span class="logo-location">Lagos · Ikeja</span>
        </div>
      </router-link>

      <ul class="nav-links" role="list">
        <li><router-link to="/inventory">Inventory</router-link></li>
        <li><router-link to="/#brands">Brands</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/#contact">Contact</router-link></li>
      </ul>

      <div class="nav-actions">
        <a href="https://wa.me/2347030424072" class="btn-wa" target="_blank" rel="noopener">
          <WhatsAppIcon :size="15" />
          WhatsApp
        </a>
        <router-link to="/#contact" class="btn-primary">Book a Test Drive</router-link>
      </div>

      <button
        class="nav-toggle"
        aria-label="Open menu"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span><span></span>
      </button>
    </nav>

    <div class="mobile-menu" id="mobile-menu" :hidden="!menuOpen">
      <ul role="list">
        <li><router-link to="/inventory" @click="closeMenu">Inventory</router-link></li>
        <li><router-link to="/#brands" @click="closeMenu">Brands</router-link></li>
        <li><router-link to="/services" @click="closeMenu">Services</router-link></li>
        <li><router-link to="/about" @click="closeMenu">About</router-link></li>
        <li><router-link to="/#contact" @click="closeMenu">Contact</router-link></li>
      </ul>
      <div class="mobile-actions">
        <a href="https://wa.me/2347030424072" class="btn-wa" target="_blank" rel="noopener">WhatsApp Us</a>
        <router-link to="/#contact" class="btn-primary" @click="closeMenu">Book a Test Drive</router-link>
      </div>
    </div>
  </header>
</template>
