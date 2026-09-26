/**
 * Centralised motion configuration.
 *
 * One motion language for the whole portfolio. Durations are mirrored in
 * src/index.css (--ease-out-soft, keyframe timings) so keep them in sync.
 */
export const MOTION = {
  micro: 180,
  standard: 380,
  section: 640,
  cinematic: 900,
  stagger: {
    tight: 70,
    base: 90,
    loose: 120,
  },
}

/** Builds a staggered delay for the nth item in a group. */
export function staggerDelay(index, step = MOTION.stagger.base, offset = 0) {
  return offset + index * step
}

/** True when the visitor asked the OS to reduce motion. */
export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/** IntersectionObserver support (and a browser at all). */
export function canObserve() {
  return typeof window !== 'undefined' && typeof IntersectionObserver !== 'undefined'
}

/** True on pointer devices with a real mouse. Used to gate cursor effects. */
export function hasFinePointer() {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(pointer: fine)').matches
  )
}

/** True on small screens, where motion distances are reduced. */
export function isCompactViewport() {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(max-width: 767px)').matches
  )
}
