import Reveal from './motion/Reveal'
import { MOTION, staggerDelay } from '../lib/motion'

const skillGroups = [
  {
    number: '01',
    title: 'Cloud',
    description: 'Cloud platforms and deployment infrastructure',
    skills: [
      'AWS',
      'Docker',
      'Kubernetes',
    ],
  },
  {
    number: '02',
    title: 'Programming Languages',
    description: 'Languages I write in day to day',
    skills: [
      'Python',
      'C++',
      'SQL',
      'Bash',
    ],
  },
  {
    number: '03',
    title: 'Web Development',
    description: 'Frontend, backend and API development',
    skills: [
      'React',
      'JavaScript',
      'Node.js',
      'Express.js',
    ],
  },
  {
    number: '04',
    title: 'AI & Machine Learning',
    description: 'Applied models, agents and GenAI systems',
    skills: [
      'Machine Learning',
      'NLP',
      'LLMs',
      'Generative AI',
      'RAG',
      'MCP',
    ],
  },
  {
    number: '05',
    title: 'Tools',
    description: 'Analytics, version control and CI/CD',
    skills: [
      'Power BI',
      'Excel',
      'Git',
      'GitHub',
      'CI/CD',
      'MySQL',
    ],
  },
  {
    number: '06',
    title: 'CS Fundamentals',
    description: 'Core computer science concepts and subjects',
    skills: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOP)',
      'Operating Systems (OS)',
      'DBMS',
      'Computer Networks (CN)',
      'Cloud Computing',
    ],
  },
]

/* Caps the per-pill stagger so late pills never lag behind the pointer. */
const MAX_PILL_STAGGER = 6

function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-28 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================
            HEADER
        ========================= */}

        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <Reveal
              as="p"
              x={-22}
              className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#356AE6]"
            >
              Skills
            </Reveal>

            <Reveal delay={MOTION.stagger.tight}>
              <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[#101828] md:text-5xl">
                What I work with.
              </h2>
            </Reveal>
          </div>

          <Reveal
            as="p"
            delay={MOTION.stagger.tight * 2}
            x={22}
            className="max-w-md text-sm leading-7 text-[#667085] md:text-right"
          >
            Technologies and tools I use to build intelligent,
            data-driven and full-stack applications.
          </Reveal>

        </div>


        {/* =========================
            COLUMN HEADER
        ========================= */}

        <Reveal
          className="skills-head"
          delay={MOTION.stagger.tight * 3}
          distance={12}
        >
          <span>No.</span>
          <span>Category</span>
          <span>Technologies</span>
        </Reveal>


        {/* =========================
            SKILLS INDEX
        ========================= */}

        <div className="skills-table">

          {skillGroups.map((group, groupIndex) => (

            <Reveal
              key={group.number}
              delay={staggerDelay(groupIndex, 60, MOTION.stagger.tight * 4)}
              distance={12}
              className="skill-row"
            >

              {/* NUMBER */}
              <span className="skill-row__number">
                {group.number}
              </span>


              {/* CATEGORY */}
              <div className="skill-row__category">

                <h3 className="skill-row__title">
                  {group.title}
                </h3>

                <p className="skill-row__description">
                  {group.description}
                </p>

              </div>


              {/* TECHNOLOGIES */}
              <div className="skill-row__tech">

                {group.skills.map((skill, skillIndex) => (

                  <span
                    key={skill}
                    className="skill-pill"
                    style={{ '--stagger': Math.min(skillIndex, MAX_PILL_STAGGER) }}
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </Reveal>

          ))}

        </div>


        {/* =========================
            BOTTOM NOTE
        ========================= */}

        <Reveal
          delay={MOTION.stagger.loose}
          className="mt-8 flex items-center justify-between"
        >

          <p className="text-xs text-[#98A2B3]">
            Always learning. Always building.
          </p>

          <div className="flex items-center gap-2">

            <span className="h-1.5 w-1.5 rounded-full bg-[#356AE6]" />

            <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#98A2B3]">
              Tech Stack
            </span>

          </div>

        </Reveal>

      </div>
    </section>
  )
}

export default Skills
