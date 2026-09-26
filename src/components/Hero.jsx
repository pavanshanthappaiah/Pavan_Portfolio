import { useCallback, useEffect, useRef, useState } from 'react'
import pavanImage from '../assets/pavan.png'
import { hasFinePointer, prefersReducedMotion } from '../lib/motion'

/* Very small cursor-driven depth on the hero portrait (desktop pointers only). */
const DEPTH_LIMIT = 7

function Hero() {
  const photoRef = useRef(null)
  const frameRef = useRef(0)
  const [depth, setDepth] = useState(null)

  const [allowDepth] = useState(() => hasFinePointer() && !prefersReducedMotion())

  useEffect(() => () => cancelAnimationFrame(frameRef.current), [])

  const handlePointerMove = useCallback(
    (event) => {
      if (!allowDepth) {
        return
      }

      const node = photoRef.current
      if (!node) {
        return
      }

      const rect = node.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) {
        return
      }

      const offsetX = (event.clientX - rect.left) / rect.width - 0.5
      const offsetY = (event.clientY - rect.top) / rect.height - 0.5

      cancelAnimationFrame(frameRef.current)
      frameRef.current = requestAnimationFrame(() => {
        setDepth({
          x: Number((offsetX * DEPTH_LIMIT * 2).toFixed(2)),
          y: Number((offsetY * DEPTH_LIMIT * 2).toFixed(2)),
        })
      })
    },
    [allowDepth],
  )

  const handlePointerLeave = useCallback(() => {
    cancelAnimationFrame(frameRef.current)
    setDepth(null)
  }, [])

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-80px)] bg-white px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

        {/* LEFT — CONTENT */}
        <div className="order-1 lg:order-1">

          {/* Label */}
          <div
            className="hero-enter mb-6 flex items-center gap-3"
            style={{ '--hero-delay': '120ms' }}
          >
            <span className="h-px w-8 bg-[#356AE6]" />

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#356AE6]">
              AI / ML Student & Developer
            </p>
          </div>

          {/* Heading — staggered line reveal */}
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#101828] sm:text-6xl md:text-7xl">
            <span
              className="hero-enter block"
              style={{ '--hero-delay': '220ms' }}
            >
              Turning ideas into
            </span>

            <span
              className="hero-enter block text-[#356AE6]"
              data-accent
              style={{ '--hero-delay': '300ms' }}
            >
              intelligent solutions.
            </span>
          </h1>

          {/* Description */}
          <p
            className="hero-enter mt-7 max-w-2xl text-base leading-8 text-[#667085] md:text-lg"
            style={{ '--hero-delay': '400ms' }}
          >
            I'm Pavan S, a Computer Science student interested in
            Artificial Intelligence, Machine Learning, NLP, and
            full-stack development. I enjoy building practical
            applications that solve real-world problems.
          </p>

          {/* Buttons */}
          <div
            className="hero-enter mt-9 flex flex-wrap gap-4"
            style={{ '--hero-delay': '480ms' }}
          >

            <a
              href="#work"
              className="
                hero-cta-primary
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-[#101828]
                px-6
                py-3.5
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#356AE6]
                hover:shadow-lg
              "
            >
              View My Work
              <span>↓</span>
            </a>

            <a
              href="#contact"
              className="
                hero-cta-secondary
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-[#D0D5DD]
                bg-white
                px-6
                py-3.5
                text-sm
                font-semibold
                text-[#101828]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#356AE6]
                hover:text-[#356AE6]
              "
            >
              Contact Me
              <span>↗</span>
            </a>

          </div>

          {/* Small Info */}
          <div
            className="hero-enter mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[#E4E7EC] pt-6"
            style={{ '--hero-delay': '560ms' }}
          >

            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-[#98A2B3]">
                Focus
              </p>

              <p className="mt-1 text-sm font-medium text-[#344054]">
                AI · NLP · Full Stack
              </p>
            </div>

            <div className="hidden h-8 w-px bg-[#E4E7EC] sm:block" />

            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-[#98A2B3]">
                Currently Exploring
              </p>

              <p className="mt-1 text-sm font-medium text-[#344054]">
                AI Agents & Intelligent Systems
              </p>
            </div>

          </div>

        </div>


        {/* RIGHT — PHOTO */}
        <div className="order-2 flex justify-center lg:order-2 lg:justify-end">

          <div
            ref={photoRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            className="hero-photo group relative w-full max-w-[360px] sm:max-w-[420px]"
          >

            {/* Hover Glow */}
            <div
              className="
                absolute
                -inset-3
                rounded-[28px]
                bg-[#EEF4FF]
                opacity-0
                blur-2xl
                transition-all
                duration-500
                group-hover:opacity-100
              "
            />

            {/* Pointer depth wrapper — kept separate from the entrance animation */}
            <div
              className="relative transition-transform duration-200 ease-out will-change-transform"
              style={
                depth
                  ? { transform: `translate3d(${depth.x}px, ${depth.y}px, 0)` }
                  : undefined
              }
            >

              {/* Photo Container */}
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-[#E4E7EC]
                  bg-[#F8FAFC]
                  shadow-sm
                  transition-all
                  duration-500
                  ease-out
                  group-hover:-translate-y-2
                  group-hover:border-[#B2CCFF]
                  group-hover:shadow-2xl
                "
              >
                <img
                  src={pavanImage}
                  alt="Pavan S"
                  className="
                    block
                    h-auto
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:scale-[1.03]
                  "
                />
              </div>

            </div>

            {/* Floating Label */}
            <div
              className="
                absolute
                -bottom-5
                -left-5
                rounded-xl
                border
                border-[#E4E7EC]
                bg-white
                px-5
                py-3
                shadow-lg
                transition-all
                duration-500
                group-hover:-translate-y-1
              "
            >
              <p className="text-xs font-medium text-[#98A2B3]">
                Based in India
              </p>

              <p className="mt-0.5 text-sm font-semibold text-[#101828]">
                Pavan S
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* Scroll Indicator */}
      <div className="mx-auto mt-20 flex max-w-7xl items-center gap-3 text-[#98A2B3]">

        <span className="h-8 w-px bg-[#D0D5DD]" />

        <span className="text-xs font-medium uppercase tracking-[0.2em]">
          Scroll to explore
        </span>

      </div>

    </section>
  )
}

export default Hero
