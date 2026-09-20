function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F8FAFC] px-6 py-24 md:px-10 lg:px-16"
    >
      {/* Subtle Grid Background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
          [background-image:linear-gradient(#E4E7EC_1px,transparent_1px),linear-gradient(90deg,#E4E7EC_1px,transparent_1px)]
          [background-size:52px_52px]
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* ================================
            SECTION HEADING
        ================================= */}

        <div className="flex items-center gap-5">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#101828] md:text-4xl">
            <span className="text-[#356AE6]">#</span>
            contact
          </h2>

          <div className="h-px flex-1 bg-[#D0D5DD]" />
        </div>


        {/* ================================
            INTRODUCTION
        ================================= */}

        <p className="mt-14 max-w-2xl text-base leading-8 text-[#667085] md:text-lg">
          I'm open to internship and full-time opportunities in
          AI/ML and software development. Feel free to reach out
          for collaborations, projects, or just a tech chat!
        </p>


        {/* ================================
            CONTACT CONTENT
        ================================= */}

        <div className="mt-10 grid gap-6 lg:grid-cols-2">


          {/* =================================
              SOCIAL LINKS
          ================================= */}

          <div
            className="
              border
              border-[#D0D5DD]
              bg-white/80
              p-7
              backdrop-blur-sm
              transition-all
              duration-300
              hover:border-[#B2CCFF]
              hover:shadow-lg
              md:p-8
            "
          >

            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#101828]">
              Social Links
            </h3>


            <div className="mt-7 space-y-2">


              {/* ================= GITHUB ================= */}

              <a
                href="https://github.com/pavanshanthappaiah"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  px-3
                  py-3
                  transition-all
                  duration-300
                  hover:bg-[#F2F4F7]
                "
              >

                <div className="flex items-center gap-4">

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#F2F4F7]
                      text-sm
                      font-bold
                      text-[#344054]
                      transition-all
                      duration-300
                      group-hover:bg-[#E8F0FF]
                      group-hover:text-[#356AE6]
                    "
                  >
                    GH
                  </span>

                  <span
                    className="
                      text-sm
                      font-medium
                      text-[#475467]
                      transition-colors
                      duration-300
                      group-hover:text-[#356AE6]
                    "
                  >
                    GitHub
                  </span>

                </div>

                <span
                  className="
                    text-[#98A2B3]
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-[#356AE6]
                  "
                >
                  ↗
                </span>

              </a>


              {/* ================= LINKEDIN ================= */}

              <a
                href="https://www.linkedin.com/in/pavanshanthappaiah/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  px-3
                  py-3
                  transition-all
                  duration-300
                  hover:bg-[#F2F4F7]
                "
              >

                <div className="flex items-center gap-4">

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#F2F4F7]
                      text-xs
                      font-bold
                      text-[#344054]
                      transition-all
                      duration-300
                      group-hover:bg-[#E8F0FF]
                      group-hover:text-[#356AE6]
                    "
                  >
                    in
                  </span>

                  <span
                    className="
                      text-sm
                      font-medium
                      text-[#475467]
                      transition-colors
                      duration-300
                      group-hover:text-[#356AE6]
                    "
                  >
                    LinkedIn
                  </span>

                </div>

                <span
                  className="
                    text-[#98A2B3]
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-[#356AE6]
                  "
                >
                  ↗
                </span>

              </a>


              {/* ================= LEETCODE ================= */}

              <a
                href="https://leetcode.com/u/pa1_2005/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  px-3
                  py-3
                  transition-all
                  duration-300
                  hover:bg-[#F2F4F7]
                "
              >

                <div className="flex items-center gap-4">

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#F2F4F7]
                      text-xs
                      font-bold
                      text-[#344054]
                      transition-all
                      duration-300
                      group-hover:bg-[#E8F0FF]
                      group-hover:text-[#356AE6]
                    "
                  >
                    LC
                  </span>

                  <span
                    className="
                      text-sm
                      font-medium
                      text-[#475467]
                      transition-colors
                      duration-300
                      group-hover:text-[#356AE6]
                    "
                  >
                    LeetCode
                  </span>

                </div>

                <span
                  className="
                    text-[#98A2B3]
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-[#356AE6]
                  "
                >
                  ↗
                </span>

              </a>


              {/* ================= EMAIL ================= */}

              <a
                href="mailto:shanthappaiah@gmail.com"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  px-3
                  py-3
                  transition-all
                  duration-300
                  hover:bg-[#F2F4F7]
                "
              >

                <div className="flex items-center gap-4">

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#F2F4F7]
                      text-xs
                      font-bold
                      text-[#344054]
                      transition-all
                      duration-300
                      group-hover:bg-[#E8F0FF]
                      group-hover:text-[#356AE6]
                    "
                  >
                    @
                  </span>

                  <span
                    className="
                      text-sm
                      font-medium
                      text-[#475467]
                      transition-colors
                      duration-300
                      group-hover:text-[#356AE6]
                    "
                  >
                    shanthappaiah@gmail.com
                  </span>

                </div>

                <span
                  className="
                    text-[#98A2B3]
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-[#356AE6]
                  "
                >
                  ↗
                </span>

              </a>


              {/* ================= PHONE ================= */}

              <a
                href="tel:+916362562513"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  px-3
                  py-3
                  transition-all
                  duration-300
                  hover:bg-[#F2F4F7]
                "
              >

                <div className="flex items-center gap-4">

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#F2F4F7]
                      text-xs
                      font-bold
                      text-[#344054]
                      transition-all
                      duration-300
                      group-hover:bg-[#E8F0FF]
                      group-hover:text-[#356AE6]
                    "
                  >
                    ☎
                  </span>

                  <span
                    className="
                      text-sm
                      font-medium
                      text-[#475467]
                      transition-colors
                      duration-300
                      group-hover:text-[#356AE6]
                    "
                  >
                    +91 63625 62513
                  </span>

                </div>

                <span
                  className="
                    text-[#98A2B3]
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-[#356AE6]
                  "
                >
                  ↗
                </span>

              </a>

            </div>

          </div>


          {/* =================================
              CONTACT FORM
          ================================= */}

          <div
            className="
              border
              border-[#D0D5DD]
              bg-white/80
              p-7
              backdrop-blur-sm
              transition-all
              duration-300
              hover:border-[#B2CCFF]
              hover:shadow-lg
              md:p-8
            "
          >

            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#101828]">
              Reach Me Out
            </h3>


            <form
              className="mt-7 space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >

              {/* Name */}
              <div>

                <label
                  htmlFor="name"
                  className="
                    mb-2
                    block
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#344054]
                  "
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="
                    w-full
                    border
                    border-[#D0D5DD]
                    bg-[#F8FAFC]
                    px-4
                    py-3.5
                    text-sm
                    text-[#101828]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-[#98A2B3]
                    focus:border-[#356AE6]
                    focus:bg-white
                    focus:ring-2
                    focus:ring-[#E8F0FF]
                  "
                />

              </div>


              {/* Email */}
              <div>

                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#344054]
                  "
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="
                    w-full
                    border
                    border-[#D0D5DD]
                    bg-[#F8FAFC]
                    px-4
                    py-3.5
                    text-sm
                    text-[#101828]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-[#98A2B3]
                    focus:border-[#356AE6]
                    focus:bg-white
                    focus:ring-2
                    focus:ring-[#E8F0FF]
                  "
                />

              </div>


              {/* Message */}
              <div>

                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#344054]
                  "
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your message here..."
                  className="
                    w-full
                    resize-none
                    border
                    border-[#D0D5DD]
                    bg-[#F8FAFC]
                    px-4
                    py-3.5
                    text-sm
                    text-[#101828]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-[#98A2B3]
                    focus:border-[#356AE6]
                    focus:bg-white
                    focus:ring-2
                    focus:ring-[#E8F0FF]
                  "
                />

              </div>


              {/* Send Button */}
              <button
                type="submit"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  border
                  border-[#356AE6]
                  bg-[#356AE6]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#2454C7]
                  hover:shadow-lg
                "
              >
                Send Message

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>

              </button>

            </form>

          </div>

        </div>


        {/* ================================
            FOOTER
        ================================= */}

        <div
          className="
            mt-20
            flex
            flex-col
            justify-between
            gap-3
            border-t
            border-[#D0D5DD]
            pt-6
            text-xs
            text-[#98A2B3]
            md:flex-row
          "
        >

          <p>
            © {new Date().getFullYear()} Pavan S
          </p>

        </div>

      </div>
    </section>
  )
}

export default Contact