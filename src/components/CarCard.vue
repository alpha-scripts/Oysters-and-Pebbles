<script setup>
import { computed } from 'vue'

const props = defineProps({
  car: { type: Object, required: true },
  variant: { type: String, default: 'featured' } // 'featured' (home grid) | 'gallery' (inventory page)
})

const imageWidth = props.variant === 'gallery' ? 800 : 500
const imageSrc = computed(() => `${props.car.imageBase}&w=${imageWidth}`)
const specs = computed(() => [props.car.engineSpec, props.car.transmission, props.car.drivetrain])
const waHref = computed(
  () => `https://wa.me/2348000000000?text=${encodeURIComponent(props.car.whatsappMessage)}`
)
const isFeaturedBadge = computed(() => props.car.badgeExtra === 'Featured')
const catBadgeClass = computed(() => (props.car.badgeCategory === 'Electric' ? 'badge-ev' : 'badge-cat'))
const statusLabel = computed(() =>
  props.car.status.replace(/_/g, ' ').replace(/^./, (c) => c.toUpperCase())
)
</script>

<template>
  <article
    v-if="variant === 'featured'"
    class="car-card"
    :class="{ featured: isFeaturedBadge }"
    :data-tags="car.tags.join(' ')"
    v-reveal
  >
    <div class="car-img-wrap">
      <img
        :src="imageSrc"
        :alt="`${car.brand} ${car.model}`"
        style="width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block;"
      />
      <div class="car-badges">
        <span class="badge" :class="catBadgeClass">{{ car.badgeCategory }}</span>
        <span v-if="car.badgeExtra === 'New'" class="badge badge-new">New arrival</span>
        <span v-else-if="isFeaturedBadge" class="badge badge-featured">Featured</span>
      </div>
    </div>
    <div class="car-info">
      <div class="car-meta">
        <span class="car-brand">{{ car.brand }}</span>
        <span class="car-year">{{ car.year }}</span>
      </div>
      <h3 class="car-name">{{ car.model }}</h3>
      <div class="car-specs">
        <template v-for="(spec, i) in specs" :key="spec">
          <span>{{ spec }}</span>
          <span v-if="i < specs.length - 1">·</span>
        </template>
      </div>
      <div class="car-footer">
        <div class="car-price">₦{{ car.price.toLocaleString('en-NG') }}</div>
        <a :href="waHref" class="btn-enquire" target="_blank" rel="noopener">Enquire</a>
      </div>
    </div>
  </article>

  <article
    v-else
    class="gallery-card"
    :class="{ 'gallery-card-featured': isFeaturedBadge }"
    :data-tags="car.tags.join(' ')"
    v-reveal
  >
    <div class="gallery-media">
      <div class="gallery-img">
        <img :src="imageSrc" :alt="`${car.brand} ${car.model}`" loading="lazy" />
      </div>
      <div class="gallery-badges">
        <span class="badge" :class="catBadgeClass">{{ car.badgeCategory }}</span>
        <span v-if="car.badgeExtra === 'New'" class="badge badge-new">New</span>
        <span v-else-if="isFeaturedBadge" class="badge badge-featured">Featured</span>
      </div>
      <div class="gallery-overlay">
        <a :href="waHref" class="btn-primary" target="_blank" rel="noopener">Enquire now</a>
      </div>
    </div>
    <div class="gallery-caption">
      <div class="gallery-meta">
        <span class="car-brand">{{ car.brand }}</span>
        <span class="car-year">{{ car.year }}</span>
      </div>
      <h2 class="gallery-name">{{ car.model }}</h2>
      <p class="gallery-specs">{{ specs.join(' · ') }}</p>
      <div class="gallery-footer">
        <span class="gallery-price">₦{{ car.price.toLocaleString('en-NG') }}</span>
        <span class="gallery-status">{{ statusLabel }}</span>
      </div>
    </div>
  </article>
</template>
