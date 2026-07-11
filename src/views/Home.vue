<script setup>
import { computed, ref } from 'vue'
import CarCard from '../components/CarCard.vue'
import FilterToolbar from '../components/FilterToolbar.vue'
import WhatsAppIcon from '../components/icons/WhatsAppIcon.vue'
import ContactForm from '../components/ContactForm.vue'
import { filterOptions } from '../data/cars'
import { useCars } from '../composables/useCars'

const activeFilter = ref('all')
const { cars: homeCars, loading, error } = useCars({ featured: 'true' })
const filteredCars = computed(() =>
  activeFilter.value === 'all' ? homeCars.value : homeCars.value.filter((c) => c.tags.includes(activeFilter.value))
)
</script>

<template>
  <main>
    <!-- ░░ HERO ░░ -->
    <section class="hero" aria-label="Hero">
      <div class="hero-grid" aria-hidden="true"></div>
      <div class="container hero-inner">
        <div class="hero-content">
          <div class="eyebrow">Ikeja, Lagos</div>
          <h1 class="hero-headline">
            Quality vehicles.<br />
            Real <em>warranty.</em> Fast financing.
          </h1>
          <p class="hero-sub">Every vehicle is inspected and backed by a 3–5 year engine and gearbox warranty. Financing decisions in days, not weeks. Toyota, Lexus, Mitsubishi, Honda, GAC &amp; more — in stock now at our Oba Akran Avenue showroom.</p>
          <div class="hero-ctas">
            <router-link to="/inventory" class="btn-primary btn-lg">Browse Inventory</router-link>
            <a href="https://wa.me/2347030424072" class="btn-ghost btn-lg" target="_blank" rel="noopener">
              <WhatsAppIcon :size="16" />
              Chat on WhatsApp
            </a>
          </div>
          <div class="hero-stats" aria-label="Key facts">
            <div class="stat">
              <span class="stat-num">500+</span>
              <span class="stat-label">Vehicles sold</span>
            </div>
            <div class="stat-div" aria-hidden="true"></div>
            <div class="stat">
              <span class="stat-num">8+</span>
              <span class="stat-label">Brands stocked</span>
            </div>
            <div class="stat-div" aria-hidden="true"></div>
            <div class="stat">
              <span class="stat-num">5yr</span>
              <span class="stat-label">Max warranty</span>
            </div>
            <div class="stat-div" aria-hidden="true"></div>
            <div class="stat">
              <span class="stat-num">24/7</span>
              <span class="stat-label">Support</span>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-photo-frame">
            <img src="/images/gallery/car-4.jpg" alt="Toyota Land Cruiser in stock at Oysters and Pebbles Autos, Ikeja" class="hero-photo" />
          </div>
          <div class="hero-photo-badge" aria-hidden="true">
            <span class="hero-photo-badge-num">13</span>
            <span class="hero-photo-badge-text">Vehicles in stock now</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░ TRUST BAR ░░ -->
    <div class="trust-bar">
      <div class="container trust-inner">
        <div class="trust-item" v-reveal>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          <span>3–5 year engine &amp; gearbox warranty</span>
        </div>
        <div class="trust-item" v-reveal>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M9 12l2 2 4-4"/><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          <span>Certified pre-owned vehicles</span>
        </div>
        <div class="trust-item" v-reveal>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
          <span>Flexible financing options</span>
        </div>
        <div class="trust-item" v-reveal>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          <span>24/7 after-sales support</span>
        </div>
        <div class="trust-item" v-reveal>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>
          <span>Oba Akran Avenue, Ikeja Lagos</span>
        </div>
      </div>
    </div>

    <!-- ░░ FEATURED INVENTORY ░░ -->
    <section class="section" id="inventory">
      <div class="container">
        <div class="section-header">
          <div>
            <div class="eyebrow">In stock now</div>
            <h2>Featured vehicles</h2>
          </div>
          <router-link to="/inventory" class="btn-outline">View full inventory →</router-link>
        </div>

        <FilterToolbar v-model="activeFilter" :filters="filterOptions" />

        <div v-if="!loading && !error" class="car-grid" id="car-grid">
          <CarCard v-for="car in filteredCars" :key="car._id" :car="car" variant="featured" />
        </div>
        <p v-else-if="loading" class="gallery-empty" role="status">Loading inventory…</p>
        <p v-else class="gallery-empty" role="status">Couldn't load inventory right now. Please try again shortly.</p>
      </div>
    </section>

    <!-- ░░ BRANDS ░░ -->
    <section class="section section-dark" id="brands">
      <div class="container">
        <div class="section-header section-header-centered">
          <div class="eyebrow">8+ brands, one showroom</div>
          <h2>Brands we carry</h2>
          <p class="section-sub">Every vehicle is inspected and warrantied before sale, regardless of brand.</p>
        </div>
        <div class="brands-grid">
          <div class="brand-tile" v-reveal>
            <span class="brand-name">Toyota</span>
            <span class="brand-tagline">Dependable, low-cost maintenance</span>
          </div>
          <div class="brand-tile brand-tile-gold" v-reveal>
            <span class="brand-name">Lexus</span>
            <span class="brand-tagline">Premium comfort, strong resale value</span>
          </div>
          <div class="brand-tile" v-reveal>
            <span class="brand-name">Mitsubishi</span>
            <span class="brand-tagline">Rugged SUVs built for Lagos roads</span>
          </div>
          <div class="brand-tile" v-reveal>
            <span class="brand-name">Honda</span>
            <span class="brand-tagline">Fuel-efficient, low running costs</span>
          </div>
          <div class="brand-tile" v-reveal>
            <span class="brand-name">Hyundai</span>
            <span class="brand-tagline">Modern features at a fair price</span>
          </div>
          <div class="brand-tile" v-reveal>
            <span class="brand-name">Ford</span>
            <span class="brand-tagline">Built tough for demanding conditions</span>
          </div>
          <div class="brand-tile brand-tile-gold" v-reveal>
            <span class="brand-name">GAC</span>
            <span class="brand-tagline">Feature-rich, competitively priced</span>
          </div>
          <div class="brand-tile" v-reveal>
            <span class="brand-name">Electric Vehicles</span>
            <span class="brand-tagline">Lower fuel costs, zero emissions</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░ SERVICES ░░ -->
    <section class="section" id="services">
      <div class="container">
        <div class="section-header section-header-centered">
          <div class="eyebrow">What's included</div>
          <h2>Every purchase includes</h2>
          <p class="section-sub">Warranty, financing, delivery, and after-sales support — handled in-house, not outsourced.</p>
        </div>
        <div class="services-grid">
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>3–5 Year Warranty</h3>
            <p>Engine and gearbox covered up to 100,000 km, on every vehicle we sell.</p>
          </div>
          <div class="service-card service-card-gold" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <h3>24/7 Support</h3>
            <p>WhatsApp support around the clock, before and after your purchase.</p>
          </div>
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3>After-Sales Service</h3>
            <p>Maintenance, repairs, and genuine parts from our own technicians.</p>
          </div>
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </div>
            <h3>Flexible Financing</h3>
            <p>Plans built around your income, with a decision in days.</p>
          </div>
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3>Free Lagos Delivery</h3>
            <p>Delivered to your door anywhere in Lagos state, at no extra cost.</p>
          </div>
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            </div>
            <h3>Parts &amp; Accessories</h3>
            <p>Genuine OEM parts, service kits, lubricants, and filters — in stock.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░ PROMOS ░░ -->
    <section class="section promo-section">
      <div class="container promo-grid">
        <div class="promo-card" v-reveal>
          <img src="/images/gallery/promo-top-sellers.png" alt="" class="promo-img" aria-hidden="true" />
          <div class="promo-content">
            <span class="eyebrow">Best deal on top sellers</span>
            <h3>Get 30% Off</h3>
            <router-link to="/inventory" class="btn-outline">Shop now</router-link>
          </div>
        </div>
        <div class="promo-card" v-reveal>
          <img src="/images/gallery/promo-aftersales.png" alt="" class="promo-img" aria-hidden="true" />
          <div class="promo-content">
            <span class="eyebrow">Free and affordable aftersales services</span>
            <h3>After Sales Services</h3>
            <router-link to="/services" class="btn-outline">Shop now</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░ ABOUT / WHY US ░░ -->
    <section class="section section-about" id="about">
      <div class="container about-inner">
        <div class="about-content">
          <div class="eyebrow">Why buy from us</div>
          <h2>Six years, 500+ vehicles sold</h2>
          <p>Oysters and Pebbles Auto Limited is a registered Lagos dealership. Every vehicle is inspected before sale and comes with a written warranty — no exceptions, no fine print.</p>
          <p>Reach us on WhatsApp for a same-day response, or visit the showroom on Oba Akran Avenue, Ikeja, Monday to Saturday.</p>
          <div class="about-stats">
            <div class="about-stat">
              <span class="about-num">500+</span>
              <span class="about-label">Vehicles sold</span>
            </div>
            <div class="about-stat">
              <span class="about-num">8+</span>
              <span class="about-label">Brands in stock</span>
            </div>
            <div class="about-stat">
              <span class="about-num">6yr</span>
              <span class="about-label">In business</span>
            </div>
          </div>
          <router-link to="/about" class="btn-primary">Learn more about us</router-link>
        </div>
        <div class="about-visual" aria-hidden="true">
          <div class="about-img-block">
            <div class="about-img-placeholder">
              <img src="/images/gallery/showroom-2.jpg" alt="A vehicle outside the Oysters and Pebbles Autos showroom" class="about-img-photo" />
            </div>
            <div class="about-badge-float">
              <span class="about-badge-num">500+</span>
              <span class="about-badge-text">Vehicles delivered</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░ TESTIMONIALS ░░ -->
    <section class="section section-dark" id="testimonials">
      <div class="container">
        <div class="section-header section-header-centered">
          <div class="eyebrow">Customer voices</div>
          <h2>What our buyers say</h2>
        </div>
        <div class="testimonials-grid">
          <blockquote class="testimonial" v-reveal>
            <div class="stars" aria-label="5 stars">★★★★★</div>
            <p>"Bought my Land Cruiser here. The team was upfront about pricing and the warranty is real — I've used it once already, no issues."</p>
            <footer>
              <div class="testimonial-avatar">AO</div>
              <div>
                <cite class="testimonial-name">Adebayo O.</cite>
                <span class="testimonial-detail">Lagos Island · Toyota Land Cruiser</span>
              </div>
            </footer>
          </blockquote>
          <blockquote class="testimonial testimonial-gold" v-reveal>
            <div class="stars" aria-label="5 stars">★★★★★</div>
            <p>"WhatsApp enquiry to delivery took 3 days. Financing was approved faster than I expected. Straightforward process, no pressure."</p>
            <footer>
              <div class="testimonial-avatar">FK</div>
              <div>
                <cite class="testimonial-name">Fatima K.</cite>
                <span class="testimonial-detail">Lekki · GAC GS8 Premium</span>
              </div>
            </footer>
          </blockquote>
          <blockquote class="testimonial" v-reveal>
            <div class="stars" aria-label="5 stars">★★★★★</div>
            <p>"They walked me through financing options that actually fit my salary, with the numbers explained clearly upfront. Driving my Corolla now."</p>
            <footer>
              <div class="testimonial-avatar">CI</div>
              <div>
                <cite class="testimonial-name">Chukwudi I.</cite>
                <span class="testimonial-detail">Abuja · Toyota Corolla</span>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- ░░ CONTACT / CTA ░░ -->
    <section class="section" id="contact">
      <div class="container contact-inner">
        <div class="contact-content">
          <div class="eyebrow">Get in touch</div>
          <h2>Visit, call, or WhatsApp us</h2>
          <p>Showroom open Monday to Saturday, 8am–6pm. WhatsApp is answered 24/7 for enquiries, financing questions, and after-sales support.</p>

          <div class="contact-details">
            <div class="contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>
              <span>14 Oba Akran Avenue, Ikeja, Lagos State</span>
            </div>
            <div class="contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.26 9.11 19.79 19.79 0 01.22 .5a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9a16 16 0 006.29 6.29l.78-.78a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              <span class="contact-phones">
                <a href="tel:+2347030424072">+234 703 042 4072</a>,
                <a href="tel:+2348080279969">+234 808 027 9969</a>,
                <a href="tel:+2348139201079">+234 813 920 1079</a>
              </span>
            </div>
            <div class="contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span class="contact-phones">
                <a href="mailto:info@oystersandpebblesautos.com">info@oystersandpebblesautos.com</a>,
                <a href="mailto:support@oystersandpebblesautos.com">support@oystersandpebblesautos.com</a>
              </span>
            </div>
            <div class="contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              <span>Mon–Sat: 8:00am – 6:00pm</span>
            </div>
          </div>

          <div class="contact-ctas">
            <a href="https://wa.me/2347030424072?text=Hello!%20I'd%20like%20to%20book%20a%20test%20drive" class="btn-primary btn-lg" target="_blank" rel="noopener">
              <WhatsAppIcon :size="16" />
              Book on WhatsApp
            </a>
            <a href="mailto:info@oystersandpebblesautos.com" class="btn-ghost btn-lg">Send an email</a>
          </div>

          <ContactForm />
        </div>

        <div class="contact-map" aria-label="Map — 14 Oba Akran Avenue, Ikeja Lagos">
          <div class="map-embed">
            <iframe
              src="https://www.google.com/maps?q=14+Oba+Akran+Avenue+Ikeja+Lagos&output=embed"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Oysters and Pebbles Autos on the map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
