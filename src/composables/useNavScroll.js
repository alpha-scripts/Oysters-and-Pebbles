import { onMounted, onUnmounted, ref } from 'vue'

export function useNavScroll(threshold = 80) {
  const scrolled = ref(false)

  const onScroll = () => {
    scrolled.value = window.scrollY > threshold
  }

  onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
  onUnmounted(() => window.removeEventListener('scroll', onScroll))

  return { scrolled }
}
