import Reveal from './motion/Reveal'
import { MOTION, staggerDelay } from '../lib/motion'

const education = [
  {
    year: '2023 — Present',
    degree: 'B.E. in Computer Science and Engineering',
    field: 'Artificial Intelligence & Machine Learning',
    institution: 'Siddaganga Institute of Technology, Tumkur',
    score: 'CGPA: 9.06 / 10',
  },
  {
    year: '2021 — 2023',
    degree: 'Pre-University Course',
    field: 'Science',
    institution: 'Sri Siddaganga PU College, Davangere',
    score: '94.33%',
  },
]

function Education() {
  return (
    <section
      id="education"
      className="bg-white px-6 py-28 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <Reveal
              as="p"
              x={-22}
              className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#356AE6]"
            >
              Education
            </Reveal>

            <Reveal delay={MOTION.stagger.base}>
              <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[#101828] md:text-5xl">
                Where I'm learning.
              </h2>
            </Reveal>
          </div>

          <Reveal
            as="p"
            delay={MOTION.stagger.loose * 2}
            x={22}
            className="max-w-md text-sm leading-7 text-[#667085] md:text-right"
          >
            My academic journey and the foundation behind my
            interest in technology and intelligent systems.
          </Reveal>

        </div>


        {/* Education Table */}
        <div className="border-t border-[#D0D5DD]">

          {/* Table Header */}
          <div className="hidden border-b border-[#E4E7EC] py-4 md:grid md:grid-cols-[170px_1fr_150px] md:gap-8 md:px-6">

            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#98A2B3]">
              Period
            </span>

            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#98A2B3]">
              Education
            </span>

            <span className="text-right text-xs font-semibold uppercase tracking-[0.15em] text-[#98A2B3]">
              Score
            </span>

          </div>


          {/* Education Rows */}
          {education.map((item, index) => (

            <Reveal
              key={index}
              delay={staggerDelay(index, MOTION.stagger.loose)}
              distance={16}
              className="
                group
                border-b
                border-[#E4E7EC]
                px-0
                py-9
                transition-all
                duration-300
                hover:bg-[#F8FAFC]
                md:grid
                md:grid-cols-[170px_1fr_150px]
                md:gap-8
                md:px-6
              "
            >

              {/* Period */}
              <div className="mb-4 md:mb-0">

                <span
                  className="
                    text-sm
                    font-medium
                    text-[#98A2B3]
                    transition-colors
                    duration-300
                    group-hover:text-[#356AE6]
                  "
                >
                  {item.year}
                </span>

              </div>


              {/* Education Details */}
              <div>

                <h3
                  className="
                    text-lg
                    font-semibold
                    text-[#101828]
                    transition-colors
                    duration-300
                    group-hover:text-[#356AE6]
                    md:text-xl
                  "
                >
                  {item.degree}
                </h3>

                <p className="mt-1 text-sm font-medium text-[#356AE6]">
                  {item.field}
                </p>

                <p className="mt-3 text-sm text-[#344054]">
                  {item.institution}
                </p>

              </div>


              {/* Score */}
              <div className="mt-5 md:mt-0 md:text-right">

                <span
                  className="
                    inline-block
                    rounded-full
                    border
                    border-[#E4E7EC]
                    bg-white
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-[#344054]
                    transition-all
                    duration-300
                    group-hover:border-[#B2CCFF]
                    group-hover:bg-[#EEF4FF]
                    group-hover:text-[#356AE6]
                  "
                >
                  {item.score}
                </span>

              </div>

            </Reveal>

          ))}

        </div>


        {/* Bottom Note */}
        <Reveal
          delay={MOTION.stagger.loose}
          className="mt-8 flex items-center justify-between"
        >

          <p className="text-xs text-[#98A2B3]">
            Computer Science · AI & ML
          </p>

          <div className="flex items-center gap-2">

            <span className="h-1.5 w-1.5 rounded-full bg-[#356AE6]" />

            <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#98A2B3]">
              Academic Journey
            </span>

          </div>

        </Reveal>

      </div>
    </section>
  )
}

export default Education