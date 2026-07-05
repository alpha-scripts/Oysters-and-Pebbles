<script setup>
const team = [
  { initials: 'AB', name: 'Adekunle O. Babawale', role: 'Managing Director', bio: "Founder with over six years of experience, leading Oysters and Pebbles Auto Limited's mission to provide quality vehicles at reasonable prices.", lead: true },
  { initials: 'AO', name: 'Abimbola Olutosin', role: 'Chief Operating Officer', bio: 'Oversees daily operations and ensures our dealership runs smoothly to deliver exceptional customer experiences.' },
  { initials: 'KB', name: 'Komolafe Bayowa O.', role: 'After Sales Manager', bio: 'Manages our after-sales service department, ensuring your vehicle continues to perform at its best.' },
  { initials: 'AA', name: 'Adeyemi Aishat', role: 'Account Receivable', bio: 'Handles accounts receivable and financial operations with precision and professionalism.' },
  { initials: 'EE', name: 'Owoicho E. Esther', role: 'Customer Care Advisory', bio: 'Provides dedicated customer care support to ensure every interaction exceeds expectations.' },
  { initials: 'JP', name: 'Idoko John Pascal', role: 'General Services', bio: 'Manages general services and facility operations to keep our showroom running smoothly.' },
  { initials: 'TA', name: 'Adeshina T. Adedunmoye', role: 'Senior Sales Consultant', bio: 'Our senior sales consultant with extensive knowledge of all brands and models we carry.' },
  { initials: 'SA', name: 'Soeze Ayobamidele', role: 'IT Personnel', bio: 'Manages our IT infrastructure and digital systems to ensure seamless operations.' },
  { initials: 'EO', name: 'Ekujumi Olabode', role: 'After Sales Personnel', bio: 'Provides skilled after-sales support and vehicle maintenance services.' }
]

const sponsors = [
  { name: 'TotalEnergies Nigeria', type: 'Fuel & lubricants partner', gold: true },
  { name: 'Access Bank', type: 'Vehicle financing sponsor' },
  { name: 'Leadway Assurance', type: 'Insurance sponsor' },
  { name: 'Mobil 1', type: 'Engine care sponsor' },
  { name: 'Lagos State MOT', type: 'Compliance & registration' },
  { name: 'Nigeria Auto Journal', type: 'Media sponsor' }
]

const partners = [
  { name: 'Toyota Nigeria', type: 'Authorised distributor', gold: true },
  { name: 'Lexus West Africa', type: 'Premium brand partner' },
  { name: 'GAC Motor Nigeria', type: 'Official dealer partner' },
  { name: 'Stanbic IBTC', type: 'Auto loan partner' },
  { name: 'Coscharis Group', type: 'Parts & supply chain' },
  { name: 'BYD Africa', type: 'Electric vehicle partner' },
  { name: 'Mitsubishi Motors', type: 'Brand partner' },
  { name: 'Autochek Africa', type: 'Vehicle inspection partner' }
]
</script>

<template>
  <main>
    <!-- ░░ PAGE HERO ░░ -->
    <section class="page-hero" aria-label="About us">
      <div class="page-hero-bg" aria-hidden="true">
        <div class="hero-grid"></div>
      </div>
      <div class="container page-hero-inner">
        <div class="eyebrow">About O&amp;P Autos</div>
        <h1 class="page-hero-title">The team behind<br />Lagos' trusted <em>dealership.</em></h1>
        <p class="page-hero-sub">Oysters &amp; Pebbles Autos was built on a simple promise: honest vehicles, transparent pricing, and care that lasts long after you drive off our lot.</p>
      </div>
    </section>

    <!-- ░░ OUR STORY ░░ -->
    <section class="section" id="story">
      <div class="container about-inner">
        <div class="about-content">
          <div class="eyebrow">Our story</div>
          <h2>Built on trust,<br />driven by Lagos</h2>
          <p>Oysters &amp; Pebbles Autos was founded with a single conviction: that every Lagos driver deserves access to quality vehicles at honest prices, backed by genuine after-care.</p>
          <p>From our showroom on Oba Akran Avenue in Ikeja, we've helped hundreds of families and businesses find the right car — whether that's a rugged workhorse or a statement of success.</p>
          <p>What started as a small import operation has grown into one of Ikeja's most trusted automotive destinations, with a team dedicated to making every purchase straightforward and stress-free.</p>
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
            <p>"We believe buying a car should feel like a partnership, not a gamble. Every vehicle we sell carries our name — and our reputation depends on your satisfaction."</p>
            <footer>— The O&amp;P Autos Founding Team</footer>
          </blockquote>
        </div>

        <div class="values-grid">
          <div class="value-card" v-reveal>
            <div class="value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>Integrity First</h3>
            <p>Full disclosure on every vehicle's history, condition, and pricing. No hidden fees, no surprises.</p>
          </div>
          <div class="value-card value-card-gold" v-reveal>
            <div class="value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
            </div>
            <h3>Customer-Centred</h3>
            <p>Your needs come first — from the first WhatsApp message to years of after-sales support.</p>
          </div>
          <div class="value-card" v-reveal>
            <div class="value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3>Quality Assured</h3>
            <p>Every vehicle is inspected, certified, and backed by our 3–5 year engine and gearbox warranty.</p>
          </div>
          <div class="value-card" v-reveal>
            <div class="value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3>Rooted in Lagos</h3>
            <p>We know this city — its roads, its traffic, its people. We stock cars built for Lagos life.</p>
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

        <div class="team-grid">
          <article
            v-for="member in team"
            :key="member.name"
            class="team-card"
            :class="{ 'team-card-lead': member.lead }"
            v-reveal
          >
            <div class="team-avatar">{{ member.initials }}</div>
            <div class="team-info">
              <h3>{{ member.name }}</h3>
              <span class="team-role">{{ member.role }}</span>
              <p>{{ member.bio }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ░░ SPONSORS ░░ -->
    <section class="section section-dark" id="sponsors">
      <div class="container">
        <div class="section-header section-header-centered">
          <div class="eyebrow">Our sponsors</div>
          <h2>Backed by brands that believe in us</h2>
          <p class="section-sub">We're proud to be supported by organisations that share our commitment to quality and community.</p>
        </div>

        <div class="partners-grid sponsors-grid">
          <div
            v-for="sponsor in sponsors"
            :key="sponsor.name"
            class="partner-tile"
            :class="{ 'partner-tile-gold': sponsor.gold }"
            v-reveal
          >
            <span class="partner-name">{{ sponsor.name }}</span>
            <span class="partner-type">{{ sponsor.type }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░ PARTNERS ░░ -->
    <section class="section" id="partners">
      <div class="container">
        <div class="section-header section-header-centered">
          <div class="eyebrow">Our partners</div>
          <h2>Working together for you</h2>
          <p class="section-sub">Strategic partnerships with manufacturers, financiers, and service providers help us deliver a complete ownership experience.</p>
        </div>

        <div class="partners-grid">
          <div
            v-for="partner in partners"
            :key="partner.name"
            class="partner-tile"
            :class="{ 'partner-tile-gold': partner.gold }"
            v-reveal
          >
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
        <h2>Come meet the team in person</h2>
        <p>Our showroom on Oba Akran Avenue is open Monday to Saturday, 8am–6pm. We'd love to show you around and help you find your next car.</p>
        <div class="cta-actions">
          <router-link to="/#contact" class="btn-primary btn-lg">Get in touch</router-link>
          <router-link to="/inventory" class="btn-ghost btn-lg">Browse inventory</router-link>
        </div>
      </div>
    </section>
  </main>
</template>
