import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Hero() {
  const scroll = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-green/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-brown/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
        {/* Text */}
        <div className="flex flex-col gap-6 lg:gap-8">
          <motion.div variants={fadeUp} custom={0} initial="hidden" animate="show"
            className="inline-flex items-center gap-2 bg-green/10 border border-green/20 rounded-full px-4 py-1.5 w-fit">
            <span className="w-2 h-2 bg-green rounded-full animate-pulse" />
            <span className="text-green text-sm font-semibold tracking-wide">100% Plant-Based</span>
          </motion.div>

          <motion.div variants={fadeUp} custom={1} initial="hidden" animate="show">
            <img src="/logo.png" alt="P-Cakes" className="w-48 md:w-64 lg:w-80 object-contain" />
          </motion.div>

          <motion.p variants={fadeUp} custom={2} initial="hidden" animate="show"
            className="text-[clamp(1rem,2.5vw,1.3rem)] font-bold text-brown tracking-widest uppercase">
            Plant Powered. Better For You.
          </motion.p>

          <motion.p variants={fadeUp} custom={3} initial="hidden" animate="show"
            className="text-base md:text-lg text-gray-600 font-light max-w-md leading-relaxed">
            Healthy vegan pancakes made from oat milk, pea protein and natural plant-based ingredients. Delicious, nutritious, kind to the planet.
          </motion.p>

          <motion.div variants={fadeUp} custom={4} initial="hidden" animate="show" className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => scroll('#products')}
              className="group flex items-center justify-center gap-2 bg-green text-white font-semibold px-8 py-4 rounded-full hover:bg-green-dark transition-all duration-300 shadow-lg hover:shadow-green/30 hover:shadow-xl hover:-translate-y-1 text-base">
              Explore Our Range
              <HiArrowDown className="group-hover:translate-y-1 transition-transform" />
            </button>
            <button onClick={() => scroll('#about')}
              className="flex items-center justify-center gap-2 bg-white text-gray-800 font-semibold px-8 py-4 rounded-full hover:bg-cream-dark transition-all duration-300 border border-gray-200 hover:border-green/30 hover:-translate-y-1 text-base">
              Our Story
            </button>
          </motion.div>

          <motion.div variants={fadeUp} custom={5} initial="hidden" animate="show" className="flex gap-8 pt-4">
            {[{ label: 'Calories', value: '220kcal' }, { label: 'Protein', value: '8g' }, { label: 'Plant Based', value: '100%' }].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-xl md:text-2xl font-black text-gray-900">{s.value}</span>
                <span className="text-xs text-gray-500 font-medium">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Image */}
        <motion.div initial={{ opacity: 0, scale: 0.85, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative flex items-center justify-center lg:justify-end">
          <div className="absolute w-[380px] h-[380px] md:w-[520px] md:h-[520px] rounded-full border-2 border-green/15 animate-spin" style={{ animationDuration: '25s' }} />
          <div className="absolute w-[320px] h-[320px] md:w-[440px] md:h-[440px] rounded-full border border-brown/10 animate-spin" style={{ animationDuration: '18s', animationDirection: 'reverse' }} />

          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden shadow-2xl border-4 border-white">
            <img src="/pancake2.jpeg" alt="P-Cakes — real pancakes" className="w-full h-full object-cover scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-green/20 to-transparent" />
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
            className="absolute top-4 right-4 md:top-8 md:right-0 bg-white rounded-2xl shadow-xl px-4 py-3 flex flex-col items-center">
            <span className="text-2xl font-black text-green">✓</span>
            <span className="text-xs font-bold text-gray-700 text-center leading-tight">Certified<br/>Vegan</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, type: 'spring', stiffness: 200 }}
            className="absolute bottom-8 -left-4 md:bottom-16 md:-left-4 bg-green rounded-2xl shadow-xl px-4 py-3 text-white">
            <div className="text-xl font-black">🌱</div>
            <div className="text-xs font-bold">Plant Based</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-gray-400 font-medium tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-gray-300 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-green rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}