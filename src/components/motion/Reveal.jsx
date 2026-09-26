import { useEffect, useRef, useState } from 'react'
import { canObserve, isCompactViewport, prefersReducedMotion } from '../../lib/motion'

/**
 * Scroll reveal.
 *
 * Renders the element it wraps (via `as`) so existing markup structure is
 * preserved — no extra DOM nodes, no broken structural CSS selectors.
 *
 * Content is visible by default. The hidden state is only applied when the
 * browser can observe AND the visitor has not asked for reduced motion, so a
 * failure (no IntersectionObserver, reduce motion, JS error) always leaves the
 * page fully readable.
 */
function Reveal({
  as: Tag = 'div',
  children,
  className = '',
  delay = 0,
  distance,
  x = 0,
  scale,
  threshold = 0.12,
  rootMargin = '0px 0px -8% 0px',
  once = true,
  ...rest
}) {
  const nodeRef = useRef(null)
  const [armed] = useState(() => canObserve() && !prefersReducedMotion())
  const [visible, setVisible] = useState(() => !armed)

  useEffect(() => {
    if (!armed) {
      return undefined
    }

    const node = nodeRef.current
    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            setVisible(false)
          }
        })
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [armed, once, rootMargin, threshold])

  const baseDistance = distance ?? 20
  /* Compact screens get 60% travel on both axes. */
  const compactFactor = isCompactViewport() ? 0.6 : 1
  const travelY = Math.round(baseDistance * compactFactor)
  const travelX = Math.round(x * compactFactor)

  const style = {
    '--reveal-delay': `${delay}ms`,
    '--reveal-x': `${travelX}px`,
    '--reveal-y': `${travelY}px`,
    ...(scale === undefined ? null : { '--reveal-scale': String(scale) }),
    ...rest.style,
  }

  return (
    <Tag
      {...rest}
      ref={nodeRef}
      style={style}
      className={className ? `reveal ${className}` : 'reveal'}
      data-reveal={armed ? (visible ? 'shown' : 'pending') : undefined}
    >
      {children}
    </Tag>
  )
}

export default Reveal
