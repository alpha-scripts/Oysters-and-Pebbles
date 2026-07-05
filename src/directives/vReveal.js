let sharedObserver = null

function getObserver() {
  if (sharedObserver) return sharedObserver
  if (!window.IntersectionObserver) return null

  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          sharedObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 }
  )
  return sharedObserver
}

export const vReveal = {
  mounted(el) {
    el.classList.add('reveal')
    const observer = getObserver()
    if (!observer) {
      el.classList.add('visible')
      return
    }
    observer.observe(el)
  },
  unmounted(el) {
    sharedObserver?.unobserve(el)
  }
}
