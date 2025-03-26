// pages/index.js
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Publications from '../components/Publications'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Publications />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
