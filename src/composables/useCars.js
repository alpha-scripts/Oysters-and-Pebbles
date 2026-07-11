import { ref } from 'vue'

export function useCars(params = {}) {
  const cars = ref([])
  const loading = ref(true)
  const error = ref(null)

  const query = new URLSearchParams(params).toString()

  fetch(`/api/cars${query ? `?${query}` : ''}`)
    .then((res) => {
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      return res.json()
    })
    .then((data) => {
      cars.value = data
    })
    .catch((err) => {
      error.value = err
    })
    .finally(() => {
      loading.value = false
    })

  return { cars, loading, error }
}
