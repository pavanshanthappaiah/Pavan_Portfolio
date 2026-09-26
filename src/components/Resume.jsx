import resume from "../assets/Pavan_S_CV.pdf"
import Reveal from './motion/Reveal'
import { MOTION } from '../lib/motion'

function Resume() {
  return (
    <section
      id="resume"
      className="bg-[#F8FAFC] px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* Left */}
          <div>
            <Reveal
              as="p"
              x={-22}
              className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#356AE6]"
            >
              Resume
            </Reveal>

            <Reveal delay={MOTION.stagger.base} as="h2" className="text-4xl font-semibold tracking-[-0.03em] text-[#101828] md:text-5xl">
              A little more
              <span className="block text-[#356AE6]">
                about my journey.
              </span>
            </Reveal>
          </div>

          {/* Right */}
          <div className="max-w-2xl">

            <Reveal
              as="p"
              delay={MOTION.stagger.loose * 2}
              x={22}
              className="text-base leading-8 text-[#667085]"
            >
              Interested in learning more about my education, skills,
              projects, and experience? Take a look at my resume.
            </Reveal>

            <Reveal
              as="div"
              delay={MOTION.stagger.loose * 3}
              distance={14}
              className="mt-8 flex flex-wrap gap-4"
            >

              {/* View Resume */}
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="
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
                View Resume
                <span>↗</span>
              </a>

              {/* Download Resume */}
              <a
                href={resume}
                download="Pavan_S_CV.pdf"
                className="
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
                Download Resume
                <span>↓</span>
              </a>

            </Reveal>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Resume