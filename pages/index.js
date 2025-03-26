// pages/index.js
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About' // Includes Education, Experience, Skills, and Publications
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About /> {/* This already includes Education, Experience, Skills, and Publications */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
