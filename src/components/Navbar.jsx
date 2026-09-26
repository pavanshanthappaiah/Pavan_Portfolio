import { useEffect, useRef, useState } from 'react'

const navItems = [
  { name: 'Work', id: 'work' },
  { name: 'Coding', id: 'coding' },
  { name: 'Skills', id: 'skills' },
  { name: 'About Me', id: 'about' },
  { name: 'Education', id: 'education' },
  { name: 'Resume', id: 'resume' },
  { name: 'Contact', id: 'contact' },
]

const COMPACT_QUERY = '(max-width: 767px)'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const menuRef = useRef(null)
  const triggerRef = useRef(null)
  const focusMenuOnOpen = useRef(false)

  const [isCompact, setIsCompact] = useState(
    () =>
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia(COMPACT_QUERY).matches,
  )

  /* The mobile toolbar only exists on compact viewports. */
  useEffect(() => {
    if (typeof window.matchMedia !== 'function') {
      return undefined
    }

    const query = window.matchMedia(COMPACT_QUERY)
    const syncCompact = () => setIsCompact(query.matches)

    syncCompact()
    query.addEventListener('change', syncCompact)

    return () => query.removeEventListener('change', syncCompact)
  }, [])

  /* Subtle navbar transition once the page starts moving. */
  useEffect(() => {
    const syncScrolled = () => setIsScrolled(window.scrollY > 8)

    syncScrolled()
    window.addEventListener('scroll', syncScrolled, { passive: true })

    return () => window.removeEventListener('scroll', syncScrolled)
  }, [])

  /* Active section indicator, driven by whichever section crosses the middle. */
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return undefined
    }

    const sections = ['home', ...navItems.map((item) => item.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (sections.length === 0) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          setActiveSection(visible[0].target.id)
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  /* Mobile menu: scroll lock, Escape, and keyboard focus handling. */
  useEffect(() => {
    if (!isMenuOpen || !isCompact) {
      return undefined
    }

    const trigger = triggerRef.current
    const shouldRestoreFocus = focusMenuOnOpen.current

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    if (shouldRestoreFocus) {
      menuRef.current?.querySelector('a')?.focus()
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', closeOnEscape)

      if (shouldRestoreFocus) {
        trigger?.focus()
      }
    }
  }, [isMenuOpen, isCompact])

  const openMenu = (moveFocus = false) => {
    focusMenuOnOpen.current = moveFocus
    setIsMenuOpen(true)
  }

  const handleNavigation = (event, sectionId) => {
    event.preventDefault()
    setActiveSection(sectionId)
    setIsMenuOpen(false)

    const section = document.getElementById(sectionId)

    if (!section) {
      return
    }

    document.querySelectorAll('.section--navigated').forEach((element) => {
      element.classList.remove('section--navigated')
    })

    section.classList.add('section--navigated')
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })

    window.setTimeout(() => {
      section.classList.remove('section--navigated')
    }, 850)
  }

  return (
    <nav
      className={`sticky top-0 z-[100] border-b border-[#E4E7EC] bg-white/95 backdrop-blur${
        isScrolled ? ' is-scrolled' : ''
      }`}
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse' && isCompact) {
          openMenu(false)
        }
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === 'mouse' && isCompact) {
          setIsMenuOpen(false)
        }
      }}
    >
      <div className="nav-inner mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-16">

        {/* Logo */}
        <a
          href="#top"
          aria-label="Pavan S — back to top"
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#356AE6] text-sm font-bold text-white">
            PS
          </div>

          <span className="hidden text-lg font-semibold text-[#101828] lg:inline">
            Pavan S
          </span>
        </a>

        {/* Navigation */}
        <div className="desktop-nav hidden items-center gap-4 md:flex lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => handleNavigation(event, item.id)}
              aria-current={activeSection === item.id ? 'page' : undefined}
              className="whitespace-nowrap text-sm font-medium text-[#475467] transition-colors duration-200 hover:text-[#356AE6]"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Integrated mobile toolbar and social links */}
        <div className="mobile-toolbar flex items-center gap-2 md:flex">

          <button
            ref={triggerRef}
            type="button"
            aria-label={isMenuOpen ? 'Close navigation toolbar' : 'Open navigation toolbar'}
            aria-expanded={isMenuOpen}
            onClick={() => (isMenuOpen ? setIsMenuOpen(false) : openMenu(true))}
            className="flex h-10 items-center gap-2 rounded-lg border border-[#E4E7EC] px-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#475467] transition-all duration-200 hover:border-[#356AE6] hover:text-[#356AE6] md:hidden"
          >
            <span className="flex w-4 flex-col gap-1">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
            </span>
            Menu
          </button>

          <a
            href="https://github.com/pavanshanthappaiah"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E4E7EC] text-[#475467] transition-all duration-200 hover:-translate-y-1 hover:border-[#356AE6] hover:text-[#356AE6]"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.15c-3.19.69-3.86-1.54-3.86-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.94 10.94 0 0 1 12 8.15c.97 0 1.94.13 2.85.38 2.18-1.49 3.14-1.18 3.14-1.18.62 1.59.23 2.77.12 3.06.73.81 1.17 1.84 1.17 3.1 0 4.42-2.69 5.4-5.25 5.68.41.35.77 1.04.77 2.1v3.12c0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/pavanshanthappaiah/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E4E7EC] text-[#475467] transition-all duration-200 hover:-translate-y-1 hover:border-[#356AE6] hover:text-[#356AE6]"
          >
            <span className="text-sm font-bold">
              in
            </span>
          </a>

        </div>

      </div>

      {isMenuOpen && isCompact && (
        <>
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={() => setIsMenuOpen(false)}
            className="fixed bottom-0 left-0 right-0 top-[76px] z-40 bg-[#203B49]/25 md:hidden"
          />

          <div
            ref={menuRef}
            role="dialog"
            aria-label="Mobile navigation"
            className="mobile-menu fixed left-0 right-0 top-[76px] z-50 max-h-[calc(100dvh-76px)] overflow-y-auto border-t border-[#E4E7EC] bg-white px-6 py-4 shadow-xl md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => handleNavigation(event, item.id)}
                aria-current={activeSection === item.id ? 'page' : undefined}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-[#475467] transition-colors duration-200 hover:bg-[#F2F4F7] hover:text-[#356AE6]"
              >
                {item.name}
              </a>
            ))}
            </div>
          </div>
        </>
      )}
    </nav>
  )
}

export default Navbar
