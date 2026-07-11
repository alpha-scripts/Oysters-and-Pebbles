<script setup>
import WhatsAppIcon from '../components/icons/WhatsAppIcon.vue'
</script>

<template>
  <main>
    <!-- ░░ PAGE HERO ░░ -->
    <section class="page-hero" aria-label="Services">
      <div class="hero-grid" aria-hidden="true"></div>
      <div class="container page-hero-inner">
        <div class="eyebrow">Our services</div>
        <h1 class="page-hero-title">Sales, financing, and <em>after-sales</em> — in one place</h1>
        <p class="page-hero-sub">Everything is handled in-house: the sale, the warranty, the financing, and the maintenance that comes after. No third parties, no runaround.</p>
      </div>
    </section>

    <!-- ░░ MAIN SERVICES ░░ -->
    <section class="section" id="main-services">
      <div class="container">
        <div class="services-grid">
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            </div>
            <h3>Vehicle Sales</h3>
            <p>Premium new and certified pre-owned vehicles from Toyota, Lexus, GAC, and more. Every car inspected and backed by warranty.</p>
            <router-link to="/inventory" class="btn-outline" style="margin-top: 8px;">Browse vehicles</router-link>
          </div>
          <div class="service-card service-card-gold" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>3–5 Year Warranty</h3>
            <p>Engine and gearbox covered up to 100,000 km, in writing, on every vehicle sold.</p>
            <router-link to="/#contact" class="btn-outline" style="margin-top: 8px;">Learn more</router-link>
          </div>
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3>After-Sales Service</h3>
            <p>Regular maintenance, repairs, and genuine parts replacement from our expert technicians.</p>
            <router-link to="/#contact" class="btn-outline" style="margin-top: 8px;">Book service</router-link>
          </div>
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </div>
            <h3>Flexible Financing</h3>
            <p>Spread your payments with competitive rates and plans tailored to your income and lifestyle.</p>
            <router-link to="/#contact" class="btn-outline" style="margin-top: 8px;">Apply now</router-link>
          </div>
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3>Free Lagos Delivery</h3>
            <p>We deliver your vehicle to your door anywhere within Lagos state at no extra charge.</p>
            <router-link to="/#contact" class="btn-outline" style="margin-top: 8px;">Enquire</router-link>
          </div>
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <h3>24/7 Support</h3>
            <p>Message us anytime — WhatsApp is monitored around the clock, including weekends.</p>
            <a href="https://wa.me/2347030424072" class="btn-outline" style="margin-top: 8px;" target="_blank" rel="noopener">Chat now</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░ ADDITIONAL SERVICES ░░ -->
    <section class="section section-dark" id="additional-services">
      <div class="container">
        <div class="section-header section-header-centered">
          <div class="eyebrow">More services</div>
          <h2>Keeping your vehicle running</h2>
          <p class="section-sub">Repairs, detailing, and trade-in valuations — booked the same way as everything else, on WhatsApp.</p>
        </div>

        <div class="services-grid">
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 16l4-4 4 4 4-4 4 4"/><path d="M12 8v8"/><path d="M8 8v8"/><path d="M16 8v8"/></svg>
            </div>
            <h3>Custom Repairs</h3>
            <p>Specialized repair services for all makes and models. From minor fixes to major overhauls.</p>
            <router-link to="/#contact" class="btn-outline" style="margin-top: 8px;">Get in touch</router-link>
          </div>
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M2 12a9 9 0 0018 0A9 9 0 002 12"/><path d="M12 2a9 9 0 000 18A9 9 0 0012 2z"/></svg>
            </div>
            <h3>Car Detailing</h3>
            <p>Professional detailing services to restore and maintain your vehicle's showroom shine.</p>
            <router-link to="/#contact" class="btn-outline" style="margin-top: 8px;">Book detailing</router-link>
          </div>
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 15V3"/><path d="M8 19h8"/><circle cx="12" cy="19" r="3"/><path d="M5 7h14"/><path d="M5 11h14"/></svg>
            </div>
            <h3>Trade-In Options</h3>
            <p>Upgrade easily by trading in your current vehicle. Get fair market value applied to your purchase.</p>
            <router-link to="/#contact" class="btn-outline" style="margin-top: 8px;">Trade your car</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░ PARTS & ACCESSORIES ░░ -->
    <section class="section" id="parts">
      <div class="container">
        <div class="section-header section-header-centered">
          <div class="eyebrow">Shop</div>
          <h2>Genuine parts &amp; accessories</h2>
          <p class="section-sub">OEM quality parts, service kits, and accessories in stock for all our brands.</p>
        </div>

        <div class="services-grid">
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 16l4-4 4 4 4-4 4 4"/><path d="M12 8v8"/><path d="M8 8v8"/><path d="M16 8v8"/></svg>
            </div>
            <h3>Air Filters</h3>
            <p>High-performance air filters for optimal engine efficiency and longevity.</p>
          </div>
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="7" y="3" width="10" height="18" rx="2"/><path d="M7 9h10"/><path d="M7 15h10"/></svg>
            </div>
            <h3>Piston Liners</h3>
            <p>Precision-fit piston liners to restore engine compression and performance.</p>
          </div>
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="9" cy="9" r="1.5"/><circle cx="15" cy="9" r="1.5"/><circle cx="9" cy="15" r="1.5"/><circle cx="15" cy="15" r="1.5"/></svg>
            </div>
            <h3>Cylinder Heads</h3>
            <p>Genuine and remanufactured cylinder heads for a wide range of makes and models.</p>
          </div>
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <h3>Service Kits</h3>
            <p>Complete service kits with all necessary components for scheduled maintenance.</p>
          </div>
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 2v16"/><path d="M8 6h8"/><path d="M8 10h8"/><path d="M8 14h8"/><path d="M8 18h8"/></svg>
            </div>
            <h3>Oil &amp; Lubricants</h3>
            <p>Premium engine oils and lubricants from trusted brands for optimal performance.</p>
          </div>
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l2 2"/></svg>
            </div>
            <h3>Brake Disks &amp; Pads</h3>
            <p>Genuine brake components for safety and reliable stopping power.</p>
          </div>
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>Tires &amp; Wheels</h3>
            <p>Quality tires and wheels for all vehicle types, from economy to premium brands.</p>
          </div>
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <h3>Oil Filters</h3>
            <p>High-quality oil filters to keep your engine running clean and efficient.</p>
          </div>
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M21 16V8a2 2 0 00-1-1.73l-8-5a2 2 0 00-2 0l-8 5a2 2 0 00-1 1.73v8a2 2 0 001 1.73l8 5a2 2 0 002 0l8-5a2 2 0 001-1.73z"/></svg>
            </div>
            <h3>Body Parts</h3>
            <p>Replacement body panels, bumpers, and exterior components for all models.</p>
          </div>
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M21 12a9 9 0 01-9 9H5a5 5 0 010-10h14a9 9 0 110 18"/></svg>
            </div>
            <h3>Repair Parts</h3>
            <p>Comprehensive inventory of repair components for quick turnaround.</p>
          </div>
          <div class="service-card" v-reveal>
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z"/></svg>
            </div>
            <h3>Performance Parts</h3>
            <p>Upgrades and performance accessories for enthusiasts who want more.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░ SERVICE PROCESS ░░ -->
    <section class="section section-dark" id="process">
      <div class="container">
        <div class="section-header section-header-centered">
          <div class="eyebrow">How it works</div>
          <h2>Our service process</h2>
          <p class="section-sub">Simple steps to get the service you need.</p>
        </div>

        <div class="values-grid">
          <div class="value-card" v-reveal>
            <div class="value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3>Contact Us</h3>
            <p>Reach out via WhatsApp, phone, or email. Our team is ready to assist you 24/7.</p>
          </div>
          <div class="value-card value-card-gold" v-reveal>
            <div class="value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3H8v4h8V3z"/></svg>
            </div>
            <h3>Assessment</h3>
            <p>We assess your needs and provide transparent pricing with no hidden fees.</p>
          </div>
          <div class="value-card" v-reveal>
            <div class="value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3>Service Delivery</h3>
            <p>Our certified technicians complete the work with quality assurance and testing.</p>
          </div>
          <div class="value-card" v-reveal>
            <div class="value-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="1"/><circle cx="8" cy="11" r="1"/><circle cx="16" cy="11" r="1"/></svg>
            </div>
            <h3>Follow-up Support</h3>
            <p>We check in to ensure you're satisfied and provide ongoing assistance when needed.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ░░ CTA ░░ -->
    <section class="section section-cta">
      <div class="container cta-inner">
        <div class="eyebrow">Get started</div>
        <h2>Book a service or check parts availability</h2>
        <p>Message us on WhatsApp for the fastest response, or visit Monday to Saturday, 8am–6pm.</p>
        <div class="cta-actions">
          <a href="https://wa.me/2347030424072?text=Hello!%20I'd%20like%20to%20inquire%20about%20your%20services" class="btn-primary btn-lg" target="_blank" rel="noopener">
            <WhatsAppIcon :size="16" />
            Chat on WhatsApp
          </a>
          <router-link to="/#contact" class="btn-ghost btn-lg">View contact info</router-link>
        </div>
      </div>
    </section>
  </main>
</template>
