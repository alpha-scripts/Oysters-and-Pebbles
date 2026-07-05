<script setup>
import { computed, ref } from 'vue'
import CarCard from '../components/CarCard.vue'
import FilterToolbar from '../components/FilterToolbar.vue'
import WhatsAppIcon from '../components/icons/WhatsAppIcon.vue'
import { cars, filterOptions } from '../data/cars'

const activeFilter = ref('all')
const homeCars = cars.filter((c) => c.featuredOnHome)
const filteredCars = computed(() =>
  activeFilter.value === 'all' ? homeCars : homeCars.filter((c) => c.tags.includes(activeFilter.value))
)
</script>

<template>
  <main>
    <!-- ░░ HERO ░░ -->
    <section class="hero" aria-label="Hero">
      <div class="hero-bg" aria-hidden="true">
        <div class="hero-grid"></div>
      </div>
      <div class="container hero-inner">
        <div class="hero-content">
          <div class="eyebrow">Lagos' premier dealership</div>
          <h1 class="hero-headline">
            Drive the car<br />
            you <em>deserve.</em>
          </h1>
          <p class="hero-sub">Toyota, Lexus, Mitsubishi, Honda, GAC &amp; more. 3–5 year warranty on every vehicle. Flexible financing available.</p>
          <div class="hero-ctas">
            <router-link to="/inventory" class="btn-primary btn-lg">Browse Inventory</router-link>
            <a href="https://wa.me/2348000000000" class="btn-ghost btn-lg" target="_blank" rel="noopener">
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
        <div class="hero-visual" aria-hidden="true">
          <div class="hero-card-stack">
            <div class="hc hc-back">
              <div class="hc-label">Toyota Land Cruiser · 2023</div>
              <div class="hc-price">₦45,000,000</div>
            </div>
            <div class="hc hc-mid">
              <div class="hc-label">Lexus RX 350 · 2022</div>
              <div class="hc-price">₦38,000,000</div>
            </div>
            <div class="hc hc-front">
              <div class="hc-badge">Featured</div>
              <svg class="hc-car-svg" viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M20 52 L30 30 Q40 18 60 16 L140 16 Q160 18 170 30 L180 52 L185 56 L185 62 L15 62 L15 56 Z" fill="rgba(201,168,76,0.12)" stroke="rgba(201,168,76,0.4)" stroke-width="1.5"/>
                <path d="M38 30 L55 20 L145 20 L162 30" stroke="rgba(201,168,76,0.3)" stroke-width="1"/>
                <rect x="45" y="21" width="42" height="14" rx="3" fill="rgba(201,168,76,0.08)" stroke="rgba(201,168,76,0.25)" stroke-width="1"/>
                <rect x="93" y="21" width="42" height="14" rx="3" fill="rgba(201,168,76,0.08)" stroke="rgba(201,168,76,0.25)" stroke-width="1"/>
                <circle cx="48" cy="62" r="12" fill="#111" stroke="rgba(201,168,76,0.5)" stroke-width="2"/>
                <circle cx="48" cy="62" r="6" fill="#1a1a1a" stroke="rgba(201,168,76,0.3)" stroke-width="1"/>
                <circle cx="152" cy="62" r="12" fill="#111" stroke="rgba(201,168,76,0.5)" stroke-width="2"/>
                <circle cx="152" cy="62" r="6" fill="#1a1a1a" stroke="rgba(201,168,76,0.3)" stroke-width="1"/>
                <ellipse cx="22" cy="55" rx="6" ry="3" fill="rgba(201,168,76,0.2)"/>
                <ellipse cx="178" cy="55" rx="6" ry="3" fill="rgba(201,168,76,0.2)"/>
              </svg>
              <div class="hc-bottom">
                <div>
                  <div class="hc-label">GAC GS8 · 2024</div>
                  <div class="hc-price">₦28,000,000</div>
                </div>
                <a href="#contact" class="hc-cta">Enquire</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-scroll-hint" aria-hidden="true">
        <span>Scroll to explore</span>
        <svg width="12" height="18" viewBox="0 0 12 18" fill="none"><rect x="1" y="1" width="10" height="16" rx="5" stroke="currentColor" stroke-width="1.2"/><circle cx="6" cy="5" r="1.5" fill="currentColor"><animateTransform attributeName="transform" type="translate" values="0 0;0 6;0 0" dur="1.8s" repeatCount="indefinite"/></circle></svg>
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
            <div class="eyebrow">Our inventory</div>
            <h2>Featured vehicles</h2>
          </div>
          <router-link to="/inventory" class="btn-outline">View full inventory →</router-link>
        </div>

        <FilterToolbar v-model="activeFilter" :filters="filterOptions" />

        <div class="car-grid" id="car-grid">
          <CarCard v-for="car in filteredCars" :key="car.id" :car="car" variant="featured" />
        </div>
      </div>
    </section>

    <!-- ░░ BRANDS ░░ -->
    <section class="section section-dark" id="brands">
      <div class="container">
        <div class="section-header section-header-centered">
          <div class="eyebrow">Our portfolio</div>
          <h2>Brands we carry</h2>
          <p class="section-sub">From everyday reliability to aspirational luxury — we stock the marques Lagos trusts.</p>
        </div>
        <div class="brands-grid">
          <div class="brand-tile" v-reveal>
            <span class="brand-name">Toyota</span>
            <span class="brand-tagline">Reliability redefined</span>
          </div>
          <div class="brand-tile brand-tile-gold" v-reveal>
            <span class="brand-name">Lexus</span>
            <span class="brand-tagline">Pursuit of perfection</span>
          </div>
          <div class="brand-tile" v-reveal>
            <span class="brand-name">Mitsubishi</span>
            <span class="brand-tagline">Drive your ambition</span>
          </div>
          <div class="brand-tile" v-reveal>
            <span class="brand-name">Honda</span>
            <span class="brand-tagline">The power of dreams</span>
          </div>
          <div class="brand-tile" v-reveal>
            <span class="brand-name">Hyundai</span>
            <span class="brand-tagline">New thinking, new possibilities</span>
          </div>
          <div class="brand-tile" v-reveal>
            <span class="brand-name">Ford</span>
            <span class="brand-tagline">Built tough, driven far</span>
          </div>
          <div class="brand-tile brand-tile-gold" v-reveal>
            <span class="brand-name">GAC</span>
            <span class="brand-tagline">Premium Chinese engineering</span>
          </div>
          <div class="brand-tile" v-reveal>
            <span class="brand-name">BYD</span>
            <span class="brand-tagline">Electric future, now</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░ SERVICES ░░ -->
    <section class="section" id="services">
      <div class="container">
        <div class="section-header section-header-centered">
          <div class="eyebrow">What we offer</div>
          <h2>More than just vehicles</h2>
          <p class="section-sub">We support you from first enquiry through to years of ownership.</p>
        </div>
        <div class="services-grid">
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>3–5 Year Warranty</h3>
            <p>Comprehensive coverage on engine and gearbox up to 100,000 km. Drive with total peace of mind.</p>
          </div>
          <div class="service-card service-card-gold" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <h3>24/7 Support</h3>
            <p>Our team is available around the clock. Whether it's a question or an emergency, we're a WhatsApp away.</p>
          </div>
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3>After-Sales Service</h3>
            <p>Regular maintenance, repairs, and genuine parts replacement from our expert technicians.</p>
          </div>
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </div>
            <h3>Flexible Financing</h3>
            <p>Spread your payments with competitive rates and plans tailored to your income and lifestyle.</p>
          </div>
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3>Free Lagos Delivery</h3>
            <p>We deliver your vehicle to your door anywhere within Lagos state at no extra charge.</p>
          </div>
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            </div>
            <h3>Parts &amp; Accessories</h3>
            <p>Genuine OEM parts, service kits, lubricants, brake components, filters and more in stock.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░ ABOUT / WHY US ░░ -->
    <section class="section section-about" id="about">
      <div class="container about-inner">
        <div class="about-content">
          <div class="eyebrow">Our story</div>
          <h2>Built on trust,<br />driven by Lagos</h2>
          <p>Oysters &amp; Pebbles Autos was founded with a single conviction: that every Lagos driver deserves access to quality vehicles at honest prices, backed by genuine after-care.</p>
          <p>From our showroom on Oba Akran Avenue in Ikeja, we've helped hundreds of families and businesses find the right car — whether that's a rugged workhorse or a statement of success.</p>
          <div class="about-stats">
            <div class="about-stat">
              <span class="about-num">500+</span>
              <span class="about-label">Happy customers</span>
            </div>
            <div class="about-stat">
              <span class="about-num">8+</span>
              <span class="about-label">Brands in stock</span>
            </div>
            <div class="about-stat">
              <span class="about-num">5★</span>
              <span class="about-label">Customer rating</span>
            </div>
          </div>
          <router-link to="/about" class="btn-primary">Learn more about us</router-link>
        </div>
        <div class="about-visual" aria-hidden="true">
          <div class="about-img-block">
            <div class="about-img-placeholder">
              <div class="about-img-inner">
                <svg viewBox="0 0 300 200" fill="none" aria-hidden="true">
                  <rect width="300" height="200" fill="#0f0f0f"/>
                  <path d="M30 130 L55 80 Q70 55 100 50 L200 50 Q230 55 245 80 L270 130 L280 140 L280 160 L20 160 L20 140 Z" fill="rgba(201,168,76,0.1)" stroke="rgba(201,168,76,0.3)" stroke-width="2"/>
                  <rect x="85" y="58" width="55" height="22" rx="4" fill="rgba(201,168,76,0.06)" stroke="rgba(201,168,76,0.2)" stroke-width="1.5"/>
                  <rect x="145" y="58" width="55" height="22" rx="4" fill="rgba(201,168,76,0.06)" stroke="rgba(201,168,76,0.2)" stroke-width="1.5"/>
                  <circle cx="70" cy="160" r="20" fill="#151515" stroke="rgba(201,168,76,0.4)" stroke-width="2"/>
                  <circle cx="70" cy="160" r="10" fill="#1a1a1a" stroke="rgba(201,168,76,0.2)" stroke-width="1"/>
                  <circle cx="230" cy="160" r="20" fill="#151515" stroke="rgba(201,168,76,0.4)" stroke-width="2"/>
                  <circle cx="230" cy="160" r="10" fill="#1a1a1a" stroke="rgba(201,168,76,0.2)" stroke-width="1"/>
                  <text x="150" y="185" text-anchor="middle" font-size="11" fill="rgba(201,168,76,0.5)" font-family="sans-serif">OYSTERS &amp; PEBBLES AUTOS</text>
                </svg>
              </div>
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
            <p>"Bought my Land Cruiser here and the process was seamless. The team was honest about everything and the warranty gave me real confidence. Highly recommend."</p>
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
            <p>"From WhatsApp enquiry to delivery took just 3 days. The GAC GS8 is everything they said it would be. Support team still checks in months later."</p>
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
            <p>"I was skeptical at first, but the team walked me through financing options that actually worked for my salary. Driving my Camry now and couldn't be happier."</p>
            <footer>
              <div class="testimonial-avatar">CI</div>
              <div>
                <cite class="testimonial-name">Chukwudi I.</cite>
                <span class="testimonial-detail">Abuja · Toyota Camry XSE</span>
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
          <h2>Ready to find your car?</h2>
          <p>Book a test drive, ask about financing, or just come see the showroom. We're here Monday to Saturday, 8am–6pm — and on WhatsApp 24/7.</p>

          <div class="contact-details">
            <div class="contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>
              <span>14 Oba Akran Avenue, Ikeja, Lagos State</span>
            </div>
            <div class="contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.26 9.11 19.79 19.79 0 01.22 .5a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9a16 16 0 006.29 6.29l.78-.78a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              <a href="tel:+2348000000000">0800 000 0000</a>
            </div>
            <div class="contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:info@oystersandpebblesautos.com">info@oystersandpebblesautos.com</a>
            </div>
            <div class="contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              <span>Mon–Sat: 8:00am – 6:00pm</span>
            </div>
          </div>

          <div class="contact-ctas">
            <a href="https://wa.me/2348000000000?text=Hello!%20I'd%20like%20to%20book%20a%20test%20drive" class="btn-primary btn-lg" target="_blank" rel="noopener">
              <WhatsAppIcon :size="16" />
              Book on WhatsApp
            </a>
            <a href="mailto:info@oystersandpebblesautos.com" class="btn-ghost btn-lg">Send an email</a>
          </div>
        </div>

        <div class="contact-map" aria-label="Map placeholder — 14 Oba Akran Avenue, Ikeja Lagos">
          <div class="map-placeholder">
            <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="400" height="300" fill="#111"/>
              <line x1="0" y1="60" x2="400" y2="60" stroke="#1a1a1a" stroke-width="1"/>
              <line x1="0" y1="120" x2="400" y2="120" stroke="#1a1a1a" stroke-width="1"/>
              <line x1="0" y1="180" x2="400" y2="180" stroke="#1a1a1a" stroke-width="1"/>
              <line x1="0" y1="240" x2="400" y2="240" stroke="#1a1a1a" stroke-width="1"/>
              <line x1="80" y1="0" x2="80" y2="300" stroke="#1a1a1a" stroke-width="1"/>
              <line x1="160" y1="0" x2="160" y2="300" stroke="#1a1a1a" stroke-width="1"/>
              <line x1="240" y1="0" x2="240" y2="300" stroke="#1a1a1a" stroke-width="1"/>
              <line x1="320" y1="0" x2="320" y2="300" stroke="#1a1a1a" stroke-width="1"/>
              <rect x="60" y="90" width="120" height="12" rx="2" fill="#1e1e1e" stroke="#2a2a2a"/>
              <rect x="220" y="90" width="100" height="12" rx="2" fill="#1e1e1e" stroke="#2a2a2a"/>
              <rect x="100" y="150" width="200" height="14" rx="2" fill="#222" stroke="#2a2a2a"/>
              <rect x="60" y="210" width="140" height="12" rx="2" fill="#1e1e1e" stroke="#2a2a2a"/>
              <rect x="250" y="210" width="90" height="12" rx="2" fill="#1e1e1e" stroke="#2a2a2a"/>
              <text x="200" y="158" text-anchor="middle" font-size="9" fill="#444" font-family="sans-serif">OBA AKRAN AVENUE</text>
              <circle cx="200" cy="150" r="16" fill="rgba(201,168,76,0.15)" stroke="rgba(201,168,76,0.5)" stroke-width="1.5"/>
              <circle cx="200" cy="150" r="6" fill="#c9a84c"/>
              <path d="M200 130 L200 118" stroke="rgba(201,168,76,0.4)" stroke-width="1" stroke-dasharray="2 2"/>
              <rect x="156" y="98" width="88" height="18" rx="4" fill="#1a1a1a" stroke="rgba(201,168,76,0.3)" stroke-width="1"/>
              <text x="200" y="111" text-anchor="middle" font-size="9" fill="#c9a84c" font-family="sans-serif">O&amp;P Autos · Ikeja</text>
            </svg>
            <div class="map-overlay">
              <a href="https://maps.google.com/?q=14+Oba+Akran+Avenue+Ikeja+Lagos" target="_blank" rel="noopener" class="btn-outline">Open in Google Maps →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
