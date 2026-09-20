function About() {
  return (
    <section
      id="about"
      className="bg-[#F8FAFC] px-6 py-28 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Label */}
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-[#356AE6]">
          About Me
        </p>

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

          {/* Left Side */}
          <div>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#101828] md:text-5xl">
              Building ideas into
              <span className="block text-[#356AE6]">
                useful products.
              </span>
            </h2>
          </div>

          {/* Right Side */}
          <div className="max-w-2xl">

            {/* About Text */}
            <p className="text-lg leading-8 text-[#344054]">
              <strong>Hello, I'm Pavan S!</strong> I'm a Computer Science
              student interested in Artificial Intelligence, Machine Learning,
              and software development. I enjoy building practical applications
              using AI, NLP, full-stack technologies, and SQL databases. I'm
              currently exploring AI agents, intelligent systems, and backend
              development to solve real-world problems.
            </p>

            {/* LinkedIn */}
            <div className="mt-8">
              <a
                href="https://www.linkedin.com/in/pavanshanthappaiah/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-[#101828]
                  transition-colors
                  duration-300
                  hover:text-[#356AE6]
                "
              >
                Connect with me on LinkedIn
                <span className="text-base">↗</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About