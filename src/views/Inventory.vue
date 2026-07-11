<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import CarCard from '../components/CarCard.vue'
import FilterToolbar from '../components/FilterToolbar.vue'
import { filterOptions } from '../data/cars'
import { useCars } from '../composables/useCars'

const route = useRoute()
const validFilters = filterOptions.map((f) => f.value)
const initialFilter = validFilters.includes(route.query.filter) ? route.query.filter : 'all'

const activeFilter = ref(initialFilter)
const { cars, loading, error } = useCars()
const filteredCars = computed(() =>
  activeFilter.value === 'all' ? cars.value : cars.value.filter((c) => c.tags.includes(activeFilter.value))
)
</script>

<template>
  <main>
    <section class="page-hero page-hero-compact" aria-label="Inventory">
      <div class="page-hero-bg" aria-hidden="true">
        <div class="hero-grid"></div>
      </div>
      <div class="container page-hero-inner page-hero-row">
        <div>
          <div class="eyebrow">Full stock gallery</div>
          <h1 class="page-hero-title">Available <em>inventory.</em></h1>
          <p class="page-hero-sub">Every vehicle in our Ikeja showroom — inspected, warrantied, and ready to drive. Filter by type or tap to enquire on WhatsApp.</p>
        </div>
        <div class="inventory-summary" aria-live="polite">
          <span class="inventory-summary-num">{{ cars.length }}</span>
          <span class="inventory-summary-label">vehicles in stock</span>
        </div>
      </div>
    </section>

    <section class="section inventory-section" id="gallery">
      <div class="container">
        <template v-if="!loading && !error">
          <div class="gallery-toolbar inventory-toolbar">
            <FilterToolbar
              v-model="activeFilter"
              :filters="filterOptions"
              :visible-count="filteredCars.length"
              :total-count="cars.length"
            />
          </div>

          <div class="gallery-grid">
            <CarCard v-for="car in filteredCars" :key="car._id" :car="car" variant="gallery" />
          </div>

          <p v-if="!filteredCars.length" class="gallery-empty" role="status">
            No vehicles match this filter. Try another category or <router-link to="/#contact">contact us</router-link> for custom sourcing.
          </p>
        </template>

        <p v-else-if="loading" class="gallery-empty" role="status">Loading inventory…</p>
        <p v-else class="gallery-empty" role="status">Couldn't load inventory right now. Please try again shortly.</p>
      </div>
    </section>

    <section class="section section-cta">
      <div class="container cta-inner">
        <div class="eyebrow">Can't find what you need?</div>
        <h2>We'll source it for you</h2>
        <p>Tell us what you're looking for and our team will search our network to find the perfect match — at the right price.</p>
        <div class="cta-actions">
          <a href="https://wa.me/2348000000000?text=Hello!%20I'm%20looking%20for%20a%20specific%20vehicle." class="btn-primary btn-lg" target="_blank" rel="noopener">Chat on WhatsApp</a>
          <router-link to="/#contact" class="btn-ghost btn-lg">Contact us</router-link>
        </div>
      </div>
    </section>
  </main>
</template>
