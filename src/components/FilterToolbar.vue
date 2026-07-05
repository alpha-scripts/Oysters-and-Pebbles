<script setup>
defineProps({
  filters: { type: Array, required: true }, // [{ label, value }]
  modelValue: { type: String, required: true },
  visibleCount: { type: Number, default: null },
  totalCount: { type: Number, default: null }
})
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="car-filters" role="group" aria-label="Filter inventory">
    <button
      v-for="f in filters"
      :key="f.value"
      class="filter-btn"
      :class="{ active: modelValue === f.value }"
      :data-filter="f.value"
      @click="$emit('update:modelValue', f.value)"
    >
      {{ f.label }}
    </button>
  </div>
  <p v-if="visibleCount !== null" class="inventory-count">
    <span>{{ visibleCount }}</span> of <span>{{ totalCount }}</span> shown
  </p>
</template>
