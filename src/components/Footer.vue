<script setup>
import LogoMark from './icons/LogoMark.vue'
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <div class="logo">
          <div class="logo-mark">
            <LogoMark color="#c9a84c" />
          </div>
          <div class="logo-text">
            <span class="logo-name" style="color: #fff;">O&amp;P Autos</span>
            <span class="logo-location">Lagos · Ikeja</span>
          </div>
        </div>
        <p>Lagos' premier dealership for quality vehicles, flexible financing, and genuine after-care.</p>
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <h4>Inventory</h4>
          <ul>
            <li><router-link to="/inventory">All vehicles</router-link></li>
            <li><router-link to="/inventory?filter=suv">SUVs</router-link></li>
            <li><router-link to="/inventory?filter=sedan">Sedans</router-link></li>
            <li><router-link to="/inventory?filter=ev">Electric vehicles</router-link></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul>
            <li><router-link to="/services">All services</router-link></li>
            <li><router-link to="/services#parts">Parts &amp; accessories</router-link></li>
            <li><router-link to="/services#main-services">Warranty</router-link></li>
            <li><router-link to="/services#additional-services">Repairs</router-link></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><router-link to="/about">About us</router-link></li>
            <li><router-link to="/#testimonials">Reviews</router-link></li>
            <li><router-link to="/#contact">Contact</router-link></li>
            <li><a href="https://wa.me/2348000000000" target="_blank" rel="noopener">WhatsApp</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <span>© 2025 Oysters &amp; Pebbles Autos. All rights reserved.</span>
        <span>14 Oba Akran Avenue, Ikeja, Lagos State, Nigeria</span>
      </div>
    </div>
  </footer>
</template>
