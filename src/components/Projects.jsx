import { useState } from 'react'

const projects = [
  {
    number: '01',
    title: 'Vividha Kannada',
    subtitle: 'Multi-Dialect Kannada Intelligence',
    description:
      'An AI-powered Kannada language framework that identifies regional dialects — Dharwad, Mangaluru, Kundapura, and Standard Kannada — through a hybrid pipeline combining rule-based cues, a trained IndicBERT classifier, and Gemini fallback for hard cases. It detects Kannada script, Kanglish, and code-mixed text, then normalizes dialectal and romanized input into clean Standard Kannada with an mT5 sequence-to-sequence model, followed by sentiment analysis on the cleaned output. A FastAPI backend and voice-enabled web interface make it usable both as an everyday app and as a REST API.',
    category: 'AI / NLP',
    technologies: [
      'Python',
      'NLP',
      'FastAPI',
      'IndicBERT',
      'mT5',
      'Gemini',
    ],
    github:
      'https://github.com/pavanshanthappaiah/vividha-kannada',
  },

  {
    number: '02',
    title: 'Expense Tracker',
    subtitle: 'Personal Finance Platform with AI Assistant',
    description:
      'A full-stack personal finance application for tracking expenses, managing budgets, analyzing spending, and scheduling recurring expenses — with an integrated AI chatbot that grounds its answers in live app data (RAG) and can add, update, or delete expenses through Model Context Protocol (MCP) tool calling.',
    category: 'Full Stack',
    technologies: [
      'React',
      'Node.js',
      'Express',
      'SQL',
      'REST API',
      'MCP',
      'RAG',
      'Gemini AI',
      'Ollama',
    ],
    github:
      'https://github.com/pavanshanthappaiah/Expense-Tracker',
    live:
      'https://expensetracker00.vercel.app/',
  },

  {
    number: '03',
    title: 'Autonomous Ecom Agent',
    subtitle: 'AI-Powered E-commerce Price Intelligence',
    description:
      'A full-stack price intelligence platform that tracks products across Amazon, Flipkart, Walmart, eBay, and other e-commerce platforms. A dedicated Python Flask microservice handles web scraping with BeautifulSoup and Selenium, feeding live prices into a MERN application secured with JWT authentication and backed by on-demand refresh flows and price history. A Gemini-powered AI assistant completes the experience with context-aware product guidance, real-time streaming responses, and conversation memory.',
    category: 'AI / E-commerce',
    technologies: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Python',
      'Flask',
      'BeautifulSoup',
      'Selenium',
      'Gemini AI',
      'JWT',
    ],
    github:
      'https://github.com/pavanshanthappaiah/Autonomous-Ecom-Agent',
  },
]


function Projects() {
  const [activeProject, setActiveProject] = useState(0)
  const [slideDirection, setSlideDirection] = useState('next')

  const showPreviousProject = () => {
    setSlideDirection('previous')
    setActiveProject((current) =>
      current === 0 ? projects.length - 1 : current - 1,
    )
  }

  const showNextProject = () => {
    setSlideDirection('next')
    setActiveProject((current) =>
      current === projects.length - 1 ? 0 : current + 1,
    )
  }

  return (
    <section
      id="work"
      className="bg-white px-6 py-28 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* ==================================================
            SECTION HEADER
        ================================================== */}

        <div className="mb-16">

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#356AE6]">
            Selected Work
          </p>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[#101828] md:text-5xl lg:text-6xl">
              Things I've built.
            </h2>

            <p className="max-w-md text-sm leading-7 text-[#667085] md:text-right">
              A selection of projects where I explore
              artificial intelligence, NLP, machine learning,
              and full-stack development.
            </p>

          </div>

        </div>


        {/* ==================================================
            PROJECT LIST
        ================================================== */}

        <div className="border-t border-[#E4E7EC]">

          {projects.map((project, index) => (

            <article
              key={`${project.number}-${activeProject === index ? activeProject : 'hidden'}`}
              className={`
                group
                border-b
                border-[#E4E7EC]
                py-12
                transition-all
                duration-300
                md:py-16
                data-[active=false]:hidden
                project-slide
                ${index === activeProject ? `project-slide-${slideDirection}` : ''}
              `}
              data-active={activeProject === index}
            >

              <div
                className="
                  grid
                  grid-cols-1
                  gap-8
                  md:grid-cols-[70px_1fr]
                  lg:grid-cols-[80px_1fr_auto]
                  lg:gap-10
                "
              >

                {/* ==================================================
                    PROJECT NUMBER
                ================================================== */}

                <div>
                  <span
                    className="
                      text-sm
                      font-medium
                      tracking-wider
                      text-[#98A2B3]
                    "
                  >
                    {project.number}
                  </span>
                </div>


                {/* ==================================================
                    PROJECT CONTENT
                ================================================== */}

                <div>

                  {/* Category */}

                  <p
                    className="
                      mb-3
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#356AE6]
                    "
                  >
                    {project.category}
                  </p>


                  {/* Project title */}

                  <h3
                    className="
                      text-3xl
                      font-semibold
                      tracking-[-0.025em]
                      text-[#101828]
                      transition-colors
                      duration-300
                      group-hover:text-[#356AE6]
                      md:text-4xl
                    "
                  >
                    {project.title}
                  </h3>


                  {/* Project subtitle */}

                  <p
                    className="
                      mt-2
                      text-lg
                      font-medium
                      text-[#344054]
                    "
                  >
                    {project.subtitle}
                  </p>


                  {/* Description */}

                  <p
                    className="
                      mt-5
                      max-w-3xl
                      text-sm
                      leading-7
                      text-[#667085]
                      md:text-base
                    "
                  >
                    {project.description}
                  </p>


                  {/* ==================================================
                      MOBILE BUTTONS
                  ================================================== */}

                  <div className="mt-8 flex flex-wrap gap-3 lg:hidden">

                    {/* Live Demo */}

                    {project.live && (

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-lg
                          bg-[#101828]
                          px-5
                          py-3
                          text-sm
                          font-medium
                          text-white
                          transition-all
                          duration-300
                          hover:bg-[#356AE6]
                        "
                      >
                        Live Demo
                        <span>↗</span>
                      </a>

                    )}


                    {/* GitHub */}

                    {project.github && (

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-lg
                          border
                          border-[#D0D5DD]
                          bg-white
                          px-5
                          py-3
                          text-sm
                          font-medium
                          text-[#101828]
                          transition-all
                          duration-300
                          hover:border-[#356AE6]
                          hover:text-[#356AE6]
                        "
                      >
                        GitHub
                        <span>↗</span>
                      </a>

                    )}

                  </div>

                </div>


                {/* ==================================================
                    DESKTOP ACTIONS
                ================================================== */}

                <div
                  className="
                    hidden
                    items-center
                    gap-3
                    lg:flex
                  "
                >

                  {/* Live Demo */}

                  {project.live && (

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-lg
                        bg-[#101828]
                        px-5
                        py-3
                        text-sm
                        font-medium
                        text-white
                        transition-all
                        duration-300
                        hover:bg-[#356AE6]
                      "
                    >
                      Live Demo
                      <span>↗</span>
                    </a>

                  )}


                  {/* GitHub */}

                  {project.github && (

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#D0D5DD]
                        text-lg
                        text-[#101828]
                        transition-all
                        duration-300
                        hover:border-[#356AE6]
                        hover:bg-[#356AE6]
                        hover:text-white
                      "
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      →
                    </a>

                  )}

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* ==================================================
            CIRCULAR PROJECT CONTROLS
        ================================================== */}

        <div className="mt-8 flex flex-wrap items-center justify-between gap-5">

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={showPreviousProject}
              aria-label="Show previous project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D0D5DD] text-lg text-[#203B49] transition-all duration-200 hover:border-[#EC6A4F] hover:bg-[#EC6A4F] hover:text-white"
            >
              ←
            </button>

            <button
              type="button"
              onClick={showNextProject}
              aria-label="Show next project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D0D5DD] text-lg text-[#203B49] transition-all duration-200 hover:border-[#EC6A4F] hover:bg-[#EC6A4F] hover:text-white"
            >
              →
            </button>
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#66736D]">
            {String(activeProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </p>

        </div>


        {/* ==================================================
            PROJECT COUNT
        ================================================== */}

        <div className="mt-10 flex items-center justify-between">

          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#98A2B3]">
            03 Featured Projects
          </p>

          <div className="flex items-center gap-3">

            <span className="h-1.5 w-1.5 rounded-full bg-[#356AE6]" />

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#98A2B3]">
              More coming soon
            </span>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Projects