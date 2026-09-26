import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Coding from './components/Coding'
import Skills from './components/Skills'
import About from './components/About'
import Education from './components/Education'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  return (
    <div id="top" className="min-h-screen bg-white text-[#101828]">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Coding />
        <Skills />
        <About />
        <Education />
        <Resume />
        <Contact />
      </main>

      <footer className="border-t border-[#E4E7EC] bg-white px-6 py-10 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div>
            <h3 className="text-lg font-semibold text-[#101828]">
              Pavan S
            </h3>

            <p className="mt-1 text-sm text-[#667085]">
              AI/ML · Full Stack Developer
            </p>

            <p className="mt-2 text-sm text-[#667085]">
              shanthappaiah@gmail.com
            </p>
          </div>

          <div className="text-sm text-[#667085]">
            © 2026 Pavan S. All rights reserved.
          </div>

        </div>
      </footer>
    </div>
  )
}

export default App