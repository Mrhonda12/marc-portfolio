import { useEffect } from 'react'
import Loader from './components/Loader/Loader'
import StarField from './components/StarField/StarField'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function App() {
  /* Wire up scroll-reveal for all .reveal elements */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' },
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    /* Re-run after a short delay so late-mounted elements are caught */
    const t = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) =>
        observer.observe(el),
      )
    }, 300)

    return () => {
      observer.disconnect()
      clearTimeout(t)
    }
  }, [])

  return (
    <>
      <Loader />
      <StarField />
      <Navbar />
      <main id="top">
        <Hero />
        <hr className="sep" />
        <About />
        <hr className="sep" />
        <Skills />
        <hr className="sep" />
        <Projects />
        <hr className="sep" />
        <Services />
        <hr className="sep" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
