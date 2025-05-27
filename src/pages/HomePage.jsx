import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Hero-section'
import AboutSection from '../components/About-section'
import StatSection from '../components/stat-section'
import Timeline from '../components/timeline'
import Footer from '../components/footer'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatSection />
      <Timeline />
      <Footer />
    </div>
  )
}
