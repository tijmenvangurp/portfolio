/**
 * Adds `is-visible` to `.animate-on-scroll` elements once they enter the
 * viewport. Returns a cleanup that disconnects the observer.
 */
export function animateOnScroll(): () => void {
  if (typeof IntersectionObserver === "undefined") {
    return () => {}
  }

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible")
        observer.unobserve(entry.target)
      }
    }
  })

  document.querySelectorAll(".animate-on-scroll").forEach((target) => {
    observer.observe(target)
  })

  return () => observer.disconnect()
}
