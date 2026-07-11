<script setup>
const team = [
  { initials: 'AB', name: 'Adekunle O. Babawale', role: 'Managing Director', bio: "Founder with over six years of experience, leading Oysters and Pebbles Auto Limited's mission to provide quality vehicles at reasonable prices.", lead: true, photo: '/images/team/managing-director.jpg' },
  { initials: 'AO', name: 'Abimbola Olutosin', role: 'Chief Operating Officer', bio: 'Oversees daily operations and ensures our dealership runs smoothly to deliver exceptional customer experiences.', photo: '/images/team/abimbola-olutosin.jpg' },
  { initials: 'KB', name: 'Komolafe Bayowa O.', role: 'After Sales Manager', bio: 'Manages our after-sales service department, ensuring your vehicle continues to perform at its best.', photo: '/images/team/komolafe-bayowa.jpg' },
  { initials: 'AA', name: 'Adeyemi Aishat', role: 'Account Receivable', bio: 'Handles accounts receivable and financial operations with precision and professionalism.', photo: '/images/team/adeyemi-aishat.jpg' },
  { initials: 'EE', name: 'Owoicho E. Esther', role: 'Customer Care Advisory', bio: 'Provides dedicated customer care support to ensure every interaction exceeds expectations.', photo: '/images/team/owoicho-esther.jpg' },
  { initials: 'JP', name: 'Idoko John Pascal', role: 'General Services', bio: 'Manages general services and facility operations to keep our showroom running smoothly.', photo: '/images/team/idoko-john-pascal.jpg' },
  { initials: 'TA', name: 'Adeshina T. Adedunmoye', role: 'Senior Sales Consultant', bio: 'Our senior sales consultant with extensive knowledge of all brands and models we carry.', photo: '/images/team/adeshina-adedunmoye.jpg' },
  { initials: 'SA', name: 'Soeze Ayobamidele', role: 'IT Personnel', bio: 'Manages our IT infrastructure and digital systems to ensure seamless operations.', photo: '/images/team/soeze-ayobamidele.jpg' },
  { initials: 'EO', name: 'Ekujumi Olabode', role: 'After Sales Personnel', bio: 'Provides skilled after-sales support and vehicle maintenance services.', photo: '/images/team/ekujumi-olabode.jpg' }
]

const partners = [
  { name: 'GAC Group', type: 'Vehicle manufacturer partner', logo: '/images/partners/gac-group.jpg' },
  { name: 'Autochek', type: 'Vehicle inspection & valuation partner', logo: '/images/partners/autochek.jpg' }
]
</script>

<template>
  <main>
    <!-- ░░ PAGE HERO ░░ -->
    <section class="page-hero" aria-label="About us">
      <div class="hero-grid" aria-hidden="true"></div>
      <div class="container page-hero-inner">
        <div class="eyebrow">About O&amp;P Autos</div>
        <h1 class="page-hero-title">Six years in business.<br />Every vehicle <em>warrantied.</em></h1>
        <p class="page-hero-sub">A registered Lagos dealership on Oba Akran Avenue, Ikeja — transparent pricing, a written warranty on every vehicle, and after-sales support that doesn't stop at the sale.</p>
      </div>
    </section>

    <!-- ░░ OUR STORY ░░ -->
    <section class="section" id="story">
      <div class="container about-inner">
        <div class="about-content">
          <div class="eyebrow">Our story</div>
          <h2>Built on trust,<br />driven by Lagos</h2>
          <p>Oysters and Pebbles Auto Limited is a fully registered auto dealership with more than six years of experience, on a mission to provide brand new vehicles at reasonable and affordable prices.</p>
          <p>We understand that many organisations have significant fleet management needs of their own, but the cost of meeting them can be steep. We're poised to bridge that gap — offering quality vehicles at a reasonable discount, with value-added services built in.</p>
          <p>From our showroom on Oba Akran Avenue in Ikeja, we've helped families and businesses across Lagos find the right vehicle — including fleet deals for organisations sourcing multiple cars at once.</p>
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
        </div>
        <div class="about-visual" aria-hidden="true">
          <div class="about-img-block">
            <div class="about-img-placeholder">
              <img src="/images/gallery/showroom-1.jpg" alt="Oysters and Pebbles Autos showroom on Oba Akran Avenue, Ikeja" class="about-img-photo" />
            </div>
            <div class="about-badge-float">
              <span class="about-badge-num">500+</span>
              <span class="about-badge-text">Vehicles delivered</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░ MISSION & VALUES ░░ -->
    <section class="section section-dark" id="mission">
      <div class="container">
        <div class="section-header section-header-centered">
          <div class="eyebrow">Our mission</div>
          <h2>Why we do what we do</h2>
          <p class="section-sub">To put quality, reliable vehicles within reach of every Lagosian — with transparency, integrity, and support that never stops.</p>
        </div>

        <div class="mission-statement">
          <blockquote>
            <p>"Discover a world of automotive excellence. From luxury sedans to rugged SUVs, we source and sell the finest brands of vehicles from around the globe. Your dream car is just a visit away."</p>
            <footer>— Oysters &amp; Pebbles Autos</footer>
          </blockquote>
        </div>

        <div class="values-grid">
          <div class="value-card" v-reveal>
            <div class="value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>Professionalism</h3>
            <p>Delivering exceptional service with expertise and dedication.</p>
          </div>
          <div class="value-card value-card-gold" v-reveal>
            <div class="value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
            </div>
            <h3>Trust</h3>
            <p>Premium automotive solutions delivered with integrity and precision.</p>
          </div>
          <div class="value-card" v-reveal>
            <div class="value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3>Integrity</h3>
            <p>Upholding the highest ethical standards in every interaction.</p>
          </div>
          <div class="value-card" v-reveal>
            <div class="value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3>Customer Satisfaction</h3>
            <p>Prioritizing your needs to exceed expectations at every turn.</p>
          </div>
          <div class="value-card" v-reveal>
            <div class="value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>
            </div>
            <h3>Social Responsibility</h3>
            <p>Committed to making a positive impact on our community and environment.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░ THE TEAM ░░ -->
    <section class="section" id="team">
      <div class="container">
        <div class="section-header section-header-centered">
          <div class="eyebrow">Meet the team</div>
          <h2>The people behind O&amp;P Autos</h2>
          <p class="section-sub">A passionate team of automotive professionals committed to making your car-buying experience seamless from start to finish.</p>
        </div>

        <img src="/images/team/team-group.jpg" alt="The Oysters and Pebbles Autos team at the Ikeja showroom" class="team-photo" />

        <div class="team-grid">
          <article
            v-for="member in team"
            :key="member.name"
            class="team-card"
            :class="{ 'team-card-lead': member.lead }"
            v-reveal
          >
            <img v-if="member.photo" :src="member.photo" :alt="member.name" class="team-avatar-photo" />
            <div v-else class="team-avatar">{{ member.initials }}</div>
            <div class="team-info">
              <h3>{{ member.name }}</h3>
              <span class="team-role">{{ member.role }}</span>
              <p>{{ member.bio }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ░░ PARTNERS ░░ -->
    <section class="section section-dark" id="partners">
      <div class="container">
        <div class="section-header section-header-centered">
          <div class="eyebrow">Our partners</div>
          <h2>Working together for you</h2>
          <p class="section-sub">Strategic partnerships with manufacturers and vehicle-inspection specialists help us deliver a complete ownership experience.</p>
        </div>

        <div class="partners-grid partners-grid-compact">
          <div v-for="partner in partners" :key="partner.name" class="partner-tile" v-reveal>
            <img :src="partner.logo" :alt="partner.name" class="partner-logo-img" />
            <span class="partner-name">{{ partner.name }}</span>
            <span class="partner-type">{{ partner.type }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░ CTA ░░ -->
    <section class="section section-cta">
      <div class="container cta-inner">
        <div class="eyebrow">Visit us</div>
        <h2>See the vehicles in person</h2>
        <p>Our showroom on Oba Akran Avenue is open Monday to Saturday, 8am–6pm. No appointment needed.</p>
        <div class="cta-actions">
          <router-link to="/#contact" class="btn-primary btn-lg">Get in touch</router-link>
          <router-link to="/inventory" class="btn-ghost btn-lg">Browse inventory</router-link>
        </div>
      </div>
    </section>
  </main>
</template>
