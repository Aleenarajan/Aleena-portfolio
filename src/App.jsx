import React, { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const faviconSet = useRef(false)

  // Update favicon and title on component mount
  useEffect(() => {
    // Update document title
    document.title = "Aleena Mariya Rajan | Portfolio";
    
    // Update favicon only once
    if (!faviconSet.current) {
      const existingLink = document.querySelector("link[rel*='icon']");
      if (existingLink) {
        existingLink.href = '/aleena-photo.jpg';
      } else {
        const link = document.createElement('link');
        link.type = 'image/jpg';
        link.rel = 'icon';
        link.href = '/aleena-photo.jpg';
        document.head.appendChild(link);
      }
      faviconSet.current = true;
    }
  }, []);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App