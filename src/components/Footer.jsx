import React from 'react'
import { motion } from 'framer-motion'

const links = {
  'Quick Links': ['Home', 'Products', 'Nutrition', 'Sustainability', 'About'],
  'Information': ['Allergens', 'Packaging']
}

export default function Footer() {
  const handleNav = (e, item) => {
    e.preventDefault()
    const id = '#' + item.toLowerCase().replace(/ /g, '-')
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center">
              <img src="/logo.png" alt="P-Cakes" className="h-16 object-contain" />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Plant-powered pancakes made with premium ingredients
              for a healthier you and a better planet.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">{heading}</h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                      onClick={(e) => handleNav(e, item)}
                      className="text-sm text-gray-400 hover:text-green transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-green group-hover:w-3 transition-all duration-200" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} P-Cakes. All rights reserved.
        </p>
        <div className="text-xs text-gray-500">
          Good for you. Good for the planet.
        </div>
      </div>
    </footer>
  )
}
