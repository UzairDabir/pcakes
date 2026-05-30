import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Nutrition from './components/Nutrition'
import HealthBenefits from './components/HealthBenefits'
import Sustainability from './components/Sustainability'
import Packaging from './components/Packaging'
import Allergens from './components/Allergens'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-poppins bg-cream overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Nutrition />
        <HealthBenefits />
        <Sustainability />
        <Packaging />
        <Allergens />
      </main>
      <Footer />
    </div>
  )
}
