const skillGroups = [
  {
    number: '01',
    title: 'AI & Machine Learning',
    description: 'Intelligent systems and machine learning',
    skills: [
      'Python',
      'Machine Learning',
      'NLP',
      'Deep Learning',
      'Generative AI',
      'LLMs',
      'Scikit-learn',
    ],
  },
  {
    number: '02',
    title: 'Web Development',
    description: 'Frontend, backend and API development',
    skills: [
      'React',
      'JavaScript',
      'Node.js',
      'Express.js',
      'FastAPI',
      'REST APIs',
    ],
  },
  {
    number: '03',
    title: 'Databases',
    description: 'Data management and database systems',
    skills: [
      'SQL',
      'MySQL',
      'SQLite',
      'Database Design',
      'CRUD Operations',
      'Data Modeling',
    ],
  },
  {
    number: '04',
    title: 'Cloud, Data & Tools',
    description: 'Cloud technologies, analytics and development tools',
    skills: [
      'Cloud Computing',
      'Power BI',
      'Excel',
      'Git',
      'GitHub',
      'VS Code',
      'Vercel',
    ],
  },
  {
    number: '05',
    title: 'CS Fundamentals',
    description: 'Core computer science concepts and subjects',
    skills: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOP)',
      'Operating Systems (OS)',
      'DBMS',
      'Computer Networks (CN)',
    ],
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#F8FAFC] px-6 py-28 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================
            HEADER
        ========================= */}

        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#356AE6]">
              Skills
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[#101828] md:text-5xl">
              What I work with.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#667085] md:text-right">
            Technologies and tools I use to build intelligent,
            data-driven and full-stack applications.
          </p>

        </div>


        {/* =========================
            TABLE HEADER
        ========================= */}

        <div className="hidden border-y border-[#D0D5DD] py-4 md:grid md:grid-cols-[80px_280px_1fr] md:gap-8">

          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#98A2B3]">
            No.
          </span>

          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#98A2B3]">
            Category
          </span>

          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#98A2B3]">
            Technologies
          </span>

        </div>


        {/* =========================
            SKILLS TABLE
        ========================= */}

        <div className="border-b border-[#D0D5DD]">

          {skillGroups.map((group) => (

            <div
              key={group.number}
              className="
                group
                border-b
                border-[#E4E7EC]
                last:border-b-0
                transition-all
                duration-300
                hover:bg-white
                hover:px-4
                md:grid
                md:grid-cols-[80px_280px_1fr]
                md:gap-8
                md:px-4
                md:py-8
              "
            >

              {/* =========================
                  NUMBER
              ========================= */}

              <div className="hidden items-start pt-1 md:flex">

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
                  {group.number}
                </span>

              </div>


              {/* =========================
                  CATEGORY
              ========================= */}

              <div className="pt-7 md:pt-1">

                <div className="flex items-center justify-between md:block">

                  <h3
                    className="
                      text-lg
                      font-semibold
                      text-[#101828]
                      transition-colors
                      duration-300
                      group-hover:text-[#356AE6]
                    "
                  >
                    {group.title}
                  </h3>

                  {/* Mobile number */}

                  <span className="text-xs font-medium text-[#98A2B3] md:hidden">
                    {group.number}
                  </span>

                </div>

                <p className="mt-2 text-sm text-[#98A2B3]">
                  {group.description}
                </p>

              </div>


              {/* =========================
                  TECHNOLOGIES
              ========================= */}

              <div className="flex flex-wrap gap-2 pb-7 pt-5 md:pb-0 md:pt-0">

                {group.skills.map((skill) => (

                  <span
                    key={skill}
                    className="
                      rounded-md
                      border
                      border-[#E4E7EC]
                      bg-white
                      px-3
                      py-2
                      text-xs
                      font-medium
                      text-[#667085]
                      transition-all
                      duration-300
                      group-hover:border-[#D0D5DD]
                      hover:-translate-y-0.5
                      hover:border-[#356AE6]
                      hover:bg-[#EEF4FF]
                      hover:text-[#356AE6]
                      hover:shadow-sm
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>


        {/* =========================
            BOTTOM NOTE
        ========================= */}

        <div className="mt-8 flex items-center justify-between">

          <p className="text-xs text-[#98A2B3]">
            Always learning. Always building.
          </p>

          <div className="flex items-center gap-2">

            <span className="h-1.5 w-1.5 rounded-full bg-[#356AE6]" />

            <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#98A2B3]">
              Tech Stack
            </span>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills