import Reveal from './motion/Reveal'
import { MOTION, staggerDelay } from '../lib/motion'
const GITHUB_PATH =
  'M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.15c-3.19.69-3.86-1.54-3.86-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.94 10.94 0 0 1 12 8.15c.97 0 1.94.13 2.85.38 2.18-1.49 3.14-1.18 3.14-1.18.62 1.59.23 2.77.12 3.06.73.81 1.17 1.84 1.17 3.1 0 4.42-2.69 5.4-5.25 5.68.41.35.77 1.04.77 2.1v3.12c0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z'

/*
  Real accounts, taken from the links already used elsewhere in the portfolio.
  The handles are intentionally NOT rendered on the cards — they only feed the
  accessible name so the link destination stays unambiguous for screen readers.
*/
const codingProfiles = [
  {
    name: 'LeetCode',
    handle: 'pa1_2005',
    url: 'https://leetcode.com/u/pa1_2005/',
    icon: '</>',
  },
  {
    name: 'GitHub',
    handle: 'pavanshanthappaiah',
    url: 'https://github.com/pavanshanthappaiah',
    icon: 'github',
  },
]

function CodingProfileCard({ profile }) {
  return (
    <a
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${profile.name} profile — ${profile.handle}`}
      className="coding-card flex items-center gap-4 p-5 md:p-6"
    >
      <span className="coding-card__icon" aria-hidden="true">
        {profile.icon === 'github' ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
            <path d={GITHUB_PATH} />
          </svg>
        ) : (
          profile.icon
        )}
      </span>

      <span className="coding-card__name">{profile.name}</span>

      <span className="coding-card__arrow ml-auto" aria-hidden="true">
        ↗
      </span>
    </a>
  )
}

function Coding() {
  return (
    <section
      id="coding"
      className="px-6 py-28 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Desktop: 2 columns — left copy, right profile cards */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-16">

          {/* ==================================================
              LEFT — HEADING, DESCRIPTION, TOPICS
          ================================================== */}

          <div>

            <Reveal
              as="p"
              x={-22}
              className="section-eyebrow mb-5 text-sm font-semibold uppercase"
            >
              Coding
            </Reveal>

            <Reveal delay={MOTION.stagger.base} x={-22}>
              <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
                Problem Solving &amp; Competitive Programming
              </h2>
            </Reveal>

            <Reveal
              as="p"
              delay={MOTION.stagger.loose * 2}
              className="section-intro mt-6 max-w-xl text-base leading-8"
            >
              I practice data structures and algorithms primarily in C++,
              working through problems on LeetCode to build speed and pattern
              recognition for interviews and competitive programming.
            </Reveal>

          </div>


          {/* ==================================================
              RIGHT — PROFILE CARDS
          ================================================== */}

          <div className="flex flex-col gap-4">
            {codingProfiles.map((profile, index) => (
              <Reveal
                key={profile.name}
                delay={staggerDelay(index, MOTION.stagger.loose, 320)}
                x={22}
                distance={16}
              >
                <CodingProfileCard profile={profile} />
              </Reveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default Coding
